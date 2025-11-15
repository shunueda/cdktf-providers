// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalRepositorySingleReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enabling the `check_binary_existence_in_filestore` flag requires an Enterprise+ license. When true, enables distributed checksum storage. For more information, see [Optimizing Repository Replication with Checksum-Based Storage](https://www.jfrog.com/confluence/display/JFROG/Repository+Replication#RepositoryReplication-OptimizingRepositoryReplicationUsingStorageLevelSynchronizationOptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#check_binary_existence_in_filestore LocalRepositorySingleReplication#check_binary_existence_in_filestore}
  */
  readonly checkBinaryExistenceInFilestore?: boolean | cdktf.IResolvable;
  /**
  * A valid CRON expression that you can use to control replication frequency. Eg: `0 0 12 * * ? *`, `0 0 2 ? * MON-SAT *`. Note: use 6 or 7 parts format - Seconds, Minutes Hours, Day Of Month, Month, Day Of Week, Year (optional). Specifying both a day-of-week AND a day-of-month parameter is not supported. One of them should be replaced by `?`. Incorrect: `* 5,7,9 14/2 * * WED,SAT *`, correct: `* 5,7,9 14/2 ? * WED,SAT *`. See details in [Cron Trigger Tutorial](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#cron_exp LocalRepositorySingleReplication#cron_exp}
  */
  readonly cronExp: string;
  /**
  * When set to `true`, the `proxy` attribute will be ignored (from version 7.41.7). The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#disable_proxy LocalRepositorySingleReplication#disable_proxy}
  */
  readonly disableProxy?: boolean | cdktf.IResolvable;
  /**
  * When set, each event will trigger replication of the artifacts changed in this event. This can be any type of event on artifact, e.g. add, deleted or property change. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#enable_event_replication LocalRepositorySingleReplication#enable_event_replication}
  */
  readonly enableEventReplication?: boolean | cdktf.IResolvable;
  /**
  * When set, enables replication of this repository to the target specified in `url` attribute. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#enabled LocalRepositorySingleReplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of artifact patterns to exclude when evaluating artifact requests, in the form of x/y/** /z/*. By default no artifacts are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#exclude_path_prefix_pattern LocalRepositorySingleReplication#exclude_path_prefix_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly excludePathPrefixPattern?: string;
  /**
  * List of artifact patterns to include when evaluating artifact requests in the form of x/y/** /z/*. When used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (** /*).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#include_path_prefix_pattern LocalRepositorySingleReplication#include_path_prefix_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly includePathPrefixPattern?: string;
  /**
  * Use either the HTTP authentication password or identity token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#password LocalRepositorySingleReplication#password}
  */
  readonly password?: string;
  /**
  * A proxy configuration to use when communicating with the remote instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#proxy LocalRepositorySingleReplication#proxy}
  */
  readonly proxy?: string;
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#repo_key LocalRepositorySingleReplication#repo_key}
  */
  readonly repoKey: string;
  /**
  * The network timeout in milliseconds to use for remote operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#socket_timeout_millis LocalRepositorySingleReplication#socket_timeout_millis}
  */
  readonly socketTimeoutMillis?: number;
  /**
  * When set, items that were deleted locally should also be deleted remotely (also applies to properties metadata). Note that enabling this option, will delete artifacts on the target that do not exist in the source repository. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#sync_deletes LocalRepositorySingleReplication#sync_deletes}
  */
  readonly syncDeletes?: boolean | cdktf.IResolvable;
  /**
  * When set, the task also synchronizes the properties of replicated artifacts. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#sync_properties LocalRepositorySingleReplication#sync_properties}
  */
  readonly syncProperties?: boolean | cdktf.IResolvable;
  /**
  * When set, the task also synchronizes artifact download statistics. Set to avoid inadvertent cleanup at the target instance when setting up replication for disaster recovery. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#sync_statistics LocalRepositorySingleReplication#sync_statistics}
  */
  readonly syncStatistics?: boolean | cdktf.IResolvable;
  /**
  * The URL of the target local repository on a remote Artifactory server. Use the format `https://<artifactory_url>/artifactory/<repository_name>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#url LocalRepositorySingleReplication#url}
  */
  readonly url: string;
  /**
  * The HTTP authentication username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#username LocalRepositorySingleReplication#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication artifactory_local_repository_single_replication}
*/
export class LocalRepositorySingleReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_local_repository_single_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalRepositorySingleReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalRepositorySingleReplication to import
  * @param importFromId The id of the existing LocalRepositorySingleReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalRepositorySingleReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_local_repository_single_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/local_repository_single_replication artifactory_local_repository_single_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalRepositorySingleReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: LocalRepositorySingleReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_local_repository_single_replication',
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
    this._checkBinaryExistenceInFilestore = config.checkBinaryExistenceInFilestore;
    this._cronExp = config.cronExp;
    this._disableProxy = config.disableProxy;
    this._enableEventReplication = config.enableEventReplication;
    this._enabled = config.enabled;
    this._excludePathPrefixPattern = config.excludePathPrefixPattern;
    this._includePathPrefixPattern = config.includePathPrefixPattern;
    this._password = config.password;
    this._proxy = config.proxy;
    this._repoKey = config.repoKey;
    this._socketTimeoutMillis = config.socketTimeoutMillis;
    this._syncDeletes = config.syncDeletes;
    this._syncProperties = config.syncProperties;
    this._syncStatistics = config.syncStatistics;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_binary_existence_in_filestore: cdktf.booleanToTerraform(this._checkBinaryExistenceInFilestore),
      cron_exp: cdktf.stringToTerraform(this._cronExp),
      disable_proxy: cdktf.booleanToTerraform(this._disableProxy),
      enable_event_replication: cdktf.booleanToTerraform(this._enableEventReplication),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_path_prefix_pattern: cdktf.stringToTerraform(this._excludePathPrefixPattern),
      include_path_prefix_pattern: cdktf.stringToTerraform(this._includePathPrefixPattern),
      password: cdktf.stringToTerraform(this._password),
      proxy: cdktf.stringToTerraform(this._proxy),
      repo_key: cdktf.stringToTerraform(this._repoKey),
      socket_timeout_millis: cdktf.numberToTerraform(this._socketTimeoutMillis),
      sync_deletes: cdktf.booleanToTerraform(this._syncDeletes),
      sync_properties: cdktf.booleanToTerraform(this._syncProperties),
      sync_statistics: cdktf.booleanToTerraform(this._syncStatistics),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_binary_existence_in_filestore: {
        value: cdktf.booleanToHclTerraform(this._checkBinaryExistenceInFilestore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cron_exp: {
        value: cdktf.stringToHclTerraform(this._cronExp),
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
      enable_event_replication: {
        value: cdktf.booleanToHclTerraform(this._enableEventReplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_path_prefix_pattern: {
        value: cdktf.stringToHclTerraform(this._excludePathPrefixPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_path_prefix_pattern: {
        value: cdktf.stringToHclTerraform(this._includePathPrefixPattern),
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
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_key: {
        value: cdktf.stringToHclTerraform(this._repoKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      socket_timeout_millis: {
        value: cdktf.numberToHclTerraform(this._socketTimeoutMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_deletes: {
        value: cdktf.booleanToHclTerraform(this._syncDeletes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_properties: {
        value: cdktf.booleanToHclTerraform(this._syncProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_statistics: {
        value: cdktf.booleanToHclTerraform(this._syncStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
