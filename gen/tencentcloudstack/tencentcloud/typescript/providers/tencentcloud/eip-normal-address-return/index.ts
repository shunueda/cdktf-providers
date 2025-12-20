// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/eip_normal_address_return
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EipNormalAddressReturnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address of the EIP, example: 101.35.139.183.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/eip_normal_address_return#address_ips EipNormalAddressReturn#address_ips}
  */
  readonly addressIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/eip_normal_address_return#id EipNormalAddressReturn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/eip_normal_address_return tencentcloud_eip_normal_address_return}
*/
export class EipNormalAddressReturn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_eip_normal_address_return";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EipNormalAddressReturn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EipNormalAddressReturn to import
  * @param importFromId The id of the existing EipNormalAddressReturn that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/eip_normal_address_return#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EipNormalAddressReturn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_eip_normal_address_return", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/eip_normal_address_return tencentcloud_eip_normal_address_return} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EipNormalAddressReturnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EipNormalAddressReturnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_eip_normal_address_return',
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
    this._addressIps = config.addressIps;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ips - computed: false, optional: true, required: false
  private _addressIps?: string[]; 
  public get addressIps() {
    return cdktf.Fn.tolist(this.getListAttribute('address_ips'));
  }
  public set addressIps(value: string[]) {
    this._addressIps = value;
  }
  public resetAddressIps() {
    this._addressIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpsInput() {
    return this._addressIps;
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
      address_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressIps),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addressIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
