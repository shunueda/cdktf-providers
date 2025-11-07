// https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dns_host_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLibvirtNetworkDnsHostTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dns_host_template#hostname DataLibvirtNetworkDnsHostTemplate#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dns_host_template#id DataLibvirtNetworkDnsHostTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dns_host_template#ip DataLibvirtNetworkDnsHostTemplate#ip}
  */
  readonly ip: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dns_host_template libvirt_network_dns_host_template}
*/
export class DataLibvirtNetworkDnsHostTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_network_dns_host_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLibvirtNetworkDnsHostTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLibvirtNetworkDnsHostTemplate to import
  * @param importFromId The id of the existing DataLibvirtNetworkDnsHostTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dns_host_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLibvirtNetworkDnsHostTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_network_dns_host_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.8.3/docs/data-sources/network_dns_host_template libvirt_network_dns_host_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLibvirtNetworkDnsHostTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataLibvirtNetworkDnsHostTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_network_dns_host_template',
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
    this._hostname = config.hostname;
    this._id = config.id;
    this._ip = config.ip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
