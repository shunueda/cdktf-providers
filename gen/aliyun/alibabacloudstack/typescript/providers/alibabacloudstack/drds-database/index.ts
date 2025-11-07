// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrdsDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database#drds_database_name DrdsDatabase#drds_database_name}
  */
  readonly drdsDatabaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database#encode DrdsDatabase#encode}
  */
  readonly encode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database#id DrdsDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database#instance_id DrdsDatabase#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database#ip_white_list DrdsDatabase#ip_white_list}
  */
  readonly ipWhiteList?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database#password DrdsDatabase#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database#rds_instance_ids DrdsDatabase#rds_instance_ids}
  */
  readonly rdsInstanceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database#split_mode DrdsDatabase#split_mode}
  */
  readonly splitMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database#storage_type DrdsDatabase#storage_type}
  */
  readonly storageType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database alibabacloudstack_drds_database}
*/
export class DrdsDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_drds_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrdsDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrdsDatabase to import
  * @param importFromId The id of the existing DrdsDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrdsDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_drds_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/drds_database alibabacloudstack_drds_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrdsDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DrdsDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_drds_database',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._drdsDatabaseName = config.drdsDatabaseName;
    this._encode = config.encode;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ipWhiteList = config.ipWhiteList;
    this._password = config.password;
    this._rdsInstanceIds = config.rdsInstanceIds;
    this._splitMode = config.splitMode;
    this._storageType = config.storageType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // drds_database_name - computed: false, optional: false, required: true
  private _drdsDatabaseName?: string; 
  public get drdsDatabaseName() {
    return this.getStringAttribute('drds_database_name');
  }
  public set drdsDatabaseName(value: string) {
    this._drdsDatabaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drdsDatabaseNameInput() {
    return this._drdsDatabaseName;
  }

  // encode - computed: false, optional: true, required: false
  private _encode?: string; 
  public get encode() {
    return this.getStringAttribute('encode');
  }
  public set encode(value: string) {
    this._encode = value;
  }
  public resetEncode() {
    this._encode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeInput() {
    return this._encode;
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

  // ip_white_list - computed: false, optional: true, required: false
  private _ipWhiteList?: { [key: string]: string }; 
  public get ipWhiteList() {
    return this.getStringMapAttribute('ip_white_list');
  }
  public set ipWhiteList(value: { [key: string]: string }) {
    this._ipWhiteList = value;
  }
  public resetIpWhiteList() {
    this._ipWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhiteListInput() {
    return this._ipWhiteList;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // rds_instance_ids - computed: false, optional: false, required: true
  private _rdsInstanceIds?: string[]; 
  public get rdsInstanceIds() {
    return this.getListAttribute('rds_instance_ids');
  }
  public set rdsInstanceIds(value: string[]) {
    this._rdsInstanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsInstanceIdsInput() {
    return this._rdsInstanceIds;
  }

  // split_mode - computed: false, optional: true, required: false
  private _splitMode?: string; 
  public get splitMode() {
    return this.getStringAttribute('split_mode');
  }
  public set splitMode(value: string) {
    this._splitMode = value;
  }
  public resetSplitMode() {
    this._splitMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitModeInput() {
    return this._splitMode;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      drds_database_name: cdktf.stringToTerraform(this._drdsDatabaseName),
      encode: cdktf.stringToTerraform(this._encode),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip_white_list: cdktf.hashMapper(cdktf.stringToTerraform)(this._ipWhiteList),
      password: cdktf.stringToTerraform(this._password),
      rds_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rdsInstanceIds),
      split_mode: cdktf.stringToTerraform(this._splitMode),
      storage_type: cdktf.stringToTerraform(this._storageType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drds_database_name: {
        value: cdktf.stringToHclTerraform(this._drdsDatabaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encode: {
        value: cdktf.stringToHclTerraform(this._encode),
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
      ip_white_list: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ipWhiteList),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rds_instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rdsInstanceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      split_mode: {
        value: cdktf.stringToHclTerraform(this._splitMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
