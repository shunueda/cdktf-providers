// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/subnet_public_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetPublicIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/subnet_public_ip#id SubnetPublicIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Public Ip Address Id (Reserved Public ip id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/subnet_public_ip#public_ip_address_id SubnetPublicIp#public_ip_address_id}
  */
  readonly publicIpAddressId: string;
  /**
  * Target Subnet id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/subnet_public_ip#subnet_id SubnetPublicIp#subnet_id}
  */
  readonly subnetId: string;
  /**
  * subnet Virtual ip id. (Reserved Virtual ip id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/subnet_public_ip#vip_id SubnetPublicIp#vip_id}
  */
  readonly vipId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/subnet_public_ip samsungcloudplatform_subnet_public_ip}
*/
export class SubnetPublicIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_subnet_public_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SubnetPublicIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubnetPublicIp to import
  * @param importFromId The id of the existing SubnetPublicIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/subnet_public_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubnetPublicIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_subnet_public_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/subnet_public_ip samsungcloudplatform_subnet_public_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetPublicIpConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetPublicIpConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_subnet_public_ip',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
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
    this._publicIpAddressId = config.publicIpAddressId;
    this._subnetId = config.subnetId;
    this._vipId = config.vipId;
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

  // public_ip_address_id - computed: false, optional: false, required: true
  private _publicIpAddressId?: string; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId;
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

  // vip_id - computed: false, optional: false, required: true
  private _vipId?: string; 
  public get vipId() {
    return this.getStringAttribute('vip_id');
  }
  public set vipId(value: string) {
    this._vipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipIdInput() {
    return this._vipId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      public_ip_address_id: cdktf.stringToTerraform(this._publicIpAddressId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vip_id: cdktf.stringToTerraform(this._vipId),
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
      public_ip_address_id: {
        value: cdktf.stringToHclTerraform(this._publicIpAddressId),
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
      vip_id: {
        value: cdktf.stringToHclTerraform(this._vipId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
