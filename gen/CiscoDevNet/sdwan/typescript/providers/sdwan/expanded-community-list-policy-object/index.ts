// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/expanded_community_list_policy_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpandedCommunityListPolicyObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/expanded_community_list_policy_object#entries ExpandedCommunityListPolicyObject#entries}
  */
  readonly entries: ExpandedCommunityListPolicyObjectEntries[] | cdktf.IResolvable;
  /**
  * The name of the policy object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/expanded_community_list_policy_object#name ExpandedCommunityListPolicyObject#name}
  */
  readonly name: string;
}
export interface ExpandedCommunityListPolicyObjectEntries {
  /**
  * Expanded community value, e.g. `100:1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/expanded_community_list_policy_object#community ExpandedCommunityListPolicyObject#community}
  */
  readonly community?: string;
}

export function expandedCommunityListPolicyObjectEntriesToTerraform(struct?: ExpandedCommunityListPolicyObjectEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.stringToTerraform(struct!.community),
  }
}


export function expandedCommunityListPolicyObjectEntriesToHclTerraform(struct?: ExpandedCommunityListPolicyObjectEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExpandedCommunityListPolicyObjectEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExpandedCommunityListPolicyObjectEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpandedCommunityListPolicyObjectEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
    }
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }
}

export class ExpandedCommunityListPolicyObjectEntriesList extends cdktf.ComplexList {
  public internalValue? : ExpandedCommunityListPolicyObjectEntries[] | cdktf.IResolvable

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
  public get(index: number): ExpandedCommunityListPolicyObjectEntriesOutputReference {
    return new ExpandedCommunityListPolicyObjectEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/expanded_community_list_policy_object sdwan_expanded_community_list_policy_object}
*/
export class ExpandedCommunityListPolicyObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_expanded_community_list_policy_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpandedCommunityListPolicyObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpandedCommunityListPolicyObject to import
  * @param importFromId The id of the existing ExpandedCommunityListPolicyObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/expanded_community_list_policy_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpandedCommunityListPolicyObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_expanded_community_list_policy_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/expanded_community_list_policy_object sdwan_expanded_community_list_policy_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpandedCommunityListPolicyObjectConfig
  */
  public constructor(scope: Construct, id: string, config: ExpandedCommunityListPolicyObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_expanded_community_list_policy_object',
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
    this._entries.internalValue = config.entries;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entries - computed: false, optional: false, required: true
  private _entries = new ExpandedCommunityListPolicyObjectEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ExpandedCommunityListPolicyObjectEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
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
      entries: cdktf.listMapper(expandedCommunityListPolicyObjectEntriesToTerraform, false)(this._entries.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entries: {
        value: cdktf.listMapperHcl(expandedCommunityListPolicyObjectEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExpandedCommunityListPolicyObjectEntriesList",
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
