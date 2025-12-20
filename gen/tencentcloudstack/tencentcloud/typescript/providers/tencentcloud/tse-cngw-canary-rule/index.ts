// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseCngwCanaryRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#gateway_id TseCngwCanaryRule#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#id TseCngwCanaryRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * service ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#service_id TseCngwCanaryRule#service_id}
  */
  readonly serviceId: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#tags TseCngwCanaryRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * canary_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#canary_rule TseCngwCanaryRule#canary_rule}
  */
  readonly canaryRule: TseCngwCanaryRuleCanaryRule;
}
export interface TseCngwCanaryRuleCanaryRuleBalancedServiceListStruct {
  /**
  * percent, 10 is 10%, valid values:0 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#percent TseCngwCanaryRule#percent}
  */
  readonly percent?: number;
  /**
  * service ID, required when used as an input parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#service_id TseCngwCanaryRule#service_id}
  */
  readonly serviceId?: string;
  /**
  * service name, meaningless when used as an input parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#service_name TseCngwCanaryRule#service_name}
  */
  readonly serviceName?: string;
}

export function tseCngwCanaryRuleCanaryRuleBalancedServiceListStructToTerraform(struct?: TseCngwCanaryRuleCanaryRuleBalancedServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent: cdktf.numberToTerraform(struct!.percent),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function tseCngwCanaryRuleCanaryRuleBalancedServiceListStructToHclTerraform(struct?: TseCngwCanaryRuleCanaryRuleBalancedServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwCanaryRuleCanaryRuleBalancedServiceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseCngwCanaryRuleCanaryRuleBalancedServiceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwCanaryRuleCanaryRuleBalancedServiceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percent = undefined;
      this._serviceId = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percent = value.percent;
      this._serviceId = value.serviceId;
      this._serviceName = value.serviceName;
    }
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // upstream_name - computed: true, optional: false, required: false
  public get upstreamName() {
    return this.getStringAttribute('upstream_name');
  }
}

export class TseCngwCanaryRuleCanaryRuleBalancedServiceListStructList extends cdktf.ComplexList {
  public internalValue? : TseCngwCanaryRuleCanaryRuleBalancedServiceListStruct[] | cdktf.IResolvable

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
  public get(index: number): TseCngwCanaryRuleCanaryRuleBalancedServiceListStructOutputReference {
    return new TseCngwCanaryRuleCanaryRuleBalancedServiceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseCngwCanaryRuleCanaryRuleConditionListStruct {
  /**
  * delimiter. valid when operator is in or not in, reference value:`,`, `;`,`\n`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#delimiter TseCngwCanaryRule#delimiter}
  */
  readonly delimiter?: string;
  /**
  * global configuration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#global_config_id TseCngwCanaryRule#global_config_id}
  */
  readonly globalConfigId?: string;
  /**
  * global configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#global_config_name TseCngwCanaryRule#global_config_name}
  */
  readonly globalConfigName?: string;
  /**
  * parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#key TseCngwCanaryRule#key}
  */
  readonly key?: string;
  /**
  * operator.Reference value:`le`,`eq`,`lt`,`ne`,`ge`,`gt`,`regex`,`exists`,`in`,`not in`,`prefix`,`exact`,`regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#operator TseCngwCanaryRule#operator}
  */
  readonly operator?: string;
  /**
  * type.Reference value:`path`,`method`,`query`,`header`,`cookie`,`body`,`system`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#type TseCngwCanaryRule#type}
  */
  readonly type: string;
  /**
  * parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#value TseCngwCanaryRule#value}
  */
  readonly value?: string;
}

export function tseCngwCanaryRuleCanaryRuleConditionListStructToTerraform(struct?: TseCngwCanaryRuleCanaryRuleConditionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    global_config_id: cdktf.stringToTerraform(struct!.globalConfigId),
    global_config_name: cdktf.stringToTerraform(struct!.globalConfigName),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tseCngwCanaryRuleCanaryRuleConditionListStructToHclTerraform(struct?: TseCngwCanaryRuleCanaryRuleConditionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_config_id: {
      value: cdktf.stringToHclTerraform(struct!.globalConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_config_name: {
      value: cdktf.stringToHclTerraform(struct!.globalConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class TseCngwCanaryRuleCanaryRuleConditionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseCngwCanaryRuleCanaryRuleConditionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._globalConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalConfigId = this._globalConfigId;
    }
    if (this._globalConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalConfigName = this._globalConfigName;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
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

  public set internalValue(value: TseCngwCanaryRuleCanaryRuleConditionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._globalConfigId = undefined;
      this._globalConfigName = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._globalConfigId = value.globalConfigId;
      this._globalConfigName = value.globalConfigName;
      this._key = value.key;
      this._operator = value.operator;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // global_config_id - computed: false, optional: true, required: false
  private _globalConfigId?: string; 
  public get globalConfigId() {
    return this.getStringAttribute('global_config_id');
  }
  public set globalConfigId(value: string) {
    this._globalConfigId = value;
  }
  public resetGlobalConfigId() {
    this._globalConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalConfigIdInput() {
    return this._globalConfigId;
  }

  // global_config_name - computed: false, optional: true, required: false
  private _globalConfigName?: string; 
  public get globalConfigName() {
    return this.getStringAttribute('global_config_name');
  }
  public set globalConfigName(value: string) {
    this._globalConfigName = value;
  }
  public resetGlobalConfigName() {
    this._globalConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalConfigNameInput() {
    return this._globalConfigName;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class TseCngwCanaryRuleCanaryRuleConditionListStructList extends cdktf.ComplexList {
  public internalValue? : TseCngwCanaryRuleCanaryRuleConditionListStruct[] | cdktf.IResolvable

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
  public get(index: number): TseCngwCanaryRuleCanaryRuleConditionListStructOutputReference {
    return new TseCngwCanaryRuleCanaryRuleConditionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TseCngwCanaryRuleCanaryRule {
  /**
  * the status of canary rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#enabled TseCngwCanaryRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * priority. The value ranges from 0 to 100; the larger the value, the higher the priority; the priority cannot be repeated between different rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#priority TseCngwCanaryRule#priority}
  */
  readonly priority: number;
  /**
  * service ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#service_id TseCngwCanaryRule#service_id}
  */
  readonly serviceId?: string;
  /**
  * service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#service_name TseCngwCanaryRule#service_name}
  */
  readonly serviceName?: string;
  /**
  * balanced_service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#balanced_service_list TseCngwCanaryRule#balanced_service_list}
  */
  readonly balancedServiceList?: TseCngwCanaryRuleCanaryRuleBalancedServiceListStruct[] | cdktf.IResolvable;
  /**
  * condition_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#condition_list TseCngwCanaryRule#condition_list}
  */
  readonly conditionList?: TseCngwCanaryRuleCanaryRuleConditionListStruct[] | cdktf.IResolvable;
}

export function tseCngwCanaryRuleCanaryRuleToTerraform(struct?: TseCngwCanaryRuleCanaryRuleOutputReference | TseCngwCanaryRuleCanaryRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    priority: cdktf.numberToTerraform(struct!.priority),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    balanced_service_list: cdktf.listMapper(tseCngwCanaryRuleCanaryRuleBalancedServiceListStructToTerraform, true)(struct!.balancedServiceList),
    condition_list: cdktf.listMapper(tseCngwCanaryRuleCanaryRuleConditionListStructToTerraform, true)(struct!.conditionList),
  }
}


export function tseCngwCanaryRuleCanaryRuleToHclTerraform(struct?: TseCngwCanaryRuleCanaryRuleOutputReference | TseCngwCanaryRuleCanaryRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    balanced_service_list: {
      value: cdktf.listMapperHcl(tseCngwCanaryRuleCanaryRuleBalancedServiceListStructToHclTerraform, true)(struct!.balancedServiceList),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwCanaryRuleCanaryRuleBalancedServiceListStructList",
    },
    condition_list: {
      value: cdktf.listMapperHcl(tseCngwCanaryRuleCanaryRuleConditionListStructToHclTerraform, true)(struct!.conditionList),
      isBlock: true,
      type: "list",
      storageClassType: "TseCngwCanaryRuleCanaryRuleConditionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwCanaryRuleCanaryRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwCanaryRuleCanaryRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._balancedServiceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.balancedServiceList = this._balancedServiceList?.internalValue;
    }
    if (this._conditionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionList = this._conditionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwCanaryRuleCanaryRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._priority = undefined;
      this._serviceId = undefined;
      this._serviceName = undefined;
      this._balancedServiceList.internalValue = undefined;
      this._conditionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._priority = value.priority;
      this._serviceId = value.serviceId;
      this._serviceName = value.serviceName;
      this._balancedServiceList.internalValue = value.balancedServiceList;
      this._conditionList.internalValue = value.conditionList;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // balanced_service_list - computed: false, optional: true, required: false
  private _balancedServiceList = new TseCngwCanaryRuleCanaryRuleBalancedServiceListStructList(this, "balanced_service_list", false);
  public get balancedServiceList() {
    return this._balancedServiceList;
  }
  public putBalancedServiceList(value: TseCngwCanaryRuleCanaryRuleBalancedServiceListStruct[] | cdktf.IResolvable) {
    this._balancedServiceList.internalValue = value;
  }
  public resetBalancedServiceList() {
    this._balancedServiceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancedServiceListInput() {
    return this._balancedServiceList.internalValue;
  }

  // condition_list - computed: false, optional: true, required: false
  private _conditionList = new TseCngwCanaryRuleCanaryRuleConditionListStructList(this, "condition_list", false);
  public get conditionList() {
    return this._conditionList;
  }
  public putConditionList(value: TseCngwCanaryRuleCanaryRuleConditionListStruct[] | cdktf.IResolvable) {
    this._conditionList.internalValue = value;
  }
  public resetConditionList() {
    this._conditionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionListInput() {
    return this._conditionList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule tencentcloud_tse_cngw_canary_rule}
*/
export class TseCngwCanaryRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_cngw_canary_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseCngwCanaryRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseCngwCanaryRule to import
  * @param importFromId The id of the existing TseCngwCanaryRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseCngwCanaryRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_cngw_canary_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_canary_rule tencentcloud_tse_cngw_canary_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseCngwCanaryRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TseCngwCanaryRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_cngw_canary_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._serviceId = config.serviceId;
    this._tags = config.tags;
    this._canaryRule.internalValue = config.canaryRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // canary_rule - computed: false, optional: false, required: true
  private _canaryRule = new TseCngwCanaryRuleCanaryRuleOutputReference(this, "canary_rule");
  public get canaryRule() {
    return this._canaryRule;
  }
  public putCanaryRule(value: TseCngwCanaryRuleCanaryRule) {
    this._canaryRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryRuleInput() {
    return this._canaryRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      service_id: cdktf.stringToTerraform(this._serviceId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      canary_rule: tseCngwCanaryRuleCanaryRuleToTerraform(this._canaryRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      canary_rule: {
        value: tseCngwCanaryRuleCanaryRuleToHclTerraform(this._canaryRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwCanaryRuleCanaryRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
