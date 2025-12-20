// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessRulesDecisionTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The decision table description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#description BusinessRulesDecisionTable#description}
  */
  readonly description?: string;
  /**
  * The ID of the division the decision table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#division_id BusinessRulesDecisionTable#division_id}
  */
  readonly divisionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#id BusinessRulesDecisionTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The decision table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#name BusinessRulesDecisionTable#name}
  */
  readonly name: string;
  /**
  * The ID of the rules schema used by the decision table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#schema_id BusinessRulesDecisionTable#schema_id}
  */
  readonly schemaId: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#columns BusinessRulesDecisionTable#columns}
  */
  readonly columns: BusinessRulesDecisionTableColumns;
  /**
  * rows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#rows BusinessRulesDecisionTable#rows}
  */
  readonly rows: BusinessRulesDecisionTableRows[] | cdktf.IResolvable;
}
export interface BusinessRulesDecisionTableColumnsInputsDefaultsTo {
  /**
  * A default special value enum for this column.Valid values: Wildcard, Null, Empty, CurrentTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#special BusinessRulesDecisionTable#special}
  */
  readonly special?: string;
  /**
  * A default string value for this column, will be cast to appropriate type according to the relevant contract schema property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#value BusinessRulesDecisionTable#value}
  */
  readonly value?: string;
  /**
  * A default list of string values for this column. Used for stringList data types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#values BusinessRulesDecisionTable#values}
  */
  readonly values?: string[];
}

export function businessRulesDecisionTableColumnsInputsDefaultsToToTerraform(struct?: BusinessRulesDecisionTableColumnsInputsDefaultsToOutputReference | BusinessRulesDecisionTableColumnsInputsDefaultsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    special: cdktf.stringToTerraform(struct!.special),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function businessRulesDecisionTableColumnsInputsDefaultsToToHclTerraform(struct?: BusinessRulesDecisionTableColumnsInputsDefaultsToOutputReference | BusinessRulesDecisionTableColumnsInputsDefaultsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    special: {
      value: cdktf.stringToHclTerraform(struct!.special),
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

export class BusinessRulesDecisionTableColumnsInputsDefaultsToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessRulesDecisionTableColumnsInputsDefaultsTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._special !== undefined) {
      hasAnyValues = true;
      internalValueResult.special = this._special;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsInputsDefaultsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._special = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._special = value.special;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // special - computed: false, optional: true, required: false
  private _special?: string; 
  public get special() {
    return this.getStringAttribute('special');
  }
  public set special(value: string) {
    this._special = value;
  }
  public resetSpecial() {
    this._special = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialInput() {
    return this._special;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractual {
  /**
  * The contract schema property key that describes the input value of this column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#schema_property_key BusinessRulesDecisionTable#schema_property_key}
  */
  readonly schemaPropertyKey: string;
}

export function businessRulesDecisionTableColumnsInputsExpressionContractualContractualContractualToTerraform(struct?: BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractualOutputReference | BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_property_key: cdktf.stringToTerraform(struct!.schemaPropertyKey),
  }
}


export function businessRulesDecisionTableColumnsInputsExpressionContractualContractualContractualToHclTerraform(struct?: BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractualOutputReference | BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_property_key: {
      value: cdktf.stringToHclTerraform(struct!.schemaPropertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaPropertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaPropertyKey = this._schemaPropertyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaPropertyKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaPropertyKey = value.schemaPropertyKey;
    }
  }

  // schema_property_key - computed: false, optional: false, required: true
  private _schemaPropertyKey?: string; 
  public get schemaPropertyKey() {
    return this.getStringAttribute('schema_property_key');
  }
  public set schemaPropertyKey(value: string) {
    this._schemaPropertyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaPropertyKeyInput() {
    return this._schemaPropertyKey;
  }
}
export interface BusinessRulesDecisionTableColumnsInputsExpressionContractualContractual {
  /**
  * The contract schema property key that describes the input value of this column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#schema_property_key BusinessRulesDecisionTable#schema_property_key}
  */
  readonly schemaPropertyKey: string;
  /**
  * contractual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#contractual BusinessRulesDecisionTable#contractual}
  */
  readonly contractual?: BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractual;
}

export function businessRulesDecisionTableColumnsInputsExpressionContractualContractualToTerraform(struct?: BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualOutputReference | BusinessRulesDecisionTableColumnsInputsExpressionContractualContractual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_property_key: cdktf.stringToTerraform(struct!.schemaPropertyKey),
    contractual: businessRulesDecisionTableColumnsInputsExpressionContractualContractualContractualToTerraform(struct!.contractual),
  }
}


export function businessRulesDecisionTableColumnsInputsExpressionContractualContractualToHclTerraform(struct?: BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualOutputReference | BusinessRulesDecisionTableColumnsInputsExpressionContractualContractual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_property_key: {
      value: cdktf.stringToHclTerraform(struct!.schemaPropertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contractual: {
      value: businessRulesDecisionTableColumnsInputsExpressionContractualContractualContractualToHclTerraform(struct!.contractual),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractualList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessRulesDecisionTableColumnsInputsExpressionContractualContractual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaPropertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaPropertyKey = this._schemaPropertyKey;
    }
    if (this._contractual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractual = this._contractual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsInputsExpressionContractualContractual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaPropertyKey = undefined;
      this._contractual.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaPropertyKey = value.schemaPropertyKey;
      this._contractual.internalValue = value.contractual;
    }
  }

  // schema_property_key - computed: false, optional: false, required: true
  private _schemaPropertyKey?: string; 
  public get schemaPropertyKey() {
    return this.getStringAttribute('schema_property_key');
  }
  public set schemaPropertyKey(value: string) {
    this._schemaPropertyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaPropertyKeyInput() {
    return this._schemaPropertyKey;
  }

  // contractual - computed: false, optional: true, required: false
  private _contractual = new BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractualOutputReference(this, "contractual");
  public get contractual() {
    return this._contractual;
  }
  public putContractual(value: BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualContractual) {
    this._contractual.internalValue = value;
  }
  public resetContractual() {
    this._contractual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractualInput() {
    return this._contractual.internalValue;
  }
}
export interface BusinessRulesDecisionTableColumnsInputsExpressionContractual {
  /**
  * The contract schema property key that describes the input value of this column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#schema_property_key BusinessRulesDecisionTable#schema_property_key}
  */
  readonly schemaPropertyKey: string;
  /**
  * contractual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#contractual BusinessRulesDecisionTable#contractual}
  */
  readonly contractual?: BusinessRulesDecisionTableColumnsInputsExpressionContractualContractual;
}

export function businessRulesDecisionTableColumnsInputsExpressionContractualToTerraform(struct?: BusinessRulesDecisionTableColumnsInputsExpressionContractualOutputReference | BusinessRulesDecisionTableColumnsInputsExpressionContractual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_property_key: cdktf.stringToTerraform(struct!.schemaPropertyKey),
    contractual: businessRulesDecisionTableColumnsInputsExpressionContractualContractualToTerraform(struct!.contractual),
  }
}


export function businessRulesDecisionTableColumnsInputsExpressionContractualToHclTerraform(struct?: BusinessRulesDecisionTableColumnsInputsExpressionContractualOutputReference | BusinessRulesDecisionTableColumnsInputsExpressionContractual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_property_key: {
      value: cdktf.stringToHclTerraform(struct!.schemaPropertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contractual: {
      value: businessRulesDecisionTableColumnsInputsExpressionContractualContractualToHclTerraform(struct!.contractual),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsInputsExpressionContractualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessRulesDecisionTableColumnsInputsExpressionContractual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaPropertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaPropertyKey = this._schemaPropertyKey;
    }
    if (this._contractual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractual = this._contractual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsInputsExpressionContractual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaPropertyKey = undefined;
      this._contractual.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaPropertyKey = value.schemaPropertyKey;
      this._contractual.internalValue = value.contractual;
    }
  }

  // schema_property_key - computed: false, optional: false, required: true
  private _schemaPropertyKey?: string; 
  public get schemaPropertyKey() {
    return this.getStringAttribute('schema_property_key');
  }
  public set schemaPropertyKey(value: string) {
    this._schemaPropertyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaPropertyKeyInput() {
    return this._schemaPropertyKey;
  }

  // contractual - computed: false, optional: true, required: false
  private _contractual = new BusinessRulesDecisionTableColumnsInputsExpressionContractualContractualOutputReference(this, "contractual");
  public get contractual() {
    return this._contractual;
  }
  public putContractual(value: BusinessRulesDecisionTableColumnsInputsExpressionContractualContractual) {
    this._contractual.internalValue = value;
  }
  public resetContractual() {
    this._contractual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractualInput() {
    return this._contractual.internalValue;
  }
}
export interface BusinessRulesDecisionTableColumnsInputsExpression {
  /**
  * A comparator used to join the left and right sides of a logical condition. Valid values: Equals, NotEquals, GreaterThan, GreaterThanOrEquals, LessThan, LessThanOrEquals, StartsWith, NotStartsWith, EndsWith, NotEndsWith, Contains, NotContains, ContainsAny, NotContainsAny, ContainsAll, NotContainsAll, ContainsExactly, NotContainsExactly, ContainsSequence, NotContainsSequence, IsSubset, NotIsSubset, IsSubsequence, NotIsSubsequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#comparator BusinessRulesDecisionTable#comparator}
  */
  readonly comparator: string;
  /**
  * contractual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#contractual BusinessRulesDecisionTable#contractual}
  */
  readonly contractual: BusinessRulesDecisionTableColumnsInputsExpressionContractual;
}

export function businessRulesDecisionTableColumnsInputsExpressionToTerraform(struct?: BusinessRulesDecisionTableColumnsInputsExpressionOutputReference | BusinessRulesDecisionTableColumnsInputsExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    contractual: businessRulesDecisionTableColumnsInputsExpressionContractualToTerraform(struct!.contractual),
  }
}


export function businessRulesDecisionTableColumnsInputsExpressionToHclTerraform(struct?: BusinessRulesDecisionTableColumnsInputsExpressionOutputReference | BusinessRulesDecisionTableColumnsInputsExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contractual: {
      value: businessRulesDecisionTableColumnsInputsExpressionContractualToHclTerraform(struct!.contractual),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsInputsExpressionContractualList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsInputsExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessRulesDecisionTableColumnsInputsExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._contractual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractual = this._contractual?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsInputsExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparator = undefined;
      this._contractual.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparator = value.comparator;
      this._contractual.internalValue = value.contractual;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // contractual - computed: false, optional: false, required: true
  private _contractual = new BusinessRulesDecisionTableColumnsInputsExpressionContractualOutputReference(this, "contractual");
  public get contractual() {
    return this._contractual;
  }
  public putContractual(value: BusinessRulesDecisionTableColumnsInputsExpressionContractual) {
    this._contractual.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractualInput() {
    return this._contractual.internalValue;
  }
}
export interface BusinessRulesDecisionTableColumnsInputs {
  /**
  * defaults_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#defaults_to BusinessRulesDecisionTable#defaults_to}
  */
  readonly defaultsTo: BusinessRulesDecisionTableColumnsInputsDefaultsTo;
  /**
  * expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#expression BusinessRulesDecisionTable#expression}
  */
  readonly expression: BusinessRulesDecisionTableColumnsInputsExpression;
}

export function businessRulesDecisionTableColumnsInputsToTerraform(struct?: BusinessRulesDecisionTableColumnsInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults_to: businessRulesDecisionTableColumnsInputsDefaultsToToTerraform(struct!.defaultsTo),
    expression: businessRulesDecisionTableColumnsInputsExpressionToTerraform(struct!.expression),
  }
}


export function businessRulesDecisionTableColumnsInputsToHclTerraform(struct?: BusinessRulesDecisionTableColumnsInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaults_to: {
      value: businessRulesDecisionTableColumnsInputsDefaultsToToHclTerraform(struct!.defaultsTo),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsInputsDefaultsToList",
    },
    expression: {
      value: businessRulesDecisionTableColumnsInputsExpressionToHclTerraform(struct!.expression),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsInputsExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsInputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessRulesDecisionTableColumnsInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultsTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultsTo = this._defaultsTo?.internalValue;
    }
    if (this._expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultsTo.internalValue = undefined;
      this._expression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultsTo.internalValue = value.defaultsTo;
      this._expression.internalValue = value.expression;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // defaults_to - computed: false, optional: false, required: true
  private _defaultsTo = new BusinessRulesDecisionTableColumnsInputsDefaultsToOutputReference(this, "defaults_to");
  public get defaultsTo() {
    return this._defaultsTo;
  }
  public putDefaultsTo(value: BusinessRulesDecisionTableColumnsInputsDefaultsTo) {
    this._defaultsTo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsToInput() {
    return this._defaultsTo.internalValue;
  }

  // expression - computed: false, optional: false, required: true
  private _expression = new BusinessRulesDecisionTableColumnsInputsExpressionOutputReference(this, "expression");
  public get expression() {
    return this._expression;
  }
  public putExpression(value: BusinessRulesDecisionTableColumnsInputsExpression) {
    this._expression.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression.internalValue;
  }
}

export class BusinessRulesDecisionTableColumnsInputsList extends cdktf.ComplexList {
  public internalValue? : BusinessRulesDecisionTableColumnsInputs[] | cdktf.IResolvable

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
  public get(index: number): BusinessRulesDecisionTableColumnsInputsOutputReference {
    return new BusinessRulesDecisionTableColumnsInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessRulesDecisionTableColumnsOutputsDefaultsTo {
  /**
  * A default special value enum for this column.Valid values: Wildcard, Null, Empty, CurrentTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#special BusinessRulesDecisionTable#special}
  */
  readonly special?: string;
  /**
  * A default string value for this column, will be cast to appropriate type according to the relevant contract schema property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#value BusinessRulesDecisionTable#value}
  */
  readonly value?: string;
  /**
  * A default list of string values for this column. Used for stringList data types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#values BusinessRulesDecisionTable#values}
  */
  readonly values?: string[];
}

export function businessRulesDecisionTableColumnsOutputsDefaultsToToTerraform(struct?: BusinessRulesDecisionTableColumnsOutputsDefaultsToOutputReference | BusinessRulesDecisionTableColumnsOutputsDefaultsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    special: cdktf.stringToTerraform(struct!.special),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function businessRulesDecisionTableColumnsOutputsDefaultsToToHclTerraform(struct?: BusinessRulesDecisionTableColumnsOutputsDefaultsToOutputReference | BusinessRulesDecisionTableColumnsOutputsDefaultsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    special: {
      value: cdktf.stringToHclTerraform(struct!.special),
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

export class BusinessRulesDecisionTableColumnsOutputsDefaultsToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessRulesDecisionTableColumnsOutputsDefaultsTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._special !== undefined) {
      hasAnyValues = true;
      internalValueResult.special = this._special;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsOutputsDefaultsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._special = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._special = value.special;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // special - computed: false, optional: true, required: false
  private _special?: string; 
  public get special() {
    return this.getStringAttribute('special');
  }
  public set special(value: string) {
    this._special = value;
  }
  public resetSpecial() {
    this._special = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialInput() {
    return this._special;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesProperties {
  /**
  * The contract schema property key that describes the nested property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#schema_property_key BusinessRulesDecisionTable#schema_property_key}
  */
  readonly schemaPropertyKey: string;
}

export function businessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesPropertiesToTerraform(struct?: BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_property_key: cdktf.stringToTerraform(struct!.schemaPropertyKey),
  }
}


export function businessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesPropertiesToHclTerraform(struct?: BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_property_key: {
      value: cdktf.stringToHclTerraform(struct!.schemaPropertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaPropertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaPropertyKey = this._schemaPropertyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaPropertyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaPropertyKey = value.schemaPropertyKey;
    }
  }

  // schema_property_key - computed: false, optional: false, required: true
  private _schemaPropertyKey?: string; 
  public get schemaPropertyKey() {
    return this.getStringAttribute('schema_property_key');
  }
  public set schemaPropertyKey(value: string) {
    this._schemaPropertyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaPropertyKeyInput() {
    return this._schemaPropertyKey;
  }
}

export class BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesPropertiesList extends cdktf.ComplexList {
  public internalValue? : BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesProperties[] | cdktf.IResolvable

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
  public get(index: number): BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesPropertiesOutputReference {
    return new BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessRulesDecisionTableColumnsOutputsValuePropertiesProperties {
  /**
  * The contract schema property key that describes the nested property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#schema_property_key BusinessRulesDecisionTable#schema_property_key}
  */
  readonly schemaPropertyKey: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#properties BusinessRulesDecisionTable#properties}
  */
  readonly properties?: BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesProperties[] | cdktf.IResolvable;
}

export function businessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesToTerraform(struct?: BusinessRulesDecisionTableColumnsOutputsValuePropertiesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_property_key: cdktf.stringToTerraform(struct!.schemaPropertyKey),
    properties: cdktf.listMapper(businessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesPropertiesToTerraform, true)(struct!.properties),
  }
}


export function businessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesToHclTerraform(struct?: BusinessRulesDecisionTableColumnsOutputsValuePropertiesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_property_key: {
      value: cdktf.stringToHclTerraform(struct!.schemaPropertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(businessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessRulesDecisionTableColumnsOutputsValuePropertiesProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaPropertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaPropertyKey = this._schemaPropertyKey;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsOutputsValuePropertiesProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaPropertyKey = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaPropertyKey = value.schemaPropertyKey;
      this._properties.internalValue = value.properties;
    }
  }

  // schema_property_key - computed: false, optional: false, required: true
  private _schemaPropertyKey?: string; 
  public get schemaPropertyKey() {
    return this.getStringAttribute('schema_property_key');
  }
  public set schemaPropertyKey(value: string) {
    this._schemaPropertyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaPropertyKeyInput() {
    return this._schemaPropertyKey;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesList extends cdktf.ComplexList {
  public internalValue? : BusinessRulesDecisionTableColumnsOutputsValuePropertiesProperties[] | cdktf.IResolvable

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
  public get(index: number): BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesOutputReference {
    return new BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessRulesDecisionTableColumnsOutputsValueProperties {
  /**
  * The contract schema property key that describes the nested property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#schema_property_key BusinessRulesDecisionTable#schema_property_key}
  */
  readonly schemaPropertyKey: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#properties BusinessRulesDecisionTable#properties}
  */
  readonly properties?: BusinessRulesDecisionTableColumnsOutputsValuePropertiesProperties[] | cdktf.IResolvable;
}

export function businessRulesDecisionTableColumnsOutputsValuePropertiesToTerraform(struct?: BusinessRulesDecisionTableColumnsOutputsValueProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_property_key: cdktf.stringToTerraform(struct!.schemaPropertyKey),
    properties: cdktf.listMapper(businessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesToTerraform, true)(struct!.properties),
  }
}


export function businessRulesDecisionTableColumnsOutputsValuePropertiesToHclTerraform(struct?: BusinessRulesDecisionTableColumnsOutputsValueProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_property_key: {
      value: cdktf.stringToHclTerraform(struct!.schemaPropertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(businessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsOutputsValuePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessRulesDecisionTableColumnsOutputsValueProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaPropertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaPropertyKey = this._schemaPropertyKey;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsOutputsValueProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaPropertyKey = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaPropertyKey = value.schemaPropertyKey;
      this._properties.internalValue = value.properties;
    }
  }

  // schema_property_key - computed: false, optional: false, required: true
  private _schemaPropertyKey?: string; 
  public get schemaPropertyKey() {
    return this.getStringAttribute('schema_property_key');
  }
  public set schemaPropertyKey(value: string) {
    this._schemaPropertyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaPropertyKeyInput() {
    return this._schemaPropertyKey;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new BusinessRulesDecisionTableColumnsOutputsValuePropertiesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: BusinessRulesDecisionTableColumnsOutputsValuePropertiesProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class BusinessRulesDecisionTableColumnsOutputsValuePropertiesList extends cdktf.ComplexList {
  public internalValue? : BusinessRulesDecisionTableColumnsOutputsValueProperties[] | cdktf.IResolvable

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
  public get(index: number): BusinessRulesDecisionTableColumnsOutputsValuePropertiesOutputReference {
    return new BusinessRulesDecisionTableColumnsOutputsValuePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessRulesDecisionTableColumnsOutputsValue {
  /**
  * The contract schema property key that describes the output value of this column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#schema_property_key BusinessRulesDecisionTable#schema_property_key}
  */
  readonly schemaPropertyKey: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#properties BusinessRulesDecisionTable#properties}
  */
  readonly properties?: BusinessRulesDecisionTableColumnsOutputsValueProperties[] | cdktf.IResolvable;
}

export function businessRulesDecisionTableColumnsOutputsValueToTerraform(struct?: BusinessRulesDecisionTableColumnsOutputsValueOutputReference | BusinessRulesDecisionTableColumnsOutputsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_property_key: cdktf.stringToTerraform(struct!.schemaPropertyKey),
    properties: cdktf.listMapper(businessRulesDecisionTableColumnsOutputsValuePropertiesToTerraform, true)(struct!.properties),
  }
}


export function businessRulesDecisionTableColumnsOutputsValueToHclTerraform(struct?: BusinessRulesDecisionTableColumnsOutputsValueOutputReference | BusinessRulesDecisionTableColumnsOutputsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_property_key: {
      value: cdktf.stringToHclTerraform(struct!.schemaPropertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(businessRulesDecisionTableColumnsOutputsValuePropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsOutputsValuePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsOutputsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessRulesDecisionTableColumnsOutputsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaPropertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaPropertyKey = this._schemaPropertyKey;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsOutputsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaPropertyKey = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaPropertyKey = value.schemaPropertyKey;
      this._properties.internalValue = value.properties;
    }
  }

  // schema_property_key - computed: false, optional: false, required: true
  private _schemaPropertyKey?: string; 
  public get schemaPropertyKey() {
    return this.getStringAttribute('schema_property_key');
  }
  public set schemaPropertyKey(value: string) {
    this._schemaPropertyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaPropertyKeyInput() {
    return this._schemaPropertyKey;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new BusinessRulesDecisionTableColumnsOutputsValuePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: BusinessRulesDecisionTableColumnsOutputsValueProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface BusinessRulesDecisionTableColumnsOutputs {
  /**
  * defaults_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#defaults_to BusinessRulesDecisionTable#defaults_to}
  */
  readonly defaultsTo: BusinessRulesDecisionTableColumnsOutputsDefaultsTo;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#value BusinessRulesDecisionTable#value}
  */
  readonly value: BusinessRulesDecisionTableColumnsOutputsValue;
}

export function businessRulesDecisionTableColumnsOutputsToTerraform(struct?: BusinessRulesDecisionTableColumnsOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults_to: businessRulesDecisionTableColumnsOutputsDefaultsToToTerraform(struct!.defaultsTo),
    value: businessRulesDecisionTableColumnsOutputsValueToTerraform(struct!.value),
  }
}


export function businessRulesDecisionTableColumnsOutputsToHclTerraform(struct?: BusinessRulesDecisionTableColumnsOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaults_to: {
      value: businessRulesDecisionTableColumnsOutputsDefaultsToToHclTerraform(struct!.defaultsTo),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsOutputsDefaultsToList",
    },
    value: {
      value: businessRulesDecisionTableColumnsOutputsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsOutputsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessRulesDecisionTableColumnsOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultsTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultsTo = this._defaultsTo?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumnsOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultsTo.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultsTo.internalValue = value.defaultsTo;
      this._value.internalValue = value.value;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // defaults_to - computed: false, optional: false, required: true
  private _defaultsTo = new BusinessRulesDecisionTableColumnsOutputsDefaultsToOutputReference(this, "defaults_to");
  public get defaultsTo() {
    return this._defaultsTo;
  }
  public putDefaultsTo(value: BusinessRulesDecisionTableColumnsOutputsDefaultsTo) {
    this._defaultsTo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsToInput() {
    return this._defaultsTo.internalValue;
  }

  // value - computed: false, optional: false, required: true
  private _value = new BusinessRulesDecisionTableColumnsOutputsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: BusinessRulesDecisionTableColumnsOutputsValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class BusinessRulesDecisionTableColumnsOutputsList extends cdktf.ComplexList {
  public internalValue? : BusinessRulesDecisionTableColumnsOutputs[] | cdktf.IResolvable

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
  public get(index: number): BusinessRulesDecisionTableColumnsOutputsOutputReference {
    return new BusinessRulesDecisionTableColumnsOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessRulesDecisionTableColumns {
  /**
  * inputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#inputs BusinessRulesDecisionTable#inputs}
  */
  readonly inputs: BusinessRulesDecisionTableColumnsInputs[] | cdktf.IResolvable;
  /**
  * outputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#outputs BusinessRulesDecisionTable#outputs}
  */
  readonly outputs: BusinessRulesDecisionTableColumnsOutputs[] | cdktf.IResolvable;
}

export function businessRulesDecisionTableColumnsToTerraform(struct?: BusinessRulesDecisionTableColumnsOutputReference | BusinessRulesDecisionTableColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inputs: cdktf.listMapper(businessRulesDecisionTableColumnsInputsToTerraform, true)(struct!.inputs),
    outputs: cdktf.listMapper(businessRulesDecisionTableColumnsOutputsToTerraform, true)(struct!.outputs),
  }
}


export function businessRulesDecisionTableColumnsToHclTerraform(struct?: BusinessRulesDecisionTableColumnsOutputReference | BusinessRulesDecisionTableColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inputs: {
      value: cdktf.listMapperHcl(businessRulesDecisionTableColumnsInputsToHclTerraform, true)(struct!.inputs),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsInputsList",
    },
    outputs: {
      value: cdktf.listMapperHcl(businessRulesDecisionTableColumnsOutputsToHclTerraform, true)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableColumnsOutputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessRulesDecisionTableColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputs.internalValue = undefined;
      this._outputs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputs.internalValue = value.inputs;
      this._outputs.internalValue = value.outputs;
    }
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs = new BusinessRulesDecisionTableColumnsInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: BusinessRulesDecisionTableColumnsInputs[] | cdktf.IResolvable) {
    this._inputs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }

  // outputs - computed: false, optional: false, required: true
  private _outputs = new BusinessRulesDecisionTableColumnsOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: BusinessRulesDecisionTableColumnsOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }
}
export interface BusinessRulesDecisionTableRowsInputsLiteral {
  /**
  * The type of the literal value. Set to empty string "" to use column default.
  * 
  * 								Supported types:
  * 								- string: A string value
  * 								- integer: A positive or negative whole number, including zero
  * 								- number: A positive or negative decimal number, including zero
  * 								- date: A date value, must be in the format of yyyy-MM-dd, e.g. 2024-09-23. Dates are represented as an ISO-8601 string
  * 								- datetime: A date time value, must be in the format of yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g. 2024-10-02T01:01:01.111Z. Date time is represented as an ISO-8601 string
  * 								- special: A special value enum, such as Wildcard, Null, etc. Valid values: Wildcard, Null, Empty, CurrentTime
  * 								- boolean: A boolean value
  * 								- stringList: A list of string values, provided as comma-separated string
  * 								- "": An empty string "" to use column default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#type BusinessRulesDecisionTable#type}
  */
  readonly type?: string;
  /**
  * The literal value. IMPORTANT: All values must be wrapped in quotes, even numbers and booleans.
  * 								Set to empty string "" to use column default.
  * 
  * 								Examples:
  * 								- String: "VIP", "Hello World"
  * 								- Integer: "42", "0", "-10"
  * 								- Number: "3.14", "0.0", "-1.5" (formatting differences like "1.0" vs "1" are automatically handled)
  * 								- Boolean: "true", "false"
  * 								- Date: "2023-01-01"
  * 								- DateTime: "2023-01-01T12:00:00.000Z"
  * 								- Special: "Wildcard", "Null", "Empty", "CurrentTime"
  * 								- StringList: "item1,item2,item3" (comma-separated string)
  * 								- Default: Empty string "" uses column default Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#value BusinessRulesDecisionTable#value}
  */
  readonly value?: string;
}

export function businessRulesDecisionTableRowsInputsLiteralToTerraform(struct?: BusinessRulesDecisionTableRowsInputsLiteralOutputReference | BusinessRulesDecisionTableRowsInputsLiteral): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function businessRulesDecisionTableRowsInputsLiteralToHclTerraform(struct?: BusinessRulesDecisionTableRowsInputsLiteralOutputReference | BusinessRulesDecisionTableRowsInputsLiteral): any {
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

export class BusinessRulesDecisionTableRowsInputsLiteralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessRulesDecisionTableRowsInputsLiteral | undefined {
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

  public set internalValue(value: BusinessRulesDecisionTableRowsInputsLiteral | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
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
export interface BusinessRulesDecisionTableRowsInputs {
  /**
  * literal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#literal BusinessRulesDecisionTable#literal}
  */
  readonly literal: BusinessRulesDecisionTableRowsInputsLiteral;
}

export function businessRulesDecisionTableRowsInputsToTerraform(struct?: BusinessRulesDecisionTableRowsInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: businessRulesDecisionTableRowsInputsLiteralToTerraform(struct!.literal),
  }
}


export function businessRulesDecisionTableRowsInputsToHclTerraform(struct?: BusinessRulesDecisionTableRowsInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: businessRulesDecisionTableRowsInputsLiteralToHclTerraform(struct!.literal),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableRowsInputsLiteralList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableRowsInputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessRulesDecisionTableRowsInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableRowsInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal.internalValue = value.literal;
    }
  }

  // column_id - computed: true, optional: false, required: false
  public get columnId() {
    return this.getStringAttribute('column_id');
  }

  // literal - computed: false, optional: false, required: true
  private _literal = new BusinessRulesDecisionTableRowsInputsLiteralOutputReference(this, "literal");
  public get literal() {
    return this._literal;
  }
  public putLiteral(value: BusinessRulesDecisionTableRowsInputsLiteral) {
    this._literal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal.internalValue;
  }
}

export class BusinessRulesDecisionTableRowsInputsList extends cdktf.ComplexList {
  public internalValue? : BusinessRulesDecisionTableRowsInputs[] | cdktf.IResolvable

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
  public get(index: number): BusinessRulesDecisionTableRowsInputsOutputReference {
    return new BusinessRulesDecisionTableRowsInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessRulesDecisionTableRowsOutputsLiteral {
  /**
  * The type of the literal value. Set to empty string "" to use column default.
  * 
  * 								Supported types:
  * 								- string: A string value
  * 								- integer: A positive or negative whole number, including zero
  * 								- number: A positive or negative decimal number, including zero
  * 								- date: A date value, must be in the format of yyyy-MM-dd, e.g. 2024-09-23. Dates are represented as an ISO-8601 string
  * 								- datetime: A date time value, must be in the format of yyyy-MM-dd'T'HH:mm:ss.SSSZ, e.g. 2024-10-02T01:01:01.111Z. Date time is represented as an ISO-8601 string
  * 								- special: A special value enum, such as Wildcard, Null, etc. Valid values: Wildcard, Null, Empty, CurrentTime
  * 								- boolean: A boolean value
  * 								- stringList: A list of string values, provided as comma-separated string
  * 								- "": An empty string "" to use column default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#type BusinessRulesDecisionTable#type}
  */
  readonly type?: string;
  /**
  * The literal value. IMPORTANT: All values must be wrapped in quotes, even numbers and booleans.
  * 								Set to empty string "" to use column default.
  * 
  * 								Examples:
  * 								- String: "VIP", "Hello World"
  * 								- Integer: "42", "0", "-10"
  * 								- Number: "3.14", "0.0", "-1.5" (formatting differences like "1.0" vs "1" are automatically handled)
  * 								- Boolean: "true", "false"
  * 								- Date: "2023-01-01"
  * 								- DateTime: "2023-01-01T12:00:00.000Z"
  * 								- Special: "Wildcard", "Null", "Empty", "CurrentTime"
  * 								- StringList: "item1,item2,item3" (comma-separated string)
  * 								- Default: Empty string "" uses column default Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#value BusinessRulesDecisionTable#value}
  */
  readonly value?: string;
}

export function businessRulesDecisionTableRowsOutputsLiteralToTerraform(struct?: BusinessRulesDecisionTableRowsOutputsLiteralOutputReference | BusinessRulesDecisionTableRowsOutputsLiteral): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function businessRulesDecisionTableRowsOutputsLiteralToHclTerraform(struct?: BusinessRulesDecisionTableRowsOutputsLiteralOutputReference | BusinessRulesDecisionTableRowsOutputsLiteral): any {
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

export class BusinessRulesDecisionTableRowsOutputsLiteralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessRulesDecisionTableRowsOutputsLiteral | undefined {
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

  public set internalValue(value: BusinessRulesDecisionTableRowsOutputsLiteral | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
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
export interface BusinessRulesDecisionTableRowsOutputs {
  /**
  * literal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#literal BusinessRulesDecisionTable#literal}
  */
  readonly literal: BusinessRulesDecisionTableRowsOutputsLiteral;
}

export function businessRulesDecisionTableRowsOutputsToTerraform(struct?: BusinessRulesDecisionTableRowsOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: businessRulesDecisionTableRowsOutputsLiteralToTerraform(struct!.literal),
  }
}


export function businessRulesDecisionTableRowsOutputsToHclTerraform(struct?: BusinessRulesDecisionTableRowsOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: businessRulesDecisionTableRowsOutputsLiteralToHclTerraform(struct!.literal),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableRowsOutputsLiteralList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableRowsOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessRulesDecisionTableRowsOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableRowsOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal.internalValue = value.literal;
    }
  }

  // column_id - computed: true, optional: false, required: false
  public get columnId() {
    return this.getStringAttribute('column_id');
  }

  // literal - computed: false, optional: false, required: true
  private _literal = new BusinessRulesDecisionTableRowsOutputsLiteralOutputReference(this, "literal");
  public get literal() {
    return this._literal;
  }
  public putLiteral(value: BusinessRulesDecisionTableRowsOutputsLiteral) {
    this._literal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal.internalValue;
  }
}

export class BusinessRulesDecisionTableRowsOutputsList extends cdktf.ComplexList {
  public internalValue? : BusinessRulesDecisionTableRowsOutputs[] | cdktf.IResolvable

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
  public get(index: number): BusinessRulesDecisionTableRowsOutputsOutputReference {
    return new BusinessRulesDecisionTableRowsOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessRulesDecisionTableRows {
  /**
  * inputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#inputs BusinessRulesDecisionTable#inputs}
  */
  readonly inputs?: BusinessRulesDecisionTableRowsInputs[] | cdktf.IResolvable;
  /**
  * outputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#outputs BusinessRulesDecisionTable#outputs}
  */
  readonly outputs?: BusinessRulesDecisionTableRowsOutputs[] | cdktf.IResolvable;
}

export function businessRulesDecisionTableRowsToTerraform(struct?: BusinessRulesDecisionTableRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inputs: cdktf.listMapper(businessRulesDecisionTableRowsInputsToTerraform, true)(struct!.inputs),
    outputs: cdktf.listMapper(businessRulesDecisionTableRowsOutputsToTerraform, true)(struct!.outputs),
  }
}


export function businessRulesDecisionTableRowsToHclTerraform(struct?: BusinessRulesDecisionTableRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inputs: {
      value: cdktf.listMapperHcl(businessRulesDecisionTableRowsInputsToHclTerraform, true)(struct!.inputs),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableRowsInputsList",
    },
    outputs: {
      value: cdktf.listMapperHcl(businessRulesDecisionTableRowsOutputsToHclTerraform, true)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessRulesDecisionTableRowsOutputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessRulesDecisionTableRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessRulesDecisionTableRows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessRulesDecisionTableRows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputs.internalValue = undefined;
      this._outputs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputs.internalValue = value.inputs;
      this._outputs.internalValue = value.outputs;
    }
  }

  // row_id - computed: true, optional: false, required: false
  public get rowId() {
    return this.getStringAttribute('row_id');
  }

  // row_index - computed: true, optional: false, required: false
  public get rowIndex() {
    return this.getNumberAttribute('row_index');
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs = new BusinessRulesDecisionTableRowsInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: BusinessRulesDecisionTableRowsInputs[] | cdktf.IResolvable) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new BusinessRulesDecisionTableRowsOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: BusinessRulesDecisionTableRowsOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }
}

export class BusinessRulesDecisionTableRowsList extends cdktf.ComplexList {
  public internalValue? : BusinessRulesDecisionTableRows[] | cdktf.IResolvable

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
  public get(index: number): BusinessRulesDecisionTableRowsOutputReference {
    return new BusinessRulesDecisionTableRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table genesyscloud_business_rules_decision_table}
*/
export class BusinessRulesDecisionTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_business_rules_decision_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BusinessRulesDecisionTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BusinessRulesDecisionTable to import
  * @param importFromId The id of the existing BusinessRulesDecisionTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BusinessRulesDecisionTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_business_rules_decision_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/business_rules_decision_table genesyscloud_business_rules_decision_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessRulesDecisionTableConfig
  */
  public constructor(scope: Construct, id: string, config: BusinessRulesDecisionTableConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_business_rules_decision_table',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
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
    this._divisionId = config.divisionId;
    this._id = config.id;
    this._name = config.name;
    this._schemaId = config.schemaId;
    this._columns.internalValue = config.columns;
    this._rows.internalValue = config.rows;
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

  // division_id - computed: false, optional: false, required: true
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
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

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new BusinessRulesDecisionTableColumnsOutputReference(this, "columns");
  public get columns() {
    return this._columns;
  }
  public putColumns(value: BusinessRulesDecisionTableColumns) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // rows - computed: false, optional: false, required: true
  private _rows = new BusinessRulesDecisionTableRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: BusinessRulesDecisionTableRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      division_id: cdktf.stringToTerraform(this._divisionId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      columns: businessRulesDecisionTableColumnsToTerraform(this._columns.internalValue),
      rows: cdktf.listMapper(businessRulesDecisionTableRowsToTerraform, true)(this._rows.internalValue),
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
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
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
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      columns: {
        value: businessRulesDecisionTableColumnsToHclTerraform(this._columns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessRulesDecisionTableColumnsList",
      },
      rows: {
        value: cdktf.listMapperHcl(businessRulesDecisionTableRowsToHclTerraform, true)(this._rows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessRulesDecisionTableRowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
