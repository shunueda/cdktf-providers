// https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/omni_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OmniClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * CAST AI cluster ID to register
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/omni_cluster#cluster_id OmniCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * CAST AI organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/omni_cluster#organization_id OmniCluster#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/omni_cluster castai_omni_cluster}
*/
export class OmniCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_omni_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OmniCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OmniCluster to import
  * @param importFromId The id of the existing OmniCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/omni_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OmniCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_omni_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/omni_cluster castai_omni_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OmniClusterConfig
  */
  public constructor(scope: Construct, id: string, config: OmniClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_omni_cluster',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.4.0',
        providerVersionConstraint: '8.4.0'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
