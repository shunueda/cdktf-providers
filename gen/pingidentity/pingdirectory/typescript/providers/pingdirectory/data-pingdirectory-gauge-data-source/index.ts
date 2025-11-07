// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/gauge_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryGaugeDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/gauge_data_source#name DataPingdirectoryGaugeDataSource#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/gauge_data_source pingdirectory_gauge_data_source}
*/
export class DataPingdirectoryGaugeDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_gauge_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryGaugeDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryGaugeDataSource to import
  * @param importFromId The id of the existing DataPingdirectoryGaugeDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/gauge_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryGaugeDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_gauge_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/gauge_data_source pingdirectory_gauge_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryGaugeDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryGaugeDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_gauge_data_source',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_text - computed: true, optional: false, required: false
  public get additionalText() {
    return this.getStringAttribute('additional_text');
  }

  // data_orientation - computed: true, optional: false, required: false
  public get dataOrientation() {
    return this.getStringAttribute('data_orientation');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // divide_value_by - computed: true, optional: false, required: false
  public get divideValueBy() {
    return this.getNumberAttribute('divide_value_by');
  }

  // divide_value_by_attribute - computed: true, optional: false, required: false
  public get divideValueByAttribute() {
    return this.getStringAttribute('divide_value_by_attribute');
  }

  // divide_value_by_counter_attribute - computed: true, optional: false, required: false
  public get divideValueByCounterAttribute() {
    return this.getStringAttribute('divide_value_by_counter_attribute');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_filter - computed: true, optional: false, required: false
  public get includeFilter() {
    return this.getStringAttribute('include_filter');
  }

  // minimum_update_interval - computed: true, optional: false, required: false
  public get minimumUpdateInterval() {
    return this.getStringAttribute('minimum_update_interval');
  }

  // monitor_attribute - computed: true, optional: false, required: false
  public get monitorAttribute() {
    return this.getStringAttribute('monitor_attribute');
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

  // resource_attribute - computed: true, optional: false, required: false
  public get resourceAttribute() {
    return this.getStringAttribute('resource_attribute');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // statistic_type - computed: true, optional: false, required: false
  public get statisticType() {
    return this.getStringAttribute('statistic_type');
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
