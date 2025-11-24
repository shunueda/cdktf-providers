// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/cluster_orchestrator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessClusterOrchestratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Endpoint of the k8s cluster being onboarded under the orchestrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/cluster_orchestrator#cluster_endpoint DataHarnessClusterOrchestrator#cluster_endpoint}
  */
  readonly clusterEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/cluster_orchestrator#id DataHarnessClusterOrchestrator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the Harness Kubernetes Connector Being used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/cluster_orchestrator#k8s_connector_id DataHarnessClusterOrchestrator#k8s_connector_id}
  */
  readonly k8SConnectorId?: string;
  /**
  * Name of the Orchestrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/cluster_orchestrator#name DataHarnessClusterOrchestrator#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/cluster_orchestrator harness_cluster_orchestrator}
*/
export class DataHarnessClusterOrchestrator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_cluster_orchestrator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessClusterOrchestrator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessClusterOrchestrator to import
  * @param importFromId The id of the existing DataHarnessClusterOrchestrator that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/cluster_orchestrator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessClusterOrchestrator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_cluster_orchestrator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/cluster_orchestrator harness_cluster_orchestrator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessClusterOrchestratorConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessClusterOrchestratorConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_cluster_orchestrator',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterEndpoint = config.clusterEndpoint;
    this._id = config.id;
    this._k8SConnectorId = config.k8SConnectorId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_endpoint - computed: false, optional: false, required: true
  private _clusterEndpoint?: string; 
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }
  public set clusterEndpoint(value: string) {
    this._clusterEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointInput() {
    return this._clusterEndpoint;
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

  // k8s_connector_id - computed: false, optional: true, required: false
  private _k8SConnectorId?: string; 
  public get k8SConnectorId() {
    return this.getStringAttribute('k8s_connector_id');
  }
  public set k8SConnectorId(value: string) {
    this._k8SConnectorId = value;
  }
  public resetK8SConnectorId() {
    this._k8SConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SConnectorIdInput() {
    return this._k8SConnectorId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_endpoint: cdktf.stringToTerraform(this._clusterEndpoint),
      id: cdktf.stringToTerraform(this._id),
      k8s_connector_id: cdktf.stringToTerraform(this._k8SConnectorId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._clusterEndpoint),
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
      k8s_connector_id: {
        value: cdktf.stringToHclTerraform(this._k8SConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
