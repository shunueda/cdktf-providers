// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenwrtNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/network_interface#id DataOpenwrtNetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/network_interface openwrt_network_interface}
*/
export class DataOpenwrtNetworkInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenwrtNetworkInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenwrtNetworkInterface to import
  * @param importFromId The id of the existing DataOpenwrtNetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenwrtNetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/network_interface openwrt_network_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenwrtNetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenwrtNetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto - computed: true, optional: false, required: false
  public get auto() {
    return this.getBooleanAttribute('auto');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getListAttribute('dns');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip6assign - computed: true, optional: false, required: false
  public get ip6Assign() {
    return this.getNumberAttribute('ip6assign');
  }

  // ipaddr - computed: true, optional: false, required: false
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }

  // macaddr - computed: true, optional: false, required: false
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // peerdns - computed: true, optional: false, required: false
  public get peerdns() {
    return this.getBooleanAttribute('peerdns');
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getStringAttribute('proto');
  }

  // reqaddress - computed: true, optional: false, required: false
  public get reqaddress() {
    return this.getStringAttribute('reqaddress');
  }

  // reqprefix - computed: true, optional: false, required: false
  public get reqprefix() {
    return this.getStringAttribute('reqprefix');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
