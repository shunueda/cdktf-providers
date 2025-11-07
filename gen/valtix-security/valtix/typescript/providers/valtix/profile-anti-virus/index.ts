// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileAntiVirusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus#action ProfileAntiVirus#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus#auto_update ProfileAntiVirus#auto_update}
  */
  readonly autoUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus#delay_by_days ProfileAntiVirus#delay_by_days}
  */
  readonly delayByDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus#description ProfileAntiVirus#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus#id ProfileAntiVirus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus#name ProfileAntiVirus#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus#talos_ruleset_version ProfileAntiVirus#talos_ruleset_version}
  */
  readonly talosRulesetVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus valtix_profile_anti_virus}
*/
export class ProfileAntiVirus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_profile_anti_virus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileAntiVirus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileAntiVirus to import
  * @param importFromId The id of the existing ProfileAntiVirus that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileAntiVirus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_profile_anti_virus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_anti_virus valtix_profile_anti_virus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileAntiVirusConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileAntiVirusConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_profile_anti_virus',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._autoUpdate = config.autoUpdate;
    this._delayByDays = config.delayByDays;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._talosRulesetVersion = config.talosRulesetVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // auto_update - computed: false, optional: true, required: false
  private _autoUpdate?: boolean | cdktf.IResolvable; 
  public get autoUpdate() {
    return this.getBooleanAttribute('auto_update');
  }
  public set autoUpdate(value: boolean | cdktf.IResolvable) {
    this._autoUpdate = value;
  }
  public resetAutoUpdate() {
    this._autoUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate;
  }

  // delay_by_days - computed: false, optional: true, required: false
  private _delayByDays?: number; 
  public get delayByDays() {
    return this.getNumberAttribute('delay_by_days');
  }
  public set delayByDays(value: number) {
    this._delayByDays = value;
  }
  public resetDelayByDays() {
    this._delayByDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayByDaysInput() {
    return this._delayByDays;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // talos_ruleset_version - computed: false, optional: true, required: false
  private _talosRulesetVersion?: string; 
  public get talosRulesetVersion() {
    return this.getStringAttribute('talos_ruleset_version');
  }
  public set talosRulesetVersion(value: string) {
    this._talosRulesetVersion = value;
  }
  public resetTalosRulesetVersion() {
    this._talosRulesetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get talosRulesetVersionInput() {
    return this._talosRulesetVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      auto_update: cdktf.booleanToTerraform(this._autoUpdate),
      delay_by_days: cdktf.numberToTerraform(this._delayByDays),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      talos_ruleset_version: cdktf.stringToTerraform(this._talosRulesetVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_update: {
        value: cdktf.booleanToHclTerraform(this._autoUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay_by_days: {
        value: cdktf.numberToHclTerraform(this._delayByDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      talos_ruleset_version: {
        value: cdktf.stringToHclTerraform(this._talosRulesetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
