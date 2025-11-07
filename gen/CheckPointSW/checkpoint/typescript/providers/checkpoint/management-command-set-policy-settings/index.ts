// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_policy_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCommandSetPolicySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_policy_settings#id ManagementCommandSetPolicySettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Added object after removing the last object in cell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_policy_settings#last_in_cell ManagementCommandSetPolicySettings#last_in_cell}
  */
  readonly lastInCell?: string;
  /**
  * 'None' object behavior. Rules with object 'None' will never be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_policy_settings#none_object_behavior ManagementCommandSetPolicySettings#none_object_behavior}
  */
  readonly noneObjectBehavior?: string;
  /**
  * Access Policy default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_policy_settings#security_access_defaults ManagementCommandSetPolicySettings#security_access_defaults}
  */
  readonly securityAccessDefaults?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_policy_settings checkpoint_management_command_set_policy_settings}
*/
export class ManagementCommandSetPolicySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_command_set_policy_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCommandSetPolicySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCommandSetPolicySettings to import
  * @param importFromId The id of the existing ManagementCommandSetPolicySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_policy_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCommandSetPolicySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_command_set_policy_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_policy_settings checkpoint_management_command_set_policy_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCommandSetPolicySettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementCommandSetPolicySettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_command_set_policy_settings',
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
    this._id = config.id;
    this._lastInCell = config.lastInCell;
    this._noneObjectBehavior = config.noneObjectBehavior;
    this._securityAccessDefaults = config.securityAccessDefaults;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_in_cell - computed: false, optional: true, required: false
  private _lastInCell?: string; 
  public get lastInCell() {
    return this.getStringAttribute('last_in_cell');
  }
  public set lastInCell(value: string) {
    this._lastInCell = value;
  }
  public resetLastInCell() {
    this._lastInCell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInCellInput() {
    return this._lastInCell;
  }

  // none_object_behavior - computed: false, optional: true, required: false
  private _noneObjectBehavior?: string; 
  public get noneObjectBehavior() {
    return this.getStringAttribute('none_object_behavior');
  }
  public set noneObjectBehavior(value: string) {
    this._noneObjectBehavior = value;
  }
  public resetNoneObjectBehavior() {
    this._noneObjectBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneObjectBehaviorInput() {
    return this._noneObjectBehavior;
  }

  // security_access_defaults - computed: false, optional: true, required: false
  private _securityAccessDefaults?: { [key: string]: string }; 
  public get securityAccessDefaults() {
    return this.getStringMapAttribute('security_access_defaults');
  }
  public set securityAccessDefaults(value: { [key: string]: string }) {
    this._securityAccessDefaults = value;
  }
  public resetSecurityAccessDefaults() {
    this._securityAccessDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAccessDefaultsInput() {
    return this._securityAccessDefaults;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      last_in_cell: cdktf.stringToTerraform(this._lastInCell),
      none_object_behavior: cdktf.stringToTerraform(this._noneObjectBehavior),
      security_access_defaults: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAccessDefaults),
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
      last_in_cell: {
        value: cdktf.stringToHclTerraform(this._lastInCell),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      none_object_behavior: {
        value: cdktf.stringToHclTerraform(this._noneObjectBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_access_defaults: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAccessDefaults),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
