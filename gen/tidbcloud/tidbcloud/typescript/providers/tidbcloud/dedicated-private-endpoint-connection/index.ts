// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_private_endpoint_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedPrivateEndpointConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_private_endpoint_connection#cluster_id DedicatedPrivateEndpointConnection#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The endpoint ID of the private link connection.
  * For AWS, it's VPC endpoint ID.
  * For GCP, it's private service connect endpoint ID.
  * For Azure, it's private endpoint resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_private_endpoint_connection#endpoint_id DedicatedPrivateEndpointConnection#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * The ID of the node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_private_endpoint_connection#node_group_id DedicatedPrivateEndpointConnection#node_group_id}
  */
  readonly nodeGroupId: string;
  /**
  * The private IP address of the private endpoint in the user's vNet.TiDB Cloud will setup a public DNS record for this private IP address. So the user can use DNS address to connect to the cluster.Only available for Azure clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_private_endpoint_connection#private_ip_address DedicatedPrivateEndpointConnection#private_ip_address}
  */
  readonly privateIpAddress?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_private_endpoint_connection tidbcloud_dedicated_private_endpoint_connection}
*/
export class DedicatedPrivateEndpointConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_private_endpoint_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DedicatedPrivateEndpointConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DedicatedPrivateEndpointConnection to import
  * @param importFromId The id of the existing DedicatedPrivateEndpointConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_private_endpoint_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DedicatedPrivateEndpointConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_private_endpoint_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/dedicated_private_endpoint_connection tidbcloud_dedicated_private_endpoint_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedPrivateEndpointConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DedicatedPrivateEndpointConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_dedicated_private_endpoint_connection',
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
    this._clusterId = config.clusterId;
    this._endpointId = config.endpointId;
    this._nodeGroupId = config.nodeGroupId;
    this._privateIpAddress = config.privateIpAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_display_name - computed: true, optional: false, required: false
  public get clusterDisplayName() {
    return this.getStringAttribute('cluster_display_name');
  }

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

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // endpoint_state - computed: true, optional: false, required: false
  public get endpointState() {
    return this.getStringAttribute('endpoint_state');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // node_group_id - computed: false, optional: false, required: true
  private _nodeGroupId?: string; 
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }
  public set nodeGroupId(value: string) {
    this._nodeGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdInput() {
    return this._nodeGroupId;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_endpoint_connection_id - computed: true, optional: false, required: false
  public get privateEndpointConnectionId() {
    return this.getStringAttribute('private_endpoint_connection_id');
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // private_link_service_name - computed: true, optional: false, required: false
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }

  // region_display_name - computed: true, optional: false, required: false
  public get regionDisplayName() {
    return this.getStringAttribute('region_display_name');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      endpoint_id: cdktf.stringToTerraform(this._endpointId),
      node_group_id: cdktf.stringToTerraform(this._nodeGroupId),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
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
      endpoint_id: {
        value: cdktf.stringToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_group_id: {
        value: cdktf.stringToHclTerraform(this._nodeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
