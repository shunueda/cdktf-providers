// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#classification_type DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#classification_type}
  */
  readonly classificationType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#display_name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#is_installable DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#is_installable}
  */
  readonly isInstallable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#name}
  */
  readonly name?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#filter DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#filter}
  */
  readonly filter?: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter[] | cdktf.IResolvable;
}
export interface DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems {
}

export function dataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsToTerraform(struct?: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsToHclTerraform(struct?: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // installable - computed: true, optional: false, required: false
  public get installable() {
    return this.getStringAttribute('installable');
  }

  // is_reboot_required_for_installation - computed: true, optional: false, required: false
  public get isRebootRequiredForInstallation() {
    return this.getBooleanAttribute('is_reboot_required_for_installation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // update_id - computed: true, optional: false, required: false
  public get updateId() {
    return this.getStringAttribute('update_id');
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }
}

export class DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference {
    return new DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection {
}

export function dataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionToTerraform(struct?: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionToHclTerraform(struct?: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference {
    return new DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#name DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#regex DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#values DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates#values}
  */
  readonly values: string[];
}

export function dataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterToTerraform(struct?: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterToHclTerraform(struct?: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference {
    return new DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates oci_os_management_hub_managed_instance_available_windows_updates}
*/
export class DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_managed_instance_available_windows_updates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates to import
  * @param importFromId The id of the existing DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceAvailableWindowsUpdates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_managed_instance_available_windows_updates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_managed_instance_available_windows_updates oci_os_management_hub_managed_instance_available_windows_updates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_managed_instance_available_windows_updates',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classificationType = config.classificationType;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._displayNameContains = config.displayNameContains;
    this._id = config.id;
    this._isInstallable = config.isInstallable;
    this._managedInstanceId = config.managedInstanceId;
    this._name = config.name;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_windows_update_collection - computed: true, optional: false, required: false
  private _availableWindowsUpdateCollection = new DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesAvailableWindowsUpdateCollectionList(this, "available_windows_update_collection", false);
  public get availableWindowsUpdateCollection() {
    return this._availableWindowsUpdateCollection;
  }

  // classification_type - computed: false, optional: true, required: false
  private _classificationType?: string[]; 
  public get classificationType() {
    return this.getListAttribute('classification_type');
  }
  public set classificationType(value: string[]) {
    this._classificationType = value;
  }
  public resetClassificationType() {
    this._classificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationTypeInput() {
    return this._classificationType;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // display_name_contains - computed: false, optional: true, required: false
  private _displayNameContains?: string; 
  public get displayNameContains() {
    return this.getStringAttribute('display_name_contains');
  }
  public set displayNameContains(value: string) {
    this._displayNameContains = value;
  }
  public resetDisplayNameContains() {
    this._displayNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameContainsInput() {
    return this._displayNameContains;
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

  // is_installable - computed: false, optional: true, required: false
  private _isInstallable?: string; 
  public get isInstallable() {
    return this.getStringAttribute('is_installable');
  }
  public set isInstallable(value: string) {
    this._isInstallable = value;
  }
  public resetIsInstallable() {
    this._isInstallable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstallableInput() {
    return this._isInstallable;
  }

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      classification_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._classificationType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      display_name_contains: cdktf.stringToTerraform(this._displayNameContains),
      id: cdktf.stringToTerraform(this._id),
      is_installable: cdktf.stringToTerraform(this._isInstallable),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._name),
      filter: cdktf.listMapper(dataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      classification_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._classificationType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name_contains: {
        value: cdktf.stringToHclTerraform(this._displayNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_installable: {
        value: cdktf.stringToHclTerraform(this._isInstallable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._name),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOsManagementHubManagedInstanceAvailableWindowsUpdatesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
