// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementThreatRuleExceptionRulebaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search expression to filter the rulebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#filter DataCheckpointManagementThreatRuleExceptionRulebase#filter}
  */
  readonly filter?: string;
  /**
  * Sets filter preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#filter_settings DataCheckpointManagementThreatRuleExceptionRulebase#filter_settings}
  */
  readonly filterSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#id DataCheckpointManagementThreatRuleExceptionRulebase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximal number of returned results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#limit DataCheckpointManagementThreatRuleExceptionRulebase#limit}
  */
  readonly limit?: number;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#name DataCheckpointManagementThreatRuleExceptionRulebase#name}
  */
  readonly name?: string;
  /**
  * Number of the results to initially skip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#offset DataCheckpointManagementThreatRuleExceptionRulebase#offset}
  */
  readonly offset?: number;
  /**
  * Sorts the results by search criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#order DataCheckpointManagementThreatRuleExceptionRulebase#order}
  */
  readonly order?: { [key: string]: string };
  /**
  * Name of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#package DataCheckpointManagementThreatRuleExceptionRulebase#package}
  */
  readonly package?: string;
  /**
  * The name of the parent rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#rule_name DataCheckpointManagementThreatRuleExceptionRulebase#rule_name}
  */
  readonly ruleName?: string;
  /**
  * The position in the rulebase of the parent rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#rule_number DataCheckpointManagementThreatRuleExceptionRulebase#rule_number}
  */
  readonly ruleNumber?: string;
  /**
  * The UID of the parent rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#rule_uid DataCheckpointManagementThreatRuleExceptionRulebase#rule_uid}
  */
  readonly ruleUid?: string;
  /**
  * Object uid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#uid DataCheckpointManagementThreatRuleExceptionRulebase#uid}
  */
  readonly uid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#use_object_dictionary DataCheckpointManagementThreatRuleExceptionRulebase#use_object_dictionary}
  */
  readonly useObjectDictionary?: boolean | cdktf.IResolvable;
}
export interface DataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionary {
}

export function dataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionaryToTerraform(struct?: DataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionaryToHclTerraform(struct?: DataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionaryList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionaryOutputReference {
    return new DataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebase {
}

export function dataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebaseToTerraform(struct?: DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebaseToHclTerraform(struct?: DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return cdktf.Fn.tolist(this.getListAttribute('destination'));
  }

  // destination_negate - computed: true, optional: false, required: false
  public get destinationNegate() {
    return this.getBooleanAttribute('destination_negate');
  }

  // exception_number - computed: true, optional: false, required: false
  public get exceptionNumber() {
    return this.getStringAttribute('exception_number');
  }

  // install_on - computed: true, optional: false, required: false
  public get installOn() {
    return cdktf.Fn.tolist(this.getListAttribute('install_on'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protected_scope - computed: true, optional: false, required: false
  public get protectedScope() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_scope'));
  }

  // protected_scope_negate - computed: true, optional: false, required: false
  public get protectedScopeNegate() {
    return this.getBooleanAttribute('protected_scope_negate');
  }

  // protection_or_site - computed: true, optional: false, required: false
  public get protectionOrSite() {
    return cdktf.Fn.tolist(this.getListAttribute('protection_or_site'));
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }

  // service_negate - computed: true, optional: false, required: false
  public get serviceNegate() {
    return this.getBooleanAttribute('service_negate');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return cdktf.Fn.tolist(this.getListAttribute('source'));
  }

  // source_negate - computed: true, optional: false, required: false
  public get sourceNegate() {
    return this.getBooleanAttribute('source_negate');
  }

  // track - computed: true, optional: false, required: false
  public get track() {
    return this.getStringAttribute('track');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebaseList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebaseOutputReference {
    return new DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementThreatRuleExceptionRulebaseRulebase {
}

export function dataCheckpointManagementThreatRuleExceptionRulebaseRulebaseToTerraform(struct?: DataCheckpointManagementThreatRuleExceptionRulebaseRulebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementThreatRuleExceptionRulebaseRulebaseToHclTerraform(struct?: DataCheckpointManagementThreatRuleExceptionRulebaseRulebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementThreatRuleExceptionRulebaseRulebase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementThreatRuleExceptionRulebaseRulebase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rulebase - computed: true, optional: false, required: false
  private _rulebase = new DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseRulebaseList(this, "rulebase", false);
  public get rulebase() {
    return this._rulebase;
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseOutputReference {
    return new DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase checkpoint_management_threat_rule_exception_rulebase}
*/
export class DataCheckpointManagementThreatRuleExceptionRulebase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_threat_rule_exception_rulebase";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementThreatRuleExceptionRulebase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementThreatRuleExceptionRulebase to import
  * @param importFromId The id of the existing DataCheckpointManagementThreatRuleExceptionRulebase that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementThreatRuleExceptionRulebase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_threat_rule_exception_rulebase", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_rule_exception_rulebase checkpoint_management_threat_rule_exception_rulebase} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementThreatRuleExceptionRulebaseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementThreatRuleExceptionRulebaseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_threat_rule_exception_rulebase',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._filterSettings = config.filterSettings;
    this._id = config.id;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._order = config.order;
    this._package = config.package;
    this._ruleName = config.ruleName;
    this._ruleNumber = config.ruleNumber;
    this._ruleUid = config.ruleUid;
    this._uid = config.uid;
    this._useObjectDictionary = config.useObjectDictionary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // filter_settings - computed: false, optional: true, required: false
  private _filterSettings?: { [key: string]: string }; 
  public get filterSettings() {
    return this.getStringMapAttribute('filter_settings');
  }
  public set filterSettings(value: { [key: string]: string }) {
    this._filterSettings = value;
  }
  public resetFilterSettings() {
    this._filterSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSettingsInput() {
    return this._filterSettings;
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // objects_dictionary - computed: true, optional: false, required: false
  private _objectsDictionary = new DataCheckpointManagementThreatRuleExceptionRulebaseObjectsDictionaryList(this, "objects_dictionary", false);
  public get objectsDictionary() {
    return this._objectsDictionary;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // order - computed: false, optional: true, required: false
  private _order?: { [key: string]: string }; 
  public get order() {
    return this.getStringMapAttribute('order');
  }
  public set order(value: { [key: string]: string }) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // package - computed: false, optional: true, required: false
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  public resetPackage() {
    this._package = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_number - computed: false, optional: true, required: false
  private _ruleNumber?: string; 
  public get ruleNumber() {
    return this.getStringAttribute('rule_number');
  }
  public set ruleNumber(value: string) {
    this._ruleNumber = value;
  }
  public resetRuleNumber() {
    this._ruleNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // rule_uid - computed: false, optional: true, required: false
  private _ruleUid?: string; 
  public get ruleUid() {
    return this.getStringAttribute('rule_uid');
  }
  public set ruleUid(value: string) {
    this._ruleUid = value;
  }
  public resetRuleUid() {
    this._ruleUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleUidInput() {
    return this._ruleUid;
  }

  // rulebase - computed: true, optional: false, required: false
  private _rulebase = new DataCheckpointManagementThreatRuleExceptionRulebaseRulebaseList(this, "rulebase", false);
  public get rulebase() {
    return this._rulebase;
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // use_object_dictionary - computed: false, optional: true, required: false
  private _useObjectDictionary?: boolean | cdktf.IResolvable; 
  public get useObjectDictionary() {
    return this.getBooleanAttribute('use_object_dictionary');
  }
  public set useObjectDictionary(value: boolean | cdktf.IResolvable) {
    this._useObjectDictionary = value;
  }
  public resetUseObjectDictionary() {
    this._useObjectDictionary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useObjectDictionaryInput() {
    return this._useObjectDictionary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      filter_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._filterSettings),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      order: cdktf.hashMapper(cdktf.stringToTerraform)(this._order),
      package: cdktf.stringToTerraform(this._package),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_number: cdktf.stringToTerraform(this._ruleNumber),
      rule_uid: cdktf.stringToTerraform(this._ruleUid),
      uid: cdktf.stringToTerraform(this._uid),
      use_object_dictionary: cdktf.booleanToTerraform(this._useObjectDictionary),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filterSettings),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._order),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      package: {
        value: cdktf.stringToHclTerraform(this._package),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_number: {
        value: cdktf.stringToHclTerraform(this._ruleNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_uid: {
        value: cdktf.stringToHclTerraform(this._ruleUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_object_dictionary: {
        value: cdktf.booleanToHclTerraform(this._useObjectDictionary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
