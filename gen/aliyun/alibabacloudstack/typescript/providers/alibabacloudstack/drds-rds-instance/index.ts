// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrdsRdsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance#category DrdsRdsInstance#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance#db_instance_class DrdsRdsInstance#db_instance_class}
  */
  readonly dbInstanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance#db_instance_storage DrdsRdsInstance#db_instance_storage}
  */
  readonly dbInstanceStorage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance#drds_instance_id DrdsRdsInstance#drds_instance_id}
  */
  readonly drdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance#force_remove DrdsRdsInstance#force_remove}
  */
  readonly forceRemove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance#id DrdsRdsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance#storage_type DrdsRdsInstance#storage_type}
  */
  readonly storageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance#zone_id DrdsRdsInstance#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance alibabacloudstack_drds_rds_instance}
*/
export class DrdsRdsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_drds_rds_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrdsRdsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrdsRdsInstance to import
  * @param importFromId The id of the existing DrdsRdsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrdsRdsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_drds_rds_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/drds_rds_instance alibabacloudstack_drds_rds_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrdsRdsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DrdsRdsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_drds_rds_instance',
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
    this._category = config.category;
    this._dbInstanceClass = config.dbInstanceClass;
    this._dbInstanceStorage = config.dbInstanceStorage;
    this._drdsInstanceId = config.drdsInstanceId;
    this._forceRemove = config.forceRemove;
    this._id = config.id;
    this._storageType = config.storageType;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_instance_class - computed: false, optional: false, required: true
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // db_instance_storage - computed: false, optional: false, required: true
  private _dbInstanceStorage?: number; 
  public get dbInstanceStorage() {
    return this.getNumberAttribute('db_instance_storage');
  }
  public set dbInstanceStorage(value: number) {
    this._dbInstanceStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceStorageInput() {
    return this._dbInstanceStorage;
  }

  // drds_instance_id - computed: false, optional: false, required: true
  private _drdsInstanceId?: string; 
  public get drdsInstanceId() {
    return this.getStringAttribute('drds_instance_id');
  }
  public set drdsInstanceId(value: string) {
    this._drdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drdsInstanceIdInput() {
    return this._drdsInstanceId;
  }

  // force_remove - computed: false, optional: true, required: false
  private _forceRemove?: boolean | cdktf.IResolvable; 
  public get forceRemove() {
    return this.getBooleanAttribute('force_remove');
  }
  public set forceRemove(value: boolean | cdktf.IResolvable) {
    this._forceRemove = value;
  }
  public resetForceRemove() {
    this._forceRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRemoveInput() {
    return this._forceRemove;
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

  // rds_instance_id - computed: true, optional: false, required: false
  public get rdsInstanceId() {
    return this.getStringAttribute('rds_instance_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      db_instance_class: cdktf.stringToTerraform(this._dbInstanceClass),
      db_instance_storage: cdktf.numberToTerraform(this._dbInstanceStorage),
      drds_instance_id: cdktf.stringToTerraform(this._drdsInstanceId),
      force_remove: cdktf.booleanToTerraform(this._forceRemove),
      id: cdktf.stringToTerraform(this._id),
      storage_type: cdktf.stringToTerraform(this._storageType),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_class: {
        value: cdktf.stringToHclTerraform(this._dbInstanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_storage: {
        value: cdktf.numberToHclTerraform(this._dbInstanceStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drds_instance_id: {
        value: cdktf.stringToHclTerraform(this._drdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_remove: {
        value: cdktf.booleanToHclTerraform(this._forceRemove),
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
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
