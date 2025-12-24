// https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/key_lifecycle_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyLifecycleRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of days of inactivity before the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/key_lifecycle_rule#inactivity_days KeyLifecycleRule#inactivity_days}
  */
  readonly inactivityDays?: number;
  /**
  * Key type for which the rule will apply (gpg or ssh).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/key_lifecycle_rule#key_type KeyLifecycleRule#key_type}
  */
  readonly keyType?: string;
  /**
  * Key Lifecycle Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/key_lifecycle_rule#name KeyLifecycleRule#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/key_lifecycle_rule files_key_lifecycle_rule}
*/
export class KeyLifecycleRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_key_lifecycle_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyLifecycleRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyLifecycleRule to import
  * @param importFromId The id of the existing KeyLifecycleRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/key_lifecycle_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyLifecycleRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_key_lifecycle_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/key_lifecycle_rule files_key_lifecycle_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyLifecycleRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KeyLifecycleRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files_key_lifecycle_rule',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.420',
        providerVersionConstraint: '0.1.420'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._inactivityDays = config.inactivityDays;
    this._keyType = config.keyType;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // inactivity_days - computed: true, optional: true, required: false
  private _inactivityDays?: number; 
  public get inactivityDays() {
    return this.getNumberAttribute('inactivity_days');
  }
  public set inactivityDays(value: number) {
    this._inactivityDays = value;
  }
  public resetInactivityDays() {
    this._inactivityDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityDaysInput() {
    return this._inactivityDays;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // name - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      inactivity_days: cdktf.numberToTerraform(this._inactivityDays),
      key_type: cdktf.stringToTerraform(this._keyType),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      inactivity_days: {
        value: cdktf.numberToHclTerraform(this._inactivityDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
