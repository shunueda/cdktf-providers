// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_vnic_ipv4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZecVnicIpv4Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_vnic_ipv4#id ZecVnicIpv4#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Assign specified secondary private ipv4 address. This IP address must be an available IP address within the CIDR block of the subnet to which the vNIC belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_vnic_ipv4#secondary_private_ip_addresses ZecVnicIpv4#secondary_private_ip_addresses}
  */
  readonly secondaryPrivateIpAddresses?: string[];
  /**
  * The number of newly-applied private IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_vnic_ipv4#secondary_private_ip_count ZecVnicIpv4#secondary_private_ip_count}
  */
  readonly secondaryPrivateIpCount?: number;
  /**
  * The ID of the vNIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_vnic_ipv4#vnic_id ZecVnicIpv4#vnic_id}
  */
  readonly vnicId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_vnic_ipv4 zenlayercloud_zec_vnic_ipv4}
*/
export class ZecVnicIpv4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_vnic_ipv4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZecVnicIpv4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZecVnicIpv4 to import
  * @param importFromId The id of the existing ZecVnicIpv4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_vnic_ipv4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZecVnicIpv4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_vnic_ipv4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/zec_vnic_ipv4 zenlayercloud_zec_vnic_ipv4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZecVnicIpv4Config
  */
  public constructor(scope: Construct, id: string, config: ZecVnicIpv4Config) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_vnic_ipv4',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.10',
        providerVersionConstraint: '0.2.10'
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
    this._secondaryPrivateIpAddresses = config.secondaryPrivateIpAddresses;
    this._secondaryPrivateIpCount = config.secondaryPrivateIpCount;
    this._vnicId = config.vnicId;
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

  // secondary_private_ip_addresses - computed: true, optional: true, required: false
  private _secondaryPrivateIpAddresses?: string[]; 
  public get secondaryPrivateIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_private_ip_addresses'));
  }
  public set secondaryPrivateIpAddresses(value: string[]) {
    this._secondaryPrivateIpAddresses = value;
  }
  public resetSecondaryPrivateIpAddresses() {
    this._secondaryPrivateIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpAddressesInput() {
    return this._secondaryPrivateIpAddresses;
  }

  // secondary_private_ip_count - computed: true, optional: true, required: false
  private _secondaryPrivateIpCount?: number; 
  public get secondaryPrivateIpCount() {
    return this.getNumberAttribute('secondary_private_ip_count');
  }
  public set secondaryPrivateIpCount(value: number) {
    this._secondaryPrivateIpCount = value;
  }
  public resetSecondaryPrivateIpCount() {
    this._secondaryPrivateIpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpCountInput() {
    return this._secondaryPrivateIpCount;
  }

  // vnic_id - computed: false, optional: false, required: true
  private _vnicId?: string; 
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }
  public set vnicId(value: string) {
    this._vnicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicIdInput() {
    return this._vnicId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      secondary_private_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryPrivateIpAddresses),
      secondary_private_ip_count: cdktf.numberToTerraform(this._secondaryPrivateIpCount),
      vnic_id: cdktf.stringToTerraform(this._vnicId),
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
      secondary_private_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryPrivateIpAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secondary_private_ip_count: {
        value: cdktf.numberToHclTerraform(this._secondaryPrivateIpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vnic_id: {
        value: cdktf.stringToHclTerraform(this._vnicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
