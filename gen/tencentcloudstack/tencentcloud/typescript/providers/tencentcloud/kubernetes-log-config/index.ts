// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/kubernetes_log_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesLogConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/kubernetes_log_config#cluster_id KubernetesLogConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The current cluster type supports tke and eks, default is tke.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/kubernetes_log_config#cluster_type KubernetesLogConfig#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/kubernetes_log_config#id KubernetesLogConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * JSON expression of log collection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/kubernetes_log_config#log_config KubernetesLogConfig#log_config}
  */
  readonly logConfig: string;
  /**
  * Log config name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/kubernetes_log_config#log_config_name KubernetesLogConfig#log_config_name}
  */
  readonly logConfigName: string;
  /**
  * CLS log set ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/kubernetes_log_config#logset_id KubernetesLogConfig#logset_id}
  */
  readonly logsetId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/kubernetes_log_config tencentcloud_kubernetes_log_config}
*/
export class KubernetesLogConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_log_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesLogConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesLogConfig to import
  * @param importFromId The id of the existing KubernetesLogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/kubernetes_log_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesLogConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_log_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/kubernetes_log_config tencentcloud_kubernetes_log_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesLogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesLogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_log_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._clusterType = config.clusterType;
    this._id = config.id;
    this._logConfig = config.logConfig;
    this._logConfigName = config.logConfigName;
    this._logsetId = config.logsetId;
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

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
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

  // log_config - computed: false, optional: false, required: true
  private _logConfig?: string; 
  public get logConfig() {
    return this.getStringAttribute('log_config');
  }
  public set logConfig(value: string) {
    this._logConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig;
  }

  // log_config_name - computed: false, optional: false, required: true
  private _logConfigName?: string; 
  public get logConfigName() {
    return this.getStringAttribute('log_config_name');
  }
  public set logConfigName(value: string) {
    this._logConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigNameInput() {
    return this._logConfigName;
  }

  // logset_id - computed: false, optional: true, required: false
  private _logsetId?: string; 
  public get logsetId() {
    return this.getStringAttribute('logset_id');
  }
  public set logsetId(value: string) {
    this._logsetId = value;
  }
  public resetLogsetId() {
    this._logsetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsetIdInput() {
    return this._logsetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      id: cdktf.stringToTerraform(this._id),
      log_config: cdktf.stringToTerraform(this._logConfig),
      log_config_name: cdktf.stringToTerraform(this._logConfigName),
      logset_id: cdktf.stringToTerraform(this._logsetId),
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
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
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
      log_config: {
        value: cdktf.stringToHclTerraform(this._logConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_config_name: {
        value: cdktf.stringToHclTerraform(this._logConfigName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logset_id: {
        value: cdktf.stringToHclTerraform(this._logsetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
