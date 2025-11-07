// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster_onoff_ondemand
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterOnoffOndemandConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GUID4 ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster_onoff_ondemand#cluster_id ClusterOnoffOndemand#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The GUID4 ID of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster_onoff_ondemand#organization_id ClusterOnoffOndemand#organization_id}
  */
  readonly organizationId: string;
  /**
  * The GUID4 ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster_onoff_ondemand#project_id ClusterOnoffOndemand#project_id}
  */
  readonly projectId: string;
  /**
  * State of the cluster. It can be `on` and `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster_onoff_ondemand#state ClusterOnoffOndemand#state}
  */
  readonly state: string;
  /**
  *  Whether to turn on the linked App Service when the cluster is turned on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster_onoff_ondemand#turn_on_linked_app_service ClusterOnoffOndemand#turn_on_linked_app_service}
  */
  readonly turnOnLinkedAppService?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster_onoff_ondemand couchbase-capella_cluster_onoff_ondemand}
*/
export class ClusterOnoffOndemand extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_cluster_onoff_ondemand";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterOnoffOndemand resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterOnoffOndemand to import
  * @param importFromId The id of the existing ClusterOnoffOndemand that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster_onoff_ondemand#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterOnoffOndemand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_cluster_onoff_ondemand", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs/resources/cluster_onoff_ondemand couchbase-capella_cluster_onoff_ondemand} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterOnoffOndemandConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterOnoffOndemandConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_cluster_onoff_ondemand',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.5.3'
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
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._state = config.state;
    this._turnOnLinkedAppService = config.turnOnLinkedAppService;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
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

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // turn_on_linked_app_service - computed: true, optional: true, required: false
  private _turnOnLinkedAppService?: boolean | cdktf.IResolvable; 
  public get turnOnLinkedAppService() {
    return this.getBooleanAttribute('turn_on_linked_app_service');
  }
  public set turnOnLinkedAppService(value: boolean | cdktf.IResolvable) {
    this._turnOnLinkedAppService = value;
  }
  public resetTurnOnLinkedAppService() {
    this._turnOnLinkedAppService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get turnOnLinkedAppServiceInput() {
    return this._turnOnLinkedAppService;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      state: cdktf.stringToTerraform(this._state),
      turn_on_linked_app_service: cdktf.booleanToTerraform(this._turnOnLinkedAppService),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      turn_on_linked_app_service: {
        value: cdktf.booleanToHclTerraform(this._turnOnLinkedAppService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
