// https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckRepositoryFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the category the check belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#category CheckRepositoryFile#category}
  */
  readonly category: string;
  /**
  * Whether the check looks for the existence of a directory instead of a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#directory_search CheckRepositoryFile#directory_search}
  */
  readonly directorySearch: boolean | cdktf.IResolvable;
  /**
  * The date when the check will be automatically enabled.
  *  If you use this field you should add both 'enabled' and 'enable_on' to the lifecycle ignore_changes settings.
  *  See example in opslevel_check_manual for proper configuration.
  *  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#enable_on CheckRepositoryFile#enable_on}
  */
  readonly enableOn?: string;
  /**
  * Whether the check is enabled or not.  Do not use this field in tandem with 'enable_on'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#enabled CheckRepositoryFile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A condition that should be satisfied. One of `belongs_to`, `contains`, `does_not_contain`, `does_not_equal`, `does_not_exist`, `does_not_match`, `does_not_match_regex`, `ends_with`, `equals`, `exists`, `greater_than_or_equal_to`, `less_than_or_equal_to`, `matches`, `matches_regex`, `satisfies_jq_expression`, `satisfies_version_constraint`, `starts_with`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#file_contents_predicate CheckRepositoryFile#file_contents_predicate}
  */
  readonly fileContentsPredicate?: CheckRepositoryFileFileContentsPredicate;
  /**
  * Restrict the search to certain file paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#filepaths CheckRepositoryFile#filepaths}
  */
  readonly filepaths: string[];
  /**
  * The id of the filter of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#filter CheckRepositoryFile#filter}
  */
  readonly filter?: string;
  /**
  * The id of the level the check belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#level CheckRepositoryFile#level}
  */
  readonly level: string;
  /**
  * The display name of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#name CheckRepositoryFile#name}
  */
  readonly name: string;
  /**
  * Additional information to display to the service owner about the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#notes CheckRepositoryFile#notes}
  */
  readonly notes?: string;
  /**
  * The id of the team that owns the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#owner CheckRepositoryFile#owner}
  */
  readonly owner?: string;
  /**
  * Whether the checks looks at the absolute root of a repo or the relative root (the directory specified when attached a repo to a service).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#use_absolute_root CheckRepositoryFile#use_absolute_root}
  */
  readonly useAbsoluteRoot: boolean | cdktf.IResolvable;
}
export interface CheckRepositoryFileFileContentsPredicate {
  /**
  * A condition that should be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#type CheckRepositoryFile#type}
  */
  readonly type: string;
  /**
  * The condition value used by the predicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#value CheckRepositoryFile#value}
  */
  readonly value?: string;
}

export function checkRepositoryFileFileContentsPredicateToTerraform(struct?: CheckRepositoryFileFileContentsPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function checkRepositoryFileFileContentsPredicateToHclTerraform(struct?: CheckRepositoryFileFileContentsPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckRepositoryFileFileContentsPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CheckRepositoryFileFileContentsPredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckRepositoryFileFileContentsPredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file opslevel_check_repository_file}
*/
export class CheckRepositoryFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_check_repository_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckRepositoryFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckRepositoryFile to import
  * @param importFromId The id of the existing CheckRepositoryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckRepositoryFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_check_repository_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/check_repository_file opslevel_check_repository_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckRepositoryFileConfig
  */
  public constructor(scope: Construct, id: string, config: CheckRepositoryFileConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_check_repository_file',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._directorySearch = config.directorySearch;
    this._enableOn = config.enableOn;
    this._enabled = config.enabled;
    this._fileContentsPredicate.internalValue = config.fileContentsPredicate;
    this._filepaths = config.filepaths;
    this._filter = config.filter;
    this._level = config.level;
    this._name = config.name;
    this._notes = config.notes;
    this._owner = config.owner;
    this._useAbsoluteRoot = config.useAbsoluteRoot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // directory_search - computed: false, optional: false, required: true
  private _directorySearch?: boolean | cdktf.IResolvable; 
  public get directorySearch() {
    return this.getBooleanAttribute('directory_search');
  }
  public set directorySearch(value: boolean | cdktf.IResolvable) {
    this._directorySearch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directorySearchInput() {
    return this._directorySearch;
  }

  // enable_on - computed: false, optional: true, required: false
  private _enableOn?: string; 
  public get enableOn() {
    return this.getStringAttribute('enable_on');
  }
  public set enableOn(value: string) {
    this._enableOn = value;
  }
  public resetEnableOn() {
    this._enableOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnInput() {
    return this._enableOn;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // file_contents_predicate - computed: false, optional: true, required: false
  private _fileContentsPredicate = new CheckRepositoryFileFileContentsPredicateOutputReference(this, "file_contents_predicate");
  public get fileContentsPredicate() {
    return this._fileContentsPredicate;
  }
  public putFileContentsPredicate(value: CheckRepositoryFileFileContentsPredicate) {
    this._fileContentsPredicate.internalValue = value;
  }
  public resetFileContentsPredicate() {
    this._fileContentsPredicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentsPredicateInput() {
    return this._fileContentsPredicate.internalValue;
  }

  // filepaths - computed: false, optional: false, required: true
  private _filepaths?: string[]; 
  public get filepaths() {
    return this.getListAttribute('filepaths');
  }
  public set filepaths(value: string[]) {
    this._filepaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filepathsInput() {
    return this._filepaths;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // use_absolute_root - computed: false, optional: false, required: true
  private _useAbsoluteRoot?: boolean | cdktf.IResolvable; 
  public get useAbsoluteRoot() {
    return this.getBooleanAttribute('use_absolute_root');
  }
  public set useAbsoluteRoot(value: boolean | cdktf.IResolvable) {
    this._useAbsoluteRoot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useAbsoluteRootInput() {
    return this._useAbsoluteRoot;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      directory_search: cdktf.booleanToTerraform(this._directorySearch),
      enable_on: cdktf.stringToTerraform(this._enableOn),
      enabled: cdktf.booleanToTerraform(this._enabled),
      file_contents_predicate: checkRepositoryFileFileContentsPredicateToTerraform(this._fileContentsPredicate.internalValue),
      filepaths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filepaths),
      filter: cdktf.stringToTerraform(this._filter),
      level: cdktf.stringToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      owner: cdktf.stringToTerraform(this._owner),
      use_absolute_root: cdktf.booleanToTerraform(this._useAbsoluteRoot),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_search: {
        value: cdktf.booleanToHclTerraform(this._directorySearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_on: {
        value: cdktf.stringToHclTerraform(this._enableOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_contents_predicate: {
        value: checkRepositoryFileFileContentsPredicateToHclTerraform(this._fileContentsPredicate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CheckRepositoryFileFileContentsPredicate",
      },
      filepaths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filepaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_absolute_root: {
        value: cdktf.booleanToHclTerraform(this._useAbsoluteRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
