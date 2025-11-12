// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ase_penalty_box
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecAdvancedSettingsAsePenaltyBoxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Block duration for ASE Penalty Box in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ase_penalty_box#block_duration AppsecAdvancedSettingsAsePenaltyBox#block_duration}
  */
  readonly blockDuration: number;
  /**
  * Unique identifier of the security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ase_penalty_box#config_id AppsecAdvancedSettingsAsePenaltyBox#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ase_penalty_box#id AppsecAdvancedSettingsAsePenaltyBox#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * qualification_exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ase_penalty_box#qualification_exclusions AppsecAdvancedSettingsAsePenaltyBox#qualification_exclusions}
  */
  readonly qualificationExclusions: AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusions;
}
export interface AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusions {
  /**
  * List of attack group names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ase_penalty_box#attack_groups AppsecAdvancedSettingsAsePenaltyBox#attack_groups}
  */
  readonly attackGroups?: string[];
  /**
  * List of rule IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ase_penalty_box#rules AppsecAdvancedSettingsAsePenaltyBox#rules}
  */
  readonly rules?: number[];
}

export function appsecAdvancedSettingsAsePenaltyBoxQualificationExclusionsToTerraform(struct?: AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusionsOutputReference | AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attackGroups),
    rules: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rules),
  }
}


export function appsecAdvancedSettingsAsePenaltyBoxQualificationExclusionsToHclTerraform(struct?: AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusionsOutputReference | AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attackGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attackGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackGroups = this._attackGroups;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attackGroups = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attackGroups = value.attackGroups;
      this._rules = value.rules;
    }
  }

  // attack_groups - computed: false, optional: true, required: false
  private _attackGroups?: string[]; 
  public get attackGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('attack_groups'));
  }
  public set attackGroups(value: string[]) {
    this._attackGroups = value;
  }
  public resetAttackGroups() {
    this._attackGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackGroupsInput() {
    return this._attackGroups;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: number[]; 
  public get rules() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rules')));
  }
  public set rules(value: number[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ase_penalty_box akamai_appsec_advanced_settings_ase_penalty_box}
*/
export class AppsecAdvancedSettingsAsePenaltyBox extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_advanced_settings_ase_penalty_box";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecAdvancedSettingsAsePenaltyBox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecAdvancedSettingsAsePenaltyBox to import
  * @param importFromId The id of the existing AppsecAdvancedSettingsAsePenaltyBox that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ase_penalty_box#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecAdvancedSettingsAsePenaltyBox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_advanced_settings_ase_penalty_box", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ase_penalty_box akamai_appsec_advanced_settings_ase_penalty_box} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecAdvancedSettingsAsePenaltyBoxConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecAdvancedSettingsAsePenaltyBoxConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_advanced_settings_ase_penalty_box',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockDuration = config.blockDuration;
    this._configId = config.configId;
    this._id = config.id;
    this._qualificationExclusions.internalValue = config.qualificationExclusions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_duration - computed: false, optional: false, required: true
  private _blockDuration?: number; 
  public get blockDuration() {
    return this.getNumberAttribute('block_duration');
  }
  public set blockDuration(value: number) {
    this._blockDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationInput() {
    return this._blockDuration;
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // qualification_exclusions - computed: false, optional: false, required: true
  private _qualificationExclusions = new AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusionsOutputReference(this, "qualification_exclusions");
  public get qualificationExclusions() {
    return this._qualificationExclusions;
  }
  public putQualificationExclusions(value: AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusions) {
    this._qualificationExclusions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualificationExclusionsInput() {
    return this._qualificationExclusions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_duration: cdktf.numberToTerraform(this._blockDuration),
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      qualification_exclusions: appsecAdvancedSettingsAsePenaltyBoxQualificationExclusionsToTerraform(this._qualificationExclusions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_duration: {
        value: cdktf.numberToHclTerraform(this._blockDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualification_exclusions: {
        value: appsecAdvancedSettingsAsePenaltyBoxQualificationExclusionsToHclTerraform(this._qualificationExclusions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecAdvancedSettingsAsePenaltyBoxQualificationExclusionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
