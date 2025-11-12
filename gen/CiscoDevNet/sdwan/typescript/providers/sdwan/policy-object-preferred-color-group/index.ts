// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectPreferredColorGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#description PolicyObjectPreferredColorGroup#description}
  */
  readonly description?: string;
  /**
  * Preferred Color Group List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#entries PolicyObjectPreferredColorGroup#entries}
  */
  readonly entries: PolicyObjectPreferredColorGroupEntries[] | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#feature_profile_id PolicyObjectPreferredColorGroup#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#name PolicyObjectPreferredColorGroup#name}
  */
  readonly name: string;
}
export interface PolicyObjectPreferredColorGroupEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#primary_color_preference PolicyObjectPreferredColorGroup#primary_color_preference}
  */
  readonly primaryColorPreference?: string[];
  /**
  * 
  *   - Choices: `all-paths`, `direct-path`, `multi-hop-path`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#primary_path_preference PolicyObjectPreferredColorGroup#primary_path_preference}
  */
  readonly primaryPathPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#secondary_color_preference PolicyObjectPreferredColorGroup#secondary_color_preference}
  */
  readonly secondaryColorPreference?: string[];
  /**
  * 
  *   - Choices: `all-paths`, `direct-path`, `multi-hop-path`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#secondary_path_preference PolicyObjectPreferredColorGroup#secondary_path_preference}
  */
  readonly secondaryPathPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#tertiary_color_preference PolicyObjectPreferredColorGroup#tertiary_color_preference}
  */
  readonly tertiaryColorPreference?: string[];
  /**
  * 
  *   - Choices: `all-paths`, `direct-path`, `multi-hop-path`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#tertiary_path_preference PolicyObjectPreferredColorGroup#tertiary_path_preference}
  */
  readonly tertiaryPathPreference?: string;
}

export function policyObjectPreferredColorGroupEntriesToTerraform(struct?: PolicyObjectPreferredColorGroupEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_color_preference: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryColorPreference),
    primary_path_preference: cdktf.stringToTerraform(struct!.primaryPathPreference),
    secondary_color_preference: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondaryColorPreference),
    secondary_path_preference: cdktf.stringToTerraform(struct!.secondaryPathPreference),
    tertiary_color_preference: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tertiaryColorPreference),
    tertiary_path_preference: cdktf.stringToTerraform(struct!.tertiaryPathPreference),
  }
}


export function policyObjectPreferredColorGroupEntriesToHclTerraform(struct?: PolicyObjectPreferredColorGroupEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_color_preference: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryColorPreference),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    primary_path_preference: {
      value: cdktf.stringToHclTerraform(struct!.primaryPathPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_color_preference: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secondaryColorPreference),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    secondary_path_preference: {
      value: cdktf.stringToHclTerraform(struct!.secondaryPathPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tertiary_color_preference: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tertiaryColorPreference),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tertiary_path_preference: {
      value: cdktf.stringToHclTerraform(struct!.tertiaryPathPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyObjectPreferredColorGroupEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyObjectPreferredColorGroupEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryColorPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryColorPreference = this._primaryColorPreference;
    }
    if (this._primaryPathPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryPathPreference = this._primaryPathPreference;
    }
    if (this._secondaryColorPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryColorPreference = this._secondaryColorPreference;
    }
    if (this._secondaryPathPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPathPreference = this._secondaryPathPreference;
    }
    if (this._tertiaryColorPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.tertiaryColorPreference = this._tertiaryColorPreference;
    }
    if (this._tertiaryPathPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.tertiaryPathPreference = this._tertiaryPathPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyObjectPreferredColorGroupEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryColorPreference = undefined;
      this._primaryPathPreference = undefined;
      this._secondaryColorPreference = undefined;
      this._secondaryPathPreference = undefined;
      this._tertiaryColorPreference = undefined;
      this._tertiaryPathPreference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryColorPreference = value.primaryColorPreference;
      this._primaryPathPreference = value.primaryPathPreference;
      this._secondaryColorPreference = value.secondaryColorPreference;
      this._secondaryPathPreference = value.secondaryPathPreference;
      this._tertiaryColorPreference = value.tertiaryColorPreference;
      this._tertiaryPathPreference = value.tertiaryPathPreference;
    }
  }

  // primary_color_preference - computed: false, optional: true, required: false
  private _primaryColorPreference?: string[]; 
  public get primaryColorPreference() {
    return cdktf.Fn.tolist(this.getListAttribute('primary_color_preference'));
  }
  public set primaryColorPreference(value: string[]) {
    this._primaryColorPreference = value;
  }
  public resetPrimaryColorPreference() {
    this._primaryColorPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorPreferenceInput() {
    return this._primaryColorPreference;
  }

  // primary_path_preference - computed: false, optional: true, required: false
  private _primaryPathPreference?: string; 
  public get primaryPathPreference() {
    return this.getStringAttribute('primary_path_preference');
  }
  public set primaryPathPreference(value: string) {
    this._primaryPathPreference = value;
  }
  public resetPrimaryPathPreference() {
    this._primaryPathPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPathPreferenceInput() {
    return this._primaryPathPreference;
  }

  // secondary_color_preference - computed: false, optional: true, required: false
  private _secondaryColorPreference?: string[]; 
  public get secondaryColorPreference() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_color_preference'));
  }
  public set secondaryColorPreference(value: string[]) {
    this._secondaryColorPreference = value;
  }
  public resetSecondaryColorPreference() {
    this._secondaryColorPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryColorPreferenceInput() {
    return this._secondaryColorPreference;
  }

  // secondary_path_preference - computed: false, optional: true, required: false
  private _secondaryPathPreference?: string; 
  public get secondaryPathPreference() {
    return this.getStringAttribute('secondary_path_preference');
  }
  public set secondaryPathPreference(value: string) {
    this._secondaryPathPreference = value;
  }
  public resetSecondaryPathPreference() {
    this._secondaryPathPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPathPreferenceInput() {
    return this._secondaryPathPreference;
  }

  // tertiary_color_preference - computed: false, optional: true, required: false
  private _tertiaryColorPreference?: string[]; 
  public get tertiaryColorPreference() {
    return cdktf.Fn.tolist(this.getListAttribute('tertiary_color_preference'));
  }
  public set tertiaryColorPreference(value: string[]) {
    this._tertiaryColorPreference = value;
  }
  public resetTertiaryColorPreference() {
    this._tertiaryColorPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryColorPreferenceInput() {
    return this._tertiaryColorPreference;
  }

  // tertiary_path_preference - computed: false, optional: true, required: false
  private _tertiaryPathPreference?: string; 
  public get tertiaryPathPreference() {
    return this.getStringAttribute('tertiary_path_preference');
  }
  public set tertiaryPathPreference(value: string) {
    this._tertiaryPathPreference = value;
  }
  public resetTertiaryPathPreference() {
    this._tertiaryPathPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryPathPreferenceInput() {
    return this._tertiaryPathPreference;
  }
}

export class PolicyObjectPreferredColorGroupEntriesList extends cdktf.ComplexList {
  public internalValue? : PolicyObjectPreferredColorGroupEntries[] | cdktf.IResolvable

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
  public get(index: number): PolicyObjectPreferredColorGroupEntriesOutputReference {
    return new PolicyObjectPreferredColorGroupEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group sdwan_policy_object_preferred_color_group}
*/
export class PolicyObjectPreferredColorGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_preferred_color_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectPreferredColorGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectPreferredColorGroup to import
  * @param importFromId The id of the existing PolicyObjectPreferredColorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectPreferredColorGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_preferred_color_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_preferred_color_group sdwan_policy_object_preferred_color_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectPreferredColorGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectPreferredColorGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_preferred_color_group',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
  private _entries = new PolicyObjectPreferredColorGroupEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: PolicyObjectPreferredColorGroupEntries[] | cdktf.IResolvable) {
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
      entries: cdktf.listMapper(policyObjectPreferredColorGroupEntriesToTerraform, false)(this._entries.internalValue),
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
        value: cdktf.listMapperHcl(policyObjectPreferredColorGroupEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyObjectPreferredColorGroupEntriesList",
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
