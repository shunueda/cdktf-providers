// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/placement_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlacementGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The label of the Placement Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/placement_group#label PlacementGroup#label}
  */
  readonly label: string;
  /**
  * Whether this Placement Group has a strict compliance policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/placement_group#placement_group_policy PlacementGroup#placement_group_policy}
  */
  readonly placementGroupPolicy?: string;
  /**
  * The placement group type for Linodes in this Placement Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/placement_group#placement_group_type PlacementGroup#placement_group_type}
  */
  readonly placementGroupType: string;
  /**
  * The region of the Placement Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/placement_group#region PlacementGroup#region}
  */
  readonly region: string;
}
export interface PlacementGroupMembers {
}

export function placementGroupMembersToTerraform(struct?: PlacementGroupMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function placementGroupMembersToHclTerraform(struct?: PlacementGroupMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PlacementGroupMembersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PlacementGroupMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlacementGroupMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_compliant - computed: true, optional: false, required: false
  public get isCompliant() {
    return this.getBooleanAttribute('is_compliant');
  }

  // linode_id - computed: true, optional: false, required: false
  public get linodeId() {
    return this.getNumberAttribute('linode_id');
  }
}

export class PlacementGroupMembersList extends cdktf.ComplexList {

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
  public get(index: number): PlacementGroupMembersOutputReference {
    return new PlacementGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/placement_group linode_placement_group}
*/
export class PlacementGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_placement_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlacementGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlacementGroup to import
  * @param importFromId The id of the existing PlacementGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/placement_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlacementGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_placement_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/placement_group linode_placement_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlacementGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PlacementGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_placement_group',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._label = config.label;
    this._placementGroupPolicy = config.placementGroupPolicy;
    this._placementGroupType = config.placementGroupType;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_compliant - computed: true, optional: false, required: false
  public get isCompliant() {
    return this.getBooleanAttribute('is_compliant');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // members - computed: true, optional: false, required: false
  private _members = new PlacementGroupMembersList(this, "members", true);
  public get members() {
    return this._members;
  }

  // placement_group_policy - computed: true, optional: true, required: false
  private _placementGroupPolicy?: string; 
  public get placementGroupPolicy() {
    return this.getStringAttribute('placement_group_policy');
  }
  public set placementGroupPolicy(value: string) {
    this._placementGroupPolicy = value;
  }
  public resetPlacementGroupPolicy() {
    this._placementGroupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupPolicyInput() {
    return this._placementGroupPolicy;
  }

  // placement_group_type - computed: false, optional: false, required: true
  private _placementGroupType?: string; 
  public get placementGroupType() {
    return this.getStringAttribute('placement_group_type');
  }
  public set placementGroupType(value: string) {
    this._placementGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupTypeInput() {
    return this._placementGroupType;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      label: cdktf.stringToTerraform(this._label),
      placement_group_policy: cdktf.stringToTerraform(this._placementGroupPolicy),
      placement_group_type: cdktf.stringToTerraform(this._placementGroupType),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_group_policy: {
        value: cdktf.stringToHclTerraform(this._placementGroupPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_group_type: {
        value: cdktf.stringToHclTerraform(this._placementGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
