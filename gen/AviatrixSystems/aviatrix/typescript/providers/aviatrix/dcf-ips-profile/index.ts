// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcfIpsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile#id DcfIpsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Actions for different severity levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile#intrusion_actions DcfIpsProfile#intrusion_actions}
  */
  readonly intrusionActions: { [key: string]: string };
  /**
  * Name of the IPS profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile#profile_name DcfIpsProfile#profile_name}
  */
  readonly profileName: string;
  /**
  * rule_feeds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile#rule_feeds DcfIpsProfile#rule_feeds}
  */
  readonly ruleFeeds: DcfIpsProfileRuleFeeds;
}
export interface DcfIpsProfileRuleFeeds {
  /**
  * List of custom rule feed UUIDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile#custom_feeds_ids DcfIpsProfile#custom_feeds_ids}
  */
  readonly customFeedsIds: string[];
  /**
  * List of external rule feed IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile#external_feeds_ids DcfIpsProfile#external_feeds_ids}
  */
  readonly externalFeedsIds: string[];
  /**
  * List of rule SIDs to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile#ignored_sids DcfIpsProfile#ignored_sids}
  */
  readonly ignoredSids: number[];
}

export function dcfIpsProfileRuleFeedsToTerraform(struct?: DcfIpsProfileRuleFeedsOutputReference | DcfIpsProfileRuleFeeds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_feeds_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customFeedsIds),
    external_feeds_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalFeedsIds),
    ignored_sids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ignoredSids),
  }
}


export function dcfIpsProfileRuleFeedsToHclTerraform(struct?: DcfIpsProfileRuleFeedsOutputReference | DcfIpsProfileRuleFeeds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_feeds_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customFeedsIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    external_feeds_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalFeedsIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ignored_sids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ignoredSids),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcfIpsProfileRuleFeedsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcfIpsProfileRuleFeeds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFeedsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFeedsIds = this._customFeedsIds;
    }
    if (this._externalFeedsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalFeedsIds = this._externalFeedsIds;
    }
    if (this._ignoredSids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredSids = this._ignoredSids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcfIpsProfileRuleFeeds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFeedsIds = undefined;
      this._externalFeedsIds = undefined;
      this._ignoredSids = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFeedsIds = value.customFeedsIds;
      this._externalFeedsIds = value.externalFeedsIds;
      this._ignoredSids = value.ignoredSids;
    }
  }

  // custom_feeds_ids - computed: false, optional: false, required: true
  private _customFeedsIds?: string[]; 
  public get customFeedsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_feeds_ids'));
  }
  public set customFeedsIds(value: string[]) {
    this._customFeedsIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customFeedsIdsInput() {
    return this._customFeedsIds;
  }

  // external_feeds_ids - computed: false, optional: false, required: true
  private _externalFeedsIds?: string[]; 
  public get externalFeedsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('external_feeds_ids'));
  }
  public set externalFeedsIds(value: string[]) {
    this._externalFeedsIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalFeedsIdsInput() {
    return this._externalFeedsIds;
  }

  // ignored_sids - computed: false, optional: false, required: true
  private _ignoredSids?: number[]; 
  public get ignoredSids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ignored_sids')));
  }
  public set ignoredSids(value: number[]) {
    this._ignoredSids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredSidsInput() {
    return this._ignoredSids;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile aviatrix_dcf_ips_profile}
*/
export class DcfIpsProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_dcf_ips_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcfIpsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcfIpsProfile to import
  * @param importFromId The id of the existing DcfIpsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcfIpsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_dcf_ips_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile aviatrix_dcf_ips_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcfIpsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DcfIpsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_dcf_ips_profile',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
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
    this._intrusionActions = config.intrusionActions;
    this._profileName = config.profileName;
    this._ruleFeeds.internalValue = config.ruleFeeds;
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

  // intrusion_actions - computed: false, optional: false, required: true
  private _intrusionActions?: { [key: string]: string }; 
  public get intrusionActions() {
    return this.getStringMapAttribute('intrusion_actions');
  }
  public set intrusionActions(value: { [key: string]: string }) {
    this._intrusionActions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intrusionActionsInput() {
    return this._intrusionActions;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // rule_feeds - computed: false, optional: false, required: true
  private _ruleFeeds = new DcfIpsProfileRuleFeedsOutputReference(this, "rule_feeds");
  public get ruleFeeds() {
    return this._ruleFeeds;
  }
  public putRuleFeeds(value: DcfIpsProfileRuleFeeds) {
    this._ruleFeeds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleFeedsInput() {
    return this._ruleFeeds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      intrusion_actions: cdktf.hashMapper(cdktf.stringToTerraform)(this._intrusionActions),
      profile_name: cdktf.stringToTerraform(this._profileName),
      rule_feeds: dcfIpsProfileRuleFeedsToTerraform(this._ruleFeeds.internalValue),
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
      intrusion_actions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._intrusionActions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_feeds: {
        value: dcfIpsProfileRuleFeedsToHclTerraform(this._ruleFeeds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DcfIpsProfileRuleFeedsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
