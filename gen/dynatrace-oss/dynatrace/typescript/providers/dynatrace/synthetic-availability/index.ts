// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/synthetic_availability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticAvailabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Exclude periods with maintenance windows from availability calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/synthetic_availability#exclude_maintenance_windows SyntheticAvailability#exclude_maintenance_windows}
  */
  readonly excludeMaintenanceWindows: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/synthetic_availability#id SyntheticAvailability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/synthetic_availability dynatrace_synthetic_availability}
*/
export class SyntheticAvailability extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_synthetic_availability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticAvailability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticAvailability to import
  * @param importFromId The id of the existing SyntheticAvailability that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/synthetic_availability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticAvailability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_synthetic_availability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/synthetic_availability dynatrace_synthetic_availability} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticAvailabilityConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticAvailabilityConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_synthetic_availability',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludeMaintenanceWindows = config.excludeMaintenanceWindows;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_maintenance_windows - computed: false, optional: false, required: true
  private _excludeMaintenanceWindows?: boolean | cdktf.IResolvable; 
  public get excludeMaintenanceWindows() {
    return this.getBooleanAttribute('exclude_maintenance_windows');
  }
  public set excludeMaintenanceWindows(value: boolean | cdktf.IResolvable) {
    this._excludeMaintenanceWindows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeMaintenanceWindowsInput() {
    return this._excludeMaintenanceWindows;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_maintenance_windows: cdktf.booleanToTerraform(this._excludeMaintenanceWindows),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_maintenance_windows: {
        value: cdktf.booleanToHclTerraform(this._excludeMaintenanceWindows),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
