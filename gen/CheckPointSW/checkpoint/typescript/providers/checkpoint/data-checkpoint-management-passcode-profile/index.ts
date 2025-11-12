// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_passcode_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementPasscodeProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_passcode_profile#id DataCheckpointManagementPasscodeProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_passcode_profile#name DataCheckpointManagementPasscodeProfile#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_passcode_profile#uid DataCheckpointManagementPasscodeProfile#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_passcode_profile checkpoint_management_passcode_profile}
*/
export class DataCheckpointManagementPasscodeProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_passcode_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementPasscodeProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementPasscodeProfile to import
  * @param importFromId The id of the existing DataCheckpointManagementPasscodeProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_passcode_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementPasscodeProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_passcode_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_passcode_profile checkpoint_management_passcode_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementPasscodeProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementPasscodeProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_passcode_profile',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
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
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_simple_passcode - computed: true, optional: false, required: false
  public get allowSimplePasscode() {
    return this.getBooleanAttribute('allow_simple_passcode');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // enable_inactivity_time_lock - computed: true, optional: false, required: false
  public get enableInactivityTimeLock() {
    return this.getBooleanAttribute('enable_inactivity_time_lock');
  }

  // enable_passcode_failed_attempts - computed: true, optional: false, required: false
  public get enablePasscodeFailedAttempts() {
    return this.getBooleanAttribute('enable_passcode_failed_attempts');
  }

  // enable_passcode_history - computed: true, optional: false, required: false
  public get enablePasscodeHistory() {
    return this.getBooleanAttribute('enable_passcode_history');
  }

  // force_passcode_expiration - computed: true, optional: false, required: false
  public get forcePasscodeExpiration() {
    return this.getBooleanAttribute('force_passcode_expiration');
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

  // max_inactivity_time_lock - computed: true, optional: false, required: false
  public get maxInactivityTimeLock() {
    return this.getNumberAttribute('max_inactivity_time_lock');
  }

  // max_passcode_failed_attempts - computed: true, optional: false, required: false
  public get maxPasscodeFailedAttempts() {
    return this.getNumberAttribute('max_passcode_failed_attempts');
  }

  // min_passcode_complex_characters - computed: true, optional: false, required: false
  public get minPasscodeComplexCharacters() {
    return this.getNumberAttribute('min_passcode_complex_characters');
  }

  // min_passcode_length - computed: true, optional: false, required: false
  public get minPasscodeLength() {
    return this.getNumberAttribute('min_passcode_length');
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

  // passcode_expiration_period - computed: true, optional: false, required: false
  public get passcodeExpirationPeriod() {
    return this.getNumberAttribute('passcode_expiration_period');
  }

  // passcode_history - computed: true, optional: false, required: false
  public get passcodeHistory() {
    return this.getNumberAttribute('passcode_history');
  }

  // require_alphanumeric_passcode - computed: true, optional: false, required: false
  public get requireAlphanumericPasscode() {
    return this.getBooleanAttribute('require_alphanumeric_passcode');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
