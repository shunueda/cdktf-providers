// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsSteeringPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#compartment_id DnsSteeringPolicy#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#defined_tags DnsSteeringPolicy#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#display_name DnsSteeringPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#freeform_tags DnsSteeringPolicy#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#health_check_monitor_id DnsSteeringPolicy#health_check_monitor_id}
  */
  readonly healthCheckMonitorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#id DnsSteeringPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#template DnsSteeringPolicy#template}
  */
  readonly template: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#ttl DnsSteeringPolicy#ttl}
  */
  readonly ttl?: number;
  /**
  * answers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#answers DnsSteeringPolicy#answers}
  */
  readonly answers?: DnsSteeringPolicyAnswers[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#rules DnsSteeringPolicy#rules}
  */
  readonly rules?: DnsSteeringPolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#timeouts DnsSteeringPolicy#timeouts}
  */
  readonly timeouts?: DnsSteeringPolicyTimeouts;
}
export interface DnsSteeringPolicyAnswers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#is_disabled DnsSteeringPolicy#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#name DnsSteeringPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#pool DnsSteeringPolicy#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#rdata DnsSteeringPolicy#rdata}
  */
  readonly rdata: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#rtype DnsSteeringPolicy#rtype}
  */
  readonly rtype: string;
}

export function dnsSteeringPolicyAnswersToTerraform(struct?: DnsSteeringPolicyAnswers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_disabled: cdktf.booleanToTerraform(struct!.isDisabled),
    name: cdktf.stringToTerraform(struct!.name),
    pool: cdktf.stringToTerraform(struct!.pool),
    rdata: cdktf.stringToTerraform(struct!.rdata),
    rtype: cdktf.stringToTerraform(struct!.rtype),
  }
}


export function dnsSteeringPolicyAnswersToHclTerraform(struct?: DnsSteeringPolicyAnswers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisabled),
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
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdata: {
      value: cdktf.stringToHclTerraform(struct!.rdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rtype: {
      value: cdktf.stringToHclTerraform(struct!.rtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSteeringPolicyAnswersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSteeringPolicyAnswers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    if (this._rtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtype = this._rtype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSteeringPolicyAnswers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDisabled = undefined;
      this._name = undefined;
      this._pool = undefined;
      this._rdata = undefined;
      this._rtype = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDisabled = value.isDisabled;
      this._name = value.name;
      this._pool = value.pool;
      this._rdata = value.rdata;
      this._rtype = value.rtype;
    }
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
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

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }

  // rtype - computed: false, optional: false, required: true
  private _rtype?: string; 
  public get rtype() {
    return this.getStringAttribute('rtype');
  }
  public set rtype(value: string) {
    this._rtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtypeInput() {
    return this._rtype;
  }
}

export class DnsSteeringPolicyAnswersList extends cdktf.ComplexList {
  public internalValue? : DnsSteeringPolicyAnswers[] | cdktf.IResolvable

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
  public get(index: number): DnsSteeringPolicyAnswersOutputReference {
    return new DnsSteeringPolicyAnswersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsSteeringPolicyRulesCasesAnswerData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}
  */
  readonly answerCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}
  */
  readonly shouldKeep?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}
  */
  readonly value?: number;
}

export function dnsSteeringPolicyRulesCasesAnswerDataToTerraform(struct?: DnsSteeringPolicyRulesCasesAnswerData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    answer_condition: cdktf.stringToTerraform(struct!.answerCondition),
    should_keep: cdktf.booleanToTerraform(struct!.shouldKeep),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dnsSteeringPolicyRulesCasesAnswerDataToHclTerraform(struct?: DnsSteeringPolicyRulesCasesAnswerData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    answer_condition: {
      value: cdktf.stringToHclTerraform(struct!.answerCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_keep: {
      value: cdktf.booleanToHclTerraform(struct!.shouldKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSteeringPolicyRulesCasesAnswerDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSteeringPolicyRulesCasesAnswerData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answerCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerCondition = this._answerCondition;
    }
    if (this._shouldKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldKeep = this._shouldKeep;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSteeringPolicyRulesCasesAnswerData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answerCondition = undefined;
      this._shouldKeep = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answerCondition = value.answerCondition;
      this._shouldKeep = value.shouldKeep;
      this._value = value.value;
    }
  }

  // answer_condition - computed: true, optional: true, required: false
  private _answerCondition?: string; 
  public get answerCondition() {
    return this.getStringAttribute('answer_condition');
  }
  public set answerCondition(value: string) {
    this._answerCondition = value;
  }
  public resetAnswerCondition() {
    this._answerCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerConditionInput() {
    return this._answerCondition;
  }

  // should_keep - computed: true, optional: true, required: false
  private _shouldKeep?: boolean | cdktf.IResolvable; 
  public get shouldKeep() {
    return this.getBooleanAttribute('should_keep');
  }
  public set shouldKeep(value: boolean | cdktf.IResolvable) {
    this._shouldKeep = value;
  }
  public resetShouldKeep() {
    this._shouldKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldKeepInput() {
    return this._shouldKeep;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class DnsSteeringPolicyRulesCasesAnswerDataList extends cdktf.ComplexList {
  public internalValue? : DnsSteeringPolicyRulesCasesAnswerData[] | cdktf.IResolvable

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
  public get(index: number): DnsSteeringPolicyRulesCasesAnswerDataOutputReference {
    return new DnsSteeringPolicyRulesCasesAnswerDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsSteeringPolicyRulesCases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#case_condition DnsSteeringPolicy#case_condition}
  */
  readonly caseCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#count DnsSteeringPolicy#count}
  */
  readonly count?: number;
  /**
  * answer_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#answer_data DnsSteeringPolicy#answer_data}
  */
  readonly answerData?: DnsSteeringPolicyRulesCasesAnswerData[] | cdktf.IResolvable;
}

export function dnsSteeringPolicyRulesCasesToTerraform(struct?: DnsSteeringPolicyRulesCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_condition: cdktf.stringToTerraform(struct!.caseCondition),
    count: cdktf.numberToTerraform(struct!.count),
    answer_data: cdktf.listMapper(dnsSteeringPolicyRulesCasesAnswerDataToTerraform, true)(struct!.answerData),
  }
}


export function dnsSteeringPolicyRulesCasesToHclTerraform(struct?: DnsSteeringPolicyRulesCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_condition: {
      value: cdktf.stringToHclTerraform(struct!.caseCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    answer_data: {
      value: cdktf.listMapperHcl(dnsSteeringPolicyRulesCasesAnswerDataToHclTerraform, true)(struct!.answerData),
      isBlock: true,
      type: "list",
      storageClassType: "DnsSteeringPolicyRulesCasesAnswerDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSteeringPolicyRulesCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSteeringPolicyRulesCases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseCondition = this._caseCondition;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._answerData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerData = this._answerData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSteeringPolicyRulesCases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseCondition = undefined;
      this._count = undefined;
      this._answerData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseCondition = value.caseCondition;
      this._count = value.count;
      this._answerData.internalValue = value.answerData;
    }
  }

  // case_condition - computed: true, optional: true, required: false
  private _caseCondition?: string; 
  public get caseCondition() {
    return this.getStringAttribute('case_condition');
  }
  public set caseCondition(value: string) {
    this._caseCondition = value;
  }
  public resetCaseCondition() {
    this._caseCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseConditionInput() {
    return this._caseCondition;
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // answer_data - computed: false, optional: true, required: false
  private _answerData = new DnsSteeringPolicyRulesCasesAnswerDataList(this, "answer_data", false);
  public get answerData() {
    return this._answerData;
  }
  public putAnswerData(value: DnsSteeringPolicyRulesCasesAnswerData[] | cdktf.IResolvable) {
    this._answerData.internalValue = value;
  }
  public resetAnswerData() {
    this._answerData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerDataInput() {
    return this._answerData.internalValue;
  }
}

export class DnsSteeringPolicyRulesCasesList extends cdktf.ComplexList {
  public internalValue? : DnsSteeringPolicyRulesCases[] | cdktf.IResolvable

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
  public get(index: number): DnsSteeringPolicyRulesCasesOutputReference {
    return new DnsSteeringPolicyRulesCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsSteeringPolicyRulesDefaultAnswerData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}
  */
  readonly answerCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}
  */
  readonly shouldKeep?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}
  */
  readonly value?: number;
}

export function dnsSteeringPolicyRulesDefaultAnswerDataToTerraform(struct?: DnsSteeringPolicyRulesDefaultAnswerData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    answer_condition: cdktf.stringToTerraform(struct!.answerCondition),
    should_keep: cdktf.booleanToTerraform(struct!.shouldKeep),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dnsSteeringPolicyRulesDefaultAnswerDataToHclTerraform(struct?: DnsSteeringPolicyRulesDefaultAnswerData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    answer_condition: {
      value: cdktf.stringToHclTerraform(struct!.answerCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_keep: {
      value: cdktf.booleanToHclTerraform(struct!.shouldKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSteeringPolicyRulesDefaultAnswerDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSteeringPolicyRulesDefaultAnswerData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answerCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerCondition = this._answerCondition;
    }
    if (this._shouldKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldKeep = this._shouldKeep;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSteeringPolicyRulesDefaultAnswerData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answerCondition = undefined;
      this._shouldKeep = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answerCondition = value.answerCondition;
      this._shouldKeep = value.shouldKeep;
      this._value = value.value;
    }
  }

  // answer_condition - computed: true, optional: true, required: false
  private _answerCondition?: string; 
  public get answerCondition() {
    return this.getStringAttribute('answer_condition');
  }
  public set answerCondition(value: string) {
    this._answerCondition = value;
  }
  public resetAnswerCondition() {
    this._answerCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerConditionInput() {
    return this._answerCondition;
  }

  // should_keep - computed: true, optional: true, required: false
  private _shouldKeep?: boolean | cdktf.IResolvable; 
  public get shouldKeep() {
    return this.getBooleanAttribute('should_keep');
  }
  public set shouldKeep(value: boolean | cdktf.IResolvable) {
    this._shouldKeep = value;
  }
  public resetShouldKeep() {
    this._shouldKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldKeepInput() {
    return this._shouldKeep;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class DnsSteeringPolicyRulesDefaultAnswerDataList extends cdktf.ComplexList {
  public internalValue? : DnsSteeringPolicyRulesDefaultAnswerData[] | cdktf.IResolvable

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
  public get(index: number): DnsSteeringPolicyRulesDefaultAnswerDataOutputReference {
    return new DnsSteeringPolicyRulesDefaultAnswerDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsSteeringPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#default_count DnsSteeringPolicy#default_count}
  */
  readonly defaultCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#description DnsSteeringPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#rule_type DnsSteeringPolicy#rule_type}
  */
  readonly ruleType: string;
  /**
  * cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#cases DnsSteeringPolicy#cases}
  */
  readonly cases?: DnsSteeringPolicyRulesCases[] | cdktf.IResolvable;
  /**
  * default_answer_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#default_answer_data DnsSteeringPolicy#default_answer_data}
  */
  readonly defaultAnswerData?: DnsSteeringPolicyRulesDefaultAnswerData[] | cdktf.IResolvable;
}

export function dnsSteeringPolicyRulesToTerraform(struct?: DnsSteeringPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_count: cdktf.numberToTerraform(struct!.defaultCount),
    description: cdktf.stringToTerraform(struct!.description),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    cases: cdktf.listMapper(dnsSteeringPolicyRulesCasesToTerraform, true)(struct!.cases),
    default_answer_data: cdktf.listMapper(dnsSteeringPolicyRulesDefaultAnswerDataToTerraform, true)(struct!.defaultAnswerData),
  }
}


export function dnsSteeringPolicyRulesToHclTerraform(struct?: DnsSteeringPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_count: {
      value: cdktf.numberToHclTerraform(struct!.defaultCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cases: {
      value: cdktf.listMapperHcl(dnsSteeringPolicyRulesCasesToHclTerraform, true)(struct!.cases),
      isBlock: true,
      type: "list",
      storageClassType: "DnsSteeringPolicyRulesCasesList",
    },
    default_answer_data: {
      value: cdktf.listMapperHcl(dnsSteeringPolicyRulesDefaultAnswerDataToHclTerraform, true)(struct!.defaultAnswerData),
      isBlock: true,
      type: "list",
      storageClassType: "DnsSteeringPolicyRulesDefaultAnswerDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSteeringPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsSteeringPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCount = this._defaultCount;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._cases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cases = this._cases?.internalValue;
    }
    if (this._defaultAnswerData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAnswerData = this._defaultAnswerData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSteeringPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultCount = undefined;
      this._description = undefined;
      this._ruleType = undefined;
      this._cases.internalValue = undefined;
      this._defaultAnswerData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultCount = value.defaultCount;
      this._description = value.description;
      this._ruleType = value.ruleType;
      this._cases.internalValue = value.cases;
      this._defaultAnswerData.internalValue = value.defaultAnswerData;
    }
  }

  // default_count - computed: true, optional: true, required: false
  private _defaultCount?: number; 
  public get defaultCount() {
    return this.getNumberAttribute('default_count');
  }
  public set defaultCount(value: number) {
    this._defaultCount = value;
  }
  public resetDefaultCount() {
    this._defaultCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCountInput() {
    return this._defaultCount;
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

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // cases - computed: false, optional: true, required: false
  private _cases = new DnsSteeringPolicyRulesCasesList(this, "cases", false);
  public get cases() {
    return this._cases;
  }
  public putCases(value: DnsSteeringPolicyRulesCases[] | cdktf.IResolvable) {
    this._cases.internalValue = value;
  }
  public resetCases() {
    this._cases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casesInput() {
    return this._cases.internalValue;
  }

  // default_answer_data - computed: false, optional: true, required: false
  private _defaultAnswerData = new DnsSteeringPolicyRulesDefaultAnswerDataList(this, "default_answer_data", false);
  public get defaultAnswerData() {
    return this._defaultAnswerData;
  }
  public putDefaultAnswerData(value: DnsSteeringPolicyRulesDefaultAnswerData[] | cdktf.IResolvable) {
    this._defaultAnswerData.internalValue = value;
  }
  public resetDefaultAnswerData() {
    this._defaultAnswerData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAnswerDataInput() {
    return this._defaultAnswerData.internalValue;
  }
}

export class DnsSteeringPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : DnsSteeringPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): DnsSteeringPolicyRulesOutputReference {
    return new DnsSteeringPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsSteeringPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#create DnsSteeringPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#delete DnsSteeringPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#update DnsSteeringPolicy#update}
  */
  readonly update?: string;
}

export function dnsSteeringPolicyTimeoutsToTerraform(struct?: DnsSteeringPolicyTimeouts | cdktf.IResolvable): any {
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


export function dnsSteeringPolicyTimeoutsToHclTerraform(struct?: DnsSteeringPolicyTimeouts | cdktf.IResolvable): any {
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

export class DnsSteeringPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSteeringPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsSteeringPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy oci_dns_steering_policy}
*/
export class DnsSteeringPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dns_steering_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsSteeringPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsSteeringPolicy to import
  * @param importFromId The id of the existing DnsSteeringPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsSteeringPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dns_steering_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dns_steering_policy oci_dns_steering_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsSteeringPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DnsSteeringPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_steering_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._healthCheckMonitorId = config.healthCheckMonitorId;
    this._id = config.id;
    this._template = config.template;
    this._ttl = config.ttl;
    this._answers.internalValue = config.answers;
    this._rules.internalValue = config.rules;
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

  // health_check_monitor_id - computed: true, optional: true, required: false
  private _healthCheckMonitorId?: string; 
  public get healthCheckMonitorId() {
    return this.getStringAttribute('health_check_monitor_id');
  }
  public set healthCheckMonitorId(value: string) {
    this._healthCheckMonitorId = value;
  }
  public resetHealthCheckMonitorId() {
    this._healthCheckMonitorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckMonitorIdInput() {
    return this._healthCheckMonitorId;
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

  // self - computed: true, optional: false, required: false
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // answers - computed: false, optional: true, required: false
  private _answers = new DnsSteeringPolicyAnswersList(this, "answers", false);
  public get answers() {
    return this._answers;
  }
  public putAnswers(value: DnsSteeringPolicyAnswers[] | cdktf.IResolvable) {
    this._answers.internalValue = value;
  }
  public resetAnswers() {
    this._answers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answersInput() {
    return this._answers.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DnsSteeringPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DnsSteeringPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DnsSteeringPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DnsSteeringPolicyTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      health_check_monitor_id: cdktf.stringToTerraform(this._healthCheckMonitorId),
      id: cdktf.stringToTerraform(this._id),
      template: cdktf.stringToTerraform(this._template),
      ttl: cdktf.numberToTerraform(this._ttl),
      answers: cdktf.listMapper(dnsSteeringPolicyAnswersToTerraform, true)(this._answers.internalValue),
      rules: cdktf.listMapper(dnsSteeringPolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: dnsSteeringPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      health_check_monitor_id: {
        value: cdktf.stringToHclTerraform(this._healthCheckMonitorId),
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
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      answers: {
        value: cdktf.listMapperHcl(dnsSteeringPolicyAnswersToHclTerraform, true)(this._answers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsSteeringPolicyAnswersList",
      },
      rules: {
        value: cdktf.listMapperHcl(dnsSteeringPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsSteeringPolicyRulesList",
      },
      timeouts: {
        value: dnsSteeringPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsSteeringPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
