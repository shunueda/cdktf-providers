// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_peripshaper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosFirewallshaperPeripshaperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_peripshaper#id DataFortiosFirewallshaperPeripshaper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_peripshaper#name DataFortiosFirewallshaperPeripshaper#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_peripshaper#vdomparam DataFortiosFirewallshaperPeripshaper#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_peripshaper fortios_firewallshaper_peripshaper}
*/
export class DataFortiosFirewallshaperPeripshaper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewallshaper_peripshaper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosFirewallshaperPeripshaper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosFirewallshaperPeripshaper to import
  * @param importFromId The id of the existing DataFortiosFirewallshaperPeripshaper that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_peripshaper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosFirewallshaperPeripshaper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewallshaper_peripshaper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_peripshaper fortios_firewallshaper_peripshaper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosFirewallshaperPeripshaperConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosFirewallshaperPeripshaperConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewallshaper_peripshaper',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_unit - computed: true, optional: false, required: false
  public get bandwidthUnit() {
    return this.getStringAttribute('bandwidth_unit');
  }

  // diffserv_forward - computed: true, optional: false, required: false
  public get diffservForward() {
    return this.getStringAttribute('diffserv_forward');
  }

  // diffserv_reverse - computed: true, optional: false, required: false
  public get diffservReverse() {
    return this.getStringAttribute('diffserv_reverse');
  }

  // diffservcode_forward - computed: true, optional: false, required: false
  public get diffservcodeForward() {
    return this.getStringAttribute('diffservcode_forward');
  }

  // diffservcode_rev - computed: true, optional: false, required: false
  public get diffservcodeRev() {
    return this.getStringAttribute('diffservcode_rev');
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

  // max_bandwidth - computed: true, optional: false, required: false
  public get maxBandwidth() {
    return this.getNumberAttribute('max_bandwidth');
  }

  // max_concurrent_session - computed: true, optional: false, required: false
  public get maxConcurrentSession() {
    return this.getNumberAttribute('max_concurrent_session');
  }

  // max_concurrent_tcp_session - computed: true, optional: false, required: false
  public get maxConcurrentTcpSession() {
    return this.getNumberAttribute('max_concurrent_tcp_session');
  }

  // max_concurrent_udp_session - computed: true, optional: false, required: false
  public get maxConcurrentUdpSession() {
    return this.getNumberAttribute('max_concurrent_udp_session');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
