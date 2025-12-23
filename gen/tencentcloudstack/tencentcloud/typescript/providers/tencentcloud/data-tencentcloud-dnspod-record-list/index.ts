// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDnspodRecordListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain to which the resolution record belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#domain DataTencentcloudDnspodRecordList#domain}
  */
  readonly domain: string;
  /**
  * The domain ID to which the resolution record belongs. If DomainId is provided, the system will ignore the Domain parameter. You can find all Domain and DomainId through the DescribeDomainList interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#domain_id DataTencentcloudDnspodRecordList#domain_id}
  */
  readonly domainId?: number;
  /**
  * Filter @ type NS records. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#filter_at_ns DataTencentcloudDnspodRecordList#filter_at_ns}
  */
  readonly filterAtNs?: boolean | cdktf.IResolvable;
  /**
  * When retrieving resolution records under certain groups, pass this group ID. You can obtain the GroupId field through the DescribeRecordGroupList interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#group_id DataTencentcloudDnspodRecordList#group_id}
  */
  readonly groupId?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#id DataTencentcloudDnspodRecordList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to perform an exact search based on the SubDomain parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#is_exact_sub_domain DataTencentcloudDnspodRecordList#is_exact_sub_domain}
  */
  readonly isExactSubDomain?: boolean | cdktf.IResolvable;
  /**
  * Search for resolution records by keyword, currently supporting searching host headers and record values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#keyword DataTencentcloudDnspodRecordList#keyword}
  */
  readonly keyword?: string;
  /**
  * The starting point of the resolution record MX priority query interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#mx_begin DataTencentcloudDnspodRecordList#mx_begin}
  */
  readonly mxBegin?: number;
  /**
  * The endpoint of the resolution record MX priority query interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#mx_end DataTencentcloudDnspodRecordList#mx_end}
  */
  readonly mxEnd?: number;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#project_id DataTencentcloudDnspodRecordList#project_id}
  */
  readonly projectId?: number;
  /**
  * Retrieve resolution records for certain line IDs. You can view the allowed line information for the current domain through the DescribeRecordLineList interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#record_line DataTencentcloudDnspodRecordList#record_line}
  */
  readonly recordLine?: string[];
  /**
  * Get the resolution record based on the resolution record status. The possible values are ENABLE and DISABLE. ENABLE: Normal DISABLE: Paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#record_status DataTencentcloudDnspodRecordList#record_status}
  */
  readonly recordStatus?: string[];
  /**
  * Retrieve certain types of resolution records, such as A, CNAME, NS, AAAA, explicit URL, implicit URL, CAA, SPF, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#record_type DataTencentcloudDnspodRecordList#record_type}
  */
  readonly recordType?: string[];
  /**
  * Get the resolution record based on the resolution record value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#record_value DataTencentcloudDnspodRecordList#record_value}
  */
  readonly recordValue?: string;
  /**
  * Get the resolution record based on the resolution record remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#remark DataTencentcloudDnspodRecordList#remark}
  */
  readonly remark?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#result_output_file DataTencentcloudDnspodRecordList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Sorting field, supporting NAME, LINE, TYPE, VALUE, WEIGHT, MX, TTL, UPDATED_ON fields. NAME: The host header of the resolution record LINE: The resolution record line TYPE: The resolution record type VALUE: The resolution record value WEIGHT: The weight MX: MX priority TTL: The resolution record cache time UPDATED_ON: The resolution record update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#sort_field DataTencentcloudDnspodRecordList#sort_field}
  */
  readonly sortField?: string;
  /**
  * Sorting method, ascending: ASC, descending: DESC. The default value is ASC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#sort_type DataTencentcloudDnspodRecordList#sort_type}
  */
  readonly sortType?: string;
  /**
  * Retrieve resolution records based on the host header of the resolution record. Fuzzy matching is used by default. You can set the IsExactSubdomain parameter to true for precise searching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#sub_domain DataTencentcloudDnspodRecordList#sub_domain}
  */
  readonly subDomain?: string;
  /**
  * Sub domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#sub_domains DataTencentcloudDnspodRecordList#sub_domains}
  */
  readonly subDomains?: string[];
  /**
  * The starting point of the resolution record TTL query interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#ttl_begin DataTencentcloudDnspodRecordList#ttl_begin}
  */
  readonly ttlBegin?: number;
  /**
  * The endpoint of the resolution record TTL query interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#ttl_end DataTencentcloudDnspodRecordList#ttl_end}
  */
  readonly ttlEnd?: number;
  /**
  * The starting point of the resolution record update time query interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#updated_at_begin DataTencentcloudDnspodRecordList#updated_at_begin}
  */
  readonly updatedAtBegin?: string;
  /**
  * The endpoint of the resolution record update time query interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#updated_at_end DataTencentcloudDnspodRecordList#updated_at_end}
  */
  readonly updatedAtEnd?: string;
  /**
  * The starting point of the resolution record weight query interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#weight_begin DataTencentcloudDnspodRecordList#weight_begin}
  */
  readonly weightBegin?: number;
  /**
  * The endpoint of the resolution record weight query interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#weight_end DataTencentcloudDnspodRecordList#weight_end}
  */
  readonly weightEnd?: number;
}
export interface DataTencentcloudDnspodRecordListInstanceListStruct {
}

export function dataTencentcloudDnspodRecordListInstanceListStructToTerraform(struct?: DataTencentcloudDnspodRecordListInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDnspodRecordListInstanceListStructToHclTerraform(struct?: DataTencentcloudDnspodRecordListInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDnspodRecordListInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodRecordListInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodRecordListInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ns - computed: true, optional: false, required: false
  public get defaultNs() {
    return this.getBooleanAttribute('default_ns');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // line_id - computed: true, optional: false, required: false
  public get lineId() {
    return this.getStringAttribute('line_id');
  }

  // monitor_status - computed: true, optional: false, required: false
  public get monitorStatus() {
    return this.getStringAttribute('monitor_status');
  }

  // mx - computed: true, optional: false, required: false
  public get mx() {
    return this.getNumberAttribute('mx');
  }

  // record_id - computed: true, optional: false, required: false
  public get recordId() {
    return this.getNumberAttribute('record_id');
  }

  // record_line - computed: true, optional: false, required: false
  public get recordLine() {
    return this.getStringAttribute('record_line');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_domain - computed: true, optional: false, required: false
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataTencentcloudDnspodRecordListInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDnspodRecordListInstanceListStructOutputReference {
    return new DataTencentcloudDnspodRecordListInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDnspodRecordListRecordCountInfo {
}

export function dataTencentcloudDnspodRecordListRecordCountInfoToTerraform(struct?: DataTencentcloudDnspodRecordListRecordCountInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDnspodRecordListRecordCountInfoToHclTerraform(struct?: DataTencentcloudDnspodRecordListRecordCountInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDnspodRecordListRecordCountInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodRecordListRecordCountInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodRecordListRecordCountInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // list_count - computed: true, optional: false, required: false
  public get listCount() {
    return this.getNumberAttribute('list_count');
  }

  // subdomain_count - computed: true, optional: false, required: false
  public get subdomainCount() {
    return this.getNumberAttribute('subdomain_count');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudDnspodRecordListRecordCountInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDnspodRecordListRecordCountInfoOutputReference {
    return new DataTencentcloudDnspodRecordListRecordCountInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDnspodRecordListRecordListStruct {
}

export function dataTencentcloudDnspodRecordListRecordListStructToTerraform(struct?: DataTencentcloudDnspodRecordListRecordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDnspodRecordListRecordListStructToHclTerraform(struct?: DataTencentcloudDnspodRecordListRecordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDnspodRecordListRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodRecordListRecordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodRecordListRecordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ns - computed: true, optional: false, required: false
  public get defaultNs() {
    return this.getBooleanAttribute('default_ns');
  }

  // line - computed: true, optional: false, required: false
  public get line() {
    return this.getStringAttribute('line');
  }

  // line_id - computed: true, optional: false, required: false
  public get lineId() {
    return this.getStringAttribute('line_id');
  }

  // monitor_status - computed: true, optional: false, required: false
  public get monitorStatus() {
    return this.getStringAttribute('monitor_status');
  }

  // mx - computed: true, optional: false, required: false
  public get mx() {
    return this.getNumberAttribute('mx');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // record_id - computed: true, optional: false, required: false
  public get recordId() {
    return this.getNumberAttribute('record_id');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataTencentcloudDnspodRecordListRecordListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDnspodRecordListRecordListStructOutputReference {
    return new DataTencentcloudDnspodRecordListRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list tencentcloud_dnspod_record_list}
*/
export class DataTencentcloudDnspodRecordList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dnspod_record_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDnspodRecordList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDnspodRecordList to import
  * @param importFromId The id of the existing DataTencentcloudDnspodRecordList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDnspodRecordList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dnspod_record_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_record_list tencentcloud_dnspod_record_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDnspodRecordListConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDnspodRecordListConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dnspod_record_list',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._domainId = config.domainId;
    this._filterAtNs = config.filterAtNs;
    this._groupId = config.groupId;
    this._id = config.id;
    this._isExactSubDomain = config.isExactSubDomain;
    this._keyword = config.keyword;
    this._mxBegin = config.mxBegin;
    this._mxEnd = config.mxEnd;
    this._projectId = config.projectId;
    this._recordLine = config.recordLine;
    this._recordStatus = config.recordStatus;
    this._recordType = config.recordType;
    this._recordValue = config.recordValue;
    this._remark = config.remark;
    this._resultOutputFile = config.resultOutputFile;
    this._sortField = config.sortField;
    this._sortType = config.sortType;
    this._subDomain = config.subDomain;
    this._subDomains = config.subDomains;
    this._ttlBegin = config.ttlBegin;
    this._ttlEnd = config.ttlEnd;
    this._updatedAtBegin = config.updatedAtBegin;
    this._updatedAtEnd = config.updatedAtEnd;
    this._weightBegin = config.weightBegin;
    this._weightEnd = config.weightEnd;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // filter_at_ns - computed: false, optional: true, required: false
  private _filterAtNs?: boolean | cdktf.IResolvable; 
  public get filterAtNs() {
    return this.getBooleanAttribute('filter_at_ns');
  }
  public set filterAtNs(value: boolean | cdktf.IResolvable) {
    this._filterAtNs = value;
  }
  public resetFilterAtNs() {
    this._filterAtNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAtNsInput() {
    return this._filterAtNs;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number[]; 
  public get groupId() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('group_id')));
  }
  public set groupId(value: number[]) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // instance_list - computed: true, optional: false, required: false
  private _instanceList = new DataTencentcloudDnspodRecordListInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }

  // is_exact_sub_domain - computed: false, optional: true, required: false
  private _isExactSubDomain?: boolean | cdktf.IResolvable; 
  public get isExactSubDomain() {
    return this.getBooleanAttribute('is_exact_sub_domain');
  }
  public set isExactSubDomain(value: boolean | cdktf.IResolvable) {
    this._isExactSubDomain = value;
  }
  public resetIsExactSubDomain() {
    this._isExactSubDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExactSubDomainInput() {
    return this._isExactSubDomain;
  }

  // keyword - computed: false, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // mx_begin - computed: false, optional: true, required: false
  private _mxBegin?: number; 
  public get mxBegin() {
    return this.getNumberAttribute('mx_begin');
  }
  public set mxBegin(value: number) {
    this._mxBegin = value;
  }
  public resetMxBegin() {
    this._mxBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxBeginInput() {
    return this._mxBegin;
  }

  // mx_end - computed: false, optional: true, required: false
  private _mxEnd?: number; 
  public get mxEnd() {
    return this.getNumberAttribute('mx_end');
  }
  public set mxEnd(value: number) {
    this._mxEnd = value;
  }
  public resetMxEnd() {
    this._mxEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxEndInput() {
    return this._mxEnd;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // record_count_info - computed: true, optional: false, required: false
  private _recordCountInfo = new DataTencentcloudDnspodRecordListRecordCountInfoList(this, "record_count_info", false);
  public get recordCountInfo() {
    return this._recordCountInfo;
  }

  // record_line - computed: false, optional: true, required: false
  private _recordLine?: string[]; 
  public get recordLine() {
    return cdktf.Fn.tolist(this.getListAttribute('record_line'));
  }
  public set recordLine(value: string[]) {
    this._recordLine = value;
  }
  public resetRecordLine() {
    this._recordLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordLineInput() {
    return this._recordLine;
  }

  // record_list - computed: true, optional: false, required: false
  private _recordList = new DataTencentcloudDnspodRecordListRecordListStructList(this, "record_list", false);
  public get recordList() {
    return this._recordList;
  }

  // record_status - computed: false, optional: true, required: false
  private _recordStatus?: string[]; 
  public get recordStatus() {
    return cdktf.Fn.tolist(this.getListAttribute('record_status'));
  }
  public set recordStatus(value: string[]) {
    this._recordStatus = value;
  }
  public resetRecordStatus() {
    this._recordStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordStatusInput() {
    return this._recordStatus;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string[]; 
  public get recordType() {
    return cdktf.Fn.tolist(this.getListAttribute('record_type'));
  }
  public set recordType(value: string[]) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // record_value - computed: false, optional: true, required: false
  private _recordValue?: string; 
  public get recordValue() {
    return this.getStringAttribute('record_value');
  }
  public set recordValue(value: string) {
    this._recordValue = value;
  }
  public resetRecordValue() {
    this._recordValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordValueInput() {
    return this._recordValue;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
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

  // sort_field - computed: false, optional: true, required: false
  private _sortField?: string; 
  public get sortField() {
    return this.getStringAttribute('sort_field');
  }
  public set sortField(value: string) {
    this._sortField = value;
  }
  public resetSortField() {
    this._sortField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortFieldInput() {
    return this._sortField;
  }

  // sort_type - computed: false, optional: true, required: false
  private _sortType?: string; 
  public get sortType() {
    return this.getStringAttribute('sort_type');
  }
  public set sortType(value: string) {
    this._sortType = value;
  }
  public resetSortType() {
    this._sortType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortTypeInput() {
    return this._sortType;
  }

  // sub_domain - computed: false, optional: true, required: false
  private _subDomain?: string; 
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }
  public set subDomain(value: string) {
    this._subDomain = value;
  }
  public resetSubDomain() {
    this._subDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainInput() {
    return this._subDomain;
  }

  // sub_domains - computed: false, optional: true, required: false
  private _subDomains?: string[]; 
  public get subDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('sub_domains'));
  }
  public set subDomains(value: string[]) {
    this._subDomains = value;
  }
  public resetSubDomains() {
    this._subDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainsInput() {
    return this._subDomains;
  }

  // ttl_begin - computed: false, optional: true, required: false
  private _ttlBegin?: number; 
  public get ttlBegin() {
    return this.getNumberAttribute('ttl_begin');
  }
  public set ttlBegin(value: number) {
    this._ttlBegin = value;
  }
  public resetTtlBegin() {
    this._ttlBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlBeginInput() {
    return this._ttlBegin;
  }

  // ttl_end - computed: false, optional: true, required: false
  private _ttlEnd?: number; 
  public get ttlEnd() {
    return this.getNumberAttribute('ttl_end');
  }
  public set ttlEnd(value: number) {
    this._ttlEnd = value;
  }
  public resetTtlEnd() {
    this._ttlEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlEndInput() {
    return this._ttlEnd;
  }

  // updated_at_begin - computed: false, optional: true, required: false
  private _updatedAtBegin?: string; 
  public get updatedAtBegin() {
    return this.getStringAttribute('updated_at_begin');
  }
  public set updatedAtBegin(value: string) {
    this._updatedAtBegin = value;
  }
  public resetUpdatedAtBegin() {
    this._updatedAtBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtBeginInput() {
    return this._updatedAtBegin;
  }

  // updated_at_end - computed: false, optional: true, required: false
  private _updatedAtEnd?: string; 
  public get updatedAtEnd() {
    return this.getStringAttribute('updated_at_end');
  }
  public set updatedAtEnd(value: string) {
    this._updatedAtEnd = value;
  }
  public resetUpdatedAtEnd() {
    this._updatedAtEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtEndInput() {
    return this._updatedAtEnd;
  }

  // weight_begin - computed: false, optional: true, required: false
  private _weightBegin?: number; 
  public get weightBegin() {
    return this.getNumberAttribute('weight_begin');
  }
  public set weightBegin(value: number) {
    this._weightBegin = value;
  }
  public resetWeightBegin() {
    this._weightBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightBeginInput() {
    return this._weightBegin;
  }

  // weight_end - computed: false, optional: true, required: false
  private _weightEnd?: number; 
  public get weightEnd() {
    return this.getNumberAttribute('weight_end');
  }
  public set weightEnd(value: number) {
    this._weightEnd = value;
  }
  public resetWeightEnd() {
    this._weightEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightEndInput() {
    return this._weightEnd;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      domain_id: cdktf.numberToTerraform(this._domainId),
      filter_at_ns: cdktf.booleanToTerraform(this._filterAtNs),
      group_id: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      is_exact_sub_domain: cdktf.booleanToTerraform(this._isExactSubDomain),
      keyword: cdktf.stringToTerraform(this._keyword),
      mx_begin: cdktf.numberToTerraform(this._mxBegin),
      mx_end: cdktf.numberToTerraform(this._mxEnd),
      project_id: cdktf.numberToTerraform(this._projectId),
      record_line: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordLine),
      record_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordStatus),
      record_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordType),
      record_value: cdktf.stringToTerraform(this._recordValue),
      remark: cdktf.stringToTerraform(this._remark),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sort_field: cdktf.stringToTerraform(this._sortField),
      sort_type: cdktf.stringToTerraform(this._sortType),
      sub_domain: cdktf.stringToTerraform(this._subDomain),
      sub_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subDomains),
      ttl_begin: cdktf.numberToTerraform(this._ttlBegin),
      ttl_end: cdktf.numberToTerraform(this._ttlEnd),
      updated_at_begin: cdktf.stringToTerraform(this._updatedAtBegin),
      updated_at_end: cdktf.stringToTerraform(this._updatedAtEnd),
      weight_begin: cdktf.numberToTerraform(this._weightBegin),
      weight_end: cdktf.numberToTerraform(this._weightEnd),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      filter_at_ns: {
        value: cdktf.booleanToHclTerraform(this._filterAtNs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupId),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_exact_sub_domain: {
        value: cdktf.booleanToHclTerraform(this._isExactSubDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mx_begin: {
        value: cdktf.numberToHclTerraform(this._mxBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mx_end: {
        value: cdktf.numberToHclTerraform(this._mxEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_line: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordLine),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      record_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordStatus),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      record_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      record_value: {
        value: cdktf.stringToHclTerraform(this._recordValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
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
      sort_field: {
        value: cdktf.stringToHclTerraform(this._sortField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_type: {
        value: cdktf.stringToHclTerraform(this._sortType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_domain: {
        value: cdktf.stringToHclTerraform(this._subDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ttl_begin: {
        value: cdktf.numberToHclTerraform(this._ttlBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl_end: {
        value: cdktf.numberToHclTerraform(this._ttlEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      updated_at_begin: {
        value: cdktf.stringToHclTerraform(this._updatedAtBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at_end: {
        value: cdktf.stringToHclTerraform(this._updatedAtEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight_begin: {
        value: cdktf.numberToHclTerraform(this._weightBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_end: {
        value: cdktf.numberToHclTerraform(this._weightEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
