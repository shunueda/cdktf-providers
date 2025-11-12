// https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/physical_replication_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PhysicalReplicationStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The timestamp at which to perform failover. If not specified, failover will occur at the latest consistent replicated time. Cannot be used with failover_immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/physical_replication_stream#failover_at PhysicalReplicationStream#failover_at}
  */
  readonly failoverAt?: string;
  /**
  * If true, failover will occur immediately at the latest consistent replicated time. Cannot be used with failover_at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/physical_replication_stream#failover_immediately PhysicalReplicationStream#failover_immediately}
  */
  readonly failoverImmediately?: boolean | cdktf.IResolvable;
  /**
  * ID of the primary cluster, which is the replication source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/physical_replication_stream#primary_cluster_id PhysicalReplicationStream#primary_cluster_id}
  */
  readonly primaryClusterId: string;
  /**
  * ID of the standby cluster, which is the replication target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/physical_replication_stream#standby_cluster_id PhysicalReplicationStream#standby_cluster_id}
  */
  readonly standbyClusterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/physical_replication_stream cockroach_physical_replication_stream}
*/
export class PhysicalReplicationStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_physical_replication_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PhysicalReplicationStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PhysicalReplicationStream to import
  * @param importFromId The id of the existing PhysicalReplicationStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/physical_replication_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PhysicalReplicationStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_physical_replication_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/physical_replication_stream cockroach_physical_replication_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PhysicalReplicationStreamConfig
  */
  public constructor(scope: Construct, id: string, config: PhysicalReplicationStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_physical_replication_stream',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.16.0',
        providerVersionConstraint: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._failoverAt = config.failoverAt;
    this._failoverImmediately = config.failoverImmediately;
    this._primaryClusterId = config.primaryClusterId;
    this._standbyClusterId = config.standbyClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated_at - computed: true, optional: false, required: false
  public get activatedAt() {
    return this.getStringAttribute('activated_at');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // failover_at - computed: false, optional: true, required: false
  private _failoverAt?: string; 
  public get failoverAt() {
    return this.getStringAttribute('failover_at');
  }
  public set failoverAt(value: string) {
    this._failoverAt = value;
  }
  public resetFailoverAt() {
    this._failoverAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverAtInput() {
    return this._failoverAt;
  }

  // failover_immediately - computed: false, optional: true, required: false
  private _failoverImmediately?: boolean | cdktf.IResolvable; 
  public get failoverImmediately() {
    return this.getBooleanAttribute('failover_immediately');
  }
  public set failoverImmediately(value: boolean | cdktf.IResolvable) {
    this._failoverImmediately = value;
  }
  public resetFailoverImmediately() {
    this._failoverImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverImmediatelyInput() {
    return this._failoverImmediately;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // primary_cluster_id - computed: false, optional: false, required: true
  private _primaryClusterId?: string; 
  public get primaryClusterId() {
    return this.getStringAttribute('primary_cluster_id');
  }
  public set primaryClusterId(value: string) {
    this._primaryClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryClusterIdInput() {
    return this._primaryClusterId;
  }

  // replicated_time - computed: true, optional: false, required: false
  public get replicatedTime() {
    return this.getStringAttribute('replicated_time');
  }

  // replication_lag_seconds - computed: true, optional: false, required: false
  public get replicationLagSeconds() {
    return this.getNumberAttribute('replication_lag_seconds');
  }

  // retained_time - computed: true, optional: false, required: false
  public get retainedTime() {
    return this.getStringAttribute('retained_time');
  }

  // standby_cluster_id - computed: false, optional: false, required: true
  private _standbyClusterId?: string; 
  public get standbyClusterId() {
    return this.getStringAttribute('standby_cluster_id');
  }
  public set standbyClusterId(value: string) {
    this._standbyClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyClusterIdInput() {
    return this._standbyClusterId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      failover_at: cdktf.stringToTerraform(this._failoverAt),
      failover_immediately: cdktf.booleanToTerraform(this._failoverImmediately),
      primary_cluster_id: cdktf.stringToTerraform(this._primaryClusterId),
      standby_cluster_id: cdktf.stringToTerraform(this._standbyClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      failover_at: {
        value: cdktf.stringToHclTerraform(this._failoverAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_immediately: {
        value: cdktf.booleanToHclTerraform(this._failoverImmediately),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_cluster_id: {
        value: cdktf.stringToHclTerraform(this._primaryClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_cluster_id: {
        value: cdktf.stringToHclTerraform(this._standbyClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
