// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSetAutomaticPurgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Turn on/off the automatic-purge feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge#enabled ManagementSetAutomaticPurge#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge#id ManagementSetAutomaticPurge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether or not to keep the latest N sessions. Note: when the automatic purge feature is enabled, this field and/or the "keep-sessions-by-date" field must be set to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge#keep_sessions_by_count ManagementSetAutomaticPurge#keep_sessions_by_count}
  */
  readonly keepSessionsByCount?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to keep the sessions for D days. Note: when the automatic purge feature is enabled, this field and/or the "keep-sessions-by-count" field must be set to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge#keep_sessions_by_days ManagementSetAutomaticPurge#keep_sessions_by_days}
  */
  readonly keepSessionsByDays?: boolean | cdktf.IResolvable;
  /**
  * When "keep-sessions-by-days = true" this sets the number of days to keep the sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge#number_of_days_to_keep ManagementSetAutomaticPurge#number_of_days_to_keep}
  */
  readonly numberOfDaysToKeep?: number;
  /**
  * When "keep-sessions-by-count = true" this sets the number of newest sessions to preserve, by the sessions's publish date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge#number_of_sessions_to_keep ManagementSetAutomaticPurge#number_of_sessions_to_keep}
  */
  readonly numberOfSessionsToKeep?: number;
  /**
  * When to purge sessions that do not meet the "keep" criteria. Note: when the automatic purge feature is enabled, this field must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge#scheduling ManagementSetAutomaticPurge#scheduling}
  */
  readonly scheduling?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge checkpoint_management_set_automatic_purge}
*/
export class ManagementSetAutomaticPurge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_set_automatic_purge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSetAutomaticPurge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSetAutomaticPurge to import
  * @param importFromId The id of the existing ManagementSetAutomaticPurge that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSetAutomaticPurge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_set_automatic_purge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_automatic_purge checkpoint_management_set_automatic_purge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSetAutomaticPurgeConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementSetAutomaticPurgeConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_set_automatic_purge',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._id = config.id;
    this._keepSessionsByCount = config.keepSessionsByCount;
    this._keepSessionsByDays = config.keepSessionsByDays;
    this._numberOfDaysToKeep = config.numberOfDaysToKeep;
    this._numberOfSessionsToKeep = config.numberOfSessionsToKeep;
    this._scheduling = config.scheduling;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // keep_sessions_by_count - computed: false, optional: true, required: false
  private _keepSessionsByCount?: boolean | cdktf.IResolvable; 
  public get keepSessionsByCount() {
    return this.getBooleanAttribute('keep_sessions_by_count');
  }
  public set keepSessionsByCount(value: boolean | cdktf.IResolvable) {
    this._keepSessionsByCount = value;
  }
  public resetKeepSessionsByCount() {
    this._keepSessionsByCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSessionsByCountInput() {
    return this._keepSessionsByCount;
  }

  // keep_sessions_by_days - computed: false, optional: true, required: false
  private _keepSessionsByDays?: boolean | cdktf.IResolvable; 
  public get keepSessionsByDays() {
    return this.getBooleanAttribute('keep_sessions_by_days');
  }
  public set keepSessionsByDays(value: boolean | cdktf.IResolvable) {
    this._keepSessionsByDays = value;
  }
  public resetKeepSessionsByDays() {
    this._keepSessionsByDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSessionsByDaysInput() {
    return this._keepSessionsByDays;
  }

  // number_of_days_to_keep - computed: false, optional: true, required: false
  private _numberOfDaysToKeep?: number; 
  public get numberOfDaysToKeep() {
    return this.getNumberAttribute('number_of_days_to_keep');
  }
  public set numberOfDaysToKeep(value: number) {
    this._numberOfDaysToKeep = value;
  }
  public resetNumberOfDaysToKeep() {
    this._numberOfDaysToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDaysToKeepInput() {
    return this._numberOfDaysToKeep;
  }

  // number_of_sessions_to_keep - computed: false, optional: true, required: false
  private _numberOfSessionsToKeep?: number; 
  public get numberOfSessionsToKeep() {
    return this.getNumberAttribute('number_of_sessions_to_keep');
  }
  public set numberOfSessionsToKeep(value: number) {
    this._numberOfSessionsToKeep = value;
  }
  public resetNumberOfSessionsToKeep() {
    this._numberOfSessionsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfSessionsToKeepInput() {
    return this._numberOfSessionsToKeep;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling?: { [key: string]: string }; 
  public get scheduling() {
    return this.getStringMapAttribute('scheduling');
  }
  public set scheduling(value: { [key: string]: string }) {
    this._scheduling = value;
  }
  public resetScheduling() {
    this._scheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      keep_sessions_by_count: cdktf.booleanToTerraform(this._keepSessionsByCount),
      keep_sessions_by_days: cdktf.booleanToTerraform(this._keepSessionsByDays),
      number_of_days_to_keep: cdktf.numberToTerraform(this._numberOfDaysToKeep),
      number_of_sessions_to_keep: cdktf.numberToTerraform(this._numberOfSessionsToKeep),
      scheduling: cdktf.hashMapper(cdktf.stringToTerraform)(this._scheduling),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_sessions_by_count: {
        value: cdktf.booleanToHclTerraform(this._keepSessionsByCount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_sessions_by_days: {
        value: cdktf.booleanToHclTerraform(this._keepSessionsByDays),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      number_of_days_to_keep: {
        value: cdktf.numberToHclTerraform(this._numberOfDaysToKeep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_sessions_to_keep: {
        value: cdktf.numberToHclTerraform(this._numberOfSessionsToKeep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheduling: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._scheduling),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
