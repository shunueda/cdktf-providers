// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_endpoint_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbEndpointAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_endpoint_address#connection_prefix PolardbEndpointAddress#connection_prefix}
  */
  readonly connectionPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_endpoint_address#db_cluster_id PolardbEndpointAddress#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_endpoint_address#db_endpoint_id PolardbEndpointAddress#db_endpoint_id}
  */
  readonly dbEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_endpoint_address#id PolardbEndpointAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_endpoint_address#net_type PolardbEndpointAddress#net_type}
  */
  readonly netType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_endpoint_address#port PolardbEndpointAddress#port}
  */
  readonly port?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_endpoint_address alicloud_polardb_endpoint_address}
*/
export class PolardbEndpointAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_polardb_endpoint_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbEndpointAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbEndpointAddress to import
  * @param importFromId The id of the existing PolardbEndpointAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_endpoint_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbEndpointAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_polardb_endpoint_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_endpoint_address alicloud_polardb_endpoint_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbEndpointAddressConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbEndpointAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_polardb_endpoint_address',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionPrefix = config.connectionPrefix;
    this._dbClusterId = config.dbClusterId;
    this._dbEndpointId = config.dbEndpointId;
    this._id = config.id;
    this._netType = config.netType;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
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

  // db_endpoint_id - computed: false, optional: false, required: true
  private _dbEndpointId?: string; 
  public get dbEndpointId() {
    return this.getStringAttribute('db_endpoint_id');
  }
  public set dbEndpointId(value: string) {
    this._dbEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbEndpointIdInput() {
    return this._dbEndpointId;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_prefix: cdktf.stringToTerraform(this._connectionPrefix),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      db_endpoint_id: cdktf.stringToTerraform(this._dbEndpointId),
      id: cdktf.stringToTerraform(this._id),
      net_type: cdktf.stringToTerraform(this._netType),
      port: cdktf.stringToTerraform(this._port),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      db_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._dbEndpointId),
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
