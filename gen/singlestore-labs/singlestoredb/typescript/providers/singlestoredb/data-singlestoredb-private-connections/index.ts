// https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/data-sources/private_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSinglestoredbPrivateConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/data-sources/private_connections#workspace_group_id DataSinglestoredbPrivateConnections#workspace_group_id}
  */
  readonly workspaceGroupId: string;
}
export interface DataSinglestoredbPrivateConnectionsPrivateConnections {
  /**
  * The unique identifier of the private connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/data-sources/private_connections#id DataSinglestoredbPrivateConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataSinglestoredbPrivateConnectionsPrivateConnectionsToTerraform(struct?: DataSinglestoredbPrivateConnectionsPrivateConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataSinglestoredbPrivateConnectionsPrivateConnectionsToHclTerraform(struct?: DataSinglestoredbPrivateConnectionsPrivateConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSinglestoredbPrivateConnectionsPrivateConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSinglestoredbPrivateConnectionsPrivateConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSinglestoredbPrivateConnectionsPrivateConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // active_at - computed: true, optional: false, required: false
  public get activeAt() {
    return this.getStringAttribute('active_at');
  }

  // allow_list - computed: true, optional: false, required: false
  public get allowList() {
    return this.getStringAttribute('allow_list');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kai_endpoint_id - computed: true, optional: false, required: false
  public get kaiEndpointId() {
    return this.getStringAttribute('kai_endpoint_id');
  }

  // outbound_allow_list - computed: true, optional: false, required: false
  public get outboundAllowList() {
    return this.getStringAttribute('outbound_allow_list');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // sql_port - computed: true, optional: false, required: false
  public get sqlPort() {
    return this.getNumberAttribute('sql_port');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // web_socket_port - computed: true, optional: false, required: false
  public get webSocketPort() {
    return this.getNumberAttribute('web_socket_port');
  }

  // workspace_group_id - computed: true, optional: false, required: false
  public get workspaceGroupId() {
    return this.getStringAttribute('workspace_group_id');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataSinglestoredbPrivateConnectionsPrivateConnectionsList extends cdktf.ComplexList {
  public internalValue? : DataSinglestoredbPrivateConnectionsPrivateConnections[] | cdktf.IResolvable

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
  public get(index: number): DataSinglestoredbPrivateConnectionsPrivateConnectionsOutputReference {
    return new DataSinglestoredbPrivateConnectionsPrivateConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/data-sources/private_connections singlestoredb_private_connections}
*/
export class DataSinglestoredbPrivateConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "singlestoredb_private_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSinglestoredbPrivateConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSinglestoredbPrivateConnections to import
  * @param importFromId The id of the existing DataSinglestoredbPrivateConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/data-sources/private_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSinglestoredbPrivateConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "singlestoredb_private_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/data-sources/private_connections singlestoredb_private_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSinglestoredbPrivateConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSinglestoredbPrivateConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'singlestoredb_private_connections',
      terraformGeneratorMetadata: {
        providerName: 'singlestoredb',
        providerVersion: '0.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._workspaceGroupId = config.workspaceGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_connections - computed: true, optional: false, required: false
  private _privateConnections = new DataSinglestoredbPrivateConnectionsPrivateConnectionsList(this, "private_connections", false);
  public get privateConnections() {
    return this._privateConnections;
  }

  // workspace_group_id - computed: false, optional: false, required: true
  private _workspaceGroupId?: string; 
  public get workspaceGroupId() {
    return this.getStringAttribute('workspace_group_id');
  }
  public set workspaceGroupId(value: string) {
    this._workspaceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceGroupIdInput() {
    return this._workspaceGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workspace_group_id: cdktf.stringToTerraform(this._workspaceGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      workspace_group_id: {
        value: cdktf.stringToHclTerraform(this._workspaceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
