// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_recycle_bin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NasRecycleBinConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_recycle_bin#file_system_id NasRecycleBin#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_recycle_bin#id NasRecycleBin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_recycle_bin#reserved_days NasRecycleBin#reserved_days}
  */
  readonly reservedDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_recycle_bin alicloud_nas_recycle_bin}
*/
export class NasRecycleBin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nas_recycle_bin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NasRecycleBin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NasRecycleBin to import
  * @param importFromId The id of the existing NasRecycleBin that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_recycle_bin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NasRecycleBin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nas_recycle_bin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/nas_recycle_bin alicloud_nas_recycle_bin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NasRecycleBinConfig
  */
  public constructor(scope: Construct, id: string, config: NasRecycleBinConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nas_recycle_bin',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fileSystemId = config.fileSystemId;
    this._id = config.id;
    this._reservedDays = config.reservedDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
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

  // reserved_days - computed: true, optional: true, required: false
  private _reservedDays?: number; 
  public get reservedDays() {
    return this.getNumberAttribute('reserved_days');
  }
  public set reservedDays(value: number) {
    this._reservedDays = value;
  }
  public resetReservedDays() {
    this._reservedDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedDaysInput() {
    return this._reservedDays;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      id: cdktf.stringToTerraform(this._id),
      reserved_days: cdktf.numberToTerraform(this._reservedDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_system_id: {
        value: cdktf.stringToHclTerraform(this._fileSystemId),
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
      reserved_days: {
        value: cdktf.numberToHclTerraform(this._reservedDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
