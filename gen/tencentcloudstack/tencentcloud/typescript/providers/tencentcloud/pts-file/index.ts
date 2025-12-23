// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PtsFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * File id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#file_id PtsFile#file_id}
  */
  readonly fileId: string;
  /**
  * The first few lines of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#head_lines PtsFile#head_lines}
  */
  readonly headLines?: string[];
  /**
  * Meter head.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#header_columns PtsFile#header_columns}
  */
  readonly headerColumns?: string[];
  /**
  * Whether the header is in the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#header_in_file PtsFile#header_in_file}
  */
  readonly headerInFile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#id PtsFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * File kind, parameter file-1, protocol file-2, request file-3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#kind PtsFile#kind}
  */
  readonly kind: number;
  /**
  * Line count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#line_count PtsFile#line_count}
  */
  readonly lineCount?: number;
  /**
  * File name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#name PtsFile#name}
  */
  readonly name: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#project_id PtsFile#project_id}
  */
  readonly projectId: string;
  /**
  * File size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#size PtsFile#size}
  */
  readonly size: number;
  /**
  * The last few lines of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#tail_lines PtsFile#tail_lines}
  */
  readonly tailLines?: string[];
  /**
  * File type, folder-folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#type PtsFile#type}
  */
  readonly type: string;
  /**
  * file_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#file_infos PtsFile#file_infos}
  */
  readonly fileInfos?: PtsFileFileInfos[] | cdktf.IResolvable;
}
export interface PtsFileFileInfos {
  /**
  * File id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#file_id PtsFile#file_id}
  */
  readonly fileId?: string;
  /**
  * File name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#name PtsFile#name}
  */
  readonly name?: string;
  /**
  * File size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#size PtsFile#size}
  */
  readonly size?: number;
  /**
  * File type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#type PtsFile#type}
  */
  readonly type?: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#updated_at PtsFile#updated_at}
  */
  readonly updatedAt?: string;
}

export function ptsFileFileInfosToTerraform(struct?: PtsFileFileInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_id: cdktf.stringToTerraform(struct!.fileId),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
  }
}


export function ptsFileFileInfosToHclTerraform(struct?: PtsFileFileInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_id: {
      value: cdktf.stringToHclTerraform(struct!.fileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsFileFileInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsFileFileInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsFileFileInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileId = undefined;
      this._name = undefined;
      this._size = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileId = value.fileId;
      this._name = value.name;
      this._size = value.size;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // file_id - computed: false, optional: true, required: false
  private _fileId?: string; 
  public get fileId() {
    return this.getStringAttribute('file_id');
  }
  public set fileId(value: string) {
    this._fileId = value;
  }
  public resetFileId() {
    this._fileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}

export class PtsFileFileInfosList extends cdktf.ComplexList {
  public internalValue? : PtsFileFileInfos[] | cdktf.IResolvable

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
  public get(index: number): PtsFileFileInfosOutputReference {
    return new PtsFileFileInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file tencentcloud_pts_file}
*/
export class PtsFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_pts_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PtsFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PtsFile to import
  * @param importFromId The id of the existing PtsFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PtsFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_pts_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/pts_file tencentcloud_pts_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PtsFileConfig
  */
  public constructor(scope: Construct, id: string, config: PtsFileConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_pts_file',
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
    this._fileId = config.fileId;
    this._headLines = config.headLines;
    this._headerColumns = config.headerColumns;
    this._headerInFile = config.headerInFile;
    this._id = config.id;
    this._kind = config.kind;
    this._lineCount = config.lineCount;
    this._name = config.name;
    this._projectId = config.projectId;
    this._size = config.size;
    this._tailLines = config.tailLines;
    this._type = config.type;
    this._fileInfos.internalValue = config.fileInfos;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_id - computed: false, optional: false, required: true
  private _fileId?: string; 
  public get fileId() {
    return this.getStringAttribute('file_id');
  }
  public set fileId(value: string) {
    this._fileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
  }

  // head_lines - computed: false, optional: true, required: false
  private _headLines?: string[]; 
  public get headLines() {
    return cdktf.Fn.tolist(this.getListAttribute('head_lines'));
  }
  public set headLines(value: string[]) {
    this._headLines = value;
  }
  public resetHeadLines() {
    this._headLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headLinesInput() {
    return this._headLines;
  }

  // header_columns - computed: false, optional: true, required: false
  private _headerColumns?: string[]; 
  public get headerColumns() {
    return cdktf.Fn.tolist(this.getListAttribute('header_columns'));
  }
  public set headerColumns(value: string[]) {
    this._headerColumns = value;
  }
  public resetHeaderColumns() {
    this._headerColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerColumnsInput() {
    return this._headerColumns;
  }

  // header_in_file - computed: false, optional: true, required: false
  private _headerInFile?: boolean | cdktf.IResolvable; 
  public get headerInFile() {
    return this.getBooleanAttribute('header_in_file');
  }
  public set headerInFile(value: boolean | cdktf.IResolvable) {
    this._headerInFile = value;
  }
  public resetHeaderInFile() {
    this._headerInFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInFileInput() {
    return this._headerInFile;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: number; 
  public get kind() {
    return this.getNumberAttribute('kind');
  }
  public set kind(value: number) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // line_count - computed: false, optional: true, required: false
  private _lineCount?: number; 
  public get lineCount() {
    return this.getNumberAttribute('line_count');
  }
  public set lineCount(value: number) {
    this._lineCount = value;
  }
  public resetLineCount() {
    this._lineCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineCountInput() {
    return this._lineCount;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tail_lines - computed: false, optional: true, required: false
  private _tailLines?: string[]; 
  public get tailLines() {
    return cdktf.Fn.tolist(this.getListAttribute('tail_lines'));
  }
  public set tailLines(value: string[]) {
    this._tailLines = value;
  }
  public resetTailLines() {
    this._tailLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailLinesInput() {
    return this._tailLines;
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

  // file_infos - computed: false, optional: true, required: false
  private _fileInfos = new PtsFileFileInfosList(this, "file_infos", false);
  public get fileInfos() {
    return this._fileInfos;
  }
  public putFileInfos(value: PtsFileFileInfos[] | cdktf.IResolvable) {
    this._fileInfos.internalValue = value;
  }
  public resetFileInfos() {
    this._fileInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInfosInput() {
    return this._fileInfos.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_id: cdktf.stringToTerraform(this._fileId),
      head_lines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._headLines),
      header_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._headerColumns),
      header_in_file: cdktf.booleanToTerraform(this._headerInFile),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.numberToTerraform(this._kind),
      line_count: cdktf.numberToTerraform(this._lineCount),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      size: cdktf.numberToTerraform(this._size),
      tail_lines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tailLines),
      type: cdktf.stringToTerraform(this._type),
      file_infos: cdktf.listMapper(ptsFileFileInfosToTerraform, true)(this._fileInfos.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_id: {
        value: cdktf.stringToHclTerraform(this._fileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      head_lines: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._headLines),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      header_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._headerColumns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      header_in_file: {
        value: cdktf.booleanToHclTerraform(this._headerInFile),
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
      kind: {
        value: cdktf.numberToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      line_count: {
        value: cdktf.numberToHclTerraform(this._lineCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tail_lines: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tailLines),
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
      file_infos: {
        value: cdktf.listMapperHcl(ptsFileFileInfosToHclTerraform, true)(this._fileInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PtsFileFileInfosList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
