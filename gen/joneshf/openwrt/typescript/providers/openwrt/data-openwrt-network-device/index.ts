// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/network_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenwrtNetworkDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/network_device#id DataOpenwrtNetworkDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/network_device openwrt_network_device}
*/
export class DataOpenwrtNetworkDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_network_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenwrtNetworkDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenwrtNetworkDevice to import
  * @param importFromId The id of the existing DataOpenwrtNetworkDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/network_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenwrtNetworkDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_network_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/network_device openwrt_network_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenwrtNetworkDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenwrtNetworkDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_network_device',
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

  // bridge_empty - computed: true, optional: false, required: false
  public get bridgeEmpty() {
    return this.getBooleanAttribute('bridge_empty');
  }

  // dadtransmits - computed: true, optional: false, required: false
  public get dadtransmits() {
    return this.getNumberAttribute('dadtransmits');
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

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }

  // macaddr - computed: true, optional: false, required: false
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // mtu6 - computed: true, optional: false, required: false
  public get mtu6() {
    return this.getNumberAttribute('mtu6');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }

  // txqueuelen - computed: true, optional: false, required: false
  public get txqueuelen() {
    return this.getNumberAttribute('txqueuelen');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
