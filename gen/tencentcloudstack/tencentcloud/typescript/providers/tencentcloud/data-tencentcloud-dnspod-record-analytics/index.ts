// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDnspodRecordAnalyticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * DATE: Statistics by day dimension, HOUR: Statistics by hour dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics#dns_format DataTencentcloudDnspodRecordAnalytics#dns_format}
  */
  readonly dnsFormat?: string;
  /**
  * The domain to query for resolution volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics#domain DataTencentcloudDnspodRecordAnalytics#domain}
  */
  readonly domain: string;
  /**
  * Domain ID. The parameter DomainId has a higher priority than the parameter Domain. If the parameter DomainId is passed, the parameter Domain will be ignored. You can find all Domains and DomainIds through the DescribeDomainList interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics#domain_id DataTencentcloudDnspodRecordAnalytics#domain_id}
  */
  readonly domainId?: number;
  /**
  * The end date of the query, format: YYYY-MM-DD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics#end_date DataTencentcloudDnspodRecordAnalytics#end_date}
  */
  readonly endDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics#id DataTencentcloudDnspodRecordAnalytics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics#result_output_file DataTencentcloudDnspodRecordAnalytics#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The start date of the query, format: YYYY-MM-DD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics#start_date DataTencentcloudDnspodRecordAnalytics#start_date}
  */
  readonly startDate: string;
  /**
  * The subdomain to query for resolution volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics#subdomain DataTencentcloudDnspodRecordAnalytics#subdomain}
  */
  readonly subdomain: string;
}
export interface DataTencentcloudDnspodRecordAnalyticsAliasDataData {
}

export function dataTencentcloudDnspodRecordAnalyticsAliasDataDataToTerraform(struct?: DataTencentcloudDnspodRecordAnalyticsAliasDataData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDnspodRecordAnalyticsAliasDataDataToHclTerraform(struct?: DataTencentcloudDnspodRecordAnalyticsAliasDataData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDnspodRecordAnalyticsAliasDataDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodRecordAnalyticsAliasDataData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodRecordAnalyticsAliasDataData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_key - computed: true, optional: false, required: false
  public get dateKey() {
    return this.getStringAttribute('date_key');
  }

  // hour_key - computed: true, optional: false, required: false
  public get hourKey() {
    return this.getNumberAttribute('hour_key');
  }

  // num - computed: true, optional: false, required: false
  public get num() {
    return this.getNumberAttribute('num');
  }
}

export class DataTencentcloudDnspodRecordAnalyticsAliasDataDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDnspodRecordAnalyticsAliasDataDataOutputReference {
    return new DataTencentcloudDnspodRecordAnalyticsAliasDataDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDnspodRecordAnalyticsAliasDataInfo {
}

export function dataTencentcloudDnspodRecordAnalyticsAliasDataInfoToTerraform(struct?: DataTencentcloudDnspodRecordAnalyticsAliasDataInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDnspodRecordAnalyticsAliasDataInfoToHclTerraform(struct?: DataTencentcloudDnspodRecordAnalyticsAliasDataInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDnspodRecordAnalyticsAliasDataInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodRecordAnalyticsAliasDataInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodRecordAnalyticsAliasDataInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_format - computed: true, optional: false, required: false
  public get dnsFormat() {
    return this.getStringAttribute('dns_format');
  }

  // dns_total - computed: true, optional: false, required: false
  public get dnsTotal() {
    return this.getNumberAttribute('dns_total');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
}

export class DataTencentcloudDnspodRecordAnalyticsAliasDataInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDnspodRecordAnalyticsAliasDataInfoOutputReference {
    return new DataTencentcloudDnspodRecordAnalyticsAliasDataInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDnspodRecordAnalyticsAliasData {
}

export function dataTencentcloudDnspodRecordAnalyticsAliasDataToTerraform(struct?: DataTencentcloudDnspodRecordAnalyticsAliasData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDnspodRecordAnalyticsAliasDataToHclTerraform(struct?: DataTencentcloudDnspodRecordAnalyticsAliasData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDnspodRecordAnalyticsAliasDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodRecordAnalyticsAliasData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodRecordAnalyticsAliasData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudDnspodRecordAnalyticsAliasDataDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataTencentcloudDnspodRecordAnalyticsAliasDataInfoList(this, "info", false);
  public get info() {
    return this._info;
  }
}

export class DataTencentcloudDnspodRecordAnalyticsAliasDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDnspodRecordAnalyticsAliasDataOutputReference {
    return new DataTencentcloudDnspodRecordAnalyticsAliasDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDnspodRecordAnalyticsData {
}

export function dataTencentcloudDnspodRecordAnalyticsDataToTerraform(struct?: DataTencentcloudDnspodRecordAnalyticsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDnspodRecordAnalyticsDataToHclTerraform(struct?: DataTencentcloudDnspodRecordAnalyticsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDnspodRecordAnalyticsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodRecordAnalyticsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodRecordAnalyticsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_key - computed: true, optional: false, required: false
  public get dateKey() {
    return this.getStringAttribute('date_key');
  }

  // hour_key - computed: true, optional: false, required: false
  public get hourKey() {
    return this.getNumberAttribute('hour_key');
  }

  // num - computed: true, optional: false, required: false
  public get num() {
    return this.getNumberAttribute('num');
  }
}

export class DataTencentcloudDnspodRecordAnalyticsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDnspodRecordAnalyticsDataOutputReference {
    return new DataTencentcloudDnspodRecordAnalyticsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDnspodRecordAnalyticsInfo {
}

export function dataTencentcloudDnspodRecordAnalyticsInfoToTerraform(struct?: DataTencentcloudDnspodRecordAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDnspodRecordAnalyticsInfoToHclTerraform(struct?: DataTencentcloudDnspodRecordAnalyticsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDnspodRecordAnalyticsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodRecordAnalyticsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodRecordAnalyticsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_format - computed: true, optional: false, required: false
  public get dnsFormat() {
    return this.getStringAttribute('dns_format');
  }

  // dns_total - computed: true, optional: false, required: false
  public get dnsTotal() {
    return this.getNumberAttribute('dns_total');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
}

export class DataTencentcloudDnspodRecordAnalyticsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDnspodRecordAnalyticsInfoOutputReference {
    return new DataTencentcloudDnspodRecordAnalyticsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics tencentcloud_dnspod_record_analytics}
*/
export class DataTencentcloudDnspodRecordAnalytics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dnspod_record_analytics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDnspodRecordAnalytics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDnspodRecordAnalytics to import
  * @param importFromId The id of the existing DataTencentcloudDnspodRecordAnalytics that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDnspodRecordAnalytics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dnspod_record_analytics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dnspod_record_analytics tencentcloud_dnspod_record_analytics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDnspodRecordAnalyticsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDnspodRecordAnalyticsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dnspod_record_analytics',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsFormat = config.dnsFormat;
    this._domain = config.domain;
    this._domainId = config.domainId;
    this._endDate = config.endDate;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._startDate = config.startDate;
    this._subdomain = config.subdomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_data - computed: true, optional: false, required: false
  private _aliasData = new DataTencentcloudDnspodRecordAnalyticsAliasDataList(this, "alias_data", false);
  public get aliasData() {
    return this._aliasData;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudDnspodRecordAnalyticsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // dns_format - computed: false, optional: true, required: false
  private _dnsFormat?: string; 
  public get dnsFormat() {
    return this.getStringAttribute('dns_format');
  }
  public set dnsFormat(value: string) {
    this._dnsFormat = value;
  }
  public resetDnsFormat() {
    this._dnsFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFormatInput() {
    return this._dnsFormat;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // info - computed: true, optional: false, required: false
  private _info = new DataTencentcloudDnspodRecordAnalyticsInfoList(this, "info", false);
  public get info() {
    return this._info;
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

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // subdomain - computed: false, optional: false, required: true
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_format: cdktf.stringToTerraform(this._dnsFormat),
      domain: cdktf.stringToTerraform(this._domain),
      domain_id: cdktf.numberToTerraform(this._domainId),
      end_date: cdktf.stringToTerraform(this._endDate),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_date: cdktf.stringToTerraform(this._startDate),
      subdomain: cdktf.stringToTerraform(this._subdomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_format: {
        value: cdktf.stringToHclTerraform(this._dnsFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdomain: {
        value: cdktf.stringToHclTerraform(this._subdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
