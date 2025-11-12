// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterComplianceDeviceByIdDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * category query parameter. complianceCategory can have any value among 'INTENT', 'RUNNING_CONFIG'
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail#category DataDnacenterComplianceDeviceByIdDetail#category}
  */
  readonly category?: string;
  /**
  * complianceType query parameter. complianceType can have any value among 'NETWORK_DESIGN', 'NETWORK_PROFILE', 'FABRIC', 'POLICY', 'RUNNING_CONFIG'
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail#compliance_type DataDnacenterComplianceDeviceByIdDetail#compliance_type}
  */
  readonly complianceType?: string;
  /**
  * deviceUuid path parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail#device_uuid DataDnacenterComplianceDeviceByIdDetail#device_uuid}
  */
  readonly deviceUuid: string;
  /**
  * diffList query parameter. diff list [ pass true to fetch the diff list ]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail#diff_list DataDnacenterComplianceDeviceByIdDetail#diff_list}
  */
  readonly diffList?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail#id DataDnacenterComplianceDeviceByIdDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * key query parameter. extended attribute key
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail#key DataDnacenterComplianceDeviceByIdDetail#key}
  */
  readonly key?: string;
  /**
  * value query parameter. extended attribute value
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail#value DataDnacenterComplianceDeviceByIdDetail#value}
  */
  readonly value?: string;
}
export interface DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributes {
}

export function dataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributesToTerraform(struct?: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributesToHclTerraform(struct?: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cfs_attributes - computed: true, optional: false, required: false
  public get cfsAttributes() {
    return this.getStringAttribute('cfs_attributes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributesOutputReference {
    return new DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKey {
}

export function dataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyToTerraform(struct?: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyToHclTerraform(struct?: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // business_key_attributes - computed: true, optional: false, required: false
  public get businessKeyAttributes() {
    return this.getStringAttribute('business_key_attributes');
  }

  // other_attributes - computed: true, optional: false, required: false
  private _otherAttributes = new DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOtherAttributesList(this, "other_attributes", false);
  public get otherAttributes() {
    return this._otherAttributes;
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
}

export class DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOutputReference {
    return new DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStruct {
}

export function dataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStructToTerraform(struct?: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStructToHclTerraform(struct?: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // business_key - computed: true, optional: false, required: false
  public get businessKey() {
    return this.getStringAttribute('business_key');
  }

  // configured_value - computed: true, optional: false, required: false
  public get configuredValue() {
    return this.getStringAttribute('configured_value');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // extended_attributes - computed: true, optional: false, required: false
  public get extendedAttributes() {
    return this.getStringAttribute('extended_attributes');
  }

  // intended_value - computed: true, optional: false, required: false
  public get intendedValue() {
    return this.getStringAttribute('intended_value');
  }

  // move_from_path - computed: true, optional: false, required: false
  public get moveFromPath() {
    return this.getStringAttribute('move_from_path');
  }

  // op - computed: true, optional: false, required: false
  public get op() {
    return this.getStringAttribute('op');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStructOutputReference {
    return new DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStruct {
}

export function dataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStructToTerraform(struct?: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStructToHclTerraform(struct?: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // business_key - computed: true, optional: false, required: false
  private _businessKey = new DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListBusinessKeyList(this, "business_key", false);
  public get businessKey() {
    return this._businessKey;
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // diff_list - computed: true, optional: false, required: false
  private _diffList = new DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListDiffListStructList(this, "diff_list", false);
  public get diffList() {
    return this._diffList;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // license_app_name - computed: true, optional: false, required: false
  public get licenseAppName() {
    return this.getStringAttribute('license_app_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_with_business_key - computed: true, optional: false, required: false
  public get nameWithBusinessKey() {
    return this.getStringAttribute('name_with_business_key');
  }

  // network_profile_name - computed: true, optional: false, required: false
  public get networkProfileName() {
    return this.getStringAttribute('network_profile_name');
  }

  // provisioning_area - computed: true, optional: false, required: false
  public get provisioningArea() {
    return this.getStringAttribute('provisioning_area');
  }

  // source_enum - computed: true, optional: false, required: false
  public get sourceEnum() {
    return this.getStringAttribute('source_enum');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStructOutputReference {
    return new DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterComplianceDeviceByIdDetailItems {
}

export function dataDnacenterComplianceDeviceByIdDetailItemsToTerraform(struct?: DataDnacenterComplianceDeviceByIdDetailItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterComplianceDeviceByIdDetailItemsToHclTerraform(struct?: DataDnacenterComplianceDeviceByIdDetailItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterComplianceDeviceByIdDetailItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterComplianceDeviceByIdDetailItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterComplianceDeviceByIdDetailItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_data_url - computed: true, optional: false, required: false
  public get additionalDataUrl() {
    return this.getStringAttribute('additional_data_url');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // compliance_type - computed: true, optional: false, required: false
  public get complianceType() {
    return this.getStringAttribute('compliance_type');
  }

  // device_uuid - computed: true, optional: false, required: false
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // last_sync_time - computed: true, optional: false, required: false
  public get lastSyncTime() {
    return this.getNumberAttribute('last_sync_time');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // source_info_list - computed: true, optional: false, required: false
  private _sourceInfoList = new DataDnacenterComplianceDeviceByIdDetailItemsSourceInfoListStructList(this, "source_info_list", false);
  public get sourceInfoList() {
    return this._sourceInfoList;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataDnacenterComplianceDeviceByIdDetailItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterComplianceDeviceByIdDetailItemsOutputReference {
    return new DataDnacenterComplianceDeviceByIdDetailItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail dnacenter_compliance_device_by_id_detail}
*/
export class DataDnacenterComplianceDeviceByIdDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_compliance_device_by_id_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterComplianceDeviceByIdDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterComplianceDeviceByIdDetail to import
  * @param importFromId The id of the existing DataDnacenterComplianceDeviceByIdDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterComplianceDeviceByIdDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_compliance_device_by_id_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/compliance_device_by_id_detail dnacenter_compliance_device_by_id_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterComplianceDeviceByIdDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterComplianceDeviceByIdDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_compliance_device_by_id_detail',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._complianceType = config.complianceType;
    this._deviceUuid = config.deviceUuid;
    this._diffList = config.diffList;
    this._id = config.id;
    this._key = config.key;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // compliance_type - computed: false, optional: true, required: false
  private _complianceType?: string; 
  public get complianceType() {
    return this.getStringAttribute('compliance_type');
  }
  public set complianceType(value: string) {
    this._complianceType = value;
  }
  public resetComplianceType() {
    this._complianceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceTypeInput() {
    return this._complianceType;
  }

  // device_uuid - computed: false, optional: false, required: true
  private _deviceUuid?: string; 
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }
  public set deviceUuid(value: string) {
    this._deviceUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUuidInput() {
    return this._deviceUuid;
  }

  // diff_list - computed: false, optional: true, required: false
  private _diffList?: boolean | cdktf.IResolvable; 
  public get diffList() {
    return this.getBooleanAttribute('diff_list');
  }
  public set diffList(value: boolean | cdktf.IResolvable) {
    this._diffList = value;
  }
  public resetDiffList() {
    this._diffList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffListInput() {
    return this._diffList;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterComplianceDeviceByIdDetailItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      compliance_type: cdktf.stringToTerraform(this._complianceType),
      device_uuid: cdktf.stringToTerraform(this._deviceUuid),
      diff_list: cdktf.booleanToTerraform(this._diffList),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_type: {
        value: cdktf.stringToHclTerraform(this._complianceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_uuid: {
        value: cdktf.stringToHclTerraform(this._deviceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diff_list: {
        value: cdktf.booleanToHclTerraform(this._diffList),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
