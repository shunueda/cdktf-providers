// https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dnsmasq_options_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLibvirtNetworkDnsmasqOptionsTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dnsmasq_options_template#id DataLibvirtNetworkDnsmasqOptionsTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dnsmasq_options_template#option_name DataLibvirtNetworkDnsmasqOptionsTemplate#option_name}
  */
  readonly optionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dnsmasq_options_template#option_value DataLibvirtNetworkDnsmasqOptionsTemplate#option_value}
  */
  readonly optionValue?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dnsmasq_options_template libvirt_network_dnsmasq_options_template}
*/
export class DataLibvirtNetworkDnsmasqOptionsTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_network_dnsmasq_options_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLibvirtNetworkDnsmasqOptionsTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLibvirtNetworkDnsmasqOptionsTemplate to import
  * @param importFromId The id of the existing DataLibvirtNetworkDnsmasqOptionsTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dnsmasq_options_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLibvirtNetworkDnsmasqOptionsTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_network_dnsmasq_options_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dnsmasq_options_template libvirt_network_dnsmasq_options_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLibvirtNetworkDnsmasqOptionsTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataLibvirtNetworkDnsmasqOptionsTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_network_dnsmasq_options_template',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.8.3'
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
    this._optionName = config.optionName;
    this._optionValue = config.optionValue;
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

  // option_name - computed: false, optional: false, required: true
  private _optionName?: string; 
  public get optionName() {
    return this.getStringAttribute('option_name');
  }
  public set optionName(value: string) {
    this._optionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionNameInput() {
    return this._optionName;
  }

  // option_value - computed: false, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // rendered - computed: true, optional: false, required: false
  private _rendered = new cdktf.StringMap(this, "rendered");
  public get rendered() {
    return this._rendered;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      option_name: cdktf.stringToTerraform(this._optionName),
      option_value: cdktf.stringToTerraform(this._optionValue),
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
      option_name: {
        value: cdktf.stringToHclTerraform(this._optionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option_value: {
        value: cdktf.stringToHclTerraform(this._optionValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
