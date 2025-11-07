// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PullReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, enables distributed checksum storage. For more information, see [Optimizing Repository Replication with Checksum-Based Storage](https://www.jfrog.com/confluence/display/JFROG/Repository+Replication#RepositoryReplication-OptimizingRepositoryReplicationUsingStorageLevelSynchronizationOptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#check_binary_existence_in_filestore PullReplication#check_binary_existence_in_filestore}
  */
  readonly checkBinaryExistenceInFilestore?: boolean | cdktf.IResolvable;
  /**
  * The Cron expression that determines when the next replication will be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#cron_exp PullReplication#cron_exp}
  */
  readonly cronExp?: string;
  /**
  * When set, each event will trigger replication of the artifacts changed in this event. This can be any type of event on artifact, e.g. add, deleted or property change. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#enable_event_replication PullReplication#enable_event_replication}
  */
  readonly enableEventReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#enabled PullReplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#id PullReplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password for local repository replication. Required for local repository, but not needed for remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#password PullReplication#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#path_prefix PullReplication#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Proxy key from Artifactory Proxies setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#proxy PullReplication#proxy}
  */
  readonly proxy?: string;
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#repo_key PullReplication#repo_key}
  */
  readonly repoKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#socket_timeout_millis PullReplication#socket_timeout_millis}
  */
  readonly socketTimeoutMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#sync_deletes PullReplication#sync_deletes}
  */
  readonly syncDeletes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#sync_properties PullReplication#sync_properties}
  */
  readonly syncProperties?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#sync_statistics PullReplication#sync_statistics}
  */
  readonly syncStatistics?: boolean | cdktf.IResolvable;
  /**
  * URL for local repository replication. Required for local repository, but not needed for remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#url PullReplication#url}
  */
  readonly url?: string;
  /**
  * Username for local repository replication. Required for local repository, but not needed for remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#username PullReplication#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication artifactory_pull_replication}
*/
export class PullReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_pull_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PullReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PullReplication to import
  * @param importFromId The id of the existing PullReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PullReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_pull_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/pull_replication artifactory_pull_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PullReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: PullReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_pull_replication',
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
    this._checkBinaryExistenceInFilestore = config.checkBinaryExistenceInFilestore;
    this._cronExp = config.cronExp;
    this._enableEventReplication = config.enableEventReplication;
    this._enabled = config.enabled;
    this._id = config.id;
    this._password = config.password;
    this._pathPrefix = config.pathPrefix;
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

  // check_binary_existence_in_filestore - computed: false, optional: true, required: false
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

  // cron_exp - computed: false, optional: true, required: false
  private _cronExp?: string; 
  public get cronExp() {
    return this.getStringAttribute('cron_exp');
  }
  public set cronExp(value: string) {
    this._cronExp = value;
  }
  public resetCronExp() {
    this._cronExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpInput() {
    return this._cronExp;
  }

  // enable_event_replication - computed: false, optional: true, required: false
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

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_binary_existence_in_filestore: cdktf.booleanToTerraform(this._checkBinaryExistenceInFilestore),
      cron_exp: cdktf.stringToTerraform(this._cronExp),
      enable_event_replication: cdktf.booleanToTerraform(this._enableEventReplication),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      path_prefix: cdktf.stringToTerraform(this._pathPrefix),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      path_prefix: {
        value: cdktf.stringToHclTerraform(this._pathPrefix),
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
