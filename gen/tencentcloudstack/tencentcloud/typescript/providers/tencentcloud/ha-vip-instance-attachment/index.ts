// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ha_vip_instance_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HaVipInstanceAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique ID of the HaVip instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ha_vip_instance_attachment#ha_vip_id HaVipInstanceAttachment#ha_vip_id}
  */
  readonly haVipId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ha_vip_instance_attachment#id HaVipInstanceAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique ID of the slave machine or network card to which HaVip is bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ha_vip_instance_attachment#instance_id HaVipInstanceAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * The type of HaVip binding. Values:CVM, ENI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ha_vip_instance_attachment#instance_type HaVipInstanceAttachment#instance_type}
  */
  readonly instanceType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ha_vip_instance_attachment tencentcloud_ha_vip_instance_attachment}
*/
export class HaVipInstanceAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ha_vip_instance_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HaVipInstanceAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HaVipInstanceAttachment to import
  * @param importFromId The id of the existing HaVipInstanceAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ha_vip_instance_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HaVipInstanceAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ha_vip_instance_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/ha_vip_instance_attachment tencentcloud_ha_vip_instance_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HaVipInstanceAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: HaVipInstanceAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ha_vip_instance_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._haVipId = config.haVipId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceType = config.instanceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ha_vip_id - computed: false, optional: true, required: false
  private _haVipId?: string; 
  public get haVipId() {
    return this.getStringAttribute('ha_vip_id');
  }
  public set haVipId(value: string) {
    this._haVipId = value;
  }
  public resetHaVipId() {
    this._haVipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haVipIdInput() {
    return this._haVipId;
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

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ha_vip_id: cdktf.stringToTerraform(this._haVipId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_type: cdktf.stringToTerraform(this._instanceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ha_vip_id: {
        value: cdktf.stringToHclTerraform(this._haVipId),
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
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
