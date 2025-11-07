// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCmsMonitorGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#dynamic_tag_rule_id DataAlicloudCmsMonitorGroups#dynamic_tag_rule_id}
  */
  readonly dynamicTagRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#id DataAlicloudCmsMonitorGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#ids DataAlicloudCmsMonitorGroups#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#include_template_history DataAlicloudCmsMonitorGroups#include_template_history}
  */
  readonly includeTemplateHistory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#keyword DataAlicloudCmsMonitorGroups#keyword}
  */
  readonly keyword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#monitor_group_name DataAlicloudCmsMonitorGroups#monitor_group_name}
  */
  readonly monitorGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#name_regex DataAlicloudCmsMonitorGroups#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#output_file DataAlicloudCmsMonitorGroups#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#select_contact_groups DataAlicloudCmsMonitorGroups#select_contact_groups}
  */
  readonly selectContactGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#tags DataAlicloudCmsMonitorGroups#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#type DataAlicloudCmsMonitorGroups#type}
  */
  readonly type?: string;
}
export interface DataAlicloudCmsMonitorGroupsGroups {
}

export function dataAlicloudCmsMonitorGroupsGroupsToTerraform(struct?: DataAlicloudCmsMonitorGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCmsMonitorGroupsGroupsToHclTerraform(struct?: DataAlicloudCmsMonitorGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCmsMonitorGroupsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCmsMonitorGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCmsMonitorGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_url - computed: true, optional: false, required: false
  public get bindUrl() {
    return this.getStringAttribute('bind_url');
  }

  // contact_groups - computed: true, optional: false, required: false
  public get contactGroups() {
    return this.getListAttribute('contact_groups');
  }

  // dynamic_tag_rule_id - computed: true, optional: false, required: false
  public get dynamicTagRuleId() {
    return this.getStringAttribute('dynamic_tag_rule_id');
  }

  // gmt_create - computed: true, optional: false, required: false
  public get gmtCreate() {
    return this.getNumberAttribute('gmt_create');
  }

  // gmt_modified - computed: true, optional: false, required: false
  public get gmtModified() {
    return this.getNumberAttribute('gmt_modified');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitor_group_name - computed: true, optional: false, required: false
  public get monitorGroupName() {
    return this.getStringAttribute('monitor_group_name');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // template_ids - computed: true, optional: false, required: false
  public get templateIds() {
    return this.getListAttribute('template_ids');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAlicloudCmsMonitorGroupsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCmsMonitorGroupsGroupsOutputReference {
    return new DataAlicloudCmsMonitorGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups alicloud_cms_monitor_groups}
*/
export class DataAlicloudCmsMonitorGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cms_monitor_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCmsMonitorGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCmsMonitorGroups to import
  * @param importFromId The id of the existing DataAlicloudCmsMonitorGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCmsMonitorGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cms_monitor_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cms_monitor_groups alicloud_cms_monitor_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCmsMonitorGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCmsMonitorGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cms_monitor_groups',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicTagRuleId = config.dynamicTagRuleId;
    this._id = config.id;
    this._ids = config.ids;
    this._includeTemplateHistory = config.includeTemplateHistory;
    this._keyword = config.keyword;
    this._monitorGroupName = config.monitorGroupName;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._selectContactGroups = config.selectContactGroups;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_tag_rule_id - computed: false, optional: true, required: false
  private _dynamicTagRuleId?: string; 
  public get dynamicTagRuleId() {
    return this.getStringAttribute('dynamic_tag_rule_id');
  }
  public set dynamicTagRuleId(value: string) {
    this._dynamicTagRuleId = value;
  }
  public resetDynamicTagRuleId() {
    this._dynamicTagRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicTagRuleIdInput() {
    return this._dynamicTagRuleId;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataAlicloudCmsMonitorGroupsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
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

  // include_template_history - computed: false, optional: true, required: false
  private _includeTemplateHistory?: boolean | cdktf.IResolvable; 
  public get includeTemplateHistory() {
    return this.getBooleanAttribute('include_template_history');
  }
  public set includeTemplateHistory(value: boolean | cdktf.IResolvable) {
    this._includeTemplateHistory = value;
  }
  public resetIncludeTemplateHistory() {
    this._includeTemplateHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTemplateHistoryInput() {
    return this._includeTemplateHistory;
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

  // monitor_group_name - computed: false, optional: true, required: false
  private _monitorGroupName?: string; 
  public get monitorGroupName() {
    return this.getStringAttribute('monitor_group_name');
  }
  public set monitorGroupName(value: string) {
    this._monitorGroupName = value;
  }
  public resetMonitorGroupName() {
    this._monitorGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorGroupNameInput() {
    return this._monitorGroupName;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
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

  // select_contact_groups - computed: false, optional: true, required: false
  private _selectContactGroups?: boolean | cdktf.IResolvable; 
  public get selectContactGroups() {
    return this.getBooleanAttribute('select_contact_groups');
  }
  public set selectContactGroups(value: boolean | cdktf.IResolvable) {
    this._selectContactGroups = value;
  }
  public resetSelectContactGroups() {
    this._selectContactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectContactGroupsInput() {
    return this._selectContactGroups;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_tag_rule_id: cdktf.stringToTerraform(this._dynamicTagRuleId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      include_template_history: cdktf.booleanToTerraform(this._includeTemplateHistory),
      keyword: cdktf.stringToTerraform(this._keyword),
      monitor_group_name: cdktf.stringToTerraform(this._monitorGroupName),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      select_contact_groups: cdktf.booleanToTerraform(this._selectContactGroups),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_tag_rule_id: {
        value: cdktf.stringToHclTerraform(this._dynamicTagRuleId),
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
      include_template_history: {
        value: cdktf.booleanToHclTerraform(this._includeTemplateHistory),
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
      monitor_group_name: {
        value: cdktf.stringToHclTerraform(this._monitorGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      select_contact_groups: {
        value: cdktf.booleanToHclTerraform(this._selectContactGroups),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
