// https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/data-sources/kubeconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntelcloudKubeconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/data-sources/kubeconfig#cluster_uuid DataIntelcloudKubeconfig#cluster_uuid}
  */
  readonly clusterUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/data-sources/kubeconfig intelcloud_kubeconfig}
*/
export class DataIntelcloudKubeconfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intelcloud_kubeconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntelcloudKubeconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntelcloudKubeconfig to import
  * @param importFromId The id of the existing DataIntelcloudKubeconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/data-sources/kubeconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntelcloudKubeconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intelcloud_kubeconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/data-sources/kubeconfig intelcloud_kubeconfig} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntelcloudKubeconfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataIntelcloudKubeconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'intelcloud_kubeconfig',
      terraformGeneratorMetadata: {
        providerName: 'intelcloud',
        providerVersion: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterUuid = config.clusterUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_uuid - computed: false, optional: false, required: true
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_uuid: cdktf.stringToTerraform(this._clusterUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._clusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
