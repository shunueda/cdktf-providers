// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerRuntimePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not to disable automatic behavioral learning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#learning_disabled ContainerRuntimePolicy#learning_disabled}
  */
  readonly learningDisabled?: boolean | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#rule ContainerRuntimePolicy#rule}
  */
  readonly rule?: ContainerRuntimePolicyRule[] | cdktf.IResolvable;
}
export interface ContainerRuntimePolicyRuleCustomRule {
  /**
  * The action to perform if the custom rule applies. Can be set to 'audit' or 'incident'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#action ContainerRuntimePolicy#action}
  */
  readonly action?: string;
  /**
  * The effect to be used. Can be set to 'block', 'prevent', 'alert', or 'allow'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#effect ContainerRuntimePolicy#effect}
  */
  readonly effect?: string;
  /**
  * Custom rule number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#id ContainerRuntimePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function containerRuntimePolicyRuleCustomRuleToTerraform(struct?: ContainerRuntimePolicyRuleCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    effect: cdktf.stringToTerraform(struct!.effect),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function containerRuntimePolicyRuleCustomRuleToHclTerraform(struct?: ContainerRuntimePolicyRuleCustomRule | cdktf.IResolvable): any {
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
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleCustomRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRuleCustomRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRuleCustomRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._effect = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._effect = value.effect;
      this._id = value.id;
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

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

export class ContainerRuntimePolicyRuleCustomRuleList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRuleCustomRule[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleCustomRuleOutputReference {
    return new ContainerRuntimePolicyRuleCustomRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyRuleDnsDomainListStruct {
  /**
  * Allowed domains. Wildcard prefixes are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#allowed ContainerRuntimePolicy#allowed}
  */
  readonly allowed?: string[];
  /**
  * Denied domains. Wildcard prefixes are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#denied ContainerRuntimePolicy#denied}
  */
  readonly denied?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#effect ContainerRuntimePolicy#effect}
  */
  readonly effect?: string;
}

export function containerRuntimePolicyRuleDnsDomainListStructToTerraform(struct?: ContainerRuntimePolicyRuleDnsDomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowed),
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    effect: cdktf.stringToTerraform(struct!.effect),
  }
}


export function containerRuntimePolicyRuleDnsDomainListStructToHclTerraform(struct?: ContainerRuntimePolicyRuleDnsDomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleDnsDomainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRuleDnsDomainListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed;
    }
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRuleDnsDomainListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowed = undefined;
      this._denied = undefined;
      this._effect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowed = value.allowed;
      this._denied = value.denied;
      this._effect = value.effect;
    }
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed?: string[]; 
  public get allowed() {
    return this.getListAttribute('allowed');
  }
  public set allowed(value: string[]) {
    this._allowed = value;
  }
  public resetAllowed() {
    this._allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed;
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }
}

export class ContainerRuntimePolicyRuleDnsDomainListStructList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRuleDnsDomainListStruct[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleDnsDomainListStructOutputReference {
    return new ContainerRuntimePolicyRuleDnsDomainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyRuleDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#default_effect ContainerRuntimePolicy#default_effect}
  */
  readonly defaultEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#disabled ContainerRuntimePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#domain_list ContainerRuntimePolicy#domain_list}
  */
  readonly domainList?: ContainerRuntimePolicyRuleDnsDomainListStruct[] | cdktf.IResolvable;
}

export function containerRuntimePolicyRuleDnsToTerraform(struct?: ContainerRuntimePolicyRuleDnsOutputReference | ContainerRuntimePolicyRuleDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_effect: cdktf.stringToTerraform(struct!.defaultEffect),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    domain_list: cdktf.listMapper(containerRuntimePolicyRuleDnsDomainListStructToTerraform, true)(struct!.domainList),
  }
}


export function containerRuntimePolicyRuleDnsToHclTerraform(struct?: ContainerRuntimePolicyRuleDnsOutputReference | ContainerRuntimePolicyRuleDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_effect: {
      value: cdktf.stringToHclTerraform(struct!.defaultEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_list: {
      value: cdktf.listMapperHcl(containerRuntimePolicyRuleDnsDomainListStructToHclTerraform, true)(struct!.domainList),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleDnsDomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyRuleDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEffect = this._defaultEffect;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._domainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainList = this._domainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRuleDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEffect = undefined;
      this._disabled = undefined;
      this._domainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEffect = value.defaultEffect;
      this._disabled = value.disabled;
      this._domainList.internalValue = value.domainList;
    }
  }

  // default_effect - computed: false, optional: true, required: false
  private _defaultEffect?: string; 
  public get defaultEffect() {
    return this.getStringAttribute('default_effect');
  }
  public set defaultEffect(value: string) {
    this._defaultEffect = value;
  }
  public resetDefaultEffect() {
    this._defaultEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEffectInput() {
    return this._defaultEffect;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // domain_list - computed: false, optional: true, required: false
  private _domainList = new ContainerRuntimePolicyRuleDnsDomainListStructList(this, "domain_list", false);
  public get domainList() {
    return this._domainList;
  }
  public putDomainList(value: ContainerRuntimePolicyRuleDnsDomainListStruct[] | cdktf.IResolvable) {
    this._domainList.internalValue = value;
  }
  public resetDomainList() {
    this._domainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList.internalValue;
  }
}
export interface ContainerRuntimePolicyRuleFilesystemDeniedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#effect ContainerRuntimePolicy#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#paths ContainerRuntimePolicy#paths}
  */
  readonly paths?: string[];
}

export function containerRuntimePolicyRuleFilesystemDeniedListStructToTerraform(struct?: ContainerRuntimePolicyRuleFilesystemDeniedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function containerRuntimePolicyRuleFilesystemDeniedListStructToHclTerraform(struct?: ContainerRuntimePolicyRuleFilesystemDeniedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleFilesystemDeniedListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRuleFilesystemDeniedListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRuleFilesystemDeniedListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._paths = value.paths;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}

export class ContainerRuntimePolicyRuleFilesystemDeniedListStructList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRuleFilesystemDeniedListStruct[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleFilesystemDeniedListStructOutputReference {
    return new ContainerRuntimePolicyRuleFilesystemDeniedListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyRuleFilesystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#allowed_list ContainerRuntimePolicy#allowed_list}
  */
  readonly allowedList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#backdoor_files_effect ContainerRuntimePolicy#backdoor_files_effect}
  */
  readonly backdoorFilesEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#default_effect ContainerRuntimePolicy#default_effect}
  */
  readonly defaultEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#disabled ContainerRuntimePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#encrypted_binaries_effect ContainerRuntimePolicy#encrypted_binaries_effect}
  */
  readonly encryptedBinariesEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#new_files_effect ContainerRuntimePolicy#new_files_effect}
  */
  readonly newFilesEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#suspicious_elf_headers_effect ContainerRuntimePolicy#suspicious_elf_headers_effect}
  */
  readonly suspiciousElfHeadersEffect?: string;
  /**
  * denied_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#denied_list ContainerRuntimePolicy#denied_list}
  */
  readonly deniedList?: ContainerRuntimePolicyRuleFilesystemDeniedListStruct[] | cdktf.IResolvable;
}

export function containerRuntimePolicyRuleFilesystemToTerraform(struct?: ContainerRuntimePolicyRuleFilesystemOutputReference | ContainerRuntimePolicyRuleFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedList),
    backdoor_files_effect: cdktf.stringToTerraform(struct!.backdoorFilesEffect),
    default_effect: cdktf.stringToTerraform(struct!.defaultEffect),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    encrypted_binaries_effect: cdktf.stringToTerraform(struct!.encryptedBinariesEffect),
    new_files_effect: cdktf.stringToTerraform(struct!.newFilesEffect),
    suspicious_elf_headers_effect: cdktf.stringToTerraform(struct!.suspiciousElfHeadersEffect),
    denied_list: cdktf.listMapper(containerRuntimePolicyRuleFilesystemDeniedListStructToTerraform, true)(struct!.deniedList),
  }
}


export function containerRuntimePolicyRuleFilesystemToHclTerraform(struct?: ContainerRuntimePolicyRuleFilesystemOutputReference | ContainerRuntimePolicyRuleFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    backdoor_files_effect: {
      value: cdktf.stringToHclTerraform(struct!.backdoorFilesEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_effect: {
      value: cdktf.stringToHclTerraform(struct!.defaultEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted_binaries_effect: {
      value: cdktf.stringToHclTerraform(struct!.encryptedBinariesEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_files_effect: {
      value: cdktf.stringToHclTerraform(struct!.newFilesEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspicious_elf_headers_effect: {
      value: cdktf.stringToHclTerraform(struct!.suspiciousElfHeadersEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    denied_list: {
      value: cdktf.listMapperHcl(containerRuntimePolicyRuleFilesystemDeniedListStructToHclTerraform, true)(struct!.deniedList),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleFilesystemDeniedListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyRuleFilesystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedList = this._allowedList;
    }
    if (this._backdoorFilesEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoorFilesEffect = this._backdoorFilesEffect;
    }
    if (this._defaultEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEffect = this._defaultEffect;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._encryptedBinariesEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedBinariesEffect = this._encryptedBinariesEffect;
    }
    if (this._newFilesEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFilesEffect = this._newFilesEffect;
    }
    if (this._suspiciousElfHeadersEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspiciousElfHeadersEffect = this._suspiciousElfHeadersEffect;
    }
    if (this._deniedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedList = this._deniedList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRuleFilesystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedList = undefined;
      this._backdoorFilesEffect = undefined;
      this._defaultEffect = undefined;
      this._disabled = undefined;
      this._encryptedBinariesEffect = undefined;
      this._newFilesEffect = undefined;
      this._suspiciousElfHeadersEffect = undefined;
      this._deniedList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedList = value.allowedList;
      this._backdoorFilesEffect = value.backdoorFilesEffect;
      this._defaultEffect = value.defaultEffect;
      this._disabled = value.disabled;
      this._encryptedBinariesEffect = value.encryptedBinariesEffect;
      this._newFilesEffect = value.newFilesEffect;
      this._suspiciousElfHeadersEffect = value.suspiciousElfHeadersEffect;
      this._deniedList.internalValue = value.deniedList;
    }
  }

  // allowed_list - computed: false, optional: true, required: false
  private _allowedList?: string[]; 
  public get allowedList() {
    return this.getListAttribute('allowed_list');
  }
  public set allowedList(value: string[]) {
    this._allowedList = value;
  }
  public resetAllowedList() {
    this._allowedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedListInput() {
    return this._allowedList;
  }

  // backdoor_files_effect - computed: false, optional: true, required: false
  private _backdoorFilesEffect?: string; 
  public get backdoorFilesEffect() {
    return this.getStringAttribute('backdoor_files_effect');
  }
  public set backdoorFilesEffect(value: string) {
    this._backdoorFilesEffect = value;
  }
  public resetBackdoorFilesEffect() {
    this._backdoorFilesEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorFilesEffectInput() {
    return this._backdoorFilesEffect;
  }

  // default_effect - computed: false, optional: true, required: false
  private _defaultEffect?: string; 
  public get defaultEffect() {
    return this.getStringAttribute('default_effect');
  }
  public set defaultEffect(value: string) {
    this._defaultEffect = value;
  }
  public resetDefaultEffect() {
    this._defaultEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEffectInput() {
    return this._defaultEffect;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // encrypted_binaries_effect - computed: false, optional: true, required: false
  private _encryptedBinariesEffect?: string; 
  public get encryptedBinariesEffect() {
    return this.getStringAttribute('encrypted_binaries_effect');
  }
  public set encryptedBinariesEffect(value: string) {
    this._encryptedBinariesEffect = value;
  }
  public resetEncryptedBinariesEffect() {
    this._encryptedBinariesEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedBinariesEffectInput() {
    return this._encryptedBinariesEffect;
  }

  // new_files_effect - computed: false, optional: true, required: false
  private _newFilesEffect?: string; 
  public get newFilesEffect() {
    return this.getStringAttribute('new_files_effect');
  }
  public set newFilesEffect(value: string) {
    this._newFilesEffect = value;
  }
  public resetNewFilesEffect() {
    this._newFilesEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFilesEffectInput() {
    return this._newFilesEffect;
  }

  // suspicious_elf_headers_effect - computed: false, optional: true, required: false
  private _suspiciousElfHeadersEffect?: string; 
  public get suspiciousElfHeadersEffect() {
    return this.getStringAttribute('suspicious_elf_headers_effect');
  }
  public set suspiciousElfHeadersEffect(value: string) {
    this._suspiciousElfHeadersEffect = value;
  }
  public resetSuspiciousElfHeadersEffect() {
    this._suspiciousElfHeadersEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspiciousElfHeadersEffectInput() {
    return this._suspiciousElfHeadersEffect;
  }

  // denied_list - computed: false, optional: true, required: false
  private _deniedList = new ContainerRuntimePolicyRuleFilesystemDeniedListStructList(this, "denied_list", false);
  public get deniedList() {
    return this._deniedList;
  }
  public putDeniedList(value: ContainerRuntimePolicyRuleFilesystemDeniedListStruct[] | cdktf.IResolvable) {
    this._deniedList.internalValue = value;
  }
  public resetDeniedList() {
    this._deniedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedListInput() {
    return this._deniedList.internalValue;
  }
}
export interface ContainerRuntimePolicyRuleNetworkListeningPortsAllowed {
  /**
  * Whether or not to deny the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#deny ContainerRuntimePolicy#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
  /**
  * End of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#end ContainerRuntimePolicy#end}
  */
  readonly end?: number;
  /**
  * Start of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#start ContainerRuntimePolicy#start}
  */
  readonly start?: number;
}

export function containerRuntimePolicyRuleNetworkListeningPortsAllowedToTerraform(struct?: ContainerRuntimePolicyRuleNetworkListeningPortsAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.booleanToTerraform(struct!.deny),
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function containerRuntimePolicyRuleNetworkListeningPortsAllowedToHclTerraform(struct?: ContainerRuntimePolicyRuleNetworkListeningPortsAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ContainerRuntimePolicyRuleNetworkListeningPortsAllowedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRuleNetworkListeningPortsAllowed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
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

  public set internalValue(value: ContainerRuntimePolicyRuleNetworkListeningPortsAllowed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
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
      this._deny = value.deny;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
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

export class ContainerRuntimePolicyRuleNetworkListeningPortsAllowedList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRuleNetworkListeningPortsAllowed[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleNetworkListeningPortsAllowedOutputReference {
    return new ContainerRuntimePolicyRuleNetworkListeningPortsAllowedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyRuleNetworkListeningPortsDenied {
  /**
  * Whether or not to deny the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#deny ContainerRuntimePolicy#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
  /**
  * End of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#end ContainerRuntimePolicy#end}
  */
  readonly end?: number;
  /**
  * Start of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#start ContainerRuntimePolicy#start}
  */
  readonly start?: number;
}

export function containerRuntimePolicyRuleNetworkListeningPortsDeniedToTerraform(struct?: ContainerRuntimePolicyRuleNetworkListeningPortsDenied | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.booleanToTerraform(struct!.deny),
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function containerRuntimePolicyRuleNetworkListeningPortsDeniedToHclTerraform(struct?: ContainerRuntimePolicyRuleNetworkListeningPortsDenied | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ContainerRuntimePolicyRuleNetworkListeningPortsDeniedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRuleNetworkListeningPortsDenied | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
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

  public set internalValue(value: ContainerRuntimePolicyRuleNetworkListeningPortsDenied | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
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
      this._deny = value.deny;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
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

export class ContainerRuntimePolicyRuleNetworkListeningPortsDeniedList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRuleNetworkListeningPortsDenied[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleNetworkListeningPortsDeniedOutputReference {
    return new ContainerRuntimePolicyRuleNetworkListeningPortsDeniedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyRuleNetworkListeningPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#effect ContainerRuntimePolicy#effect}
  */
  readonly effect?: string;
  /**
  * allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#allowed ContainerRuntimePolicy#allowed}
  */
  readonly allowed?: ContainerRuntimePolicyRuleNetworkListeningPortsAllowed[] | cdktf.IResolvable;
  /**
  * denied block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#denied ContainerRuntimePolicy#denied}
  */
  readonly denied?: ContainerRuntimePolicyRuleNetworkListeningPortsDenied[] | cdktf.IResolvable;
}

export function containerRuntimePolicyRuleNetworkListeningPortsToTerraform(struct?: ContainerRuntimePolicyRuleNetworkListeningPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    allowed: cdktf.listMapper(containerRuntimePolicyRuleNetworkListeningPortsAllowedToTerraform, true)(struct!.allowed),
    denied: cdktf.listMapper(containerRuntimePolicyRuleNetworkListeningPortsDeniedToTerraform, true)(struct!.denied),
  }
}


export function containerRuntimePolicyRuleNetworkListeningPortsToHclTerraform(struct?: ContainerRuntimePolicyRuleNetworkListeningPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed: {
      value: cdktf.listMapperHcl(containerRuntimePolicyRuleNetworkListeningPortsAllowedToHclTerraform, true)(struct!.allowed),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleNetworkListeningPortsAllowedList",
    },
    denied: {
      value: cdktf.listMapperHcl(containerRuntimePolicyRuleNetworkListeningPortsDeniedToHclTerraform, true)(struct!.denied),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleNetworkListeningPortsDeniedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleNetworkListeningPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRuleNetworkListeningPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._allowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed?.internalValue;
    }
    if (this._denied?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRuleNetworkListeningPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._allowed.internalValue = undefined;
      this._denied.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._allowed.internalValue = value.allowed;
      this._denied.internalValue = value.denied;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed = new ContainerRuntimePolicyRuleNetworkListeningPortsAllowedList(this, "allowed", false);
  public get allowed() {
    return this._allowed;
  }
  public putAllowed(value: ContainerRuntimePolicyRuleNetworkListeningPortsAllowed[] | cdktf.IResolvable) {
    this._allowed.internalValue = value;
  }
  public resetAllowed() {
    this._allowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed.internalValue;
  }

  // denied - computed: false, optional: true, required: false
  private _denied = new ContainerRuntimePolicyRuleNetworkListeningPortsDeniedList(this, "denied", false);
  public get denied() {
    return this._denied;
  }
  public putDenied(value: ContainerRuntimePolicyRuleNetworkListeningPortsDenied[] | cdktf.IResolvable) {
    this._denied.internalValue = value;
  }
  public resetDenied() {
    this._denied.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied.internalValue;
  }
}

export class ContainerRuntimePolicyRuleNetworkListeningPortsList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRuleNetworkListeningPorts[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleNetworkListeningPortsOutputReference {
    return new ContainerRuntimePolicyRuleNetworkListeningPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyRuleNetworkOutboundPortsAllowed {
  /**
  * Whether or not to deny the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#deny ContainerRuntimePolicy#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
  /**
  * End of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#end ContainerRuntimePolicy#end}
  */
  readonly end?: number;
  /**
  * Start of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#start ContainerRuntimePolicy#start}
  */
  readonly start?: number;
}

export function containerRuntimePolicyRuleNetworkOutboundPortsAllowedToTerraform(struct?: ContainerRuntimePolicyRuleNetworkOutboundPortsAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.booleanToTerraform(struct!.deny),
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function containerRuntimePolicyRuleNetworkOutboundPortsAllowedToHclTerraform(struct?: ContainerRuntimePolicyRuleNetworkOutboundPortsAllowed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ContainerRuntimePolicyRuleNetworkOutboundPortsAllowedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRuleNetworkOutboundPortsAllowed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
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

  public set internalValue(value: ContainerRuntimePolicyRuleNetworkOutboundPortsAllowed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
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
      this._deny = value.deny;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
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

export class ContainerRuntimePolicyRuleNetworkOutboundPortsAllowedList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRuleNetworkOutboundPortsAllowed[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleNetworkOutboundPortsAllowedOutputReference {
    return new ContainerRuntimePolicyRuleNetworkOutboundPortsAllowedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyRuleNetworkOutboundPortsDenied {
  /**
  * Whether or not to deny the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#deny ContainerRuntimePolicy#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
  /**
  * End of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#end ContainerRuntimePolicy#end}
  */
  readonly end?: number;
  /**
  * Start of the port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#start ContainerRuntimePolicy#start}
  */
  readonly start?: number;
}

export function containerRuntimePolicyRuleNetworkOutboundPortsDeniedToTerraform(struct?: ContainerRuntimePolicyRuleNetworkOutboundPortsDenied | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.booleanToTerraform(struct!.deny),
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function containerRuntimePolicyRuleNetworkOutboundPortsDeniedToHclTerraform(struct?: ContainerRuntimePolicyRuleNetworkOutboundPortsDenied | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ContainerRuntimePolicyRuleNetworkOutboundPortsDeniedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRuleNetworkOutboundPortsDenied | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
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

  public set internalValue(value: ContainerRuntimePolicyRuleNetworkOutboundPortsDenied | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
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
      this._deny = value.deny;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
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

export class ContainerRuntimePolicyRuleNetworkOutboundPortsDeniedList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRuleNetworkOutboundPortsDenied[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleNetworkOutboundPortsDeniedOutputReference {
    return new ContainerRuntimePolicyRuleNetworkOutboundPortsDeniedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyRuleNetworkOutboundPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#effect ContainerRuntimePolicy#effect}
  */
  readonly effect?: string;
  /**
  * allowed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#allowed ContainerRuntimePolicy#allowed}
  */
  readonly allowed?: ContainerRuntimePolicyRuleNetworkOutboundPortsAllowed[] | cdktf.IResolvable;
  /**
  * denied block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#denied ContainerRuntimePolicy#denied}
  */
  readonly denied?: ContainerRuntimePolicyRuleNetworkOutboundPortsDenied[] | cdktf.IResolvable;
}

export function containerRuntimePolicyRuleNetworkOutboundPortsToTerraform(struct?: ContainerRuntimePolicyRuleNetworkOutboundPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    allowed: cdktf.listMapper(containerRuntimePolicyRuleNetworkOutboundPortsAllowedToTerraform, true)(struct!.allowed),
    denied: cdktf.listMapper(containerRuntimePolicyRuleNetworkOutboundPortsDeniedToTerraform, true)(struct!.denied),
  }
}


export function containerRuntimePolicyRuleNetworkOutboundPortsToHclTerraform(struct?: ContainerRuntimePolicyRuleNetworkOutboundPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed: {
      value: cdktf.listMapperHcl(containerRuntimePolicyRuleNetworkOutboundPortsAllowedToHclTerraform, true)(struct!.allowed),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleNetworkOutboundPortsAllowedList",
    },
    denied: {
      value: cdktf.listMapperHcl(containerRuntimePolicyRuleNetworkOutboundPortsDeniedToHclTerraform, true)(struct!.denied),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleNetworkOutboundPortsDeniedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleNetworkOutboundPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRuleNetworkOutboundPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._allowed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowed = this._allowed?.internalValue;
    }
    if (this._denied?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRuleNetworkOutboundPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._allowed.internalValue = undefined;
      this._denied.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._allowed.internalValue = value.allowed;
      this._denied.internalValue = value.denied;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // allowed - computed: false, optional: true, required: false
  private _allowed = new ContainerRuntimePolicyRuleNetworkOutboundPortsAllowedList(this, "allowed", false);
  public get allowed() {
    return this._allowed;
  }
  public putAllowed(value: ContainerRuntimePolicyRuleNetworkOutboundPortsAllowed[] | cdktf.IResolvable) {
    this._allowed.internalValue = value;
  }
  public resetAllowed() {
    this._allowed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInput() {
    return this._allowed.internalValue;
  }

  // denied - computed: false, optional: true, required: false
  private _denied = new ContainerRuntimePolicyRuleNetworkOutboundPortsDeniedList(this, "denied", false);
  public get denied() {
    return this._denied;
  }
  public putDenied(value: ContainerRuntimePolicyRuleNetworkOutboundPortsDenied[] | cdktf.IResolvable) {
    this._denied.internalValue = value;
  }
  public resetDenied() {
    this._denied.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied.internalValue;
  }
}

export class ContainerRuntimePolicyRuleNetworkOutboundPortsList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRuleNetworkOutboundPorts[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleNetworkOutboundPortsOutputReference {
    return new ContainerRuntimePolicyRuleNetworkOutboundPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyRuleNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#allowed_ips ContainerRuntimePolicy#allowed_ips}
  */
  readonly allowedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#default_effect ContainerRuntimePolicy#default_effect}
  */
  readonly defaultEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#denied_ips ContainerRuntimePolicy#denied_ips}
  */
  readonly deniedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#denied_ips_effect ContainerRuntimePolicy#denied_ips_effect}
  */
  readonly deniedIpsEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#disabled ContainerRuntimePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#modified_proc_effect ContainerRuntimePolicy#modified_proc_effect}
  */
  readonly modifiedProcEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#port_scan_effect ContainerRuntimePolicy#port_scan_effect}
  */
  readonly portScanEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#raw_sockets_effect ContainerRuntimePolicy#raw_sockets_effect}
  */
  readonly rawSocketsEffect?: string;
  /**
  * listening_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#listening_ports ContainerRuntimePolicy#listening_ports}
  */
  readonly listeningPorts?: ContainerRuntimePolicyRuleNetworkListeningPorts[] | cdktf.IResolvable;
  /**
  * outbound_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#outbound_ports ContainerRuntimePolicy#outbound_ports}
  */
  readonly outboundPorts?: ContainerRuntimePolicyRuleNetworkOutboundPorts[] | cdktf.IResolvable;
}

export function containerRuntimePolicyRuleNetworkToTerraform(struct?: ContainerRuntimePolicyRuleNetworkOutputReference | ContainerRuntimePolicyRuleNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIps),
    default_effect: cdktf.stringToTerraform(struct!.defaultEffect),
    denied_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedIps),
    denied_ips_effect: cdktf.stringToTerraform(struct!.deniedIpsEffect),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    modified_proc_effect: cdktf.stringToTerraform(struct!.modifiedProcEffect),
    port_scan_effect: cdktf.stringToTerraform(struct!.portScanEffect),
    raw_sockets_effect: cdktf.stringToTerraform(struct!.rawSocketsEffect),
    listening_ports: cdktf.listMapper(containerRuntimePolicyRuleNetworkListeningPortsToTerraform, true)(struct!.listeningPorts),
    outbound_ports: cdktf.listMapper(containerRuntimePolicyRuleNetworkOutboundPortsToTerraform, true)(struct!.outboundPorts),
  }
}


export function containerRuntimePolicyRuleNetworkToHclTerraform(struct?: ContainerRuntimePolicyRuleNetworkOutputReference | ContainerRuntimePolicyRuleNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_effect: {
      value: cdktf.stringToHclTerraform(struct!.defaultEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    denied_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_ips_effect: {
      value: cdktf.stringToHclTerraform(struct!.deniedIpsEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified_proc_effect: {
      value: cdktf.stringToHclTerraform(struct!.modifiedProcEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_scan_effect: {
      value: cdktf.stringToHclTerraform(struct!.portScanEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_sockets_effect: {
      value: cdktf.stringToHclTerraform(struct!.rawSocketsEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listening_ports: {
      value: cdktf.listMapperHcl(containerRuntimePolicyRuleNetworkListeningPortsToHclTerraform, true)(struct!.listeningPorts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleNetworkListeningPortsList",
    },
    outbound_ports: {
      value: cdktf.listMapperHcl(containerRuntimePolicyRuleNetworkOutboundPortsToHclTerraform, true)(struct!.outboundPorts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleNetworkOutboundPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyRuleNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIps = this._allowedIps;
    }
    if (this._defaultEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEffect = this._defaultEffect;
    }
    if (this._deniedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedIps = this._deniedIps;
    }
    if (this._deniedIpsEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedIpsEffect = this._deniedIpsEffect;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._modifiedProcEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiedProcEffect = this._modifiedProcEffect;
    }
    if (this._portScanEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.portScanEffect = this._portScanEffect;
    }
    if (this._rawSocketsEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawSocketsEffect = this._rawSocketsEffect;
    }
    if (this._listeningPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeningPorts = this._listeningPorts?.internalValue;
    }
    if (this._outboundPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPorts = this._outboundPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRuleNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedIps = undefined;
      this._defaultEffect = undefined;
      this._deniedIps = undefined;
      this._deniedIpsEffect = undefined;
      this._disabled = undefined;
      this._modifiedProcEffect = undefined;
      this._portScanEffect = undefined;
      this._rawSocketsEffect = undefined;
      this._listeningPorts.internalValue = undefined;
      this._outboundPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedIps = value.allowedIps;
      this._defaultEffect = value.defaultEffect;
      this._deniedIps = value.deniedIps;
      this._deniedIpsEffect = value.deniedIpsEffect;
      this._disabled = value.disabled;
      this._modifiedProcEffect = value.modifiedProcEffect;
      this._portScanEffect = value.portScanEffect;
      this._rawSocketsEffect = value.rawSocketsEffect;
      this._listeningPorts.internalValue = value.listeningPorts;
      this._outboundPorts.internalValue = value.outboundPorts;
    }
  }

  // allowed_ips - computed: false, optional: true, required: false
  private _allowedIps?: string[]; 
  public get allowedIps() {
    return this.getListAttribute('allowed_ips');
  }
  public set allowedIps(value: string[]) {
    this._allowedIps = value;
  }
  public resetAllowedIps() {
    this._allowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpsInput() {
    return this._allowedIps;
  }

  // default_effect - computed: false, optional: true, required: false
  private _defaultEffect?: string; 
  public get defaultEffect() {
    return this.getStringAttribute('default_effect');
  }
  public set defaultEffect(value: string) {
    this._defaultEffect = value;
  }
  public resetDefaultEffect() {
    this._defaultEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEffectInput() {
    return this._defaultEffect;
  }

  // denied_ips - computed: false, optional: true, required: false
  private _deniedIps?: string[]; 
  public get deniedIps() {
    return this.getListAttribute('denied_ips');
  }
  public set deniedIps(value: string[]) {
    this._deniedIps = value;
  }
  public resetDeniedIps() {
    this._deniedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedIpsInput() {
    return this._deniedIps;
  }

  // denied_ips_effect - computed: false, optional: true, required: false
  private _deniedIpsEffect?: string; 
  public get deniedIpsEffect() {
    return this.getStringAttribute('denied_ips_effect');
  }
  public set deniedIpsEffect(value: string) {
    this._deniedIpsEffect = value;
  }
  public resetDeniedIpsEffect() {
    this._deniedIpsEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedIpsEffectInput() {
    return this._deniedIpsEffect;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // modified_proc_effect - computed: false, optional: true, required: false
  private _modifiedProcEffect?: string; 
  public get modifiedProcEffect() {
    return this.getStringAttribute('modified_proc_effect');
  }
  public set modifiedProcEffect(value: string) {
    this._modifiedProcEffect = value;
  }
  public resetModifiedProcEffect() {
    this._modifiedProcEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedProcEffectInput() {
    return this._modifiedProcEffect;
  }

  // port_scan_effect - computed: false, optional: true, required: false
  private _portScanEffect?: string; 
  public get portScanEffect() {
    return this.getStringAttribute('port_scan_effect');
  }
  public set portScanEffect(value: string) {
    this._portScanEffect = value;
  }
  public resetPortScanEffect() {
    this._portScanEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScanEffectInput() {
    return this._portScanEffect;
  }

  // raw_sockets_effect - computed: false, optional: true, required: false
  private _rawSocketsEffect?: string; 
  public get rawSocketsEffect() {
    return this.getStringAttribute('raw_sockets_effect');
  }
  public set rawSocketsEffect(value: string) {
    this._rawSocketsEffect = value;
  }
  public resetRawSocketsEffect() {
    this._rawSocketsEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawSocketsEffectInput() {
    return this._rawSocketsEffect;
  }

  // listening_ports - computed: false, optional: true, required: false
  private _listeningPorts = new ContainerRuntimePolicyRuleNetworkListeningPortsList(this, "listening_ports", false);
  public get listeningPorts() {
    return this._listeningPorts;
  }
  public putListeningPorts(value: ContainerRuntimePolicyRuleNetworkListeningPorts[] | cdktf.IResolvable) {
    this._listeningPorts.internalValue = value;
  }
  public resetListeningPorts() {
    this._listeningPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningPortsInput() {
    return this._listeningPorts.internalValue;
  }

  // outbound_ports - computed: false, optional: true, required: false
  private _outboundPorts = new ContainerRuntimePolicyRuleNetworkOutboundPortsList(this, "outbound_ports", false);
  public get outboundPorts() {
    return this._outboundPorts;
  }
  public putOutboundPorts(value: ContainerRuntimePolicyRuleNetworkOutboundPorts[] | cdktf.IResolvable) {
    this._outboundPorts.internalValue = value;
  }
  public resetOutboundPorts() {
    this._outboundPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortsInput() {
    return this._outboundPorts.internalValue;
  }
}
export interface ContainerRuntimePolicyRuleProcessesDeniedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#effect ContainerRuntimePolicy#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#paths ContainerRuntimePolicy#paths}
  */
  readonly paths?: string[];
}

export function containerRuntimePolicyRuleProcessesDeniedListStructToTerraform(struct?: ContainerRuntimePolicyRuleProcessesDeniedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function containerRuntimePolicyRuleProcessesDeniedListStructToHclTerraform(struct?: ContainerRuntimePolicyRuleProcessesDeniedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleProcessesDeniedListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRuleProcessesDeniedListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRuleProcessesDeniedListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._paths = value.paths;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}

export class ContainerRuntimePolicyRuleProcessesDeniedListStructList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRuleProcessesDeniedListStruct[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleProcessesDeniedListStructOutputReference {
    return new ContainerRuntimePolicyRuleProcessesDeniedListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyRuleProcesses {
  /**
  * List of allowed processes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#allowed_list ContainerRuntimePolicy#allowed_list}
  */
  readonly allowedList?: string[];
  /**
  * Whether or not to check for parent-child relationship when comparing spawned processes in the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#check_parent_child ContainerRuntimePolicy#check_parent_child}
  */
  readonly checkParentChild?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#crypto_miners_effect ContainerRuntimePolicy#crypto_miners_effect}
  */
  readonly cryptoMinersEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#default_effect ContainerRuntimePolicy#default_effect}
  */
  readonly defaultEffect?: string;
  /**
  * Whether or not skip detection of reverse shells.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#disabled ContainerRuntimePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#lateral_movement_effect ContainerRuntimePolicy#lateral_movement_effect}
  */
  readonly lateralMovementEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#modified_process_effect ContainerRuntimePolicy#modified_process_effect}
  */
  readonly modifiedProcessEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#reverse_shell_effect ContainerRuntimePolicy#reverse_shell_effect}
  */
  readonly reverseShellEffect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#suid_binaries_effect ContainerRuntimePolicy#suid_binaries_effect}
  */
  readonly suidBinariesEffect?: string;
  /**
  * denied_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#denied_list ContainerRuntimePolicy#denied_list}
  */
  readonly deniedList?: ContainerRuntimePolicyRuleProcessesDeniedListStruct[] | cdktf.IResolvable;
}

export function containerRuntimePolicyRuleProcessesToTerraform(struct?: ContainerRuntimePolicyRuleProcessesOutputReference | ContainerRuntimePolicyRuleProcesses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedList),
    check_parent_child: cdktf.booleanToTerraform(struct!.checkParentChild),
    crypto_miners_effect: cdktf.stringToTerraform(struct!.cryptoMinersEffect),
    default_effect: cdktf.stringToTerraform(struct!.defaultEffect),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    lateral_movement_effect: cdktf.stringToTerraform(struct!.lateralMovementEffect),
    modified_process_effect: cdktf.stringToTerraform(struct!.modifiedProcessEffect),
    reverse_shell_effect: cdktf.stringToTerraform(struct!.reverseShellEffect),
    suid_binaries_effect: cdktf.stringToTerraform(struct!.suidBinariesEffect),
    denied_list: cdktf.listMapper(containerRuntimePolicyRuleProcessesDeniedListStructToTerraform, true)(struct!.deniedList),
  }
}


export function containerRuntimePolicyRuleProcessesToHclTerraform(struct?: ContainerRuntimePolicyRuleProcessesOutputReference | ContainerRuntimePolicyRuleProcesses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    check_parent_child: {
      value: cdktf.booleanToHclTerraform(struct!.checkParentChild),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crypto_miners_effect: {
      value: cdktf.stringToHclTerraform(struct!.cryptoMinersEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_effect: {
      value: cdktf.stringToHclTerraform(struct!.defaultEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lateral_movement_effect: {
      value: cdktf.stringToHclTerraform(struct!.lateralMovementEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modified_process_effect: {
      value: cdktf.stringToHclTerraform(struct!.modifiedProcessEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reverse_shell_effect: {
      value: cdktf.stringToHclTerraform(struct!.reverseShellEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suid_binaries_effect: {
      value: cdktf.stringToHclTerraform(struct!.suidBinariesEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    denied_list: {
      value: cdktf.listMapperHcl(containerRuntimePolicyRuleProcessesDeniedListStructToHclTerraform, true)(struct!.deniedList),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleProcessesDeniedListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleProcessesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyRuleProcesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedList = this._allowedList;
    }
    if (this._checkParentChild !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkParentChild = this._checkParentChild;
    }
    if (this._cryptoMinersEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoMinersEffect = this._cryptoMinersEffect;
    }
    if (this._defaultEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEffect = this._defaultEffect;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._lateralMovementEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.lateralMovementEffect = this._lateralMovementEffect;
    }
    if (this._modifiedProcessEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiedProcessEffect = this._modifiedProcessEffect;
    }
    if (this._reverseShellEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseShellEffect = this._reverseShellEffect;
    }
    if (this._suidBinariesEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.suidBinariesEffect = this._suidBinariesEffect;
    }
    if (this._deniedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedList = this._deniedList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRuleProcesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedList = undefined;
      this._checkParentChild = undefined;
      this._cryptoMinersEffect = undefined;
      this._defaultEffect = undefined;
      this._disabled = undefined;
      this._lateralMovementEffect = undefined;
      this._modifiedProcessEffect = undefined;
      this._reverseShellEffect = undefined;
      this._suidBinariesEffect = undefined;
      this._deniedList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedList = value.allowedList;
      this._checkParentChild = value.checkParentChild;
      this._cryptoMinersEffect = value.cryptoMinersEffect;
      this._defaultEffect = value.defaultEffect;
      this._disabled = value.disabled;
      this._lateralMovementEffect = value.lateralMovementEffect;
      this._modifiedProcessEffect = value.modifiedProcessEffect;
      this._reverseShellEffect = value.reverseShellEffect;
      this._suidBinariesEffect = value.suidBinariesEffect;
      this._deniedList.internalValue = value.deniedList;
    }
  }

  // allowed_list - computed: false, optional: true, required: false
  private _allowedList?: string[]; 
  public get allowedList() {
    return this.getListAttribute('allowed_list');
  }
  public set allowedList(value: string[]) {
    this._allowedList = value;
  }
  public resetAllowedList() {
    this._allowedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedListInput() {
    return this._allowedList;
  }

  // check_parent_child - computed: false, optional: true, required: false
  private _checkParentChild?: boolean | cdktf.IResolvable; 
  public get checkParentChild() {
    return this.getBooleanAttribute('check_parent_child');
  }
  public set checkParentChild(value: boolean | cdktf.IResolvable) {
    this._checkParentChild = value;
  }
  public resetCheckParentChild() {
    this._checkParentChild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkParentChildInput() {
    return this._checkParentChild;
  }

  // crypto_miners_effect - computed: false, optional: true, required: false
  private _cryptoMinersEffect?: string; 
  public get cryptoMinersEffect() {
    return this.getStringAttribute('crypto_miners_effect');
  }
  public set cryptoMinersEffect(value: string) {
    this._cryptoMinersEffect = value;
  }
  public resetCryptoMinersEffect() {
    this._cryptoMinersEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoMinersEffectInput() {
    return this._cryptoMinersEffect;
  }

  // default_effect - computed: false, optional: true, required: false
  private _defaultEffect?: string; 
  public get defaultEffect() {
    return this.getStringAttribute('default_effect');
  }
  public set defaultEffect(value: string) {
    this._defaultEffect = value;
  }
  public resetDefaultEffect() {
    this._defaultEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEffectInput() {
    return this._defaultEffect;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // lateral_movement_effect - computed: false, optional: true, required: false
  private _lateralMovementEffect?: string; 
  public get lateralMovementEffect() {
    return this.getStringAttribute('lateral_movement_effect');
  }
  public set lateralMovementEffect(value: string) {
    this._lateralMovementEffect = value;
  }
  public resetLateralMovementEffect() {
    this._lateralMovementEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lateralMovementEffectInput() {
    return this._lateralMovementEffect;
  }

  // modified_process_effect - computed: false, optional: true, required: false
  private _modifiedProcessEffect?: string; 
  public get modifiedProcessEffect() {
    return this.getStringAttribute('modified_process_effect');
  }
  public set modifiedProcessEffect(value: string) {
    this._modifiedProcessEffect = value;
  }
  public resetModifiedProcessEffect() {
    this._modifiedProcessEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedProcessEffectInput() {
    return this._modifiedProcessEffect;
  }

  // reverse_shell_effect - computed: false, optional: true, required: false
  private _reverseShellEffect?: string; 
  public get reverseShellEffect() {
    return this.getStringAttribute('reverse_shell_effect');
  }
  public set reverseShellEffect(value: string) {
    this._reverseShellEffect = value;
  }
  public resetReverseShellEffect() {
    this._reverseShellEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseShellEffectInput() {
    return this._reverseShellEffect;
  }

  // suid_binaries_effect - computed: false, optional: true, required: false
  private _suidBinariesEffect?: string; 
  public get suidBinariesEffect() {
    return this.getStringAttribute('suid_binaries_effect');
  }
  public set suidBinariesEffect(value: string) {
    this._suidBinariesEffect = value;
  }
  public resetSuidBinariesEffect() {
    this._suidBinariesEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suidBinariesEffectInput() {
    return this._suidBinariesEffect;
  }

  // denied_list - computed: false, optional: true, required: false
  private _deniedList = new ContainerRuntimePolicyRuleProcessesDeniedListStructList(this, "denied_list", false);
  public get deniedList() {
    return this._deniedList;
  }
  public putDeniedList(value: ContainerRuntimePolicyRuleProcessesDeniedListStruct[] | cdktf.IResolvable) {
    this._deniedList.internalValue = value;
  }
  public resetDeniedList() {
    this._deniedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedListInput() {
    return this._deniedList.internalValue;
  }
}
export interface ContainerRuntimePolicyRule {
  /**
  * Whether or not to enable advanced protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#advanced_protection_effect ContainerRuntimePolicy#advanced_protection_effect}
  */
  readonly advancedProtectionEffect?: string;
  /**
  * Whether or not to enable cloud metadata access monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#cloud_metadata_enforcement_effect ContainerRuntimePolicy#cloud_metadata_enforcement_effect}
  */
  readonly cloudMetadataEnforcementEffect?: string;
  /**
  * Collections used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#collections ContainerRuntimePolicy#collections}
  */
  readonly collections?: string[];
  /**
  * Whether or not to disable the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#disabled ContainerRuntimePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to detect attacks against the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#kubernetes_enforcement_effect ContainerRuntimePolicy#kubernetes_enforcement_effect}
  */
  readonly kubernetesEnforcementEffect?: string;
  /**
  * Unique name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#name ContainerRuntimePolicy#name}
  */
  readonly name: string;
  /**
  * Free-form text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#notes ContainerRuntimePolicy#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#previous_name ContainerRuntimePolicy#previous_name}
  */
  readonly previousName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#skip_exec_sessions ContainerRuntimePolicy#skip_exec_sessions}
  */
  readonly skipExecSessions?: boolean | cdktf.IResolvable;
  /**
  * The effect to be used when WildFire analysis is enabled. Can be set to 'block', 'alert', or 'disable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#wildfire_analysis ContainerRuntimePolicy#wildfire_analysis}
  */
  readonly wildfireAnalysis?: string;
  /**
  * custom_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#custom_rule ContainerRuntimePolicy#custom_rule}
  */
  readonly customRule?: ContainerRuntimePolicyRuleCustomRule[] | cdktf.IResolvable;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#dns ContainerRuntimePolicy#dns}
  */
  readonly dns?: ContainerRuntimePolicyRuleDns;
  /**
  * filesystem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#filesystem ContainerRuntimePolicy#filesystem}
  */
  readonly filesystem?: ContainerRuntimePolicyRuleFilesystem;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#network ContainerRuntimePolicy#network}
  */
  readonly network?: ContainerRuntimePolicyRuleNetwork;
  /**
  * processes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#processes ContainerRuntimePolicy#processes}
  */
  readonly processes?: ContainerRuntimePolicyRuleProcesses;
}

export function containerRuntimePolicyRuleToTerraform(struct?: ContainerRuntimePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_protection_effect: cdktf.stringToTerraform(struct!.advancedProtectionEffect),
    cloud_metadata_enforcement_effect: cdktf.stringToTerraform(struct!.cloudMetadataEnforcementEffect),
    collections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.collections),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    kubernetes_enforcement_effect: cdktf.stringToTerraform(struct!.kubernetesEnforcementEffect),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    previous_name: cdktf.stringToTerraform(struct!.previousName),
    skip_exec_sessions: cdktf.booleanToTerraform(struct!.skipExecSessions),
    wildfire_analysis: cdktf.stringToTerraform(struct!.wildfireAnalysis),
    custom_rule: cdktf.listMapper(containerRuntimePolicyRuleCustomRuleToTerraform, true)(struct!.customRule),
    dns: containerRuntimePolicyRuleDnsToTerraform(struct!.dns),
    filesystem: containerRuntimePolicyRuleFilesystemToTerraform(struct!.filesystem),
    network: containerRuntimePolicyRuleNetworkToTerraform(struct!.network),
    processes: containerRuntimePolicyRuleProcessesToTerraform(struct!.processes),
  }
}


export function containerRuntimePolicyRuleToHclTerraform(struct?: ContainerRuntimePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_protection_effect: {
      value: cdktf.stringToHclTerraform(struct!.advancedProtectionEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_metadata_enforcement_effect: {
      value: cdktf.stringToHclTerraform(struct!.cloudMetadataEnforcementEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.collections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kubernetes_enforcement_effect: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesEnforcementEffect),
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
    previous_name: {
      value: cdktf.stringToHclTerraform(struct!.previousName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_exec_sessions: {
      value: cdktf.booleanToHclTerraform(struct!.skipExecSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wildfire_analysis: {
      value: cdktf.stringToHclTerraform(struct!.wildfireAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_rule: {
      value: cdktf.listMapperHcl(containerRuntimePolicyRuleCustomRuleToHclTerraform, true)(struct!.customRule),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleCustomRuleList",
    },
    dns: {
      value: containerRuntimePolicyRuleDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleDnsList",
    },
    filesystem: {
      value: containerRuntimePolicyRuleFilesystemToHclTerraform(struct!.filesystem),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleFilesystemList",
    },
    network: {
      value: containerRuntimePolicyRuleNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleNetworkList",
    },
    processes: {
      value: containerRuntimePolicyRuleProcessesToHclTerraform(struct!.processes),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyRuleProcessesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedProtectionEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedProtectionEffect = this._advancedProtectionEffect;
    }
    if (this._cloudMetadataEnforcementEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudMetadataEnforcementEffect = this._cloudMetadataEnforcementEffect;
    }
    if (this._collections !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._kubernetesEnforcementEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesEnforcementEffect = this._kubernetesEnforcementEffect;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._previousName !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousName = this._previousName;
    }
    if (this._skipExecSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipExecSessions = this._skipExecSessions;
    }
    if (this._wildfireAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireAnalysis = this._wildfireAnalysis;
    }
    if (this._customRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRule = this._customRule?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._filesystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._processes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedProtectionEffect = undefined;
      this._cloudMetadataEnforcementEffect = undefined;
      this._collections = undefined;
      this._disabled = undefined;
      this._kubernetesEnforcementEffect = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._previousName = undefined;
      this._skipExecSessions = undefined;
      this._wildfireAnalysis = undefined;
      this._customRule.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._filesystem.internalValue = undefined;
      this._network.internalValue = undefined;
      this._processes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedProtectionEffect = value.advancedProtectionEffect;
      this._cloudMetadataEnforcementEffect = value.cloudMetadataEnforcementEffect;
      this._collections = value.collections;
      this._disabled = value.disabled;
      this._kubernetesEnforcementEffect = value.kubernetesEnforcementEffect;
      this._name = value.name;
      this._notes = value.notes;
      this._previousName = value.previousName;
      this._skipExecSessions = value.skipExecSessions;
      this._wildfireAnalysis = value.wildfireAnalysis;
      this._customRule.internalValue = value.customRule;
      this._dns.internalValue = value.dns;
      this._filesystem.internalValue = value.filesystem;
      this._network.internalValue = value.network;
      this._processes.internalValue = value.processes;
    }
  }

  // advanced_protection_effect - computed: false, optional: true, required: false
  private _advancedProtectionEffect?: string; 
  public get advancedProtectionEffect() {
    return this.getStringAttribute('advanced_protection_effect');
  }
  public set advancedProtectionEffect(value: string) {
    this._advancedProtectionEffect = value;
  }
  public resetAdvancedProtectionEffect() {
    this._advancedProtectionEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedProtectionEffectInput() {
    return this._advancedProtectionEffect;
  }

  // cloud_metadata_enforcement_effect - computed: false, optional: true, required: false
  private _cloudMetadataEnforcementEffect?: string; 
  public get cloudMetadataEnforcementEffect() {
    return this.getStringAttribute('cloud_metadata_enforcement_effect');
  }
  public set cloudMetadataEnforcementEffect(value: string) {
    this._cloudMetadataEnforcementEffect = value;
  }
  public resetCloudMetadataEnforcementEffect() {
    this._cloudMetadataEnforcementEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudMetadataEnforcementEffectInput() {
    return this._cloudMetadataEnforcementEffect;
  }

  // collections - computed: false, optional: true, required: false
  private _collections?: string[]; 
  public get collections() {
    return this.getListAttribute('collections');
  }
  public set collections(value: string[]) {
    this._collections = value;
  }
  public resetCollections() {
    this._collections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // kubernetes_enforcement_effect - computed: false, optional: true, required: false
  private _kubernetesEnforcementEffect?: string; 
  public get kubernetesEnforcementEffect() {
    return this.getStringAttribute('kubernetes_enforcement_effect');
  }
  public set kubernetesEnforcementEffect(value: string) {
    this._kubernetesEnforcementEffect = value;
  }
  public resetKubernetesEnforcementEffect() {
    this._kubernetesEnforcementEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesEnforcementEffectInput() {
    return this._kubernetesEnforcementEffect;
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

  // previous_name - computed: false, optional: true, required: false
  private _previousName?: string; 
  public get previousName() {
    return this.getStringAttribute('previous_name');
  }
  public set previousName(value: string) {
    this._previousName = value;
  }
  public resetPreviousName() {
    this._previousName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousNameInput() {
    return this._previousName;
  }

  // skip_exec_sessions - computed: false, optional: true, required: false
  private _skipExecSessions?: boolean | cdktf.IResolvable; 
  public get skipExecSessions() {
    return this.getBooleanAttribute('skip_exec_sessions');
  }
  public set skipExecSessions(value: boolean | cdktf.IResolvable) {
    this._skipExecSessions = value;
  }
  public resetSkipExecSessions() {
    this._skipExecSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipExecSessionsInput() {
    return this._skipExecSessions;
  }

  // wildfire_analysis - computed: false, optional: true, required: false
  private _wildfireAnalysis?: string; 
  public get wildfireAnalysis() {
    return this.getStringAttribute('wildfire_analysis');
  }
  public set wildfireAnalysis(value: string) {
    this._wildfireAnalysis = value;
  }
  public resetWildfireAnalysis() {
    this._wildfireAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireAnalysisInput() {
    return this._wildfireAnalysis;
  }

  // custom_rule - computed: false, optional: true, required: false
  private _customRule = new ContainerRuntimePolicyRuleCustomRuleList(this, "custom_rule", false);
  public get customRule() {
    return this._customRule;
  }
  public putCustomRule(value: ContainerRuntimePolicyRuleCustomRule[] | cdktf.IResolvable) {
    this._customRule.internalValue = value;
  }
  public resetCustomRule() {
    this._customRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuleInput() {
    return this._customRule.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new ContainerRuntimePolicyRuleDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: ContainerRuntimePolicyRuleDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // filesystem - computed: false, optional: true, required: false
  private _filesystem = new ContainerRuntimePolicyRuleFilesystemOutputReference(this, "filesystem");
  public get filesystem() {
    return this._filesystem;
  }
  public putFilesystem(value: ContainerRuntimePolicyRuleFilesystem) {
    this._filesystem.internalValue = value;
  }
  public resetFilesystem() {
    this._filesystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ContainerRuntimePolicyRuleNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ContainerRuntimePolicyRuleNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // processes - computed: false, optional: true, required: false
  private _processes = new ContainerRuntimePolicyRuleProcessesOutputReference(this, "processes");
  public get processes() {
    return this._processes;
  }
  public putProcesses(value: ContainerRuntimePolicyRuleProcesses) {
    this._processes.internalValue = value;
  }
  public resetProcesses() {
    this._processes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes.internalValue;
  }
}

export class ContainerRuntimePolicyRuleList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRule[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRuleOutputReference {
    return new ContainerRuntimePolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy prismacloudcompute_container_runtime_policy}
*/
export class ContainerRuntimePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_container_runtime_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerRuntimePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerRuntimePolicy to import
  * @param importFromId The id of the existing ContainerRuntimePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerRuntimePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_container_runtime_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/container_runtime_policy prismacloudcompute_container_runtime_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerRuntimePolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ContainerRuntimePolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_container_runtime_policy',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._learningDisabled = config.learningDisabled;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // learning_disabled - computed: false, optional: true, required: false
  private _learningDisabled?: boolean | cdktf.IResolvable; 
  public get learningDisabled() {
    return this.getBooleanAttribute('learning_disabled');
  }
  public set learningDisabled(value: boolean | cdktf.IResolvable) {
    this._learningDisabled = value;
  }
  public resetLearningDisabled() {
    this._learningDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningDisabledInput() {
    return this._learningDisabled;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ContainerRuntimePolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ContainerRuntimePolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      learning_disabled: cdktf.booleanToTerraform(this._learningDisabled),
      rule: cdktf.listMapper(containerRuntimePolicyRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      learning_disabled: {
        value: cdktf.booleanToHclTerraform(this._learningDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rule: {
        value: cdktf.listMapperHcl(containerRuntimePolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
