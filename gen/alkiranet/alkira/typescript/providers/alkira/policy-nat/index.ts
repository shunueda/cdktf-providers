// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyNatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow overlapping translated source address. Default value is `false`. (**BETA**)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#allow_overlapping_translated_source_addresses PolicyNat#allow_overlapping_translated_source_addresses}
  */
  readonly allowOverlappingTranslatedSourceAddresses?: boolean | cdktf.IResolvable;
  /**
  * The category of NAT policy. The vaule could be `DEFAULT` or `INTERNET_CONNECTOR`. Default value is `DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#category PolicyNat#category}
  */
  readonly category?: string;
  /**
  * The description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#description PolicyNat#description}
  */
  readonly description?: string;
  /**
  * Excludes given associated connector from `included_groups`. Implicit group of a branch or on-premise connector for which a user defined group is used in `included_groups` can be used here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#excluded_group_ids PolicyNat#excluded_group_ids}
  */
  readonly excludedGroupIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#id PolicyNat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines the scope for the policy. Connectors associated with groups defined here is where this policy would be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#included_group_ids PolicyNat#included_group_ids}
  */
  readonly includedGroupIds: number[];
  /**
  * The name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#name PolicyNat#name}
  */
  readonly name: string;
  /**
  * The list of NAT rules to be applied by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#nat_rule_ids PolicyNat#nat_rule_ids}
  */
  readonly natRuleIds: number[];
  /**
  * IDs of the segment that will define the policyscope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#segment_id PolicyNat#segment_id}
  */
  readonly segmentId: string;
  /**
  * The type of NAT policy, currently only `INTRA_SEGMENT` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#type PolicyNat#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat alkira_policy_nat}
*/
export class PolicyNat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_policy_nat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyNat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyNat to import
  * @param importFromId The id of the existing PolicyNat that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyNat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_policy_nat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat alkira_policy_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyNatConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyNatConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_policy_nat',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowOverlappingTranslatedSourceAddresses = config.allowOverlappingTranslatedSourceAddresses;
    this._category = config.category;
    this._description = config.description;
    this._excludedGroupIds = config.excludedGroupIds;
    this._id = config.id;
    this._includedGroupIds = config.includedGroupIds;
    this._name = config.name;
    this._natRuleIds = config.natRuleIds;
    this._segmentId = config.segmentId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_overlapping_translated_source_addresses - computed: false, optional: true, required: false
  private _allowOverlappingTranslatedSourceAddresses?: boolean | cdktf.IResolvable; 
  public get allowOverlappingTranslatedSourceAddresses() {
    return this.getBooleanAttribute('allow_overlapping_translated_source_addresses');
  }
  public set allowOverlappingTranslatedSourceAddresses(value: boolean | cdktf.IResolvable) {
    this._allowOverlappingTranslatedSourceAddresses = value;
  }
  public resetAllowOverlappingTranslatedSourceAddresses() {
    this._allowOverlappingTranslatedSourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverlappingTranslatedSourceAddressesInput() {
    return this._allowOverlappingTranslatedSourceAddresses;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // excluded_group_ids - computed: false, optional: true, required: false
  private _excludedGroupIds?: number[]; 
  public get excludedGroupIds() {
    return this.getNumberListAttribute('excluded_group_ids');
  }
  public set excludedGroupIds(value: number[]) {
    this._excludedGroupIds = value;
  }
  public resetExcludedGroupIds() {
    this._excludedGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGroupIdsInput() {
    return this._excludedGroupIds;
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

  // included_group_ids - computed: false, optional: false, required: true
  private _includedGroupIds?: number[]; 
  public get includedGroupIds() {
    return this.getNumberListAttribute('included_group_ids');
  }
  public set includedGroupIds(value: number[]) {
    this._includedGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedGroupIdsInput() {
    return this._includedGroupIds;
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

  // nat_rule_ids - computed: false, optional: false, required: true
  private _natRuleIds?: number[]; 
  public get natRuleIds() {
    return this.getNumberListAttribute('nat_rule_ids');
  }
  public set natRuleIds(value: number[]) {
    this._natRuleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natRuleIdsInput() {
    return this._natRuleIds;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_overlapping_translated_source_addresses: cdktf.booleanToTerraform(this._allowOverlappingTranslatedSourceAddresses),
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      excluded_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedGroupIds),
      id: cdktf.stringToTerraform(this._id),
      included_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._includedGroupIds),
      name: cdktf.stringToTerraform(this._name),
      nat_rule_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._natRuleIds),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_overlapping_translated_source_addresses: {
        value: cdktf.booleanToHclTerraform(this._allowOverlappingTranslatedSourceAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludedGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      included_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._includedGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._natRuleIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
