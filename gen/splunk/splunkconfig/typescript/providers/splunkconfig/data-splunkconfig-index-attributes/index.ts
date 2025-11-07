// https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/index_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSplunkconfigIndexAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/index_attributes#id DataSplunkconfigIndexAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Index name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/index_attributes#name DataSplunkconfigIndexAttributes#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/index_attributes splunkconfig_index_attributes}
*/
export class DataSplunkconfigIndexAttributes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunkconfig_index_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSplunkconfigIndexAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSplunkconfigIndexAttributes to import
  * @param importFromId The id of the existing DataSplunkconfigIndexAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/index_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSplunkconfigIndexAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunkconfig_index_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/index_attributes splunkconfig_index_attributes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSplunkconfigIndexAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSplunkconfigIndexAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'splunkconfig_index_attributes',
      terraformGeneratorMetadata: {
        providerName: 'splunkconfig',
        providerVersion: '1.7.4'
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

  // datatype - computed: true, optional: false, required: false
  public get datatype() {
    return this.getStringAttribute('datatype');
  }

  // frozen_time_period_in_secs - computed: true, optional: false, required: false
  public get frozenTimePeriodInSecs() {
    return this.getNumberAttribute('frozen_time_period_in_secs');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
