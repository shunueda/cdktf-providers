// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCrowdstrikeSensorUpdatePoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter policies by the user who created them. All provided filter attributes must match for a policy to be returned (omitted attributes are ignored). Supports wildcard matching with '*' where '*' matches any sequence of characters until the end of the string or until the next literal character in the pattern is found. Multiple wildcards can be used in a single pattern. Matching is case insensitive. Cannot be used together with 'filter' or 'ids'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies#created_by DataCrowdstrikeSensorUpdatePolicies#created_by}
  */
  readonly createdBy?: string;
  /**
  * Filter policies by description. All provided filter attributes must match for a policy to be returned (omitted attributes are ignored). Supports wildcard matching with '*' where '*' matches any sequence of characters until the end of the string or until the next literal character in the pattern is found. Multiple wildcards can be used in a single pattern. Matching is case insensitive. Cannot be used together with 'filter' or 'ids'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies#description DataCrowdstrikeSensorUpdatePolicies#description}
  */
  readonly description?: string;
  /**
  * Filter policies by enabled status. All provided filter attributes must match for a policy to be returned (omitted attributes are ignored). Cannot be used together with 'filter' or 'ids'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies#enabled DataCrowdstrikeSensorUpdatePolicies#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * FQL filter to apply to the sensor update policies query. When specified, only policies matching the filter will be returned. Cannot be used together with 'ids' or other filter attributes. Example: `platform_name:'Windows'`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies#filter DataCrowdstrikeSensorUpdatePolicies#filter}
  */
  readonly filter?: string;
  /**
  * List of sensor update policy IDs to retrieve. When specified, only policies with matching IDs will be returned. Cannot be used together with 'filter' or other filter attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies#ids DataCrowdstrikeSensorUpdatePolicies#ids}
  */
  readonly ids?: string[];
  /**
  * Filter policies by the user who last modified them. All provided filter attributes must match for a policy to be returned (omitted attributes are ignored). Supports wildcard matching with '*' where '*' matches any sequence of characters until the end of the string or until the next literal character in the pattern is found. Multiple wildcards can be used in a single pattern. Matching is case insensitive. Cannot be used together with 'filter' or 'ids'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies#modified_by DataCrowdstrikeSensorUpdatePolicies#modified_by}
  */
  readonly modifiedBy?: string;
  /**
  * Filter policies by name. All provided filter attributes must match for a policy to be returned (omitted attributes are ignored). Supports wildcard matching with '*' where '*' matches any sequence of characters until the end of the string or until the next literal character in the pattern is found. Multiple wildcards can be used in a single pattern. Matching is case insensitive. Cannot be used together with 'filter' or 'ids'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies#name DataCrowdstrikeSensorUpdatePolicies#name}
  */
  readonly name?: string;
  /**
  * Filter policies by platform_name (Windows, Linux, Mac). All provided filter attributes must match for a policy to be returned (omitted attributes are ignored). Cannot be used together with 'filter' or 'ids'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies#platform_name DataCrowdstrikeSensorUpdatePolicies#platform_name}
  */
  readonly platformName?: string;
  /**
  * Sort order for the results. Valid values include field names with optional '.asc' or '.desc' suffix. Example: 'name.asc', 'precedence.desc'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies#sort DataCrowdstrikeSensorUpdatePolicies#sort}
  */
  readonly sort?: string;
}
export interface DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocks {
}

export function dataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocksToTerraform(struct?: DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocksToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocksList extends cdktf.ComplexList {

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
  public get(index: number): DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocksOutputReference {
    return new DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCrowdstrikeSensorUpdatePoliciesPoliciesSchedule {
}

export function dataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleToTerraform(struct?: DataCrowdstrikeSensorUpdatePoliciesPoliciesSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePoliciesPoliciesSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePoliciesPoliciesSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePoliciesPoliciesSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // time_blocks - computed: true, optional: false, required: false
  private _timeBlocks = new DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleTimeBlocksList(this, "time_blocks", true);
  public get timeBlocks() {
    return this._timeBlocks;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}
export interface DataCrowdstrikeSensorUpdatePoliciesPolicies {
}

export function dataCrowdstrikeSensorUpdatePoliciesPoliciesToTerraform(struct?: DataCrowdstrikeSensorUpdatePoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePoliciesPoliciesToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePoliciesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrowdstrikeSensorUpdatePoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePoliciesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // build_arm64 - computed: true, optional: false, required: false
  public get buildArm64() {
    return this.getStringAttribute('build_arm64');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // host_groups - computed: true, optional: false, required: false
  public get hostGroups() {
    return this.getListAttribute('host_groups');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_timestamp - computed: true, optional: false, required: false
  public get modifiedTimestamp() {
    return this.getStringAttribute('modified_timestamp');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // platform_name - computed: true, optional: false, required: false
  public get platformName() {
    return this.getStringAttribute('platform_name');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataCrowdstrikeSensorUpdatePoliciesPoliciesScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // uninstall_protection - computed: true, optional: false, required: false
  public get uninstallProtection() {
    return this.getBooleanAttribute('uninstall_protection');
  }
}

export class DataCrowdstrikeSensorUpdatePoliciesPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataCrowdstrikeSensorUpdatePoliciesPoliciesOutputReference {
    return new DataCrowdstrikeSensorUpdatePoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies crowdstrike_sensor_update_policies}
*/
export class DataCrowdstrikeSensorUpdatePolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_sensor_update_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCrowdstrikeSensorUpdatePolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCrowdstrikeSensorUpdatePolicies to import
  * @param importFromId The id of the existing DataCrowdstrikeSensorUpdatePolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCrowdstrikeSensorUpdatePolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_sensor_update_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/data-sources/sensor_update_policies crowdstrike_sensor_update_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCrowdstrikeSensorUpdatePoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCrowdstrikeSensorUpdatePoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_sensor_update_policies',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.53',
        providerVersionConstraint: '0.0.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._enabled = config.enabled;
    this._filter = config.filter;
    this._ids = config.ids;
    this._modifiedBy = config.modifiedBy;
    this._name = config.name;
    this._platformName = config.platformName;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // modified_by - computed: false, optional: true, required: false
  private _modifiedBy?: string; 
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }
  public set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  public resetModifiedBy() {
    this._modifiedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy;
  }

  // name - computed: false, optional: true, required: false
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

  // platform_name - computed: false, optional: true, required: false
  private _platformName?: string; 
  public get platformName() {
    return this.getStringAttribute('platform_name');
  }
  public set platformName(value: string) {
    this._platformName = value;
  }
  public resetPlatformName() {
    this._platformName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformNameInput() {
    return this._platformName;
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataCrowdstrikeSensorUpdatePoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter: cdktf.stringToTerraform(this._filter),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      modified_by: cdktf.stringToTerraform(this._modifiedBy),
      name: cdktf.stringToTerraform(this._name),
      platform_name: cdktf.stringToTerraform(this._platformName),
      sort: cdktf.stringToTerraform(this._sort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      modified_by: {
        value: cdktf.stringToHclTerraform(this._modifiedBy),
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
      platform_name: {
        value: cdktf.stringToHclTerraform(this._platformName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
