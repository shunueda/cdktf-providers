// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content of the the cloud template to be used to request the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#blueprint_content Deployment#blueprint_content}
  */
  readonly blueprintContent?: string;
  /**
  * The id of the cloud template to be used to request the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#blueprint_id Deployment#blueprint_id}
  */
  readonly blueprintId?: string;
  /**
  * The version of the cloud template to be used to request the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#blueprint_version Deployment#blueprint_version}
  */
  readonly blueprintVersion?: string;
  /**
  * The id of the catalog item to be used to request the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#catalog_item_id Deployment#catalog_item_id}
  */
  readonly catalogItemId?: string;
  /**
  * The version of the catalog item to be used to request the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#catalog_item_version Deployment#catalog_item_version}
  */
  readonly catalogItemVersion?: string;
  /**
  * A human-friendly description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#description Deployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#expand_last_request Deployment#expand_last_request}
  */
  readonly expandLastRequest?: boolean | cdktf.IResolvable;
  /**
  * Flag to indicate whether to expand project information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#expand_project Deployment#expand_project}
  */
  readonly expandProject?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#expand_resources Deployment#expand_resources}
  */
  readonly expandResources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#id Deployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inputs provided by the user. For inputs including those with default values, refer to inputs_including_defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#inputs Deployment#inputs}
  */
  readonly inputs?: { [key: string]: string };
  /**
  * The name of the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#name Deployment#name}
  */
  readonly name: string;
  /**
  * The user this deployment belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#owner Deployment#owner}
  */
  readonly owner?: string;
  /**
  * The id of the project this deployment belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#project_id Deployment#project_id}
  */
  readonly projectId: string;
  /**
  * Reason for requesting/updating a blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#reason Deployment#reason}
  */
  readonly reason?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#timeouts Deployment#timeouts}
  */
  readonly timeouts?: DeploymentTimeouts;
}
export interface DeploymentExpense {
}

export function deploymentExpenseToTerraform(struct?: DeploymentExpense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentExpenseToHclTerraform(struct?: DeploymentExpense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentExpenseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentExpense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentExpense | undefined) {
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

export class DeploymentExpenseList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentExpenseOutputReference {
    return new DeploymentExpenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentLastRequest {
}

export function deploymentLastRequestToTerraform(struct?: DeploymentLastRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentLastRequestToHclTerraform(struct?: DeploymentLastRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentLastRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentLastRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentLastRequest | undefined) {
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

export class DeploymentLastRequestList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentLastRequestOutputReference {
    return new DeploymentLastRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentProject {
}

export function deploymentProjectToTerraform(struct?: DeploymentProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentProjectToHclTerraform(struct?: DeploymentProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentProjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentProject | undefined) {
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

export class DeploymentProjectList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentProjectOutputReference {
    return new DeploymentProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentResourcesExpense {
}

export function deploymentResourcesExpenseToTerraform(struct?: DeploymentResourcesExpense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentResourcesExpenseToHclTerraform(struct?: DeploymentResourcesExpense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentResourcesExpenseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentResourcesExpense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentResourcesExpense | undefined) {
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

export class DeploymentResourcesExpenseList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentResourcesExpenseOutputReference {
    return new DeploymentResourcesExpenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentResources {
}

export function deploymentResourcesToTerraform(struct?: DeploymentResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentResourcesToHclTerraform(struct?: DeploymentResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentResources | undefined) {
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
  private _expense = new DeploymentResourcesExpenseList(this, "expense", true);
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

export class DeploymentResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DeploymentResourcesOutputReference {
    return new DeploymentResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#create Deployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#delete Deployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#update Deployment#update}
  */
  readonly update?: string;
}

export function deploymentTimeoutsToTerraform(struct?: DeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function deploymentTimeoutsToHclTerraform(struct?: DeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment vra_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deployment to import
  * @param importFromId The id of the existing Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/deployment vra_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
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
    this._blueprintContent = config.blueprintContent;
    this._blueprintId = config.blueprintId;
    this._blueprintVersion = config.blueprintVersion;
    this._catalogItemId = config.catalogItemId;
    this._catalogItemVersion = config.catalogItemVersion;
    this._description = config.description;
    this._expandLastRequest = config.expandLastRequest;
    this._expandProject = config.expandProject;
    this._expandResources = config.expandResources;
    this._id = config.id;
    this._inputs = config.inputs;
    this._name = config.name;
    this._owner = config.owner;
    this._projectId = config.projectId;
    this._reason = config.reason;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_content - computed: false, optional: true, required: false
  private _blueprintContent?: string; 
  public get blueprintContent() {
    return this.getStringAttribute('blueprint_content');
  }
  public set blueprintContent(value: string) {
    this._blueprintContent = value;
  }
  public resetBlueprintContent() {
    this._blueprintContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintContentInput() {
    return this._blueprintContent;
  }

  // blueprint_id - computed: true, optional: true, required: false
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  public resetBlueprintId() {
    this._blueprintId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // blueprint_version - computed: true, optional: true, required: false
  private _blueprintVersion?: string; 
  public get blueprintVersion() {
    return this.getStringAttribute('blueprint_version');
  }
  public set blueprintVersion(value: string) {
    this._blueprintVersion = value;
  }
  public resetBlueprintVersion() {
    this._blueprintVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintVersionInput() {
    return this._blueprintVersion;
  }

  // catalog_item_id - computed: true, optional: true, required: false
  private _catalogItemId?: string; 
  public get catalogItemId() {
    return this.getStringAttribute('catalog_item_id');
  }
  public set catalogItemId(value: string) {
    this._catalogItemId = value;
  }
  public resetCatalogItemId() {
    this._catalogItemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogItemIdInput() {
    return this._catalogItemId;
  }

  // catalog_item_version - computed: true, optional: true, required: false
  private _catalogItemVersion?: string; 
  public get catalogItemVersion() {
    return this.getStringAttribute('catalog_item_version');
  }
  public set catalogItemVersion(value: string) {
    this._catalogItemVersion = value;
  }
  public resetCatalogItemVersion() {
    this._catalogItemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogItemVersionInput() {
    return this._catalogItemVersion;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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
  private _expense = new DeploymentExpenseList(this, "expense", true);
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

  // inputs - computed: false, optional: true, required: false
  private _inputs?: { [key: string]: string }; 
  public get inputs() {
    return this.getStringMapAttribute('inputs');
  }
  public set inputs(value: { [key: string]: string }) {
    this._inputs = value;
  }
  public resetInputs() {
    this._inputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // inputs_including_defaults - computed: true, optional: false, required: false
  private _inputsIncludingDefaults = new cdktf.StringMap(this, "inputs_including_defaults");
  public get inputsIncludingDefaults() {
    return this._inputsIncludingDefaults;
  }

  // last_request - computed: true, optional: false, required: false
  private _lastRequest = new DeploymentLastRequestList(this, "last_request", false);
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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // project - computed: true, optional: false, required: false
  private _project = new DeploymentProjectList(this, "project", true);
  public get project() {
    return this._project;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DeploymentResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DeploymentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_content: cdktf.stringToTerraform(this._blueprintContent),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      blueprint_version: cdktf.stringToTerraform(this._blueprintVersion),
      catalog_item_id: cdktf.stringToTerraform(this._catalogItemId),
      catalog_item_version: cdktf.stringToTerraform(this._catalogItemVersion),
      description: cdktf.stringToTerraform(this._description),
      expand_last_request: cdktf.booleanToTerraform(this._expandLastRequest),
      expand_project: cdktf.booleanToTerraform(this._expandProject),
      expand_resources: cdktf.booleanToTerraform(this._expandResources),
      id: cdktf.stringToTerraform(this._id),
      inputs: cdktf.hashMapper(cdktf.stringToTerraform)(this._inputs),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      project_id: cdktf.stringToTerraform(this._projectId),
      reason: cdktf.stringToTerraform(this._reason),
      timeouts: deploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_content: {
        value: cdktf.stringToHclTerraform(this._blueprintContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blueprint_version: {
        value: cdktf.stringToHclTerraform(this._blueprintVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_item_id: {
        value: cdktf.stringToHclTerraform(this._catalogItemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_item_version: {
        value: cdktf.stringToHclTerraform(this._catalogItemVersion),
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
      inputs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._inputs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: deploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
