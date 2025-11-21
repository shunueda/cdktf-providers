// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/maintenance_window#automatic_updates MaintenanceWindow#automatic_updates}
  */
  readonly automaticUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/maintenance_window#id MaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/maintenance_window#instance_id MaintenanceWindow#instance_id}
  */
  readonly instanceId: number;
  /**
  * Preferred day of the week when to run maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/maintenance_window#preferred_day MaintenanceWindow#preferred_day}
  */
  readonly preferredDay?: string;
  /**
  * Preferred time (UTC) the day when to run maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/maintenance_window#preferred_time MaintenanceWindow#preferred_time}
  */
  readonly preferredTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/maintenance_window cloudamqp_maintenance_window}
*/
export class MaintenanceWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_maintenance_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaintenanceWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaintenanceWindow to import
  * @param importFromId The id of the existing MaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/maintenance_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaintenanceWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_maintenance_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.3/docs/resources/maintenance_window cloudamqp_maintenance_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.38.3',
        providerVersionConstraint: '1.38.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticUpdates = config.automaticUpdates;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._preferredDay = config.preferredDay;
    this._preferredTime = config.preferredTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_updates - computed: true, optional: true, required: false
  private _automaticUpdates?: string; 
  public get automaticUpdates() {
    return this.getStringAttribute('automatic_updates');
  }
  public set automaticUpdates(value: string) {
    this._automaticUpdates = value;
  }
  public resetAutomaticUpdates() {
    this._automaticUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpdatesInput() {
    return this._automaticUpdates;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // preferred_day - computed: false, optional: true, required: false
  private _preferredDay?: string; 
  public get preferredDay() {
    return this.getStringAttribute('preferred_day');
  }
  public set preferredDay(value: string) {
    this._preferredDay = value;
  }
  public resetPreferredDay() {
    this._preferredDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDayInput() {
    return this._preferredDay;
  }

  // preferred_time - computed: false, optional: true, required: false
  private _preferredTime?: string; 
  public get preferredTime() {
    return this.getStringAttribute('preferred_time');
  }
  public set preferredTime(value: string) {
    this._preferredTime = value;
  }
  public resetPreferredTime() {
    this._preferredTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredTimeInput() {
    return this._preferredTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_updates: cdktf.stringToTerraform(this._automaticUpdates),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      preferred_day: cdktf.stringToTerraform(this._preferredDay),
      preferred_time: cdktf.stringToTerraform(this._preferredTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_updates: {
        value: cdktf.stringToHclTerraform(this._automaticUpdates),
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
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_day: {
        value: cdktf.stringToHclTerraform(this._preferredDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_time: {
        value: cdktf.stringToHclTerraform(this._preferredTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
