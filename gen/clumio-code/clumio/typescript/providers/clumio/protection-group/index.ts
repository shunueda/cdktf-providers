// https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The following table describes the possible conditions for a bucket to be automatically added to a protection group. <br><table><tr><th>Field</th><th>Rule Condition</th><th>Description</th></tr><tr><td>aws_tag</td><td>$eq, $not_eq, $contains, $not_contains, $all, $not_all, $in, $not_in</td><td>Denotes the AWS tag(s) to conditionalize on<code>{"aws_tag":{"$eq":{"key":"Environment", "value":"Prod"}}}</code></td></tr><tr><td>aws_account_native_id</td><td>$eq, $in</td><td>Denotes the AWS account to conditionalize on<code>{"aws_account_native_id":{"$eq":"111111111111"}}</code></td></tr><tr><td>account_native_id<br><b>Deprecated</b></td><td>$eq, $in</td><td>This will be deprecated and use aws_account_native_id instead.<br>Denotes the AWS account to conditionalize on<code>{"account_native_id":{"$in":["111111111111"]}}</code></td></tr><tr><td>aws_region</td><td>$eq, $in</td><td>Denotes the AWS region to conditionalize on<code>{"aws_region":{"$eq":"us-west-2"}}</code></td></tr></table>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#bucket_rule ProtectionGroup#bucket_rule}
  */
  readonly bucketRule?: string;
  /**
  * Brief description to denote details of the protection group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#description ProtectionGroup#description}
  */
  readonly description?: string;
  /**
  * The user-assigned name of the protection group. Must be globally-unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#name ProtectionGroup#name}
  */
  readonly name: string;
  /**
  * object_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#object_filter ProtectionGroup#object_filter}
  */
  readonly objectFilter?: ProtectionGroupObjectFilter[] | cdktf.IResolvable;
}
export interface ProtectionGroupProtectionInfo {
}

export function protectionGroupProtectionInfoToTerraform(struct?: ProtectionGroupProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function protectionGroupProtectionInfoToHclTerraform(struct?: ProtectionGroupProtectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProtectionGroupProtectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionGroupProtectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionGroupProtectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inheriting_entity_id - computed: true, optional: false, required: false
  public get inheritingEntityId() {
    return this.getStringAttribute('inheriting_entity_id');
  }

  // inheriting_entity_type - computed: true, optional: false, required: false
  public get inheritingEntityType() {
    return this.getStringAttribute('inheriting_entity_type');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
}

export class ProtectionGroupProtectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): ProtectionGroupProtectionInfoOutputReference {
    return new ProtectionGroupProtectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectionGroupObjectFilterPrefixFilters {
  /**
  * List of subprefixes to exclude from the prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#excluded_sub_prefixes ProtectionGroup#excluded_sub_prefixes}
  */
  readonly excludedSubPrefixes?: string[];
  /**
  * Prefix to include. To include all objects in the bucket specify empty string "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#prefix ProtectionGroup#prefix}
  */
  readonly prefix: string;
}

export function protectionGroupObjectFilterPrefixFiltersToTerraform(struct?: ProtectionGroupObjectFilterPrefixFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_sub_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedSubPrefixes),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function protectionGroupObjectFilterPrefixFiltersToHclTerraform(struct?: ProtectionGroupObjectFilterPrefixFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_sub_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedSubPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionGroupObjectFilterPrefixFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionGroupObjectFilterPrefixFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedSubPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedSubPrefixes = this._excludedSubPrefixes;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionGroupObjectFilterPrefixFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedSubPrefixes = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedSubPrefixes = value.excludedSubPrefixes;
      this._prefix = value.prefix;
    }
  }

  // excluded_sub_prefixes - computed: false, optional: true, required: false
  private _excludedSubPrefixes?: string[]; 
  public get excludedSubPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_sub_prefixes'));
  }
  public set excludedSubPrefixes(value: string[]) {
    this._excludedSubPrefixes = value;
  }
  public resetExcludedSubPrefixes() {
    this._excludedSubPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedSubPrefixesInput() {
    return this._excludedSubPrefixes;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class ProtectionGroupObjectFilterPrefixFiltersList extends cdktf.ComplexList {
  public internalValue? : ProtectionGroupObjectFilterPrefixFilters[] | cdktf.IResolvable

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
  public get(index: number): ProtectionGroupObjectFilterPrefixFiltersOutputReference {
    return new ProtectionGroupObjectFilterPrefixFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectionGroupObjectFilter {
  /**
  * The cutoff date for inclusion objects from the backup. Any object with a last modified date after or equal than this value will be included in the backup. This is useful for filtering out old or irrelevant objects based on their modification timestamps. This supports RFC-3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#earliest_last_modified_timestamp ProtectionGroup#earliest_last_modified_timestamp}
  */
  readonly earliestLastModifiedTimestamp?: string;
  /**
  * Whether to back up only the latest object version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#latest_version_only ProtectionGroup#latest_version_only}
  */
  readonly latestVersionOnly?: boolean | cdktf.IResolvable;
  /**
  * Storage class to include in the backup. Valid values are: S3 Standard, S3 Standard-IA, S3 Intelligent-Tiering, and S3 One Zone-IA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#storage_classes ProtectionGroup#storage_classes}
  */
  readonly storageClasses: string[];
  /**
  * prefix_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#prefix_filters ProtectionGroup#prefix_filters}
  */
  readonly prefixFilters?: ProtectionGroupObjectFilterPrefixFilters[] | cdktf.IResolvable;
}

export function protectionGroupObjectFilterToTerraform(struct?: ProtectionGroupObjectFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    earliest_last_modified_timestamp: cdktf.stringToTerraform(struct!.earliestLastModifiedTimestamp),
    latest_version_only: cdktf.booleanToTerraform(struct!.latestVersionOnly),
    storage_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storageClasses),
    prefix_filters: cdktf.listMapper(protectionGroupObjectFilterPrefixFiltersToTerraform, true)(struct!.prefixFilters),
  }
}


export function protectionGroupObjectFilterToHclTerraform(struct?: ProtectionGroupObjectFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    earliest_last_modified_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.earliestLastModifiedTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest_version_only: {
      value: cdktf.booleanToHclTerraform(struct!.latestVersionOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storageClasses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_filters: {
      value: cdktf.listMapperHcl(protectionGroupObjectFilterPrefixFiltersToHclTerraform, true)(struct!.prefixFilters),
      isBlock: true,
      type: "set",
      storageClassType: "ProtectionGroupObjectFilterPrefixFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionGroupObjectFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionGroupObjectFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earliestLastModifiedTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliestLastModifiedTimestamp = this._earliestLastModifiedTimestamp;
    }
    if (this._latestVersionOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestVersionOnly = this._latestVersionOnly;
    }
    if (this._storageClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses;
    }
    if (this._prefixFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixFilters = this._prefixFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionGroupObjectFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earliestLastModifiedTimestamp = undefined;
      this._latestVersionOnly = undefined;
      this._storageClasses = undefined;
      this._prefixFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earliestLastModifiedTimestamp = value.earliestLastModifiedTimestamp;
      this._latestVersionOnly = value.latestVersionOnly;
      this._storageClasses = value.storageClasses;
      this._prefixFilters.internalValue = value.prefixFilters;
    }
  }

  // earliest_last_modified_timestamp - computed: true, optional: true, required: false
  private _earliestLastModifiedTimestamp?: string; 
  public get earliestLastModifiedTimestamp() {
    return this.getStringAttribute('earliest_last_modified_timestamp');
  }
  public set earliestLastModifiedTimestamp(value: string) {
    this._earliestLastModifiedTimestamp = value;
  }
  public resetEarliestLastModifiedTimestamp() {
    this._earliestLastModifiedTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestLastModifiedTimestampInput() {
    return this._earliestLastModifiedTimestamp;
  }

  // latest_version_only - computed: true, optional: true, required: false
  private _latestVersionOnly?: boolean | cdktf.IResolvable; 
  public get latestVersionOnly() {
    return this.getBooleanAttribute('latest_version_only');
  }
  public set latestVersionOnly(value: boolean | cdktf.IResolvable) {
    this._latestVersionOnly = value;
  }
  public resetLatestVersionOnly() {
    this._latestVersionOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestVersionOnlyInput() {
    return this._latestVersionOnly;
  }

  // storage_classes - computed: false, optional: false, required: true
  private _storageClasses?: string[]; 
  public get storageClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_classes'));
  }
  public set storageClasses(value: string[]) {
    this._storageClasses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses;
  }

  // prefix_filters - computed: false, optional: true, required: false
  private _prefixFilters = new ProtectionGroupObjectFilterPrefixFiltersList(this, "prefix_filters", true);
  public get prefixFilters() {
    return this._prefixFilters;
  }
  public putPrefixFilters(value: ProtectionGroupObjectFilterPrefixFilters[] | cdktf.IResolvable) {
    this._prefixFilters.internalValue = value;
  }
  public resetPrefixFilters() {
    this._prefixFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixFiltersInput() {
    return this._prefixFilters.internalValue;
  }
}

export class ProtectionGroupObjectFilterList extends cdktf.ComplexList {
  public internalValue? : ProtectionGroupObjectFilter[] | cdktf.IResolvable

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
  public get(index: number): ProtectionGroupObjectFilterOutputReference {
    return new ProtectionGroupObjectFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group clumio_protection_group}
*/
export class ProtectionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_protection_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectionGroup to import
  * @param importFromId The id of the existing ProtectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_protection_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/protection_group clumio_protection_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_protection_group',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketRule = config.bucketRule;
    this._description = config.description;
    this._name = config.name;
    this._objectFilter.internalValue = config.objectFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_rule - computed: false, optional: true, required: false
  private _bucketRule?: string; 
  public get bucketRule() {
    return this.getStringAttribute('bucket_rule');
  }
  public set bucketRule(value: string) {
    this._bucketRule = value;
  }
  public resetBucketRule() {
    this._bucketRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRuleInput() {
    return this._bucketRule;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // protection_info - computed: true, optional: false, required: false
  private _protectionInfo = new ProtectionGroupProtectionInfoList(this, "protection_info", false);
  public get protectionInfo() {
    return this._protectionInfo;
  }

  // protection_status - computed: true, optional: false, required: false
  public get protectionStatus() {
    return this.getStringAttribute('protection_status');
  }

  // object_filter - computed: false, optional: true, required: false
  private _objectFilter = new ProtectionGroupObjectFilterList(this, "object_filter", true);
  public get objectFilter() {
    return this._objectFilter;
  }
  public putObjectFilter(value: ProtectionGroupObjectFilter[] | cdktf.IResolvable) {
    this._objectFilter.internalValue = value;
  }
  public resetObjectFilter() {
    this._objectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectFilterInput() {
    return this._objectFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_rule: cdktf.stringToTerraform(this._bucketRule),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      object_filter: cdktf.listMapper(protectionGroupObjectFilterToTerraform, true)(this._objectFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_rule: {
        value: cdktf.stringToHclTerraform(this._bucketRule),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_filter: {
        value: cdktf.listMapperHcl(protectionGroupObjectFilterToHclTerraform, true)(this._objectFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProtectionGroupObjectFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
