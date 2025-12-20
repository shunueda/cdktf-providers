// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/sensor_visibility_exclusion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensorVisibilityExclusionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to apply the exclusion globally to all host groups. Cannot be used together with `host_groups`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/sensor_visibility_exclusion#apply_globally SensorVisibilityExclusion#apply_globally}
  */
  readonly applyGlobally?: boolean | cdktf.IResolvable;
  /**
  * Whether to apply the exclusion to all descendant processes spawned from the specified path. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/sensor_visibility_exclusion#apply_to_descendant_processes SensorVisibilityExclusion#apply_to_descendant_processes}
  */
  readonly applyToDescendantProcesses?: boolean | cdktf.IResolvable;
  /**
  * A set of host group IDs to apply this exclusion to. Cannot be used together with `apply_globally`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/sensor_visibility_exclusion#host_groups SensorVisibilityExclusion#host_groups}
  */
  readonly hostGroups?: string[];
  /**
  * The file path or pattern to exclude from sensor visibility. Use wildcards (*) for pattern matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/sensor_visibility_exclusion#value SensorVisibilityExclusion#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/sensor_visibility_exclusion crowdstrike_sensor_visibility_exclusion}
*/
export class SensorVisibilityExclusion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_sensor_visibility_exclusion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensorVisibilityExclusion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensorVisibilityExclusion to import
  * @param importFromId The id of the existing SensorVisibilityExclusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/sensor_visibility_exclusion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensorVisibilityExclusion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_sensor_visibility_exclusion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/sensor_visibility_exclusion crowdstrike_sensor_visibility_exclusion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensorVisibilityExclusionConfig
  */
  public constructor(scope: Construct, id: string, config: SensorVisibilityExclusionConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_sensor_visibility_exclusion',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.53',
        providerVersionConstraint: '0.0.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyGlobally = config.applyGlobally;
    this._applyToDescendantProcesses = config.applyToDescendantProcesses;
    this._hostGroups = config.hostGroups;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_globally - computed: true, optional: true, required: false
  private _applyGlobally?: boolean | cdktf.IResolvable; 
  public get applyGlobally() {
    return this.getBooleanAttribute('apply_globally');
  }
  public set applyGlobally(value: boolean | cdktf.IResolvable) {
    this._applyGlobally = value;
  }
  public resetApplyGlobally() {
    this._applyGlobally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyGloballyInput() {
    return this._applyGlobally;
  }

  // apply_to_descendant_processes - computed: true, optional: true, required: false
  private _applyToDescendantProcesses?: boolean | cdktf.IResolvable; 
  public get applyToDescendantProcesses() {
    return this.getBooleanAttribute('apply_to_descendant_processes');
  }
  public set applyToDescendantProcesses(value: boolean | cdktf.IResolvable) {
    this._applyToDescendantProcesses = value;
  }
  public resetApplyToDescendantProcesses() {
    this._applyToDescendantProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToDescendantProcessesInput() {
    return this._applyToDescendantProcesses;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // host_groups - computed: false, optional: true, required: false
  private _hostGroups?: string[]; 
  public get hostGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('host_groups'));
  }
  public set hostGroups(value: string[]) {
    this._hostGroups = value;
  }
  public resetHostGroups() {
    this._hostGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupsInput() {
    return this._hostGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // regexp_value - computed: true, optional: false, required: false
  public get regexpValue() {
    return this.getStringAttribute('regexp_value');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_hash - computed: true, optional: false, required: false
  public get valueHash() {
    return this.getStringAttribute('value_hash');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_globally: cdktf.booleanToTerraform(this._applyGlobally),
      apply_to_descendant_processes: cdktf.booleanToTerraform(this._applyToDescendantProcesses),
      host_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroups),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_globally: {
        value: cdktf.booleanToHclTerraform(this._applyGlobally),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apply_to_descendant_processes: {
        value: cdktf.booleanToHclTerraform(this._applyToDescendantProcesses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
