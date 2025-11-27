// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/vmware_cloud_director_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhVmwareCloudDirectorOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/vmware_cloud_director_organization#organization_id DataOvhVmwareCloudDirectorOrganization#organization_id}
  */
  readonly organizationId: string;
}
export interface DataOvhVmwareCloudDirectorOrganizationCurrentState {
}

export function dataOvhVmwareCloudDirectorOrganizationCurrentStateToTerraform(struct?: DataOvhVmwareCloudDirectorOrganizationCurrentState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhVmwareCloudDirectorOrganizationCurrentStateToHclTerraform(struct?: DataOvhVmwareCloudDirectorOrganizationCurrentState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhVmwareCloudDirectorOrganizationCurrentStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhVmwareCloudDirectorOrganizationCurrentState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhVmwareCloudDirectorOrganizationCurrentState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // billing_type - computed: true, optional: false, required: false
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // spla - computed: true, optional: false, required: false
  public get spla() {
    return this.getBooleanAttribute('spla');
  }

  // web_interface_url - computed: true, optional: false, required: false
  public get webInterfaceUrl() {
    return this.getStringAttribute('web_interface_url');
  }
}
export interface DataOvhVmwareCloudDirectorOrganizationCurrentTasks {
}

export function dataOvhVmwareCloudDirectorOrganizationCurrentTasksToTerraform(struct?: DataOvhVmwareCloudDirectorOrganizationCurrentTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhVmwareCloudDirectorOrganizationCurrentTasksToHclTerraform(struct?: DataOvhVmwareCloudDirectorOrganizationCurrentTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhVmwareCloudDirectorOrganizationCurrentTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhVmwareCloudDirectorOrganizationCurrentTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhVmwareCloudDirectorOrganizationCurrentTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOvhVmwareCloudDirectorOrganizationCurrentTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhVmwareCloudDirectorOrganizationCurrentTasksOutputReference {
    return new DataOvhVmwareCloudDirectorOrganizationCurrentTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhVmwareCloudDirectorOrganizationIam {
}

export function dataOvhVmwareCloudDirectorOrganizationIamToTerraform(struct?: DataOvhVmwareCloudDirectorOrganizationIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhVmwareCloudDirectorOrganizationIamToHclTerraform(struct?: DataOvhVmwareCloudDirectorOrganizationIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhVmwareCloudDirectorOrganizationIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhVmwareCloudDirectorOrganizationIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhVmwareCloudDirectorOrganizationIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }
}
export interface DataOvhVmwareCloudDirectorOrganizationTargetSpec {
}

export function dataOvhVmwareCloudDirectorOrganizationTargetSpecToTerraform(struct?: DataOvhVmwareCloudDirectorOrganizationTargetSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhVmwareCloudDirectorOrganizationTargetSpecToHclTerraform(struct?: DataOvhVmwareCloudDirectorOrganizationTargetSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhVmwareCloudDirectorOrganizationTargetSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOvhVmwareCloudDirectorOrganizationTargetSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhVmwareCloudDirectorOrganizationTargetSpec | undefined) {
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

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/vmware_cloud_director_organization ovh_vmware_cloud_director_organization}
*/
export class DataOvhVmwareCloudDirectorOrganization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_vmware_cloud_director_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhVmwareCloudDirectorOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhVmwareCloudDirectorOrganization to import
  * @param importFromId The id of the existing DataOvhVmwareCloudDirectorOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/vmware_cloud_director_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhVmwareCloudDirectorOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_vmware_cloud_director_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/vmware_cloud_director_organization ovh_vmware_cloud_director_organization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhVmwareCloudDirectorOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhVmwareCloudDirectorOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_vmware_cloud_director_organization',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_state - computed: true, optional: false, required: false
  private _currentState = new DataOvhVmwareCloudDirectorOrganizationCurrentStateOutputReference(this, "current_state");
  public get currentState() {
    return this._currentState;
  }

  // current_tasks - computed: true, optional: false, required: false
  private _currentTasks = new DataOvhVmwareCloudDirectorOrganizationCurrentTasksList(this, "current_tasks", false);
  public get currentTasks() {
    return this._currentTasks;
  }

  // iam - computed: true, optional: false, required: false
  private _iam = new DataOvhVmwareCloudDirectorOrganizationIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_status - computed: true, optional: false, required: false
  public get resourceStatus() {
    return this.getStringAttribute('resource_status');
  }

  // target_spec - computed: true, optional: false, required: false
  private _targetSpec = new DataOvhVmwareCloudDirectorOrganizationTargetSpecOutputReference(this, "target_spec");
  public get targetSpec() {
    return this._targetSpec;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
