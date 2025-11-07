// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileMaliciousSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source#auto_update ProfileMaliciousSource#auto_update}
  */
  readonly autoUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source#delay_by_days ProfileMaliciousSource#delay_by_days}
  */
  readonly delayByDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source#description ProfileMaliciousSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source#id ProfileMaliciousSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source#ip_reputation_enabled ProfileMaliciousSource#ip_reputation_enabled}
  */
  readonly ipReputationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source#name ProfileMaliciousSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source#vendor_rule_set_name ProfileMaliciousSource#vendor_rule_set_name}
  */
  readonly vendorRuleSetName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source valtix_profile_malicious_source}
*/
export class ProfileMaliciousSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_profile_malicious_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileMaliciousSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileMaliciousSource to import
  * @param importFromId The id of the existing ProfileMaliciousSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileMaliciousSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_profile_malicious_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_malicious_source valtix_profile_malicious_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileMaliciousSourceConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileMaliciousSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_profile_malicious_source',
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
    this._autoUpdate = config.autoUpdate;
    this._delayByDays = config.delayByDays;
    this._description = config.description;
    this._id = config.id;
    this._ipReputationEnabled = config.ipReputationEnabled;
    this._name = config.name;
    this._vendorRuleSetName = config.vendorRuleSetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_reputation_enabled - computed: false, optional: true, required: false
  private _ipReputationEnabled?: boolean | cdktf.IResolvable; 
  public get ipReputationEnabled() {
    return this.getBooleanAttribute('ip_reputation_enabled');
  }
  public set ipReputationEnabled(value: boolean | cdktf.IResolvable) {
    this._ipReputationEnabled = value;
  }
  public resetIpReputationEnabled() {
    this._ipReputationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationEnabledInput() {
    return this._ipReputationEnabled;
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

  // vendor_rule_set_name - computed: false, optional: true, required: false
  private _vendorRuleSetName?: string; 
  public get vendorRuleSetName() {
    return this.getStringAttribute('vendor_rule_set_name');
  }
  public set vendorRuleSetName(value: string) {
    this._vendorRuleSetName = value;
  }
  public resetVendorRuleSetName() {
    this._vendorRuleSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorRuleSetNameInput() {
    return this._vendorRuleSetName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_update: cdktf.booleanToTerraform(this._autoUpdate),
      delay_by_days: cdktf.numberToTerraform(this._delayByDays),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_reputation_enabled: cdktf.booleanToTerraform(this._ipReputationEnabled),
      name: cdktf.stringToTerraform(this._name),
      vendor_rule_set_name: cdktf.stringToTerraform(this._vendorRuleSetName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ip_reputation_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipReputationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_rule_set_name: {
        value: cdktf.stringToHclTerraform(this._vendorRuleSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
