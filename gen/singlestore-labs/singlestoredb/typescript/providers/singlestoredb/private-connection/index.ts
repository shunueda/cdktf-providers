// https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The private connection allow list. This is the account ID for AWS,  subscription ID for Azure, and the project name GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection#allow_list PrivateConnection#allow_list}
  */
  readonly allowList?: string;
  /**
  * VPC Endpoint ID for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection#kai_endpoint_id PrivateConnection#kai_endpoint_id}
  */
  readonly kaiEndpointId?: string;
  /**
  * The name of the private connection service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection#service_name PrivateConnection#service_name}
  */
  readonly serviceName?: string;
  /**
  * The SQL port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection#sql_port PrivateConnection#sql_port}
  */
  readonly sqlPort?: number;
  /**
  * The private connection type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection#type PrivateConnection#type}
  */
  readonly type?: string;
  /**
  * The websockets port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection#web_socket_port PrivateConnection#web_socket_port}
  */
  readonly webSocketPort?: number;
  /**
  * The ID of the workspace group containing the private connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection#workspace_group_id PrivateConnection#workspace_group_id}
  */
  readonly workspaceGroupId: string;
  /**
  * The ID of the workspace to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection#workspace_id PrivateConnection#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection singlestoredb_private_connection}
*/
export class PrivateConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "singlestoredb_private_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateConnection to import
  * @param importFromId The id of the existing PrivateConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "singlestoredb_private_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.7/docs/resources/private_connection singlestoredb_private_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'singlestoredb_private_connection',
      terraformGeneratorMetadata: {
        providerName: 'singlestoredb',
        providerVersion: '0.1.7',
        providerVersionConstraint: '0.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowList = config.allowList;
    this._kaiEndpointId = config.kaiEndpointId;
    this._serviceName = config.serviceName;
    this._sqlPort = config.sqlPort;
    this._type = config.type;
    this._webSocketPort = config.webSocketPort;
    this._workspaceGroupId = config.workspaceGroupId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_at - computed: true, optional: false, required: false
  public get activeAt() {
    return this.getStringAttribute('active_at');
  }

  // allow_list - computed: false, optional: true, required: false
  private _allowList?: string; 
  public get allowList() {
    return this.getStringAttribute('allow_list');
  }
  public set allowList(value: string) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kai_endpoint_id - computed: false, optional: true, required: false
  private _kaiEndpointId?: string; 
  public get kaiEndpointId() {
    return this.getStringAttribute('kai_endpoint_id');
  }
  public set kaiEndpointId(value: string) {
    this._kaiEndpointId = value;
  }
  public resetKaiEndpointId() {
    this._kaiEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kaiEndpointIdInput() {
    return this._kaiEndpointId;
  }

  // outbound_allow_list - computed: true, optional: false, required: false
  public get outboundAllowList() {
    return this.getStringAttribute('outbound_allow_list');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // sql_port - computed: true, optional: true, required: false
  private _sqlPort?: number; 
  public get sqlPort() {
    return this.getNumberAttribute('sql_port');
  }
  public set sqlPort(value: number) {
    this._sqlPort = value;
  }
  public resetSqlPort() {
    this._sqlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlPortInput() {
    return this._sqlPort;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // web_socket_port - computed: true, optional: true, required: false
  private _webSocketPort?: number; 
  public get webSocketPort() {
    return this.getNumberAttribute('web_socket_port');
  }
  public set webSocketPort(value: number) {
    this._webSocketPort = value;
  }
  public resetWebSocketPort() {
    this._webSocketPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSocketPortInput() {
    return this._webSocketPort;
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

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_list: cdktf.stringToTerraform(this._allowList),
      kai_endpoint_id: cdktf.stringToTerraform(this._kaiEndpointId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      sql_port: cdktf.numberToTerraform(this._sqlPort),
      type: cdktf.stringToTerraform(this._type),
      web_socket_port: cdktf.numberToTerraform(this._webSocketPort),
      workspace_group_id: cdktf.stringToTerraform(this._workspaceGroupId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list: {
        value: cdktf.stringToHclTerraform(this._allowList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kai_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._kaiEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_port: {
        value: cdktf.numberToHclTerraform(this._sqlPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_socket_port: {
        value: cdktf.numberToHclTerraform(this._webSocketPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace_group_id: {
        value: cdktf.stringToHclTerraform(this._workspaceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
