// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosGridUpgradegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#filters DataNiosGridUpgradegroup#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#max_results DataNiosGridUpgradegroup#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#paging DataNiosGridUpgradegroup#paging}
  */
  readonly paging?: number;
}
export interface DataNiosGridUpgradegroupResultMembers {
  /**
  * The upgrade group member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#member DataNiosGridUpgradegroup#member}
  */
  readonly member: string;
}

export function dataNiosGridUpgradegroupResultMembersToTerraform(struct?: DataNiosGridUpgradegroupResultMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member: cdktf.stringToTerraform(struct!.member),
  }
}


export function dataNiosGridUpgradegroupResultMembersToHclTerraform(struct?: DataNiosGridUpgradegroupResultMembers | cdktf.IResolvable): any {
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

export class DataNiosGridUpgradegroupResultMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosGridUpgradegroupResultMembers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosGridUpgradegroupResultMembers | cdktf.IResolvable | undefined) {
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

export class DataNiosGridUpgradegroupResultMembersList extends cdktf.ComplexList {
  public internalValue? : DataNiosGridUpgradegroupResultMembers[] | cdktf.IResolvable

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
  public get(index: number): DataNiosGridUpgradegroupResultMembersOutputReference {
    return new DataNiosGridUpgradegroupResultMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosGridUpgradegroupResult {
  /**
  * The upgrade group descriptive comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#comment DataNiosGridUpgradegroup#comment}
  */
  readonly comment?: string;
  /**
  * The distribution dependent group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#distribution_dependent_group DataNiosGridUpgradegroup#distribution_dependent_group}
  */
  readonly distributionDependentGroup?: string;
  /**
  * The distribution scheduling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#distribution_policy DataNiosGridUpgradegroup#distribution_policy}
  */
  readonly distributionPolicy?: string;
  /**
  * The time of the next scheduled distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#distribution_time DataNiosGridUpgradegroup#distribution_time}
  */
  readonly distributionTime?: string;
  /**
  * The upgrade group members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#members DataNiosGridUpgradegroup#members}
  */
  readonly members?: DataNiosGridUpgradegroupResultMembers[] | cdktf.IResolvable;
  /**
  * The upgrade group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#name DataNiosGridUpgradegroup#name}
  */
  readonly name: string;
  /**
  * The upgrade dependent group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#upgrade_dependent_group DataNiosGridUpgradegroup#upgrade_dependent_group}
  */
  readonly upgradeDependentGroup?: string;
  /**
  * The upgrade scheduling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#upgrade_policy DataNiosGridUpgradegroup#upgrade_policy}
  */
  readonly upgradePolicy?: string;
  /**
  * The time of the next scheduled upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#upgrade_time DataNiosGridUpgradegroup#upgrade_time}
  */
  readonly upgradeTime?: string;
}

export function dataNiosGridUpgradegroupResultToTerraform(struct?: DataNiosGridUpgradegroupResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    distribution_dependent_group: cdktf.stringToTerraform(struct!.distributionDependentGroup),
    distribution_policy: cdktf.stringToTerraform(struct!.distributionPolicy),
    distribution_time: cdktf.stringToTerraform(struct!.distributionTime),
    members: cdktf.listMapper(dataNiosGridUpgradegroupResultMembersToTerraform, false)(struct!.members),
    name: cdktf.stringToTerraform(struct!.name),
    upgrade_dependent_group: cdktf.stringToTerraform(struct!.upgradeDependentGroup),
    upgrade_policy: cdktf.stringToTerraform(struct!.upgradePolicy),
    upgrade_time: cdktf.stringToTerraform(struct!.upgradeTime),
  }
}


export function dataNiosGridUpgradegroupResultToHclTerraform(struct?: DataNiosGridUpgradegroupResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribution_dependent_group: {
      value: cdktf.stringToHclTerraform(struct!.distributionDependentGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribution_policy: {
      value: cdktf.stringToHclTerraform(struct!.distributionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribution_time: {
      value: cdktf.stringToHclTerraform(struct!.distributionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(dataNiosGridUpgradegroupResultMembersToHclTerraform, false)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosGridUpgradegroupResultMembersList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_dependent_group: {
      value: cdktf.stringToHclTerraform(struct!.upgradeDependentGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_policy: {
      value: cdktf.stringToHclTerraform(struct!.upgradePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_time: {
      value: cdktf.stringToHclTerraform(struct!.upgradeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosGridUpgradegroupResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosGridUpgradegroupResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._distributionDependentGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionDependentGroup = this._distributionDependentGroup;
    }
    if (this._distributionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionPolicy = this._distributionPolicy;
    }
    if (this._distributionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionTime = this._distributionTime;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._upgradeDependentGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeDependentGroup = this._upgradeDependentGroup;
    }
    if (this._upgradePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradePolicy = this._upgradePolicy;
    }
    if (this._upgradeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeTime = this._upgradeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosGridUpgradegroupResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._distributionDependentGroup = undefined;
      this._distributionPolicy = undefined;
      this._distributionTime = undefined;
      this._members.internalValue = undefined;
      this._name = undefined;
      this._upgradeDependentGroup = undefined;
      this._upgradePolicy = undefined;
      this._upgradeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._distributionDependentGroup = value.distributionDependentGroup;
      this._distributionPolicy = value.distributionPolicy;
      this._distributionTime = value.distributionTime;
      this._members.internalValue = value.members;
      this._name = value.name;
      this._upgradeDependentGroup = value.upgradeDependentGroup;
      this._upgradePolicy = value.upgradePolicy;
      this._upgradeTime = value.upgradeTime;
    }
  }

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
  private _members = new DataNiosGridUpgradegroupResultMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DataNiosGridUpgradegroupResultMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataNiosGridUpgradegroupResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosGridUpgradegroupResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosGridUpgradegroupResultOutputReference {
    return new DataNiosGridUpgradegroupResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup nios_grid_upgradegroup}
*/
export class DataNiosGridUpgradegroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_grid_upgradegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosGridUpgradegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosGridUpgradegroup to import
  * @param importFromId The id of the existing DataNiosGridUpgradegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosGridUpgradegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_grid_upgradegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_upgradegroup nios_grid_upgradegroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosGridUpgradegroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosGridUpgradegroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_grid_upgradegroup',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosGridUpgradegroupResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
