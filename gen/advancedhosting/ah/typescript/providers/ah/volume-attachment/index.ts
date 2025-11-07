// https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/volume_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/volume_attachment#cloud_server_id VolumeAttachment#cloud_server_id}
  */
  readonly cloudServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/volume_attachment#id VolumeAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/volume_attachment#volume_id VolumeAttachment#volume_id}
  */
  readonly volumeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/volume_attachment ah_volume_attachment}
*/
export class VolumeAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ah_volume_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumeAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumeAttachment to import
  * @param importFromId The id of the existing VolumeAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/volume_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumeAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ah_volume_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/volume_attachment ah_volume_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'ah_volume_attachment',
      terraformGeneratorMetadata: {
        providerName: 'ah',
        providerVersion: '0.3.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudServerId = config.cloudServerId;
    this._id = config.id;
    this._volumeId = config.volumeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_server_id - computed: false, optional: false, required: true
  private _cloudServerId?: string; 
  public get cloudServerId() {
    return this.getStringAttribute('cloud_server_id');
  }
  public set cloudServerId(value: string) {
    this._cloudServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServerIdInput() {
    return this._cloudServerId;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_server_id: cdktf.stringToTerraform(this._cloudServerId),
      id: cdktf.stringToTerraform(this._id),
      volume_id: cdktf.stringToTerraform(this._volumeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_server_id: {
        value: cdktf.stringToHclTerraform(this._cloudServerId),
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
      volume_id: {
        value: cdktf.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
