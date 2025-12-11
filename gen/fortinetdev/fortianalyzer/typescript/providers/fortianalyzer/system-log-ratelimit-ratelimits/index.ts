// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_ratelimit_ratelimits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogRatelimitRatelimitsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_ratelimit_ratelimits#filter SystemLogRatelimitRatelimitsA#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_ratelimit_ratelimits#filter_type SystemLogRatelimitRatelimitsA#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_ratelimit_ratelimits#fosid SystemLogRatelimitRatelimitsA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_ratelimit_ratelimits#id SystemLogRatelimitRatelimitsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_ratelimit_ratelimits#ratelimit SystemLogRatelimitRatelimitsA#ratelimit}
  */
  readonly ratelimit?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_ratelimit_ratelimits fortianalyzer_system_log_ratelimit_ratelimits}
*/
export class SystemLogRatelimitRatelimitsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_log_ratelimit_ratelimits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogRatelimitRatelimitsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogRatelimitRatelimitsA to import
  * @param importFromId The id of the existing SystemLogRatelimitRatelimitsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_ratelimit_ratelimits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogRatelimitRatelimitsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_log_ratelimit_ratelimits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_log_ratelimit_ratelimits fortianalyzer_system_log_ratelimit_ratelimits} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogRatelimitRatelimitsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogRatelimitRatelimitsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_log_ratelimit_ratelimits',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._filterType = config.filterType;
    this._fosid = config.fosid;
    this._id = config.id;
    this._ratelimit = config.ratelimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // ratelimit - computed: false, optional: true, required: false
  private _ratelimit?: number; 
  public get ratelimit() {
    return this.getNumberAttribute('ratelimit');
  }
  public set ratelimit(value: number) {
    this._ratelimit = value;
  }
  public resetRatelimit() {
    this._ratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitInput() {
    return this._ratelimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      filter_type: cdktf.stringToTerraform(this._filterType),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      ratelimit: cdktf.numberToTerraform(this._ratelimit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_type: {
        value: cdktf.stringToHclTerraform(this._filterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ratelimit: {
        value: cdktf.numberToHclTerraform(this._ratelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
