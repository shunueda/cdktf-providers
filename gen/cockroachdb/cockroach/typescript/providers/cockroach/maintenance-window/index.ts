// https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/maintenance_window#id MaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Duration in seconds from the beginning of each Monday (UTC) after which the maintenance window starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/maintenance_window#offset_duration MaintenanceWindow#offset_duration}
  */
  readonly offsetDuration: number;
  /**
  * Duration in seconds that the maintenance window will remain active for after it starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/maintenance_window#window_duration MaintenanceWindow#window_duration}
  */
  readonly windowDuration: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/maintenance_window cockroach_maintenance_window}
*/
export class MaintenanceWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_maintenance_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaintenanceWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaintenanceWindow to import
  * @param importFromId The id of the existing MaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/maintenance_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaintenanceWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_maintenance_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/maintenance_window cockroach_maintenance_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
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
    this._offsetDuration = config.offsetDuration;
    this._windowDuration = config.windowDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // offset_duration - computed: false, optional: false, required: true
  private _offsetDuration?: number; 
  public get offsetDuration() {
    return this.getNumberAttribute('offset_duration');
  }
  public set offsetDuration(value: number) {
    this._offsetDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetDurationInput() {
    return this._offsetDuration;
  }

  // window_duration - computed: false, optional: false, required: true
  private _windowDuration?: number; 
  public get windowDuration() {
    return this.getNumberAttribute('window_duration');
  }
  public set windowDuration(value: number) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      offset_duration: cdktf.numberToTerraform(this._offsetDuration),
      window_duration: cdktf.numberToTerraform(this._windowDuration),
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
      offset_duration: {
        value: cdktf.numberToHclTerraform(this._offsetDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      window_duration: {
        value: cdktf.numberToHclTerraform(this._windowDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
