// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_network_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTidbcloudDedicatedNetworkContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the network container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_network_container#network_container_id DataTidbcloudDedicatedNetworkContainer#network_container_id}
  */
  readonly networkContainerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_network_container tidbcloud_dedicated_network_container}
*/
export class DataTidbcloudDedicatedNetworkContainer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_network_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTidbcloudDedicatedNetworkContainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTidbcloudDedicatedNetworkContainer to import
  * @param importFromId The id of the existing DataTidbcloudDedicatedNetworkContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_network_container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTidbcloudDedicatedNetworkContainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_network_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.6/docs/data-sources/dedicated_network_container tidbcloud_dedicated_network_container} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTidbcloudDedicatedNetworkContainerConfig
  */
  public constructor(scope: Construct, id: string, config: DataTidbcloudDedicatedNetworkContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_dedicated_network_container',
      terraformGeneratorMetadata: {
        providerName: 'tidbcloud',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkContainerId = config.networkContainerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_notation - computed: true, optional: false, required: false
  public get cidrNotation() {
    return this.getStringAttribute('cidr_notation');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // network_container_id - computed: false, optional: false, required: true
  private _networkContainerId?: string; 
  public get networkContainerId() {
    return this.getStringAttribute('network_container_id');
  }
  public set networkContainerId(value: string) {
    this._networkContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkContainerIdInput() {
    return this._networkContainerId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region_display_name - computed: true, optional: false, required: false
  public get regionDisplayName() {
    return this.getStringAttribute('region_display_name');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_container_id: cdktf.stringToTerraform(this._networkContainerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_container_id: {
        value: cdktf.stringToHclTerraform(this._networkContainerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
