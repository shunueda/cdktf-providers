// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_trafficshaper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosFirewallshaperTrafficshaperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_trafficshaper#id DataFortiosFirewallshaperTrafficshaper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_trafficshaper#name DataFortiosFirewallshaperTrafficshaper#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_trafficshaper#vdomparam DataFortiosFirewallshaperTrafficshaper#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_trafficshaper fortios_firewallshaper_trafficshaper}
*/
export class DataFortiosFirewallshaperTrafficshaper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewallshaper_trafficshaper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosFirewallshaperTrafficshaper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosFirewallshaperTrafficshaper to import
  * @param importFromId The id of the existing DataFortiosFirewallshaperTrafficshaper that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_trafficshaper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosFirewallshaperTrafficshaper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewallshaper_trafficshaper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewallshaper_trafficshaper fortios_firewallshaper_trafficshaper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosFirewallshaperTrafficshaperConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosFirewallshaperTrafficshaperConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewallshaper_trafficshaper',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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

  // cos - computed: true, optional: false, required: false
  public get cos() {
    return this.getStringAttribute('cos');
  }

  // cos_marking - computed: true, optional: false, required: false
  public get cosMarking() {
    return this.getStringAttribute('cos_marking');
  }

  // cos_marking_method - computed: true, optional: false, required: false
  public get cosMarkingMethod() {
    return this.getStringAttribute('cos_marking_method');
  }

  // diffserv - computed: true, optional: false, required: false
  public get diffserv() {
    return this.getStringAttribute('diffserv');
  }

  // diffservcode - computed: true, optional: false, required: false
  public get diffservcode() {
    return this.getStringAttribute('diffservcode');
  }

  // dscp_marking_method - computed: true, optional: false, required: false
  public get dscpMarkingMethod() {
    return this.getStringAttribute('dscp_marking_method');
  }

  // exceed_bandwidth - computed: true, optional: false, required: false
  public get exceedBandwidth() {
    return this.getNumberAttribute('exceed_bandwidth');
  }

  // exceed_class_id - computed: true, optional: false, required: false
  public get exceedClassId() {
    return this.getNumberAttribute('exceed_class_id');
  }

  // exceed_cos - computed: true, optional: false, required: false
  public get exceedCos() {
    return this.getStringAttribute('exceed_cos');
  }

  // exceed_dscp - computed: true, optional: false, required: false
  public get exceedDscp() {
    return this.getStringAttribute('exceed_dscp');
  }

  // guaranteed_bandwidth - computed: true, optional: false, required: false
  public get guaranteedBandwidth() {
    return this.getNumberAttribute('guaranteed_bandwidth');
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

  // maximum_bandwidth - computed: true, optional: false, required: false
  public get maximumBandwidth() {
    return this.getNumberAttribute('maximum_bandwidth');
  }

  // maximum_cos - computed: true, optional: false, required: false
  public get maximumCos() {
    return this.getStringAttribute('maximum_cos');
  }

  // maximum_dscp - computed: true, optional: false, required: false
  public get maximumDscp() {
    return this.getStringAttribute('maximum_dscp');
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

  // overhead - computed: true, optional: false, required: false
  public get overhead() {
    return this.getNumberAttribute('overhead');
  }

  // per_policy - computed: true, optional: false, required: false
  public get perPolicy() {
    return this.getStringAttribute('per_policy');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
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
