// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalRepositoryMultiReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A valid CRON expression that you can use to control replication frequency. Eg: `0 0 12 * * ? *`, `0 0 2 ? * MON-SAT *`. Note: use 6 or 7 parts format - Seconds, Minutes Hours, Day Of Month, Month, Day Of Week, Year (optional). Specifying both a day-of-week AND a day-of-month parameter is not supported. One of them should be replaced by `?`. Incorrect: `* 5,7,9 14/2 * * WED,SAT *`, correct: `* 5,7,9 14/2 ? * WED,SAT *`. See details in [Cron Trigger Tutorial](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#cron_exp LocalRepositoryMultiReplication#cron_exp}
  */
  readonly cronExp: string;
  /**
  * When set, each event will trigger replication of the artifacts changed in this event. This can be any type of event on artifact, e.g. add, deleted or property change. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#enable_event_replication LocalRepositoryMultiReplication#enable_event_replication}
  */
  readonly enableEventReplication?: boolean | cdktf.IResolvable;
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#repo_key LocalRepositoryMultiReplication#repo_key}
  */
  readonly repoKey: string;
  /**
  * replication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#replication LocalRepositoryMultiReplication#replication}
  */
  readonly replication?: LocalRepositoryMultiReplicationReplication[] | cdktf.IResolvable;
}
export interface LocalRepositoryMultiReplicationReplication {
  /**
  * Enabling the `check_binary_existence_in_filestore` flag requires an Enterprise+ license. When true, enables distributed checksum storage. For more information, see [Optimizing Repository Replication with Checksum-Based Storage](https://www.jfrog.com/confluence/display/JFROG/Repository+Replication#RepositoryReplication-OptimizingRepositoryReplicationUsingStorageLevelSynchronizationOptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#check_binary_existence_in_filestore LocalRepositoryMultiReplication#check_binary_existence_in_filestore}
  */
  readonly checkBinaryExistenceInFilestore?: boolean | cdktf.IResolvable;
  /**
  * When set to `true`, the `proxy` attribute will be ignored (from version 7.41.7). The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#disable_proxy LocalRepositoryMultiReplication#disable_proxy}
  */
  readonly disableProxy?: boolean | cdktf.IResolvable;
  /**
  * When set, enables replication of this repository to the target specified in `url` attribute. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#enabled LocalRepositoryMultiReplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of artifact patterns to exclude when evaluating artifact requests, in the form of x/y/** /z/*. By default no artifacts are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#exclude_path_prefix_pattern LocalRepositoryMultiReplication#exclude_path_prefix_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly excludePathPrefixPattern?: string;
  /**
  * List of artifact patterns to include when evaluating artifact requests in the form of x/y/** /z/*. When used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (** /*).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#include_path_prefix_pattern LocalRepositoryMultiReplication#include_path_prefix_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly includePathPrefixPattern?: string;
  /**
  * Use either the HTTP authentication password or identity token (https://www.jfrog.com/confluence/display/JFROG/User+Profile#UserProfile-IdentityTokenidentitytoken).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#password LocalRepositoryMultiReplication#password}
  */
  readonly password?: string;
  /**
  * A proxy configuration to use when communicating with the remote instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#proxy LocalRepositoryMultiReplication#proxy}
  */
  readonly proxy?: string;
  /**
  * The network timeout in milliseconds to use for remote operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#socket_timeout_millis LocalRepositoryMultiReplication#socket_timeout_millis}
  */
  readonly socketTimeoutMillis?: number;
  /**
  * When set, items that were deleted locally should also be deleted remotely (also applies to properties metadata). Note that enabling this option, will delete artifacts on the target that do not exist in the source repository. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#sync_deletes LocalRepositoryMultiReplication#sync_deletes}
  */
  readonly syncDeletes?: boolean | cdktf.IResolvable;
  /**
  * When set, the task also synchronizes the properties of replicated artifacts. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#sync_properties LocalRepositoryMultiReplication#sync_properties}
  */
  readonly syncProperties?: boolean | cdktf.IResolvable;
  /**
  * When set, the task also synchronizes artifact download statistics. Set to avoid inadvertent cleanup at the target instance when setting up replication for disaster recovery. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#sync_statistics LocalRepositoryMultiReplication#sync_statistics}
  */
  readonly syncStatistics?: boolean | cdktf.IResolvable;
  /**
  * The URL of the target local repository on a remote Artifactory server. Use the format `https://<artifactory_url>/artifactory/<repository_name>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#url LocalRepositoryMultiReplication#url}
  */
  readonly url: string;
  /**
  * The HTTP authentication username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#username LocalRepositoryMultiReplication#username}
  */
  readonly username: string;
}

export function localRepositoryMultiReplicationReplicationToTerraform(struct?: LocalRepositoryMultiReplicationReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_binary_existence_in_filestore: cdktf.booleanToTerraform(struct!.checkBinaryExistenceInFilestore),
    disable_proxy: cdktf.booleanToTerraform(struct!.disableProxy),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_path_prefix_pattern: cdktf.stringToTerraform(struct!.excludePathPrefixPattern),
    include_path_prefix_pattern: cdktf.stringToTerraform(struct!.includePathPrefixPattern),
    password: cdktf.stringToTerraform(struct!.password),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    socket_timeout_millis: cdktf.numberToTerraform(struct!.socketTimeoutMillis),
    sync_deletes: cdktf.booleanToTerraform(struct!.syncDeletes),
    sync_properties: cdktf.booleanToTerraform(struct!.syncProperties),
    sync_statistics: cdktf.booleanToTerraform(struct!.syncStatistics),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function localRepositoryMultiReplicationReplicationToHclTerraform(struct?: LocalRepositoryMultiReplicationReplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_binary_existence_in_filestore: {
      value: cdktf.booleanToHclTerraform(struct!.checkBinaryExistenceInFilestore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.disableProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_path_prefix_pattern: {
      value: cdktf.stringToHclTerraform(struct!.excludePathPrefixPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_path_prefix_pattern: {
      value: cdktf.stringToHclTerraform(struct!.includePathPrefixPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket_timeout_millis: {
      value: cdktf.numberToHclTerraform(struct!.socketTimeoutMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_deletes: {
      value: cdktf.booleanToHclTerraform(struct!.syncDeletes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_properties: {
      value: cdktf.booleanToHclTerraform(struct!.syncProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_statistics: {
      value: cdktf.booleanToHclTerraform(struct!.syncStatistics),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LocalRepositoryMultiReplicationReplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LocalRepositoryMultiReplicationReplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkBinaryExistenceInFilestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkBinaryExistenceInFilestore = this._checkBinaryExistenceInFilestore;
    }
    if (this._disableProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProxy = this._disableProxy;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludePathPrefixPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePathPrefixPattern = this._excludePathPrefixPattern;
    }
    if (this._includePathPrefixPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePathPrefixPattern = this._includePathPrefixPattern;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._socketTimeoutMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketTimeoutMillis = this._socketTimeoutMillis;
    }
    if (this._syncDeletes !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncDeletes = this._syncDeletes;
    }
    if (this._syncProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncProperties = this._syncProperties;
    }
    if (this._syncStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncStatistics = this._syncStatistics;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LocalRepositoryMultiReplicationReplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkBinaryExistenceInFilestore = undefined;
      this._disableProxy = undefined;
      this._enabled = undefined;
      this._excludePathPrefixPattern = undefined;
      this._includePathPrefixPattern = undefined;
      this._password = undefined;
      this._proxy = undefined;
      this._socketTimeoutMillis = undefined;
      this._syncDeletes = undefined;
      this._syncProperties = undefined;
      this._syncStatistics = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkBinaryExistenceInFilestore = value.checkBinaryExistenceInFilestore;
      this._disableProxy = value.disableProxy;
      this._enabled = value.enabled;
      this._excludePathPrefixPattern = value.excludePathPrefixPattern;
      this._includePathPrefixPattern = value.includePathPrefixPattern;
      this._password = value.password;
      this._proxy = value.proxy;
      this._socketTimeoutMillis = value.socketTimeoutMillis;
      this._syncDeletes = value.syncDeletes;
      this._syncProperties = value.syncProperties;
      this._syncStatistics = value.syncStatistics;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // check_binary_existence_in_filestore - computed: true, optional: true, required: false
  private _checkBinaryExistenceInFilestore?: boolean | cdktf.IResolvable; 
  public get checkBinaryExistenceInFilestore() {
    return this.getBooleanAttribute('check_binary_existence_in_filestore');
  }
  public set checkBinaryExistenceInFilestore(value: boolean | cdktf.IResolvable) {
    this._checkBinaryExistenceInFilestore = value;
  }
  public resetCheckBinaryExistenceInFilestore() {
    this._checkBinaryExistenceInFilestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkBinaryExistenceInFilestoreInput() {
    return this._checkBinaryExistenceInFilestore;
  }

  // disable_proxy - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // exclude_path_prefix_pattern - computed: true, optional: true, required: false
  private _excludePathPrefixPattern?: string; 
  public get excludePathPrefixPattern() {
    return this.getStringAttribute('exclude_path_prefix_pattern');
  }
  public set excludePathPrefixPattern(value: string) {
    this._excludePathPrefixPattern = value;
  }
  public resetExcludePathPrefixPattern() {
    this._excludePathPrefixPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathPrefixPatternInput() {
    return this._excludePathPrefixPattern;
  }

  // include_path_prefix_pattern - computed: true, optional: true, required: false
  private _includePathPrefixPattern?: string; 
  public get includePathPrefixPattern() {
    return this.getStringAttribute('include_path_prefix_pattern');
  }
  public set includePathPrefixPattern(value: string) {
    this._includePathPrefixPattern = value;
  }
  public resetIncludePathPrefixPattern() {
    this._includePathPrefixPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePathPrefixPatternInput() {
    return this._includePathPrefixPattern;
  }

  // password - computed: true, optional: true, required: false
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

  // proxy - computed: true, optional: true, required: false
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

  // replication_key - computed: true, optional: false, required: false
  public get replicationKey() {
    return this.getStringAttribute('replication_key');
  }

  // socket_timeout_millis - computed: true, optional: true, required: false
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

  // sync_deletes - computed: true, optional: true, required: false
  private _syncDeletes?: boolean | cdktf.IResolvable; 
  public get syncDeletes() {
    return this.getBooleanAttribute('sync_deletes');
  }
  public set syncDeletes(value: boolean | cdktf.IResolvable) {
    this._syncDeletes = value;
  }
  public resetSyncDeletes() {
    this._syncDeletes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncDeletesInput() {
    return this._syncDeletes;
  }

  // sync_properties - computed: true, optional: true, required: false
  private _syncProperties?: boolean | cdktf.IResolvable; 
  public get syncProperties() {
    return this.getBooleanAttribute('sync_properties');
  }
  public set syncProperties(value: boolean | cdktf.IResolvable) {
    this._syncProperties = value;
  }
  public resetSyncProperties() {
    this._syncProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPropertiesInput() {
    return this._syncProperties;
  }

  // sync_statistics - computed: true, optional: true, required: false
  private _syncStatistics?: boolean | cdktf.IResolvable; 
  public get syncStatistics() {
    return this.getBooleanAttribute('sync_statistics');
  }
  public set syncStatistics(value: boolean | cdktf.IResolvable) {
    this._syncStatistics = value;
  }
  public resetSyncStatistics() {
    this._syncStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStatisticsInput() {
    return this._syncStatistics;
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
}

export class LocalRepositoryMultiReplicationReplicationList extends cdktf.ComplexList {
  public internalValue? : LocalRepositoryMultiReplicationReplication[] | cdktf.IResolvable

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
  public get(index: number): LocalRepositoryMultiReplicationReplicationOutputReference {
    return new LocalRepositoryMultiReplicationReplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication artifactory_local_repository_multi_replication}
*/
export class LocalRepositoryMultiReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_local_repository_multi_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalRepositoryMultiReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalRepositoryMultiReplication to import
  * @param importFromId The id of the existing LocalRepositoryMultiReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalRepositoryMultiReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_local_repository_multi_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/local_repository_multi_replication artifactory_local_repository_multi_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalRepositoryMultiReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: LocalRepositoryMultiReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_local_repository_multi_replication',
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
    this._cronExp = config.cronExp;
    this._enableEventReplication = config.enableEventReplication;
    this._repoKey = config.repoKey;
    this._replication.internalValue = config.replication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_exp - computed: false, optional: false, required: true
  private _cronExp?: string; 
  public get cronExp() {
    return this.getStringAttribute('cron_exp');
  }
  public set cronExp(value: string) {
    this._cronExp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpInput() {
    return this._cronExp;
  }

  // enable_event_replication - computed: true, optional: true, required: false
  private _enableEventReplication?: boolean | cdktf.IResolvable; 
  public get enableEventReplication() {
    return this.getBooleanAttribute('enable_event_replication');
  }
  public set enableEventReplication(value: boolean | cdktf.IResolvable) {
    this._enableEventReplication = value;
  }
  public resetEnableEventReplication() {
    this._enableEventReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventReplicationInput() {
    return this._enableEventReplication;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repo_key - computed: false, optional: false, required: true
  private _repoKey?: string; 
  public get repoKey() {
    return this.getStringAttribute('repo_key');
  }
  public set repoKey(value: string) {
    this._repoKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoKeyInput() {
    return this._repoKey;
  }

  // replication - computed: false, optional: true, required: false
  private _replication = new LocalRepositoryMultiReplicationReplicationList(this, "replication", false);
  public get replication() {
    return this._replication;
  }
  public putReplication(value: LocalRepositoryMultiReplicationReplication[] | cdktf.IResolvable) {
    this._replication.internalValue = value;
  }
  public resetReplication() {
    this._replication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_exp: cdktf.stringToTerraform(this._cronExp),
      enable_event_replication: cdktf.booleanToTerraform(this._enableEventReplication),
      repo_key: cdktf.stringToTerraform(this._repoKey),
      replication: cdktf.listMapper(localRepositoryMultiReplicationReplicationToTerraform, true)(this._replication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_exp: {
        value: cdktf.stringToHclTerraform(this._cronExp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_event_replication: {
        value: cdktf.booleanToHclTerraform(this._enableEventReplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repo_key: {
        value: cdktf.stringToHclTerraform(this._repoKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication: {
        value: cdktf.listMapperHcl(localRepositoryMultiReplicationReplicationToHclTerraform, true)(this._replication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LocalRepositoryMultiReplicationReplicationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
