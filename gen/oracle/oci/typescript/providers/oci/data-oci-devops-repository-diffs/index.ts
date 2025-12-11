// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDevopsRepositoryDiffsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}
  */
  readonly baseVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}
  */
  readonly isComparisonFromMergeBase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}
  */
  readonly repositoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}
  */
  readonly targetRepositoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}
  */
  readonly targetVersion: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#filter DataOciDevopsRepositoryDiffs#filter}
  */
  readonly filter?: DataOciDevopsRepositoryDiffsFilter[] | cdktf.IResolvable;
}
export interface DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines {
}

export function dataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesToTerraform(struct?: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesToHclTerraform(struct?: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines | undefined) {
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

export class DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference {
    return new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections {
}

export function dataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsToTerraform(struct?: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsToHclTerraform(struct?: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lines - computed: true, optional: false, required: false
  private _lines = new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList(this, "lines", false);
  public get lines() {
    return this._lines;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference {
    return new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges {
}

export function dataOciDevopsRepositoryDiffsDiffCollectionItemsChangesToTerraform(struct?: DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsRepositoryDiffsDiffCollectionItemsChangesToHclTerraform(struct?: DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges | undefined) {
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
  private _diffSections = new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList(this, "diff_sections", false);
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

export class DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference {
    return new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsRepositoryDiffsDiffCollectionItems {
}

export function dataOciDevopsRepositoryDiffsDiffCollectionItemsToTerraform(struct?: DataOciDevopsRepositoryDiffsDiffCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsRepositoryDiffsDiffCollectionItemsToHclTerraform(struct?: DataOciDevopsRepositoryDiffsDiffCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsRepositoryDiffsDiffCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsRepositoryDiffsDiffCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_conflicts_in_file - computed: true, optional: false, required: false
  public get areConflictsInFile() {
    return this.getBooleanAttribute('are_conflicts_in_file');
  }

  // changes - computed: true, optional: false, required: false
  private _changes = new DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList(this, "changes", false);
  public get changes() {
    return this._changes;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // is_binary - computed: true, optional: false, required: false
  public get isBinary() {
    return this.getBooleanAttribute('is_binary');
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
}

export class DataOciDevopsRepositoryDiffsDiffCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference {
    return new DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsRepositoryDiffsDiffCollection {
}

export function dataOciDevopsRepositoryDiffsDiffCollectionToTerraform(struct?: DataOciDevopsRepositoryDiffsDiffCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsRepositoryDiffsDiffCollectionToHclTerraform(struct?: DataOciDevopsRepositoryDiffsDiffCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsRepositoryDiffsDiffCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsRepositoryDiffsDiffCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsRepositoryDiffsDiffCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDevopsRepositoryDiffsDiffCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDevopsRepositoryDiffsDiffCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDevopsRepositoryDiffsDiffCollectionOutputReference {
    return new DataOciDevopsRepositoryDiffsDiffCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsRepositoryDiffsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#name DataOciDevopsRepositoryDiffs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#regex DataOciDevopsRepositoryDiffs#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#values DataOciDevopsRepositoryDiffs#values}
  */
  readonly values: string[];
}

export function dataOciDevopsRepositoryDiffsFilterToTerraform(struct?: DataOciDevopsRepositoryDiffsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDevopsRepositoryDiffsFilterToHclTerraform(struct?: DataOciDevopsRepositoryDiffsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDevopsRepositoryDiffsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDevopsRepositoryDiffsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsRepositoryDiffsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDevopsRepositoryDiffsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDevopsRepositoryDiffsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDevopsRepositoryDiffsFilterOutputReference {
    return new DataOciDevopsRepositoryDiffsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs oci_devops_repository_diffs}
*/
export class DataOciDevopsRepositoryDiffs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_repository_diffs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDevopsRepositoryDiffs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDevopsRepositoryDiffs to import
  * @param importFromId The id of the existing DataOciDevopsRepositoryDiffs that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDevopsRepositoryDiffs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_repository_diffs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/devops_repository_diffs oci_devops_repository_diffs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDevopsRepositoryDiffsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDevopsRepositoryDiffsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_repository_diffs',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._id = config.id;
    this._isComparisonFromMergeBase = config.isComparisonFromMergeBase;
    this._repositoryId = config.repositoryId;
    this._targetRepositoryId = config.targetRepositoryId;
    this._targetVersion = config.targetVersion;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // diff_collection - computed: true, optional: false, required: false
  private _diffCollection = new DataOciDevopsRepositoryDiffsDiffCollectionList(this, "diff_collection", false);
  public get diffCollection() {
    return this._diffCollection;
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

  // target_repository_id - computed: false, optional: true, required: false
  private _targetRepositoryId?: string; 
  public get targetRepositoryId() {
    return this.getStringAttribute('target_repository_id');
  }
  public set targetRepositoryId(value: string) {
    this._targetRepositoryId = value;
  }
  public resetTargetRepositoryId() {
    this._targetRepositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRepositoryIdInput() {
    return this._targetRepositoryId;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDevopsRepositoryDiffsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDevopsRepositoryDiffsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_version: cdktf.stringToTerraform(this._baseVersion),
      id: cdktf.stringToTerraform(this._id),
      is_comparison_from_merge_base: cdktf.booleanToTerraform(this._isComparisonFromMergeBase),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      target_repository_id: cdktf.stringToTerraform(this._targetRepositoryId),
      target_version: cdktf.stringToTerraform(this._targetVersion),
      filter: cdktf.listMapper(dataOciDevopsRepositoryDiffsFilterToTerraform, true)(this._filter.internalValue),
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
      target_repository_id: {
        value: cdktf.stringToHclTerraform(this._targetRepositoryId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciDevopsRepositoryDiffsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDevopsRepositoryDiffsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
