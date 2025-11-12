// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/dhcp_dnsmasq
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenwrtDhcpDnsmasqConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/dhcp_dnsmasq#id DataOpenwrtDhcpDnsmasq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/dhcp_dnsmasq openwrt_dhcp_dnsmasq}
*/
export class DataOpenwrtDhcpDnsmasq extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_dhcp_dnsmasq";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenwrtDhcpDnsmasq resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenwrtDhcpDnsmasq to import
  * @param importFromId The id of the existing DataOpenwrtDhcpDnsmasq that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/dhcp_dnsmasq#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenwrtDhcpDnsmasq to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_dhcp_dnsmasq", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/data-sources/dhcp_dnsmasq openwrt_dhcp_dnsmasq} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenwrtDhcpDnsmasqConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenwrtDhcpDnsmasqConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_dhcp_dnsmasq',
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

  // authoritative - computed: true, optional: false, required: false
  public get authoritative() {
    return this.getBooleanAttribute('authoritative');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domainneeded - computed: true, optional: false, required: false
  public get domainneeded() {
    return this.getBooleanAttribute('domainneeded');
  }

  // ednspacket_max - computed: true, optional: false, required: false
  public get ednspacketMax() {
    return this.getNumberAttribute('ednspacket_max');
  }

  // expandhosts - computed: true, optional: false, required: false
  public get expandhosts() {
    return this.getBooleanAttribute('expandhosts');
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

  // leasefile - computed: true, optional: false, required: false
  public get leasefile() {
    return this.getStringAttribute('leasefile');
  }

  // local - computed: true, optional: false, required: false
  public get local() {
    return this.getStringAttribute('local');
  }

  // localise_queries - computed: true, optional: false, required: false
  public get localiseQueries() {
    return this.getBooleanAttribute('localise_queries');
  }

  // localservice - computed: true, optional: false, required: false
  public get localservice() {
    return this.getBooleanAttribute('localservice');
  }

  // readethers - computed: true, optional: false, required: false
  public get readethers() {
    return this.getBooleanAttribute('readethers');
  }

  // rebind_localhost - computed: true, optional: false, required: false
  public get rebindLocalhost() {
    return this.getBooleanAttribute('rebind_localhost');
  }

  // rebind_protection - computed: true, optional: false, required: false
  public get rebindProtection() {
    return this.getBooleanAttribute('rebind_protection');
  }

  // resolvfile - computed: true, optional: false, required: false
  public get resolvfile() {
    return this.getStringAttribute('resolvfile');
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
