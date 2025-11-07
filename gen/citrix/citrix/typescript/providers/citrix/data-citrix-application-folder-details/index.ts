// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/application_folder_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixApplicationFolderDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the folder to get the applications from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/application_folder_details#path DataCitrixApplicationFolderDetails#path}
  */
  readonly path: string;
}
export interface DataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriority {
}

export function dataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriorityToTerraform(struct?: DataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriorityToHclTerraform(struct?: DataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriority | undefined) {
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriorityList extends cdktf.ComplexList {

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
  public get(index: number): DataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriorityOutputReference {
    return new DataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCitrixApplicationFolderDetailsApplicationsListInstalledAppProperties {
}

export function dataCitrixApplicationFolderDetailsApplicationsListInstalledAppPropertiesToTerraform(struct?: DataCitrixApplicationFolderDetailsApplicationsListInstalledAppProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixApplicationFolderDetailsApplicationsListInstalledAppPropertiesToHclTerraform(struct?: DataCitrixApplicationFolderDetailsApplicationsListInstalledAppProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixApplicationFolderDetailsApplicationsListInstalledAppPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCitrixApplicationFolderDetailsApplicationsListInstalledAppProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixApplicationFolderDetailsApplicationsListInstalledAppProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_line_arguments - computed: true, optional: false, required: false
  public get commandLineArguments() {
    return this.getStringAttribute('command_line_arguments');
  }

  // command_line_executable - computed: true, optional: false, required: false
  public get commandLineExecutable() {
    return this.getStringAttribute('command_line_executable');
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
}
export interface DataCitrixApplicationFolderDetailsApplicationsListMetadata {
}

export function dataCitrixApplicationFolderDetailsApplicationsListMetadataToTerraform(struct?: DataCitrixApplicationFolderDetailsApplicationsListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixApplicationFolderDetailsApplicationsListMetadataToHclTerraform(struct?: DataCitrixApplicationFolderDetailsApplicationsListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixApplicationFolderDetailsApplicationsListMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCitrixApplicationFolderDetailsApplicationsListMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixApplicationFolderDetailsApplicationsListMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCitrixApplicationFolderDetailsApplicationsListMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataCitrixApplicationFolderDetailsApplicationsListMetadataOutputReference {
    return new DataCitrixApplicationFolderDetailsApplicationsListMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCitrixApplicationFolderDetailsApplicationsListStruct {
}

export function dataCitrixApplicationFolderDetailsApplicationsListStructToTerraform(struct?: DataCitrixApplicationFolderDetailsApplicationsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCitrixApplicationFolderDetailsApplicationsListStructToHclTerraform(struct?: DataCitrixApplicationFolderDetailsApplicationsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCitrixApplicationFolderDetailsApplicationsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCitrixApplicationFolderDetailsApplicationsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCitrixApplicationFolderDetailsApplicationsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_category_path - computed: true, optional: false, required: false
  public get applicationCategoryPath() {
    return this.getStringAttribute('application_category_path');
  }

  // application_folder_path - computed: true, optional: false, required: false
  public get applicationFolderPath() {
    return this.getStringAttribute('application_folder_path');
  }

  // application_groups - computed: true, optional: false, required: false
  public get applicationGroups() {
    return this.getListAttribute('application_groups');
  }

  // browser_name - computed: true, optional: false, required: false
  public get browserName() {
    return this.getStringAttribute('browser_name');
  }

  // delivery_groups - computed: true, optional: false, required: false
  public get deliveryGroups() {
    return this.getListAttribute('delivery_groups');
  }

  // delivery_groups_priority - computed: true, optional: false, required: false
  private _deliveryGroupsPriority = new DataCitrixApplicationFolderDetailsApplicationsListDeliveryGroupsPriorityList(this, "delivery_groups_priority", true);
  public get deliveryGroupsPriority() {
    return this._deliveryGroupsPriority;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installed_app_properties - computed: true, optional: false, required: false
  private _installedAppProperties = new DataCitrixApplicationFolderDetailsApplicationsListInstalledAppPropertiesOutputReference(this, "installed_app_properties");
  public get installedAppProperties() {
    return this._installedAppProperties;
  }

  // limit_to_one_instance_per_user - computed: true, optional: false, required: false
  public get limitToOneInstancePerUser() {
    return this.getBooleanAttribute('limit_to_one_instance_per_user');
  }

  // limit_visibility_to_users - computed: true, optional: false, required: false
  public get limitVisibilityToUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('limit_visibility_to_users'));
  }

  // max_total_instances - computed: true, optional: false, required: false
  public get maxTotalInstances() {
    return this.getNumberAttribute('max_total_instances');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataCitrixApplicationFolderDetailsApplicationsListMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // published_name - computed: true, optional: false, required: false
  public get publishedName() {
    return this.getStringAttribute('published_name');
  }

  // shortcut_added_to_desktop - computed: true, optional: false, required: false
  public get shortcutAddedToDesktop() {
    return this.getBooleanAttribute('shortcut_added_to_desktop');
  }

  // shortcut_added_to_start_menu - computed: true, optional: false, required: false
  public get shortcutAddedToStartMenu() {
    return this.getBooleanAttribute('shortcut_added_to_start_menu');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // visible - computed: true, optional: false, required: false
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
}

export class DataCitrixApplicationFolderDetailsApplicationsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataCitrixApplicationFolderDetailsApplicationsListStructOutputReference {
    return new DataCitrixApplicationFolderDetailsApplicationsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/application_folder_details citrix_application_folder_details}
*/
export class DataCitrixApplicationFolderDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_application_folder_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixApplicationFolderDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixApplicationFolderDetails to import
  * @param importFromId The id of the existing DataCitrixApplicationFolderDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/application_folder_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixApplicationFolderDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_application_folder_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/data-sources/application_folder_details citrix_application_folder_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixApplicationFolderDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCitrixApplicationFolderDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_application_folder_details',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications_list - computed: true, optional: false, required: false
  private _applicationsList = new DataCitrixApplicationFolderDetailsApplicationsListStructList(this, "applications_list", false);
  public get applicationsList() {
    return this._applicationsList;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // total_applications - computed: true, optional: false, required: false
  public get totalApplications() {
    return this.getNumberAttribute('total_applications');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
