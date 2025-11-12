// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_distributionschedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosGridDistributionscheduleConfig extends cdktf.TerraformMetaArguments {
}
export interface DataNiosGridDistributionscheduleResultUpgradeGroups {
  /**
  * The distribution dependent group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_distributionschedule#distribution_dependent_group DataNiosGridDistributionschedule#distribution_dependent_group}
  */
  readonly distributionDependentGroup?: string;
  /**
  * The time of the next scheduled distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_distributionschedule#distribution_time DataNiosGridDistributionschedule#distribution_time}
  */
  readonly distributionTime?: string;
  /**
  * The upgrade group name. Required when specifying upgrade_groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_distributionschedule#name DataNiosGridDistributionschedule#name}
  */
  readonly name?: string;
}

export function dataNiosGridDistributionscheduleResultUpgradeGroupsToTerraform(struct?: DataNiosGridDistributionscheduleResultUpgradeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution_dependent_group: cdktf.stringToTerraform(struct!.distributionDependentGroup),
    distribution_time: cdktf.stringToTerraform(struct!.distributionTime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosGridDistributionscheduleResultUpgradeGroupsToHclTerraform(struct?: DataNiosGridDistributionscheduleResultUpgradeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribution_dependent_group: {
      value: cdktf.stringToHclTerraform(struct!.distributionDependentGroup),
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

export class DataNiosGridDistributionscheduleResultUpgradeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosGridDistributionscheduleResultUpgradeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributionDependentGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionDependentGroup = this._distributionDependentGroup;
    }
    if (this._distributionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionTime = this._distributionTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosGridDistributionscheduleResultUpgradeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributionDependentGroup = undefined;
      this._distributionTime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributionDependentGroup = value.distributionDependentGroup;
      this._distributionTime = value.distributionTime;
      this._name = value.name;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // upgrade_dependent_group - computed: true, optional: false, required: false
  public get upgradeDependentGroup() {
    return this.getStringAttribute('upgrade_dependent_group');
  }

  // upgrade_time - computed: true, optional: false, required: false
  public get upgradeTime() {
    return this.getNumberAttribute('upgrade_time');
  }
}

export class DataNiosGridDistributionscheduleResultUpgradeGroupsList extends cdktf.ComplexList {
  public internalValue? : DataNiosGridDistributionscheduleResultUpgradeGroups[] | cdktf.IResolvable

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
  public get(index: number): DataNiosGridDistributionscheduleResultUpgradeGroupsOutputReference {
    return new DataNiosGridDistributionscheduleResultUpgradeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosGridDistributionscheduleResult {
  /**
  * Determines whether the distribution schedule is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_distributionschedule#active DataNiosGridDistributionschedule#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The start time of the distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_distributionschedule#start_time DataNiosGridDistributionschedule#start_time}
  */
  readonly startTime?: string;
  /**
  * The upgrade groups scheduling settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_distributionschedule#upgrade_groups DataNiosGridDistributionschedule#upgrade_groups}
  */
  readonly upgradeGroups?: DataNiosGridDistributionscheduleResultUpgradeGroups[] | cdktf.IResolvable;
}

export function dataNiosGridDistributionscheduleResultToTerraform(struct?: DataNiosGridDistributionscheduleResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    upgrade_groups: cdktf.listMapper(dataNiosGridDistributionscheduleResultUpgradeGroupsToTerraform, false)(struct!.upgradeGroups),
  }
}


export function dataNiosGridDistributionscheduleResultToHclTerraform(struct?: DataNiosGridDistributionscheduleResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_groups: {
      value: cdktf.listMapperHcl(dataNiosGridDistributionscheduleResultUpgradeGroupsToHclTerraform, false)(struct!.upgradeGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosGridDistributionscheduleResultUpgradeGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosGridDistributionscheduleResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosGridDistributionscheduleResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._upgradeGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeGroups = this._upgradeGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosGridDistributionscheduleResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._startTime = undefined;
      this._upgradeGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._startTime = value.startTime;
      this._upgradeGroups.internalValue = value.upgradeGroups;
    }
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // upgrade_groups - computed: true, optional: true, required: false
  private _upgradeGroups = new DataNiosGridDistributionscheduleResultUpgradeGroupsList(this, "upgrade_groups", false);
  public get upgradeGroups() {
    return this._upgradeGroups;
  }
  public putUpgradeGroups(value: DataNiosGridDistributionscheduleResultUpgradeGroups[] | cdktf.IResolvable) {
    this._upgradeGroups.internalValue = value;
  }
  public resetUpgradeGroups() {
    this._upgradeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeGroupsInput() {
    return this._upgradeGroups.internalValue;
  }
}

export class DataNiosGridDistributionscheduleResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosGridDistributionscheduleResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosGridDistributionscheduleResultOutputReference {
    return new DataNiosGridDistributionscheduleResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_distributionschedule nios_grid_distributionschedule}
*/
export class DataNiosGridDistributionschedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_grid_distributionschedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosGridDistributionschedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosGridDistributionschedule to import
  * @param importFromId The id of the existing DataNiosGridDistributionschedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_distributionschedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosGridDistributionschedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_grid_distributionschedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/grid_distributionschedule nios_grid_distributionschedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosGridDistributionscheduleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosGridDistributionscheduleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_grid_distributionschedule',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosGridDistributionscheduleResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
