// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudNasAccessGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups#access_group_name DataAlicloudNasAccessGroups#access_group_name}
  */
  readonly accessGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups#access_group_type DataAlicloudNasAccessGroups#access_group_type}
  */
  readonly accessGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups#description DataAlicloudNasAccessGroups#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups#file_system_type DataAlicloudNasAccessGroups#file_system_type}
  */
  readonly fileSystemType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups#id DataAlicloudNasAccessGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups#name_regex DataAlicloudNasAccessGroups#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups#output_file DataAlicloudNasAccessGroups#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups#type DataAlicloudNasAccessGroups#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups#useutc_date_time DataAlicloudNasAccessGroups#useutc_date_time}
  */
  readonly useutcDateTime?: boolean | cdktf.IResolvable;
}
export interface DataAlicloudNasAccessGroupsGroups {
}

export function dataAlicloudNasAccessGroupsGroupsToTerraform(struct?: DataAlicloudNasAccessGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudNasAccessGroupsGroupsToHclTerraform(struct?: DataAlicloudNasAccessGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudNasAccessGroupsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudNasAccessGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudNasAccessGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_group_name - computed: true, optional: false, required: false
  public get accessGroupName() {
    return this.getStringAttribute('access_group_name');
  }

  // access_group_type - computed: true, optional: false, required: false
  public get accessGroupType() {
    return this.getStringAttribute('access_group_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mount_target_count - computed: true, optional: false, required: false
  public get mountTargetCount() {
    return this.getNumberAttribute('mount_target_count');
  }

  // rule_count - computed: true, optional: false, required: false
  public get ruleCount() {
    return this.getNumberAttribute('rule_count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAlicloudNasAccessGroupsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudNasAccessGroupsGroupsOutputReference {
    return new DataAlicloudNasAccessGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups alicloud_nas_access_groups}
*/
export class DataAlicloudNasAccessGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nas_access_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudNasAccessGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudNasAccessGroups to import
  * @param importFromId The id of the existing DataAlicloudNasAccessGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudNasAccessGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nas_access_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/nas_access_groups alicloud_nas_access_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudNasAccessGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudNasAccessGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nas_access_groups',
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
    this._accessGroupName = config.accessGroupName;
    this._accessGroupType = config.accessGroupType;
    this._description = config.description;
    this._fileSystemType = config.fileSystemType;
    this._id = config.id;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._type = config.type;
    this._useutcDateTime = config.useutcDateTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_name - computed: false, optional: true, required: false
  private _accessGroupName?: string; 
  public get accessGroupName() {
    return this.getStringAttribute('access_group_name');
  }
  public set accessGroupName(value: string) {
    this._accessGroupName = value;
  }
  public resetAccessGroupName() {
    this._accessGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupNameInput() {
    return this._accessGroupName;
  }

  // access_group_type - computed: false, optional: true, required: false
  private _accessGroupType?: string; 
  public get accessGroupType() {
    return this.getStringAttribute('access_group_type');
  }
  public set accessGroupType(value: string) {
    this._accessGroupType = value;
  }
  public resetAccessGroupType() {
    this._accessGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupTypeInput() {
    return this._accessGroupType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // file_system_type - computed: false, optional: true, required: false
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  public resetFileSystemType() {
    this._fileSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataAlicloudNasAccessGroupsGroupsList(this, "groups", false);
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
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

  // useutc_date_time - computed: false, optional: true, required: false
  private _useutcDateTime?: boolean | cdktf.IResolvable; 
  public get useutcDateTime() {
    return this.getBooleanAttribute('useutc_date_time');
  }
  public set useutcDateTime(value: boolean | cdktf.IResolvable) {
    this._useutcDateTime = value;
  }
  public resetUseutcDateTime() {
    this._useutcDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useutcDateTimeInput() {
    return this._useutcDateTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_name: cdktf.stringToTerraform(this._accessGroupName),
      access_group_type: cdktf.stringToTerraform(this._accessGroupType),
      description: cdktf.stringToTerraform(this._description),
      file_system_type: cdktf.stringToTerraform(this._fileSystemType),
      id: cdktf.stringToTerraform(this._id),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      type: cdktf.stringToTerraform(this._type),
      useutc_date_time: cdktf.booleanToTerraform(this._useutcDateTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_name: {
        value: cdktf.stringToHclTerraform(this._accessGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_group_type: {
        value: cdktf.stringToHclTerraform(this._accessGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_type: {
        value: cdktf.stringToHclTerraform(this._fileSystemType),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useutc_date_time: {
        value: cdktf.booleanToHclTerraform(this._useutcDateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
