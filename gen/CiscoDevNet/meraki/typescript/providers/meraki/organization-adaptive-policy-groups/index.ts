// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationAdaptivePolicyGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups#items OrganizationAdaptivePolicyGroups#items}
  */
  readonly items: OrganizationAdaptivePolicyGroupsItems[] | cdktf.IResolvable;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups#organization_id OrganizationAdaptivePolicyGroups#organization_id}
  */
  readonly organizationId: string;
}
export interface OrganizationAdaptivePolicyGroupsItemsPolicyObjects {
  /**
  * The ID of the policy object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups#id OrganizationAdaptivePolicyGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the policy object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups#name OrganizationAdaptivePolicyGroups#name}
  */
  readonly name: string;
}

export function organizationAdaptivePolicyGroupsItemsPolicyObjectsToTerraform(struct?: OrganizationAdaptivePolicyGroupsItemsPolicyObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function organizationAdaptivePolicyGroupsItemsPolicyObjectsToHclTerraform(struct?: OrganizationAdaptivePolicyGroupsItemsPolicyObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationAdaptivePolicyGroupsItemsPolicyObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationAdaptivePolicyGroupsItemsPolicyObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationAdaptivePolicyGroupsItemsPolicyObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
}

export class OrganizationAdaptivePolicyGroupsItemsPolicyObjectsList extends cdktf.ComplexList {
  public internalValue? : OrganizationAdaptivePolicyGroupsItemsPolicyObjects[] | cdktf.IResolvable

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
  public get(index: number): OrganizationAdaptivePolicyGroupsItemsPolicyObjectsOutputReference {
    return new OrganizationAdaptivePolicyGroupsItemsPolicyObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationAdaptivePolicyGroupsItems {
  /**
  * Description of the group (default: '')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups#description OrganizationAdaptivePolicyGroups#description}
  */
  readonly description?: string;
  /**
  * Name of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups#name OrganizationAdaptivePolicyGroups#name}
  */
  readonly name: string;
  /**
  * The policy objects that belong to this group; traffic from addresses specified by these policy objects will be tagged with this group`s SGT value if no other tagging scheme is being used (each requires one unique attribute) (default: [])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups#policy_objects OrganizationAdaptivePolicyGroups#policy_objects}
  */
  readonly policyObjects?: OrganizationAdaptivePolicyGroupsItemsPolicyObjects[] | cdktf.IResolvable;
  /**
  * SGT value of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups#sgt OrganizationAdaptivePolicyGroups#sgt}
  */
  readonly sgt: number;
}

export function organizationAdaptivePolicyGroupsItemsToTerraform(struct?: OrganizationAdaptivePolicyGroupsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    policy_objects: cdktf.listMapper(organizationAdaptivePolicyGroupsItemsPolicyObjectsToTerraform, false)(struct!.policyObjects),
    sgt: cdktf.numberToTerraform(struct!.sgt),
  }
}


export function organizationAdaptivePolicyGroupsItemsToHclTerraform(struct?: OrganizationAdaptivePolicyGroupsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_objects: {
      value: cdktf.listMapperHcl(organizationAdaptivePolicyGroupsItemsPolicyObjectsToHclTerraform, false)(struct!.policyObjects),
      isBlock: true,
      type: "list",
      storageClassType: "OrganizationAdaptivePolicyGroupsItemsPolicyObjectsList",
    },
    sgt: {
      value: cdktf.numberToHclTerraform(struct!.sgt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationAdaptivePolicyGroupsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationAdaptivePolicyGroupsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyObjects = this._policyObjects?.internalValue;
    }
    if (this._sgt !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgt = this._sgt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationAdaptivePolicyGroupsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._policyObjects.internalValue = undefined;
      this._sgt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._policyObjects.internalValue = value.policyObjects;
      this._sgt = value.sgt;
    }
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

  // policy_objects - computed: false, optional: true, required: false
  private _policyObjects = new OrganizationAdaptivePolicyGroupsItemsPolicyObjectsList(this, "policy_objects", false);
  public get policyObjects() {
    return this._policyObjects;
  }
  public putPolicyObjects(value: OrganizationAdaptivePolicyGroupsItemsPolicyObjects[] | cdktf.IResolvable) {
    this._policyObjects.internalValue = value;
  }
  public resetPolicyObjects() {
    this._policyObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyObjectsInput() {
    return this._policyObjects.internalValue;
  }

  // sgt - computed: false, optional: false, required: true
  private _sgt?: number; 
  public get sgt() {
    return this.getNumberAttribute('sgt');
  }
  public set sgt(value: number) {
    this._sgt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtInput() {
    return this._sgt;
  }
}

export class OrganizationAdaptivePolicyGroupsItemsList extends cdktf.ComplexList {
  public internalValue? : OrganizationAdaptivePolicyGroupsItems[] | cdktf.IResolvable

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
  public get(index: number): OrganizationAdaptivePolicyGroupsItemsOutputReference {
    return new OrganizationAdaptivePolicyGroupsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups meraki_organization_adaptive_policy_groups}
*/
export class OrganizationAdaptivePolicyGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_adaptive_policy_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationAdaptivePolicyGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationAdaptivePolicyGroups to import
  * @param importFromId The id of the existing OrganizationAdaptivePolicyGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationAdaptivePolicyGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_adaptive_policy_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_adaptive_policy_groups meraki_organization_adaptive_policy_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationAdaptivePolicyGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationAdaptivePolicyGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_adaptive_policy_groups',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new OrganizationAdaptivePolicyGroupsItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: OrganizationAdaptivePolicyGroupsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(organizationAdaptivePolicyGroupsItemsToTerraform, false)(this._items.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(organizationAdaptivePolicyGroupsItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrganizationAdaptivePolicyGroupsItemsList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
