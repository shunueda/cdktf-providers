// https://registry.terraform.io/providers/kota65535/unarchive/1.0.0/docs/data-sources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUnarchiveFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Glob patterns to exclude files to extract. Defaults to `[]` (no file excluded).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kota65535/unarchive/1.0.0/docs/data-sources/file#excludes DataUnarchiveFile#excludes}
  */
  readonly excludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kota65535/unarchive/1.0.0/docs/data-sources/file#id DataUnarchiveFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Path of the directory where files are extracted. Defaults to `.`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kota65535/unarchive/1.0.0/docs/data-sources/file#output_dir DataUnarchiveFile#output_dir}
  */
  readonly outputDir?: string;
  /**
  * Glob patterns to filter files to extract. Defaults to `["**"]` (all files included).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kota65535/unarchive/1.0.0/docs/data-sources/file#patterns DataUnarchiveFile#patterns}
  */
  readonly patterns?: string[];
  /**
  * Path of the archive file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kota65535/unarchive/1.0.0/docs/data-sources/file#source_file DataUnarchiveFile#source_file}
  */
  readonly sourceFile: string;
  /**
  * The type of the archive file. NOTE: `zip` is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kota65535/unarchive/1.0.0/docs/data-sources/file#type DataUnarchiveFile#type}
  */
  readonly type: string;
}
export interface DataUnarchiveFileOutputFiles {
}

export function dataUnarchiveFileOutputFilesToTerraform(struct?: DataUnarchiveFileOutputFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUnarchiveFileOutputFilesToHclTerraform(struct?: DataUnarchiveFileOutputFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUnarchiveFileOutputFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUnarchiveFileOutputFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUnarchiveFileOutputFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataUnarchiveFileOutputFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataUnarchiveFileOutputFilesOutputReference {
    return new DataUnarchiveFileOutputFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kota65535/unarchive/1.0.0/docs/data-sources/file unarchive_file}
*/
export class DataUnarchiveFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unarchive_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUnarchiveFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUnarchiveFile to import
  * @param importFromId The id of the existing DataUnarchiveFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/kota65535/unarchive/1.0.0/docs/data-sources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUnarchiveFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unarchive_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kota65535/unarchive/1.0.0/docs/data-sources/file unarchive_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUnarchiveFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataUnarchiveFileConfig) {
    super(scope, id, {
      terraformResourceType: 'unarchive_file',
      terraformGeneratorMetadata: {
        providerName: 'unarchive',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludes = config.excludes;
    this._id = config.id;
    this._outputDir = config.outputDir;
    this._patterns = config.patterns;
    this._sourceFile = config.sourceFile;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
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

  // output_dir - computed: false, optional: true, required: false
  private _outputDir?: string; 
  public get outputDir() {
    return this.getStringAttribute('output_dir');
  }
  public set outputDir(value: string) {
    this._outputDir = value;
  }
  public resetOutputDir() {
    this._outputDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDirInput() {
    return this._outputDir;
  }

  // output_files - computed: true, optional: false, required: false
  private _outputFiles = new DataUnarchiveFileOutputFilesList(this, "output_files", false);
  public get outputFiles() {
    return this._outputFiles;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns?: string[]; 
  public get patterns() {
    return this.getListAttribute('patterns');
  }
  public set patterns(value: string[]) {
    this._patterns = value;
  }
  public resetPatterns() {
    this._patterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns;
  }

  // source_file - computed: false, optional: false, required: true
  private _sourceFile?: string; 
  public get sourceFile() {
    return this.getStringAttribute('source_file');
  }
  public set sourceFile(value: string) {
    this._sourceFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileInput() {
    return this._sourceFile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludes),
      id: cdktf.stringToTerraform(this._id),
      output_dir: cdktf.stringToTerraform(this._outputDir),
      patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._patterns),
      source_file: cdktf.stringToTerraform(this._sourceFile),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      excludes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_dir: {
        value: cdktf.stringToHclTerraform(this._outputDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._patterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_file: {
        value: cdktf.stringToHclTerraform(this._sourceFile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
