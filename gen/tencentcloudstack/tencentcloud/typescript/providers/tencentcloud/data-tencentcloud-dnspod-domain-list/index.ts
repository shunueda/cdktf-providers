// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDnspodDomainListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Get domain names based on domain group id, which can be obtained through the GroupId field in DescribeDomain or DescribeDomainList interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#group_id DataTencentcloudDnspodDomainList#group_id}
  */
  readonly groupId?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#id DataTencentcloudDnspodDomainList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Get domain names based on keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#keyword DataTencentcloudDnspodDomainList#keyword}
  */
  readonly keyword?: string;
  /**
  * Get domain names based on the package, which can be obtained through the Grade field in DescribeDomain or DescribeDomainList interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#package DataTencentcloudDnspodDomainList#package}
  */
  readonly package?: string[];
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#project_id DataTencentcloudDnspodDomainList#project_id}
  */
  readonly projectId?: number;
  /**
  * The start point of the domain name&amp;#39;s record count query range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#record_count_begin DataTencentcloudDnspodDomainList#record_count_begin}
  */
  readonly recordCountBegin?: number;
  /**
  * The end point of the domain name&amp;#39;s record count query range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#record_count_end DataTencentcloudDnspodDomainList#record_count_end}
  */
  readonly recordCountEnd?: number;
  /**
  * Get domain names based on remark information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#remark DataTencentcloudDnspodDomainList#remark}
  */
  readonly remark?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#result_output_file DataTencentcloudDnspodDomainList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Sorting field. Available values are NAME, STATUS, RECORDS, GRADE, UPDATED_ON. NAME: Domain name STATUS: Domain status RECORDS: Number of records GRADE: Package level UPDATED_ON: Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#sort_field DataTencentcloudDnspodDomainList#sort_field}
  */
  readonly sortField?: string;
  /**
  * Sorting type, ascending: ASC, descending: DESC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#sort_type DataTencentcloudDnspodDomainList#sort_type}
  */
  readonly sortType?: string;
  /**
  * Get domain names based on domain status. Available values are ENABLE, LOCK, PAUSE, SPAM. ENABLE: Normal LOCK: Locked PAUSE: Paused SPAM: Banned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#status DataTencentcloudDnspodDomainList#status}
  */
  readonly status?: string[];
  /**
  * Get domain names based on domain group type. Available values are ALL, MINE, SHARE, RECENT. ALL: All MINE: My domain names SHARE: Domain names shared with me RECENT: Recently operated domain names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#type DataTencentcloudDnspodDomainList#type}
  */
  readonly type: string;
  /**
  * The start time of the domain name&amp;#39;s update time to be obtained, such as &amp;#39;2021-05-01 03:00:00&amp;#39;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#updated_at_begin DataTencentcloudDnspodDomainList#updated_at_begin}
  */
  readonly updatedAtBegin?: string;
  /**
  * The end time of the domain name&amp;#39;s update time to be obtained, such as &amp;#39;2021-05-10 20:00:00&amp;#39;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#updated_at_end DataTencentcloudDnspodDomainList#updated_at_end}
  */
  readonly updatedAtEnd?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#tags DataTencentcloudDnspodDomainList#tags}
  */
  readonly tags?: DataTencentcloudDnspodDomainListTags[] | cdktf.IResolvable;
}
export interface DataTencentcloudDnspodDomainListDomainListTagListStruct {
}

export function dataTencentcloudDnspodDomainListDomainListTagListStructToTerraform(struct?: DataTencentcloudDnspodDomainListDomainListTagListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDnspodDomainListDomainListTagListStructToHclTerraform(struct?: DataTencentcloudDnspodDomainListDomainListTagListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDnspodDomainListDomainListTagListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodDomainListDomainListTagListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodDomainListDomainListTagListStruct | undefined) {
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

export class DataTencentcloudDnspodDomainListDomainListTagListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDnspodDomainListDomainListTagListStructOutputReference {
    return new DataTencentcloudDnspodDomainListDomainListTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDnspodDomainListDomainListStruct {
}

export function dataTencentcloudDnspodDomainListDomainListStructToTerraform(struct?: DataTencentcloudDnspodDomainListDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDnspodDomainListDomainListStructToHclTerraform(struct?: DataTencentcloudDnspodDomainListDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDnspodDomainListDomainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodDomainListDomainListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodDomainListDomainListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cname_speedup - computed: true, optional: false, required: false
  public get cnameSpeedup() {
    return this.getStringAttribute('cname_speedup');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // dns_status - computed: true, optional: false, required: false
  public get dnsStatus() {
    return this.getStringAttribute('dns_status');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }

  // effective_dns - computed: true, optional: false, required: false
  public get effectiveDns() {
    return cdktf.Fn.tolist(this.getListAttribute('effective_dns'));
  }

  // grade - computed: true, optional: false, required: false
  public get grade() {
    return this.getStringAttribute('grade');
  }

  // grade_level - computed: true, optional: false, required: false
  public get gradeLevel() {
    return this.getNumberAttribute('grade_level');
  }

  // grade_title - computed: true, optional: false, required: false
  public get gradeTitle() {
    return this.getStringAttribute('grade_title');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // is_vip - computed: true, optional: false, required: false
  public get isVip() {
    return this.getStringAttribute('is_vip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // punycode - computed: true, optional: false, required: false
  public get punycode() {
    return this.getStringAttribute('punycode');
  }

  // record_count - computed: true, optional: false, required: false
  public get recordCount() {
    return this.getNumberAttribute('record_count');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // search_engine_push - computed: true, optional: false, required: false
  public get searchEnginePush() {
    return this.getStringAttribute('search_engine_push');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag_list - computed: true, optional: false, required: false
  private _tagList = new DataTencentcloudDnspodDomainListDomainListTagListStructList(this, "tag_list", false);
  public get tagList() {
    return this._tagList;
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }

  // vip_auto_renew - computed: true, optional: false, required: false
  public get vipAutoRenew() {
    return this.getStringAttribute('vip_auto_renew');
  }

  // vip_end_at - computed: true, optional: false, required: false
  public get vipEndAt() {
    return this.getStringAttribute('vip_end_at');
  }

  // vip_start_at - computed: true, optional: false, required: false
  public get vipStartAt() {
    return this.getStringAttribute('vip_start_at');
  }
}

export class DataTencentcloudDnspodDomainListDomainListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDnspodDomainListDomainListStructOutputReference {
    return new DataTencentcloudDnspodDomainListDomainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDnspodDomainListTags {
  /**
  * Field to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#tag_key DataTencentcloudDnspodDomainList#tag_key}
  */
  readonly tagKey: string;
  /**
  * Filter value of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#tag_value DataTencentcloudDnspodDomainList#tag_value}
  */
  readonly tagValue: string[];
}

export function dataTencentcloudDnspodDomainListTagsToTerraform(struct?: DataTencentcloudDnspodDomainListTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagValue),
  }
}


export function dataTencentcloudDnspodDomainListTagsToHclTerraform(struct?: DataTencentcloudDnspodDomainListTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudDnspodDomainListTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDnspodDomainListTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDnspodDomainListTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string[]; 
  public get tagValue() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_value'));
  }
  public set tagValue(value: string[]) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class DataTencentcloudDnspodDomainListTagsList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudDnspodDomainListTags[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudDnspodDomainListTagsOutputReference {
    return new DataTencentcloudDnspodDomainListTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list tencentcloud_dnspod_domain_list}
*/
export class DataTencentcloudDnspodDomainList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dnspod_domain_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDnspodDomainList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDnspodDomainList to import
  * @param importFromId The id of the existing DataTencentcloudDnspodDomainList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDnspodDomainList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dnspod_domain_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dnspod_domain_list tencentcloud_dnspod_domain_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDnspodDomainListConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDnspodDomainListConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dnspod_domain_list',
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._keyword = config.keyword;
    this._package = config.package;
    this._projectId = config.projectId;
    this._recordCountBegin = config.recordCountBegin;
    this._recordCountEnd = config.recordCountEnd;
    this._remark = config.remark;
    this._resultOutputFile = config.resultOutputFile;
    this._sortField = config.sortField;
    this._sortType = config.sortType;
    this._status = config.status;
    this._type = config.type;
    this._updatedAtBegin = config.updatedAtBegin;
    this._updatedAtEnd = config.updatedAtEnd;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_list - computed: true, optional: false, required: false
  private _domainList = new DataTencentcloudDnspodDomainListDomainListStructList(this, "domain_list", false);
  public get domainList() {
    return this._domainList;
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

  // package - computed: false, optional: true, required: false
  private _package?: string[]; 
  public get package() {
    return cdktf.Fn.tolist(this.getListAttribute('package'));
  }
  public set package(value: string[]) {
    this._package = value;
  }
  public resetPackage() {
    this._package = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
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

  // record_count_begin - computed: false, optional: true, required: false
  private _recordCountBegin?: number; 
  public get recordCountBegin() {
    return this.getNumberAttribute('record_count_begin');
  }
  public set recordCountBegin(value: number) {
    this._recordCountBegin = value;
  }
  public resetRecordCountBegin() {
    this._recordCountBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordCountBeginInput() {
    return this._recordCountBegin;
  }

  // record_count_end - computed: false, optional: true, required: false
  private _recordCountEnd?: number; 
  public get recordCountEnd() {
    return this.getNumberAttribute('record_count_end');
  }
  public set recordCountEnd(value: number) {
    this._recordCountEnd = value;
  }
  public resetRecordCountEnd() {
    this._recordCountEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordCountEndInput() {
    return this._recordCountEnd;
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

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return cdktf.Fn.tolist(this.getListAttribute('status'));
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // tags - computed: false, optional: true, required: false
  private _tags = new DataTencentcloudDnspodDomainListTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataTencentcloudDnspodDomainListTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      keyword: cdktf.stringToTerraform(this._keyword),
      package: cdktf.listMapper(cdktf.stringToTerraform, false)(this._package),
      project_id: cdktf.numberToTerraform(this._projectId),
      record_count_begin: cdktf.numberToTerraform(this._recordCountBegin),
      record_count_end: cdktf.numberToTerraform(this._recordCountEnd),
      remark: cdktf.stringToTerraform(this._remark),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sort_field: cdktf.stringToTerraform(this._sortField),
      sort_type: cdktf.stringToTerraform(this._sortType),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
      type: cdktf.stringToTerraform(this._type),
      updated_at_begin: cdktf.stringToTerraform(this._updatedAtBegin),
      updated_at_end: cdktf.stringToTerraform(this._updatedAtEnd),
      tags: cdktf.listMapper(dataTencentcloudDnspodDomainListTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._package),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_count_begin: {
        value: cdktf.numberToHclTerraform(this._recordCountBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_count_end: {
        value: cdktf.numberToHclTerraform(this._recordCountEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tags: {
        value: cdktf.listMapperHcl(dataTencentcloudDnspodDomainListTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudDnspodDomainListTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
