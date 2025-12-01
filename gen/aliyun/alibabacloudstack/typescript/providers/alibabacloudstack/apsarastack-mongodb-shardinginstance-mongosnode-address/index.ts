// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackMongodbShardinginstanceMongosnodeAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address#db_instance_id ApsarastackMongodbShardinginstanceMongosnodeAddress#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address#enable_private_connection ApsarastackMongodbShardinginstanceMongosnodeAddress#enable_private_connection}
  */
  readonly enablePrivateConnection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address#enable_public_connection ApsarastackMongodbShardinginstanceMongosnodeAddress#enable_public_connection}
  */
  readonly enablePublicConnection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address#id ApsarastackMongodbShardinginstanceMongosnodeAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address#node_id ApsarastackMongodbShardinginstanceMongosnodeAddress#node_id}
  */
  readonly nodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address#private_connect_port ApsarastackMongodbShardinginstanceMongosnodeAddress#private_connect_port}
  */
  readonly privateConnectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address#private_connect_string_prefix ApsarastackMongodbShardinginstanceMongosnodeAddress#private_connect_string_prefix}
  */
  readonly privateConnectStringPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address#public_connect_port ApsarastackMongodbShardinginstanceMongosnodeAddress#public_connect_port}
  */
  readonly publicConnectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address#public_connect_string_prefix ApsarastackMongodbShardinginstanceMongosnodeAddress#public_connect_string_prefix}
  */
  readonly publicConnectStringPrefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address apsarastack_mongodb_shardinginstance_mongosnode_address}
*/
export class ApsarastackMongodbShardinginstanceMongosnodeAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_mongodb_shardinginstance_mongosnode_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackMongodbShardinginstanceMongosnodeAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackMongodbShardinginstanceMongosnodeAddress to import
  * @param importFromId The id of the existing ApsarastackMongodbShardinginstanceMongosnodeAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackMongodbShardinginstanceMongosnodeAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_mongodb_shardinginstance_mongosnode_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_mongodb_shardinginstance_mongosnode_address apsarastack_mongodb_shardinginstance_mongosnode_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackMongodbShardinginstanceMongosnodeAddressConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackMongodbShardinginstanceMongosnodeAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_mongodb_shardinginstance_mongosnode_address',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceId = config.dbInstanceId;
    this._enablePrivateConnection = config.enablePrivateConnection;
    this._enablePublicConnection = config.enablePublicConnection;
    this._id = config.id;
    this._nodeId = config.nodeId;
    this._privateConnectPort = config.privateConnectPort;
    this._privateConnectStringPrefix = config.privateConnectStringPrefix;
    this._publicConnectPort = config.publicConnectPort;
    this._publicConnectStringPrefix = config.publicConnectStringPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // enable_private_connection - computed: false, optional: true, required: false
  private _enablePrivateConnection?: boolean | cdktf.IResolvable; 
  public get enablePrivateConnection() {
    return this.getBooleanAttribute('enable_private_connection');
  }
  public set enablePrivateConnection(value: boolean | cdktf.IResolvable) {
    this._enablePrivateConnection = value;
  }
  public resetEnablePrivateConnection() {
    this._enablePrivateConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateConnectionInput() {
    return this._enablePrivateConnection;
  }

  // enable_public_connection - computed: false, optional: true, required: false
  private _enablePublicConnection?: boolean | cdktf.IResolvable; 
  public get enablePublicConnection() {
    return this.getBooleanAttribute('enable_public_connection');
  }
  public set enablePublicConnection(value: boolean | cdktf.IResolvable) {
    this._enablePublicConnection = value;
  }
  public resetEnablePublicConnection() {
    this._enablePublicConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicConnectionInput() {
    return this._enablePublicConnection;
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

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // private_connect_port - computed: true, optional: true, required: false
  private _privateConnectPort?: number; 
  public get privateConnectPort() {
    return this.getNumberAttribute('private_connect_port');
  }
  public set privateConnectPort(value: number) {
    this._privateConnectPort = value;
  }
  public resetPrivateConnectPort() {
    this._privateConnectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectPortInput() {
    return this._privateConnectPort;
  }

  // private_connect_string - computed: true, optional: false, required: false
  public get privateConnectString() {
    return this.getStringAttribute('private_connect_string');
  }

  // private_connect_string_prefix - computed: true, optional: true, required: false
  private _privateConnectStringPrefix?: string; 
  public get privateConnectStringPrefix() {
    return this.getStringAttribute('private_connect_string_prefix');
  }
  public set privateConnectStringPrefix(value: string) {
    this._privateConnectStringPrefix = value;
  }
  public resetPrivateConnectStringPrefix() {
    this._privateConnectStringPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectStringPrefixInput() {
    return this._privateConnectStringPrefix;
  }

  // public_connect_port - computed: true, optional: true, required: false
  private _publicConnectPort?: number; 
  public get publicConnectPort() {
    return this.getNumberAttribute('public_connect_port');
  }
  public set publicConnectPort(value: number) {
    this._publicConnectPort = value;
  }
  public resetPublicConnectPort() {
    this._publicConnectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicConnectPortInput() {
    return this._publicConnectPort;
  }

  // public_connect_string - computed: true, optional: false, required: false
  public get publicConnectString() {
    return this.getStringAttribute('public_connect_string');
  }

  // public_connect_string_prefix - computed: true, optional: true, required: false
  private _publicConnectStringPrefix?: string; 
  public get publicConnectStringPrefix() {
    return this.getStringAttribute('public_connect_string_prefix');
  }
  public set publicConnectStringPrefix(value: string) {
    this._publicConnectStringPrefix = value;
  }
  public resetPublicConnectStringPrefix() {
    this._publicConnectStringPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicConnectStringPrefixInput() {
    return this._publicConnectStringPrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      enable_private_connection: cdktf.booleanToTerraform(this._enablePrivateConnection),
      enable_public_connection: cdktf.booleanToTerraform(this._enablePublicConnection),
      id: cdktf.stringToTerraform(this._id),
      node_id: cdktf.stringToTerraform(this._nodeId),
      private_connect_port: cdktf.numberToTerraform(this._privateConnectPort),
      private_connect_string_prefix: cdktf.stringToTerraform(this._privateConnectStringPrefix),
      public_connect_port: cdktf.numberToTerraform(this._publicConnectPort),
      public_connect_string_prefix: cdktf.stringToTerraform(this._publicConnectStringPrefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_private_connection: {
        value: cdktf.booleanToHclTerraform(this._enablePrivateConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_public_connection: {
        value: cdktf.booleanToHclTerraform(this._enablePublicConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_connect_port: {
        value: cdktf.numberToHclTerraform(this._privateConnectPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_connect_string_prefix: {
        value: cdktf.stringToHclTerraform(this._privateConnectStringPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_connect_port: {
        value: cdktf.numberToHclTerraform(this._publicConnectPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_connect_string_prefix: {
        value: cdktf.stringToHclTerraform(this._publicConnectStringPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
