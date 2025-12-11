// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSqlFirewallPolicyAnalyticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#access_level DataOciDataSafeSqlFirewallPolicyAnalytics#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallPolicyAnalytics#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#group_by DataOciDataSafeSqlFirewallPolicyAnalytics#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#id DataOciDataSafeSqlFirewallPolicyAnalytics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#security_policy_id DataOciDataSafeSqlFirewallPolicyAnalytics#security_policy_id}
  */
  readonly securityPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#state DataOciDataSafeSqlFirewallPolicyAnalytics#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_ended DataOciDataSafeSqlFirewallPolicyAnalytics#time_ended}
  */
  readonly timeEnded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#time_started DataOciDataSafeSqlFirewallPolicyAnalytics#time_started}
  */
  readonly timeStarted?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#filter DataOciDataSafeSqlFirewallPolicyAnalytics#filter}
  */
  readonly filter?: DataOciDataSafeSqlFirewallPolicyAnalyticsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions {
}

export function dataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsToTerraform(struct?: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsToHclTerraform(struct?: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforcement_scope - computed: true, optional: false, required: false
  public get enforcementScope() {
    return this.getStringAttribute('enforcement_scope');
  }

  // security_policy_id - computed: true, optional: false, required: false
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // violation_action - computed: true, optional: false, required: false
  public get violationAction() {
    return this.getStringAttribute('violation_action');
  }
}

export class DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference {
    return new DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems {
}

export function dataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsToTerraform(struct?: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsToHclTerraform(struct?: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // sql_firewall_policy_analytic_count - computed: true, optional: false, required: false
  public get sqlFirewallPolicyAnalyticCount() {
    return this.getStringAttribute('sql_firewall_policy_analytic_count');
  }
}

export class DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference {
    return new DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection {
}

export function dataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionToTerraform(struct?: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionToHclTerraform(struct?: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference {
    return new DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSqlFirewallPolicyAnalyticsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#name DataOciDataSafeSqlFirewallPolicyAnalytics#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#regex DataOciDataSafeSqlFirewallPolicyAnalytics#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#values DataOciDataSafeSqlFirewallPolicyAnalytics#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSqlFirewallPolicyAnalyticsFilterToTerraform(struct?: DataOciDataSafeSqlFirewallPolicyAnalyticsFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeSqlFirewallPolicyAnalyticsFilterToHclTerraform(struct?: DataOciDataSafeSqlFirewallPolicyAnalyticsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSqlFirewallPolicyAnalyticsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeSqlFirewallPolicyAnalyticsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSqlFirewallPolicyAnalyticsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference {
    return new DataOciDataSafeSqlFirewallPolicyAnalyticsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics oci_data_safe_sql_firewall_policy_analytics}
*/
export class DataOciDataSafeSqlFirewallPolicyAnalytics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sql_firewall_policy_analytics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSqlFirewallPolicyAnalytics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSqlFirewallPolicyAnalytics to import
  * @param importFromId The id of the existing DataOciDataSafeSqlFirewallPolicyAnalytics that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSqlFirewallPolicyAnalytics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sql_firewall_policy_analytics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sql_firewall_policy_analytics oci_data_safe_sql_firewall_policy_analytics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSqlFirewallPolicyAnalyticsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSqlFirewallPolicyAnalyticsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sql_firewall_policy_analytics',
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
    this._accessLevel = config.accessLevel;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._securityPolicyId = config.securityPolicyId;
    this._state = config.state;
    this._timeEnded = config.timeEnded;
    this._timeStarted = config.timeStarted;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

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

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // security_policy_id - computed: false, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // sql_firewall_policy_analytics_collection - computed: true, optional: false, required: false
  private _sqlFirewallPolicyAnalyticsCollection = new DataOciDataSafeSqlFirewallPolicyAnalyticsSqlFirewallPolicyAnalyticsCollectionList(this, "sql_firewall_policy_analytics_collection", false);
  public get sqlFirewallPolicyAnalyticsCollection() {
    return this._sqlFirewallPolicyAnalyticsCollection;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_ended - computed: false, optional: true, required: false
  private _timeEnded?: string; 
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }
  public set timeEnded(value: string) {
    this._timeEnded = value;
  }
  public resetTimeEnded() {
    this._timeEnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndedInput() {
    return this._timeEnded;
  }

  // time_started - computed: false, optional: true, required: false
  private _timeStarted?: string; 
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
  public set timeStarted(value: string) {
    this._timeStarted = value;
  }
  public resetTimeStarted() {
    this._timeStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartedInput() {
    return this._timeStarted;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSqlFirewallPolicyAnalyticsFilter[] | cdktf.IResolvable) {
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
      access_level: cdktf.stringToTerraform(this._accessLevel),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      state: cdktf.stringToTerraform(this._state),
      time_ended: cdktf.stringToTerraform(this._timeEnded),
      time_started: cdktf.stringToTerraform(this._timeStarted),
      filter: cdktf.listMapper(dataOciDataSafeSqlFirewallPolicyAnalyticsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
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
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
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
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_ended: {
        value: cdktf.stringToHclTerraform(this._timeEnded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_started: {
        value: cdktf.stringToHclTerraform(this._timeStarted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSqlFirewallPolicyAnalyticsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSqlFirewallPolicyAnalyticsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
