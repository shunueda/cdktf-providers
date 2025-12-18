// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}
  */
  readonly displayName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}
  */
  readonly managedInstanceGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}
  */
  readonly timeInstallDateEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}
  */
  readonly timeInstallDateStart?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#filter DataOciOsManagementHubManagedInstanceGroupInstalledPackages#filter}
  */
  readonly filter?: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter[] | cdktf.IResolvable;
}
export interface DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems {
}

export function dataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsToTerraform(struct?: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsToHclTerraform(struct?: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference {
    return new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection {
}

export function dataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionToTerraform(struct?: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionToHclTerraform(struct?: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference {
    return new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#regex DataOciOsManagementHubManagedInstanceGroupInstalledPackages#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#values DataOciOsManagementHubManagedInstanceGroupInstalledPackages#values}
  */
  readonly values: string[];
}

export function dataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterToTerraform(struct?: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter | cdktf.IResolvable): any {
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


export function dataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterToHclTerraform(struct?: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter | cdktf.IResolvable): any {
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

export class DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference {
    return new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages oci_os_management_hub_managed_instance_group_installed_packages}
*/
export class DataOciOsManagementHubManagedInstanceGroupInstalledPackages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_managed_instance_group_installed_packages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupInstalledPackages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupInstalledPackages to import
  * @param importFromId The id of the existing DataOciOsManagementHubManagedInstanceGroupInstalledPackages that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupInstalledPackages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_managed_instance_group_installed_packages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages oci_os_management_hub_managed_instance_group_installed_packages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_managed_instance_group_installed_packages',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._displayNameContains = config.displayNameContains;
    this._id = config.id;
    this._managedInstanceGroupId = config.managedInstanceGroupId;
    this._timeInstallDateEnd = config.timeInstallDateEnd;
    this._timeInstallDateStart = config.timeInstallDateStart;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _displayName?: string[]; 
  public get displayName() {
    return this.getListAttribute('display_name');
  }
  public set displayName(value: string[]) {
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

  // managed_instance_group_id - computed: false, optional: false, required: true
  private _managedInstanceGroupId?: string; 
  public get managedInstanceGroupId() {
    return this.getStringAttribute('managed_instance_group_id');
  }
  public set managedInstanceGroupId(value: string) {
    this._managedInstanceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceGroupIdInput() {
    return this._managedInstanceGroupId;
  }

  // managed_instance_group_installed_package_collection - computed: true, optional: false, required: false
  private _managedInstanceGroupInstalledPackageCollection = new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList(this, "managed_instance_group_installed_package_collection", false);
  public get managedInstanceGroupInstalledPackageCollection() {
    return this._managedInstanceGroupInstalledPackageCollection;
  }

  // time_install_date_end - computed: false, optional: true, required: false
  private _timeInstallDateEnd?: string; 
  public get timeInstallDateEnd() {
    return this.getStringAttribute('time_install_date_end');
  }
  public set timeInstallDateEnd(value: string) {
    this._timeInstallDateEnd = value;
  }
  public resetTimeInstallDateEnd() {
    this._timeInstallDateEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInstallDateEndInput() {
    return this._timeInstallDateEnd;
  }

  // time_install_date_start - computed: false, optional: true, required: false
  private _timeInstallDateStart?: string; 
  public get timeInstallDateStart() {
    return this.getStringAttribute('time_install_date_start');
  }
  public set timeInstallDateStart(value: string) {
    this._timeInstallDateStart = value;
  }
  public resetTimeInstallDateStart() {
    this._timeInstallDateStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInstallDateStartInput() {
    return this._timeInstallDateStart;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._displayName),
      display_name_contains: cdktf.stringToTerraform(this._displayNameContains),
      id: cdktf.stringToTerraform(this._id),
      managed_instance_group_id: cdktf.stringToTerraform(this._managedInstanceGroupId),
      time_install_date_end: cdktf.stringToTerraform(this._timeInstallDateEnd),
      time_install_date_start: cdktf.stringToTerraform(this._timeInstallDateStart),
      filter: cdktf.listMapper(dataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._displayName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      managed_instance_group_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_install_date_end: {
        value: cdktf.stringToHclTerraform(this._timeInstallDateEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_install_date_start: {
        value: cdktf.stringToHclTerraform(this._timeInstallDateStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
