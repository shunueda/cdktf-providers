// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbZonalEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#auto_add_new_nodes PolardbZonalEndpoint#auto_add_new_nodes}
  */
  readonly autoAddNewNodes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#db_cluster_id PolardbZonalEndpoint#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#db_cluster_nodes_ids PolardbZonalEndpoint#db_cluster_nodes_ids}
  */
  readonly dbClusterNodesIds: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#db_endpoint_description PolardbZonalEndpoint#db_endpoint_description}
  */
  readonly dbEndpointDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#endpoint_config PolardbZonalEndpoint#endpoint_config}
  */
  readonly endpointConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#endpoint_type PolardbZonalEndpoint#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#id PolardbZonalEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#net_type PolardbZonalEndpoint#net_type}
  */
  readonly netType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#nodes_key PolardbZonalEndpoint#nodes_key}
  */
  readonly nodesKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#read_write_mode PolardbZonalEndpoint#read_write_mode}
  */
  readonly readWriteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#vpc_id PolardbZonalEndpoint#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#vswitch_id PolardbZonalEndpoint#vswitch_id}
  */
  readonly vswitchId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint alicloud_polardb_zonal_endpoint}
*/
export class PolardbZonalEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_polardb_zonal_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbZonalEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbZonalEndpoint to import
  * @param importFromId The id of the existing PolardbZonalEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbZonalEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_polardb_zonal_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_zonal_endpoint alicloud_polardb_zonal_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbZonalEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbZonalEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_polardb_zonal_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAddNewNodes = config.autoAddNewNodes;
    this._dbClusterId = config.dbClusterId;
    this._dbClusterNodesIds = config.dbClusterNodesIds;
    this._dbEndpointDescription = config.dbEndpointDescription;
    this._endpointConfig = config.endpointConfig;
    this._endpointType = config.endpointType;
    this._id = config.id;
    this._netType = config.netType;
    this._nodesKey = config.nodesKey;
    this._readWriteMode = config.readWriteMode;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_add_new_nodes - computed: true, optional: true, required: false
  private _autoAddNewNodes?: string; 
  public get autoAddNewNodes() {
    return this.getStringAttribute('auto_add_new_nodes');
  }
  public set autoAddNewNodes(value: string) {
    this._autoAddNewNodes = value;
  }
  public resetAutoAddNewNodes() {
    this._autoAddNewNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAddNewNodesInput() {
    return this._autoAddNewNodes;
  }

  // connection_prefix - computed: true, optional: false, required: false
  public get connectionPrefix() {
    return this.getStringAttribute('connection_prefix');
  }

  // db_cluster_id - computed: false, optional: false, required: true
  private _dbClusterId?: string; 
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }
  public set dbClusterId(value: string) {
    this._dbClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdInput() {
    return this._dbClusterId;
  }

  // db_cluster_nodes_ids - computed: false, optional: false, required: true
  private _dbClusterNodesIds?: { [key: string]: string }; 
  public get dbClusterNodesIds() {
    return this.getStringMapAttribute('db_cluster_nodes_ids');
  }
  public set dbClusterNodesIds(value: { [key: string]: string }) {
    this._dbClusterNodesIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterNodesIdsInput() {
    return this._dbClusterNodesIds;
  }

  // db_endpoint_description - computed: false, optional: true, required: false
  private _dbEndpointDescription?: string; 
  public get dbEndpointDescription() {
    return this.getStringAttribute('db_endpoint_description');
  }
  public set dbEndpointDescription(value: string) {
    this._dbEndpointDescription = value;
  }
  public resetDbEndpointDescription() {
    this._dbEndpointDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbEndpointDescriptionInput() {
    return this._dbEndpointDescription;
  }

  // db_endpoint_id - computed: true, optional: false, required: false
  public get dbEndpointId() {
    return this.getStringAttribute('db_endpoint_id');
  }

  // endpoint_config - computed: false, optional: true, required: false
  private _endpointConfig?: { [key: string]: string }; 
  public get endpointConfig() {
    return this.getStringMapAttribute('endpoint_config');
  }
  public set endpointConfig(value: { [key: string]: string }) {
    this._endpointConfig = value;
  }
  public resetEndpointConfig() {
    this._endpointConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigInput() {
    return this._endpointConfig;
  }

  // endpoint_type - computed: true, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // net_type - computed: true, optional: true, required: false
  private _netType?: string; 
  public get netType() {
    return this.getStringAttribute('net_type');
  }
  public set netType(value: string) {
    this._netType = value;
  }
  public resetNetType() {
    this._netType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netTypeInput() {
    return this._netType;
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return cdktf.Fn.tolist(this.getListAttribute('nodes'));
  }

  // nodes_key - computed: false, optional: true, required: false
  private _nodesKey?: string[]; 
  public get nodesKey() {
    return cdktf.Fn.tolist(this.getListAttribute('nodes_key'));
  }
  public set nodesKey(value: string[]) {
    this._nodesKey = value;
  }
  public resetNodesKey() {
    this._nodesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesKeyInput() {
    return this._nodesKey;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // read_write_mode - computed: false, optional: true, required: false
  private _readWriteMode?: string; 
  public get readWriteMode() {
    return this.getStringAttribute('read_write_mode');
  }
  public set readWriteMode(value: string) {
    this._readWriteMode = value;
  }
  public resetReadWriteMode() {
    this._readWriteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteModeInput() {
    return this._readWriteMode;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_add_new_nodes: cdktf.stringToTerraform(this._autoAddNewNodes),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      db_cluster_nodes_ids: cdktf.hashMapper(cdktf.stringToTerraform)(this._dbClusterNodesIds),
      db_endpoint_description: cdktf.stringToTerraform(this._dbEndpointDescription),
      endpoint_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._endpointConfig),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      id: cdktf.stringToTerraform(this._id),
      net_type: cdktf.stringToTerraform(this._netType),
      nodes_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodesKey),
      read_write_mode: cdktf.stringToTerraform(this._readWriteMode),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_add_new_nodes: {
        value: cdktf.stringToHclTerraform(this._autoAddNewNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dbClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_nodes_ids: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dbClusterNodesIds),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      db_endpoint_description: {
        value: cdktf.stringToHclTerraform(this._dbEndpointDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._endpointConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_type: {
        value: cdktf.stringToHclTerraform(this._netType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodesKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      read_write_mode: {
        value: cdktf.stringToHclTerraform(this._readWriteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
