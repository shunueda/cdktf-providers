// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/policy_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaPolicyTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/policy_type#id DataZpaPolicyType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/policy_type#microtenant_id DataZpaPolicyType#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/policy_type#microtenant_name DataZpaPolicyType#microtenant_name}
  */
  readonly microtenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/policy_type#policy_type DataZpaPolicyType#policy_type}
  */
  readonly policyType?: string;
}
export interface DataZpaPolicyTypeRulesConditionsOperands {
}

export function dataZpaPolicyTypeRulesConditionsOperandsToTerraform(struct?: DataZpaPolicyTypeRulesConditionsOperands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaPolicyTypeRulesConditionsOperandsToHclTerraform(struct?: DataZpaPolicyTypeRulesConditionsOperands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaPolicyTypeRulesConditionsOperandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaPolicyTypeRulesConditionsOperands | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaPolicyTypeRulesConditionsOperands | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_id - computed: true, optional: false, required: false
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }

  // lhs - computed: true, optional: false, required: false
  public get lhs() {
    return this.getStringAttribute('lhs');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // rhs - computed: true, optional: false, required: false
  public get rhs() {
    return this.getStringAttribute('rhs');
  }
}

export class DataZpaPolicyTypeRulesConditionsOperandsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaPolicyTypeRulesConditionsOperandsOutputReference {
    return new DataZpaPolicyTypeRulesConditionsOperandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaPolicyTypeRulesConditions {
}

export function dataZpaPolicyTypeRulesConditionsToTerraform(struct?: DataZpaPolicyTypeRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaPolicyTypeRulesConditionsToHclTerraform(struct?: DataZpaPolicyTypeRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaPolicyTypeRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaPolicyTypeRulesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaPolicyTypeRulesConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // operands - computed: true, optional: false, required: false
  private _operands = new DataZpaPolicyTypeRulesConditionsOperandsList(this, "operands", false);
  public get operands() {
    return this._operands;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}

export class DataZpaPolicyTypeRulesConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaPolicyTypeRulesConditionsOutputReference {
    return new DataZpaPolicyTypeRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaPolicyTypeRules {
}

export function dataZpaPolicyTypeRulesToTerraform(struct?: DataZpaPolicyTypeRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaPolicyTypeRulesToHclTerraform(struct?: DataZpaPolicyTypeRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaPolicyTypeRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaPolicyTypeRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaPolicyTypeRules | undefined) {
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

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // bypass_default_rule - computed: true, optional: false, required: false
  public get bypassDefaultRule() {
    return this.getBooleanAttribute('bypass_default_rule');
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataZpaPolicyTypeRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // custom_msg - computed: true, optional: false, required: false
  public get customMsg() {
    return this.getStringAttribute('custom_msg');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // isolation_default_rule - computed: true, optional: false, required: false
  public get isolationDefaultRule() {
    return this.getBooleanAttribute('isolation_default_rule');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // policy_set_id - computed: true, optional: false, required: false
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // reauth_default_rule - computed: true, optional: false, required: false
  public get reauthDefaultRule() {
    return this.getBooleanAttribute('reauth_default_rule');
  }

  // reauth_idle_timeout - computed: true, optional: false, required: false
  public get reauthIdleTimeout() {
    return this.getStringAttribute('reauth_idle_timeout');
  }

  // reauth_timeout - computed: true, optional: false, required: false
  public get reauthTimeout() {
    return this.getStringAttribute('reauth_timeout');
  }

  // rule_order - computed: true, optional: false, required: false
  public get ruleOrder() {
    return this.getStringAttribute('rule_order');
  }

  // zpn_cbi_profile_id - computed: true, optional: false, required: false
  public get zpnCbiProfileId() {
    return this.getStringAttribute('zpn_cbi_profile_id');
  }

  // zpn_inspection_profile_id - computed: true, optional: false, required: false
  public get zpnInspectionProfileId() {
    return this.getStringAttribute('zpn_inspection_profile_id');
  }
}

export class DataZpaPolicyTypeRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaPolicyTypeRulesOutputReference {
    return new DataZpaPolicyTypeRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/policy_type zpa_policy_type}
*/
export class DataZpaPolicyType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_policy_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaPolicyType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaPolicyType to import
  * @param importFromId The id of the existing DataZpaPolicyType that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/policy_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaPolicyType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_policy_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/policy_type zpa_policy_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaPolicyTypeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaPolicyTypeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_policy_type',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._microtenantId = config.microtenantId;
    this._microtenantName = config.microtenantName;
    this._policyType = config.policyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: false, optional: true, required: false
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

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // microtenant_name - computed: false, optional: true, required: false
  private _microtenantName?: string; 
  public get microtenantName() {
    return this.getStringAttribute('microtenant_name');
  }
  public set microtenantName(value: string) {
    this._microtenantName = value;
  }
  public resetMicrotenantName() {
    this._microtenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantNameInput() {
    return this._microtenantName;
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataZpaPolicyTypeRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // sorted - computed: true, optional: false, required: false
  public get sorted() {
    return this.getBooleanAttribute('sorted');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      microtenant_name: cdktf.stringToTerraform(this._microtenantName),
      policy_type: cdktf.stringToTerraform(this._policyType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_name: {
        value: cdktf.stringToHclTerraform(this._microtenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
