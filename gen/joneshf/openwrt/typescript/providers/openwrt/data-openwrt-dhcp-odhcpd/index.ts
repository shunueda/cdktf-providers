// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/dhcp_odhcpd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenwrtDhcpOdhcpdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/dhcp_odhcpd#id DataOpenwrtDhcpOdhcpd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/dhcp_odhcpd openwrt_dhcp_odhcpd}
*/
export class DataOpenwrtDhcpOdhcpd extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_dhcp_odhcpd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenwrtDhcpOdhcpd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenwrtDhcpOdhcpd to import
  * @param importFromId The id of the existing DataOpenwrtDhcpOdhcpd that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/dhcp_odhcpd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenwrtDhcpOdhcpd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_dhcp_odhcpd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/dhcp_odhcpd openwrt_dhcp_odhcpd} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenwrtDhcpOdhcpdConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenwrtDhcpOdhcpdConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_dhcp_odhcpd',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20',
        providerVersionConstraint: '0.0.20'
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

  // leasefile - computed: true, optional: false, required: false
  public get leasefile() {
    return this.getStringAttribute('leasefile');
  }

  // leasetrigger - computed: true, optional: false, required: false
  public get leasetrigger() {
    return this.getStringAttribute('leasetrigger');
  }

  // legacy - computed: true, optional: false, required: false
  public get legacy() {
    return this.getBooleanAttribute('legacy');
  }

  // loglevel - computed: true, optional: false, required: false
  public get loglevel() {
    return this.getNumberAttribute('loglevel');
  }

  // maindhcp - computed: true, optional: false, required: false
  public get maindhcp() {
    return this.getBooleanAttribute('maindhcp');
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
