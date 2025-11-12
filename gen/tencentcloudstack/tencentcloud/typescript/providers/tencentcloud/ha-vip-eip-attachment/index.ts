// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ha_vip_eip_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HaVipEipAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Public address of the EIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ha_vip_eip_attachment#address_ip HaVipEipAttachment#address_ip}
  */
  readonly addressIp: string;
  /**
  * ID of the attached HA VIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ha_vip_eip_attachment#havip_id HaVipEipAttachment#havip_id}
  */
  readonly havipId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ha_vip_eip_attachment#id HaVipEipAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ha_vip_eip_attachment tencentcloud_ha_vip_eip_attachment}
*/
export class HaVipEipAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ha_vip_eip_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HaVipEipAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HaVipEipAttachment to import
  * @param importFromId The id of the existing HaVipEipAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ha_vip_eip_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HaVipEipAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ha_vip_eip_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ha_vip_eip_attachment tencentcloud_ha_vip_eip_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HaVipEipAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: HaVipEipAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ha_vip_eip_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressIp = config.addressIp;
    this._havipId = config.havipId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ip - computed: false, optional: false, required: true
  private _addressIp?: string; 
  public get addressIp() {
    return this.getStringAttribute('address_ip');
  }
  public set addressIp(value: string) {
    this._addressIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpInput() {
    return this._addressIp;
  }

  // havip_id - computed: false, optional: false, required: true
  private _havipId?: string; 
  public get havipId() {
    return this.getStringAttribute('havip_id');
  }
  public set havipId(value: string) {
    this._havipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get havipIdInput() {
    return this._havipId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_ip: cdktf.stringToTerraform(this._addressIp),
      havip_id: cdktf.stringToTerraform(this._havipId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_ip: {
        value: cdktf.stringToHclTerraform(this._addressIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      havip_id: {
        value: cdktf.stringToHclTerraform(this._havipId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
