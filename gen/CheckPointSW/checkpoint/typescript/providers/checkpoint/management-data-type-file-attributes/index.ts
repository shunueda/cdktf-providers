// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementDataTypeFileAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#color ManagementDataTypeFileAttributes#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#comments ManagementDataTypeFileAttributes#comments}
  */
  readonly comments?: string;
  /**
  * For built-in data types, the description explains the purpose of this type of data representation. For custom-made data types, you can use this field to provide more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#description ManagementDataTypeFileAttributes#description}
  */
  readonly description?: string;
  /**
  * The file must be one of the types specified in the list. Identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#file_groups_list ManagementDataTypeFileAttributes#file_groups_list}
  */
  readonly fileGroupsList?: string[];
  /**
  * File name should contain the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#file_name_contains ManagementDataTypeFileAttributes#file_name_contains}
  */
  readonly fileNameContains?: string;
  /**
  * Min File size in KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#file_size ManagementDataTypeFileAttributes#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#id ManagementDataTypeFileAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#ignore_errors ManagementDataTypeFileAttributes#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#ignore_warnings ManagementDataTypeFileAttributes#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Determine whether to consider file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#match_by_file_name ManagementDataTypeFileAttributes#match_by_file_name}
  */
  readonly matchByFileName?: boolean | cdktf.IResolvable;
  /**
  * Determine whether to consider file size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#match_by_file_size ManagementDataTypeFileAttributes#match_by_file_size}
  */
  readonly matchByFileSize?: boolean | cdktf.IResolvable;
  /**
  * Determine whether to consider file type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#match_by_file_type ManagementDataTypeFileAttributes#match_by_file_type}
  */
  readonly matchByFileType?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#name ManagementDataTypeFileAttributes#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#tags ManagementDataTypeFileAttributes#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes checkpoint_management_data_type_file_attributes}
*/
export class ManagementDataTypeFileAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_data_type_file_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementDataTypeFileAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementDataTypeFileAttributes to import
  * @param importFromId The id of the existing ManagementDataTypeFileAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementDataTypeFileAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_data_type_file_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_file_attributes checkpoint_management_data_type_file_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementDataTypeFileAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementDataTypeFileAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_data_type_file_attributes',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._description = config.description;
    this._fileGroupsList = config.fileGroupsList;
    this._fileNameContains = config.fileNameContains;
    this._fileSize = config.fileSize;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._matchByFileName = config.matchByFileName;
    this._matchByFileSize = config.matchByFileSize;
    this._matchByFileType = config.matchByFileType;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // file_groups_list - computed: false, optional: true, required: false
  private _fileGroupsList?: string[]; 
  public get fileGroupsList() {
    return cdktf.Fn.tolist(this.getListAttribute('file_groups_list'));
  }
  public set fileGroupsList(value: string[]) {
    this._fileGroupsList = value;
  }
  public resetFileGroupsList() {
    this._fileGroupsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileGroupsListInput() {
    return this._fileGroupsList;
  }

  // file_name_contains - computed: false, optional: true, required: false
  private _fileNameContains?: string; 
  public get fileNameContains() {
    return this.getStringAttribute('file_name_contains');
  }
  public set fileNameContains(value: string) {
    this._fileNameContains = value;
  }
  public resetFileNameContains() {
    this._fileNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameContainsInput() {
    return this._fileNameContains;
  }

  // file_size - computed: false, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // match_by_file_name - computed: false, optional: true, required: false
  private _matchByFileName?: boolean | cdktf.IResolvable; 
  public get matchByFileName() {
    return this.getBooleanAttribute('match_by_file_name');
  }
  public set matchByFileName(value: boolean | cdktf.IResolvable) {
    this._matchByFileName = value;
  }
  public resetMatchByFileName() {
    this._matchByFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByFileNameInput() {
    return this._matchByFileName;
  }

  // match_by_file_size - computed: false, optional: true, required: false
  private _matchByFileSize?: boolean | cdktf.IResolvable; 
  public get matchByFileSize() {
    return this.getBooleanAttribute('match_by_file_size');
  }
  public set matchByFileSize(value: boolean | cdktf.IResolvable) {
    this._matchByFileSize = value;
  }
  public resetMatchByFileSize() {
    this._matchByFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByFileSizeInput() {
    return this._matchByFileSize;
  }

  // match_by_file_type - computed: false, optional: true, required: false
  private _matchByFileType?: boolean | cdktf.IResolvable; 
  public get matchByFileType() {
    return this.getBooleanAttribute('match_by_file_type');
  }
  public set matchByFileType(value: boolean | cdktf.IResolvable) {
    this._matchByFileType = value;
  }
  public resetMatchByFileType() {
    this._matchByFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByFileTypeInput() {
    return this._matchByFileType;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      description: cdktf.stringToTerraform(this._description),
      file_groups_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileGroupsList),
      file_name_contains: cdktf.stringToTerraform(this._fileNameContains),
      file_size: cdktf.numberToTerraform(this._fileSize),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      match_by_file_name: cdktf.booleanToTerraform(this._matchByFileName),
      match_by_file_size: cdktf.booleanToTerraform(this._matchByFileSize),
      match_by_file_type: cdktf.booleanToTerraform(this._matchByFileType),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      file_groups_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileGroupsList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      file_name_contains: {
        value: cdktf.stringToHclTerraform(this._fileNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_size: {
        value: cdktf.numberToHclTerraform(this._fileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_by_file_name: {
        value: cdktf.booleanToHclTerraform(this._matchByFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_by_file_size: {
        value: cdktf.booleanToHclTerraform(this._matchByFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_by_file_type: {
        value: cdktf.booleanToHclTerraform(this._matchByFileType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
