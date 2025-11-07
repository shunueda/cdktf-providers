// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_private_endpoint_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTidbcloudDedicatedPrivateEndpointConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_private_endpoint_connections#cluster_id DataTidbcloudDedicatedPrivateEndpointConnections#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The ID of the node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_private_endpoint_connections#node_group_id DataTidbcloudDedicatedPrivateEndpointConnections#node_group_id}
  */
  readonly nodeGroupId: string;
}
export interface DataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnections {
}

export function dataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnectionsToTerraform(struct?: DataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnectionsToHclTerraform(struct?: DataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
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

  // node_group_display_name - computed: true, optional: false, required: false
  public get nodeGroupDisplayName() {
    return this.getStringAttribute('node_group_display_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_endpoint_connection_id - computed: true, optional: false, required: false
  public get privateEndpointConnectionId() {
    return this.getStringAttribute('private_endpoint_connection_id');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_link_service_name - computed: true, optional: false, required: false
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }

  // private_link_service_state - computed: true, optional: false, required: false
  public get privateLinkServiceState() {
    return this.getStringAttribute('private_link_service_state');
  }

  // region_display_name - computed: true, optional: false, required: false
  public get regionDisplayName() {
    return this.getStringAttribute('region_display_name');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
}

export class DataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnectionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnectionsOutputReference {
    return new DataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_private_endpoint_connections tidbcloud_dedicated_private_endpoint_connections}
*/
export class DataTidbcloudDedicatedPrivateEndpointConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_dedicated_private_endpoint_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTidbcloudDedicatedPrivateEndpointConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTidbcloudDedicatedPrivateEndpointConnections to import
  * @param importFromId The id of the existing DataTidbcloudDedicatedPrivateEndpointConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_private_endpoint_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTidbcloudDedicatedPrivateEndpointConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_dedicated_private_endpoint_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/dedicated_private_endpoint_connections tidbcloud_dedicated_private_endpoint_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTidbcloudDedicatedPrivateEndpointConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTidbcloudDedicatedPrivateEndpointConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_dedicated_private_endpoint_connections',
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
    this._nodeGroupId = config.nodeGroupId;
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

  // private_endpoint_connections - computed: true, optional: false, required: false
  private _privateEndpointConnections = new DataTidbcloudDedicatedPrivateEndpointConnectionsPrivateEndpointConnectionsList(this, "private_endpoint_connections", false);
  public get privateEndpointConnections() {
    return this._privateEndpointConnections;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      node_group_id: cdktf.stringToTerraform(this._nodeGroupId),
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
      node_group_id: {
        value: cdktf.stringToHclTerraform(this._nodeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
