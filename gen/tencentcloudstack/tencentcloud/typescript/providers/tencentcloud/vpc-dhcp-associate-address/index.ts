// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/vpc_dhcp_associate_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcDhcpAssociateAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Elastic public network `IP`. Must be `EIP` not bound to `DhcpIp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/vpc_dhcp_associate_address#address_ip VpcDhcpAssociateAddress#address_ip}
  */
  readonly addressIp: string;
  /**
  * `DhcpIp` unique `ID`, like: `dhcpip-9o233uri`. Must be a `DhcpIp` that is not bound to `EIP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/vpc_dhcp_associate_address#dhcp_ip_id VpcDhcpAssociateAddress#dhcp_ip_id}
  */
  readonly dhcpIpId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/vpc_dhcp_associate_address#id VpcDhcpAssociateAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/vpc_dhcp_associate_address tencentcloud_vpc_dhcp_associate_address}
*/
export class VpcDhcpAssociateAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_dhcp_associate_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcDhcpAssociateAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcDhcpAssociateAddress to import
  * @param importFromId The id of the existing VpcDhcpAssociateAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/vpc_dhcp_associate_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcDhcpAssociateAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_dhcp_associate_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/vpc_dhcp_associate_address tencentcloud_vpc_dhcp_associate_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcDhcpAssociateAddressConfig
  */
  public constructor(scope: Construct, id: string, config: VpcDhcpAssociateAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_dhcp_associate_address',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._dhcpIpId = config.dhcpIpId;
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

  // dhcp_ip_id - computed: false, optional: false, required: true
  private _dhcpIpId?: string; 
  public get dhcpIpId() {
    return this.getStringAttribute('dhcp_ip_id');
  }
  public set dhcpIpId(value: string) {
    this._dhcpIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpIdInput() {
    return this._dhcpIpId;
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
      dhcp_ip_id: cdktf.stringToTerraform(this._dhcpIpId),
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
      dhcp_ip_id: {
        value: cdktf.stringToHclTerraform(this._dhcpIpId),
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
