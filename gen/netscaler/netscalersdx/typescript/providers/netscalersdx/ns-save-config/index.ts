// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ns_save_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsSaveConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ns_save_config#id NsSaveConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of NetScaler ADC IP Address. Minimum length =  1 Maximum length =  1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ns_save_config#ns_ip_address_arr NsSaveConfig#ns_ip_address_arr}
  */
  readonly nsIpAddressArr: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ns_save_config netscalersdx_ns_save_config}
*/
export class NsSaveConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_ns_save_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsSaveConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsSaveConfig to import
  * @param importFromId The id of the existing NsSaveConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ns_save_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsSaveConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_ns_save_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/ns_save_config netscalersdx_ns_save_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsSaveConfigConfig
  */
  public constructor(scope: Construct, id: string, config: NsSaveConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_ns_save_config',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
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
    this._nsIpAddressArr = config.nsIpAddressArr;
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

  // ns_ip_address_arr - computed: false, optional: false, required: true
  private _nsIpAddressArr?: string[]; 
  public get nsIpAddressArr() {
    return this.getListAttribute('ns_ip_address_arr');
  }
  public set nsIpAddressArr(value: string[]) {
    this._nsIpAddressArr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIpAddressArrInput() {
    return this._nsIpAddressArr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ns_ip_address_arr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsIpAddressArr),
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
      ns_ip_address_arr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsIpAddressArr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
