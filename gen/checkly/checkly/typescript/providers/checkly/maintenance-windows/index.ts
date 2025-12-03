// https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceWindowsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The end date of the maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows#ends_at MaintenanceWindows#ends_at}
  */
  readonly endsAt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows#id MaintenanceWindows#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maintenance window name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows#name MaintenanceWindows#name}
  */
  readonly name: string;
  /**
  * The date on which the maintenance window should stop repeating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows#repeat_ends_at MaintenanceWindows#repeat_ends_at}
  */
  readonly repeatEndsAt?: string;
  /**
  * The repeat interval of the maintenance window from the first occurrence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows#repeat_interval MaintenanceWindows#repeat_interval}
  */
  readonly repeatInterval?: number;
  /**
  * The repeat cadence for the maintenance window. Possible values `DAY`, `WEEK` and `MONTH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows#repeat_unit MaintenanceWindows#repeat_unit}
  */
  readonly repeatUnit?: string;
  /**
  * The start date of the maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows#starts_at MaintenanceWindows#starts_at}
  */
  readonly startsAt: string;
  /**
  * The names of the checks and groups maintenance window should apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows#tags MaintenanceWindows#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows checkly_maintenance_windows}
*/
export class MaintenanceWindows extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_maintenance_windows";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaintenanceWindows resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaintenanceWindows to import
  * @param importFromId The id of the existing MaintenanceWindows that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaintenanceWindows to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_maintenance_windows", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/maintenance_windows checkly_maintenance_windows} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceWindowsConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceWindowsConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_maintenance_windows',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.17.1',
        providerVersionConstraint: '1.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endsAt = config.endsAt;
    this._id = config.id;
    this._name = config.name;
    this._repeatEndsAt = config.repeatEndsAt;
    this._repeatInterval = config.repeatInterval;
    this._repeatUnit = config.repeatUnit;
    this._startsAt = config.startsAt;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ends_at - computed: false, optional: false, required: true
  private _endsAt?: string; 
  public get endsAt() {
    return this.getStringAttribute('ends_at');
  }
  public set endsAt(value: string) {
    this._endsAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endsAtInput() {
    return this._endsAt;
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

  // repeat_ends_at - computed: false, optional: true, required: false
  private _repeatEndsAt?: string; 
  public get repeatEndsAt() {
    return this.getStringAttribute('repeat_ends_at');
  }
  public set repeatEndsAt(value: string) {
    this._repeatEndsAt = value;
  }
  public resetRepeatEndsAt() {
    this._repeatEndsAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatEndsAtInput() {
    return this._repeatEndsAt;
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: number; 
  public get repeatInterval() {
    return this.getNumberAttribute('repeat_interval');
  }
  public set repeatInterval(value: number) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }

  // repeat_unit - computed: false, optional: true, required: false
  private _repeatUnit?: string; 
  public get repeatUnit() {
    return this.getStringAttribute('repeat_unit');
  }
  public set repeatUnit(value: string) {
    this._repeatUnit = value;
  }
  public resetRepeatUnit() {
    this._repeatUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatUnitInput() {
    return this._repeatUnit;
  }

  // starts_at - computed: false, optional: false, required: true
  private _startsAt?: string; 
  public get startsAt() {
    return this.getStringAttribute('starts_at');
  }
  public set startsAt(value: string) {
    this._startsAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startsAtInput() {
    return this._startsAt;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ends_at: cdktf.stringToTerraform(this._endsAt),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repeat_ends_at: cdktf.stringToTerraform(this._repeatEndsAt),
      repeat_interval: cdktf.numberToTerraform(this._repeatInterval),
      repeat_unit: cdktf.stringToTerraform(this._repeatUnit),
      starts_at: cdktf.stringToTerraform(this._startsAt),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ends_at: {
        value: cdktf.stringToHclTerraform(this._endsAt),
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
      repeat_ends_at: {
        value: cdktf.stringToHclTerraform(this._repeatEndsAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_interval: {
        value: cdktf.numberToHclTerraform(this._repeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repeat_unit: {
        value: cdktf.stringToHclTerraform(this._repeatUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starts_at: {
        value: cdktf.stringToHclTerraform(this._startsAt),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
