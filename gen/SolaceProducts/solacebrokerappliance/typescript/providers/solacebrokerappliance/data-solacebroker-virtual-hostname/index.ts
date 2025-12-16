// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_virtual_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerVirtualHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * The virtual hostname.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_virtual_hostname#virtual_hostname DataSolacebrokerVirtualHostname#virtual_hostname}
  */
  readonly virtualHostname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_virtual_hostname solacebroker_virtual_hostname}
*/
export class DataSolacebrokerVirtualHostname extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_virtual_hostname";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerVirtualHostname resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerVirtualHostname to import
  * @param importFromId The id of the existing DataSolacebrokerVirtualHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_virtual_hostname#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerVirtualHostname to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_virtual_hostname", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_virtual_hostname solacebroker_virtual_hostname} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerVirtualHostnameConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerVirtualHostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_virtual_hostname',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._virtualHostname = config.virtualHostname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // msg_vpn_name - computed: true, optional: false, required: false
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }

  // virtual_hostname - computed: false, optional: false, required: true
  private _virtualHostname?: string; 
  public get virtualHostname() {
    return this.getStringAttribute('virtual_hostname');
  }
  public set virtualHostname(value: string) {
    this._virtualHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostnameInput() {
    return this._virtualHostname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      virtual_hostname: cdktf.stringToTerraform(this._virtualHostname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      virtual_hostname: {
        value: cdktf.stringToHclTerraform(this._virtualHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
