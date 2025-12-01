// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaWafRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#id EsaWafRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#phase EsaWafRule#phase}
  */
  readonly phase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#ruleset_id EsaWafRule#ruleset_id}
  */
  readonly rulesetId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#site_id EsaWafRule#site_id}
  */
  readonly siteId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#site_version EsaWafRule#site_version}
  */
  readonly siteVersion?: number;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#config EsaWafRule#config}
  */
  readonly config?: EsaWafRuleConfigA;
  /**
  * shared block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#shared EsaWafRule#shared}
  */
  readonly shared?: EsaWafRuleShared;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#timeouts EsaWafRule#timeouts}
  */
  readonly timeouts?: EsaWafRuleTimeouts;
}
export interface EsaWafRuleConfigActionsBypass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#custom_rules EsaWafRule#custom_rules}
  */
  readonly customRules?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#regular_rules EsaWafRule#regular_rules}
  */
  readonly regularRules?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#regular_types EsaWafRule#regular_types}
  */
  readonly regularTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#skip EsaWafRule#skip}
  */
  readonly skip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#tags EsaWafRule#tags}
  */
  readonly tags?: string[];
}

export function esaWafRuleConfigActionsBypassToTerraform(struct?: EsaWafRuleConfigActionsBypassOutputReference | EsaWafRuleConfigActionsBypass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_rules: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.customRules),
    regular_rules: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.regularRules),
    regular_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regularTypes),
    skip: cdktf.stringToTerraform(struct!.skip),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function esaWafRuleConfigActionsBypassToHclTerraform(struct?: EsaWafRuleConfigActionsBypassOutputReference | EsaWafRuleConfigActionsBypass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_rules: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.customRules),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    regular_rules: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.regularRules),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    regular_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regularTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    skip: {
      value: cdktf.stringToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigActionsBypassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigActionsBypass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRules = this._customRules;
    }
    if (this._regularRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularRules = this._regularRules;
    }
    if (this._regularTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularTypes = this._regularTypes;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigActionsBypass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRules = undefined;
      this._regularRules = undefined;
      this._regularTypes = undefined;
      this._skip = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRules = value.customRules;
      this._regularRules = value.regularRules;
      this._regularTypes = value.regularTypes;
      this._skip = value.skip;
      this._tags = value.tags;
    }
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules?: number[]; 
  public get customRules() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('custom_rules')));
  }
  public set customRules(value: number[]) {
    this._customRules = value;
  }
  public resetCustomRules() {
    this._customRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules;
  }

  // regular_rules - computed: false, optional: true, required: false
  private _regularRules?: number[]; 
  public get regularRules() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('regular_rules')));
  }
  public set regularRules(value: number[]) {
    this._regularRules = value;
  }
  public resetRegularRules() {
    this._regularRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularRulesInput() {
    return this._regularRules;
  }

  // regular_types - computed: false, optional: true, required: false
  private _regularTypes?: string[]; 
  public get regularTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('regular_types'));
  }
  public set regularTypes(value: string[]) {
    this._regularTypes = value;
  }
  public resetRegularTypes() {
    this._regularTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularTypesInput() {
    return this._regularTypes;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('skip');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface EsaWafRuleConfigActionsResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#code EsaWafRule#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#id EsaWafRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function esaWafRuleConfigActionsResponseToTerraform(struct?: EsaWafRuleConfigActionsResponseOutputReference | EsaWafRuleConfigActionsResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function esaWafRuleConfigActionsResponseToHclTerraform(struct?: EsaWafRuleConfigActionsResponseOutputReference | EsaWafRuleConfigActionsResponse): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigActionsResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigActionsResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigActionsResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._id = value.id;
    }
  }

  // code - computed: true, optional: true, required: false
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

  // id - computed: false, optional: true, required: false
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
}
export interface EsaWafRuleConfigActions {
  /**
  * bypass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#bypass EsaWafRule#bypass}
  */
  readonly bypass?: EsaWafRuleConfigActionsBypass;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#response EsaWafRule#response}
  */
  readonly response?: EsaWafRuleConfigActionsResponse;
}

export function esaWafRuleConfigActionsToTerraform(struct?: EsaWafRuleConfigActionsOutputReference | EsaWafRuleConfigActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: esaWafRuleConfigActionsBypassToTerraform(struct!.bypass),
    response: esaWafRuleConfigActionsResponseToTerraform(struct!.response),
  }
}


export function esaWafRuleConfigActionsToHclTerraform(struct?: EsaWafRuleConfigActionsOutputReference | EsaWafRuleConfigActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: esaWafRuleConfigActionsBypassToHclTerraform(struct!.bypass),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigActionsBypassList",
    },
    response: {
      value: esaWafRuleConfigActionsResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigActionsResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypass.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypass.internalValue = value.bypass;
      this._response.internalValue = value.response;
    }
  }

  // bypass - computed: false, optional: true, required: false
  private _bypass = new EsaWafRuleConfigActionsBypassOutputReference(this, "bypass");
  public get bypass() {
    return this._bypass;
  }
  public putBypass(value: EsaWafRuleConfigActionsBypass) {
    this._bypass.internalValue = value;
  }
  public resetBypass() {
    this._bypass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new EsaWafRuleConfigActionsResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: EsaWafRuleConfigActionsResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}
export interface EsaWafRuleConfigAppPackagePackageSigns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#name EsaWafRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#sign EsaWafRule#sign}
  */
  readonly sign?: string;
}

export function esaWafRuleConfigAppPackagePackageSignsToTerraform(struct?: EsaWafRuleConfigAppPackagePackageSigns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sign: cdktf.stringToTerraform(struct!.sign),
  }
}


export function esaWafRuleConfigAppPackagePackageSignsToHclTerraform(struct?: EsaWafRuleConfigAppPackagePackageSigns | cdktf.IResolvable): any {
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
    sign: {
      value: cdktf.stringToHclTerraform(struct!.sign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigAppPackagePackageSignsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleConfigAppPackagePackageSigns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sign !== undefined) {
      hasAnyValues = true;
      internalValueResult.sign = this._sign;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigAppPackagePackageSigns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sign = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sign = value.sign;
    }
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

  // sign - computed: false, optional: true, required: false
  private _sign?: string; 
  public get sign() {
    return this.getStringAttribute('sign');
  }
  public set sign(value: string) {
    this._sign = value;
  }
  public resetSign() {
    this._sign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInput() {
    return this._sign;
  }
}

export class EsaWafRuleConfigAppPackagePackageSignsList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleConfigAppPackagePackageSigns[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleConfigAppPackagePackageSignsOutputReference {
    return new EsaWafRuleConfigAppPackagePackageSignsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleConfigAppPackage {
  /**
  * package_signs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#package_signs EsaWafRule#package_signs}
  */
  readonly packageSigns?: EsaWafRuleConfigAppPackagePackageSigns[] | cdktf.IResolvable;
}

export function esaWafRuleConfigAppPackageToTerraform(struct?: EsaWafRuleConfigAppPackageOutputReference | EsaWafRuleConfigAppPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package_signs: cdktf.listMapper(esaWafRuleConfigAppPackagePackageSignsToTerraform, true)(struct!.packageSigns),
  }
}


export function esaWafRuleConfigAppPackageToHclTerraform(struct?: EsaWafRuleConfigAppPackageOutputReference | EsaWafRuleConfigAppPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package_signs: {
      value: cdktf.listMapperHcl(esaWafRuleConfigAppPackagePackageSignsToHclTerraform, true)(struct!.packageSigns),
      isBlock: true,
      type: "set",
      storageClassType: "EsaWafRuleConfigAppPackagePackageSignsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigAppPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigAppPackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packageSigns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageSigns = this._packageSigns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigAppPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._packageSigns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._packageSigns.internalValue = value.packageSigns;
    }
  }

  // package_signs - computed: false, optional: true, required: false
  private _packageSigns = new EsaWafRuleConfigAppPackagePackageSignsList(this, "package_signs", true);
  public get packageSigns() {
    return this._packageSigns;
  }
  public putPackageSigns(value: EsaWafRuleConfigAppPackagePackageSigns[] | cdktf.IResolvable) {
    this._packageSigns.internalValue = value;
  }
  public resetPackageSigns() {
    this._packageSigns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageSignsInput() {
    return this._packageSigns.internalValue;
  }
}
export interface EsaWafRuleConfigAppSdkCustomSign {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#key EsaWafRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#value EsaWafRule#value}
  */
  readonly value?: string;
}

export function esaWafRuleConfigAppSdkCustomSignToTerraform(struct?: EsaWafRuleConfigAppSdkCustomSignOutputReference | EsaWafRuleConfigAppSdkCustomSign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function esaWafRuleConfigAppSdkCustomSignToHclTerraform(struct?: EsaWafRuleConfigAppSdkCustomSignOutputReference | EsaWafRuleConfigAppSdkCustomSign): any {
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

export class EsaWafRuleConfigAppSdkCustomSignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigAppSdkCustomSign | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: EsaWafRuleConfigAppSdkCustomSign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
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
export interface EsaWafRuleConfigAppSdk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#custom_sign_status EsaWafRule#custom_sign_status}
  */
  readonly customSignStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#feature_abnormal EsaWafRule#feature_abnormal}
  */
  readonly featureAbnormal?: string[];
  /**
  * custom_sign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#custom_sign EsaWafRule#custom_sign}
  */
  readonly customSign?: EsaWafRuleConfigAppSdkCustomSign;
}

export function esaWafRuleConfigAppSdkToTerraform(struct?: EsaWafRuleConfigAppSdkOutputReference | EsaWafRuleConfigAppSdk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sign_status: cdktf.stringToTerraform(struct!.customSignStatus),
    feature_abnormal: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.featureAbnormal),
    custom_sign: esaWafRuleConfigAppSdkCustomSignToTerraform(struct!.customSign),
  }
}


export function esaWafRuleConfigAppSdkToHclTerraform(struct?: EsaWafRuleConfigAppSdkOutputReference | EsaWafRuleConfigAppSdk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sign_status: {
      value: cdktf.stringToHclTerraform(struct!.customSignStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_abnormal: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.featureAbnormal),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_sign: {
      value: esaWafRuleConfigAppSdkCustomSignToHclTerraform(struct!.customSign),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigAppSdkCustomSignList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigAppSdkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigAppSdk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSignStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSignStatus = this._customSignStatus;
    }
    if (this._featureAbnormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureAbnormal = this._featureAbnormal;
    }
    if (this._customSign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSign = this._customSign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigAppSdk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSignStatus = undefined;
      this._featureAbnormal = undefined;
      this._customSign.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSignStatus = value.customSignStatus;
      this._featureAbnormal = value.featureAbnormal;
      this._customSign.internalValue = value.customSign;
    }
  }

  // custom_sign_status - computed: false, optional: true, required: false
  private _customSignStatus?: string; 
  public get customSignStatus() {
    return this.getStringAttribute('custom_sign_status');
  }
  public set customSignStatus(value: string) {
    this._customSignStatus = value;
  }
  public resetCustomSignStatus() {
    this._customSignStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSignStatusInput() {
    return this._customSignStatus;
  }

  // feature_abnormal - computed: false, optional: true, required: false
  private _featureAbnormal?: string[]; 
  public get featureAbnormal() {
    return cdktf.Fn.tolist(this.getListAttribute('feature_abnormal'));
  }
  public set featureAbnormal(value: string[]) {
    this._featureAbnormal = value;
  }
  public resetFeatureAbnormal() {
    this._featureAbnormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureAbnormalInput() {
    return this._featureAbnormal;
  }

  // custom_sign - computed: false, optional: true, required: false
  private _customSign = new EsaWafRuleConfigAppSdkCustomSignOutputReference(this, "custom_sign");
  public get customSign() {
    return this._customSign;
  }
  public putCustomSign(value: EsaWafRuleConfigAppSdkCustomSign) {
    this._customSign.internalValue = value;
  }
  public resetCustomSign() {
    this._customSign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSignInput() {
    return this._customSign.internalValue;
  }
}
export interface EsaWafRuleConfigManagedRulesetsManagedRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#action EsaWafRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#id EsaWafRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#status EsaWafRule#status}
  */
  readonly status?: string;
}

export function esaWafRuleConfigManagedRulesetsManagedRulesToTerraform(struct?: EsaWafRuleConfigManagedRulesetsManagedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.numberToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function esaWafRuleConfigManagedRulesetsManagedRulesToHclTerraform(struct?: EsaWafRuleConfigManagedRulesetsManagedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigManagedRulesetsManagedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleConfigManagedRulesetsManagedRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigManagedRulesetsManagedRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
      this._status = value.status;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // id - computed: false, optional: true, required: false
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

  // status - computed: false, optional: true, required: false
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
}

export class EsaWafRuleConfigManagedRulesetsManagedRulesList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleConfigManagedRulesetsManagedRules[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleConfigManagedRulesetsManagedRulesOutputReference {
    return new EsaWafRuleConfigManagedRulesetsManagedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleConfigManagedRulesets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#action EsaWafRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#attack_type EsaWafRule#attack_type}
  */
  readonly attackType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#protection_level EsaWafRule#protection_level}
  */
  readonly protectionLevel?: number;
  /**
  * managed_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#managed_rules EsaWafRule#managed_rules}
  */
  readonly managedRules?: EsaWafRuleConfigManagedRulesetsManagedRules[] | cdktf.IResolvable;
}

export function esaWafRuleConfigManagedRulesetsToTerraform(struct?: EsaWafRuleConfigManagedRulesets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    attack_type: cdktf.numberToTerraform(struct!.attackType),
    protection_level: cdktf.numberToTerraform(struct!.protectionLevel),
    managed_rules: cdktf.listMapper(esaWafRuleConfigManagedRulesetsManagedRulesToTerraform, true)(struct!.managedRules),
  }
}


export function esaWafRuleConfigManagedRulesetsToHclTerraform(struct?: EsaWafRuleConfigManagedRulesets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attack_type: {
      value: cdktf.numberToHclTerraform(struct!.attackType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protection_level: {
      value: cdktf.numberToHclTerraform(struct!.protectionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_rules: {
      value: cdktf.listMapperHcl(esaWafRuleConfigManagedRulesetsManagedRulesToHclTerraform, true)(struct!.managedRules),
      isBlock: true,
      type: "set",
      storageClassType: "EsaWafRuleConfigManagedRulesetsManagedRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigManagedRulesetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleConfigManagedRulesets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._attackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackType = this._attackType;
    }
    if (this._protectionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionLevel = this._protectionLevel;
    }
    if (this._managedRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRules = this._managedRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigManagedRulesets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._attackType = undefined;
      this._protectionLevel = undefined;
      this._managedRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._attackType = value.attackType;
      this._protectionLevel = value.protectionLevel;
      this._managedRules.internalValue = value.managedRules;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // attack_type - computed: false, optional: true, required: false
  private _attackType?: number; 
  public get attackType() {
    return this.getNumberAttribute('attack_type');
  }
  public set attackType(value: number) {
    this._attackType = value;
  }
  public resetAttackType() {
    this._attackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypeInput() {
    return this._attackType;
  }

  // number_enabled - computed: true, optional: false, required: false
  public get numberEnabled() {
    return this.getNumberAttribute('number_enabled');
  }

  // number_total - computed: true, optional: false, required: false
  public get numberTotal() {
    return this.getNumberAttribute('number_total');
  }

  // protection_level - computed: false, optional: true, required: false
  private _protectionLevel?: number; 
  public get protectionLevel() {
    return this.getNumberAttribute('protection_level');
  }
  public set protectionLevel(value: number) {
    this._protectionLevel = value;
  }
  public resetProtectionLevel() {
    this._protectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionLevelInput() {
    return this._protectionLevel;
  }

  // managed_rules - computed: false, optional: true, required: false
  private _managedRules = new EsaWafRuleConfigManagedRulesetsManagedRulesList(this, "managed_rules", true);
  public get managedRules() {
    return this._managedRules;
  }
  public putManagedRules(value: EsaWafRuleConfigManagedRulesetsManagedRules[] | cdktf.IResolvable) {
    this._managedRules.internalValue = value;
  }
  public resetManagedRules() {
    this._managedRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRulesInput() {
    return this._managedRules.internalValue;
  }
}

export class EsaWafRuleConfigManagedRulesetsList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleConfigManagedRulesets[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleConfigManagedRulesetsOutputReference {
    return new EsaWafRuleConfigManagedRulesetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#match_type EsaWafRule#match_type}
  */
  readonly matchType?: string;
}

export function esaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteriaToTerraform(struct?: EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function esaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteriaToHclTerraform(struct?: EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
    }
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
}

export class EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteriaList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteria[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteriaOutputReference {
    return new EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#logic EsaWafRule#logic}
  */
  readonly logic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#match_type EsaWafRule#match_type}
  */
  readonly matchType?: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#criteria EsaWafRule#criteria}
  */
  readonly criteria?: EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteria[] | cdktf.IResolvable;
}

export function esaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaToTerraform(struct?: EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logic: cdktf.stringToTerraform(struct!.logic),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    criteria: cdktf.listMapper(esaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function esaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaToHclTerraform(struct?: EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
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
    criteria: {
      value: cdktf.listMapperHcl(esaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logic = undefined;
      this._matchType = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logic = value.logic;
      this._matchType = value.matchType;
      this._criteria.internalValue = value.criteria;
    }
  }

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // criteria - computed: false, optional: true, required: false
  private _criteria = new EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteria[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaOutputReference {
    return new EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleConfigRateLimitCharacteristicsCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#logic EsaWafRule#logic}
  */
  readonly logic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#match_type EsaWafRule#match_type}
  */
  readonly matchType?: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#criteria EsaWafRule#criteria}
  */
  readonly criteria?: EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteria[] | cdktf.IResolvable;
}

export function esaWafRuleConfigRateLimitCharacteristicsCriteriaToTerraform(struct?: EsaWafRuleConfigRateLimitCharacteristicsCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logic: cdktf.stringToTerraform(struct!.logic),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    criteria: cdktf.listMapper(esaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function esaWafRuleConfigRateLimitCharacteristicsCriteriaToHclTerraform(struct?: EsaWafRuleConfigRateLimitCharacteristicsCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
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
    criteria: {
      value: cdktf.listMapperHcl(esaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigRateLimitCharacteristicsCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleConfigRateLimitCharacteristicsCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigRateLimitCharacteristicsCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logic = undefined;
      this._matchType = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logic = value.logic;
      this._matchType = value.matchType;
      this._criteria.internalValue = value.criteria;
    }
  }

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // criteria - computed: false, optional: true, required: false
  private _criteria = new EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: EsaWafRuleConfigRateLimitCharacteristicsCriteriaCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class EsaWafRuleConfigRateLimitCharacteristicsCriteriaList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleConfigRateLimitCharacteristicsCriteria[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleConfigRateLimitCharacteristicsCriteriaOutputReference {
    return new EsaWafRuleConfigRateLimitCharacteristicsCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleConfigRateLimitCharacteristics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#logic EsaWafRule#logic}
  */
  readonly logic?: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#criteria EsaWafRule#criteria}
  */
  readonly criteria?: EsaWafRuleConfigRateLimitCharacteristicsCriteria[] | cdktf.IResolvable;
}

export function esaWafRuleConfigRateLimitCharacteristicsToTerraform(struct?: EsaWafRuleConfigRateLimitCharacteristicsOutputReference | EsaWafRuleConfigRateLimitCharacteristics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logic: cdktf.stringToTerraform(struct!.logic),
    criteria: cdktf.listMapper(esaWafRuleConfigRateLimitCharacteristicsCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function esaWafRuleConfigRateLimitCharacteristicsToHclTerraform(struct?: EsaWafRuleConfigRateLimitCharacteristicsOutputReference | EsaWafRuleConfigRateLimitCharacteristics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria: {
      value: cdktf.listMapperHcl(esaWafRuleConfigRateLimitCharacteristicsCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "set",
      storageClassType: "EsaWafRuleConfigRateLimitCharacteristicsCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigRateLimitCharacteristicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigRateLimitCharacteristics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigRateLimitCharacteristics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logic = undefined;
      this._criteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logic = value.logic;
      this._criteria.internalValue = value.criteria;
    }
  }

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new EsaWafRuleConfigRateLimitCharacteristicsCriteriaList(this, "criteria", true);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: EsaWafRuleConfigRateLimitCharacteristicsCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}
export interface EsaWafRuleConfigRateLimitThresholdResponseStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#code EsaWafRule#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#count EsaWafRule#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#ratio EsaWafRule#ratio}
  */
  readonly ratio?: number;
}

export function esaWafRuleConfigRateLimitThresholdResponseStatusToTerraform(struct?: EsaWafRuleConfigRateLimitThresholdResponseStatusOutputReference | EsaWafRuleConfigRateLimitThresholdResponseStatus): any {
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


export function esaWafRuleConfigRateLimitThresholdResponseStatusToHclTerraform(struct?: EsaWafRuleConfigRateLimitThresholdResponseStatusOutputReference | EsaWafRuleConfigRateLimitThresholdResponseStatus): any {
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

export class EsaWafRuleConfigRateLimitThresholdResponseStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigRateLimitThresholdResponseStatus | undefined {
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

  public set internalValue(value: EsaWafRuleConfigRateLimitThresholdResponseStatus | undefined) {
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
export interface EsaWafRuleConfigRateLimitThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#distinct_managed_rules EsaWafRule#distinct_managed_rules}
  */
  readonly distinctManagedRules?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#managed_rules_blocked EsaWafRule#managed_rules_blocked}
  */
  readonly managedRulesBlocked?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#request EsaWafRule#request}
  */
  readonly request?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#traffic EsaWafRule#traffic}
  */
  readonly traffic?: string;
  /**
  * response_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#response_status EsaWafRule#response_status}
  */
  readonly responseStatus?: EsaWafRuleConfigRateLimitThresholdResponseStatus;
}

export function esaWafRuleConfigRateLimitThresholdToTerraform(struct?: EsaWafRuleConfigRateLimitThresholdOutputReference | EsaWafRuleConfigRateLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distinct_managed_rules: cdktf.numberToTerraform(struct!.distinctManagedRules),
    managed_rules_blocked: cdktf.numberToTerraform(struct!.managedRulesBlocked),
    request: cdktf.numberToTerraform(struct!.request),
    traffic: cdktf.stringToTerraform(struct!.traffic),
    response_status: esaWafRuleConfigRateLimitThresholdResponseStatusToTerraform(struct!.responseStatus),
  }
}


export function esaWafRuleConfigRateLimitThresholdToHclTerraform(struct?: EsaWafRuleConfigRateLimitThresholdOutputReference | EsaWafRuleConfigRateLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distinct_managed_rules: {
      value: cdktf.numberToHclTerraform(struct!.distinctManagedRules),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    managed_rules_blocked: {
      value: cdktf.numberToHclTerraform(struct!.managedRulesBlocked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request: {
      value: cdktf.numberToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic: {
      value: cdktf.stringToHclTerraform(struct!.traffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_status: {
      value: esaWafRuleConfigRateLimitThresholdResponseStatusToHclTerraform(struct!.responseStatus),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigRateLimitThresholdResponseStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigRateLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigRateLimitThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distinctManagedRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinctManagedRules = this._distinctManagedRules;
    }
    if (this._managedRulesBlocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRulesBlocked = this._managedRulesBlocked;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic;
    }
    if (this._responseStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseStatus = this._responseStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigRateLimitThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distinctManagedRules = undefined;
      this._managedRulesBlocked = undefined;
      this._request = undefined;
      this._traffic = undefined;
      this._responseStatus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distinctManagedRules = value.distinctManagedRules;
      this._managedRulesBlocked = value.managedRulesBlocked;
      this._request = value.request;
      this._traffic = value.traffic;
      this._responseStatus.internalValue = value.responseStatus;
    }
  }

  // distinct_managed_rules - computed: false, optional: true, required: false
  private _distinctManagedRules?: number; 
  public get distinctManagedRules() {
    return this.getNumberAttribute('distinct_managed_rules');
  }
  public set distinctManagedRules(value: number) {
    this._distinctManagedRules = value;
  }
  public resetDistinctManagedRules() {
    this._distinctManagedRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinctManagedRulesInput() {
    return this._distinctManagedRules;
  }

  // managed_rules_blocked - computed: false, optional: true, required: false
  private _managedRulesBlocked?: number; 
  public get managedRulesBlocked() {
    return this.getNumberAttribute('managed_rules_blocked');
  }
  public set managedRulesBlocked(value: number) {
    this._managedRulesBlocked = value;
  }
  public resetManagedRulesBlocked() {
    this._managedRulesBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRulesBlockedInput() {
    return this._managedRulesBlocked;
  }

  // request - computed: false, optional: true, required: false
  private _request?: number; 
  public get request() {
    return this.getNumberAttribute('request');
  }
  public set request(value: number) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
  }

  // response_status - computed: false, optional: true, required: false
  private _responseStatus = new EsaWafRuleConfigRateLimitThresholdResponseStatusOutputReference(this, "response_status");
  public get responseStatus() {
    return this._responseStatus;
  }
  public putResponseStatus(value: EsaWafRuleConfigRateLimitThresholdResponseStatus) {
    this._responseStatus.internalValue = value;
  }
  public resetResponseStatus() {
    this._responseStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStatusInput() {
    return this._responseStatus.internalValue;
  }
}
export interface EsaWafRuleConfigRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#interval EsaWafRule#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#on_hit EsaWafRule#on_hit}
  */
  readonly onHit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#ttl EsaWafRule#ttl}
  */
  readonly ttl?: number;
  /**
  * characteristics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#characteristics EsaWafRule#characteristics}
  */
  readonly characteristics?: EsaWafRuleConfigRateLimitCharacteristics;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#threshold EsaWafRule#threshold}
  */
  readonly threshold?: EsaWafRuleConfigRateLimitThreshold;
}

export function esaWafRuleConfigRateLimitToTerraform(struct?: EsaWafRuleConfigRateLimitOutputReference | EsaWafRuleConfigRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    on_hit: cdktf.booleanToTerraform(struct!.onHit),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    characteristics: esaWafRuleConfigRateLimitCharacteristicsToTerraform(struct!.characteristics),
    threshold: esaWafRuleConfigRateLimitThresholdToTerraform(struct!.threshold),
  }
}


export function esaWafRuleConfigRateLimitToHclTerraform(struct?: EsaWafRuleConfigRateLimitOutputReference | EsaWafRuleConfigRateLimit): any {
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
    on_hit: {
      value: cdktf.booleanToHclTerraform(struct!.onHit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    characteristics: {
      value: esaWafRuleConfigRateLimitCharacteristicsToHclTerraform(struct!.characteristics),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigRateLimitCharacteristicsList",
    },
    threshold: {
      value: esaWafRuleConfigRateLimitThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigRateLimitThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._onHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.onHit = this._onHit;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._characteristics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.characteristics = this._characteristics?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._onHit = undefined;
      this._ttl = undefined;
      this._characteristics.internalValue = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._onHit = value.onHit;
      this._ttl = value.ttl;
      this._characteristics.internalValue = value.characteristics;
      this._threshold.internalValue = value.threshold;
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

  // on_hit - computed: false, optional: true, required: false
  private _onHit?: boolean | cdktf.IResolvable; 
  public get onHit() {
    return this.getBooleanAttribute('on_hit');
  }
  public set onHit(value: boolean | cdktf.IResolvable) {
    this._onHit = value;
  }
  public resetOnHit() {
    this._onHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHitInput() {
    return this._onHit;
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

  // characteristics - computed: false, optional: true, required: false
  private _characteristics = new EsaWafRuleConfigRateLimitCharacteristicsOutputReference(this, "characteristics");
  public get characteristics() {
    return this._characteristics;
  }
  public putCharacteristics(value: EsaWafRuleConfigRateLimitCharacteristics) {
    this._characteristics.internalValue = value;
  }
  public resetCharacteristics() {
    this._characteristics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characteristicsInput() {
    return this._characteristics.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new EsaWafRuleConfigRateLimitThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: EsaWafRuleConfigRateLimitThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface EsaWafRuleConfigSecurityLevel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#value EsaWafRule#value}
  */
  readonly value?: string;
}

export function esaWafRuleConfigSecurityLevelToTerraform(struct?: EsaWafRuleConfigSecurityLevelOutputReference | EsaWafRuleConfigSecurityLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function esaWafRuleConfigSecurityLevelToHclTerraform(struct?: EsaWafRuleConfigSecurityLevelOutputReference | EsaWafRuleConfigSecurityLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class EsaWafRuleConfigSecurityLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigSecurityLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigSecurityLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
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
export interface EsaWafRuleConfigTimerPeriods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#end EsaWafRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#start EsaWafRule#start}
  */
  readonly start?: string;
}

export function esaWafRuleConfigTimerPeriodsToTerraform(struct?: EsaWafRuleConfigTimerPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function esaWafRuleConfigTimerPeriodsToHclTerraform(struct?: EsaWafRuleConfigTimerPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigTimerPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleConfigTimerPeriods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaWafRuleConfigTimerPeriods | cdktf.IResolvable | undefined) {
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
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
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
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
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

export class EsaWafRuleConfigTimerPeriodsList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleConfigTimerPeriods[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleConfigTimerPeriodsOutputReference {
    return new EsaWafRuleConfigTimerPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#end EsaWafRule#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#start EsaWafRule#start}
  */
  readonly start?: string;
}

export function esaWafRuleConfigTimerWeeklyPeriodsDailyPeriodsToTerraform(struct?: EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function esaWafRuleConfigTimerWeeklyPeriodsDailyPeriodsToHclTerraform(struct?: EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriods | cdktf.IResolvable | undefined) {
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
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
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
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
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

export class EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriodsList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriods[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriodsOutputReference {
    return new EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleConfigTimerWeeklyPeriods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#days EsaWafRule#days}
  */
  readonly days?: string;
  /**
  * daily_periods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#daily_periods EsaWafRule#daily_periods}
  */
  readonly dailyPeriods?: EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriods[] | cdktf.IResolvable;
}

export function esaWafRuleConfigTimerWeeklyPeriodsToTerraform(struct?: EsaWafRuleConfigTimerWeeklyPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.stringToTerraform(struct!.days),
    daily_periods: cdktf.listMapper(esaWafRuleConfigTimerWeeklyPeriodsDailyPeriodsToTerraform, true)(struct!.dailyPeriods),
  }
}


export function esaWafRuleConfigTimerWeeklyPeriodsToHclTerraform(struct?: EsaWafRuleConfigTimerWeeklyPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.stringToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daily_periods: {
      value: cdktf.listMapperHcl(esaWafRuleConfigTimerWeeklyPeriodsDailyPeriodsToHclTerraform, true)(struct!.dailyPeriods),
      isBlock: true,
      type: "set",
      storageClassType: "EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigTimerWeeklyPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleConfigTimerWeeklyPeriods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._dailyPeriods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyPeriods = this._dailyPeriods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigTimerWeeklyPeriods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._dailyPeriods.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._dailyPeriods.internalValue = value.dailyPeriods;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: string; 
  public get days() {
    return this.getStringAttribute('days');
  }
  public set days(value: string) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // daily_periods - computed: false, optional: true, required: false
  private _dailyPeriods = new EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriodsList(this, "daily_periods", true);
  public get dailyPeriods() {
    return this._dailyPeriods;
  }
  public putDailyPeriods(value: EsaWafRuleConfigTimerWeeklyPeriodsDailyPeriods[] | cdktf.IResolvable) {
    this._dailyPeriods.internalValue = value;
  }
  public resetDailyPeriods() {
    this._dailyPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyPeriodsInput() {
    return this._dailyPeriods.internalValue;
  }
}

export class EsaWafRuleConfigTimerWeeklyPeriodsList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleConfigTimerWeeklyPeriods[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleConfigTimerWeeklyPeriodsOutputReference {
    return new EsaWafRuleConfigTimerWeeklyPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleConfigTimer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#scopes EsaWafRule#scopes}
  */
  readonly scopes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#zone EsaWafRule#zone}
  */
  readonly zone?: number;
  /**
  * periods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#periods EsaWafRule#periods}
  */
  readonly periods?: EsaWafRuleConfigTimerPeriods[] | cdktf.IResolvable;
  /**
  * weekly_periods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#weekly_periods EsaWafRule#weekly_periods}
  */
  readonly weeklyPeriods?: EsaWafRuleConfigTimerWeeklyPeriods[] | cdktf.IResolvable;
}

export function esaWafRuleConfigTimerToTerraform(struct?: EsaWafRuleConfigTimerOutputReference | EsaWafRuleConfigTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktf.stringToTerraform(struct!.scopes),
    zone: cdktf.numberToTerraform(struct!.zone),
    periods: cdktf.listMapper(esaWafRuleConfigTimerPeriodsToTerraform, true)(struct!.periods),
    weekly_periods: cdktf.listMapper(esaWafRuleConfigTimerWeeklyPeriodsToTerraform, true)(struct!.weeklyPeriods),
  }
}


export function esaWafRuleConfigTimerToHclTerraform(struct?: EsaWafRuleConfigTimerOutputReference | EsaWafRuleConfigTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scopes: {
      value: cdktf.stringToHclTerraform(struct!.scopes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.numberToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    periods: {
      value: cdktf.listMapperHcl(esaWafRuleConfigTimerPeriodsToHclTerraform, true)(struct!.periods),
      isBlock: true,
      type: "set",
      storageClassType: "EsaWafRuleConfigTimerPeriodsList",
    },
    weekly_periods: {
      value: cdktf.listMapperHcl(esaWafRuleConfigTimerWeeklyPeriodsToHclTerraform, true)(struct!.weeklyPeriods),
      isBlock: true,
      type: "set",
      storageClassType: "EsaWafRuleConfigTimerWeeklyPeriodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigTimerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigTimer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._periods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.periods = this._periods?.internalValue;
    }
    if (this._weeklyPeriods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyPeriods = this._weeklyPeriods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigTimer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scopes = undefined;
      this._zone = undefined;
      this._periods.internalValue = undefined;
      this._weeklyPeriods.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scopes = value.scopes;
      this._zone = value.zone;
      this._periods.internalValue = value.periods;
      this._weeklyPeriods.internalValue = value.weeklyPeriods;
    }
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string; 
  public get scopes() {
    return this.getStringAttribute('scopes');
  }
  public set scopes(value: string) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: number; 
  public get zone() {
    return this.getNumberAttribute('zone');
  }
  public set zone(value: number) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // periods - computed: false, optional: true, required: false
  private _periods = new EsaWafRuleConfigTimerPeriodsList(this, "periods", true);
  public get periods() {
    return this._periods;
  }
  public putPeriods(value: EsaWafRuleConfigTimerPeriods[] | cdktf.IResolvable) {
    this._periods.internalValue = value;
  }
  public resetPeriods() {
    this._periods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodsInput() {
    return this._periods.internalValue;
  }

  // weekly_periods - computed: false, optional: true, required: false
  private _weeklyPeriods = new EsaWafRuleConfigTimerWeeklyPeriodsList(this, "weekly_periods", true);
  public get weeklyPeriods() {
    return this._weeklyPeriods;
  }
  public putWeeklyPeriods(value: EsaWafRuleConfigTimerWeeklyPeriods[] | cdktf.IResolvable) {
    this._weeklyPeriods.internalValue = value;
  }
  public resetWeeklyPeriods() {
    this._weeklyPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyPeriodsInput() {
    return this._weeklyPeriods.internalValue;
  }
}
export interface EsaWafRuleConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#action EsaWafRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#expression EsaWafRule#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#managed_list EsaWafRule#managed_list}
  */
  readonly managedList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#name EsaWafRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#notes EsaWafRule#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#sigchl EsaWafRule#sigchl}
  */
  readonly sigchl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#status EsaWafRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#type EsaWafRule#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#value EsaWafRule#value}
  */
  readonly value?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#actions EsaWafRule#actions}
  */
  readonly actions?: EsaWafRuleConfigActions;
  /**
  * app_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#app_package EsaWafRule#app_package}
  */
  readonly appPackage?: EsaWafRuleConfigAppPackage;
  /**
  * app_sdk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#app_sdk EsaWafRule#app_sdk}
  */
  readonly appSdk?: EsaWafRuleConfigAppSdk;
  /**
  * managed_rulesets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#managed_rulesets EsaWafRule#managed_rulesets}
  */
  readonly managedRulesets?: EsaWafRuleConfigManagedRulesets[] | cdktf.IResolvable;
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#rate_limit EsaWafRule#rate_limit}
  */
  readonly rateLimit?: EsaWafRuleConfigRateLimit;
  /**
  * security_level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#security_level EsaWafRule#security_level}
  */
  readonly securityLevel?: EsaWafRuleConfigSecurityLevel;
  /**
  * timer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#timer EsaWafRule#timer}
  */
  readonly timer?: EsaWafRuleConfigTimer;
}

export function esaWafRuleConfigAToTerraform(struct?: EsaWafRuleConfigAOutputReference | EsaWafRuleConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    expression: cdktf.stringToTerraform(struct!.expression),
    managed_list: cdktf.stringToTerraform(struct!.managedList),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    sigchl: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sigchl),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    actions: esaWafRuleConfigActionsToTerraform(struct!.actions),
    app_package: esaWafRuleConfigAppPackageToTerraform(struct!.appPackage),
    app_sdk: esaWafRuleConfigAppSdkToTerraform(struct!.appSdk),
    managed_rulesets: cdktf.listMapper(esaWafRuleConfigManagedRulesetsToTerraform, true)(struct!.managedRulesets),
    rate_limit: esaWafRuleConfigRateLimitToTerraform(struct!.rateLimit),
    security_level: esaWafRuleConfigSecurityLevelToTerraform(struct!.securityLevel),
    timer: esaWafRuleConfigTimerToTerraform(struct!.timer),
  }
}


export function esaWafRuleConfigAToHclTerraform(struct?: EsaWafRuleConfigAOutputReference | EsaWafRuleConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_list: {
      value: cdktf.stringToHclTerraform(struct!.managedList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sigchl: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sigchl),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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
    actions: {
      value: esaWafRuleConfigActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigActionsList",
    },
    app_package: {
      value: esaWafRuleConfigAppPackageToHclTerraform(struct!.appPackage),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigAppPackageList",
    },
    app_sdk: {
      value: esaWafRuleConfigAppSdkToHclTerraform(struct!.appSdk),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigAppSdkList",
    },
    managed_rulesets: {
      value: cdktf.listMapperHcl(esaWafRuleConfigManagedRulesetsToHclTerraform, true)(struct!.managedRulesets),
      isBlock: true,
      type: "set",
      storageClassType: "EsaWafRuleConfigManagedRulesetsList",
    },
    rate_limit: {
      value: esaWafRuleConfigRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigRateLimitList",
    },
    security_level: {
      value: esaWafRuleConfigSecurityLevelToHclTerraform(struct!.securityLevel),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigSecurityLevelList",
    },
    timer: {
      value: esaWafRuleConfigTimerToHclTerraform(struct!.timer),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleConfigTimerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._managedList !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedList = this._managedList;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._sigchl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigchl = this._sigchl;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._appPackage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPackage = this._appPackage?.internalValue;
    }
    if (this._appSdk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSdk = this._appSdk?.internalValue;
    }
    if (this._managedRulesets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRulesets = this._managedRulesets?.internalValue;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    if (this._securityLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel?.internalValue;
    }
    if (this._timer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timer = this._timer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._expression = undefined;
      this._managedList = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._sigchl = undefined;
      this._status = undefined;
      this._type = undefined;
      this._value = undefined;
      this._actions.internalValue = undefined;
      this._appPackage.internalValue = undefined;
      this._appSdk.internalValue = undefined;
      this._managedRulesets.internalValue = undefined;
      this._rateLimit.internalValue = undefined;
      this._securityLevel.internalValue = undefined;
      this._timer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._expression = value.expression;
      this._managedList = value.managedList;
      this._name = value.name;
      this._notes = value.notes;
      this._sigchl = value.sigchl;
      this._status = value.status;
      this._type = value.type;
      this._value = value.value;
      this._actions.internalValue = value.actions;
      this._appPackage.internalValue = value.appPackage;
      this._appSdk.internalValue = value.appSdk;
      this._managedRulesets.internalValue = value.managedRulesets;
      this._rateLimit.internalValue = value.rateLimit;
      this._securityLevel.internalValue = value.securityLevel;
      this._timer.internalValue = value.timer;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // managed_group_id - computed: true, optional: false, required: false
  public get managedGroupId() {
    return this.getNumberAttribute('managed_group_id');
  }

  // managed_list - computed: false, optional: true, required: false
  private _managedList?: string; 
  public get managedList() {
    return this.getStringAttribute('managed_list');
  }
  public set managedList(value: string) {
    this._managedList = value;
  }
  public resetManagedList() {
    this._managedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedListInput() {
    return this._managedList;
  }

  // name - computed: true, optional: true, required: false
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // sigchl - computed: false, optional: true, required: false
  private _sigchl?: string[]; 
  public get sigchl() {
    return cdktf.Fn.tolist(this.getListAttribute('sigchl'));
  }
  public set sigchl(value: string[]) {
    this._sigchl = value;
  }
  public resetSigchl() {
    this._sigchl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigchlInput() {
    return this._sigchl;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new EsaWafRuleConfigActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: EsaWafRuleConfigActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // app_package - computed: false, optional: true, required: false
  private _appPackage = new EsaWafRuleConfigAppPackageOutputReference(this, "app_package");
  public get appPackage() {
    return this._appPackage;
  }
  public putAppPackage(value: EsaWafRuleConfigAppPackage) {
    this._appPackage.internalValue = value;
  }
  public resetAppPackage() {
    this._appPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPackageInput() {
    return this._appPackage.internalValue;
  }

  // app_sdk - computed: false, optional: true, required: false
  private _appSdk = new EsaWafRuleConfigAppSdkOutputReference(this, "app_sdk");
  public get appSdk() {
    return this._appSdk;
  }
  public putAppSdk(value: EsaWafRuleConfigAppSdk) {
    this._appSdk.internalValue = value;
  }
  public resetAppSdk() {
    this._appSdk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSdkInput() {
    return this._appSdk.internalValue;
  }

  // managed_rulesets - computed: false, optional: true, required: false
  private _managedRulesets = new EsaWafRuleConfigManagedRulesetsList(this, "managed_rulesets", true);
  public get managedRulesets() {
    return this._managedRulesets;
  }
  public putManagedRulesets(value: EsaWafRuleConfigManagedRulesets[] | cdktf.IResolvable) {
    this._managedRulesets.internalValue = value;
  }
  public resetManagedRulesets() {
    this._managedRulesets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRulesetsInput() {
    return this._managedRulesets.internalValue;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new EsaWafRuleConfigRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: EsaWafRuleConfigRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // security_level - computed: false, optional: true, required: false
  private _securityLevel = new EsaWafRuleConfigSecurityLevelOutputReference(this, "security_level");
  public get securityLevel() {
    return this._securityLevel;
  }
  public putSecurityLevel(value: EsaWafRuleConfigSecurityLevel) {
    this._securityLevel.internalValue = value;
  }
  public resetSecurityLevel() {
    this._securityLevel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel.internalValue;
  }

  // timer - computed: false, optional: true, required: false
  private _timer = new EsaWafRuleConfigTimerOutputReference(this, "timer");
  public get timer() {
    return this._timer;
  }
  public putTimer(value: EsaWafRuleConfigTimer) {
    this._timer.internalValue = value;
  }
  public resetTimer() {
    this._timer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer.internalValue;
  }
}
export interface EsaWafRuleSharedActionsResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#code EsaWafRule#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#id EsaWafRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function esaWafRuleSharedActionsResponseToTerraform(struct?: EsaWafRuleSharedActionsResponseOutputReference | EsaWafRuleSharedActionsResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function esaWafRuleSharedActionsResponseToHclTerraform(struct?: EsaWafRuleSharedActionsResponseOutputReference | EsaWafRuleSharedActionsResponse): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleSharedActionsResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleSharedActionsResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleSharedActionsResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._id = value.id;
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

  // id - computed: false, optional: true, required: false
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
}
export interface EsaWafRuleSharedActions {
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#response EsaWafRule#response}
  */
  readonly response?: EsaWafRuleSharedActionsResponse;
}

export function esaWafRuleSharedActionsToTerraform(struct?: EsaWafRuleSharedActionsOutputReference | EsaWafRuleSharedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response: esaWafRuleSharedActionsResponseToTerraform(struct!.response),
  }
}


export function esaWafRuleSharedActionsToHclTerraform(struct?: EsaWafRuleSharedActionsOutputReference | EsaWafRuleSharedActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response: {
      value: esaWafRuleSharedActionsResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleSharedActionsResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleSharedActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleSharedActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleSharedActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._response.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._response.internalValue = value.response;
    }
  }

  // response - computed: false, optional: true, required: false
  private _response = new EsaWafRuleSharedActionsResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: EsaWafRuleSharedActionsResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}
export interface EsaWafRuleSharedMatchCriteriaCriteriaCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#match_type EsaWafRule#match_type}
  */
  readonly matchType?: string;
}

export function esaWafRuleSharedMatchCriteriaCriteriaCriteriaToTerraform(struct?: EsaWafRuleSharedMatchCriteriaCriteriaCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function esaWafRuleSharedMatchCriteriaCriteriaCriteriaToHclTerraform(struct?: EsaWafRuleSharedMatchCriteriaCriteriaCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleSharedMatchCriteriaCriteriaCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleSharedMatchCriteriaCriteriaCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleSharedMatchCriteriaCriteriaCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
    }
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
}

export class EsaWafRuleSharedMatchCriteriaCriteriaCriteriaList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleSharedMatchCriteriaCriteriaCriteria[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleSharedMatchCriteriaCriteriaCriteriaOutputReference {
    return new EsaWafRuleSharedMatchCriteriaCriteriaCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleSharedMatchCriteriaCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#logic EsaWafRule#logic}
  */
  readonly logic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#match_type EsaWafRule#match_type}
  */
  readonly matchType?: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#criteria EsaWafRule#criteria}
  */
  readonly criteria?: EsaWafRuleSharedMatchCriteriaCriteriaCriteria[] | cdktf.IResolvable;
}

export function esaWafRuleSharedMatchCriteriaCriteriaToTerraform(struct?: EsaWafRuleSharedMatchCriteriaCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logic: cdktf.stringToTerraform(struct!.logic),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    criteria: cdktf.listMapper(esaWafRuleSharedMatchCriteriaCriteriaCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function esaWafRuleSharedMatchCriteriaCriteriaToHclTerraform(struct?: EsaWafRuleSharedMatchCriteriaCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
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
    criteria: {
      value: cdktf.listMapperHcl(esaWafRuleSharedMatchCriteriaCriteriaCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleSharedMatchCriteriaCriteriaCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleSharedMatchCriteriaCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleSharedMatchCriteriaCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleSharedMatchCriteriaCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logic = undefined;
      this._matchType = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logic = value.logic;
      this._matchType = value.matchType;
      this._criteria.internalValue = value.criteria;
    }
  }

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // criteria - computed: false, optional: true, required: false
  private _criteria = new EsaWafRuleSharedMatchCriteriaCriteriaCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: EsaWafRuleSharedMatchCriteriaCriteriaCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class EsaWafRuleSharedMatchCriteriaCriteriaList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleSharedMatchCriteriaCriteria[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleSharedMatchCriteriaCriteriaOutputReference {
    return new EsaWafRuleSharedMatchCriteriaCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleSharedMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#logic EsaWafRule#logic}
  */
  readonly logic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#match_type EsaWafRule#match_type}
  */
  readonly matchType?: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#criteria EsaWafRule#criteria}
  */
  readonly criteria?: EsaWafRuleSharedMatchCriteriaCriteria[] | cdktf.IResolvable;
}

export function esaWafRuleSharedMatchCriteriaToTerraform(struct?: EsaWafRuleSharedMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logic: cdktf.stringToTerraform(struct!.logic),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    criteria: cdktf.listMapper(esaWafRuleSharedMatchCriteriaCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function esaWafRuleSharedMatchCriteriaToHclTerraform(struct?: EsaWafRuleSharedMatchCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
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
    criteria: {
      value: cdktf.listMapperHcl(esaWafRuleSharedMatchCriteriaCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleSharedMatchCriteriaCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleSharedMatchCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EsaWafRuleSharedMatchCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleSharedMatchCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logic = undefined;
      this._matchType = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logic = value.logic;
      this._matchType = value.matchType;
      this._criteria.internalValue = value.criteria;
    }
  }

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // criteria - computed: false, optional: true, required: false
  private _criteria = new EsaWafRuleSharedMatchCriteriaCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: EsaWafRuleSharedMatchCriteriaCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class EsaWafRuleSharedMatchCriteriaList extends cdktf.ComplexList {
  public internalValue? : EsaWafRuleSharedMatchCriteria[] | cdktf.IResolvable

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
  public get(index: number): EsaWafRuleSharedMatchCriteriaOutputReference {
    return new EsaWafRuleSharedMatchCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EsaWafRuleSharedMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#logic EsaWafRule#logic}
  */
  readonly logic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#match_type EsaWafRule#match_type}
  */
  readonly matchType?: string;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#criteria EsaWafRule#criteria}
  */
  readonly criteria?: EsaWafRuleSharedMatchCriteria[] | cdktf.IResolvable;
}

export function esaWafRuleSharedMatchToTerraform(struct?: EsaWafRuleSharedMatchOutputReference | EsaWafRuleSharedMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logic: cdktf.stringToTerraform(struct!.logic),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    criteria: cdktf.listMapper(esaWafRuleSharedMatchCriteriaToTerraform, true)(struct!.criteria),
  }
}


export function esaWafRuleSharedMatchToHclTerraform(struct?: EsaWafRuleSharedMatchOutputReference | EsaWafRuleSharedMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
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
    criteria: {
      value: cdktf.listMapperHcl(esaWafRuleSharedMatchCriteriaToHclTerraform, true)(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleSharedMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleSharedMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleSharedMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleSharedMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logic = undefined;
      this._matchType = undefined;
      this._criteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logic = value.logic;
      this._matchType = value.matchType;
      this._criteria.internalValue = value.criteria;
    }
  }

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // criteria - computed: false, optional: true, required: false
  private _criteria = new EsaWafRuleSharedMatchCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: EsaWafRuleSharedMatchCriteria[] | cdktf.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}
export interface EsaWafRuleShared {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#action EsaWafRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#cross_site_id EsaWafRule#cross_site_id}
  */
  readonly crossSiteId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#expression EsaWafRule#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#mode EsaWafRule#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#name EsaWafRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#target EsaWafRule#target}
  */
  readonly target?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#actions EsaWafRule#actions}
  */
  readonly actions?: EsaWafRuleSharedActions;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#match EsaWafRule#match}
  */
  readonly match?: EsaWafRuleSharedMatch;
}

export function esaWafRuleSharedToTerraform(struct?: EsaWafRuleSharedOutputReference | EsaWafRuleShared): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cross_site_id: cdktf.numberToTerraform(struct!.crossSiteId),
    expression: cdktf.stringToTerraform(struct!.expression),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.stringToTerraform(struct!.target),
    actions: esaWafRuleSharedActionsToTerraform(struct!.actions),
    match: esaWafRuleSharedMatchToTerraform(struct!.match),
  }
}


export function esaWafRuleSharedToHclTerraform(struct?: EsaWafRuleSharedOutputReference | EsaWafRuleShared): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_site_id: {
      value: cdktf.numberToHclTerraform(struct!.crossSiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    actions: {
      value: esaWafRuleSharedActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleSharedActionsList",
    },
    match: {
      value: esaWafRuleSharedMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "EsaWafRuleSharedMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaWafRuleSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaWafRuleShared | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._crossSiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossSiteId = this._crossSiteId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaWafRuleShared | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._crossSiteId = undefined;
      this._expression = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._target = undefined;
      this._actions.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._crossSiteId = value.crossSiteId;
      this._expression = value.expression;
      this._mode = value.mode;
      this._name = value.name;
      this._target = value.target;
      this._actions.internalValue = value.actions;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cross_site_id - computed: false, optional: true, required: false
  private _crossSiteId?: number; 
  public get crossSiteId() {
    return this.getNumberAttribute('cross_site_id');
  }
  public set crossSiteId(value: number) {
    this._crossSiteId = value;
  }
  public resetCrossSiteId() {
    this._crossSiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSiteIdInput() {
    return this._crossSiteId;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new EsaWafRuleSharedActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: EsaWafRuleSharedActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new EsaWafRuleSharedMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: EsaWafRuleSharedMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface EsaWafRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#create EsaWafRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#delete EsaWafRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#update EsaWafRule#update}
  */
  readonly update?: string;
}

export function esaWafRuleTimeoutsToTerraform(struct?: EsaWafRuleTimeouts | cdktf.IResolvable): any {
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


export function esaWafRuleTimeoutsToHclTerraform(struct?: EsaWafRuleTimeouts | cdktf.IResolvable): any {
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

export class EsaWafRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaWafRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaWafRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule alicloud_esa_waf_rule}
*/
export class EsaWafRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_waf_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaWafRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaWafRule to import
  * @param importFromId The id of the existing EsaWafRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaWafRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_waf_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/esa_waf_rule alicloud_esa_waf_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaWafRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EsaWafRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_waf_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._phase = config.phase;
    this._rulesetId = config.rulesetId;
    this._siteId = config.siteId;
    this._siteVersion = config.siteVersion;
    this._config.internalValue = config.config;
    this._shared.internalValue = config.shared;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // phase - computed: false, optional: false, required: true
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // ruleset_id - computed: false, optional: true, required: false
  private _rulesetId?: number; 
  public get rulesetId() {
    return this.getNumberAttribute('ruleset_id');
  }
  public set rulesetId(value: number) {
    this._rulesetId = value;
  }
  public resetRulesetId() {
    this._rulesetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetIdInput() {
    return this._rulesetId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_version - computed: false, optional: true, required: false
  private _siteVersion?: number; 
  public get siteVersion() {
    return this.getNumberAttribute('site_version');
  }
  public set siteVersion(value: number) {
    this._siteVersion = value;
  }
  public resetSiteVersion() {
    this._siteVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteVersionInput() {
    return this._siteVersion;
  }

  // waf_rule_id - computed: true, optional: false, required: false
  public get wafRuleId() {
    return this.getNumberAttribute('waf_rule_id');
  }

  // config - computed: false, optional: true, required: false
  private _config = new EsaWafRuleConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: EsaWafRuleConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new EsaWafRuleSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: EsaWafRuleShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaWafRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaWafRuleTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      phase: cdktf.stringToTerraform(this._phase),
      ruleset_id: cdktf.numberToTerraform(this._rulesetId),
      site_id: cdktf.numberToTerraform(this._siteId),
      site_version: cdktf.numberToTerraform(this._siteVersion),
      config: esaWafRuleConfigAToTerraform(this._config.internalValue),
      shared: esaWafRuleSharedToTerraform(this._shared.internalValue),
      timeouts: esaWafRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
      phase: {
        value: cdktf.stringToHclTerraform(this._phase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ruleset_id: {
        value: cdktf.numberToHclTerraform(this._rulesetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_version: {
        value: cdktf.numberToHclTerraform(this._siteVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config: {
        value: esaWafRuleConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaWafRuleConfigAList",
      },
      shared: {
        value: esaWafRuleSharedToHclTerraform(this._shared.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaWafRuleSharedList",
      },
      timeouts: {
        value: esaWafRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaWafRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
