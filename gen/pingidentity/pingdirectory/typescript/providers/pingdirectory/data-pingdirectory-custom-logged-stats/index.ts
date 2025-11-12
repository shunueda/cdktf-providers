// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/custom_logged_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryCustomLoggedStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/custom_logged_stats#name DataPingdirectoryCustomLoggedStats#name}
  */
  readonly name: string;
  /**
  * Name of the parent Plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/custom_logged_stats#plugin_name DataPingdirectoryCustomLoggedStats#plugin_name}
  */
  readonly pluginName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/custom_logged_stats pingdirectory_custom_logged_stats}
*/
export class DataPingdirectoryCustomLoggedStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_custom_logged_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryCustomLoggedStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryCustomLoggedStats to import
  * @param importFromId The id of the existing DataPingdirectoryCustomLoggedStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/custom_logged_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryCustomLoggedStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_custom_logged_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/custom_logged_stats pingdirectory_custom_logged_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryCustomLoggedStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryCustomLoggedStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_custom_logged_stats',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._pluginName = config.pluginName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_to_log - computed: true, optional: false, required: false
  public get attributeToLog() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_to_log'));
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return cdktf.Fn.tolist(this.getListAttribute('column_name'));
  }

  // decimal_format - computed: true, optional: false, required: false
  public get decimalFormat() {
    return this.getStringAttribute('decimal_format');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // divide_value_by - computed: true, optional: false, required: false
  public get divideValueBy() {
    return this.getStringAttribute('divide_value_by');
  }

  // divide_value_by_attribute - computed: true, optional: false, required: false
  public get divideValueByAttribute() {
    return this.getStringAttribute('divide_value_by_attribute');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // header_prefix - computed: true, optional: false, required: false
  public get headerPrefix() {
    return this.getStringAttribute('header_prefix');
  }

  // header_prefix_attribute - computed: true, optional: false, required: false
  public get headerPrefixAttribute() {
    return this.getStringAttribute('header_prefix_attribute');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_filter - computed: true, optional: false, required: false
  public get includeFilter() {
    return this.getStringAttribute('include_filter');
  }

  // monitor_objectclass - computed: true, optional: false, required: false
  public get monitorObjectclass() {
    return this.getStringAttribute('monitor_objectclass');
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

  // non_zero_implies_not_idle - computed: true, optional: false, required: false
  public get nonZeroImpliesNotIdle() {
    return this.getBooleanAttribute('non_zero_implies_not_idle');
  }

  // plugin_name - computed: false, optional: false, required: true
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // regex_pattern - computed: true, optional: false, required: false
  public get regexPattern() {
    return this.getStringAttribute('regex_pattern');
  }

  // regex_replacement - computed: true, optional: false, required: false
  public get regexReplacement() {
    return this.getStringAttribute('regex_replacement');
  }

  // statistic_type - computed: true, optional: false, required: false
  public get statisticType() {
    return cdktf.Fn.tolist(this.getListAttribute('statistic_type'));
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
      name: cdktf.stringToTerraform(this._name),
      plugin_name: cdktf.stringToTerraform(this._pluginName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_name: {
        value: cdktf.stringToHclTerraform(this._pluginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
