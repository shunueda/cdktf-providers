// https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/iam_permission_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCortexcloudIamPermissionConfigConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCortexcloudIamPermissionConfigDatasetGroups {
}

export function dataCortexcloudIamPermissionConfigDatasetGroupsToTerraform(struct?: DataCortexcloudIamPermissionConfigDatasetGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudIamPermissionConfigDatasetGroupsToHclTerraform(struct?: DataCortexcloudIamPermissionConfigDatasetGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudIamPermissionConfigDatasetGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCortexcloudIamPermissionConfigDatasetGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudIamPermissionConfigDatasetGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_category - computed: true, optional: false, required: false
  public get datasetCategory() {
    return this.getStringAttribute('dataset_category');
  }

  // datasets - computed: true, optional: false, required: false
  public get datasets() {
    return this.getListAttribute('datasets');
  }
}

export class DataCortexcloudIamPermissionConfigDatasetGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataCortexcloudIamPermissionConfigDatasetGroupsOutputReference {
    return new DataCortexcloudIamPermissionConfigDatasetGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissions {
}

export function dataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissionsToTerraform(struct?: DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissionsToHclTerraform(struct?: DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissionsOutputReference {
    return new DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissions {
}

export function dataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsToTerraform(struct?: DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsToHclTerraform(struct?: DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sub_permissions - computed: true, optional: false, required: false
  private _subPermissions = new DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsSubPermissionsList(this, "sub_permissions", false);
  public get subPermissions() {
    return this._subPermissions;
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
}

export class DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsOutputReference {
    return new DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCortexcloudIamPermissionConfigRbacPermissionsSubCategories {
}

export function dataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesToTerraform(struct?: DataCortexcloudIamPermissionConfigRbacPermissionsSubCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesToHclTerraform(struct?: DataCortexcloudIamPermissionConfigRbacPermissionsSubCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCortexcloudIamPermissionConfigRbacPermissionsSubCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudIamPermissionConfigRbacPermissionsSubCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // sub_category_name - computed: true, optional: false, required: false
  public get subCategoryName() {
    return this.getStringAttribute('sub_category_name');
  }
}

export class DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesOutputReference {
    return new DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCortexcloudIamPermissionConfigRbacPermissions {
}

export function dataCortexcloudIamPermissionConfigRbacPermissionsToTerraform(struct?: DataCortexcloudIamPermissionConfigRbacPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudIamPermissionConfigRbacPermissionsToHclTerraform(struct?: DataCortexcloudIamPermissionConfigRbacPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudIamPermissionConfigRbacPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCortexcloudIamPermissionConfigRbacPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudIamPermissionConfigRbacPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_name - computed: true, optional: false, required: false
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }

  // sub_categories - computed: true, optional: false, required: false
  private _subCategories = new DataCortexcloudIamPermissionConfigRbacPermissionsSubCategoriesList(this, "sub_categories", false);
  public get subCategories() {
    return this._subCategories;
  }
}

export class DataCortexcloudIamPermissionConfigRbacPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCortexcloudIamPermissionConfigRbacPermissionsOutputReference {
    return new DataCortexcloudIamPermissionConfigRbacPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/iam_permission_config cortexcloud_iam_permission_config}
*/
export class DataCortexcloudIamPermissionConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cortexcloud_iam_permission_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCortexcloudIamPermissionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCortexcloudIamPermissionConfig to import
  * @param importFromId The id of the existing DataCortexcloudIamPermissionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/iam_permission_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCortexcloudIamPermissionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cortexcloud_iam_permission_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/iam_permission_config cortexcloud_iam_permission_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCortexcloudIamPermissionConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCortexcloudIamPermissionConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cortexcloud_iam_permission_config',
      terraformGeneratorMetadata: {
        providerName: 'cortexcloud',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
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

  // dataset_groups - computed: true, optional: false, required: false
  private _datasetGroups = new DataCortexcloudIamPermissionConfigDatasetGroupsList(this, "dataset_groups", false);
  public get datasetGroups() {
    return this._datasetGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rbac_permissions - computed: true, optional: false, required: false
  private _rbacPermissions = new DataCortexcloudIamPermissionConfigRbacPermissionsList(this, "rbac_permissions", false);
  public get rbacPermissions() {
    return this._rbacPermissions;
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
