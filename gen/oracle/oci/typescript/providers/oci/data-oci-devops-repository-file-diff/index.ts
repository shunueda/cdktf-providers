// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/devops_repository_file_diff
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDevopsRepositoryFileDiffConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/devops_repository_file_diff#base_version DataOciDevopsRepositoryFileDiff#base_version}
  */
  readonly baseVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/devops_repository_file_diff#file_path DataOciDevopsRepositoryFileDiff#file_path}
  */
  readonly filePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/devops_repository_file_diff#id DataOciDevopsRepositoryFileDiff#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/devops_repository_file_diff#is_comparison_from_merge_base DataOciDevopsRepositoryFileDiff#is_comparison_from_merge_base}
  */
  readonly isComparisonFromMergeBase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/devops_repository_file_diff#repository_id DataOciDevopsRepositoryFileDiff#repository_id}
  */
  readonly repositoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/devops_repository_file_diff#target_version DataOciDevopsRepositoryFileDiff#target_version}
  */
  readonly targetVersion: string;
}
export interface DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines {
}

export function dataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesToTerraform(struct?: DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesToHclTerraform(struct?: DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_line - computed: true, optional: false, required: false
  public get baseLine() {
    return this.getNumberAttribute('base_line');
  }

  // conflict_marker - computed: true, optional: false, required: false
  public get conflictMarker() {
    return this.getStringAttribute('conflict_marker');
  }

  // line_content - computed: true, optional: false, required: false
  public get lineContent() {
    return this.getStringAttribute('line_content');
  }

  // target_line - computed: true, optional: false, required: false
  public get targetLine() {
    return this.getNumberAttribute('target_line');
  }
}

export class DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference {
    return new DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsRepositoryFileDiffChangesDiffSections {
}

export function dataOciDevopsRepositoryFileDiffChangesDiffSectionsToTerraform(struct?: DataOciDevopsRepositoryFileDiffChangesDiffSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsRepositoryFileDiffChangesDiffSectionsToHclTerraform(struct?: DataOciDevopsRepositoryFileDiffChangesDiffSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsRepositoryFileDiffChangesDiffSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsRepositoryFileDiffChangesDiffSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lines - computed: true, optional: false, required: false
  private _lines = new DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList(this, "lines", false);
  public get lines() {
    return this._lines;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDevopsRepositoryFileDiffChangesDiffSectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference {
    return new DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsRepositoryFileDiffChanges {
}

export function dataOciDevopsRepositoryFileDiffChangesToTerraform(struct?: DataOciDevopsRepositoryFileDiffChanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsRepositoryFileDiffChangesToHclTerraform(struct?: DataOciDevopsRepositoryFileDiffChanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsRepositoryFileDiffChangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsRepositoryFileDiffChanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsRepositoryFileDiffChanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_line - computed: true, optional: false, required: false
  public get baseLine() {
    return this.getNumberAttribute('base_line');
  }

  // base_span - computed: true, optional: false, required: false
  public get baseSpan() {
    return this.getNumberAttribute('base_span');
  }

  // diff_sections - computed: true, optional: false, required: false
  private _diffSections = new DataOciDevopsRepositoryFileDiffChangesDiffSectionsList(this, "diff_sections", false);
  public get diffSections() {
    return this._diffSections;
  }

  // target_line - computed: true, optional: false, required: false
  public get targetLine() {
    return this.getNumberAttribute('target_line');
  }

  // target_span - computed: true, optional: false, required: false
  public get targetSpan() {
    return this.getNumberAttribute('target_span');
  }
}

export class DataOciDevopsRepositoryFileDiffChangesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsRepositoryFileDiffChangesOutputReference {
    return new DataOciDevopsRepositoryFileDiffChangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/devops_repository_file_diff oci_devops_repository_file_diff}
*/
export class DataOciDevopsRepositoryFileDiff extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_repository_file_diff";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDevopsRepositoryFileDiff resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDevopsRepositoryFileDiff to import
  * @param importFromId The id of the existing DataOciDevopsRepositoryFileDiff that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/devops_repository_file_diff#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDevopsRepositoryFileDiff to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_repository_file_diff", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/devops_repository_file_diff oci_devops_repository_file_diff} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDevopsRepositoryFileDiffConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDevopsRepositoryFileDiffConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_repository_file_diff',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseVersion = config.baseVersion;
    this._filePath = config.filePath;
    this._id = config.id;
    this._isComparisonFromMergeBase = config.isComparisonFromMergeBase;
    this._repositoryId = config.repositoryId;
    this._targetVersion = config.targetVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_conflicts_in_file - computed: true, optional: false, required: false
  public get areConflictsInFile() {
    return this.getBooleanAttribute('are_conflicts_in_file');
  }

  // base_version - computed: false, optional: false, required: true
  private _baseVersion?: string; 
  public get baseVersion() {
    return this.getStringAttribute('base_version');
  }
  public set baseVersion(value: string) {
    this._baseVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseVersionInput() {
    return this._baseVersion;
  }

  // changes - computed: true, optional: false, required: false
  private _changes = new DataOciDevopsRepositoryFileDiffChangesList(this, "changes", false);
  public get changes() {
    return this._changes;
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
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

  // is_binary - computed: true, optional: false, required: false
  public get isBinary() {
    return this.getBooleanAttribute('is_binary');
  }

  // is_comparison_from_merge_base - computed: false, optional: true, required: false
  private _isComparisonFromMergeBase?: boolean | cdktf.IResolvable; 
  public get isComparisonFromMergeBase() {
    return this.getBooleanAttribute('is_comparison_from_merge_base');
  }
  public set isComparisonFromMergeBase(value: boolean | cdktf.IResolvable) {
    this._isComparisonFromMergeBase = value;
  }
  public resetIsComparisonFromMergeBase() {
    this._isComparisonFromMergeBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isComparisonFromMergeBaseInput() {
    return this._isComparisonFromMergeBase;
  }

  // is_large - computed: true, optional: false, required: false
  public get isLarge() {
    return this.getBooleanAttribute('is_large');
  }

  // new_id - computed: true, optional: false, required: false
  public get newId() {
    return this.getStringAttribute('new_id');
  }

  // new_path - computed: true, optional: false, required: false
  public get newPath() {
    return this.getStringAttribute('new_path');
  }

  // old_id - computed: true, optional: false, required: false
  public get oldId() {
    return this.getStringAttribute('old_id');
  }

  // old_path - computed: true, optional: false, required: false
  public get oldPath() {
    return this.getStringAttribute('old_path');
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // target_version - computed: false, optional: false, required: true
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_version: cdktf.stringToTerraform(this._baseVersion),
      file_path: cdktf.stringToTerraform(this._filePath),
      id: cdktf.stringToTerraform(this._id),
      is_comparison_from_merge_base: cdktf.booleanToTerraform(this._isComparisonFromMergeBase),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      target_version: cdktf.stringToTerraform(this._targetVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_version: {
        value: cdktf.stringToHclTerraform(this._baseVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
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
      is_comparison_from_merge_base: {
        value: cdktf.booleanToHclTerraform(this._isComparisonFromMergeBase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_version: {
        value: cdktf.stringToHclTerraform(this._targetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
