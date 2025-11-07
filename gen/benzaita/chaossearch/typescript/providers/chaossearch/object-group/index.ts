// https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array flattening level. 0 - disabled, -1 - unlimited, >1 - the respective flattening level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#array_flatten_depth ObjectGroup#array_flatten_depth}
  */
  readonly arrayFlattenDepth?: number;
  /**
  * A map specifying names of columns to rename (keys) and what to rename them to (values)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#column_renames ObjectGroup#column_renames}
  */
  readonly columnRenames?: { [key: string]: string };
  /**
  * An optional map specifying column types defined statically. Supported values are: TIMEVAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#column_types ObjectGroup#column_types}
  */
  readonly columnTypes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#compression ObjectGroup#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#description ObjectGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#filter_json ObjectGroup#filter_json}
  */
  readonly filterJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#format ObjectGroup#format}
  */
  readonly format: string;
  /**
  * Specifies whether flatten JSON arrays horizontally (into columns) or vertically (into rows)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#horizontal ObjectGroup#horizontal}
  */
  readonly horizontal: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#id ObjectGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of days to keep the data before deleting it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#index_retention ObjectGroup#index_retention}
  */
  readonly indexRetention?: number;
  /**
  * Works in connection with the `column_selection`, dictates whether to keep the fields filtered out by the column_selection in a separate field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#keep_original ObjectGroup#keep_original}
  */
  readonly keepOriginal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#live_events_sqs_arn ObjectGroup#live_events_sqs_arn}
  */
  readonly liveEventsSqsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#name ObjectGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#partition_by ObjectGroup#partition_by}
  */
  readonly partitionBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#pattern ObjectGroup#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#source_bucket ObjectGroup#source_bucket}
  */
  readonly sourceBucket: string;
  /**
  * column_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#column_selection ObjectGroup#column_selection}
  */
  readonly columnSelection?: ObjectGroupColumnSelection[] | cdktf.IResolvable;
}
export interface ObjectGroupColumnSelection {
  /**
  * Only for type=regex, whether to use patterns to include (true) or exclude (false) fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#include ObjectGroup#include}
  */
  readonly include?: boolean | cdktf.IResolvable;
  /**
  * For types 'whitelist' and 'blacklist' - the list of fields to include or exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#includes ObjectGroup#includes}
  */
  readonly includes?: string[];
  /**
  * For type 'regex' - list of regexes to filter fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#patterns ObjectGroup#patterns}
  */
  readonly patterns?: string[];
  /**
  * Column selection type: whitelist, blacklist, regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#type ObjectGroup#type}
  */
  readonly type: string;
}

export function objectGroupColumnSelectionToTerraform(struct?: ObjectGroupColumnSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include: cdktf.booleanToTerraform(struct!.include),
    includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includes),
    patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patterns),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectGroupColumnSelectionToHclTerraform(struct?: ObjectGroupColumnSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include: {
      value: cdktf.booleanToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    includes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectGroupColumnSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectGroupColumnSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    if (this._patterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectGroupColumnSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include = undefined;
      this._includes = undefined;
      this._patterns = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._include = value.include;
      this._includes = value.includes;
      this._patterns = value.patterns;
      this._type = value.type;
    }
  }

  // include - computed: false, optional: true, required: false
  private _include?: boolean | cdktf.IResolvable; 
  public get include() {
    return this.getBooleanAttribute('include');
  }
  public set include(value: boolean | cdktf.IResolvable) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return cdktf.Fn.tolist(this.getListAttribute('includes'));
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns?: string[]; 
  public get patterns() {
    return cdktf.Fn.tolist(this.getListAttribute('patterns'));
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
}

export class ObjectGroupColumnSelectionList extends cdktf.ComplexList {
  public internalValue? : ObjectGroupColumnSelection[] | cdktf.IResolvable

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
  public get(index: number): ObjectGroupColumnSelectionOutputReference {
    return new ObjectGroupColumnSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group chaossearch_object_group}
*/
export class ObjectGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chaossearch_object_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectGroup to import
  * @param importFromId The id of the existing ObjectGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chaossearch_object_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/benzaita/chaossearch/0.12.4/docs/resources/object_group chaossearch_object_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'chaossearch_object_group',
      terraformGeneratorMetadata: {
        providerName: 'chaossearch',
        providerVersion: '0.12.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arrayFlattenDepth = config.arrayFlattenDepth;
    this._columnRenames = config.columnRenames;
    this._columnTypes = config.columnTypes;
    this._compression = config.compression;
    this._description = config.description;
    this._filterJson = config.filterJson;
    this._format = config.format;
    this._horizontal = config.horizontal;
    this._id = config.id;
    this._indexRetention = config.indexRetention;
    this._keepOriginal = config.keepOriginal;
    this._liveEventsSqsArn = config.liveEventsSqsArn;
    this._name = config.name;
    this._partitionBy = config.partitionBy;
    this._pattern = config.pattern;
    this._sourceBucket = config.sourceBucket;
    this._columnSelection.internalValue = config.columnSelection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array_flatten_depth - computed: false, optional: true, required: false
  private _arrayFlattenDepth?: number; 
  public get arrayFlattenDepth() {
    return this.getNumberAttribute('array_flatten_depth');
  }
  public set arrayFlattenDepth(value: number) {
    this._arrayFlattenDepth = value;
  }
  public resetArrayFlattenDepth() {
    this._arrayFlattenDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayFlattenDepthInput() {
    return this._arrayFlattenDepth;
  }

  // column_renames - computed: false, optional: true, required: false
  private _columnRenames?: { [key: string]: string }; 
  public get columnRenames() {
    return this.getStringMapAttribute('column_renames');
  }
  public set columnRenames(value: { [key: string]: string }) {
    this._columnRenames = value;
  }
  public resetColumnRenames() {
    this._columnRenames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnRenamesInput() {
    return this._columnRenames;
  }

  // column_types - computed: false, optional: true, required: false
  private _columnTypes?: { [key: string]: string }; 
  public get columnTypes() {
    return this.getStringMapAttribute('column_types');
  }
  public set columnTypes(value: { [key: string]: string }) {
    this._columnTypes = value;
  }
  public resetColumnTypes() {
    this._columnTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTypesInput() {
    return this._columnTypes;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
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

  // filter_json - computed: false, optional: true, required: false
  private _filterJson?: string; 
  public get filterJson() {
    return this.getStringAttribute('filter_json');
  }
  public set filterJson(value: string) {
    this._filterJson = value;
  }
  public resetFilterJson() {
    this._filterJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterJsonInput() {
    return this._filterJson;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // horizontal - computed: false, optional: false, required: true
  private _horizontal?: boolean | cdktf.IResolvable; 
  public get horizontal() {
    return this.getBooleanAttribute('horizontal');
  }
  public set horizontal(value: boolean | cdktf.IResolvable) {
    this._horizontal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalInput() {
    return this._horizontal;
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

  // index_retention - computed: false, optional: true, required: false
  private _indexRetention?: number; 
  public get indexRetention() {
    return this.getNumberAttribute('index_retention');
  }
  public set indexRetention(value: number) {
    this._indexRetention = value;
  }
  public resetIndexRetention() {
    this._indexRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRetentionInput() {
    return this._indexRetention;
  }

  // keep_original - computed: false, optional: true, required: false
  private _keepOriginal?: boolean | cdktf.IResolvable; 
  public get keepOriginal() {
    return this.getBooleanAttribute('keep_original');
  }
  public set keepOriginal(value: boolean | cdktf.IResolvable) {
    this._keepOriginal = value;
  }
  public resetKeepOriginal() {
    this._keepOriginal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepOriginalInput() {
    return this._keepOriginal;
  }

  // live_events_sqs_arn - computed: false, optional: true, required: false
  private _liveEventsSqsArn?: string; 
  public get liveEventsSqsArn() {
    return this.getStringAttribute('live_events_sqs_arn');
  }
  public set liveEventsSqsArn(value: string) {
    this._liveEventsSqsArn = value;
  }
  public resetLiveEventsSqsArn() {
    this._liveEventsSqsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveEventsSqsArnInput() {
    return this._liveEventsSqsArn;
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

  // partition_by - computed: false, optional: true, required: false
  private _partitionBy?: string; 
  public get partitionBy() {
    return this.getStringAttribute('partition_by');
  }
  public set partitionBy(value: string) {
    this._partitionBy = value;
  }
  public resetPartitionBy() {
    this._partitionBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionByInput() {
    return this._partitionBy;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // source_bucket - computed: false, optional: false, required: true
  private _sourceBucket?: string; 
  public get sourceBucket() {
    return this.getStringAttribute('source_bucket');
  }
  public set sourceBucket(value: string) {
    this._sourceBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBucketInput() {
    return this._sourceBucket;
  }

  // column_selection - computed: false, optional: true, required: false
  private _columnSelection = new ObjectGroupColumnSelectionList(this, "column_selection", true);
  public get columnSelection() {
    return this._columnSelection;
  }
  public putColumnSelection(value: ObjectGroupColumnSelection[] | cdktf.IResolvable) {
    this._columnSelection.internalValue = value;
  }
  public resetColumnSelection() {
    this._columnSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSelectionInput() {
    return this._columnSelection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      array_flatten_depth: cdktf.numberToTerraform(this._arrayFlattenDepth),
      column_renames: cdktf.hashMapper(cdktf.stringToTerraform)(this._columnRenames),
      column_types: cdktf.hashMapper(cdktf.stringToTerraform)(this._columnTypes),
      compression: cdktf.stringToTerraform(this._compression),
      description: cdktf.stringToTerraform(this._description),
      filter_json: cdktf.stringToTerraform(this._filterJson),
      format: cdktf.stringToTerraform(this._format),
      horizontal: cdktf.booleanToTerraform(this._horizontal),
      id: cdktf.stringToTerraform(this._id),
      index_retention: cdktf.numberToTerraform(this._indexRetention),
      keep_original: cdktf.booleanToTerraform(this._keepOriginal),
      live_events_sqs_arn: cdktf.stringToTerraform(this._liveEventsSqsArn),
      name: cdktf.stringToTerraform(this._name),
      partition_by: cdktf.stringToTerraform(this._partitionBy),
      pattern: cdktf.stringToTerraform(this._pattern),
      source_bucket: cdktf.stringToTerraform(this._sourceBucket),
      column_selection: cdktf.listMapper(objectGroupColumnSelectionToTerraform, true)(this._columnSelection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      array_flatten_depth: {
        value: cdktf.numberToHclTerraform(this._arrayFlattenDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      column_renames: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._columnRenames),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      column_types: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._columnTypes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      compression: {
        value: cdktf.stringToHclTerraform(this._compression),
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
      filter_json: {
        value: cdktf.stringToHclTerraform(this._filterJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      horizontal: {
        value: cdktf.booleanToHclTerraform(this._horizontal),
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
      index_retention: {
        value: cdktf.numberToHclTerraform(this._indexRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_original: {
        value: cdktf.booleanToHclTerraform(this._keepOriginal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      live_events_sqs_arn: {
        value: cdktf.stringToHclTerraform(this._liveEventsSqsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_by: {
        value: cdktf.stringToHclTerraform(this._partitionBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_bucket: {
        value: cdktf.stringToHclTerraform(this._sourceBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_selection: {
        value: cdktf.listMapperHcl(objectGroupColumnSelectionToHclTerraform, true)(this._columnSelection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ObjectGroupColumnSelectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
