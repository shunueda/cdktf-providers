// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/data-sources/network_access_time_and_date_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseNetworkAccessTimeAndDateConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/data-sources/network_access_time_and_date_condition#id DataIseNetworkAccessTimeAndDateCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Condition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/data-sources/network_access_time_and_date_condition#name DataIseNetworkAccessTimeAndDateCondition#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/data-sources/network_access_time_and_date_condition ise_network_access_time_and_date_condition}
*/
export class DataIseNetworkAccessTimeAndDateCondition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_network_access_time_and_date_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseNetworkAccessTimeAndDateCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseNetworkAccessTimeAndDateCondition to import
  * @param importFromId The id of the existing DataIseNetworkAccessTimeAndDateCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/data-sources/network_access_time_and_date_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseNetworkAccessTimeAndDateCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_network_access_time_and_date_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/data-sources/network_access_time_and_date_condition ise_network_access_time_and_date_condition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseNetworkAccessTimeAndDateConditionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIseNetworkAccessTimeAndDateConditionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ise_network_access_time_and_date_condition',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.14',
        providerVersionConstraint: '0.2.14'
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // exception_end_date - computed: true, optional: false, required: false
  public get exceptionEndDate() {
    return this.getStringAttribute('exception_end_date');
  }

  // exception_end_time - computed: true, optional: false, required: false
  public get exceptionEndTime() {
    return this.getStringAttribute('exception_end_time');
  }

  // exception_start_date - computed: true, optional: false, required: false
  public get exceptionStartDate() {
    return this.getStringAttribute('exception_start_date');
  }

  // exception_start_time - computed: true, optional: false, required: false
  public get exceptionStartTime() {
    return this.getStringAttribute('exception_start_time');
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

  // is_negate - computed: true, optional: false, required: false
  public get isNegate() {
    return this.getBooleanAttribute('is_negate');
  }

  // name - computed: true, optional: true, required: false
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

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // week_days - computed: true, optional: false, required: false
  public get weekDays() {
    return cdktf.Fn.tolist(this.getListAttribute('week_days'));
  }

  // week_days_exception - computed: true, optional: false, required: false
  public get weekDaysException() {
    return cdktf.Fn.tolist(this.getListAttribute('week_days_exception'));
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
