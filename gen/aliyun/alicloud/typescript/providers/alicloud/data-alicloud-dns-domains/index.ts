// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudDnsDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#ali_domain DataAlicloudDnsDomains#ali_domain}
  */
  readonly aliDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#domain_name_regex DataAlicloudDnsDomains#domain_name_regex}
  */
  readonly domainNameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#enable_details DataAlicloudDnsDomains#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#group_id DataAlicloudDnsDomains#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#group_name_regex DataAlicloudDnsDomains#group_name_regex}
  */
  readonly groupNameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#id DataAlicloudDnsDomains#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#ids DataAlicloudDnsDomains#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#instance_id DataAlicloudDnsDomains#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#key_word DataAlicloudDnsDomains#key_word}
  */
  readonly keyWord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#lang DataAlicloudDnsDomains#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#output_file DataAlicloudDnsDomains#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#resource_group_id DataAlicloudDnsDomains#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#search_mode DataAlicloudDnsDomains#search_mode}
  */
  readonly searchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#starmark DataAlicloudDnsDomains#starmark}
  */
  readonly starmark?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#tags DataAlicloudDnsDomains#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#version_code DataAlicloudDnsDomains#version_code}
  */
  readonly versionCode?: string;
}
export interface DataAlicloudDnsDomainsDomainsRecordLines {
}

export function dataAlicloudDnsDomainsDomainsRecordLinesToTerraform(struct?: DataAlicloudDnsDomainsDomainsRecordLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDnsDomainsDomainsRecordLinesToHclTerraform(struct?: DataAlicloudDnsDomainsDomainsRecordLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDnsDomainsDomainsRecordLinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDnsDomainsDomainsRecordLines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDnsDomainsDomainsRecordLines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // father_code - computed: true, optional: false, required: false
  public get fatherCode() {
    return this.getStringAttribute('father_code');
  }

  // line_code - computed: true, optional: false, required: false
  public get lineCode() {
    return this.getStringAttribute('line_code');
  }

  // line_display_name - computed: true, optional: false, required: false
  public get lineDisplayName() {
    return this.getStringAttribute('line_display_name');
  }

  // line_name - computed: true, optional: false, required: false
  public get lineName() {
    return this.getStringAttribute('line_name');
  }
}

export class DataAlicloudDnsDomainsDomainsRecordLinesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDnsDomainsDomainsRecordLinesOutputReference {
    return new DataAlicloudDnsDomainsDomainsRecordLinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudDnsDomainsDomains {
}

export function dataAlicloudDnsDomainsDomainsToTerraform(struct?: DataAlicloudDnsDomainsDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDnsDomainsDomainsToHclTerraform(struct?: DataAlicloudDnsDomainsDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDnsDomainsDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDnsDomainsDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDnsDomainsDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ali_domain - computed: true, optional: false, required: false
  public get aliDomain() {
    return this.getBooleanAttribute('ali_domain');
  }

  // available_ttls - computed: true, optional: false, required: false
  public get availableTtls() {
    return this.getNumberListAttribute('available_ttls');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_black_hole - computed: true, optional: false, required: false
  public get inBlackHole() {
    return this.getBooleanAttribute('in_black_hole');
  }

  // in_clean - computed: true, optional: false, required: false
  public get inClean() {
    return this.getBooleanAttribute('in_clean');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // line_type - computed: true, optional: false, required: false
  public get lineType() {
    return this.getStringAttribute('line_type');
  }

  // min_ttl - computed: true, optional: false, required: false
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }

  // puny_code - computed: true, optional: false, required: false
  public get punyCode() {
    return this.getStringAttribute('puny_code');
  }

  // record_line_tree_json - computed: true, optional: false, required: false
  public get recordLineTreeJson() {
    return this.getStringAttribute('record_line_tree_json');
  }

  // record_lines - computed: true, optional: false, required: false
  private _recordLines = new DataAlicloudDnsDomainsDomainsRecordLinesList(this, "record_lines", false);
  public get recordLines() {
    return this._recordLines;
  }

  // region_lines - computed: true, optional: false, required: false
  public get regionLines() {
    return this.getBooleanAttribute('region_lines');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // slave_dns - computed: true, optional: false, required: false
  public get slaveDns() {
    return this.getBooleanAttribute('slave_dns');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // version_code - computed: true, optional: false, required: false
  public get versionCode() {
    return this.getStringAttribute('version_code');
  }

  // version_name - computed: true, optional: false, required: false
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
}

export class DataAlicloudDnsDomainsDomainsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDnsDomainsDomainsOutputReference {
    return new DataAlicloudDnsDomainsDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains alicloud_dns_domains}
*/
export class DataAlicloudDnsDomains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dns_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudDnsDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudDnsDomains to import
  * @param importFromId The id of the existing DataAlicloudDnsDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudDnsDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dns_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/dns_domains alicloud_dns_domains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudDnsDomainsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudDnsDomainsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dns_domains',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliDomain = config.aliDomain;
    this._domainNameRegex = config.domainNameRegex;
    this._enableDetails = config.enableDetails;
    this._groupId = config.groupId;
    this._groupNameRegex = config.groupNameRegex;
    this._id = config.id;
    this._ids = config.ids;
    this._instanceId = config.instanceId;
    this._keyWord = config.keyWord;
    this._lang = config.lang;
    this._outputFile = config.outputFile;
    this._resourceGroupId = config.resourceGroupId;
    this._searchMode = config.searchMode;
    this._starmark = config.starmark;
    this._tags = config.tags;
    this._versionCode = config.versionCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ali_domain - computed: false, optional: true, required: false
  private _aliDomain?: boolean | cdktf.IResolvable; 
  public get aliDomain() {
    return this.getBooleanAttribute('ali_domain');
  }
  public set aliDomain(value: boolean | cdktf.IResolvable) {
    this._aliDomain = value;
  }
  public resetAliDomain() {
    this._aliDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliDomainInput() {
    return this._aliDomain;
  }

  // domain_name_regex - computed: false, optional: true, required: false
  private _domainNameRegex?: string; 
  public get domainNameRegex() {
    return this.getStringAttribute('domain_name_regex');
  }
  public set domainNameRegex(value: string) {
    this._domainNameRegex = value;
  }
  public resetDomainNameRegex() {
    this._domainNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameRegexInput() {
    return this._domainNameRegex;
  }

  // domains - computed: true, optional: false, required: false
  private _domains = new DataAlicloudDnsDomainsDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name_regex - computed: false, optional: true, required: false
  private _groupNameRegex?: string; 
  public get groupNameRegex() {
    return this.getStringAttribute('group_name_regex');
  }
  public set groupNameRegex(value: string) {
    this._groupNameRegex = value;
  }
  public resetGroupNameRegex() {
    this._groupNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameRegexInput() {
    return this._groupNameRegex;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // key_word - computed: false, optional: true, required: false
  private _keyWord?: string; 
  public get keyWord() {
    return this.getStringAttribute('key_word');
  }
  public set keyWord(value: string) {
    this._keyWord = value;
  }
  public resetKeyWord() {
    this._keyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWordInput() {
    return this._keyWord;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // search_mode - computed: false, optional: true, required: false
  private _searchMode?: string; 
  public get searchMode() {
    return this.getStringAttribute('search_mode');
  }
  public set searchMode(value: string) {
    this._searchMode = value;
  }
  public resetSearchMode() {
    this._searchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchModeInput() {
    return this._searchMode;
  }

  // starmark - computed: false, optional: true, required: false
  private _starmark?: boolean | cdktf.IResolvable; 
  public get starmark() {
    return this.getBooleanAttribute('starmark');
  }
  public set starmark(value: boolean | cdktf.IResolvable) {
    this._starmark = value;
  }
  public resetStarmark() {
    this._starmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starmarkInput() {
    return this._starmark;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version_code - computed: false, optional: true, required: false
  private _versionCode?: string; 
  public get versionCode() {
    return this.getStringAttribute('version_code');
  }
  public set versionCode(value: string) {
    this._versionCode = value;
  }
  public resetVersionCode() {
    this._versionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCodeInput() {
    return this._versionCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ali_domain: cdktf.booleanToTerraform(this._aliDomain),
      domain_name_regex: cdktf.stringToTerraform(this._domainNameRegex),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      group_id: cdktf.stringToTerraform(this._groupId),
      group_name_regex: cdktf.stringToTerraform(this._groupNameRegex),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      key_word: cdktf.stringToTerraform(this._keyWord),
      lang: cdktf.stringToTerraform(this._lang),
      output_file: cdktf.stringToTerraform(this._outputFile),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      search_mode: cdktf.stringToTerraform(this._searchMode),
      starmark: cdktf.booleanToTerraform(this._starmark),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version_code: cdktf.stringToTerraform(this._versionCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ali_domain: {
        value: cdktf.booleanToHclTerraform(this._aliDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_name_regex: {
        value: cdktf.stringToHclTerraform(this._domainNameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name_regex: {
        value: cdktf.stringToHclTerraform(this._groupNameRegex),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_word: {
        value: cdktf.stringToHclTerraform(this._keyWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_mode: {
        value: cdktf.stringToHclTerraform(this._searchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starmark: {
        value: cdktf.booleanToHclTerraform(this._starmark),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version_code: {
        value: cdktf.stringToHclTerraform(this._versionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
