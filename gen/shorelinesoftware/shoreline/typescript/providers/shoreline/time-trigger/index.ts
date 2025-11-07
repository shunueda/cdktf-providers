// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/time_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TimeTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * If the object is currently enabled or disabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/time_trigger#enabled TimeTrigger#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * When the trigger condition stops firing. (defaults to unset, e.g. no stop date). The accepted format is ISO8601, e.g. '2029-02-17T08:08:01'. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/time_trigger#end_date TimeTrigger#end_date}
  */
  readonly endDate?: string;
  /**
  * The trigger condition for an Alarm (general expression) or the TimeTrigger (e.g. 'every 5m').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/time_trigger#fire_query TimeTrigger#fire_query}
  */
  readonly fireQuery: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/time_trigger#id TimeTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/time_trigger#name TimeTrigger#name}
  */
  readonly name: string;
  /**
  * When the trigger condition starts firing (defaults to creation/update time of the trigger). The accepted format is ISO8601, e.g. '2024-02-17T08:08:01'. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/time_trigger#start_date TimeTrigger#start_date}
  */
  readonly startDate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/time_trigger shoreline_time_trigger}
*/
export class TimeTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_time_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TimeTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TimeTrigger to import
  * @param importFromId The id of the existing TimeTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/time_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TimeTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_time_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/time_trigger shoreline_time_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimeTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: TimeTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_time_trigger',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._endDate = config.endDate;
    this._fireQuery = config.fireQuery;
    this._id = config.id;
    this._name = config.name;
    this._startDate = config.startDate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // fire_query - computed: false, optional: false, required: true
  private _fireQuery?: string; 
  public get fireQuery() {
    return this.getStringAttribute('fire_query');
  }
  public set fireQuery(value: string) {
    this._fireQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fireQueryInput() {
    return this._fireQuery;
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

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      end_date: cdktf.stringToTerraform(this._endDate),
      fire_query: cdktf.stringToTerraform(this._fireQuery),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      start_date: cdktf.stringToTerraform(this._startDate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fire_query: {
        value: cdktf.stringToHclTerraform(this._fireQuery),
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
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
