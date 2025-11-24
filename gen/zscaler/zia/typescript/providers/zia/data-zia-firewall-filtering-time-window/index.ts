// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/firewall_filtering_time_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaFirewallFilteringTimeWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/firewall_filtering_time_window#id DataZiaFirewallFilteringTimeWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/firewall_filtering_time_window#name DataZiaFirewallFilteringTimeWindow#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/firewall_filtering_time_window zia_firewall_filtering_time_window}
*/
export class DataZiaFirewallFilteringTimeWindow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_firewall_filtering_time_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaFirewallFilteringTimeWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaFirewallFilteringTimeWindow to import
  * @param importFromId The id of the existing DataZiaFirewallFilteringTimeWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/firewall_filtering_time_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaFirewallFilteringTimeWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_firewall_filtering_time_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/firewall_filtering_time_window zia_firewall_filtering_time_window} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaFirewallFilteringTimeWindowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaFirewallFilteringTimeWindowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_firewall_filtering_time_window',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
