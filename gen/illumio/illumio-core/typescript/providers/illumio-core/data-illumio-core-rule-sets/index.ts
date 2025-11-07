// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIllumioCoreRuleSetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of Ruleset(s) to return. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets#description DataIllumioCoreRuleSets#description}
  */
  readonly description?: string;
  /**
  * A unique identifier within the external data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets#external_data_reference DataIllumioCoreRuleSets#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * The data source from which a resource originates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets#external_data_set DataIllumioCoreRuleSets#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets#id DataIllumioCoreRuleSets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of lists of label URIs, encoded as a JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets#labels DataIllumioCoreRuleSets#labels}
  */
  readonly labels?: string;
  /**
  * Indicates whether to return all partially-matching names or only exact matches. Allowed values are "partial" and "exact". Default value: "partial"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets#match_type DataIllumioCoreRuleSets#match_type}
  */
  readonly matchType?: string;
  /**
  * Maximum number of Rulesets to return. The integer should be a non-zero positive integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets#max_results DataIllumioCoreRuleSets#max_results}
  */
  readonly maxResults?: string;
  /**
  * Name of Ruleset(s) to return. Matches based on match_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets#name DataIllumioCoreRuleSets#name}
  */
  readonly name?: string;
  /**
  * Security policy version. Allowed values are "draft", "active", and numbers greater than 0. Default value: "draft"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets#pversion DataIllumioCoreRuleSets#pversion}
  */
  readonly pversion?: string;
}
export interface DataIllumioCoreRuleSetsItemsIpTablesRulesActors {
}

export function dataIllumioCoreRuleSetsItemsIpTablesRulesActorsToTerraform(struct?: DataIllumioCoreRuleSetsItemsIpTablesRulesActors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsIpTablesRulesActorsToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsIpTablesRulesActors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsIpTablesRulesActorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsIpTablesRulesActors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsIpTablesRulesActors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actors - computed: true, optional: false, required: false
  public get actors() {
    return this.getStringAttribute('actors');
  }

  // label - computed: true, optional: false, required: false
  private _label = new cdktf.StringMap(this, "label");
  public get label() {
    return this._label;
  }

  // label_group - computed: true, optional: false, required: false
  private _labelGroup = new cdktf.StringMap(this, "label_group");
  public get labelGroup() {
    return this._labelGroup;
  }

  // workload - computed: true, optional: false, required: false
  private _workload = new cdktf.StringMap(this, "workload");
  public get workload() {
    return this._workload;
  }
}

export class DataIllumioCoreRuleSetsItemsIpTablesRulesActorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsIpTablesRulesActorsOutputReference {
    return new DataIllumioCoreRuleSetsItemsIpTablesRulesActorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsIpTablesRulesStatements {
}

export function dataIllumioCoreRuleSetsItemsIpTablesRulesStatementsToTerraform(struct?: DataIllumioCoreRuleSetsItemsIpTablesRulesStatements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsIpTablesRulesStatementsToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsIpTablesRulesStatements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsIpTablesRulesStatementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsIpTablesRulesStatements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsIpTablesRulesStatements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chain_name - computed: true, optional: false, required: false
  public get chainName() {
    return this.getStringAttribute('chain_name');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export class DataIllumioCoreRuleSetsItemsIpTablesRulesStatementsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsIpTablesRulesStatementsOutputReference {
    return new DataIllumioCoreRuleSetsItemsIpTablesRulesStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsIpTablesRules {
}

export function dataIllumioCoreRuleSetsItemsIpTablesRulesToTerraform(struct?: DataIllumioCoreRuleSetsItemsIpTablesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsIpTablesRulesToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsIpTablesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsIpTablesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsIpTablesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsIpTablesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actors - computed: true, optional: false, required: false
  private _actors = new DataIllumioCoreRuleSetsItemsIpTablesRulesActorsList(this, "actors", false);
  public get actors() {
    return this._actors;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // statements - computed: true, optional: false, required: false
  private _statements = new DataIllumioCoreRuleSetsItemsIpTablesRulesStatementsList(this, "statements", false);
  public get statements() {
    return this._statements;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }
}

export class DataIllumioCoreRuleSetsItemsIpTablesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsIpTablesRulesOutputReference {
    return new DataIllumioCoreRuleSetsItemsIpTablesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdns {
}

export function dataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdnsToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdnsToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdnsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdnsOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRanges {
}

export function dataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRangesToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRangesToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclusion - computed: true, optional: false, required: false
  public get exclusion() {
    return this.getBooleanAttribute('exclusion');
  }

  // from_ip - computed: true, optional: false, required: false
  public get fromIp() {
    return this.getStringAttribute('from_ip');
  }

  // to_ip - computed: true, optional: false, required: false
  public get toIp() {
    return this.getStringAttribute('to_ip');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRangesOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesConsumersIpListStruct {
}

export function dataIllumioCoreRuleSetsItemsRulesConsumersIpListStructToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesConsumersIpListStructToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesConsumersIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesConsumersIpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // external_data_reference - computed: true, optional: false, required: false
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }

  // external_data_set - computed: true, optional: false, required: false
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }

  // fqdns - computed: true, optional: false, required: false
  private _fqdns = new DataIllumioCoreRuleSetsItemsRulesConsumersIpListFqdnsList(this, "fqdns", false);
  public get fqdns() {
    return this._fqdns;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // ip_ranges - computed: true, optional: false, required: false
  private _ipRanges = new DataIllumioCoreRuleSetsItemsRulesConsumersIpListIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersIpListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesConsumersIpListStructOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesConsumersIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesConsumersLabel {
}

export function dataIllumioCoreRuleSetsItemsRulesConsumersLabelToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesConsumersLabelToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesConsumersLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesConsumersLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersLabelList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesConsumersLabelOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesConsumersLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesConsumersLabelGroup {
}

export function dataIllumioCoreRuleSetsItemsRulesConsumersLabelGroupToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesConsumersLabelGroupToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersLabelGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesConsumersLabelGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesConsumersLabelGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersLabelGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesConsumersLabelGroupOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesConsumersLabelGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesConsumersVirtualService {
}

export function dataIllumioCoreRuleSetsItemsRulesConsumersVirtualServiceToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesConsumersVirtualServiceToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersVirtualServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesConsumersVirtualService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesConsumersVirtualService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersVirtualServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesConsumersVirtualServiceOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesConsumersVirtualServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesConsumersWorkload {
}

export function dataIllumioCoreRuleSetsItemsRulesConsumersWorkloadToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesConsumersWorkloadToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumersWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersWorkloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesConsumersWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesConsumersWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersWorkloadList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesConsumersWorkloadOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesConsumersWorkloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesConsumers {
}

export function dataIllumioCoreRuleSetsItemsRulesConsumersToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesConsumersToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesConsumers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesConsumers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesConsumers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actors - computed: true, optional: false, required: false
  public get actors() {
    return this.getStringAttribute('actors');
  }

  // exclusion - computed: true, optional: false, required: false
  public get exclusion() {
    return this.getBooleanAttribute('exclusion');
  }

  // ip_list - computed: true, optional: false, required: false
  private _ipList = new DataIllumioCoreRuleSetsItemsRulesConsumersIpListStructList(this, "ip_list", true);
  public get ipList() {
    return this._ipList;
  }

  // label - computed: true, optional: false, required: false
  private _label = new DataIllumioCoreRuleSetsItemsRulesConsumersLabelList(this, "label", true);
  public get label() {
    return this._label;
  }

  // label_group - computed: true, optional: false, required: false
  private _labelGroup = new DataIllumioCoreRuleSetsItemsRulesConsumersLabelGroupList(this, "label_group", true);
  public get labelGroup() {
    return this._labelGroup;
  }

  // virtual_service - computed: true, optional: false, required: false
  private _virtualService = new DataIllumioCoreRuleSetsItemsRulesConsumersVirtualServiceList(this, "virtual_service", true);
  public get virtualService() {
    return this._virtualService;
  }

  // workload - computed: true, optional: false, required: false
  private _workload = new DataIllumioCoreRuleSetsItemsRulesConsumersWorkloadList(this, "workload", true);
  public get workload() {
    return this._workload;
  }
}

export class DataIllumioCoreRuleSetsItemsRulesConsumersList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesConsumersOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesIngressServices {
}

export function dataIllumioCoreRuleSetsItemsRulesIngressServicesToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesIngressServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesIngressServicesToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesIngressServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesIngressServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesIngressServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesIngressServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getStringAttribute('proto');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getStringAttribute('to_port');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesIngressServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesIngressServicesOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesIngressServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdns {
}

export function dataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdnsToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdnsToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdnsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdnsOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRanges {
}

export function dataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRangesToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRangesToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclusion - computed: true, optional: false, required: false
  public get exclusion() {
    return this.getBooleanAttribute('exclusion');
  }

  // from_ip - computed: true, optional: false, required: false
  public get fromIp() {
    return this.getStringAttribute('from_ip');
  }

  // to_ip - computed: true, optional: false, required: false
  public get toIp() {
    return this.getStringAttribute('to_ip');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRangesOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesProvidersIpListStruct {
}

export function dataIllumioCoreRuleSetsItemsRulesProvidersIpListStructToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesProvidersIpListStructToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesProvidersIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesProvidersIpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // external_data_reference - computed: true, optional: false, required: false
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }

  // external_data_set - computed: true, optional: false, required: false
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }

  // fqdns - computed: true, optional: false, required: false
  private _fqdns = new DataIllumioCoreRuleSetsItemsRulesProvidersIpListFqdnsList(this, "fqdns", false);
  public get fqdns() {
    return this._fqdns;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // ip_ranges - computed: true, optional: false, required: false
  private _ipRanges = new DataIllumioCoreRuleSetsItemsRulesProvidersIpListIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersIpListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesProvidersIpListStructOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesProvidersIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesProvidersLabel {
}

export function dataIllumioCoreRuleSetsItemsRulesProvidersLabelToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesProvidersLabelToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesProvidersLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesProvidersLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersLabelList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesProvidersLabelOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesProvidersLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesProvidersLabelGroup {
}

export function dataIllumioCoreRuleSetsItemsRulesProvidersLabelGroupToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesProvidersLabelGroupToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersLabelGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesProvidersLabelGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesProvidersLabelGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersLabelGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesProvidersLabelGroupOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesProvidersLabelGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServer {
}

export function dataIllumioCoreRuleSetsItemsRulesProvidersVirtualServerToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesProvidersVirtualServerToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServerList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServerOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesProvidersVirtualService {
}

export function dataIllumioCoreRuleSetsItemsRulesProvidersVirtualServiceToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesProvidersVirtualServiceToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesProvidersVirtualService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesProvidersVirtualService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServiceOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesProvidersWorkload {
}

export function dataIllumioCoreRuleSetsItemsRulesProvidersWorkloadToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesProvidersWorkloadToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProvidersWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersWorkloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesProvidersWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesProvidersWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersWorkloadList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesProvidersWorkloadOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesProvidersWorkloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesProviders {
}

export function dataIllumioCoreRuleSetsItemsRulesProvidersToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesProvidersToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actors - computed: true, optional: false, required: false
  public get actors() {
    return this.getStringAttribute('actors');
  }

  // exclusion - computed: true, optional: false, required: false
  public get exclusion() {
    return this.getBooleanAttribute('exclusion');
  }

  // ip_list - computed: true, optional: false, required: false
  private _ipList = new DataIllumioCoreRuleSetsItemsRulesProvidersIpListStructList(this, "ip_list", true);
  public get ipList() {
    return this._ipList;
  }

  // label - computed: true, optional: false, required: false
  private _label = new DataIllumioCoreRuleSetsItemsRulesProvidersLabelList(this, "label", true);
  public get label() {
    return this._label;
  }

  // label_group - computed: true, optional: false, required: false
  private _labelGroup = new DataIllumioCoreRuleSetsItemsRulesProvidersLabelGroupList(this, "label_group", true);
  public get labelGroup() {
    return this._labelGroup;
  }

  // virtual_server - computed: true, optional: false, required: false
  private _virtualServer = new DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServerList(this, "virtual_server", true);
  public get virtualServer() {
    return this._virtualServer;
  }

  // virtual_service - computed: true, optional: false, required: false
  private _virtualService = new DataIllumioCoreRuleSetsItemsRulesProvidersVirtualServiceList(this, "virtual_service", true);
  public get virtualService() {
    return this._virtualService;
  }

  // workload - computed: true, optional: false, required: false
  private _workload = new DataIllumioCoreRuleSetsItemsRulesProvidersWorkloadList(this, "workload", true);
  public get workload() {
    return this._workload;
  }
}

export class DataIllumioCoreRuleSetsItemsRulesProvidersList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesProvidersOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRulesResolveLabelsAs {
}

export function dataIllumioCoreRuleSetsItemsRulesResolveLabelsAsToTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesResolveLabelsAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesResolveLabelsAsToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRulesResolveLabelsAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesResolveLabelsAsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRulesResolveLabelsAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRulesResolveLabelsAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumers - computed: true, optional: false, required: false
  public get consumers() {
    return this.getListAttribute('consumers');
  }

  // providers - computed: true, optional: false, required: false
  public get providers() {
    return this.getListAttribute('providers');
  }
}

export class DataIllumioCoreRuleSetsItemsRulesResolveLabelsAsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesResolveLabelsAsOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesResolveLabelsAsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsRules {
}

export function dataIllumioCoreRuleSetsItemsRulesToTerraform(struct?: DataIllumioCoreRuleSetsItemsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsRulesToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumers - computed: true, optional: false, required: false
  private _consumers = new DataIllumioCoreRuleSetsItemsRulesConsumersList(this, "consumers", true);
  public get consumers() {
    return this._consumers;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // external_data_reference - computed: true, optional: false, required: false
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }

  // external_data_set - computed: true, optional: false, required: false
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // ingress_services - computed: true, optional: false, required: false
  private _ingressServices = new DataIllumioCoreRuleSetsItemsRulesIngressServicesList(this, "ingress_services", false);
  public get ingressServices() {
    return this._ingressServices;
  }

  // machine_auth - computed: true, optional: false, required: false
  public get machineAuth() {
    return this.getBooleanAttribute('machine_auth');
  }

  // providers - computed: true, optional: false, required: false
  private _providers = new DataIllumioCoreRuleSetsItemsRulesProvidersList(this, "providers", true);
  public get providers() {
    return this._providers;
  }

  // resolve_labels_as - computed: true, optional: false, required: false
  private _resolveLabelsAs = new DataIllumioCoreRuleSetsItemsRulesResolveLabelsAsList(this, "resolve_labels_as", false);
  public get resolveLabelsAs() {
    return this._resolveLabelsAs;
  }

  // rule_set_href - computed: true, optional: false, required: false
  public get ruleSetHref() {
    return this.getStringAttribute('rule_set_href');
  }

  // sec_connect - computed: true, optional: false, required: false
  public get secConnect() {
    return this.getBooleanAttribute('sec_connect');
  }

  // stateless - computed: true, optional: false, required: false
  public get stateless() {
    return this.getBooleanAttribute('stateless');
  }

  // unscoped_consumers - computed: true, optional: false, required: false
  public get unscopedConsumers() {
    return this.getBooleanAttribute('unscoped_consumers');
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // use_workload_subnets - computed: true, optional: false, required: false
  public get useWorkloadSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('use_workload_subnets'));
  }
}

export class DataIllumioCoreRuleSetsItemsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsRulesOutputReference {
    return new DataIllumioCoreRuleSetsItemsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItemsScopes {
}

export function dataIllumioCoreRuleSetsItemsScopesToTerraform(struct?: DataIllumioCoreRuleSetsItemsScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsScopesToHclTerraform(struct?: DataIllumioCoreRuleSetsItemsScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItemsScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItemsScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  private _label = new cdktf.StringMap(this, "label");
  public get label() {
    return this._label;
  }

  // label_group - computed: true, optional: false, required: false
  private _labelGroup = new cdktf.StringMap(this, "label_group");
  public get labelGroup() {
    return this._labelGroup;
  }
}

export class DataIllumioCoreRuleSetsItemsScopesListList extends cdktf.MapList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsScopesList {
    return new DataIllumioCoreRuleSetsItemsScopesList(this, `[${index}]`, false);
  }
}

export class DataIllumioCoreRuleSetsItemsScopesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsScopesOutputReference {
    return new DataIllumioCoreRuleSetsItemsScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreRuleSetsItems {
}

export function dataIllumioCoreRuleSetsItemsToTerraform(struct?: DataIllumioCoreRuleSetsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreRuleSetsItemsToHclTerraform(struct?: DataIllumioCoreRuleSetsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreRuleSetsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreRuleSetsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreRuleSetsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // external_data_reference - computed: true, optional: false, required: false
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }

  // external_data_set - computed: true, optional: false, required: false
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // ip_tables_rules - computed: true, optional: false, required: false
  private _ipTablesRules = new DataIllumioCoreRuleSetsItemsIpTablesRulesList(this, "ip_tables_rules", false);
  public get ipTablesRules() {
    return this._ipTablesRules;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataIllumioCoreRuleSetsItemsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // scopes - computed: true, optional: false, required: false
  private _scopes = new DataIllumioCoreRuleSetsItemsScopesListList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }
}

export class DataIllumioCoreRuleSetsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreRuleSetsItemsOutputReference {
    return new DataIllumioCoreRuleSetsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets illumio-core_rule_sets}
*/
export class DataIllumioCoreRuleSets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_rule_sets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIllumioCoreRuleSets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIllumioCoreRuleSets to import
  * @param importFromId The id of the existing DataIllumioCoreRuleSets that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIllumioCoreRuleSets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_rule_sets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/rule_sets illumio-core_rule_sets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIllumioCoreRuleSetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIllumioCoreRuleSetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_rule_sets',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._id = config.id;
    this._labels = config.labels;
    this._matchType = config.matchType;
    this._maxResults = config.maxResults;
    this._name = config.name;
    this._pversion = config.pversion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataIllumioCoreRuleSetsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: string; 
  public get maxResults() {
    return this.getStringAttribute('max_results');
  }
  public set maxResults(value: string) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // name - computed: false, optional: true, required: false
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

  // pversion - computed: false, optional: true, required: false
  private _pversion?: string; 
  public get pversion() {
    return this.getStringAttribute('pversion');
  }
  public set pversion(value: string) {
    this._pversion = value;
  }
  public resetPversion() {
    this._pversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pversionInput() {
    return this._pversion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.stringToTerraform(this._labels),
      match_type: cdktf.stringToTerraform(this._matchType),
      max_results: cdktf.stringToTerraform(this._maxResults),
      name: cdktf.stringToTerraform(this._name),
      pversion: cdktf.stringToTerraform(this._pversion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
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
      labels: {
        value: cdktf.stringToHclTerraform(this._labels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_results: {
        value: cdktf.stringToHclTerraform(this._maxResults),
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
      pversion: {
        value: cdktf.stringToHclTerraform(this._pversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
