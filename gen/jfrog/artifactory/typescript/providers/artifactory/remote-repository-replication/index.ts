// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteRepositoryReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enabling the `check_binary_existence_in_filestore` flag requires an Enterprise+ license. When true, enables distributed checksum storage. For more information, see [Optimizing Repository Replication with Checksum-Based Storage](https://www.jfrog.com/confluence/display/JFROG/Repository+Replication#RepositoryReplication-OptimizingRepositoryReplicationUsingStorageLevelSynchronizationOptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#check_binary_existence_in_filestore RemoteRepositoryReplication#check_binary_existence_in_filestore}
  */
  readonly checkBinaryExistenceInFilestore?: boolean | cdktf.IResolvable;
  /**
  * The Cron expression that determines when the next replication will be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#cron_exp RemoteRepositoryReplication#cron_exp}
  */
  readonly cronExp?: string;
  /**
  * When set, each event will trigger replication of the artifacts changed in this event. This can be any type of event on artifact, e.g. add, deleted or property change. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#enable_event_replication RemoteRepositoryReplication#enable_event_replication}
  */
  readonly enableEventReplication?: boolean | cdktf.IResolvable;
  /**
  * When set, enables replication of this repository to the target specified in `url` attribute. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#enabled RemoteRepositoryReplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of artifact patterns to exclude when evaluating artifact requests, in the form of x/y/** /z/*. By default no artifacts are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#exclude_path_prefix_pattern RemoteRepositoryReplication#exclude_path_prefix_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly excludePathPrefixPattern?: string;
  /**
  * List of artifact patterns to include when evaluating artifact requests in the form of x/y/** /z/*. When used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (** /*).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#include_path_prefix_pattern RemoteRepositoryReplication#include_path_prefix_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly includePathPrefixPattern?: string;
  /**
  * Replication ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#replication_key RemoteRepositoryReplication#replication_key}
  */
  readonly replicationKey?: string;
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#repo_key RemoteRepositoryReplication#repo_key}
  */
  readonly repoKey: string;
  /**
  * When set, items that were deleted locally should also be deleted remotely (also applies to properties metadata). Note that enabling this option, will delete artifacts on the target that do not exist in the source repository. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#sync_deletes RemoteRepositoryReplication#sync_deletes}
  */
  readonly syncDeletes?: boolean | cdktf.IResolvable;
  /**
  * When set, the task also synchronizes the properties of replicated artifacts. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#sync_properties RemoteRepositoryReplication#sync_properties}
  */
  readonly syncProperties?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication artifactory_remote_repository_replication}
*/
export class RemoteRepositoryReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_remote_repository_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteRepositoryReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteRepositoryReplication to import
  * @param importFromId The id of the existing RemoteRepositoryReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteRepositoryReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_remote_repository_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/remote_repository_replication artifactory_remote_repository_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteRepositoryReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: RemoteRepositoryReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_remote_repository_replication',
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
    this._enableEventReplication = config.enableEventReplication;
    this._enabled = config.enabled;
    this._excludePathPrefixPattern = config.excludePathPrefixPattern;
    this._includePathPrefixPattern = config.includePathPrefixPattern;
    this._replicationKey = config.replicationKey;
    this._repoKey = config.repoKey;
    this._syncDeletes = config.syncDeletes;
    this._syncProperties = config.syncProperties;
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

  // replication_key - computed: true, optional: true, required: false
  private _replicationKey?: string; 
  public get replicationKey() {
    return this.getStringAttribute('replication_key');
  }
  public set replicationKey(value: string) {
    this._replicationKey = value;
  }
  public resetReplicationKey() {
    this._replicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationKeyInput() {
    return this._replicationKey;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_binary_existence_in_filestore: cdktf.booleanToTerraform(this._checkBinaryExistenceInFilestore),
      cron_exp: cdktf.stringToTerraform(this._cronExp),
      enable_event_replication: cdktf.booleanToTerraform(this._enableEventReplication),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_path_prefix_pattern: cdktf.stringToTerraform(this._excludePathPrefixPattern),
      include_path_prefix_pattern: cdktf.stringToTerraform(this._includePathPrefixPattern),
      replication_key: cdktf.stringToTerraform(this._replicationKey),
      repo_key: cdktf.stringToTerraform(this._repoKey),
      sync_deletes: cdktf.booleanToTerraform(this._syncDeletes),
      sync_properties: cdktf.booleanToTerraform(this._syncProperties),
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
      replication_key: {
        value: cdktf.stringToHclTerraform(this._replicationKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
