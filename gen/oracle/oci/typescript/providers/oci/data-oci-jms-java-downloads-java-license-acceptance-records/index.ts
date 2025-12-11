// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}
  */
  readonly searchByUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}
  */
  readonly status?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#filter DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#filter}
  */
  readonly filter?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter[] | cdktf.IResolvable;
}
export interface DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy {
}

export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByToTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByToHclTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy | undefined) {
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

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference {
    return new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy {
}

export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByToTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByToHclTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy | undefined) {
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

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference {
    return new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems {
}

export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsToTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsToHclTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // last_updated_by - computed: true, optional: false, required: false
  private _lastUpdatedBy = new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList(this, "last_updated_by", false);
  public get lastUpdatedBy() {
    return this._lastUpdatedBy;
  }

  // license_acceptance_status - computed: true, optional: false, required: false
  public get licenseAcceptanceStatus() {
    return this.getStringAttribute('license_acceptance_status');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
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

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // time_last_updated - computed: true, optional: false, required: false
  public get timeLastUpdated() {
    return this.getStringAttribute('time_last_updated');
  }
}

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference {
    return new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection {
}

export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionToTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionToHclTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference {
    return new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#name DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#regex DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#values DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#values}
  */
  readonly values: string[];
}

export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterToTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter | cdktf.IResolvable): any {
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


export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterToHclTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter | cdktf.IResolvable): any {
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

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference {
    return new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records oci_jms_java_downloads_java_license_acceptance_records}
*/
export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_java_downloads_java_license_acceptance_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords to import
  * @param importFromId The id of the existing DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_java_downloads_java_license_acceptance_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records oci_jms_java_downloads_java_license_acceptance_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_java_downloads_java_license_acceptance_records',
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
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._licenseType = config.licenseType;
    this._searchByUser = config.searchByUser;
    this._status = config.status;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: true, required: false
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

  // java_license_acceptance_record_collection - computed: true, optional: false, required: false
  private _javaLicenseAcceptanceRecordCollection = new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList(this, "java_license_acceptance_record_collection", false);
  public get javaLicenseAcceptanceRecordCollection() {
    return this._javaLicenseAcceptanceRecordCollection;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // search_by_user - computed: false, optional: true, required: false
  private _searchByUser?: string; 
  public get searchByUser() {
    return this.getStringAttribute('search_by_user');
  }
  public set searchByUser(value: string) {
    this._searchByUser = value;
  }
  public resetSearchByUser() {
    this._searchByUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchByUserInput() {
    return this._searchByUser;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      license_type: cdktf.stringToTerraform(this._licenseType),
      search_by_user: cdktf.stringToTerraform(this._searchByUser),
      status: cdktf.stringToTerraform(this._status),
      filter: cdktf.listMapper(dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_by_user: {
        value: cdktf.stringToHclTerraform(this._searchByUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
