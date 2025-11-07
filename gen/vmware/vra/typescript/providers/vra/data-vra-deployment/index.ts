// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVraDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to indicate whether to expand last request on the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/deployment#expand_last_request DataVraDeployment#expand_last_request}
  */
  readonly expandLastRequest?: boolean | cdktf.IResolvable;
  /**
  * Flag to indicate whether to expand project information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/deployment#expand_project DataVraDeployment#expand_project}
  */
  readonly expandProject?: boolean | cdktf.IResolvable;
  /**
  * Flag to indicate whether to expand resources in the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/deployment#expand_resources DataVraDeployment#expand_resources}
  */
  readonly expandResources?: boolean | cdktf.IResolvable;
  /**
  * The id of the deployment. One of `id` or `name` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/deployment#id DataVraDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the deployment. One of `id` or `name` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/deployment#name DataVraDeployment#name}
  */
  readonly name?: string;
}
export interface DataVraDeploymentExpense {
}

export function dataVraDeploymentExpenseToTerraform(struct?: DataVraDeploymentExpense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVraDeploymentExpenseToHclTerraform(struct?: DataVraDeploymentExpense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVraDeploymentExpenseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraDeploymentExpense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVraDeploymentExpense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_expense - computed: true, optional: false, required: false
  public get additionalExpense() {
    return this.getNumberAttribute('additional_expense');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // compute_expense - computed: true, optional: false, required: false
  public get computeExpense() {
    return this.getNumberAttribute('compute_expense');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // network_expense - computed: true, optional: false, required: false
  public get networkExpense() {
    return this.getNumberAttribute('network_expense');
  }

  // storage_expense - computed: true, optional: false, required: false
  public get storageExpense() {
    return this.getNumberAttribute('storage_expense');
  }

  // total_expense - computed: true, optional: false, required: false
  public get totalExpense() {
    return this.getNumberAttribute('total_expense');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataVraDeploymentExpenseList extends cdktf.ComplexList {

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
  public get(index: number): DataVraDeploymentExpenseOutputReference {
    return new DataVraDeploymentExpenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraDeploymentLastRequest {
}

export function dataVraDeploymentLastRequestToTerraform(struct?: DataVraDeploymentLastRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVraDeploymentLastRequestToHclTerraform(struct?: DataVraDeploymentLastRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVraDeploymentLastRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraDeploymentLastRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVraDeploymentLastRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // approved_at - computed: true, optional: false, required: false
  public get approvedAt() {
    return this.getStringAttribute('approved_at');
  }

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }

  // cancelable - computed: true, optional: false, required: false
  public get cancelable() {
    return this.getBooleanAttribute('cancelable');
  }

  // catalog_item_id - computed: true, optional: false, required: false
  public get catalogItemId() {
    return this.getStringAttribute('catalog_item_id');
  }

  // completed_at - computed: true, optional: false, required: false
  public get completedAt() {
    return this.getStringAttribute('completed_at');
  }

  // completed_tasks - computed: true, optional: false, required: false
  public get completedTasks() {
    return this.getNumberAttribute('completed_tasks');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // dismissed - computed: true, optional: false, required: false
  public get dismissed() {
    return this.getBooleanAttribute('dismissed');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initialized_at - computed: true, optional: false, required: false
  public get initializedAt() {
    return this.getStringAttribute('initialized_at');
  }

  // inputs - computed: true, optional: false, required: false
  private _inputs = new cdktf.StringMap(this, "inputs");
  public get inputs() {
    return this._inputs;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new cdktf.StringMap(this, "outputs");
  public get outputs() {
    return this._outputs;
  }

  // requested_by - computed: true, optional: false, required: false
  public get requestedBy() {
    return this.getStringAttribute('requested_by');
  }

  // resource_ids - computed: true, optional: false, required: false
  public get resourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_ids'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_tasks - computed: true, optional: false, required: false
  public get totalTasks() {
    return this.getNumberAttribute('total_tasks');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataVraDeploymentLastRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataVraDeploymentLastRequestOutputReference {
    return new DataVraDeploymentLastRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraDeploymentProject {
}

export function dataVraDeploymentProjectToTerraform(struct?: DataVraDeploymentProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVraDeploymentProjectToHclTerraform(struct?: DataVraDeploymentProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVraDeploymentProjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraDeploymentProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVraDeploymentProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataVraDeploymentProjectList extends cdktf.ComplexList {

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
  public get(index: number): DataVraDeploymentProjectOutputReference {
    return new DataVraDeploymentProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraDeploymentResourcesExpense {
}

export function dataVraDeploymentResourcesExpenseToTerraform(struct?: DataVraDeploymentResourcesExpense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVraDeploymentResourcesExpenseToHclTerraform(struct?: DataVraDeploymentResourcesExpense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVraDeploymentResourcesExpenseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraDeploymentResourcesExpense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVraDeploymentResourcesExpense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_expense - computed: true, optional: false, required: false
  public get additionalExpense() {
    return this.getNumberAttribute('additional_expense');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // compute_expense - computed: true, optional: false, required: false
  public get computeExpense() {
    return this.getNumberAttribute('compute_expense');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // network_expense - computed: true, optional: false, required: false
  public get networkExpense() {
    return this.getNumberAttribute('network_expense');
  }

  // storage_expense - computed: true, optional: false, required: false
  public get storageExpense() {
    return this.getNumberAttribute('storage_expense');
  }

  // total_expense - computed: true, optional: false, required: false
  public get totalExpense() {
    return this.getNumberAttribute('total_expense');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataVraDeploymentResourcesExpenseList extends cdktf.ComplexList {

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
  public get(index: number): DataVraDeploymentResourcesExpenseOutputReference {
    return new DataVraDeploymentResourcesExpenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraDeploymentResources {
}

export function dataVraDeploymentResourcesToTerraform(struct?: DataVraDeploymentResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVraDeploymentResourcesToHclTerraform(struct?: DataVraDeploymentResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVraDeploymentResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraDeploymentResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVraDeploymentResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // depends_on - computed: true, optional: false, required: false
  public get dependsOn() {
    return cdktf.Fn.tolist(this.getListAttribute('depends_on'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expense - computed: true, optional: false, required: false
  private _expense = new DataVraDeploymentResourcesExpenseList(this, "expense", true);
  public get expense() {
    return this._expense;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties_json - computed: true, optional: false, required: false
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sync_status - computed: true, optional: false, required: false
  public get syncStatus() {
    return this.getStringAttribute('sync_status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataVraDeploymentResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataVraDeploymentResourcesOutputReference {
    return new DataVraDeploymentResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/deployment vra_deployment}
*/
export class DataVraDeployment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVraDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVraDeployment to import
  * @param importFromId The id of the existing DataVraDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVraDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/deployment vra_deployment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVraDeploymentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVraDeploymentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vra_deployment',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expandLastRequest = config.expandLastRequest;
    this._expandProject = config.expandProject;
    this._expandResources = config.expandResources;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }

  // blueprint_version - computed: true, optional: false, required: false
  public get blueprintVersion() {
    return this.getStringAttribute('blueprint_version');
  }

  // catalog_item_id - computed: true, optional: false, required: false
  public get catalogItemId() {
    return this.getStringAttribute('catalog_item_id');
  }

  // catalog_item_version - computed: true, optional: false, required: false
  public get catalogItemVersion() {
    return this.getStringAttribute('catalog_item_version');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expand_last_request - computed: false, optional: true, required: false
  private _expandLastRequest?: boolean | cdktf.IResolvable; 
  public get expandLastRequest() {
    return this.getBooleanAttribute('expand_last_request');
  }
  public set expandLastRequest(value: boolean | cdktf.IResolvable) {
    this._expandLastRequest = value;
  }
  public resetExpandLastRequest() {
    this._expandLastRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandLastRequestInput() {
    return this._expandLastRequest;
  }

  // expand_project - computed: false, optional: true, required: false
  private _expandProject?: boolean | cdktf.IResolvable; 
  public get expandProject() {
    return this.getBooleanAttribute('expand_project');
  }
  public set expandProject(value: boolean | cdktf.IResolvable) {
    this._expandProject = value;
  }
  public resetExpandProject() {
    this._expandProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandProjectInput() {
    return this._expandProject;
  }

  // expand_resources - computed: false, optional: true, required: false
  private _expandResources?: boolean | cdktf.IResolvable; 
  public get expandResources() {
    return this.getBooleanAttribute('expand_resources');
  }
  public set expandResources(value: boolean | cdktf.IResolvable) {
    this._expandResources = value;
  }
  public resetExpandResources() {
    this._expandResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandResourcesInput() {
    return this._expandResources;
  }

  // expense - computed: true, optional: false, required: false
  private _expense = new DataVraDeploymentExpenseList(this, "expense", true);
  public get expense() {
    return this._expense;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: true, optional: false, required: false
  private _inputs = new cdktf.StringMap(this, "inputs");
  public get inputs() {
    return this._inputs;
  }

  // last_request - computed: true, optional: false, required: false
  private _lastRequest = new DataVraDeploymentLastRequestList(this, "last_request", false);
  public get lastRequest() {
    return this._lastRequest;
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // lease_expire_at - computed: true, optional: false, required: false
  public get leaseExpireAt() {
    return this.getStringAttribute('lease_expire_at');
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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // project - computed: true, optional: false, required: false
  private _project = new DataVraDeploymentProjectList(this, "project", true);
  public get project() {
    return this._project;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataVraDeploymentResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
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
      expand_last_request: cdktf.booleanToTerraform(this._expandLastRequest),
      expand_project: cdktf.booleanToTerraform(this._expandProject),
      expand_resources: cdktf.booleanToTerraform(this._expandResources),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expand_last_request: {
        value: cdktf.booleanToHclTerraform(this._expandLastRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expand_project: {
        value: cdktf.booleanToHclTerraform(this._expandProject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expand_resources: {
        value: cdktf.booleanToHclTerraform(this._expandResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
