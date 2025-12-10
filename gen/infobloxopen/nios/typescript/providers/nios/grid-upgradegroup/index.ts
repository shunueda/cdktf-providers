// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GridUpgradegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The upgrade group descriptive comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#comment GridUpgradegroup#comment}
  */
  readonly comment?: string;
  /**
  * The distribution dependent group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#distribution_dependent_group GridUpgradegroup#distribution_dependent_group}
  */
  readonly distributionDependentGroup?: string;
  /**
  * The distribution scheduling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#distribution_policy GridUpgradegroup#distribution_policy}
  */
  readonly distributionPolicy?: string;
  /**
  * The time of the next scheduled distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#distribution_time GridUpgradegroup#distribution_time}
  */
  readonly distributionTime?: string;
  /**
  * The upgrade group members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#members GridUpgradegroup#members}
  */
  readonly members?: GridUpgradegroupMembers[] | cdktf.IResolvable;
  /**
  * The upgrade group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#name GridUpgradegroup#name}
  */
  readonly name: string;
  /**
  * The upgrade dependent group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#upgrade_dependent_group GridUpgradegroup#upgrade_dependent_group}
  */
  readonly upgradeDependentGroup?: string;
  /**
  * The upgrade scheduling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#upgrade_policy GridUpgradegroup#upgrade_policy}
  */
  readonly upgradePolicy?: string;
  /**
  * The time of the next scheduled upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#upgrade_time GridUpgradegroup#upgrade_time}
  */
  readonly upgradeTime?: string;
}
export interface GridUpgradegroupMembers {
  /**
  * The upgrade group member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#member GridUpgradegroup#member}
  */
  readonly member: string;
}

export function gridUpgradegroupMembersToTerraform(struct?: GridUpgradegroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member: cdktf.stringToTerraform(struct!.member),
  }
}


export function gridUpgradegroupMembersToHclTerraform(struct?: GridUpgradegroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member: {
      value: cdktf.stringToHclTerraform(struct!.member),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GridUpgradegroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GridUpgradegroupMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._member !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GridUpgradegroupMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._member = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._member = value.member;
    }
  }

  // member - computed: true, optional: false, required: true
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}

export class GridUpgradegroupMembersList extends cdktf.ComplexList {
  public internalValue? : GridUpgradegroupMembers[] | cdktf.IResolvable

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
  public get(index: number): GridUpgradegroupMembersOutputReference {
    return new GridUpgradegroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup nios_grid_upgradegroup}
*/
export class GridUpgradegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_grid_upgradegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GridUpgradegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GridUpgradegroup to import
  * @param importFromId The id of the existing GridUpgradegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GridUpgradegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_grid_upgradegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/grid_upgradegroup nios_grid_upgradegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GridUpgradegroupConfig
  */
  public constructor(scope: Construct, id: string, config: GridUpgradegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_grid_upgradegroup',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._distributionDependentGroup = config.distributionDependentGroup;
    this._distributionPolicy = config.distributionPolicy;
    this._distributionTime = config.distributionTime;
    this._members.internalValue = config.members;
    this._name = config.name;
    this._upgradeDependentGroup = config.upgradeDependentGroup;
    this._upgradePolicy = config.upgradePolicy;
    this._upgradeTime = config.upgradeTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // distribution_dependent_group - computed: true, optional: true, required: false
  private _distributionDependentGroup?: string; 
  public get distributionDependentGroup() {
    return this.getStringAttribute('distribution_dependent_group');
  }
  public set distributionDependentGroup(value: string) {
    this._distributionDependentGroup = value;
  }
  public resetDistributionDependentGroup() {
    this._distributionDependentGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionDependentGroupInput() {
    return this._distributionDependentGroup;
  }

  // distribution_policy - computed: true, optional: true, required: false
  private _distributionPolicy?: string; 
  public get distributionPolicy() {
    return this.getStringAttribute('distribution_policy');
  }
  public set distributionPolicy(value: string) {
    this._distributionPolicy = value;
  }
  public resetDistributionPolicy() {
    this._distributionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionPolicyInput() {
    return this._distributionPolicy;
  }

  // distribution_time - computed: true, optional: true, required: false
  private _distributionTime?: string; 
  public get distributionTime() {
    return this.getStringAttribute('distribution_time');
  }
  public set distributionTime(value: string) {
    this._distributionTime = value;
  }
  public resetDistributionTime() {
    this._distributionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionTimeInput() {
    return this._distributionTime;
  }

  // members - computed: true, optional: true, required: false
  private _members = new GridUpgradegroupMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: GridUpgradegroupMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // upgrade_dependent_group - computed: true, optional: true, required: false
  private _upgradeDependentGroup?: string; 
  public get upgradeDependentGroup() {
    return this.getStringAttribute('upgrade_dependent_group');
  }
  public set upgradeDependentGroup(value: string) {
    this._upgradeDependentGroup = value;
  }
  public resetUpgradeDependentGroup() {
    this._upgradeDependentGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDependentGroupInput() {
    return this._upgradeDependentGroup;
  }

  // upgrade_policy - computed: true, optional: true, required: false
  private _upgradePolicy?: string; 
  public get upgradePolicy() {
    return this.getStringAttribute('upgrade_policy');
  }
  public set upgradePolicy(value: string) {
    this._upgradePolicy = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy;
  }

  // upgrade_time - computed: true, optional: true, required: false
  private _upgradeTime?: string; 
  public get upgradeTime() {
    return this.getStringAttribute('upgrade_time');
  }
  public set upgradeTime(value: string) {
    this._upgradeTime = value;
  }
  public resetUpgradeTime() {
    this._upgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeInput() {
    return this._upgradeTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      distribution_dependent_group: cdktf.stringToTerraform(this._distributionDependentGroup),
      distribution_policy: cdktf.stringToTerraform(this._distributionPolicy),
      distribution_time: cdktf.stringToTerraform(this._distributionTime),
      members: cdktf.listMapper(gridUpgradegroupMembersToTerraform, false)(this._members.internalValue),
      name: cdktf.stringToTerraform(this._name),
      upgrade_dependent_group: cdktf.stringToTerraform(this._upgradeDependentGroup),
      upgrade_policy: cdktf.stringToTerraform(this._upgradePolicy),
      upgrade_time: cdktf.stringToTerraform(this._upgradeTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution_dependent_group: {
        value: cdktf.stringToHclTerraform(this._distributionDependentGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution_policy: {
        value: cdktf.stringToHclTerraform(this._distributionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution_time: {
        value: cdktf.stringToHclTerraform(this._distributionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(gridUpgradegroupMembersToHclTerraform, false)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GridUpgradegroupMembersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_dependent_group: {
        value: cdktf.stringToHclTerraform(this._upgradeDependentGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_policy: {
        value: cdktf.stringToHclTerraform(this._upgradePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_time: {
        value: cdktf.stringToHclTerraform(this._upgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
