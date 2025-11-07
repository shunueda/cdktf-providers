// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsManagementHubSoftwareSourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#arch_type DataOciOsManagementHubSoftwareSources#arch_type}
  */
  readonly archType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#availability DataOciOsManagementHubSoftwareSources#availability}
  */
  readonly availability?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#availability_anywhere DataOciOsManagementHubSoftwareSources#availability_anywhere}
  */
  readonly availabilityAnywhere?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#availability_at_oci DataOciOsManagementHubSoftwareSources#availability_at_oci}
  */
  readonly availabilityAtOci?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#compartment_id DataOciOsManagementHubSoftwareSources#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#display_name DataOciOsManagementHubSoftwareSources#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#display_name_contains DataOciOsManagementHubSoftwareSources#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#display_name_not_equal_to DataOciOsManagementHubSoftwareSources#display_name_not_equal_to}
  */
  readonly displayNameNotEqualTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#id DataOciOsManagementHubSoftwareSources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#is_mandatory_for_autonomous_linux DataOciOsManagementHubSoftwareSources#is_mandatory_for_autonomous_linux}
  */
  readonly isMandatoryForAutonomousLinux?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#is_mirror_sync_allowed DataOciOsManagementHubSoftwareSources#is_mirror_sync_allowed}
  */
  readonly isMirrorSyncAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#os_family DataOciOsManagementHubSoftwareSources#os_family}
  */
  readonly osFamily?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#software_source_id DataOciOsManagementHubSoftwareSources#software_source_id}
  */
  readonly softwareSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#software_source_type DataOciOsManagementHubSoftwareSources#software_source_type}
  */
  readonly softwareSourceType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#state DataOciOsManagementHubSoftwareSources#state}
  */
  readonly state?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#vendor_name DataOciOsManagementHubSoftwareSources#vendor_name}
  */
  readonly vendorName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#filter DataOciOsManagementHubSoftwareSources#filter}
  */
  readonly filter?: DataOciOsManagementHubSoftwareSourcesFilter[] | cdktf.IResolvable;
}
export interface DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources {
}

export function dataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesToTerraform(struct?: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesToHclTerraform(struct?: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSources | undefined) {
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

export class DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference {
    return new DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems {
}

export function dataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsToTerraform(struct?: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsToHclTerraform(struct?: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItems | undefined) {
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
  private _vendorSoftwareSources = new DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsVendorSoftwareSourcesList(this, "vendor_software_sources", false);
  public get vendorSoftwareSources() {
    return this._vendorSoftwareSources;
  }
}

export class DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference {
    return new DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection {
}

export function dataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionToTerraform(struct?: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionToHclTerraform(struct?: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference {
    return new DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubSoftwareSourcesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#name DataOciOsManagementHubSoftwareSources#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#regex DataOciOsManagementHubSoftwareSources#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#values DataOciOsManagementHubSoftwareSources#values}
  */
  readonly values: string[];
}

export function dataOciOsManagementHubSoftwareSourcesFilterToTerraform(struct?: DataOciOsManagementHubSoftwareSourcesFilter | cdktf.IResolvable): any {
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


export function dataOciOsManagementHubSoftwareSourcesFilterToHclTerraform(struct?: DataOciOsManagementHubSoftwareSourcesFilter | cdktf.IResolvable): any {
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

export class DataOciOsManagementHubSoftwareSourcesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubSoftwareSourcesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOsManagementHubSoftwareSourcesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOsManagementHubSoftwareSourcesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOsManagementHubSoftwareSourcesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOsManagementHubSoftwareSourcesFilterOutputReference {
    return new DataOciOsManagementHubSoftwareSourcesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources oci_os_management_hub_software_sources}
*/
export class DataOciOsManagementHubSoftwareSources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_software_sources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsManagementHubSoftwareSources to import
  * @param importFromId The id of the existing DataOciOsManagementHubSoftwareSources that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsManagementHubSoftwareSources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_software_sources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/os_management_hub_software_sources oci_os_management_hub_software_sources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsManagementHubSoftwareSourcesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciOsManagementHubSoftwareSourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_software_sources',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._displayNameNotEqualTo = config.displayNameNotEqualTo;
    this._id = config.id;
    this._isMandatoryForAutonomousLinux = config.isMandatoryForAutonomousLinux;
    this._isMirrorSyncAllowed = config.isMirrorSyncAllowed;
    this._osFamily = config.osFamily;
    this._softwareSourceId = config.softwareSourceId;
    this._softwareSourceType = config.softwareSourceType;
    this._state = config.state;
    this._vendorName = config.vendorName;
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

  // display_name_not_equal_to - computed: false, optional: true, required: false
  private _displayNameNotEqualTo?: string[]; 
  public get displayNameNotEqualTo() {
    return this.getListAttribute('display_name_not_equal_to');
  }
  public set displayNameNotEqualTo(value: string[]) {
    this._displayNameNotEqualTo = value;
  }
  public resetDisplayNameNotEqualTo() {
    this._displayNameNotEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameNotEqualToInput() {
    return this._displayNameNotEqualTo;
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

  // is_mandatory_for_autonomous_linux - computed: false, optional: true, required: false
  private _isMandatoryForAutonomousLinux?: boolean | cdktf.IResolvable; 
  public get isMandatoryForAutonomousLinux() {
    return this.getBooleanAttribute('is_mandatory_for_autonomous_linux');
  }
  public set isMandatoryForAutonomousLinux(value: boolean | cdktf.IResolvable) {
    this._isMandatoryForAutonomousLinux = value;
  }
  public resetIsMandatoryForAutonomousLinux() {
    this._isMandatoryForAutonomousLinux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMandatoryForAutonomousLinuxInput() {
    return this._isMandatoryForAutonomousLinux;
  }

  // is_mirror_sync_allowed - computed: false, optional: true, required: false
  private _isMirrorSyncAllowed?: boolean | cdktf.IResolvable; 
  public get isMirrorSyncAllowed() {
    return this.getBooleanAttribute('is_mirror_sync_allowed');
  }
  public set isMirrorSyncAllowed(value: boolean | cdktf.IResolvable) {
    this._isMirrorSyncAllowed = value;
  }
  public resetIsMirrorSyncAllowed() {
    this._isMirrorSyncAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMirrorSyncAllowedInput() {
    return this._isMirrorSyncAllowed;
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

  // software_source_collection - computed: true, optional: false, required: false
  private _softwareSourceCollection = new DataOciOsManagementHubSoftwareSourcesSoftwareSourceCollectionList(this, "software_source_collection", false);
  public get softwareSourceCollection() {
    return this._softwareSourceCollection;
  }

  // software_source_id - computed: false, optional: true, required: false
  private _softwareSourceId?: string; 
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }
  public set softwareSourceId(value: string) {
    this._softwareSourceId = value;
  }
  public resetSoftwareSourceId() {
    this._softwareSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceIdInput() {
    return this._softwareSourceId;
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

  // vendor_name - computed: false, optional: true, required: false
  private _vendorName?: string; 
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
  public set vendorName(value: string) {
    this._vendorName = value;
  }
  public resetVendorName() {
    this._vendorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorNameInput() {
    return this._vendorName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOsManagementHubSoftwareSourcesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOsManagementHubSoftwareSourcesFilter[] | cdktf.IResolvable) {
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
      display_name_not_equal_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._displayNameNotEqualTo),
      id: cdktf.stringToTerraform(this._id),
      is_mandatory_for_autonomous_linux: cdktf.booleanToTerraform(this._isMandatoryForAutonomousLinux),
      is_mirror_sync_allowed: cdktf.booleanToTerraform(this._isMirrorSyncAllowed),
      os_family: cdktf.listMapper(cdktf.stringToTerraform, false)(this._osFamily),
      software_source_id: cdktf.stringToTerraform(this._softwareSourceId),
      software_source_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._softwareSourceType),
      state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._state),
      vendor_name: cdktf.stringToTerraform(this._vendorName),
      filter: cdktf.listMapper(dataOciOsManagementHubSoftwareSourcesFilterToTerraform, true)(this._filter.internalValue),
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
      display_name_not_equal_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._displayNameNotEqualTo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_mandatory_for_autonomous_linux: {
        value: cdktf.booleanToHclTerraform(this._isMandatoryForAutonomousLinux),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_mirror_sync_allowed: {
        value: cdktf.booleanToHclTerraform(this._isMirrorSyncAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_family: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._osFamily),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      software_source_id: {
        value: cdktf.stringToHclTerraform(this._softwareSourceId),
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
      vendor_name: {
        value: cdktf.stringToHclTerraform(this._vendorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOsManagementHubSoftwareSourcesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOsManagementHubSoftwareSourcesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
