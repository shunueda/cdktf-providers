// https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * End of the maintenance window (RFC3339 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window#end MaintenanceWindow#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window#id MaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the maintenance window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window#name MaintenanceWindow#name}
  */
  readonly name: string;
  /**
  * How often the maintenance window should occur
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window#repeat_interval MaintenanceWindow#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * Start of the maintenance window (RFC3339 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window#start MaintenanceWindow#start}
  */
  readonly start: string;
  /**
  * List of tags used to include matching uptime checks in this maintenance window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window#tags MaintenanceWindow#tags}
  */
  readonly tags?: string[];
  /**
  * List of uptime check IDs explicitly included in this maintenance window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window#tests MaintenanceWindow#tests}
  */
  readonly tests?: string[];
  /**
  * Standard timezone associated with this maintenance window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window#timezone MaintenanceWindow#timezone}
  */
  readonly timezone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window statuscake_maintenance_window}
*/
export class MaintenanceWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuscake_maintenance_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaintenanceWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaintenanceWindow to import
  * @param importFromId The id of the existing MaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaintenanceWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuscake_maintenance_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/maintenance_window statuscake_maintenance_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'statuscake_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'statuscake',
        providerVersion: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._end = config.end;
    this._id = config.id;
    this._name = config.name;
    this._repeatInterval = config.repeatInterval;
    this._start = config.start;
    this._tags = config.tags;
    this._tests = config.tests;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
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

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tests - computed: false, optional: true, required: false
  private _tests?: string[]; 
  public get tests() {
    return cdktf.Fn.tolist(this.getListAttribute('tests'));
  }
  public set tests(value: string[]) {
    this._tests = value;
  }
  public resetTests() {
    this._tests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testsInput() {
    return this._tests;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end: cdktf.stringToTerraform(this._end),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repeat_interval: cdktf.stringToTerraform(this._repeatInterval),
      start: cdktf.stringToTerraform(this._start),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tests: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tests),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end: {
        value: cdktf.stringToHclTerraform(this._end),
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
      repeat_interval: {
        value: cdktf.stringToHclTerraform(this._repeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start: {
        value: cdktf.stringToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tests: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tests),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
