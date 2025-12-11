// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeTargetDatabaseGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#compartment_id DataSafeTargetDatabaseGroup#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#defined_tags DataSafeTargetDatabaseGroup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#description DataSafeTargetDatabaseGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#display_name DataSafeTargetDatabaseGroup#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#freeform_tags DataSafeTargetDatabaseGroup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#id DataSafeTargetDatabaseGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * matching_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#matching_criteria DataSafeTargetDatabaseGroup#matching_criteria}
  */
  readonly matchingCriteria: DataSafeTargetDatabaseGroupMatchingCriteria;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#timeouts DataSafeTargetDatabaseGroup#timeouts}
  */
  readonly timeouts?: DataSafeTargetDatabaseGroupTimeouts;
}
export interface DataSafeTargetDatabaseGroupMatchingCriteriaExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#target_database_ids DataSafeTargetDatabaseGroup#target_database_ids}
  */
  readonly targetDatabaseIds: string[];
}

export function dataSafeTargetDatabaseGroupMatchingCriteriaExcludeToTerraform(struct?: DataSafeTargetDatabaseGroupMatchingCriteriaExcludeOutputReference | DataSafeTargetDatabaseGroupMatchingCriteriaExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_database_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetDatabaseIds),
  }
}


export function dataSafeTargetDatabaseGroupMatchingCriteriaExcludeToHclTerraform(struct?: DataSafeTargetDatabaseGroupMatchingCriteriaExcludeOutputReference | DataSafeTargetDatabaseGroupMatchingCriteriaExclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_database_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetDatabaseIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabaseGroupMatchingCriteriaExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabaseGroupMatchingCriteriaExclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetDatabaseIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDatabaseIds = this._targetDatabaseIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabaseGroupMatchingCriteriaExclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetDatabaseIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetDatabaseIds = value.targetDatabaseIds;
    }
  }

  // target_database_ids - computed: false, optional: false, required: true
  private _targetDatabaseIds?: string[]; 
  public get targetDatabaseIds() {
    return this.getListAttribute('target_database_ids');
  }
  public set targetDatabaseIds(value: string[]) {
    this._targetDatabaseIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseIdsInput() {
    return this._targetDatabaseIds;
  }
}
export interface DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#id DataSafeTargetDatabaseGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#is_include_subtree DataSafeTargetDatabaseGroup#is_include_subtree}
  */
  readonly isIncludeSubtree?: boolean | cdktf.IResolvable;
}

export function dataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartmentsToTerraform(struct?: DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    is_include_subtree: cdktf.booleanToTerraform(struct!.isIncludeSubtree),
  }
}


export function dataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartmentsToHclTerraform(struct?: DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_include_subtree: {
      value: cdktf.booleanToHclTerraform(struct!.isIncludeSubtree),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isIncludeSubtree !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIncludeSubtree = this._isIncludeSubtree;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._isIncludeSubtree = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._isIncludeSubtree = value.isIncludeSubtree;
    }
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

  // is_include_subtree - computed: true, optional: true, required: false
  private _isIncludeSubtree?: boolean | cdktf.IResolvable; 
  public get isIncludeSubtree() {
    return this.getBooleanAttribute('is_include_subtree');
  }
  public set isIncludeSubtree(value: boolean | cdktf.IResolvable) {
    this._isIncludeSubtree = value;
  }
  public resetIsIncludeSubtree() {
    this._isIncludeSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncludeSubtreeInput() {
    return this._isIncludeSubtree;
  }
}

export class DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartmentsList extends cdktf.ComplexList {
  public internalValue? : DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartments[] | cdktf.IResolvable

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
  public get(index: number): DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartmentsOutputReference {
    return new DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeTargetDatabaseGroupMatchingCriteriaInclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#defined_tags DataSafeTargetDatabaseGroup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#freeform_tags DataSafeTargetDatabaseGroup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#target_database_ids DataSafeTargetDatabaseGroup#target_database_ids}
  */
  readonly targetDatabaseIds?: string[];
  /**
  * compartments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#compartments DataSafeTargetDatabaseGroup#compartments}
  */
  readonly compartments?: DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartments[] | cdktf.IResolvable;
}

export function dataSafeTargetDatabaseGroupMatchingCriteriaIncludeToTerraform(struct?: DataSafeTargetDatabaseGroupMatchingCriteriaIncludeOutputReference | DataSafeTargetDatabaseGroupMatchingCriteriaInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    target_database_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetDatabaseIds),
    compartments: cdktf.listMapper(dataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartmentsToTerraform, true)(struct!.compartments),
  }
}


export function dataSafeTargetDatabaseGroupMatchingCriteriaIncludeToHclTerraform(struct?: DataSafeTargetDatabaseGroupMatchingCriteriaIncludeOutputReference | DataSafeTargetDatabaseGroupMatchingCriteriaInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_database_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetDatabaseIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compartments: {
      value: cdktf.listMapperHcl(dataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartmentsToHclTerraform, true)(struct!.compartments),
      isBlock: true,
      type: "list",
      storageClassType: "DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabaseGroupMatchingCriteriaIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabaseGroupMatchingCriteriaInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._targetDatabaseIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDatabaseIds = this._targetDatabaseIds;
    }
    if (this._compartments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartments = this._compartments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabaseGroupMatchingCriteriaInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definedTags = undefined;
      this._freeformTags = undefined;
      this._targetDatabaseIds = undefined;
      this._compartments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definedTags = value.definedTags;
      this._freeformTags = value.freeformTags;
      this._targetDatabaseIds = value.targetDatabaseIds;
      this._compartments.internalValue = value.compartments;
    }
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // target_database_ids - computed: true, optional: true, required: false
  private _targetDatabaseIds?: string[]; 
  public get targetDatabaseIds() {
    return this.getListAttribute('target_database_ids');
  }
  public set targetDatabaseIds(value: string[]) {
    this._targetDatabaseIds = value;
  }
  public resetTargetDatabaseIds() {
    this._targetDatabaseIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseIdsInput() {
    return this._targetDatabaseIds;
  }

  // compartments - computed: false, optional: true, required: false
  private _compartments = new DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartmentsList(this, "compartments", false);
  public get compartments() {
    return this._compartments;
  }
  public putCompartments(value: DataSafeTargetDatabaseGroupMatchingCriteriaIncludeCompartments[] | cdktf.IResolvable) {
    this._compartments.internalValue = value;
  }
  public resetCompartments() {
    this._compartments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentsInput() {
    return this._compartments.internalValue;
  }
}
export interface DataSafeTargetDatabaseGroupMatchingCriteria {
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#exclude DataSafeTargetDatabaseGroup#exclude}
  */
  readonly exclude?: DataSafeTargetDatabaseGroupMatchingCriteriaExclude;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#include DataSafeTargetDatabaseGroup#include}
  */
  readonly include: DataSafeTargetDatabaseGroupMatchingCriteriaInclude;
}

export function dataSafeTargetDatabaseGroupMatchingCriteriaToTerraform(struct?: DataSafeTargetDatabaseGroupMatchingCriteriaOutputReference | DataSafeTargetDatabaseGroupMatchingCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: dataSafeTargetDatabaseGroupMatchingCriteriaExcludeToTerraform(struct!.exclude),
    include: dataSafeTargetDatabaseGroupMatchingCriteriaIncludeToTerraform(struct!.include),
  }
}


export function dataSafeTargetDatabaseGroupMatchingCriteriaToHclTerraform(struct?: DataSafeTargetDatabaseGroupMatchingCriteriaOutputReference | DataSafeTargetDatabaseGroupMatchingCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: dataSafeTargetDatabaseGroupMatchingCriteriaExcludeToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "DataSafeTargetDatabaseGroupMatchingCriteriaExcludeList",
    },
    include: {
      value: dataSafeTargetDatabaseGroupMatchingCriteriaIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "DataSafeTargetDatabaseGroupMatchingCriteriaIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabaseGroupMatchingCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSafeTargetDatabaseGroupMatchingCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabaseGroupMatchingCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude.internalValue = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude.internalValue = value.exclude;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataSafeTargetDatabaseGroupMatchingCriteriaExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataSafeTargetDatabaseGroupMatchingCriteriaExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // include - computed: false, optional: false, required: true
  private _include = new DataSafeTargetDatabaseGroupMatchingCriteriaIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: DataSafeTargetDatabaseGroupMatchingCriteriaInclude) {
    this._include.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface DataSafeTargetDatabaseGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#create DataSafeTargetDatabaseGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#delete DataSafeTargetDatabaseGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#update DataSafeTargetDatabaseGroup#update}
  */
  readonly update?: string;
}

export function dataSafeTargetDatabaseGroupTimeoutsToTerraform(struct?: DataSafeTargetDatabaseGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataSafeTargetDatabaseGroupTimeoutsToHclTerraform(struct?: DataSafeTargetDatabaseGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeTargetDatabaseGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeTargetDatabaseGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeTargetDatabaseGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group oci_data_safe_target_database_group}
*/
export class DataSafeTargetDatabaseGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_target_database_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeTargetDatabaseGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeTargetDatabaseGroup to import
  * @param importFromId The id of the existing DataSafeTargetDatabaseGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeTargetDatabaseGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_target_database_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_target_database_group oci_data_safe_target_database_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeTargetDatabaseGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeTargetDatabaseGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_target_database_group',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._matchingCriteria.internalValue = config.matchingCriteria;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // membership_count - computed: true, optional: false, required: false
  public get membershipCount() {
    return this.getNumberAttribute('membership_count');
  }

  // membership_update_time - computed: true, optional: false, required: false
  public get membershipUpdateTime() {
    return this.getStringAttribute('membership_update_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // matching_criteria - computed: false, optional: false, required: true
  private _matchingCriteria = new DataSafeTargetDatabaseGroupMatchingCriteriaOutputReference(this, "matching_criteria");
  public get matchingCriteria() {
    return this._matchingCriteria;
  }
  public putMatchingCriteria(value: DataSafeTargetDatabaseGroupMatchingCriteria) {
    this._matchingCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingCriteriaInput() {
    return this._matchingCriteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeTargetDatabaseGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeTargetDatabaseGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      matching_criteria: dataSafeTargetDatabaseGroupMatchingCriteriaToTerraform(this._matchingCriteria.internalValue),
      timeouts: dataSafeTargetDatabaseGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matching_criteria: {
        value: dataSafeTargetDatabaseGroupMatchingCriteriaToHclTerraform(this._matchingCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeTargetDatabaseGroupMatchingCriteriaList",
      },
      timeouts: {
        value: dataSafeTargetDatabaseGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeTargetDatabaseGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
