// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/gaap_proxy_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudGaapProxyDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/gaap_proxy_detail#id DataTencentcloudGaapProxyDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Proxy Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/gaap_proxy_detail#proxy_id DataTencentcloudGaapProxyDetail#proxy_id}
  */
  readonly proxyId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/gaap_proxy_detail#result_output_file DataTencentcloudGaapProxyDetail#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeature {
}

export function dataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeatureToTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeatureToHclTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return cdktf.Fn.tolist(this.getListAttribute('network_type'));
  }
}

export class DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeatureList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeatureOutputReference {
    return new DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfo {
}

export function dataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoToTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoToHclTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature_bitmap - computed: true, optional: false, required: false
  public get featureBitmap() {
    return this.getNumberAttribute('feature_bitmap');
  }

  // idc_type - computed: true, optional: false, required: false
  public get idcType() {
    return this.getStringAttribute('idc_type');
  }

  // region_area - computed: true, optional: false, required: false
  public get regionArea() {
    return this.getStringAttribute('region_area');
  }

  // region_area_name - computed: true, optional: false, required: false
  public get regionAreaName() {
    return this.getStringAttribute('region_area_name');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // support_feature - computed: true, optional: false, required: false
  private _supportFeature = new DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoSupportFeatureList(this, "support_feature", false);
  public get supportFeature() {
    return this._supportFeature;
  }
}

export class DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoOutputReference {
    return new DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudGaapProxyDetailProxyDetailIpListStruct {
}

export function dataTencentcloudGaapProxyDetailProxyDetailIpListStructToTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapProxyDetailProxyDetailIpListStructToHclTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapProxyDetailProxyDetailIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapProxyDetailProxyDetailIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapProxyDetailProxyDetailIpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataTencentcloudGaapProxyDetailProxyDetailIpListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapProxyDetailProxyDetailIpListStructOutputReference {
    return new DataTencentcloudGaapProxyDetailProxyDetailIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeature {
}

export function dataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeatureToTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeatureToHclTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return cdktf.Fn.tolist(this.getListAttribute('network_type'));
  }
}

export class DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeatureList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeatureOutputReference {
    return new DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfo {
}

export function dataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoToTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoToHclTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature_bitmap - computed: true, optional: false, required: false
  public get featureBitmap() {
    return this.getNumberAttribute('feature_bitmap');
  }

  // idc_type - computed: true, optional: false, required: false
  public get idcType() {
    return this.getStringAttribute('idc_type');
  }

  // region_area - computed: true, optional: false, required: false
  public get regionArea() {
    return this.getStringAttribute('region_area');
  }

  // region_area_name - computed: true, optional: false, required: false
  public get regionAreaName() {
    return this.getStringAttribute('region_area_name');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // support_feature - computed: true, optional: false, required: false
  private _supportFeature = new DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoSupportFeatureList(this, "support_feature", false);
  public get supportFeature() {
    return this._supportFeature;
  }
}

export class DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoOutputReference {
    return new DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudGaapProxyDetailProxyDetailTagSet {
}

export function dataTencentcloudGaapProxyDetailProxyDetailTagSetToTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailTagSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapProxyDetailProxyDetailTagSetToHclTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetailTagSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapProxyDetailProxyDetailTagSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapProxyDetailProxyDetailTagSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapProxyDetailProxyDetailTagSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataTencentcloudGaapProxyDetailProxyDetailTagSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapProxyDetailProxyDetailTagSetOutputReference {
    return new DataTencentcloudGaapProxyDetailProxyDetailTagSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudGaapProxyDetailProxyDetail {
}

export function dataTencentcloudGaapProxyDetailProxyDetailToTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudGaapProxyDetailProxyDetailToHclTerraform(struct?: DataTencentcloudGaapProxyDetailProxyDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudGaapProxyDetailProxyDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudGaapProxyDetailProxyDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudGaapProxyDetailProxyDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_region - computed: true, optional: false, required: false
  public get accessRegion() {
    return this.getStringAttribute('access_region');
  }

  // access_region_info - computed: true, optional: false, required: false
  private _accessRegionInfo = new DataTencentcloudGaapProxyDetailProxyDetailAccessRegionInfoList(this, "access_region_info", false);
  public get accessRegionInfo() {
    return this._accessRegionInfo;
  }

  // ban_status - computed: true, optional: false, required: false
  public get banStatus() {
    return this.getStringAttribute('ban_status');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // billing_type - computed: true, optional: false, required: false
  public get billingType() {
    return this.getNumberAttribute('billing_type');
  }

  // client_ip_method - computed: true, optional: false, required: false
  public get clientIpMethod() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('client_ip_method')));
  }

  // concurrent - computed: true, optional: false, required: false
  public get concurrent() {
    return this.getNumberAttribute('concurrent');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // feature_bitmap - computed: true, optional: false, required: false
  public get featureBitmap() {
    return this.getNumberAttribute('feature_bitmap');
  }

  // forward_ip - computed: true, optional: false, required: false
  public get forwardIp() {
    return this.getStringAttribute('forward_ip');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // http3_supported - computed: true, optional: false, required: false
  public get http3Supported() {
    return this.getNumberAttribute('http3_supported');
  }

  // in_ban_blacklist - computed: true, optional: false, required: false
  public get inBanBlacklist() {
    return this.getNumberAttribute('in_ban_blacklist');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip_address_version - computed: true, optional: false, required: false
  public get ipAddressVersion() {
    return this.getStringAttribute('ip_address_version');
  }

  // ip_list - computed: true, optional: false, required: false
  private _ipList = new DataTencentcloudGaapProxyDetailProxyDetailIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }

  // is_auto_scale_proxy - computed: true, optional: false, required: false
  public get isAutoScaleProxy() {
    return this.getNumberAttribute('is_auto_scale_proxy');
  }

  // is_support_tls_choice - computed: true, optional: false, required: false
  public get isSupportTlsChoice() {
    return this.getNumberAttribute('is_support_tls_choice');
  }

  // modify_config_time - computed: true, optional: false, required: false
  public get modifyConfigTime() {
    return this.getNumberAttribute('modify_config_time');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // proxy_id - computed: true, optional: false, required: false
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }

  // proxy_name - computed: true, optional: false, required: false
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }

  // proxy_type - computed: true, optional: false, required: false
  public get proxyType() {
    return this.getNumberAttribute('proxy_type');
  }

  // real_server_region - computed: true, optional: false, required: false
  public get realServerRegion() {
    return this.getStringAttribute('real_server_region');
  }

  // real_server_region_info - computed: true, optional: false, required: false
  private _realServerRegionInfo = new DataTencentcloudGaapProxyDetailProxyDetailRealServerRegionInfoList(this, "real_server_region_info", false);
  public get realServerRegionInfo() {
    return this._realServerRegionInfo;
  }

  // related_global_domains - computed: true, optional: false, required: false
  public get relatedGlobalDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('related_global_domains'));
  }

  // scalarable - computed: true, optional: false, required: false
  public get scalarable() {
    return this.getNumberAttribute('scalarable');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // support_protocols - computed: true, optional: false, required: false
  public get supportProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('support_protocols'));
  }

  // support_security - computed: true, optional: false, required: false
  public get supportSecurity() {
    return this.getNumberAttribute('support_security');
  }

  // tag_set - computed: true, optional: false, required: false
  private _tagSet = new DataTencentcloudGaapProxyDetailProxyDetailTagSetList(this, "tag_set", false);
  public get tagSet() {
    return this._tagSet;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataTencentcloudGaapProxyDetailProxyDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudGaapProxyDetailProxyDetailOutputReference {
    return new DataTencentcloudGaapProxyDetailProxyDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/gaap_proxy_detail tencentcloud_gaap_proxy_detail}
*/
export class DataTencentcloudGaapProxyDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gaap_proxy_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudGaapProxyDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudGaapProxyDetail to import
  * @param importFromId The id of the existing DataTencentcloudGaapProxyDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/gaap_proxy_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudGaapProxyDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gaap_proxy_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/gaap_proxy_detail tencentcloud_gaap_proxy_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudGaapProxyDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudGaapProxyDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gaap_proxy_detail',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._proxyId = config.proxyId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // proxy_detail - computed: true, optional: false, required: false
  private _proxyDetail = new DataTencentcloudGaapProxyDetailProxyDetailList(this, "proxy_detail", false);
  public get proxyDetail() {
    return this._proxyDetail;
  }

  // proxy_id - computed: false, optional: false, required: true
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      proxy_id: cdktf.stringToTerraform(this._proxyId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_id: {
        value: cdktf.stringToHclTerraform(this._proxyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
