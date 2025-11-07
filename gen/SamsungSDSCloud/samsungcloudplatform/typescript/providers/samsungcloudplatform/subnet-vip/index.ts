// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/subnet_vip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetVipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/subnet_vip#id SubnetVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target Subnet id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/subnet_vip#subnet_id SubnetVip#subnet_id}
  */
  readonly subnetId: string;
  /**
  * subnet ip id. (Available ip id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/subnet_vip#subnet_ip_id SubnetVip#subnet_ip_id}
  */
  readonly subnetIpId: string;
  /**
  * Subnet vip description. (Up to 50 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/subnet_vip#vip_description SubnetVip#vip_description}
  */
  readonly vipDescription?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/subnet_vip samsungcloudplatform_subnet_vip}
*/
export class SubnetVip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_subnet_vip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SubnetVip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubnetVip to import
  * @param importFromId The id of the existing SubnetVip that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/subnet_vip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubnetVip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_subnet_vip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/subnet_vip samsungcloudplatform_subnet_vip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetVipConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetVipConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_subnet_vip',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._subnetId = config.subnetId;
    this._subnetIpId = config.subnetIpId;
    this._vipDescription = config.vipDescription;
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_ip_id - computed: false, optional: false, required: true
  private _subnetIpId?: string; 
  public get subnetIpId() {
    return this.getStringAttribute('subnet_ip_id');
  }
  public set subnetIpId(value: string) {
    this._subnetIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpIdInput() {
    return this._subnetIpId;
  }

  // vip_description - computed: false, optional: true, required: false
  private _vipDescription?: string; 
  public get vipDescription() {
    return this.getStringAttribute('vip_description');
  }
  public set vipDescription(value: string) {
    this._vipDescription = value;
  }
  public resetVipDescription() {
    this._vipDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipDescriptionInput() {
    return this._vipDescription;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subnet_ip_id: cdktf.stringToTerraform(this._subnetIpId),
      vip_description: cdktf.stringToTerraform(this._vipDescription),
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
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ip_id: {
        value: cdktf.stringToHclTerraform(this._subnetIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_description: {
        value: cdktf.stringToHclTerraform(this._vipDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
