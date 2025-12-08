// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbClusterEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#auto_add_new_nodes PolardbClusterEndpoint#auto_add_new_nodes}
  */
  readonly autoAddNewNodes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#connection_prefix PolardbClusterEndpoint#connection_prefix}
  */
  readonly connectionPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#db_cluster_id PolardbClusterEndpoint#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#db_endpoint_description PolardbClusterEndpoint#db_endpoint_description}
  */
  readonly dbEndpointDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#endpoint_config PolardbClusterEndpoint#endpoint_config}
  */
  readonly endpointConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#id PolardbClusterEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#net_type PolardbClusterEndpoint#net_type}
  */
  readonly netType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#nodes PolardbClusterEndpoint#nodes}
  */
  readonly nodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#port PolardbClusterEndpoint#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#read_write_mode PolardbClusterEndpoint#read_write_mode}
  */
  readonly readWriteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#ssl_auto_rotate PolardbClusterEndpoint#ssl_auto_rotate}
  */
  readonly sslAutoRotate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#ssl_enabled PolardbClusterEndpoint#ssl_enabled}
  */
  readonly sslEnabled?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint alicloud_polardb_cluster_endpoint}
*/
export class PolardbClusterEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_polardb_cluster_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbClusterEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbClusterEndpoint to import
  * @param importFromId The id of the existing PolardbClusterEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbClusterEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_polardb_cluster_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/polardb_cluster_endpoint alicloud_polardb_cluster_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbClusterEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbClusterEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_polardb_cluster_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
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
    this._connectionPrefix = config.connectionPrefix;
    this._dbClusterId = config.dbClusterId;
    this._dbEndpointDescription = config.dbEndpointDescription;
    this._endpointConfig = config.endpointConfig;
    this._id = config.id;
    this._netType = config.netType;
    this._nodes = config.nodes;
    this._port = config.port;
    this._readWriteMode = config.readWriteMode;
    this._sslAutoRotate = config.sslAutoRotate;
    this._sslEnabled = config.sslEnabled;
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

  // connection_prefix - computed: true, optional: true, required: false
  private _connectionPrefix?: string; 
  public get connectionPrefix() {
    return this.getStringAttribute('connection_prefix');
  }
  public set connectionPrefix(value: string) {
    this._connectionPrefix = value;
  }
  public resetConnectionPrefix() {
    this._connectionPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPrefixInput() {
    return this._connectionPrefix;
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

  // endpoint_config - computed: true, optional: true, required: false
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

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
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

  // net_type - computed: false, optional: true, required: false
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

  // nodes - computed: true, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return cdktf.Fn.tolist(this.getListAttribute('nodes'));
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // read_write_mode - computed: true, optional: true, required: false
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

  // ssl_auto_rotate - computed: false, optional: true, required: false
  private _sslAutoRotate?: string; 
  public get sslAutoRotate() {
    return this.getStringAttribute('ssl_auto_rotate');
  }
  public set sslAutoRotate(value: string) {
    this._sslAutoRotate = value;
  }
  public resetSslAutoRotate() {
    this._sslAutoRotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAutoRotateInput() {
    return this._sslAutoRotate;
  }

  // ssl_certificate_url - computed: true, optional: false, required: false
  public get sslCertificateUrl() {
    return this.getStringAttribute('ssl_certificate_url');
  }

  // ssl_connection_string - computed: true, optional: false, required: false
  public get sslConnectionString() {
    return this.getStringAttribute('ssl_connection_string');
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: string; 
  public get sslEnabled() {
    return this.getStringAttribute('ssl_enabled');
  }
  public set sslEnabled(value: string) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // ssl_expire_time - computed: true, optional: false, required: false
  public get sslExpireTime() {
    return this.getStringAttribute('ssl_expire_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_add_new_nodes: cdktf.stringToTerraform(this._autoAddNewNodes),
      connection_prefix: cdktf.stringToTerraform(this._connectionPrefix),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      db_endpoint_description: cdktf.stringToTerraform(this._dbEndpointDescription),
      endpoint_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._endpointConfig),
      id: cdktf.stringToTerraform(this._id),
      net_type: cdktf.stringToTerraform(this._netType),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
      port: cdktf.stringToTerraform(this._port),
      read_write_mode: cdktf.stringToTerraform(this._readWriteMode),
      ssl_auto_rotate: cdktf.stringToTerraform(this._sslAutoRotate),
      ssl_enabled: cdktf.stringToTerraform(this._sslEnabled),
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
      connection_prefix: {
        value: cdktf.stringToHclTerraform(this._connectionPrefix),
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
      nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_write_mode: {
        value: cdktf.stringToHclTerraform(this._readWriteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_auto_rotate: {
        value: cdktf.stringToHclTerraform(this._sslAutoRotate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enabled: {
        value: cdktf.stringToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
