// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/redis_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitRedisInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Redis instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/redis_instance#instance_id DataStackitRedisInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * STACKIT Project ID to which the instance is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/redis_instance#project_id DataStackitRedisInstance#project_id}
  */
  readonly projectId: string;
}
export interface DataStackitRedisInstanceParameters {
}

export function dataStackitRedisInstanceParametersToTerraform(struct?: DataStackitRedisInstanceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitRedisInstanceParametersToHclTerraform(struct?: DataStackitRedisInstanceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitRedisInstanceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitRedisInstanceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitRedisInstanceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // down_after_milliseconds - computed: true, optional: false, required: false
  public get downAfterMilliseconds() {
    return this.getNumberAttribute('down_after_milliseconds');
  }

  // enable_monitoring - computed: true, optional: false, required: false
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }

  // failover_timeout - computed: true, optional: false, required: false
  public get failoverTimeout() {
    return this.getNumberAttribute('failover_timeout');
  }

  // graphite - computed: true, optional: false, required: false
  public get graphite() {
    return this.getStringAttribute('graphite');
  }

  // lazyfree_lazy_eviction - computed: true, optional: false, required: false
  public get lazyfreeLazyEviction() {
    return this.getStringAttribute('lazyfree_lazy_eviction');
  }

  // lazyfree_lazy_expire - computed: true, optional: false, required: false
  public get lazyfreeLazyExpire() {
    return this.getStringAttribute('lazyfree_lazy_expire');
  }

  // lua_time_limit - computed: true, optional: false, required: false
  public get luaTimeLimit() {
    return this.getNumberAttribute('lua_time_limit');
  }

  // max_disk_threshold - computed: true, optional: false, required: false
  public get maxDiskThreshold() {
    return this.getNumberAttribute('max_disk_threshold');
  }

  // maxclients - computed: true, optional: false, required: false
  public get maxclients() {
    return this.getNumberAttribute('maxclients');
  }

  // maxmemory_policy - computed: true, optional: false, required: false
  public get maxmemoryPolicy() {
    return this.getStringAttribute('maxmemory_policy');
  }

  // maxmemory_samples - computed: true, optional: false, required: false
  public get maxmemorySamples() {
    return this.getNumberAttribute('maxmemory_samples');
  }

  // metrics_frequency - computed: true, optional: false, required: false
  public get metricsFrequency() {
    return this.getNumberAttribute('metrics_frequency');
  }

  // metrics_prefix - computed: true, optional: false, required: false
  public get metricsPrefix() {
    return this.getStringAttribute('metrics_prefix');
  }

  // min_replicas_max_lag - computed: true, optional: false, required: false
  public get minReplicasMaxLag() {
    return this.getNumberAttribute('min_replicas_max_lag');
  }

  // monitoring_instance_id - computed: true, optional: false, required: false
  public get monitoringInstanceId() {
    return this.getStringAttribute('monitoring_instance_id');
  }

  // notify_keyspace_events - computed: true, optional: false, required: false
  public get notifyKeyspaceEvents() {
    return this.getStringAttribute('notify_keyspace_events');
  }

  // sgw_acl - computed: true, optional: false, required: false
  public get sgwAcl() {
    return this.getStringAttribute('sgw_acl');
  }

  // snapshot - computed: true, optional: false, required: false
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }

  // syslog - computed: true, optional: false, required: false
  public get syslog() {
    return this.getListAttribute('syslog');
  }

  // tls_ciphers - computed: true, optional: false, required: false
  public get tlsCiphers() {
    return this.getListAttribute('tls_ciphers');
  }

  // tls_ciphersuites - computed: true, optional: false, required: false
  public get tlsCiphersuites() {
    return this.getStringAttribute('tls_ciphersuites');
  }

  // tls_protocols - computed: true, optional: false, required: false
  public get tlsProtocols() {
    return this.getStringAttribute('tls_protocols');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/redis_instance stackit_redis_instance}
*/
export class DataStackitRedisInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_redis_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitRedisInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitRedisInstance to import
  * @param importFromId The id of the existing DataStackitRedisInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/redis_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitRedisInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_redis_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/redis_instance stackit_redis_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitRedisInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitRedisInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_redis_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instanceId = config.instanceId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cf_guid - computed: true, optional: false, required: false
  public get cfGuid() {
    return this.getStringAttribute('cf_guid');
  }

  // cf_organization_guid - computed: true, optional: false, required: false
  public get cfOrganizationGuid() {
    return this.getStringAttribute('cf_organization_guid');
  }

  // cf_space_guid - computed: true, optional: false, required: false
  public get cfSpaceGuid() {
    return this.getStringAttribute('cf_space_guid');
  }

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataStackitRedisInstanceParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // plan_name - computed: true, optional: false, required: false
  public get planName() {
    return this.getStringAttribute('plan_name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: cdktf.stringToTerraform(this._instanceId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
