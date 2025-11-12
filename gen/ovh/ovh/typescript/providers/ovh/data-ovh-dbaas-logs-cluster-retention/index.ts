// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_cluster_retention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhDbaasLogsClusterRetentionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_cluster_retention#cluster_id DataOvhDbaasLogsClusterRetention#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Indexed duration expressed in ISO-8601 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_cluster_retention#duration DataOvhDbaasLogsClusterRetention#duration}
  */
  readonly duration?: string;
  /**
  * Retention ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_cluster_retention#retention_id DataOvhDbaasLogsClusterRetention#retention_id}
  */
  readonly retentionId?: string;
  /**
  * Retention type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_cluster_retention#retention_type DataOvhDbaasLogsClusterRetention#retention_type}
  */
  readonly retentionType?: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_cluster_retention#service_name DataOvhDbaasLogsClusterRetention#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_cluster_retention ovh_dbaas_logs_cluster_retention}
*/
export class DataOvhDbaasLogsClusterRetention extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dbaas_logs_cluster_retention";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhDbaasLogsClusterRetention resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhDbaasLogsClusterRetention to import
  * @param importFromId The id of the existing DataOvhDbaasLogsClusterRetention that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_cluster_retention#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhDbaasLogsClusterRetention to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dbaas_logs_cluster_retention", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_cluster_retention ovh_dbaas_logs_cluster_retention} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhDbaasLogsClusterRetentionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhDbaasLogsClusterRetentionConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dbaas_logs_cluster_retention',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._duration = config.duration;
    this._retentionId = config.retentionId;
    this._retentionType = config.retentionType;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // is_supported - computed: true, optional: false, required: false
  public get isSupported() {
    return this.getBooleanAttribute('is_supported');
  }

  // retention_id - computed: true, optional: true, required: false
  private _retentionId?: string; 
  public get retentionId() {
    return this.getStringAttribute('retention_id');
  }
  public set retentionId(value: string) {
    this._retentionId = value;
  }
  public resetRetentionId() {
    this._retentionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionIdInput() {
    return this._retentionId;
  }

  // retention_type - computed: true, optional: true, required: false
  private _retentionType?: string; 
  public get retentionType() {
    return this.getStringAttribute('retention_type');
  }
  public set retentionType(value: string) {
    this._retentionType = value;
  }
  public resetRetentionType() {
    this._retentionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionTypeInput() {
    return this._retentionType;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      duration: cdktf.stringToTerraform(this._duration),
      retention_id: cdktf.stringToTerraform(this._retentionId),
      retention_type: cdktf.stringToTerraform(this._retentionType),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_id: {
        value: cdktf.stringToHclTerraform(this._retentionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_type: {
        value: cdktf.stringToHclTerraform(this._retentionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
