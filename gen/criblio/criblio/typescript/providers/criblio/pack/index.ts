// https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#allow_custom_functions Pack#allow_custom_functions}
  */
  readonly allowCustomFunctions?: boolean | cdktf.IResolvable;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#author Pack#author}
  */
  readonly author?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#description Pack#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#disabled Pack#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#display_name Pack#display_name}
  */
  readonly displayName?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#exports Pack#exports}
  */
  readonly exports?: string[];
  /**
  * the file to upload. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#filename Pack#filename}
  */
  readonly filename?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#force Pack#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * The consumer group to which this instance belongs. Defaults to 'Cribl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#group_id Pack#group_id}
  */
  readonly groupId: string;
  /**
  * Pack name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#id Pack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#inputs Pack#inputs}
  */
  readonly inputs?: number;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#is_disabled Pack#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#min_log_stream_version Pack#min_log_stream_version}
  */
  readonly minLogStreamVersion?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#outputs Pack#outputs}
  */
  readonly outputs?: number;
  /**
  * body string required Pack source. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#source Pack#source}
  */
  readonly source?: string;
  /**
  * body string optional Specify a branch, tag or a semver spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#spec Pack#spec}
  */
  readonly spec?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#tags Pack#tags}
  */
  readonly tags?: PackTags;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#version Pack#version}
  */
  readonly version?: string;
}
export interface PackItemsTags {
}

export function packItemsTagsToTerraform(struct?: PackItemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function packItemsTagsToHclTerraform(struct?: PackItemsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PackItemsTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PackItemsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackItemsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getListAttribute('data_type');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getListAttribute('domain');
  }

  // streamtags - computed: true, optional: false, required: false
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }

  // technology - computed: true, optional: false, required: false
  public get technology() {
    return this.getListAttribute('technology');
  }
}
export interface PackItems {
}

export function packItemsToTerraform(struct?: PackItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function packItemsToHclTerraform(struct?: PackItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PackItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PackItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // exports - computed: true, optional: false, required: false
  public get exports() {
    return this.getListAttribute('exports');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inputs - computed: true, optional: false, required: false
  public get inputs() {
    return this.getNumberAttribute('inputs');
  }

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // min_log_stream_version - computed: true, optional: false, required: false
  public get minLogStreamVersion() {
    return this.getStringAttribute('min_log_stream_version');
  }

  // outputs - computed: true, optional: false, required: false
  public get outputs() {
    return this.getNumberAttribute('outputs');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new cdktf.StringMap(this, "settings");
  public get settings() {
    return this._settings;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new PackItemsTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return this.getStringAttribute('warnings');
  }
}

export class PackItemsList extends cdktf.ComplexList {

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
  public get(index: number): PackItemsOutputReference {
    return new PackItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PackTags {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#data_type Pack#data_type}
  */
  readonly dataType: string[];
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#domain Pack#domain}
  */
  readonly domain: string[];
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#streamtags Pack#streamtags}
  */
  readonly streamtags: string[];
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#technology Pack#technology}
  */
  readonly technology: string[];
}

export function packTagsToTerraform(struct?: PackTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataType),
    domain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domain),
    streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streamtags),
    technology: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.technology),
  }
}


export function packTagsToHclTerraform(struct?: PackTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    streamtags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streamtags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    technology: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.technology),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PackTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._streamtags !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamtags = this._streamtags;
    }
    if (this._technology !== undefined) {
      hasAnyValues = true;
      internalValueResult.technology = this._technology;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._domain = undefined;
      this._streamtags = undefined;
      this._technology = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._domain = value.domain;
      this._streamtags = value.streamtags;
      this._technology = value.technology;
    }
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string[]; 
  public get dataType() {
    return this.getListAttribute('data_type');
  }
  public set dataType(value: string[]) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string[]; 
  public get domain() {
    return this.getListAttribute('domain');
  }
  public set domain(value: string[]) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // streamtags - computed: false, optional: false, required: true
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // technology - computed: false, optional: false, required: true
  private _technology?: string[]; 
  public get technology() {
    return this.getListAttribute('technology');
  }
  public set technology(value: string[]) {
    this._technology = value;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack criblio_pack}
*/
export class Pack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_pack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pack to import
  * @param importFromId The id of the existing Pack that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_pack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/pack criblio_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackConfig
  */
  public constructor(scope: Construct, id: string, config: PackConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_pack',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.27',
        providerVersionConstraint: '1.20.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowCustomFunctions = config.allowCustomFunctions;
    this._author = config.author;
    this._description = config.description;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._exports = config.exports;
    this._filename = config.filename;
    this._force = config.force;
    this._groupId = config.groupId;
    this._id = config.id;
    this._inputs = config.inputs;
    this._isDisabled = config.isDisabled;
    this._minLogStreamVersion = config.minLogStreamVersion;
    this._outputs = config.outputs;
    this._source = config.source;
    this._spec = config.spec;
    this._tags.internalValue = config.tags;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_custom_functions - computed: false, optional: true, required: false
  private _allowCustomFunctions?: boolean | cdktf.IResolvable; 
  public get allowCustomFunctions() {
    return this.getBooleanAttribute('allow_custom_functions');
  }
  public set allowCustomFunctions(value: boolean | cdktf.IResolvable) {
    this._allowCustomFunctions = value;
  }
  public resetAllowCustomFunctions() {
    this._allowCustomFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCustomFunctionsInput() {
    return this._allowCustomFunctions;
  }

  // author - computed: false, optional: true, required: false
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  public resetAuthor() {
    this._author = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // exports - computed: false, optional: true, required: false
  private _exports?: string[]; 
  public get exports() {
    return this.getListAttribute('exports');
  }
  public set exports(value: string[]) {
    this._exports = value;
  }
  public resetExports() {
    this._exports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportsInput() {
    return this._exports;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs?: number; 
  public get inputs() {
    return this.getNumberAttribute('inputs');
  }
  public set inputs(value: number) {
    this._inputs = value;
  }
  public resetInputs() {
    this._inputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // is_disabled - computed: false, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // items - computed: true, optional: false, required: false
  private _items = new PackItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // min_log_stream_version - computed: false, optional: true, required: false
  private _minLogStreamVersion?: string; 
  public get minLogStreamVersion() {
    return this.getStringAttribute('min_log_stream_version');
  }
  public set minLogStreamVersion(value: string) {
    this._minLogStreamVersion = value;
  }
  public resetMinLogStreamVersion() {
    this._minLogStreamVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLogStreamVersionInput() {
    return this._minLogStreamVersion;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs?: number; 
  public get outputs() {
    return this.getNumberAttribute('outputs');
  }
  public set outputs(value: number) {
    this._outputs = value;
  }
  public resetOutputs() {
    this._outputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new PackTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: PackTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_custom_functions: cdktf.booleanToTerraform(this._allowCustomFunctions),
      author: cdktf.stringToTerraform(this._author),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      exports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exports),
      filename: cdktf.stringToTerraform(this._filename),
      force: cdktf.booleanToTerraform(this._force),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      inputs: cdktf.numberToTerraform(this._inputs),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      min_log_stream_version: cdktf.stringToTerraform(this._minLogStreamVersion),
      outputs: cdktf.numberToTerraform(this._outputs),
      source: cdktf.stringToTerraform(this._source),
      spec: cdktf.stringToTerraform(this._spec),
      tags: packTagsToTerraform(this._tags.internalValue),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_custom_functions: {
        value: cdktf.booleanToHclTerraform(this._allowCustomFunctions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      author: {
        value: cdktf.stringToHclTerraform(this._author),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inputs: {
        value: cdktf.numberToHclTerraform(this._inputs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_log_stream_version: {
        value: cdktf.stringToHclTerraform(this._minLogStreamVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outputs: {
        value: cdktf.numberToHclTerraform(this._outputs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: packTagsToHclTerraform(this._tags.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PackTags",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
