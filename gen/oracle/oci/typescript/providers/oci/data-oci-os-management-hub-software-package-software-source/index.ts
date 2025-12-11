// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}
  */
  readonly archType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}
  */
  readonly availability?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}
  */
  readonly availabilityAnywhere?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}
  */
  readonly availabilityAtOci?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}
  */
  readonly osFamily?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}
  */
  readonly softwarePackageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}
  */
  readonly softwareSourceType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}
  */
  readonly state?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#filter DataOciOsManagementHubSoftwarePackageSoftwareSource#filter}
  */
  readonly filter?: DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter[] | cdktf.IResolvable;
}
export interface DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources {
}

export function dataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesToTerraform(struct?: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesToHclTerraform(struct?: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources | undefined) {
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
}

export class DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference {
    return new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems {
}

export function dataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsToTerraform(struct?: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsToHclTerraform(struct?: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arch_type - computed: true, optional: false, required: false
  public get archType() {
    return this.getStringAttribute('arch_type');
  }

  // availability - computed: true, optional: false, required: false
  public get availability() {
    return this.getStringAttribute('availability');
  }

  // availability_at_oci - computed: true, optional: false, required: false
  public get availabilityAtOci() {
    return this.getStringAttribute('availability_at_oci');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_mandatory_for_autonomous_linux - computed: true, optional: false, required: false
  public get isMandatoryForAutonomousLinux() {
    return this.getBooleanAttribute('is_mandatory_for_autonomous_linux');
  }

  // is_mirror_sync_allowed - computed: true, optional: false, required: false
  public get isMirrorSyncAllowed() {
    return this.getBooleanAttribute('is_mirror_sync_allowed');
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // package_count - computed: true, optional: false, required: false
  public get packageCount() {
    return this.getStringAttribute('package_count');
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // software_source_sub_type - computed: true, optional: false, required: false
  public get softwareSourceSubType() {
    return this.getStringAttribute('software_source_sub_type');
  }

  // software_source_type - computed: true, optional: false, required: false
  public get softwareSourceType() {
    return this.getStringAttribute('software_source_type');
  }

  // software_source_version - computed: true, optional: false, required: false
  public get softwareSourceVersion() {
    return this.getStringAttribute('software_source_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }

  // vendor_software_sources - computed: true, optional: false, required: false
  private _vendorSoftwareSources = new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList(this, "vendor_software_sources", false);
  public get vendorSoftwareSources() {
    return this._vendorSoftwareSources;
  }
}

export class DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference {
    return new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection {
}

export function dataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionToTerraform(struct?: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionToHclTerraform(struct?: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference {
    return new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#name DataOciOsManagementHubSoftwarePackageSoftwareSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#regex DataOciOsManagementHubSoftwarePackageSoftwareSource#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#values DataOciOsManagementHubSoftwarePackageSoftwareSource#values}
  */
  readonly values: string[];
}

export function dataOciOsManagementHubSoftwarePackageSoftwareSourceFilterToTerraform(struct?: DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter | cdktf.IResolvable): any {
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


export function dataOciOsManagementHubSoftwarePackageSoftwareSourceFilterToHclTerraform(struct?: DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter | cdktf.IResolvable): any {
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

export class DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference {
    return new DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source oci_os_management_hub_software_package_software_source}
*/
export class DataOciOsManagementHubSoftwarePackageSoftwareSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_software_package_software_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsManagementHubSoftwarePackageSoftwareSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsManagementHubSoftwarePackageSoftwareSource to import
  * @param importFromId The id of the existing DataOciOsManagementHubSoftwarePackageSoftwareSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsManagementHubSoftwarePackageSoftwareSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_software_package_software_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_package_software_source oci_os_management_hub_software_package_software_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_software_package_software_source',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archType = config.archType;
    this._availability = config.availability;
    this._availabilityAnywhere = config.availabilityAnywhere;
    this._availabilityAtOci = config.availabilityAtOci;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._displayNameContains = config.displayNameContains;
    this._id = config.id;
    this._osFamily = config.osFamily;
    this._softwarePackageName = config.softwarePackageName;
    this._softwareSourceType = config.softwareSourceType;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch_type - computed: false, optional: true, required: false
  private _archType?: string[]; 
  public get archType() {
    return this.getListAttribute('arch_type');
  }
  public set archType(value: string[]) {
    this._archType = value;
  }
  public resetArchType() {
    this._archType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archTypeInput() {
    return this._archType;
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string[]; 
  public get availability() {
    return this.getListAttribute('availability');
  }
  public set availability(value: string[]) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // availability_anywhere - computed: false, optional: true, required: false
  private _availabilityAnywhere?: string[]; 
  public get availabilityAnywhere() {
    return this.getListAttribute('availability_anywhere');
  }
  public set availabilityAnywhere(value: string[]) {
    this._availabilityAnywhere = value;
  }
  public resetAvailabilityAnywhere() {
    this._availabilityAnywhere = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityAnywhereInput() {
    return this._availabilityAnywhere;
  }

  // availability_at_oci - computed: false, optional: true, required: false
  private _availabilityAtOci?: string[]; 
  public get availabilityAtOci() {
    return this.getListAttribute('availability_at_oci');
  }
  public set availabilityAtOci(value: string[]) {
    this._availabilityAtOci = value;
  }
  public resetAvailabilityAtOci() {
    this._availabilityAtOci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityAtOciInput() {
    return this._availabilityAtOci;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
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

  // os_family - computed: false, optional: true, required: false
  private _osFamily?: string[]; 
  public get osFamily() {
    return this.getListAttribute('os_family');
  }
  public set osFamily(value: string[]) {
    this._osFamily = value;
  }
  public resetOsFamily() {
    this._osFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // software_package_name - computed: false, optional: false, required: true
  private _softwarePackageName?: string; 
  public get softwarePackageName() {
    return this.getStringAttribute('software_package_name');
  }
  public set softwarePackageName(value: string) {
    this._softwarePackageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwarePackageNameInput() {
    return this._softwarePackageName;
  }

  // software_source_collection - computed: true, optional: false, required: false
  private _softwareSourceCollection = new DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList(this, "software_source_collection", false);
  public get softwareSourceCollection() {
    return this._softwareSourceCollection;
  }

  // software_source_type - computed: false, optional: true, required: false
  private _softwareSourceType?: string[]; 
  public get softwareSourceType() {
    return this.getListAttribute('software_source_type');
  }
  public set softwareSourceType(value: string[]) {
    this._softwareSourceType = value;
  }
  public resetSoftwareSourceType() {
    this._softwareSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceTypeInput() {
    return this._softwareSourceType;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return this.getListAttribute('state');
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter[] | cdktf.IResolvable) {
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
      arch_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._archType),
      availability: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availability),
      availability_anywhere: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityAnywhere),
      availability_at_oci: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityAtOci),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      display_name_contains: cdktf.stringToTerraform(this._displayNameContains),
      id: cdktf.stringToTerraform(this._id),
      os_family: cdktf.listMapper(cdktf.stringToTerraform, false)(this._osFamily),
      software_package_name: cdktf.stringToTerraform(this._softwarePackageName),
      software_source_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._softwareSourceType),
      state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._state),
      filter: cdktf.listMapper(dataOciOsManagementHubSoftwarePackageSoftwareSourceFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._archType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      availability: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availability),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      availability_anywhere: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityAnywhere),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      availability_at_oci: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityAtOci),
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
      os_family: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._osFamily),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      software_package_name: {
        value: cdktf.stringToHclTerraform(this._softwarePackageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_source_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._softwareSourceType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._state),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOsManagementHubSoftwarePackageSoftwareSourceFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
