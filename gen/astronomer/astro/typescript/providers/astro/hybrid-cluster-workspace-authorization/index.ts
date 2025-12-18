// https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/hybrid_cluster_workspace_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HybridClusterWorkspaceAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the hybrid cluster to set authorizations for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/hybrid_cluster_workspace_authorization#cluster_id HybridClusterWorkspaceAuthorization#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The IDs of the workspaces to authorize for the hybrid cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/hybrid_cluster_workspace_authorization#workspace_ids HybridClusterWorkspaceAuthorization#workspace_ids}
  */
  readonly workspaceIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/hybrid_cluster_workspace_authorization astro_hybrid_cluster_workspace_authorization}
*/
export class HybridClusterWorkspaceAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astro_hybrid_cluster_workspace_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HybridClusterWorkspaceAuthorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HybridClusterWorkspaceAuthorization to import
  * @param importFromId The id of the existing HybridClusterWorkspaceAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/hybrid_cluster_workspace_authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HybridClusterWorkspaceAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astro_hybrid_cluster_workspace_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/astronomer/astro/1.0.10/docs/resources/hybrid_cluster_workspace_authorization astro_hybrid_cluster_workspace_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HybridClusterWorkspaceAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: HybridClusterWorkspaceAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'astro_hybrid_cluster_workspace_authorization',
      terraformGeneratorMetadata: {
        providerName: 'astro',
        providerVersion: '1.0.10',
        providerVersionConstraint: '1.0.10'
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
    this._workspaceIds = config.workspaceIds;
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

  // workspace_ids - computed: false, optional: true, required: false
  private _workspaceIds?: string[]; 
  public get workspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('workspace_ids'));
  }
  public set workspaceIds(value: string[]) {
    this._workspaceIds = value;
  }
  public resetWorkspaceIds() {
    this._workspaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsInput() {
    return this._workspaceIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceIds),
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
      workspace_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workspaceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
