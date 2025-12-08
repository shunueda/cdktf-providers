// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv3DefenseRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#defense_origin Wafv3DefenseRule#defense_origin}
  */
  readonly defenseOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#defense_scene Wafv3DefenseRule#defense_scene}
  */
  readonly defenseScene: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#defense_type Wafv3DefenseRule#defense_type}
  */
  readonly defenseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#id Wafv3DefenseRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#instance_id Wafv3DefenseRule#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#resource Wafv3DefenseRule#resource}
  */
  readonly resource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#rule_name Wafv3DefenseRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#rule_status Wafv3DefenseRule#rule_status}
  */
  readonly ruleStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#template_id Wafv3DefenseRule#template_id}
  */
  readonly templateId?: number;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#config Wafv3DefenseRule#config}
  */
  readonly config: Wafv3DefenseRuleConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#timeouts Wafv3DefenseRule#timeouts}
  */
  readonly timeouts?: Wafv3DefenseRuleTimeouts;
}
export interface Wafv3DefenseRuleConfigAccountIdentifiers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#decode_type Wafv3DefenseRule#decode_type}
  */
  readonly decodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#key Wafv3DefenseRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#position Wafv3DefenseRule#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#priority Wafv3DefenseRule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#sub_key Wafv3DefenseRule#sub_key}
  */
  readonly subKey?: string;
}

export function wafv3DefenseRuleConfigAccountIdentifiersToTerraform(struct?: Wafv3DefenseRuleConfigAccountIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decode_type: cdktf.stringToTerraform(struct!.decodeType),
    key: cdktf.stringToTerraform(struct!.key),
    position: cdktf.stringToTerraform(struct!.position),
    priority: cdktf.numberToTerraform(struct!.priority),
    sub_key: cdktf.stringToTerraform(struct!.subKey),
  }
}


export function wafv3DefenseRuleConfigAccountIdentifiersToHclTerraform(struct?: Wafv3DefenseRuleConfigAccountIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decode_type: {
      value: cdktf.stringToHclTerraform(struct!.decodeType),
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
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_key: {
      value: cdktf.stringToHclTerraform(struct!.subKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DefenseRuleConfigAccountIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv3DefenseRuleConfigAccountIdentifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.decodeType = this._decodeType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._subKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subKey = this._subKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DefenseRuleConfigAccountIdentifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decodeType = undefined;
      this._key = undefined;
      this._position = undefined;
      this._priority = undefined;
      this._subKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decodeType = value.decodeType;
      this._key = value.key;
      this._position = value.position;
      this._priority = value.priority;
      this._subKey = value.subKey;
    }
  }

  // decode_type - computed: false, optional: true, required: false
  private _decodeType?: string; 
  public get decodeType() {
    return this.getStringAttribute('decode_type');
  }
  public set decodeType(value: string) {
    this._decodeType = value;
  }
  public resetDecodeType() {
    this._decodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeTypeInput() {
    return this._decodeType;
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

  // position - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // sub_key - computed: false, optional: true, required: false
  private _subKey?: string; 
  public get subKey() {
    return this.getStringAttribute('sub_key');
  }
  public set subKey(value: string) {
    this._subKey = value;
  }
  public resetSubKey() {
    this._subKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subKeyInput() {
    return this._subKey;
  }
}

export class Wafv3DefenseRuleConfigAccountIdentifiersList extends cdktf.ComplexList {
  public internalValue? : Wafv3DefenseRuleConfigAccountIdentifiers[] | cdktf.IResolvable

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
  public get(index: number): Wafv3DefenseRuleConfigAccountIdentifiersOutputReference {
    return new Wafv3DefenseRuleConfigAccountIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv3DefenseRuleConfigConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#key Wafv3DefenseRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#op_value Wafv3DefenseRule#op_value}
  */
  readonly opValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#sub_key Wafv3DefenseRule#sub_key}
  */
  readonly subKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#values Wafv3DefenseRule#values}
  */
  readonly values?: string;
}

export function wafv3DefenseRuleConfigConditionsToTerraform(struct?: Wafv3DefenseRuleConfigConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    op_value: cdktf.stringToTerraform(struct!.opValue),
    sub_key: cdktf.stringToTerraform(struct!.subKey),
    values: cdktf.stringToTerraform(struct!.values),
  }
}


export function wafv3DefenseRuleConfigConditionsToHclTerraform(struct?: Wafv3DefenseRuleConfigConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op_value: {
      value: cdktf.stringToHclTerraform(struct!.opValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_key: {
      value: cdktf.stringToHclTerraform(struct!.subKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DefenseRuleConfigConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv3DefenseRuleConfigConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._opValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opValue = this._opValue;
    }
    if (this._subKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subKey = this._subKey;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DefenseRuleConfigConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._opValue = undefined;
      this._subKey = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._opValue = value.opValue;
      this._subKey = value.subKey;
      this._values = value.values;
    }
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

  // op_value - computed: false, optional: true, required: false
  private _opValue?: string; 
  public get opValue() {
    return this.getStringAttribute('op_value');
  }
  public set opValue(value: string) {
    this._opValue = value;
  }
  public resetOpValue() {
    this._opValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opValueInput() {
    return this._opValue;
  }

  // sub_key - computed: false, optional: true, required: false
  private _subKey?: string; 
  public get subKey() {
    return this.getStringAttribute('sub_key');
  }
  public set subKey(value: string) {
    this._subKey = value;
  }
  public resetSubKey() {
    this._subKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subKeyInput() {
    return this._subKey;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
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

export class Wafv3DefenseRuleConfigConditionsList extends cdktf.ComplexList {
  public internalValue? : Wafv3DefenseRuleConfigConditions[] | cdktf.IResolvable

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
  public get(index: number): Wafv3DefenseRuleConfigConditionsOutputReference {
    return new Wafv3DefenseRuleConfigConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv3DefenseRuleConfigGrayConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#gray_rate Wafv3DefenseRule#gray_rate}
  */
  readonly grayRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#gray_sub_key Wafv3DefenseRule#gray_sub_key}
  */
  readonly graySubKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#gray_target Wafv3DefenseRule#gray_target}
  */
  readonly grayTarget?: string;
}

export function wafv3DefenseRuleConfigGrayConfigToTerraform(struct?: Wafv3DefenseRuleConfigGrayConfigOutputReference | Wafv3DefenseRuleConfigGrayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gray_rate: cdktf.numberToTerraform(struct!.grayRate),
    gray_sub_key: cdktf.stringToTerraform(struct!.graySubKey),
    gray_target: cdktf.stringToTerraform(struct!.grayTarget),
  }
}


export function wafv3DefenseRuleConfigGrayConfigToHclTerraform(struct?: Wafv3DefenseRuleConfigGrayConfigOutputReference | Wafv3DefenseRuleConfigGrayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gray_rate: {
      value: cdktf.numberToHclTerraform(struct!.grayRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gray_sub_key: {
      value: cdktf.stringToHclTerraform(struct!.graySubKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gray_target: {
      value: cdktf.stringToHclTerraform(struct!.grayTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DefenseRuleConfigGrayConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv3DefenseRuleConfigGrayConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grayRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.grayRate = this._grayRate;
    }
    if (this._graySubKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.graySubKey = this._graySubKey;
    }
    if (this._grayTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.grayTarget = this._grayTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DefenseRuleConfigGrayConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grayRate = undefined;
      this._graySubKey = undefined;
      this._grayTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grayRate = value.grayRate;
      this._graySubKey = value.graySubKey;
      this._grayTarget = value.grayTarget;
    }
  }

  // gray_rate - computed: false, optional: true, required: false
  private _grayRate?: number; 
  public get grayRate() {
    return this.getNumberAttribute('gray_rate');
  }
  public set grayRate(value: number) {
    this._grayRate = value;
  }
  public resetGrayRate() {
    this._grayRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grayRateInput() {
    return this._grayRate;
  }

  // gray_sub_key - computed: false, optional: true, required: false
  private _graySubKey?: string; 
  public get graySubKey() {
    return this.getStringAttribute('gray_sub_key');
  }
  public set graySubKey(value: string) {
    this._graySubKey = value;
  }
  public resetGraySubKey() {
    this._graySubKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graySubKeyInput() {
    return this._graySubKey;
  }

  // gray_target - computed: false, optional: true, required: false
  private _grayTarget?: string; 
  public get grayTarget() {
    return this.getStringAttribute('gray_target');
  }
  public set grayTarget(value: string) {
    this._grayTarget = value;
  }
  public resetGrayTarget() {
    this._grayTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grayTargetInput() {
    return this._grayTarget;
  }
}
export interface Wafv3DefenseRuleConfigRateLimitStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#code Wafv3DefenseRule#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#count Wafv3DefenseRule#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#ratio Wafv3DefenseRule#ratio}
  */
  readonly ratio?: number;
}

export function wafv3DefenseRuleConfigRateLimitStatusToTerraform(struct?: Wafv3DefenseRuleConfigRateLimitStatusOutputReference | Wafv3DefenseRuleConfigRateLimitStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    count: cdktf.numberToTerraform(struct!.count),
    ratio: cdktf.numberToTerraform(struct!.ratio),
  }
}


export function wafv3DefenseRuleConfigRateLimitStatusToHclTerraform(struct?: Wafv3DefenseRuleConfigRateLimitStatusOutputReference | Wafv3DefenseRuleConfigRateLimitStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DefenseRuleConfigRateLimitStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv3DefenseRuleConfigRateLimitStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DefenseRuleConfigRateLimitStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._count = undefined;
      this._ratio = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._count = value.count;
      this._ratio = value.ratio;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // count - computed: false, optional: true, required: false
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

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}
export interface Wafv3DefenseRuleConfigRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#interval Wafv3DefenseRule#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#sub_key Wafv3DefenseRule#sub_key}
  */
  readonly subKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#target Wafv3DefenseRule#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#threshold Wafv3DefenseRule#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#ttl Wafv3DefenseRule#ttl}
  */
  readonly ttl?: number;
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#status Wafv3DefenseRule#status}
  */
  readonly status?: Wafv3DefenseRuleConfigRateLimitStatus;
}

export function wafv3DefenseRuleConfigRateLimitToTerraform(struct?: Wafv3DefenseRuleConfigRateLimitOutputReference | Wafv3DefenseRuleConfigRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    sub_key: cdktf.stringToTerraform(struct!.subKey),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    status: wafv3DefenseRuleConfigRateLimitStatusToTerraform(struct!.status),
  }
}


export function wafv3DefenseRuleConfigRateLimitToHclTerraform(struct?: Wafv3DefenseRuleConfigRateLimitOutputReference | Wafv3DefenseRuleConfigRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_key: {
      value: cdktf.stringToHclTerraform(struct!.subKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: wafv3DefenseRuleConfigRateLimitStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv3DefenseRuleConfigRateLimitStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DefenseRuleConfigRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv3DefenseRuleConfigRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._subKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subKey = this._subKey;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DefenseRuleConfigRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._subKey = undefined;
      this._target = undefined;
      this._threshold = undefined;
      this._ttl = undefined;
      this._status.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._subKey = value.subKey;
      this._target = value.target;
      this._threshold = value.threshold;
      this._ttl = value.ttl;
      this._status.internalValue = value.status;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // sub_key - computed: false, optional: true, required: false
  private _subKey?: string; 
  public get subKey() {
    return this.getStringAttribute('sub_key');
  }
  public set subKey(value: string) {
    this._subKey = value;
  }
  public resetSubKey() {
    this._subKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subKeyInput() {
    return this._subKey;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // ttl - computed: false, optional: true, required: false
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

  // status - computed: false, optional: true, required: false
  private _status = new Wafv3DefenseRuleConfigRateLimitStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: Wafv3DefenseRuleConfigRateLimitStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }
}
export interface Wafv3DefenseRuleConfigTimeConfigTimePeriods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#end Wafv3DefenseRule#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#start Wafv3DefenseRule#start}
  */
  readonly start?: number;
}

export function wafv3DefenseRuleConfigTimeConfigTimePeriodsToTerraform(struct?: Wafv3DefenseRuleConfigTimeConfigTimePeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function wafv3DefenseRuleConfigTimeConfigTimePeriodsToHclTerraform(struct?: Wafv3DefenseRuleConfigTimeConfigTimePeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DefenseRuleConfigTimeConfigTimePeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv3DefenseRuleConfigTimeConfigTimePeriods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DefenseRuleConfigTimeConfigTimePeriods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class Wafv3DefenseRuleConfigTimeConfigTimePeriodsList extends cdktf.ComplexList {
  public internalValue? : Wafv3DefenseRuleConfigTimeConfigTimePeriods[] | cdktf.IResolvable

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
  public get(index: number): Wafv3DefenseRuleConfigTimeConfigTimePeriodsOutputReference {
    return new Wafv3DefenseRuleConfigTimeConfigTimePeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#end Wafv3DefenseRule#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#start Wafv3DefenseRule#start}
  */
  readonly start?: number;
}

export function wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriodsToTerraform(struct?: Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriodsToHclTerraform(struct?: Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriodsList extends cdktf.ComplexList {
  public internalValue? : Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriods[] | cdktf.IResolvable

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
  public get(index: number): Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriodsOutputReference {
    return new Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv3DefenseRuleConfigTimeConfigWeekTimePeriods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#day Wafv3DefenseRule#day}
  */
  readonly day?: string;
  /**
  * day_periods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#day_periods Wafv3DefenseRule#day_periods}
  */
  readonly dayPeriods?: Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriods[] | cdktf.IResolvable;
}

export function wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsToTerraform(struct?: Wafv3DefenseRuleConfigTimeConfigWeekTimePeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    day_periods: cdktf.listMapper(wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriodsToTerraform, true)(struct!.dayPeriods),
  }
}


export function wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsToHclTerraform(struct?: Wafv3DefenseRuleConfigTimeConfigWeekTimePeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_periods: {
      value: cdktf.listMapperHcl(wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriodsToHclTerraform, true)(struct!.dayPeriods),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv3DefenseRuleConfigTimeConfigWeekTimePeriods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._dayPeriods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayPeriods = this._dayPeriods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DefenseRuleConfigTimeConfigWeekTimePeriods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._dayPeriods.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._dayPeriods.internalValue = value.dayPeriods;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // day_periods - computed: false, optional: true, required: false
  private _dayPeriods = new Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriodsList(this, "day_periods", true);
  public get dayPeriods() {
    return this._dayPeriods;
  }
  public putDayPeriods(value: Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsDayPeriods[] | cdktf.IResolvable) {
    this._dayPeriods.internalValue = value;
  }
  public resetDayPeriods() {
    this._dayPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayPeriodsInput() {
    return this._dayPeriods.internalValue;
  }
}

export class Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsList extends cdktf.ComplexList {
  public internalValue? : Wafv3DefenseRuleConfigTimeConfigWeekTimePeriods[] | cdktf.IResolvable

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
  public get(index: number): Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsOutputReference {
    return new Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv3DefenseRuleConfigTimeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#time_scope Wafv3DefenseRule#time_scope}
  */
  readonly timeScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#time_zone Wafv3DefenseRule#time_zone}
  */
  readonly timeZone?: number;
  /**
  * time_periods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#time_periods Wafv3DefenseRule#time_periods}
  */
  readonly timePeriods?: Wafv3DefenseRuleConfigTimeConfigTimePeriods[] | cdktf.IResolvable;
  /**
  * week_time_periods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#week_time_periods Wafv3DefenseRule#week_time_periods}
  */
  readonly weekTimePeriods?: Wafv3DefenseRuleConfigTimeConfigWeekTimePeriods[] | cdktf.IResolvable;
}

export function wafv3DefenseRuleConfigTimeConfigToTerraform(struct?: Wafv3DefenseRuleConfigTimeConfigOutputReference | Wafv3DefenseRuleConfigTimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_scope: cdktf.stringToTerraform(struct!.timeScope),
    time_zone: cdktf.numberToTerraform(struct!.timeZone),
    time_periods: cdktf.listMapper(wafv3DefenseRuleConfigTimeConfigTimePeriodsToTerraform, true)(struct!.timePeriods),
    week_time_periods: cdktf.listMapper(wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsToTerraform, true)(struct!.weekTimePeriods),
  }
}


export function wafv3DefenseRuleConfigTimeConfigToHclTerraform(struct?: Wafv3DefenseRuleConfigTimeConfigOutputReference | Wafv3DefenseRuleConfigTimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_scope: {
      value: cdktf.stringToHclTerraform(struct!.timeScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.numberToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_periods: {
      value: cdktf.listMapperHcl(wafv3DefenseRuleConfigTimeConfigTimePeriodsToHclTerraform, true)(struct!.timePeriods),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv3DefenseRuleConfigTimeConfigTimePeriodsList",
    },
    week_time_periods: {
      value: cdktf.listMapperHcl(wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsToHclTerraform, true)(struct!.weekTimePeriods),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DefenseRuleConfigTimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv3DefenseRuleConfigTimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeScope = this._timeScope;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._timePeriods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriods = this._timePeriods?.internalValue;
    }
    if (this._weekTimePeriods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekTimePeriods = this._weekTimePeriods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DefenseRuleConfigTimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeScope = undefined;
      this._timeZone = undefined;
      this._timePeriods.internalValue = undefined;
      this._weekTimePeriods.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeScope = value.timeScope;
      this._timeZone = value.timeZone;
      this._timePeriods.internalValue = value.timePeriods;
      this._weekTimePeriods.internalValue = value.weekTimePeriods;
    }
  }

  // time_scope - computed: true, optional: true, required: false
  private _timeScope?: string; 
  public get timeScope() {
    return this.getStringAttribute('time_scope');
  }
  public set timeScope(value: string) {
    this._timeScope = value;
  }
  public resetTimeScope() {
    this._timeScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScopeInput() {
    return this._timeScope;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: number; 
  public get timeZone() {
    return this.getNumberAttribute('time_zone');
  }
  public set timeZone(value: number) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // time_periods - computed: false, optional: true, required: false
  private _timePeriods = new Wafv3DefenseRuleConfigTimeConfigTimePeriodsList(this, "time_periods", true);
  public get timePeriods() {
    return this._timePeriods;
  }
  public putTimePeriods(value: Wafv3DefenseRuleConfigTimeConfigTimePeriods[] | cdktf.IResolvable) {
    this._timePeriods.internalValue = value;
  }
  public resetTimePeriods() {
    this._timePeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodsInput() {
    return this._timePeriods.internalValue;
  }

  // week_time_periods - computed: false, optional: true, required: false
  private _weekTimePeriods = new Wafv3DefenseRuleConfigTimeConfigWeekTimePeriodsList(this, "week_time_periods", true);
  public get weekTimePeriods() {
    return this._weekTimePeriods;
  }
  public putWeekTimePeriods(value: Wafv3DefenseRuleConfigTimeConfigWeekTimePeriods[] | cdktf.IResolvable) {
    this._weekTimePeriods.internalValue = value;
  }
  public resetWeekTimePeriods() {
    this._weekTimePeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekTimePeriodsInput() {
    return this._weekTimePeriods.internalValue;
  }
}
export interface Wafv3DefenseRuleConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#abroad_regions Wafv3DefenseRule#abroad_regions}
  */
  readonly abroadRegions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#bypass_regular_rules Wafv3DefenseRule#bypass_regular_rules}
  */
  readonly bypassRegularRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#bypass_regular_types Wafv3DefenseRule#bypass_regular_types}
  */
  readonly bypassRegularTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#bypass_tags Wafv3DefenseRule#bypass_tags}
  */
  readonly bypassTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#cc_effect Wafv3DefenseRule#cc_effect}
  */
  readonly ccEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#cc_status Wafv3DefenseRule#cc_status}
  */
  readonly ccStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#cn_regions Wafv3DefenseRule#cn_regions}
  */
  readonly cnRegions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#gray_status Wafv3DefenseRule#gray_status}
  */
  readonly grayStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#mode Wafv3DefenseRule#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#protocol Wafv3DefenseRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#remote_addr Wafv3DefenseRule#remote_addr}
  */
  readonly remoteAddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#rule_action Wafv3DefenseRule#rule_action}
  */
  readonly ruleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#throttle_threhold Wafv3DefenseRule#throttle_threhold}
  */
  readonly throttleThrehold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#throttle_type Wafv3DefenseRule#throttle_type}
  */
  readonly throttleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#ua Wafv3DefenseRule#ua}
  */
  readonly ua?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#url Wafv3DefenseRule#url}
  */
  readonly url?: string;
  /**
  * account_identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#account_identifiers Wafv3DefenseRule#account_identifiers}
  */
  readonly accountIdentifiers?: Wafv3DefenseRuleConfigAccountIdentifiers[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#conditions Wafv3DefenseRule#conditions}
  */
  readonly conditions?: Wafv3DefenseRuleConfigConditions[] | cdktf.IResolvable;
  /**
  * gray_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#gray_config Wafv3DefenseRule#gray_config}
  */
  readonly grayConfig?: Wafv3DefenseRuleConfigGrayConfig;
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#rate_limit Wafv3DefenseRule#rate_limit}
  */
  readonly rateLimit?: Wafv3DefenseRuleConfigRateLimit;
  /**
  * time_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#time_config Wafv3DefenseRule#time_config}
  */
  readonly timeConfig?: Wafv3DefenseRuleConfigTimeConfig;
}

export function wafv3DefenseRuleConfigAToTerraform(struct?: Wafv3DefenseRuleConfigAOutputReference | Wafv3DefenseRuleConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abroad_regions: cdktf.stringToTerraform(struct!.abroadRegions),
    bypass_regular_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bypassRegularRules),
    bypass_regular_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bypassRegularTypes),
    bypass_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bypassTags),
    cc_effect: cdktf.stringToTerraform(struct!.ccEffect),
    cc_status: cdktf.numberToTerraform(struct!.ccStatus),
    cn_regions: cdktf.stringToTerraform(struct!.cnRegions),
    gray_status: cdktf.numberToTerraform(struct!.grayStatus),
    mode: cdktf.numberToTerraform(struct!.mode),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_addr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteAddr),
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    throttle_threhold: cdktf.numberToTerraform(struct!.throttleThrehold),
    throttle_type: cdktf.stringToTerraform(struct!.throttleType),
    ua: cdktf.stringToTerraform(struct!.ua),
    url: cdktf.stringToTerraform(struct!.url),
    account_identifiers: cdktf.listMapper(wafv3DefenseRuleConfigAccountIdentifiersToTerraform, true)(struct!.accountIdentifiers),
    conditions: cdktf.listMapper(wafv3DefenseRuleConfigConditionsToTerraform, true)(struct!.conditions),
    gray_config: wafv3DefenseRuleConfigGrayConfigToTerraform(struct!.grayConfig),
    rate_limit: wafv3DefenseRuleConfigRateLimitToTerraform(struct!.rateLimit),
    time_config: wafv3DefenseRuleConfigTimeConfigToTerraform(struct!.timeConfig),
  }
}


export function wafv3DefenseRuleConfigAToHclTerraform(struct?: Wafv3DefenseRuleConfigAOutputReference | Wafv3DefenseRuleConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abroad_regions: {
      value: cdktf.stringToHclTerraform(struct!.abroadRegions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_regular_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bypassRegularRules),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bypass_regular_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bypassRegularTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bypass_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bypassTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cc_effect: {
      value: cdktf.stringToHclTerraform(struct!.ccEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cc_status: {
      value: cdktf.numberToHclTerraform(struct!.ccStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cn_regions: {
      value: cdktf.stringToHclTerraform(struct!.cnRegions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gray_status: {
      value: cdktf.numberToHclTerraform(struct!.grayStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_addr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteAddr),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rule_action: {
      value: cdktf.stringToHclTerraform(struct!.ruleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throttle_threhold: {
      value: cdktf.numberToHclTerraform(struct!.throttleThrehold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttle_type: {
      value: cdktf.stringToHclTerraform(struct!.throttleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ua: {
      value: cdktf.stringToHclTerraform(struct!.ua),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_identifiers: {
      value: cdktf.listMapperHcl(wafv3DefenseRuleConfigAccountIdentifiersToHclTerraform, true)(struct!.accountIdentifiers),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv3DefenseRuleConfigAccountIdentifiersList",
    },
    conditions: {
      value: cdktf.listMapperHcl(wafv3DefenseRuleConfigConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv3DefenseRuleConfigConditionsList",
    },
    gray_config: {
      value: wafv3DefenseRuleConfigGrayConfigToHclTerraform(struct!.grayConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv3DefenseRuleConfigGrayConfigList",
    },
    rate_limit: {
      value: wafv3DefenseRuleConfigRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv3DefenseRuleConfigRateLimitList",
    },
    time_config: {
      value: wafv3DefenseRuleConfigTimeConfigToHclTerraform(struct!.timeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv3DefenseRuleConfigTimeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DefenseRuleConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv3DefenseRuleConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abroadRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.abroadRegions = this._abroadRegions;
    }
    if (this._bypassRegularRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRegularRules = this._bypassRegularRules;
    }
    if (this._bypassRegularTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRegularTypes = this._bypassRegularTypes;
    }
    if (this._bypassTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassTags = this._bypassTags;
    }
    if (this._ccEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccEffect = this._ccEffect;
    }
    if (this._ccStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccStatus = this._ccStatus;
    }
    if (this._cnRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnRegions = this._cnRegions;
    }
    if (this._grayStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.grayStatus = this._grayStatus;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddr = this._remoteAddr;
    }
    if (this._ruleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleAction = this._ruleAction;
    }
    if (this._throttleThrehold !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleThrehold = this._throttleThrehold;
    }
    if (this._throttleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleType = this._throttleType;
    }
    if (this._ua !== undefined) {
      hasAnyValues = true;
      internalValueResult.ua = this._ua;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._accountIdentifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIdentifiers = this._accountIdentifiers?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._grayConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grayConfig = this._grayConfig?.internalValue;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    if (this._timeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeConfig = this._timeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DefenseRuleConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abroadRegions = undefined;
      this._bypassRegularRules = undefined;
      this._bypassRegularTypes = undefined;
      this._bypassTags = undefined;
      this._ccEffect = undefined;
      this._ccStatus = undefined;
      this._cnRegions = undefined;
      this._grayStatus = undefined;
      this._mode = undefined;
      this._protocol = undefined;
      this._remoteAddr = undefined;
      this._ruleAction = undefined;
      this._throttleThrehold = undefined;
      this._throttleType = undefined;
      this._ua = undefined;
      this._url = undefined;
      this._accountIdentifiers.internalValue = undefined;
      this._conditions.internalValue = undefined;
      this._grayConfig.internalValue = undefined;
      this._rateLimit.internalValue = undefined;
      this._timeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abroadRegions = value.abroadRegions;
      this._bypassRegularRules = value.bypassRegularRules;
      this._bypassRegularTypes = value.bypassRegularTypes;
      this._bypassTags = value.bypassTags;
      this._ccEffect = value.ccEffect;
      this._ccStatus = value.ccStatus;
      this._cnRegions = value.cnRegions;
      this._grayStatus = value.grayStatus;
      this._mode = value.mode;
      this._protocol = value.protocol;
      this._remoteAddr = value.remoteAddr;
      this._ruleAction = value.ruleAction;
      this._throttleThrehold = value.throttleThrehold;
      this._throttleType = value.throttleType;
      this._ua = value.ua;
      this._url = value.url;
      this._accountIdentifiers.internalValue = value.accountIdentifiers;
      this._conditions.internalValue = value.conditions;
      this._grayConfig.internalValue = value.grayConfig;
      this._rateLimit.internalValue = value.rateLimit;
      this._timeConfig.internalValue = value.timeConfig;
    }
  }

  // abroad_regions - computed: false, optional: true, required: false
  private _abroadRegions?: string; 
  public get abroadRegions() {
    return this.getStringAttribute('abroad_regions');
  }
  public set abroadRegions(value: string) {
    this._abroadRegions = value;
  }
  public resetAbroadRegions() {
    this._abroadRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abroadRegionsInput() {
    return this._abroadRegions;
  }

  // bypass_regular_rules - computed: false, optional: true, required: false
  private _bypassRegularRules?: string[]; 
  public get bypassRegularRules() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_regular_rules'));
  }
  public set bypassRegularRules(value: string[]) {
    this._bypassRegularRules = value;
  }
  public resetBypassRegularRules() {
    this._bypassRegularRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRegularRulesInput() {
    return this._bypassRegularRules;
  }

  // bypass_regular_types - computed: false, optional: true, required: false
  private _bypassRegularTypes?: string[]; 
  public get bypassRegularTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_regular_types'));
  }
  public set bypassRegularTypes(value: string[]) {
    this._bypassRegularTypes = value;
  }
  public resetBypassRegularTypes() {
    this._bypassRegularTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRegularTypesInput() {
    return this._bypassRegularTypes;
  }

  // bypass_tags - computed: false, optional: true, required: false
  private _bypassTags?: string[]; 
  public get bypassTags() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass_tags'));
  }
  public set bypassTags(value: string[]) {
    this._bypassTags = value;
  }
  public resetBypassTags() {
    this._bypassTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassTagsInput() {
    return this._bypassTags;
  }

  // cc_effect - computed: false, optional: true, required: false
  private _ccEffect?: string; 
  public get ccEffect() {
    return this.getStringAttribute('cc_effect');
  }
  public set ccEffect(value: string) {
    this._ccEffect = value;
  }
  public resetCcEffect() {
    this._ccEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccEffectInput() {
    return this._ccEffect;
  }

  // cc_status - computed: false, optional: true, required: false
  private _ccStatus?: number; 
  public get ccStatus() {
    return this.getNumberAttribute('cc_status');
  }
  public set ccStatus(value: number) {
    this._ccStatus = value;
  }
  public resetCcStatus() {
    this._ccStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccStatusInput() {
    return this._ccStatus;
  }

  // cn_regions - computed: false, optional: true, required: false
  private _cnRegions?: string; 
  public get cnRegions() {
    return this.getStringAttribute('cn_regions');
  }
  public set cnRegions(value: string) {
    this._cnRegions = value;
  }
  public resetCnRegions() {
    this._cnRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnRegionsInput() {
    return this._cnRegions;
  }

  // gray_status - computed: false, optional: true, required: false
  private _grayStatus?: number; 
  public get grayStatus() {
    return this.getNumberAttribute('gray_status');
  }
  public set grayStatus(value: number) {
    this._grayStatus = value;
  }
  public resetGrayStatus() {
    this._grayStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grayStatusInput() {
    return this._grayStatus;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remote_addr - computed: false, optional: true, required: false
  private _remoteAddr?: string[]; 
  public get remoteAddr() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_addr'));
  }
  public set remoteAddr(value: string[]) {
    this._remoteAddr = value;
  }
  public resetRemoteAddr() {
    this._remoteAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddrInput() {
    return this._remoteAddr;
  }

  // rule_action - computed: false, optional: true, required: false
  private _ruleAction?: string; 
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  public resetRuleAction() {
    this._ruleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction;
  }

  // throttle_threhold - computed: false, optional: true, required: false
  private _throttleThrehold?: number; 
  public get throttleThrehold() {
    return this.getNumberAttribute('throttle_threhold');
  }
  public set throttleThrehold(value: number) {
    this._throttleThrehold = value;
  }
  public resetThrottleThrehold() {
    this._throttleThrehold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleThreholdInput() {
    return this._throttleThrehold;
  }

  // throttle_type - computed: false, optional: true, required: false
  private _throttleType?: string; 
  public get throttleType() {
    return this.getStringAttribute('throttle_type');
  }
  public set throttleType(value: string) {
    this._throttleType = value;
  }
  public resetThrottleType() {
    this._throttleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleTypeInput() {
    return this._throttleType;
  }

  // ua - computed: false, optional: true, required: false
  private _ua?: string; 
  public get ua() {
    return this.getStringAttribute('ua');
  }
  public set ua(value: string) {
    this._ua = value;
  }
  public resetUa() {
    this._ua = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaInput() {
    return this._ua;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // account_identifiers - computed: false, optional: true, required: false
  private _accountIdentifiers = new Wafv3DefenseRuleConfigAccountIdentifiersList(this, "account_identifiers", true);
  public get accountIdentifiers() {
    return this._accountIdentifiers;
  }
  public putAccountIdentifiers(value: Wafv3DefenseRuleConfigAccountIdentifiers[] | cdktf.IResolvable) {
    this._accountIdentifiers.internalValue = value;
  }
  public resetAccountIdentifiers() {
    this._accountIdentifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdentifiersInput() {
    return this._accountIdentifiers.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new Wafv3DefenseRuleConfigConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: Wafv3DefenseRuleConfigConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // gray_config - computed: false, optional: true, required: false
  private _grayConfig = new Wafv3DefenseRuleConfigGrayConfigOutputReference(this, "gray_config");
  public get grayConfig() {
    return this._grayConfig;
  }
  public putGrayConfig(value: Wafv3DefenseRuleConfigGrayConfig) {
    this._grayConfig.internalValue = value;
  }
  public resetGrayConfig() {
    this._grayConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grayConfigInput() {
    return this._grayConfig.internalValue;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new Wafv3DefenseRuleConfigRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: Wafv3DefenseRuleConfigRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // time_config - computed: false, optional: true, required: false
  private _timeConfig = new Wafv3DefenseRuleConfigTimeConfigOutputReference(this, "time_config");
  public get timeConfig() {
    return this._timeConfig;
  }
  public putTimeConfig(value: Wafv3DefenseRuleConfigTimeConfig) {
    this._timeConfig.internalValue = value;
  }
  public resetTimeConfig() {
    this._timeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeConfigInput() {
    return this._timeConfig.internalValue;
  }
}
export interface Wafv3DefenseRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#create Wafv3DefenseRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#delete Wafv3DefenseRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#update Wafv3DefenseRule#update}
  */
  readonly update?: string;
}

export function wafv3DefenseRuleTimeoutsToTerraform(struct?: Wafv3DefenseRuleTimeouts | cdktf.IResolvable): any {
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


export function wafv3DefenseRuleTimeoutsToHclTerraform(struct?: Wafv3DefenseRuleTimeouts | cdktf.IResolvable): any {
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

export class Wafv3DefenseRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Wafv3DefenseRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv3DefenseRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule alicloud_wafv3_defense_rule}
*/
export class Wafv3DefenseRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_wafv3_defense_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafv3DefenseRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafv3DefenseRule to import
  * @param importFromId The id of the existing Wafv3DefenseRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafv3DefenseRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_wafv3_defense_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/wafv3_defense_rule alicloud_wafv3_defense_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv3DefenseRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv3DefenseRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_wafv3_defense_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defenseOrigin = config.defenseOrigin;
    this._defenseScene = config.defenseScene;
    this._defenseType = config.defenseType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._resource = config.resource;
    this._ruleName = config.ruleName;
    this._ruleStatus = config.ruleStatus;
    this._templateId = config.templateId;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defense_origin - computed: false, optional: true, required: false
  private _defenseOrigin?: string; 
  public get defenseOrigin() {
    return this.getStringAttribute('defense_origin');
  }
  public set defenseOrigin(value: string) {
    this._defenseOrigin = value;
  }
  public resetDefenseOrigin() {
    this._defenseOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defenseOriginInput() {
    return this._defenseOrigin;
  }

  // defense_scene - computed: false, optional: false, required: true
  private _defenseScene?: string; 
  public get defenseScene() {
    return this.getStringAttribute('defense_scene');
  }
  public set defenseScene(value: string) {
    this._defenseScene = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defenseSceneInput() {
    return this._defenseScene;
  }

  // defense_type - computed: false, optional: false, required: true
  private _defenseType?: string; 
  public get defenseType() {
    return this.getStringAttribute('defense_type');
  }
  public set defenseType(value: string) {
    this._defenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defenseTypeInput() {
    return this._defenseType;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // rule_name - computed: true, optional: true, required: false
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

  // rule_status - computed: false, optional: true, required: false
  private _ruleStatus?: number; 
  public get ruleStatus() {
    return this.getNumberAttribute('rule_status');
  }
  public set ruleStatus(value: number) {
    this._ruleStatus = value;
  }
  public resetRuleStatus() {
    this._ruleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatusInput() {
    return this._ruleStatus;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: number; 
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
  public set templateId(value: number) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // config - computed: false, optional: false, required: true
  private _config = new Wafv3DefenseRuleConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: Wafv3DefenseRuleConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Wafv3DefenseRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Wafv3DefenseRuleTimeouts) {
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
      defense_origin: cdktf.stringToTerraform(this._defenseOrigin),
      defense_scene: cdktf.stringToTerraform(this._defenseScene),
      defense_type: cdktf.stringToTerraform(this._defenseType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      resource: cdktf.stringToTerraform(this._resource),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_status: cdktf.numberToTerraform(this._ruleStatus),
      template_id: cdktf.numberToTerraform(this._templateId),
      config: wafv3DefenseRuleConfigAToTerraform(this._config.internalValue),
      timeouts: wafv3DefenseRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defense_origin: {
        value: cdktf.stringToHclTerraform(this._defenseOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defense_scene: {
        value: cdktf.stringToHclTerraform(this._defenseScene),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defense_type: {
        value: cdktf.stringToHclTerraform(this._defenseType),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
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
      rule_status: {
        value: cdktf.numberToHclTerraform(this._ruleStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_id: {
        value: cdktf.numberToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config: {
        value: wafv3DefenseRuleConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv3DefenseRuleConfigAList",
      },
      timeouts: {
        value: wafv3DefenseRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Wafv3DefenseRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
