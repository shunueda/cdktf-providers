// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/simple_application_server_custom_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SimpleApplicationServerCustomImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/simple_application_server_custom_image#custom_image_name SimpleApplicationServerCustomImage#custom_image_name}
  */
  readonly customImageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/simple_application_server_custom_image#description SimpleApplicationServerCustomImage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/simple_application_server_custom_image#id SimpleApplicationServerCustomImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/simple_application_server_custom_image#instance_id SimpleApplicationServerCustomImage#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/simple_application_server_custom_image#status SimpleApplicationServerCustomImage#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/simple_application_server_custom_image#system_snapshot_id SimpleApplicationServerCustomImage#system_snapshot_id}
  */
  readonly systemSnapshotId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/simple_application_server_custom_image alicloud_simple_application_server_custom_image}
*/
export class SimpleApplicationServerCustomImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_simple_application_server_custom_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SimpleApplicationServerCustomImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SimpleApplicationServerCustomImage to import
  * @param importFromId The id of the existing SimpleApplicationServerCustomImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/simple_application_server_custom_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SimpleApplicationServerCustomImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_simple_application_server_custom_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/simple_application_server_custom_image alicloud_simple_application_server_custom_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SimpleApplicationServerCustomImageConfig
  */
  public constructor(scope: Construct, id: string, config: SimpleApplicationServerCustomImageConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_simple_application_server_custom_image',
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
    this._customImageName = config.customImageName;
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._status = config.status;
    this._systemSnapshotId = config.systemSnapshotId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_image_name - computed: false, optional: false, required: true
  private _customImageName?: string; 
  public get customImageName() {
    return this.getStringAttribute('custom_image_name');
  }
  public set customImageName(value: string) {
    this._customImageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageNameInput() {
    return this._customImageName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // system_snapshot_id - computed: false, optional: false, required: true
  private _systemSnapshotId?: string; 
  public get systemSnapshotId() {
    return this.getStringAttribute('system_snapshot_id');
  }
  public set systemSnapshotId(value: string) {
    this._systemSnapshotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSnapshotIdInput() {
    return this._systemSnapshotId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_image_name: cdktf.stringToTerraform(this._customImageName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      status: cdktf.stringToTerraform(this._status),
      system_snapshot_id: cdktf.stringToTerraform(this._systemSnapshotId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_image_name: {
        value: cdktf.stringToHclTerraform(this._customImageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_snapshot_id: {
        value: cdktf.stringToHclTerraform(this._systemSnapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
