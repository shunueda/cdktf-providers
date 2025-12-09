// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PushReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cron expression to control the operation frequency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#cron_exp PushReplication#cron_exp}
  */
  readonly cronExp: string;
  /**
  * When set, each event will trigger replication of the artifacts changed in this event. This can be any type of event on artifact, e.g. add, deleted or property change. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#enable_event_replication PushReplication#enable_event_replication}
  */
  readonly enableEventReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#id PushReplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#repo_key PushReplication#repo_key}
  */
  readonly repoKey: string;
  /**
  * replications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#replications PushReplication#replications}
  */
  readonly replications?: PushReplicationReplications[] | cdktf.IResolvable;
}
export interface PushReplicationReplications {
  /**
  * When true, enables distributed checksum storage. For more information, see [Optimizing Repository Replication with Checksum-Based Storage](https://www.jfrog.com/confluence/display/JFROG/Repository+Replication#RepositoryReplication-OptimizingRepositoryReplicationUsingStorageLevelSynchronizationOptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#check_binary_existence_in_filestore PushReplication#check_binary_existence_in_filestore}
  */
  readonly checkBinaryExistenceInFilestore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#enabled PushReplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Password for push replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#password PushReplication#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#path_prefix PushReplication#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Proxy key from Artifactory Proxies setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#proxy PushReplication#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#socket_timeout_millis PushReplication#socket_timeout_millis}
  */
  readonly socketTimeoutMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#sync_deletes PushReplication#sync_deletes}
  */
  readonly syncDeletes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#sync_properties PushReplication#sync_properties}
  */
  readonly syncProperties?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#sync_statistics PushReplication#sync_statistics}
  */
  readonly syncStatistics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#url PushReplication#url}
  */
  readonly url: string;
  /**
  * Username for push replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#username PushReplication#username}
  */
  readonly username: string;
}

export function pushReplicationReplicationsToTerraform(struct?: PushReplicationReplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_binary_existence_in_filestore: cdktf.booleanToTerraform(struct!.checkBinaryExistenceInFilestore),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    socket_timeout_millis: cdktf.numberToTerraform(struct!.socketTimeoutMillis),
    sync_deletes: cdktf.booleanToTerraform(struct!.syncDeletes),
    sync_properties: cdktf.booleanToTerraform(struct!.syncProperties),
    sync_statistics: cdktf.booleanToTerraform(struct!.syncStatistics),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function pushReplicationReplicationsToHclTerraform(struct?: PushReplicationReplications | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
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

export class PushReplicationReplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PushReplicationReplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkBinaryExistenceInFilestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkBinaryExistenceInFilestore = this._checkBinaryExistenceInFilestore;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
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

  public set internalValue(value: PushReplicationReplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkBinaryExistenceInFilestore = undefined;
      this._enabled = undefined;
      this._password = undefined;
      this._pathPrefix = undefined;
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
      this._enabled = value.enabled;
      this._password = value.password;
      this._pathPrefix = value.pathPrefix;
      this._proxy = value.proxy;
      this._socketTimeoutMillis = value.socketTimeoutMillis;
      this._syncDeletes = value.syncDeletes;
      this._syncProperties = value.syncProperties;
      this._syncStatistics = value.syncStatistics;
      this._url = value.url;
      this._username = value.username;
    }
  }

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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
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

export class PushReplicationReplicationsList extends cdktf.ComplexList {
  public internalValue? : PushReplicationReplications[] | cdktf.IResolvable

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
  public get(index: number): PushReplicationReplicationsOutputReference {
    return new PushReplicationReplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication artifactory_push_replication}
*/
export class PushReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_push_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PushReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PushReplication to import
  * @param importFromId The id of the existing PushReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PushReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_push_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/push_replication artifactory_push_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PushReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: PushReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_push_replication',
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
    this._id = config.id;
    this._repoKey = config.repoKey;
    this._replications.internalValue = config.replications;
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

  // replications - computed: false, optional: true, required: false
  private _replications = new PushReplicationReplicationsList(this, "replications", false);
  public get replications() {
    return this._replications;
  }
  public putReplications(value: PushReplicationReplications[] | cdktf.IResolvable) {
    this._replications.internalValue = value;
  }
  public resetReplications() {
    this._replications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationsInput() {
    return this._replications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_exp: cdktf.stringToTerraform(this._cronExp),
      enable_event_replication: cdktf.booleanToTerraform(this._enableEventReplication),
      id: cdktf.stringToTerraform(this._id),
      repo_key: cdktf.stringToTerraform(this._repoKey),
      replications: cdktf.listMapper(pushReplicationReplicationsToTerraform, true)(this._replications.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      replications: {
        value: cdktf.listMapperHcl(pushReplicationReplicationsToHclTerraform, true)(this._replications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PushReplicationReplicationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
