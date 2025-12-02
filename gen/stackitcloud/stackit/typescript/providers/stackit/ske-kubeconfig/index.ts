// https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/ske_kubeconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SkeKubeconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the SKE cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/ske_kubeconfig#cluster_name SkeKubeconfig#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Expiration time of the kubeconfig, in seconds. Defaults to `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/ske_kubeconfig#expiration SkeKubeconfig#expiration}
  */
  readonly expiration?: number;
  /**
  * STACKIT project ID to which the cluster is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/ske_kubeconfig#project_id SkeKubeconfig#project_id}
  */
  readonly projectId: string;
  /**
  * If set to true, the provider will check if the kubeconfig has expired and will generated a new valid one in-place
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/ske_kubeconfig#refresh SkeKubeconfig#refresh}
  */
  readonly refresh?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds before expiration to trigger refresh of the kubeconfig at. Only used if refresh is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/ske_kubeconfig#refresh_before SkeKubeconfig#refresh_before}
  */
  readonly refreshBefore?: number;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/ske_kubeconfig#region SkeKubeconfig#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/ske_kubeconfig stackit_ske_kubeconfig}
*/
export class SkeKubeconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_ske_kubeconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SkeKubeconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SkeKubeconfig to import
  * @param importFromId The id of the existing SkeKubeconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/ske_kubeconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SkeKubeconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_ske_kubeconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/ske_kubeconfig stackit_ske_kubeconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SkeKubeconfigConfig
  */
  public constructor(scope: Construct, id: string, config: SkeKubeconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_ske_kubeconfig',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.72.0',
        providerVersionConstraint: '0.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._expiration = config.expiration;
    this._projectId = config.projectId;
    this._refresh = config.refresh;
    this._refreshBefore = config.refreshBefore;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // expiration - computed: true, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // kube_config_id - computed: true, optional: false, required: false
  public get kubeConfigId() {
    return this.getStringAttribute('kube_config_id');
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

  // refresh - computed: false, optional: true, required: false
  private _refresh?: boolean | cdktf.IResolvable; 
  public get refresh() {
    return this.getBooleanAttribute('refresh');
  }
  public set refresh(value: boolean | cdktf.IResolvable) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // refresh_before - computed: false, optional: true, required: false
  private _refreshBefore?: number; 
  public get refreshBefore() {
    return this.getNumberAttribute('refresh_before');
  }
  public set refreshBefore(value: number) {
    this._refreshBefore = value;
  }
  public resetRefreshBefore() {
    this._refreshBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshBeforeInput() {
    return this._refreshBefore;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      expiration: cdktf.numberToTerraform(this._expiration),
      project_id: cdktf.stringToTerraform(this._projectId),
      refresh: cdktf.booleanToTerraform(this._refresh),
      refresh_before: cdktf.numberToTerraform(this._refreshBefore),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration: {
        value: cdktf.numberToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh: {
        value: cdktf.booleanToHclTerraform(this._refresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      refresh_before: {
        value: cdktf.numberToHclTerraform(this._refreshBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
