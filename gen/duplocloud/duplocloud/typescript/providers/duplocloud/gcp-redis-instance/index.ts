// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpRedisInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable OSS Redis AUTH. Defaults to false (AUTH disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#auth_enabled GcpRedisInstance#auth_enabled}
  */
  readonly authEnabled?: boolean | cdktf.IResolvable;
  /**
  * User-provided name for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#display_name GcpRedisInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#id GcpRedisInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels for user-provided metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#labels GcpRedisInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Redis memory size in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#memory_size_gb GcpRedisInstance#memory_size_gb}
  */
  readonly memorySizeGb: number;
  /**
  * Short name of the Redis instance. Duplo adds a prefix; retrieve the full name from `fullname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#name GcpRedisInstance#name}
  */
  readonly name: string;
  /**
  * Enable read replica mode (can only be set during instance creation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#read_replicas_enabled GcpRedisInstance#read_replicas_enabled}
  */
  readonly readReplicasEnabled?: boolean | cdktf.IResolvable;
  /**
  * Redis configuration parameters. See https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs for supported parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#redis_configs GcpRedisInstance#redis_configs}
  */
  readonly redisConfigs?: { [key: string]: string };
  /**
  * Version of Redis software. Defaults to the latest supported version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#redis_version GcpRedisInstance#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * Number of replica nodes. Valid range for Standard Tier with read replicas enabled is [1-5], default is 2. For basic tier, valid value is 0, default is 0. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#replica_count GcpRedisInstance#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * GUID of the tenant the Redis instance will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#tenant_id GcpRedisInstance#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Service tier. Must be one of ['BASIC', 'STANDARD_HA'].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#tier GcpRedisInstance#tier}
  */
  readonly tier: string;
  /**
  * Enable TLS for the Redis instance. Defaults to disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#transit_encryption_enabled GcpRedisInstance#transit_encryption_enabled}
  */
  readonly transitEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to wait until redis instance to be ready, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#wait_until_ready GcpRedisInstance#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#timeouts GcpRedisInstance#timeouts}
  */
  readonly timeouts?: GcpRedisInstanceTimeouts;
}
export interface GcpRedisInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#create GcpRedisInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#delete GcpRedisInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#update GcpRedisInstance#update}
  */
  readonly update?: string;
}

export function gcpRedisInstanceTimeoutsToTerraform(struct?: GcpRedisInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gcpRedisInstanceTimeoutsToHclTerraform(struct?: GcpRedisInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpRedisInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GcpRedisInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpRedisInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance duplocloud_gcp_redis_instance}
*/
export class GcpRedisInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_gcp_redis_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpRedisInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpRedisInstance to import
  * @param importFromId The id of the existing GcpRedisInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpRedisInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_gcp_redis_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_redis_instance duplocloud_gcp_redis_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpRedisInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GcpRedisInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_gcp_redis_instance',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authEnabled = config.authEnabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._memorySizeGb = config.memorySizeGb;
    this._name = config.name;
    this._readReplicasEnabled = config.readReplicasEnabled;
    this._redisConfigs = config.redisConfigs;
    this._redisVersion = config.redisVersion;
    this._replicaCount = config.replicaCount;
    this._tenantId = config.tenantId;
    this._tier = config.tier;
    this._transitEncryptionEnabled = config.transitEncryptionEnabled;
    this._waitUntilReady = config.waitUntilReady;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_enabled - computed: true, optional: true, required: false
  private _authEnabled?: boolean | cdktf.IResolvable; 
  public get authEnabled() {
    return this.getBooleanAttribute('auth_enabled');
  }
  public set authEnabled(value: boolean | cdktf.IResolvable) {
    this._authEnabled = value;
  }
  public resetAuthEnabled() {
    this._authEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEnabledInput() {
    return this._authEnabled;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // memory_size_gb - computed: false, optional: false, required: true
  private _memorySizeGb?: number; 
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }
  public set memorySizeGb(value: number) {
    this._memorySizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeGbInput() {
    return this._memorySizeGb;
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

  // read_replicas_enabled - computed: true, optional: true, required: false
  private _readReplicasEnabled?: boolean | cdktf.IResolvable; 
  public get readReplicasEnabled() {
    return this.getBooleanAttribute('read_replicas_enabled');
  }
  public set readReplicasEnabled(value: boolean | cdktf.IResolvable) {
    this._readReplicasEnabled = value;
  }
  public resetReadReplicasEnabled() {
    this._readReplicasEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readReplicasEnabledInput() {
    return this._readReplicasEnabled;
  }

  // redis_configs - computed: true, optional: true, required: false
  private _redisConfigs?: { [key: string]: string }; 
  public get redisConfigs() {
    return this.getStringMapAttribute('redis_configs');
  }
  public set redisConfigs(value: { [key: string]: string }) {
    this._redisConfigs = value;
  }
  public resetRedisConfigs() {
    this._redisConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisConfigsInput() {
    return this._redisConfigs;
  }

  // redis_version - computed: true, optional: true, required: false
  private _redisVersion?: string; 
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }
  public set redisVersion(value: string) {
    this._redisVersion = value;
  }
  public resetRedisVersion() {
    this._redisVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisVersionInput() {
    return this._redisVersion;
  }

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // transit_encryption_enabled - computed: true, optional: true, required: false
  private _transitEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get transitEncryptionEnabled() {
    return this.getBooleanAttribute('transit_encryption_enabled');
  }
  public set transitEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._transitEncryptionEnabled = value;
  }
  public resetTransitEncryptionEnabled() {
    this._transitEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionEnabledInput() {
    return this._transitEncryptionEnabled;
  }

  // wait_until_ready - computed: false, optional: true, required: false
  private _waitUntilReady?: boolean | cdktf.IResolvable; 
  public get waitUntilReady() {
    return this.getBooleanAttribute('wait_until_ready');
  }
  public set waitUntilReady(value: boolean | cdktf.IResolvable) {
    this._waitUntilReady = value;
  }
  public resetWaitUntilReady() {
    this._waitUntilReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReadyInput() {
    return this._waitUntilReady;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GcpRedisInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GcpRedisInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_enabled: cdktf.booleanToTerraform(this._authEnabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      memory_size_gb: cdktf.numberToTerraform(this._memorySizeGb),
      name: cdktf.stringToTerraform(this._name),
      read_replicas_enabled: cdktf.booleanToTerraform(this._readReplicasEnabled),
      redis_configs: cdktf.hashMapper(cdktf.stringToTerraform)(this._redisConfigs),
      redis_version: cdktf.stringToTerraform(this._redisVersion),
      replica_count: cdktf.numberToTerraform(this._replicaCount),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tier: cdktf.stringToTerraform(this._tier),
      transit_encryption_enabled: cdktf.booleanToTerraform(this._transitEncryptionEnabled),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
      timeouts: gcpRedisInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._authEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      memory_size_gb: {
        value: cdktf.numberToHclTerraform(this._memorySizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_replicas_enabled: {
        value: cdktf.booleanToHclTerraform(this._readReplicasEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redis_configs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._redisConfigs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      redis_version: {
        value: cdktf.stringToHclTerraform(this._redisVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_count: {
        value: cdktf.numberToHclTerraform(this._replicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._transitEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_until_ready: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: gcpRedisInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GcpRedisInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
