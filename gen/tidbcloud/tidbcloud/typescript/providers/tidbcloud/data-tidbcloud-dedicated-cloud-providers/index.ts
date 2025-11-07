// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_cloud_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTidbcloudDedicatedCloudProvidersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the project. If not set, it will return the cloud providers that can be selected under the default project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_cloud_providers#project_id DataTidbcloudDedicatedCloudProviders#project_id}
  */
  readonly projectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_cloud_providers tidbcloud_dedicated_cloud_providers}
*/
export class DataTidbcloudDedicatedCloudProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_cloud_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTidbcloudDedicatedCloudProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTidbcloudDedicatedCloudProviders to import
  * @param importFromId The id of the existing DataTidbcloudDedicatedCloudProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_cloud_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTidbcloudDedicatedCloudProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_cloud_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_cloud_providers tidbcloud_dedicated_cloud_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTidbcloudDedicatedCloudProvidersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTidbcloudDedicatedCloudProvidersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_dedicated_cloud_providers',
      terraformGeneratorMetadata: {
        providerName: 'tidbcloud',
        providerVersion: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_providers - computed: true, optional: false, required: false
  public get cloudProviders() {
    return this.getListAttribute('cloud_providers');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
