// https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/disk_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/disk_attachment#availability_zone DiskAttachment#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/disk_attachment#disk_id DiskAttachment#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/disk_attachment#id DiskAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/disk_attachment#instance_id DiskAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/disk_attachment#stop_instance_before_detaching DiskAttachment#stop_instance_before_detaching}
  */
  readonly stopInstanceBeforeDetaching?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/disk_attachment ucloud_disk_attachment}
*/
export class DiskAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ucloud_disk_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskAttachment to import
  * @param importFromId The id of the existing DiskAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/disk_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ucloud_disk_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ucloud/ucloud/1.39.1/docs/resources/disk_attachment ucloud_disk_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DiskAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'ucloud_disk_attachment',
      terraformGeneratorMetadata: {
        providerName: 'ucloud',
        providerVersion: '1.39.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._diskId = config.diskId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._stopInstanceBeforeDetaching = config.stopInstanceBeforeDetaching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
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

  // stop_instance_before_detaching - computed: false, optional: true, required: false
  private _stopInstanceBeforeDetaching?: boolean | cdktf.IResolvable; 
  public get stopInstanceBeforeDetaching() {
    return this.getBooleanAttribute('stop_instance_before_detaching');
  }
  public set stopInstanceBeforeDetaching(value: boolean | cdktf.IResolvable) {
    this._stopInstanceBeforeDetaching = value;
  }
  public resetStopInstanceBeforeDetaching() {
    this._stopInstanceBeforeDetaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopInstanceBeforeDetachingInput() {
    return this._stopInstanceBeforeDetaching;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      disk_id: cdktf.stringToTerraform(this._diskId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      stop_instance_before_detaching: cdktf.booleanToTerraform(this._stopInstanceBeforeDetaching),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_id: {
        value: cdktf.stringToHclTerraform(this._diskId),
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
      stop_instance_before_detaching: {
        value: cdktf.booleanToHclTerraform(this._stopInstanceBeforeDetaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
