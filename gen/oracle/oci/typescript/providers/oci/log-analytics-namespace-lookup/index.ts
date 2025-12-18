// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsNamespaceLookupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#char_encoding LogAnalyticsNamespaceLookup#char_encoding}
  */
  readonly charEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#compartment_id LogAnalyticsNamespaceLookup#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#default_match_value LogAnalyticsNamespaceLookup#default_match_value}
  */
  readonly defaultMatchValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#defined_tags LogAnalyticsNamespaceLookup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#description LogAnalyticsNamespaceLookup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#freeform_tags LogAnalyticsNamespaceLookup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#id LogAnalyticsNamespaceLookup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#is_hidden LogAnalyticsNamespaceLookup#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#lookup_name LogAnalyticsNamespaceLookup#lookup_name}
  */
  readonly lookupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#max_matches LogAnalyticsNamespaceLookup#max_matches}
  */
  readonly maxMatches?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#namespace LogAnalyticsNamespaceLookup#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#register_lookup_file LogAnalyticsNamespaceLookup#register_lookup_file}
  */
  readonly registerLookupFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#type LogAnalyticsNamespaceLookup#type}
  */
  readonly type: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#categories LogAnalyticsNamespaceLookup#categories}
  */
  readonly categories?: LogAnalyticsNamespaceLookupCategories[] | cdktf.IResolvable;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#fields LogAnalyticsNamespaceLookup#fields}
  */
  readonly fields?: LogAnalyticsNamespaceLookupFields[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#timeouts LogAnalyticsNamespaceLookup#timeouts}
  */
  readonly timeouts?: LogAnalyticsNamespaceLookupTimeouts;
}
export interface LogAnalyticsNamespaceLookupReferringSources {
}

export function logAnalyticsNamespaceLookupReferringSourcesToTerraform(struct?: LogAnalyticsNamespaceLookupReferringSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logAnalyticsNamespaceLookupReferringSourcesToHclTerraform(struct?: LogAnalyticsNamespaceLookupReferringSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogAnalyticsNamespaceLookupReferringSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAnalyticsNamespaceLookupReferringSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceLookupReferringSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canonical_link - computed: true, optional: false, required: false
  public get canonicalLink() {
    return this.getStringAttribute('canonical_link');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getStringAttribute('total_count');
  }
}

export class LogAnalyticsNamespaceLookupReferringSourcesList extends cdktf.ComplexList {

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
  public get(index: number): LogAnalyticsNamespaceLookupReferringSourcesOutputReference {
    return new LogAnalyticsNamespaceLookupReferringSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAnalyticsNamespaceLookupStatusSummary {
}

export function logAnalyticsNamespaceLookupStatusSummaryToTerraform(struct?: LogAnalyticsNamespaceLookupStatusSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logAnalyticsNamespaceLookupStatusSummaryToHclTerraform(struct?: LogAnalyticsNamespaceLookupStatusSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogAnalyticsNamespaceLookupStatusSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAnalyticsNamespaceLookupStatusSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceLookupStatusSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chunks_processed - computed: true, optional: false, required: false
  public get chunksProcessed() {
    return this.getStringAttribute('chunks_processed');
  }

  // failure_details - computed: true, optional: false, required: false
  public get failureDetails() {
    return this.getStringAttribute('failure_details');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_chunks - computed: true, optional: false, required: false
  public get totalChunks() {
    return this.getStringAttribute('total_chunks');
  }
}

export class LogAnalyticsNamespaceLookupStatusSummaryList extends cdktf.ComplexList {

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
  public get(index: number): LogAnalyticsNamespaceLookupStatusSummaryOutputReference {
    return new LogAnalyticsNamespaceLookupStatusSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAnalyticsNamespaceLookupCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#description LogAnalyticsNamespaceLookup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#display_name LogAnalyticsNamespaceLookup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#is_system LogAnalyticsNamespaceLookup#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#name LogAnalyticsNamespaceLookup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#type LogAnalyticsNamespaceLookup#type}
  */
  readonly type?: string;
}

export function logAnalyticsNamespaceLookupCategoriesToTerraform(struct?: LogAnalyticsNamespaceLookupCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_system: cdktf.booleanToTerraform(struct!.isSystem),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logAnalyticsNamespaceLookupCategoriesToHclTerraform(struct?: LogAnalyticsNamespaceLookupCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_system: {
      value: cdktf.booleanToHclTerraform(struct!.isSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class LogAnalyticsNamespaceLookupCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAnalyticsNamespaceLookupCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystem = this._isSystem;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceLookupCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._isSystem = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._isSystem = value.isSystem;
      this._name = value.name;
      this._type = value.type;
    }
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

  // display_name - computed: true, optional: true, required: false
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

  // is_system - computed: true, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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
}

export class LogAnalyticsNamespaceLookupCategoriesList extends cdktf.ComplexList {
  public internalValue? : LogAnalyticsNamespaceLookupCategories[] | cdktf.IResolvable

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
  public get(index: number): LogAnalyticsNamespaceLookupCategoriesOutputReference {
    return new LogAnalyticsNamespaceLookupCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAnalyticsNamespaceLookupFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#common_field_name LogAnalyticsNamespaceLookup#common_field_name}
  */
  readonly commonFieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#default_match_value LogAnalyticsNamespaceLookup#default_match_value}
  */
  readonly defaultMatchValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#display_name LogAnalyticsNamespaceLookup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#is_common_field LogAnalyticsNamespaceLookup#is_common_field}
  */
  readonly isCommonField?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#match_operator LogAnalyticsNamespaceLookup#match_operator}
  */
  readonly matchOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#name LogAnalyticsNamespaceLookup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#position LogAnalyticsNamespaceLookup#position}
  */
  readonly position?: string;
}

export function logAnalyticsNamespaceLookupFieldsToTerraform(struct?: LogAnalyticsNamespaceLookupFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_field_name: cdktf.stringToTerraform(struct!.commonFieldName),
    default_match_value: cdktf.stringToTerraform(struct!.defaultMatchValue),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_common_field: cdktf.booleanToTerraform(struct!.isCommonField),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    name: cdktf.stringToTerraform(struct!.name),
    position: cdktf.stringToTerraform(struct!.position),
  }
}


export function logAnalyticsNamespaceLookupFieldsToHclTerraform(struct?: LogAnalyticsNamespaceLookupFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_field_name: {
      value: cdktf.stringToHclTerraform(struct!.commonFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_match_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultMatchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_common_field: {
      value: cdktf.booleanToHclTerraform(struct!.isCommonField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_operator: {
      value: cdktf.stringToHclTerraform(struct!.matchOperator),
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
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceLookupFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAnalyticsNamespaceLookupFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonFieldName = this._commonFieldName;
    }
    if (this._defaultMatchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMatchValue = this._defaultMatchValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isCommonField !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCommonField = this._isCommonField;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceLookupFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonFieldName = undefined;
      this._defaultMatchValue = undefined;
      this._displayName = undefined;
      this._isCommonField = undefined;
      this._matchOperator = undefined;
      this._name = undefined;
      this._position = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonFieldName = value.commonFieldName;
      this._defaultMatchValue = value.defaultMatchValue;
      this._displayName = value.displayName;
      this._isCommonField = value.isCommonField;
      this._matchOperator = value.matchOperator;
      this._name = value.name;
      this._position = value.position;
    }
  }

  // common_field_name - computed: true, optional: true, required: false
  private _commonFieldName?: string; 
  public get commonFieldName() {
    return this.getStringAttribute('common_field_name');
  }
  public set commonFieldName(value: string) {
    this._commonFieldName = value;
  }
  public resetCommonFieldName() {
    this._commonFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonFieldNameInput() {
    return this._commonFieldName;
  }

  // default_match_value - computed: true, optional: true, required: false
  private _defaultMatchValue?: string; 
  public get defaultMatchValue() {
    return this.getStringAttribute('default_match_value');
  }
  public set defaultMatchValue(value: string) {
    this._defaultMatchValue = value;
  }
  public resetDefaultMatchValue() {
    this._defaultMatchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMatchValueInput() {
    return this._defaultMatchValue;
  }

  // display_name - computed: true, optional: true, required: false
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

  // is_common_field - computed: true, optional: true, required: false
  private _isCommonField?: boolean | cdktf.IResolvable; 
  public get isCommonField() {
    return this.getBooleanAttribute('is_common_field');
  }
  public set isCommonField(value: boolean | cdktf.IResolvable) {
    this._isCommonField = value;
  }
  public resetIsCommonField() {
    this._isCommonField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCommonFieldInput() {
    return this._isCommonField;
  }

  // match_operator - computed: true, optional: true, required: false
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  public resetMatchOperator() {
    this._matchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // name - computed: true, optional: true, required: false
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

  // position - computed: true, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}

export class LogAnalyticsNamespaceLookupFieldsList extends cdktf.ComplexList {
  public internalValue? : LogAnalyticsNamespaceLookupFields[] | cdktf.IResolvable

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
  public get(index: number): LogAnalyticsNamespaceLookupFieldsOutputReference {
    return new LogAnalyticsNamespaceLookupFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAnalyticsNamespaceLookupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#create LogAnalyticsNamespaceLookup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#delete LogAnalyticsNamespaceLookup#delete}
  */
  readonly delete?: string;
}

export function logAnalyticsNamespaceLookupTimeoutsToTerraform(struct?: LogAnalyticsNamespaceLookupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function logAnalyticsNamespaceLookupTimeoutsToHclTerraform(struct?: LogAnalyticsNamespaceLookupTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceLookupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsNamespaceLookupTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceLookupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup oci_log_analytics_namespace_lookup}
*/
export class LogAnalyticsNamespaceLookup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_lookup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAnalyticsNamespaceLookup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAnalyticsNamespaceLookup to import
  * @param importFromId The id of the existing LogAnalyticsNamespaceLookup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAnalyticsNamespaceLookup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_namespace_lookup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_lookup oci_log_analytics_namespace_lookup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsNamespaceLookupConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsNamespaceLookupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_lookup',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._charEncoding = config.charEncoding;
    this._compartmentId = config.compartmentId;
    this._defaultMatchValue = config.defaultMatchValue;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isHidden = config.isHidden;
    this._lookupName = config.lookupName;
    this._maxMatches = config.maxMatches;
    this._namespace = config.namespace;
    this._registerLookupFile = config.registerLookupFile;
    this._type = config.type;
    this._categories.internalValue = config.categories;
    this._fields.internalValue = config.fields;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_edit_version - computed: true, optional: false, required: false
  public get activeEditVersion() {
    return this.getStringAttribute('active_edit_version');
  }

  // canonical_link - computed: true, optional: false, required: false
  public get canonicalLink() {
    return this.getStringAttribute('canonical_link');
  }

  // char_encoding - computed: false, optional: true, required: false
  private _charEncoding?: string; 
  public get charEncoding() {
    return this.getStringAttribute('char_encoding');
  }
  public set charEncoding(value: string) {
    this._charEncoding = value;
  }
  public resetCharEncoding() {
    this._charEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charEncodingInput() {
    return this._charEncoding;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // default_match_value - computed: false, optional: true, required: false
  private _defaultMatchValue?: string; 
  public get defaultMatchValue() {
    return this.getStringAttribute('default_match_value');
  }
  public set defaultMatchValue(value: string) {
    this._defaultMatchValue = value;
  }
  public resetDefaultMatchValue() {
    this._defaultMatchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMatchValueInput() {
    return this._defaultMatchValue;
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

  // edit_version - computed: true, optional: false, required: false
  public get editVersion() {
    return this.getStringAttribute('edit_version');
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

  // is_built_in - computed: true, optional: false, required: false
  public get isBuiltIn() {
    return this.getStringAttribute('is_built_in');
  }

  // is_hidden - computed: true, optional: true, required: false
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
  }

  // lookup_display_name - computed: true, optional: false, required: false
  public get lookupDisplayName() {
    return this.getStringAttribute('lookup_display_name');
  }

  // lookup_id - computed: true, optional: false, required: false
  public get lookupId() {
    return this.getStringAttribute('lookup_id');
  }

  // lookup_name - computed: false, optional: false, required: true
  private _lookupName?: string; 
  public get lookupName() {
    return this.getStringAttribute('lookup_name');
  }
  public set lookupName(value: string) {
    this._lookupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupNameInput() {
    return this._lookupName;
  }

  // lookup_reference - computed: true, optional: false, required: false
  public get lookupReference() {
    return this.getStringAttribute('lookup_reference');
  }

  // lookup_reference_string - computed: true, optional: false, required: false
  public get lookupReferenceString() {
    return this.getStringAttribute('lookup_reference_string');
  }

  // max_matches - computed: false, optional: true, required: false
  private _maxMatches?: string; 
  public get maxMatches() {
    return this.getStringAttribute('max_matches');
  }
  public set maxMatches(value: string) {
    this._maxMatches = value;
  }
  public resetMaxMatches() {
    this._maxMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMatchesInput() {
    return this._maxMatches;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // referring_sources - computed: true, optional: false, required: false
  private _referringSources = new LogAnalyticsNamespaceLookupReferringSourcesList(this, "referring_sources", false);
  public get referringSources() {
    return this._referringSources;
  }

  // register_lookup_file - computed: false, optional: false, required: true
  private _registerLookupFile?: string; 
  public get registerLookupFile() {
    return this.getStringAttribute('register_lookup_file');
  }
  public set registerLookupFile(value: string) {
    this._registerLookupFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registerLookupFileInput() {
    return this._registerLookupFile;
  }

  // status_summary - computed: true, optional: false, required: false
  private _statusSummary = new LogAnalyticsNamespaceLookupStatusSummaryList(this, "status_summary", false);
  public get statusSummary() {
    return this._statusSummary;
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
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

  // categories - computed: false, optional: true, required: false
  private _categories = new LogAnalyticsNamespaceLookupCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: LogAnalyticsNamespaceLookupCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new LogAnalyticsNamespaceLookupFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: LogAnalyticsNamespaceLookupFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsNamespaceLookupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsNamespaceLookupTimeouts) {
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
      char_encoding: cdktf.stringToTerraform(this._charEncoding),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      default_match_value: cdktf.stringToTerraform(this._defaultMatchValue),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_hidden: cdktf.booleanToTerraform(this._isHidden),
      lookup_name: cdktf.stringToTerraform(this._lookupName),
      max_matches: cdktf.stringToTerraform(this._maxMatches),
      namespace: cdktf.stringToTerraform(this._namespace),
      register_lookup_file: cdktf.stringToTerraform(this._registerLookupFile),
      type: cdktf.stringToTerraform(this._type),
      categories: cdktf.listMapper(logAnalyticsNamespaceLookupCategoriesToTerraform, true)(this._categories.internalValue),
      fields: cdktf.listMapper(logAnalyticsNamespaceLookupFieldsToTerraform, true)(this._fields.internalValue),
      timeouts: logAnalyticsNamespaceLookupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      char_encoding: {
        value: cdktf.stringToHclTerraform(this._charEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_match_value: {
        value: cdktf.stringToHclTerraform(this._defaultMatchValue),
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
      is_hidden: {
        value: cdktf.booleanToHclTerraform(this._isHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lookup_name: {
        value: cdktf.stringToHclTerraform(this._lookupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_matches: {
        value: cdktf.stringToHclTerraform(this._maxMatches),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register_lookup_file: {
        value: cdktf.stringToHclTerraform(this._registerLookupFile),
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
      categories: {
        value: cdktf.listMapperHcl(logAnalyticsNamespaceLookupCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogAnalyticsNamespaceLookupCategoriesList",
      },
      fields: {
        value: cdktf.listMapperHcl(logAnalyticsNamespaceLookupFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogAnalyticsNamespaceLookupFieldsList",
      },
      timeouts: {
        value: logAnalyticsNamespaceLookupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogAnalyticsNamespaceLookupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
