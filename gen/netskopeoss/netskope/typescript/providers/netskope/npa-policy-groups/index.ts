// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NpaPolicyGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups#group_name NpaPolicyGroups#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups#group_order NpaPolicyGroups#group_order}
  */
  readonly groupOrder?: NpaPolicyGroupsGroupOrder;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups#modify_by NpaPolicyGroups#modify_by}
  */
  readonly modifyBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups#modify_type NpaPolicyGroups#modify_type}
  */
  readonly modifyType?: string;
  /**
  * flag to skip output except status code. must be one of ["1", "0"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups#silent NpaPolicyGroups#silent}
  */
  readonly silent?: string;
}
export interface NpaPolicyGroupsGroupOrderGroupOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups#group_id NpaPolicyGroups#group_id}
  */
  readonly groupId?: string;
  /**
  * must be one of ["before", "after"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups#order NpaPolicyGroups#order}
  */
  readonly order?: string;
}

export function npaPolicyGroupsGroupOrderGroupOrderToTerraform(struct?: NpaPolicyGroupsGroupOrderGroupOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    order: cdktf.stringToTerraform(struct!.order),
  }
}


export function npaPolicyGroupsGroupOrderGroupOrderToHclTerraform(struct?: NpaPolicyGroupsGroupOrderGroupOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaPolicyGroupsGroupOrderGroupOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPolicyGroupsGroupOrderGroupOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPolicyGroupsGroupOrderGroupOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._order = value.order;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface NpaPolicyGroupsGroupOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups#group_order NpaPolicyGroups#group_order}
  */
  readonly groupOrder?: NpaPolicyGroupsGroupOrderGroupOrder;
}

export function npaPolicyGroupsGroupOrderToTerraform(struct?: NpaPolicyGroupsGroupOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_order: npaPolicyGroupsGroupOrderGroupOrderToTerraform(struct!.groupOrder),
  }
}


export function npaPolicyGroupsGroupOrderToHclTerraform(struct?: NpaPolicyGroupsGroupOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_order: {
      value: npaPolicyGroupsGroupOrderGroupOrderToHclTerraform(struct!.groupOrder),
      isBlock: true,
      type: "struct",
      storageClassType: "NpaPolicyGroupsGroupOrderGroupOrder",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaPolicyGroupsGroupOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPolicyGroupsGroupOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupOrder = this._groupOrder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPolicyGroupsGroupOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupOrder.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupOrder.internalValue = value.groupOrder;
    }
  }

  // group_order - computed: false, optional: true, required: false
  private _groupOrder = new NpaPolicyGroupsGroupOrderGroupOrderOutputReference(this, "group_order");
  public get groupOrder() {
    return this._groupOrder;
  }
  public putGroupOrder(value: NpaPolicyGroupsGroupOrderGroupOrder) {
    this._groupOrder.internalValue = value;
  }
  public resetGroupOrder() {
    this._groupOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOrderInput() {
    return this._groupOrder.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups netskope_npa_policy_groups}
*/
export class NpaPolicyGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_policy_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NpaPolicyGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NpaPolicyGroups to import
  * @param importFromId The id of the existing NpaPolicyGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NpaPolicyGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_policy_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_policy_groups netskope_npa_policy_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NpaPolicyGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NpaPolicyGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_policy_groups',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupName = config.groupName;
    this._groupOrder.internalValue = config.groupOrder;
    this._modifyBy = config.modifyBy;
    this._modifyType = config.modifyType;
    this._silent = config.silent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_be_edited_deleted - computed: true, optional: false, required: false
  public get canBeEditedDeleted() {
    return this.getStringAttribute('can_be_edited_deleted');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_order - computed: false, optional: true, required: false
  private _groupOrder = new NpaPolicyGroupsGroupOrderOutputReference(this, "group_order");
  public get groupOrder() {
    return this._groupOrder;
  }
  public putGroupOrder(value: NpaPolicyGroupsGroupOrder) {
    this._groupOrder.internalValue = value;
  }
  public resetGroupOrder() {
    this._groupOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOrderInput() {
    return this._groupOrder.internalValue;
  }

  // group_pinned_id - computed: true, optional: false, required: false
  public get groupPinnedId() {
    return this.getStringAttribute('group_pinned_id');
  }

  // group_prod_id - computed: true, optional: false, required: false
  public get groupProdId() {
    return this.getStringAttribute('group_prod_id');
  }

  // group_type - computed: true, optional: false, required: false
  public get groupType() {
    return this.getStringAttribute('group_type');
  }

  // modify_by - computed: false, optional: true, required: false
  private _modifyBy?: string; 
  public get modifyBy() {
    return this.getStringAttribute('modify_by');
  }
  public set modifyBy(value: string) {
    this._modifyBy = value;
  }
  public resetModifyBy() {
    this._modifyBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyByInput() {
    return this._modifyBy;
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // modify_type - computed: true, optional: true, required: false
  private _modifyType?: string; 
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }
  public set modifyType(value: string) {
    this._modifyType = value;
  }
  public resetModifyType() {
    this._modifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTypeInput() {
    return this._modifyType;
  }

  // silent - computed: false, optional: true, required: false
  private _silent?: string; 
  public get silent() {
    return this.getStringAttribute('silent');
  }
  public set silent(value: string) {
    this._silent = value;
  }
  public resetSilent() {
    this._silent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silentInput() {
    return this._silent;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      group_order: npaPolicyGroupsGroupOrderToTerraform(this._groupOrder.internalValue),
      modify_by: cdktf.stringToTerraform(this._modifyBy),
      modify_type: cdktf.stringToTerraform(this._modifyType),
      silent: cdktf.stringToTerraform(this._silent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_order: {
        value: npaPolicyGroupsGroupOrderToHclTerraform(this._groupOrder.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NpaPolicyGroupsGroupOrder",
      },
      modify_by: {
        value: cdktf.stringToHclTerraform(this._modifyBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_type: {
        value: cdktf.stringToHclTerraform(this._modifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      silent: {
        value: cdktf.stringToHclTerraform(this._silent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
