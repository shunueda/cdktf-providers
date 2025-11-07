// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseEndpointZtnaRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#comments DataFortisaseEndpointZtnaRules#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#logic DataFortisaseEndpointZtnaRules#logic}
  */
  readonly logic?: DataFortisaseEndpointZtnaRulesLogic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#primary_key DataFortisaseEndpointZtnaRules#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#rules DataFortisaseEndpointZtnaRules#rules}
  */
  readonly rules?: DataFortisaseEndpointZtnaRulesRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#status DataFortisaseEndpointZtnaRules#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#tag DataFortisaseEndpointZtnaRules#tag}
  */
  readonly tag?: DataFortisaseEndpointZtnaRulesTag;
}
export interface DataFortisaseEndpointZtnaRulesLogic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#android DataFortisaseEndpointZtnaRules#android}
  */
  readonly android?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#ios DataFortisaseEndpointZtnaRules#ios}
  */
  readonly ios?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#linux DataFortisaseEndpointZtnaRules#linux}
  */
  readonly linux?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#macos DataFortisaseEndpointZtnaRules#macos}
  */
  readonly macos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#windows DataFortisaseEndpointZtnaRules#windows}
  */
  readonly windows?: string;
}

export function dataFortisaseEndpointZtnaRulesLogicToTerraform(struct?: DataFortisaseEndpointZtnaRulesLogic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    android: cdktf.stringToTerraform(struct!.android),
    ios: cdktf.stringToTerraform(struct!.ios),
    linux: cdktf.stringToTerraform(struct!.linux),
    macos: cdktf.stringToTerraform(struct!.macos),
    windows: cdktf.stringToTerraform(struct!.windows),
  }
}


export function dataFortisaseEndpointZtnaRulesLogicToHclTerraform(struct?: DataFortisaseEndpointZtnaRulesLogic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    android: {
      value: cdktf.stringToHclTerraform(struct!.android),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ios: {
      value: cdktf.stringToHclTerraform(struct!.ios),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux: {
      value: cdktf.stringToHclTerraform(struct!.linux),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macos: {
      value: cdktf.stringToHclTerraform(struct!.macos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windows: {
      value: cdktf.stringToHclTerraform(struct!.windows),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointZtnaRulesLogicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointZtnaRulesLogic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._android !== undefined) {
      hasAnyValues = true;
      internalValueResult.android = this._android;
    }
    if (this._ios !== undefined) {
      hasAnyValues = true;
      internalValueResult.ios = this._ios;
    }
    if (this._linux !== undefined) {
      hasAnyValues = true;
      internalValueResult.linux = this._linux;
    }
    if (this._macos !== undefined) {
      hasAnyValues = true;
      internalValueResult.macos = this._macos;
    }
    if (this._windows !== undefined) {
      hasAnyValues = true;
      internalValueResult.windows = this._windows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointZtnaRulesLogic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._android = undefined;
      this._ios = undefined;
      this._linux = undefined;
      this._macos = undefined;
      this._windows = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._android = value.android;
      this._ios = value.ios;
      this._linux = value.linux;
      this._macos = value.macos;
      this._windows = value.windows;
    }
  }

  // android - computed: true, optional: true, required: false
  private _android?: string; 
  public get android() {
    return this.getStringAttribute('android');
  }
  public set android(value: string) {
    this._android = value;
  }
  public resetAndroid() {
    this._android = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get androidInput() {
    return this._android;
  }

  // ios - computed: true, optional: true, required: false
  private _ios?: string; 
  public get ios() {
    return this.getStringAttribute('ios');
  }
  public set ios(value: string) {
    this._ios = value;
  }
  public resetIos() {
    this._ios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosInput() {
    return this._ios;
  }

  // linux - computed: true, optional: true, required: false
  private _linux?: string; 
  public get linux() {
    return this.getStringAttribute('linux');
  }
  public set linux(value: string) {
    this._linux = value;
  }
  public resetLinux() {
    this._linux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxInput() {
    return this._linux;
  }

  // macos - computed: true, optional: true, required: false
  private _macos?: string; 
  public get macos() {
    return this.getStringAttribute('macos');
  }
  public set macos(value: string) {
    this._macos = value;
  }
  public resetMacos() {
    this._macos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosInput() {
    return this._macos;
  }

  // windows - computed: true, optional: true, required: false
  private _windows?: string; 
  public get windows() {
    return this.getStringAttribute('windows');
  }
  public set windows(value: string) {
    this._windows = value;
  }
  public resetWindows() {
    this._windows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows;
  }
}
export interface DataFortisaseEndpointZtnaRulesRulesCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#comparator DataFortisaseEndpointZtnaRules#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#is_dword DataFortisaseEndpointZtnaRules#is_dword}
  */
  readonly isDword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#key DataFortisaseEndpointZtnaRules#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#value DataFortisaseEndpointZtnaRules#value}
  */
  readonly value?: string;
}

export function dataFortisaseEndpointZtnaRulesRulesConditionToTerraform(struct?: DataFortisaseEndpointZtnaRulesRulesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    is_dword: cdktf.booleanToTerraform(struct!.isDword),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataFortisaseEndpointZtnaRulesRulesConditionToHclTerraform(struct?: DataFortisaseEndpointZtnaRulesRulesCondition | cdktf.IResolvable): any {
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
    is_dword: {
      value: cdktf.booleanToHclTerraform(struct!.isDword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DataFortisaseEndpointZtnaRulesRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointZtnaRulesRulesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._isDword !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDword = this._isDword;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointZtnaRulesRulesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._isDword = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._isDword = value.isDword;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // is_dword - computed: true, optional: true, required: false
  private _isDword?: boolean | cdktf.IResolvable; 
  public get isDword() {
    return this.getBooleanAttribute('is_dword');
  }
  public set isDword(value: boolean | cdktf.IResolvable) {
    this._isDword = value;
  }
  public resetIsDword() {
    this._isDword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDwordInput() {
    return this._isDword;
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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
export interface DataFortisaseEndpointZtnaRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#account DataFortisaseEndpointZtnaRules#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#check_updates_within_days DataFortisaseEndpointZtnaRules#check_updates_within_days}
  */
  readonly checkUpdatesWithinDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#comparator DataFortisaseEndpointZtnaRules#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#condition DataFortisaseEndpointZtnaRules#condition}
  */
  readonly condition?: DataFortisaseEndpointZtnaRulesRulesCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#content DataFortisaseEndpointZtnaRules#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#enable_latest_update_check DataFortisaseEndpointZtnaRules#enable_latest_update_check}
  */
  readonly enableLatestUpdateCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#id DataFortisaseEndpointZtnaRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#issuer DataFortisaseEndpointZtnaRules#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#match_type DataFortisaseEndpointZtnaRules#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#negated DataFortisaseEndpointZtnaRules#negated}
  */
  readonly negated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#os DataFortisaseEndpointZtnaRules#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#path DataFortisaseEndpointZtnaRules#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#service DataFortisaseEndpointZtnaRules#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#subject DataFortisaseEndpointZtnaRules#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#type DataFortisaseEndpointZtnaRules#type}
  */
  readonly type?: string;
}

export function dataFortisaseEndpointZtnaRulesRulesToTerraform(struct?: DataFortisaseEndpointZtnaRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    check_updates_within_days: cdktf.numberToTerraform(struct!.checkUpdatesWithinDays),
    comparator: cdktf.stringToTerraform(struct!.comparator),
    condition: dataFortisaseEndpointZtnaRulesRulesConditionToTerraform(struct!.condition),
    content: cdktf.stringToTerraform(struct!.content),
    enable_latest_update_check: cdktf.booleanToTerraform(struct!.enableLatestUpdateCheck),
    id: cdktf.numberToTerraform(struct!.id),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    negated: cdktf.booleanToTerraform(struct!.negated),
    os: cdktf.stringToTerraform(struct!.os),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
    subject: cdktf.stringToTerraform(struct!.subject),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataFortisaseEndpointZtnaRulesRulesToHclTerraform(struct?: DataFortisaseEndpointZtnaRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_updates_within_days: {
      value: cdktf.numberToHclTerraform(struct!.checkUpdatesWithinDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: dataFortisaseEndpointZtnaRulesRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseEndpointZtnaRulesRulesCondition",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_latest_update_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableLatestUpdateCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negated: {
      value: cdktf.booleanToHclTerraform(struct!.negated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
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

export class DataFortisaseEndpointZtnaRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseEndpointZtnaRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._checkUpdatesWithinDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkUpdatesWithinDays = this._checkUpdatesWithinDays;
    }
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._enableLatestUpdateCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLatestUpdateCheck = this._enableLatestUpdateCheck;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._negated !== undefined) {
      hasAnyValues = true;
      internalValueResult.negated = this._negated;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointZtnaRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._checkUpdatesWithinDays = undefined;
      this._comparator = undefined;
      this._condition.internalValue = undefined;
      this._content = undefined;
      this._enableLatestUpdateCheck = undefined;
      this._id = undefined;
      this._issuer = undefined;
      this._matchType = undefined;
      this._negated = undefined;
      this._os = undefined;
      this._path = undefined;
      this._service = undefined;
      this._subject = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._checkUpdatesWithinDays = value.checkUpdatesWithinDays;
      this._comparator = value.comparator;
      this._condition.internalValue = value.condition;
      this._content = value.content;
      this._enableLatestUpdateCheck = value.enableLatestUpdateCheck;
      this._id = value.id;
      this._issuer = value.issuer;
      this._matchType = value.matchType;
      this._negated = value.negated;
      this._os = value.os;
      this._path = value.path;
      this._service = value.service;
      this._subject = value.subject;
      this._type = value.type;
    }
  }

  // account - computed: true, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // check_updates_within_days - computed: true, optional: true, required: false
  private _checkUpdatesWithinDays?: number; 
  public get checkUpdatesWithinDays() {
    return this.getNumberAttribute('check_updates_within_days');
  }
  public set checkUpdatesWithinDays(value: number) {
    this._checkUpdatesWithinDays = value;
  }
  public resetCheckUpdatesWithinDays() {
    this._checkUpdatesWithinDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkUpdatesWithinDaysInput() {
    return this._checkUpdatesWithinDays;
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // condition - computed: true, optional: true, required: false
  private _condition = new DataFortisaseEndpointZtnaRulesRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataFortisaseEndpointZtnaRulesRulesCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // enable_latest_update_check - computed: true, optional: true, required: false
  private _enableLatestUpdateCheck?: boolean | cdktf.IResolvable; 
  public get enableLatestUpdateCheck() {
    return this.getBooleanAttribute('enable_latest_update_check');
  }
  public set enableLatestUpdateCheck(value: boolean | cdktf.IResolvable) {
    this._enableLatestUpdateCheck = value;
  }
  public resetEnableLatestUpdateCheck() {
    this._enableLatestUpdateCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLatestUpdateCheckInput() {
    return this._enableLatestUpdateCheck;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // match_type - computed: true, optional: true, required: false
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

  // negated - computed: true, optional: true, required: false
  private _negated?: boolean | cdktf.IResolvable; 
  public get negated() {
    return this.getBooleanAttribute('negated');
  }
  public set negated(value: boolean | cdktf.IResolvable) {
    this._negated = value;
  }
  public resetNegated() {
    this._negated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negatedInput() {
    return this._negated;
  }

  // os - computed: true, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
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

export class DataFortisaseEndpointZtnaRulesRulesList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseEndpointZtnaRulesRules[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseEndpointZtnaRulesRulesOutputReference {
    return new DataFortisaseEndpointZtnaRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseEndpointZtnaRulesTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#datasource DataFortisaseEndpointZtnaRules#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#primary_key DataFortisaseEndpointZtnaRules#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseEndpointZtnaRulesTagToTerraform(struct?: DataFortisaseEndpointZtnaRulesTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseEndpointZtnaRulesTagToHclTerraform(struct?: DataFortisaseEndpointZtnaRulesTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseEndpointZtnaRulesTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseEndpointZtnaRulesTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseEndpointZtnaRulesTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules fortisase_endpoint_ztna_rules}
*/
export class DataFortisaseEndpointZtnaRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_endpoint_ztna_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseEndpointZtnaRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseEndpointZtnaRules to import
  * @param importFromId The id of the existing DataFortisaseEndpointZtnaRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseEndpointZtnaRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_endpoint_ztna_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/endpoint_ztna_rules fortisase_endpoint_ztna_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseEndpointZtnaRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseEndpointZtnaRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_endpoint_ztna_rules',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._logic.internalValue = config.logic;
    this._primaryKey = config.primaryKey;
    this._rules.internalValue = config.rules;
    this._status = config.status;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // logic - computed: true, optional: true, required: false
  private _logic = new DataFortisaseEndpointZtnaRulesLogicOutputReference(this, "logic");
  public get logic() {
    return this._logic;
  }
  public putLogic(value: DataFortisaseEndpointZtnaRulesLogic) {
    this._logic.internalValue = value;
  }
  public resetLogic() {
    this._logic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic.internalValue;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new DataFortisaseEndpointZtnaRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataFortisaseEndpointZtnaRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: true, optional: true, required: false
  private _tag = new DataFortisaseEndpointZtnaRulesTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataFortisaseEndpointZtnaRulesTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      logic: dataFortisaseEndpointZtnaRulesLogicToTerraform(this._logic.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      rules: cdktf.listMapper(dataFortisaseEndpointZtnaRulesRulesToTerraform, false)(this._rules.internalValue),
      status: cdktf.stringToTerraform(this._status),
      tag: dataFortisaseEndpointZtnaRulesTagToTerraform(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logic: {
        value: dataFortisaseEndpointZtnaRulesLogicToHclTerraform(this._logic.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointZtnaRulesLogic",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(dataFortisaseEndpointZtnaRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseEndpointZtnaRulesRulesList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: dataFortisaseEndpointZtnaRulesTagToHclTerraform(this._tag.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseEndpointZtnaRulesTag",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
