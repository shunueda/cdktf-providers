// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dc_internet_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcInternetAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * 0: IPv4, 1: IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dc_internet_address#addr_proto DcInternetAddress#addr_proto}
  */
  readonly addrProto: number;
  /**
  * 0: BGP, 1: china telecom, 2: china mobile, 3: china unicom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dc_internet_address#addr_type DcInternetAddress#addr_type}
  */
  readonly addrType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dc_internet_address#id DcInternetAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * CIDR address mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dc_internet_address#mask_len DcInternetAddress#mask_len}
  */
  readonly maskLen: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dc_internet_address tencentcloud_dc_internet_address}
*/
export class DcInternetAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dc_internet_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcInternetAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcInternetAddress to import
  * @param importFromId The id of the existing DcInternetAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dc_internet_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcInternetAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dc_internet_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/dc_internet_address tencentcloud_dc_internet_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcInternetAddressConfig
  */
  public constructor(scope: Construct, id: string, config: DcInternetAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dc_internet_address',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrProto = config.addrProto;
    this._addrType = config.addrType;
    this._id = config.id;
    this._maskLen = config.maskLen;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_proto - computed: false, optional: false, required: true
  private _addrProto?: number; 
  public get addrProto() {
    return this.getNumberAttribute('addr_proto');
  }
  public set addrProto(value: number) {
    this._addrProto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrProtoInput() {
    return this._addrProto;
  }

  // addr_type - computed: false, optional: false, required: true
  private _addrType?: number; 
  public get addrType() {
    return this.getNumberAttribute('addr_type');
  }
  public set addrType(value: number) {
    this._addrType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
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

  // mask_len - computed: false, optional: false, required: true
  private _maskLen?: number; 
  public get maskLen() {
    return this.getNumberAttribute('mask_len');
  }
  public set maskLen(value: number) {
    this._maskLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLenInput() {
    return this._maskLen;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_proto: cdktf.numberToTerraform(this._addrProto),
      addr_type: cdktf.numberToTerraform(this._addrType),
      id: cdktf.stringToTerraform(this._id),
      mask_len: cdktf.numberToTerraform(this._maskLen),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_proto: {
        value: cdktf.numberToHclTerraform(this._addrProto),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      addr_type: {
        value: cdktf.numberToHclTerraform(this._addrType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mask_len: {
        value: cdktf.numberToHclTerraform(this._maskLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
