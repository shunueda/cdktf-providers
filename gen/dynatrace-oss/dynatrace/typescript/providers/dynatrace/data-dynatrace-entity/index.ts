// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/entity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDynatraceEntityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/entity#entity_selector DataDynatraceEntity#entity_selector}
  */
  readonly entitySelector?: string;
  /**
  * Limits the time frame entities are queried for - specifically the start of the requested timeframe. Defaults to `now-3y`. You can use one of the following formats:
  *   * Timestamp in UTC milliseconds
  *   * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, `UTC` is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional
  *   * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week. You can also specify relative timeframe without an alignment: `now-NU`. Supported time units for the relative timeframe are:
  *     - `m` for minutes
  *     - `h` for hours
  *     - `d` for days
  *     - `w` for weeks
  *     - `M` for months
  *     - `y` for years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/entity#from DataDynatraceEntity#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/entity#id DataDynatraceEntity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/entity#name DataDynatraceEntity#name}
  */
  readonly name?: string;
  /**
  * Limits the time frame entities are queried for - specifically the end of the requested timeframe. Defaults to `now`. You can use one of the following formats:
  *   * Timestamp in UTC milliseconds
  *   * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, `UTC` is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional
  *   * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week. You can also specify relative timeframe without an alignment: `now-NU`. Supported time units for the relative timeframe are:
  *     - `m` for minutes
  *     - `h` for hours
  *     - `d` for days
  *     - `w` for weeks
  *     - `M` for months
  *     - `y` for years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/entity#to DataDynatraceEntity#to}
  */
  readonly to?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/entity#type DataDynatraceEntity#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/entity dynatrace_entity}
*/
export class DataDynatraceEntity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_entity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDynatraceEntity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDynatraceEntity to import
  * @param importFromId The id of the existing DataDynatraceEntity that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/entity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDynatraceEntity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_entity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/entity dynatrace_entity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDynatraceEntityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDynatraceEntityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_entity',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entitySelector = config.entitySelector;
    this._from = config.from;
    this._id = config.id;
    this._name = config.name;
    this._to = config.to;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_selector - computed: false, optional: true, required: false
  private _entitySelector?: string; 
  public get entitySelector() {
    return this.getStringAttribute('entity_selector');
  }
  public set entitySelector(value: string) {
    this._entitySelector = value;
  }
  public resetEntitySelector() {
    this._entitySelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySelectorInput() {
    return this._entitySelector;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_selector: cdktf.stringToTerraform(this._entitySelector),
      from: cdktf.stringToTerraform(this._from),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      to: cdktf.stringToTerraform(this._to),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_selector: {
        value: cdktf.stringToHclTerraform(this._entitySelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      to: {
        value: cdktf.stringToHclTerraform(this._to),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
