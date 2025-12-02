// https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportSystemHealthReviewConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#display_name ReportSystemHealthReview#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#id ReportSystemHealthReview#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#name ReportSystemHealthReview#name}
  */
  readonly name: string;
  /**
  * Grouping methods of report table rows [project/service]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#row_group_by ReportSystemHealthReview#row_group_by}
  */
  readonly rowGroupBy: string;
  /**
  * Is report shared for all users with access to included projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#shared ReportSystemHealthReview#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#column ReportSystemHealthReview#column}
  */
  readonly column: ReportSystemHealthReviewColumn[] | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#filters ReportSystemHealthReview#filters}
  */
  readonly filters?: ReportSystemHealthReviewFilters;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#thresholds ReportSystemHealthReview#thresholds}
  */
  readonly thresholds: ReportSystemHealthReviewThresholds;
  /**
  * time_frame block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#time_frame ReportSystemHealthReview#time_frame}
  */
  readonly timeFrame: ReportSystemHealthReviewTimeFrame;
}
export interface ReportSystemHealthReviewColumnLabel {
  /**
  * A key for the label, unique within the associated resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#key ReportSystemHealthReview#key}
  */
  readonly key: string;
  /**
  * A list of unique values for a single key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#values ReportSystemHealthReview#values}
  */
  readonly values: string[];
}

export function reportSystemHealthReviewColumnLabelToTerraform(struct?: ReportSystemHealthReviewColumnLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function reportSystemHealthReviewColumnLabelToHclTerraform(struct?: ReportSystemHealthReviewColumnLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ReportSystemHealthReviewColumnLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportSystemHealthReviewColumnLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSystemHealthReviewColumnLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class ReportSystemHealthReviewColumnLabelList extends cdktf.ComplexList {
  public internalValue? : ReportSystemHealthReviewColumnLabel[] | cdktf.IResolvable

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
  public get(index: number): ReportSystemHealthReviewColumnLabelOutputReference {
    return new ReportSystemHealthReviewColumnLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportSystemHealthReviewColumn {
  /**
  * Column display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#display_name ReportSystemHealthReview#display_name}
  */
  readonly displayName: string;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#label ReportSystemHealthReview#label}
  */
  readonly label: ReportSystemHealthReviewColumnLabel[] | cdktf.IResolvable;
}

export function reportSystemHealthReviewColumnToTerraform(struct?: ReportSystemHealthReviewColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    label: cdktf.listMapper(reportSystemHealthReviewColumnLabelToTerraform, true)(struct!.label),
  }
}


export function reportSystemHealthReviewColumnToHclTerraform(struct?: ReportSystemHealthReviewColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.listMapperHcl(reportSystemHealthReviewColumnLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "list",
      storageClassType: "ReportSystemHealthReviewColumnLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportSystemHealthReviewColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportSystemHealthReviewColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSystemHealthReviewColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._label.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._label.internalValue = value.label;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // label - computed: false, optional: false, required: true
  private _label = new ReportSystemHealthReviewColumnLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: ReportSystemHealthReviewColumnLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }
}

export class ReportSystemHealthReviewColumnList extends cdktf.ComplexList {
  public internalValue? : ReportSystemHealthReviewColumn[] | cdktf.IResolvable

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
  public get(index: number): ReportSystemHealthReviewColumnOutputReference {
    return new ReportSystemHealthReviewColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportSystemHealthReviewFiltersLabel {
  /**
  * A key for the label, unique within the associated resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#key ReportSystemHealthReview#key}
  */
  readonly key: string;
  /**
  * A list of unique values for a single key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#values ReportSystemHealthReview#values}
  */
  readonly values: string[];
}

export function reportSystemHealthReviewFiltersLabelToTerraform(struct?: ReportSystemHealthReviewFiltersLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function reportSystemHealthReviewFiltersLabelToHclTerraform(struct?: ReportSystemHealthReviewFiltersLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ReportSystemHealthReviewFiltersLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportSystemHealthReviewFiltersLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSystemHealthReviewFiltersLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class ReportSystemHealthReviewFiltersLabelList extends cdktf.ComplexList {
  public internalValue? : ReportSystemHealthReviewFiltersLabel[] | cdktf.IResolvable

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
  public get(index: number): ReportSystemHealthReviewFiltersLabelOutputReference {
    return new ReportSystemHealthReviewFiltersLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportSystemHealthReviewFiltersService {
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#name ReportSystemHealthReview#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#project ReportSystemHealthReview#project}
  */
  readonly project: string;
}

export function reportSystemHealthReviewFiltersServiceToTerraform(struct?: ReportSystemHealthReviewFiltersService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function reportSystemHealthReviewFiltersServiceToHclTerraform(struct?: ReportSystemHealthReviewFiltersService | cdktf.IResolvable): any {
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
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportSystemHealthReviewFiltersServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportSystemHealthReviewFiltersService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSystemHealthReviewFiltersService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._project = value.project;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}

export class ReportSystemHealthReviewFiltersServiceList extends cdktf.ComplexList {
  public internalValue? : ReportSystemHealthReviewFiltersService[] | cdktf.IResolvable

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
  public get(index: number): ReportSystemHealthReviewFiltersServiceOutputReference {
    return new ReportSystemHealthReviewFiltersServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportSystemHealthReviewFiltersSlo {
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#name ReportSystemHealthReview#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#project ReportSystemHealthReview#project}
  */
  readonly project: string;
}

export function reportSystemHealthReviewFiltersSloToTerraform(struct?: ReportSystemHealthReviewFiltersSlo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function reportSystemHealthReviewFiltersSloToHclTerraform(struct?: ReportSystemHealthReviewFiltersSlo | cdktf.IResolvable): any {
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
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportSystemHealthReviewFiltersSloOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportSystemHealthReviewFiltersSlo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSystemHealthReviewFiltersSlo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._project = value.project;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}

export class ReportSystemHealthReviewFiltersSloList extends cdktf.ComplexList {
  public internalValue? : ReportSystemHealthReviewFiltersSlo[] | cdktf.IResolvable

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
  public get(index: number): ReportSystemHealthReviewFiltersSloOutputReference {
    return new ReportSystemHealthReviewFiltersSloOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportSystemHealthReviewFilters {
  /**
  * Projects to pull data for report from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#projects ReportSystemHealthReview#projects}
  */
  readonly projects?: string[];
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#label ReportSystemHealthReview#label}
  */
  readonly label?: ReportSystemHealthReviewFiltersLabel[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#service ReportSystemHealthReview#service}
  */
  readonly service?: ReportSystemHealthReviewFiltersService[] | cdktf.IResolvable;
  /**
  * slo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#slo ReportSystemHealthReview#slo}
  */
  readonly slo?: ReportSystemHealthReviewFiltersSlo[] | cdktf.IResolvable;
}

export function reportSystemHealthReviewFiltersToTerraform(struct?: ReportSystemHealthReviewFiltersOutputReference | ReportSystemHealthReviewFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projects),
    label: cdktf.listMapper(reportSystemHealthReviewFiltersLabelToTerraform, true)(struct!.label),
    service: cdktf.listMapper(reportSystemHealthReviewFiltersServiceToTerraform, true)(struct!.service),
    slo: cdktf.listMapper(reportSystemHealthReviewFiltersSloToTerraform, true)(struct!.slo),
  }
}


export function reportSystemHealthReviewFiltersToHclTerraform(struct?: ReportSystemHealthReviewFiltersOutputReference | ReportSystemHealthReviewFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label: {
      value: cdktf.listMapperHcl(reportSystemHealthReviewFiltersLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "list",
      storageClassType: "ReportSystemHealthReviewFiltersLabelList",
    },
    service: {
      value: cdktf.listMapperHcl(reportSystemHealthReviewFiltersServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "ReportSystemHealthReviewFiltersServiceList",
    },
    slo: {
      value: cdktf.listMapperHcl(reportSystemHealthReviewFiltersSloToHclTerraform, true)(struct!.slo),
      isBlock: true,
      type: "list",
      storageClassType: "ReportSystemHealthReviewFiltersSloList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportSystemHealthReviewFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportSystemHealthReviewFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projects !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._slo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slo = this._slo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSystemHealthReviewFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projects = undefined;
      this._label.internalValue = undefined;
      this._service.internalValue = undefined;
      this._slo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projects = value.projects;
      this._label.internalValue = value.label;
      this._service.internalValue = value.service;
      this._slo.internalValue = value.slo;
    }
  }

  // projects - computed: false, optional: true, required: false
  private _projects?: string[]; 
  public get projects() {
    return this.getListAttribute('projects');
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // label - computed: false, optional: true, required: false
  private _label = new ReportSystemHealthReviewFiltersLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: ReportSystemHealthReviewFiltersLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new ReportSystemHealthReviewFiltersServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: ReportSystemHealthReviewFiltersService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // slo - computed: false, optional: true, required: false
  private _slo = new ReportSystemHealthReviewFiltersSloList(this, "slo", false);
  public get slo() {
    return this._slo;
  }
  public putSlo(value: ReportSystemHealthReviewFiltersSlo[] | cdktf.IResolvable) {
    this._slo.internalValue = value;
  }
  public resetSlo() {
    this._slo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloInput() {
    return this._slo.internalValue;
  }
}
export interface ReportSystemHealthReviewThresholds {
  /**
  * Min value for the Green status (e.g. healthy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#green_gt ReportSystemHealthReview#green_gt}
  */
  readonly greenGt: number;
  /**
  * Max value for the Red status (e.g. exhausted budget).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#red_lte ReportSystemHealthReview#red_lte}
  */
  readonly redLte: number;
  /**
  * ShowNoData customizes the report to either show or hide rows with no data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#show_no_data ReportSystemHealthReview#show_no_data}
  */
  readonly showNoData?: boolean | cdktf.IResolvable;
}

export function reportSystemHealthReviewThresholdsToTerraform(struct?: ReportSystemHealthReviewThresholdsOutputReference | ReportSystemHealthReviewThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    green_gt: cdktf.numberToTerraform(struct!.greenGt),
    red_lte: cdktf.numberToTerraform(struct!.redLte),
    show_no_data: cdktf.booleanToTerraform(struct!.showNoData),
  }
}


export function reportSystemHealthReviewThresholdsToHclTerraform(struct?: ReportSystemHealthReviewThresholdsOutputReference | ReportSystemHealthReviewThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    green_gt: {
      value: cdktf.numberToHclTerraform(struct!.greenGt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    red_lte: {
      value: cdktf.numberToHclTerraform(struct!.redLte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show_no_data: {
      value: cdktf.booleanToHclTerraform(struct!.showNoData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportSystemHealthReviewThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportSystemHealthReviewThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greenGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.greenGt = this._greenGt;
    }
    if (this._redLte !== undefined) {
      hasAnyValues = true;
      internalValueResult.redLte = this._redLte;
    }
    if (this._showNoData !== undefined) {
      hasAnyValues = true;
      internalValueResult.showNoData = this._showNoData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSystemHealthReviewThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greenGt = undefined;
      this._redLte = undefined;
      this._showNoData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greenGt = value.greenGt;
      this._redLte = value.redLte;
      this._showNoData = value.showNoData;
    }
  }

  // green_gt - computed: false, optional: false, required: true
  private _greenGt?: number; 
  public get greenGt() {
    return this.getNumberAttribute('green_gt');
  }
  public set greenGt(value: number) {
    this._greenGt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get greenGtInput() {
    return this._greenGt;
  }

  // red_lte - computed: false, optional: false, required: true
  private _redLte?: number; 
  public get redLte() {
    return this.getNumberAttribute('red_lte');
  }
  public set redLte(value: number) {
    this._redLte = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redLteInput() {
    return this._redLte;
  }

  // show_no_data - computed: false, optional: true, required: false
  private _showNoData?: boolean | cdktf.IResolvable; 
  public get showNoData() {
    return this.getBooleanAttribute('show_no_data');
  }
  public set showNoData(value: boolean | cdktf.IResolvable) {
    this._showNoData = value;
  }
  public resetShowNoData() {
    this._showNoData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNoDataInput() {
    return this._showNoData;
  }
}
export interface ReportSystemHealthReviewTimeFrameSnapshot {
  /**
  * Date and time of the past snapshot in RFC3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#date_time ReportSystemHealthReview#date_time}
  */
  readonly dateTime?: string;
  /**
  * The method of reporting time frame [past/latest]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#point ReportSystemHealthReview#point}
  */
  readonly point: string;
  /**
  * The recurrence rule for the report past snapshot. The expected value is a string in RRULE format. Example: `FREQ=MONTHLY;BYMONTHDAY=1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#rrule ReportSystemHealthReview#rrule}
  */
  readonly rrule?: string;
}

export function reportSystemHealthReviewTimeFrameSnapshotToTerraform(struct?: ReportSystemHealthReviewTimeFrameSnapshotOutputReference | ReportSystemHealthReviewTimeFrameSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time: cdktf.stringToTerraform(struct!.dateTime),
    point: cdktf.stringToTerraform(struct!.point),
    rrule: cdktf.stringToTerraform(struct!.rrule),
  }
}


export function reportSystemHealthReviewTimeFrameSnapshotToHclTerraform(struct?: ReportSystemHealthReviewTimeFrameSnapshotOutputReference | ReportSystemHealthReviewTimeFrameSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date_time: {
      value: cdktf.stringToHclTerraform(struct!.dateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point: {
      value: cdktf.stringToHclTerraform(struct!.point),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rrule: {
      value: cdktf.stringToHclTerraform(struct!.rrule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportSystemHealthReviewTimeFrameSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportSystemHealthReviewTimeFrameSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTime = this._dateTime;
    }
    if (this._point !== undefined) {
      hasAnyValues = true;
      internalValueResult.point = this._point;
    }
    if (this._rrule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrule = this._rrule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSystemHealthReviewTimeFrameSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateTime = undefined;
      this._point = undefined;
      this._rrule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateTime = value.dateTime;
      this._point = value.point;
      this._rrule = value.rrule;
    }
  }

  // date_time - computed: false, optional: true, required: false
  private _dateTime?: string; 
  public get dateTime() {
    return this.getStringAttribute('date_time');
  }
  public set dateTime(value: string) {
    this._dateTime = value;
  }
  public resetDateTime() {
    this._dateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeInput() {
    return this._dateTime;
  }

  // point - computed: false, optional: false, required: true
  private _point?: string; 
  public get point() {
    return this.getStringAttribute('point');
  }
  public set point(value: string) {
    this._point = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInput() {
    return this._point;
  }

  // rrule - computed: false, optional: true, required: false
  private _rrule?: string; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string) {
    this._rrule = value;
  }
  public resetRrule() {
    this._rrule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule;
  }
}
export interface ReportSystemHealthReviewTimeFrame {
  /**
  * Timezone name in IANA Time Zone Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#time_zone ReportSystemHealthReview#time_zone}
  */
  readonly timeZone: string;
  /**
  * snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#snapshot ReportSystemHealthReview#snapshot}
  */
  readonly snapshot: ReportSystemHealthReviewTimeFrameSnapshot;
}

export function reportSystemHealthReviewTimeFrameToTerraform(struct?: ReportSystemHealthReviewTimeFrameOutputReference | ReportSystemHealthReviewTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    snapshot: reportSystemHealthReviewTimeFrameSnapshotToTerraform(struct!.snapshot),
  }
}


export function reportSystemHealthReviewTimeFrameToHclTerraform(struct?: ReportSystemHealthReviewTimeFrameOutputReference | ReportSystemHealthReviewTimeFrame): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot: {
      value: reportSystemHealthReviewTimeFrameSnapshotToHclTerraform(struct!.snapshot),
      isBlock: true,
      type: "set",
      storageClassType: "ReportSystemHealthReviewTimeFrameSnapshotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportSystemHealthReviewTimeFrameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportSystemHealthReviewTimeFrame | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._snapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSystemHealthReviewTimeFrame | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeZone = undefined;
      this._snapshot.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeZone = value.timeZone;
      this._snapshot.internalValue = value.snapshot;
    }
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // snapshot - computed: false, optional: false, required: true
  private _snapshot = new ReportSystemHealthReviewTimeFrameSnapshotOutputReference(this, "snapshot");
  public get snapshot() {
    return this._snapshot;
  }
  public putSnapshot(value: ReportSystemHealthReviewTimeFrameSnapshot) {
    this._snapshot.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review nobl9_report_system_health_review}
*/
export class ReportSystemHealthReview extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_report_system_health_review";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportSystemHealthReview resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportSystemHealthReview to import
  * @param importFromId The id of the existing ReportSystemHealthReview that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportSystemHealthReview to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_report_system_health_review", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/report_system_health_review nobl9_report_system_health_review} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportSystemHealthReviewConfig
  */
  public constructor(scope: Construct, id: string, config: ReportSystemHealthReviewConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_report_system_health_review',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.45.0',
        providerVersionConstraint: '0.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._rowGroupBy = config.rowGroupBy;
    this._shared = config.shared;
    this._column.internalValue = config.column;
    this._filters.internalValue = config.filters;
    this._thresholds.internalValue = config.thresholds;
    this._timeFrame.internalValue = config.timeFrame;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // row_group_by - computed: false, optional: false, required: true
  private _rowGroupBy?: string; 
  public get rowGroupBy() {
    return this.getStringAttribute('row_group_by');
  }
  public set rowGroupBy(value: string) {
    this._rowGroupBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowGroupByInput() {
    return this._rowGroupBy;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // column - computed: false, optional: false, required: true
  private _column = new ReportSystemHealthReviewColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: ReportSystemHealthReviewColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new ReportSystemHealthReviewFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ReportSystemHealthReviewFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // thresholds - computed: false, optional: false, required: true
  private _thresholds = new ReportSystemHealthReviewThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: ReportSystemHealthReviewThresholds) {
    this._thresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }

  // time_frame - computed: false, optional: false, required: true
  private _timeFrame = new ReportSystemHealthReviewTimeFrameOutputReference(this, "time_frame");
  public get timeFrame() {
    return this._timeFrame;
  }
  public putTimeFrame(value: ReportSystemHealthReviewTimeFrame) {
    this._timeFrame.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameInput() {
    return this._timeFrame.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      row_group_by: cdktf.stringToTerraform(this._rowGroupBy),
      shared: cdktf.booleanToTerraform(this._shared),
      column: cdktf.listMapper(reportSystemHealthReviewColumnToTerraform, true)(this._column.internalValue),
      filters: reportSystemHealthReviewFiltersToTerraform(this._filters.internalValue),
      thresholds: reportSystemHealthReviewThresholdsToTerraform(this._thresholds.internalValue),
      time_frame: reportSystemHealthReviewTimeFrameToTerraform(this._timeFrame.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      row_group_by: {
        value: cdktf.stringToHclTerraform(this._rowGroupBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      column: {
        value: cdktf.listMapperHcl(reportSystemHealthReviewColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportSystemHealthReviewColumnList",
      },
      filters: {
        value: reportSystemHealthReviewFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportSystemHealthReviewFiltersList",
      },
      thresholds: {
        value: reportSystemHealthReviewThresholdsToHclTerraform(this._thresholds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ReportSystemHealthReviewThresholdsList",
      },
      time_frame: {
        value: reportSystemHealthReviewTimeFrameToHclTerraform(this._timeFrame.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ReportSystemHealthReviewTimeFrameList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
