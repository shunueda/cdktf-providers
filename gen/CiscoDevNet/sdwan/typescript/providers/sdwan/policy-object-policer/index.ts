// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectPolicerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer#description PolicyObjectPolicer#description}
  */
  readonly description?: string;
  /**
  * Policer Entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer#entries PolicyObjectPolicer#entries}
  */
  readonly entries: PolicyObjectPolicerEntries[] | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer#feature_profile_id PolicyObjectPolicer#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer#name PolicyObjectPolicer#name}
  */
  readonly name: string;
}
export interface PolicyObjectPolicerEntries {
  /**
  * Burst (Bytes)
  *   - Range: `15000`-`10000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer#burst_bytes PolicyObjectPolicer#burst_bytes}
  */
  readonly burstBytes?: number;
  /**
  * Exceed options such as Drop or Remark
  *   - Choices: `drop`, `remark`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer#exceed_action PolicyObjectPolicer#exceed_action}
  */
  readonly exceedAction?: string;
  /**
  * Rate (bps)
  *   - Range: `8`-`100000000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer#rate_bps PolicyObjectPolicer#rate_bps}
  */
  readonly rateBps?: number;
}

export function policyObjectPolicerEntriesToTerraform(struct?: PolicyObjectPolicerEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_bytes: cdktf.numberToTerraform(struct!.burstBytes),
    exceed_action: cdktf.stringToTerraform(struct!.exceedAction),
    rate_bps: cdktf.numberToTerraform(struct!.rateBps),
  }
}


export function policyObjectPolicerEntriesToHclTerraform(struct?: PolicyObjectPolicerEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_bytes: {
      value: cdktf.numberToHclTerraform(struct!.burstBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_action: {
      value: cdktf.stringToHclTerraform(struct!.exceedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_bps: {
      value: cdktf.numberToHclTerraform(struct!.rateBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyObjectPolicerEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PolicyObjectPolicerEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstBytes = this._burstBytes;
    }
    if (this._exceedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedAction = this._exceedAction;
    }
    if (this._rateBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateBps = this._rateBps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyObjectPolicerEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstBytes = undefined;
      this._exceedAction = undefined;
      this._rateBps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstBytes = value.burstBytes;
      this._exceedAction = value.exceedAction;
      this._rateBps = value.rateBps;
    }
  }

  // burst_bytes - computed: false, optional: true, required: false
  private _burstBytes?: number; 
  public get burstBytes() {
    return this.getNumberAttribute('burst_bytes');
  }
  public set burstBytes(value: number) {
    this._burstBytes = value;
  }
  public resetBurstBytes() {
    this._burstBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstBytesInput() {
    return this._burstBytes;
  }

  // exceed_action - computed: false, optional: true, required: false
  private _exceedAction?: string; 
  public get exceedAction() {
    return this.getStringAttribute('exceed_action');
  }
  public set exceedAction(value: string) {
    this._exceedAction = value;
  }
  public resetExceedAction() {
    this._exceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionInput() {
    return this._exceedAction;
  }

  // rate_bps - computed: false, optional: true, required: false
  private _rateBps?: number; 
  public get rateBps() {
    return this.getNumberAttribute('rate_bps');
  }
  public set rateBps(value: number) {
    this._rateBps = value;
  }
  public resetRateBps() {
    this._rateBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateBpsInput() {
    return this._rateBps;
  }
}

export class PolicyObjectPolicerEntriesList extends cdktf.ComplexList {
  public internalValue? : PolicyObjectPolicerEntries[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PolicyObjectPolicerEntriesOutputReference {
    return new PolicyObjectPolicerEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer sdwan_policy_object_policer}
*/
export class PolicyObjectPolicer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_policer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectPolicer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectPolicer to import
  * @param importFromId The id of the existing PolicyObjectPolicer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectPolicer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_policer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_policer sdwan_policy_object_policer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectPolicerConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectPolicerConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_policer',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._entries.internalValue = config.entries;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entries - computed: false, optional: false, required: true
  private _entries = new PolicyObjectPolicerEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: PolicyObjectPolicerEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      entries: cdktf.listMapper(policyObjectPolicerEntriesToTerraform, false)(this._entries.internalValue),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(policyObjectPolicerEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyObjectPolicerEntriesList",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
