// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbReadWriteSplittingConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection#connection_prefix DbReadWriteSplittingConnection#connection_prefix}
  */
  readonly connectionPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection#distribution_type DbReadWriteSplittingConnection#distribution_type}
  */
  readonly distributionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection#id DbReadWriteSplittingConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection#instance_id DbReadWriteSplittingConnection#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection#max_delay_time DbReadWriteSplittingConnection#max_delay_time}
  */
  readonly maxDelayTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection#port DbReadWriteSplittingConnection#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection#weight DbReadWriteSplittingConnection#weight}
  */
  readonly weight?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection alicloud_db_read_write_splitting_connection}
*/
export class DbReadWriteSplittingConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_db_read_write_splitting_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbReadWriteSplittingConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbReadWriteSplittingConnection to import
  * @param importFromId The id of the existing DbReadWriteSplittingConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbReadWriteSplittingConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_db_read_write_splitting_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/db_read_write_splitting_connection alicloud_db_read_write_splitting_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbReadWriteSplittingConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DbReadWriteSplittingConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_db_read_write_splitting_connection',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._distributionType = config.distributionType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._maxDelayTime = config.maxDelayTime;
    this._port = config.port;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_prefix - computed: false, optional: true, required: false
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

  // distribution_type - computed: false, optional: false, required: true
  private _distributionType?: string; 
  public get distributionType() {
    return this.getStringAttribute('distribution_type');
  }
  public set distributionType(value: string) {
    this._distributionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionTypeInput() {
    return this._distributionType;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // max_delay_time - computed: true, optional: true, required: false
  private _maxDelayTime?: number; 
  public get maxDelayTime() {
    return this.getNumberAttribute('max_delay_time');
  }
  public set maxDelayTime(value: number) {
    this._maxDelayTime = value;
  }
  public resetMaxDelayTime() {
    this._maxDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelayTimeInput() {
    return this._maxDelayTime;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: { [key: string]: string }; 
  public get weight() {
    return this.getStringMapAttribute('weight');
  }
  public set weight(value: { [key: string]: string }) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_prefix: cdktf.stringToTerraform(this._connectionPrefix),
      distribution_type: cdktf.stringToTerraform(this._distributionType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_delay_time: cdktf.numberToTerraform(this._maxDelayTime),
      port: cdktf.numberToTerraform(this._port),
      weight: cdktf.hashMapper(cdktf.stringToTerraform)(this._weight),
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
      distribution_type: {
        value: cdktf.stringToHclTerraform(this._distributionType),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_delay_time: {
        value: cdktf.numberToHclTerraform(this._maxDelayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._weight),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
