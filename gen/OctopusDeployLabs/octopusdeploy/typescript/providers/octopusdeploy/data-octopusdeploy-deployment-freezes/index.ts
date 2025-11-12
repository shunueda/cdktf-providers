// https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployDeploymentFreezesConfig extends cdktf.TerraformMetaArguments {
  /**
  * A filter to search by a list of environment IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes#environment_ids DataOctopusdeployDeploymentFreezes#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes#ids DataOctopusdeployDeploymentFreezes#ids}
  */
  readonly ids?: string[];
  /**
  * Include deployment freezes that completed, default is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes#include_complete DataOctopusdeployDeploymentFreezes#include_complete}
  */
  readonly includeComplete?: boolean | cdktf.IResolvable;
  /**
  * A filter to search by a partial name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes#partial_name DataOctopusdeployDeploymentFreezes#partial_name}
  */
  readonly partialName?: string;
  /**
  * A filter to search by a list of project IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes#project_ids DataOctopusdeployDeploymentFreezes#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * A filter to specify the number of items to skip in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes#skip DataOctopusdeployDeploymentFreezes#skip}
  */
  readonly skip?: number;
  /**
  * Filter by the status of the deployment freeze, value values are Expired, Active, Scheduled (case-insensitive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes#status DataOctopusdeployDeploymentFreezes#status}
  */
  readonly status?: string;
  /**
  * A filter to specify the number of items to take (or return) in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes#take DataOctopusdeployDeploymentFreezes#take}
  */
  readonly take?: number;
  /**
  * A filter to search by a list of tenant IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes#tenant_ids DataOctopusdeployDeploymentFreezes#tenant_ids}
  */
  readonly tenantIds?: string[];
}
export interface DataOctopusdeployDeploymentFreezesDeploymentFreezesRecurringSchedule {
}

export function dataOctopusdeployDeploymentFreezesDeploymentFreezesRecurringScheduleToTerraform(struct?: DataOctopusdeployDeploymentFreezesDeploymentFreezesRecurringSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployDeploymentFreezesDeploymentFreezesRecurringScheduleToHclTerraform(struct?: DataOctopusdeployDeploymentFreezesDeploymentFreezesRecurringSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployDeploymentFreezesDeploymentFreezesRecurringScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOctopusdeployDeploymentFreezesDeploymentFreezesRecurringSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployDeploymentFreezesDeploymentFreezesRecurringSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_of_month - computed: true, optional: false, required: false
  public get dateOfMonth() {
    return this.getStringAttribute('date_of_month');
  }

  // day_number_of_month - computed: true, optional: false, required: false
  public get dayNumberOfMonth() {
    return this.getStringAttribute('day_number_of_month');
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // days_of_week - computed: true, optional: false, required: false
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }

  // end_after_occurrences - computed: true, optional: false, required: false
  public get endAfterOccurrences() {
    return this.getNumberAttribute('end_after_occurrences');
  }

  // end_on_date - computed: true, optional: false, required: false
  public get endOnDate() {
    return this.getStringAttribute('end_on_date');
  }

  // end_type - computed: true, optional: false, required: false
  public get endType() {
    return this.getStringAttribute('end_type');
  }

  // monthly_schedule_type - computed: true, optional: false, required: false
  public get monthlyScheduleType() {
    return this.getStringAttribute('monthly_schedule_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getNumberAttribute('unit');
  }
}
export interface DataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScope {
}

export function dataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScopeToTerraform(struct?: DataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScopeToHclTerraform(struct?: DataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScopeList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScopeOutputReference {
    return new DataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployDeploymentFreezesDeploymentFreezes {
}

export function dataOctopusdeployDeploymentFreezesDeploymentFreezesToTerraform(struct?: DataOctopusdeployDeploymentFreezesDeploymentFreezes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployDeploymentFreezesDeploymentFreezesToHclTerraform(struct?: DataOctopusdeployDeploymentFreezesDeploymentFreezes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployDeploymentFreezesDeploymentFreezesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployDeploymentFreezesDeploymentFreezes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployDeploymentFreezesDeploymentFreezes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_environment_scope - computed: true, optional: false, required: false
  private _projectEnvironmentScope = new cdktf.StringListMap(this, "project_environment_scope");
  public get projectEnvironmentScope() {
    return this._projectEnvironmentScope;
  }

  // recurring_schedule - computed: true, optional: false, required: false
  private _recurringSchedule = new DataOctopusdeployDeploymentFreezesDeploymentFreezesRecurringScheduleOutputReference(this, "recurring_schedule");
  public get recurringSchedule() {
    return this._recurringSchedule;
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }

  // tenant_project_environment_scope - computed: true, optional: false, required: false
  private _tenantProjectEnvironmentScope = new DataOctopusdeployDeploymentFreezesDeploymentFreezesTenantProjectEnvironmentScopeList(this, "tenant_project_environment_scope", false);
  public get tenantProjectEnvironmentScope() {
    return this._tenantProjectEnvironmentScope;
  }
}

export class DataOctopusdeployDeploymentFreezesDeploymentFreezesList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployDeploymentFreezesDeploymentFreezesOutputReference {
    return new DataOctopusdeployDeploymentFreezesDeploymentFreezesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes octopusdeploy_deployment_freezes}
*/
export class DataOctopusdeployDeploymentFreezes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_deployment_freezes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployDeploymentFreezes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployDeploymentFreezes to import
  * @param importFromId The id of the existing DataOctopusdeployDeploymentFreezes that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployDeploymentFreezes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_deployment_freezes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploylabs/octopusdeploy/0.43.2/docs/data-sources/deployment_freezes octopusdeploy_deployment_freezes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployDeploymentFreezesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployDeploymentFreezesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_deployment_freezes',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '0.43.2',
        providerVersionConstraint: '0.43.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentIds = config.environmentIds;
    this._ids = config.ids;
    this._includeComplete = config.includeComplete;
    this._partialName = config.partialName;
    this._projectIds = config.projectIds;
    this._skip = config.skip;
    this._status = config.status;
    this._take = config.take;
    this._tenantIds = config.tenantIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_freezes - computed: true, optional: false, required: false
  private _deploymentFreezes = new DataOctopusdeployDeploymentFreezesDeploymentFreezesList(this, "deployment_freezes", false);
  public get deploymentFreezes() {
    return this._deploymentFreezes;
  }

  // environment_ids - computed: false, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return this.getListAttribute('environment_ids');
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // include_complete - computed: true, optional: true, required: false
  private _includeComplete?: boolean | cdktf.IResolvable; 
  public get includeComplete() {
    return this.getBooleanAttribute('include_complete');
  }
  public set includeComplete(value: boolean | cdktf.IResolvable) {
    this._includeComplete = value;
  }
  public resetIncludeComplete() {
    this._includeComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCompleteInput() {
    return this._includeComplete;
  }

  // partial_name - computed: false, optional: true, required: false
  private _partialName?: string; 
  public get partialName() {
    return this.getStringAttribute('partial_name');
  }
  public set partialName(value: string) {
    this._partialName = value;
  }
  public resetPartialName() {
    this._partialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialNameInput() {
    return this._partialName;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return this.getListAttribute('project_ids');
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // tenant_ids - computed: false, optional: true, required: false
  private _tenantIds?: string[]; 
  public get tenantIds() {
    return this.getListAttribute('tenant_ids');
  }
  public set tenantIds(value: string[]) {
    this._tenantIds = value;
  }
  public resetTenantIds() {
    this._tenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdsInput() {
    return this._tenantIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      include_complete: cdktf.booleanToTerraform(this._includeComplete),
      partial_name: cdktf.stringToTerraform(this._partialName),
      project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectIds),
      skip: cdktf.numberToTerraform(this._skip),
      status: cdktf.stringToTerraform(this._status),
      take: cdktf.numberToTerraform(this._take),
      tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      include_complete: {
        value: cdktf.booleanToHclTerraform(this._includeComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partial_name: {
        value: cdktf.stringToHclTerraform(this._partialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
