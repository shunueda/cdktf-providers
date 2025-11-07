// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ecs_storageset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsStoragesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ecs_storageset#id EcsStorageset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ecs_storageset#maxpartition_number EcsStorageset#maxpartition_number}
  */
  readonly maxpartitionNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ecs_storageset#storage_set_name EcsStorageset#storage_set_name}
  */
  readonly storageSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ecs_storageset#zone_id EcsStorageset#zone_id}
  */
  readonly zoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ecs_storageset alibabacloudstack_ecs_storageset}
*/
export class EcsStorageset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ecs_storageset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsStorageset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsStorageset to import
  * @param importFromId The id of the existing EcsStorageset that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ecs_storageset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsStorageset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ecs_storageset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/ecs_storageset alibabacloudstack_ecs_storageset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsStoragesetConfig
  */
  public constructor(scope: Construct, id: string, config: EcsStoragesetConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ecs_storageset',
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
    this._id = config.id;
    this._maxpartitionNumber = config.maxpartitionNumber;
    this._storageSetName = config.storageSetName;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // maxpartition_number - computed: false, optional: true, required: false
  private _maxpartitionNumber?: string; 
  public get maxpartitionNumber() {
    return this.getStringAttribute('maxpartition_number');
  }
  public set maxpartitionNumber(value: string) {
    this._maxpartitionNumber = value;
  }
  public resetMaxpartitionNumber() {
    this._maxpartitionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpartitionNumberInput() {
    return this._maxpartitionNumber;
  }

  // storage_set_id - computed: true, optional: false, required: false
  public get storageSetId() {
    return this.getStringAttribute('storage_set_id');
  }

  // storage_set_name - computed: false, optional: false, required: true
  private _storageSetName?: string; 
  public get storageSetName() {
    return this.getStringAttribute('storage_set_name');
  }
  public set storageSetName(value: string) {
    this._storageSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSetNameInput() {
    return this._storageSetName;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      id: cdktf.stringToTerraform(this._id),
      maxpartition_number: cdktf.stringToTerraform(this._maxpartitionNumber),
      storage_set_name: cdktf.stringToTerraform(this._storageSetName),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxpartition_number: {
        value: cdktf.stringToHclTerraform(this._maxpartitionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_set_name: {
        value: cdktf.stringToHclTerraform(this._storageSetName),
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
