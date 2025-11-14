// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallCasbprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#adom ObjectFirewallCasbprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#dynamic_sort_subtable ObjectFirewallCasbprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#id ObjectFirewallCasbprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#name ObjectFirewallCasbprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#scopetype ObjectFirewallCasbprofile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * saas_application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#saas_application ObjectFirewallCasbprofile#saas_application}
  */
  readonly saasApplication?: ObjectFirewallCasbprofileSaasApplication[] | cdktf.IResolvable;
}
export interface ObjectFirewallCasbprofileSaasApplicationAccessRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#action ObjectFirewallCasbprofile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#bypass ObjectFirewallCasbprofile#bypass}
  */
  readonly bypass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#name ObjectFirewallCasbprofile#name}
  */
  readonly name?: string;
}

export function objectFirewallCasbprofileSaasApplicationAccessRuleToTerraform(struct?: ObjectFirewallCasbprofileSaasApplicationAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    bypass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bypass),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectFirewallCasbprofileSaasApplicationAccessRuleToHclTerraform(struct?: ObjectFirewallCasbprofileSaasApplicationAccessRule | cdktf.IResolvable): any {
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
    bypass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bypass),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallCasbprofileSaasApplicationAccessRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallCasbprofileSaasApplicationAccessRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallCasbprofileSaasApplicationAccessRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._bypass = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._bypass = value.bypass;
      this._name = value.name;
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

  // bypass - computed: true, optional: true, required: false
  private _bypass?: string[]; 
  public get bypass() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass'));
  }
  public set bypass(value: string[]) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
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
}

export class ObjectFirewallCasbprofileSaasApplicationAccessRuleList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallCasbprofileSaasApplicationAccessRule[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallCasbprofileSaasApplicationAccessRuleOutputReference {
    return new ObjectFirewallCasbprofileSaasApplicationAccessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallCasbprofileSaasApplicationCustomControlOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#name ObjectFirewallCasbprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#user_input ObjectFirewallCasbprofile#user_input}
  */
  readonly userInput?: string[];
}

export function objectFirewallCasbprofileSaasApplicationCustomControlOptionToTerraform(struct?: ObjectFirewallCasbprofileSaasApplicationCustomControlOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_input: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userInput),
  }
}


export function objectFirewallCasbprofileSaasApplicationCustomControlOptionToHclTerraform(struct?: ObjectFirewallCasbprofileSaasApplicationCustomControlOption | cdktf.IResolvable): any {
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
    user_input: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userInput),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallCasbprofileSaasApplicationCustomControlOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallCasbprofileSaasApplicationCustomControlOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInput = this._userInput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallCasbprofileSaasApplicationCustomControlOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._userInput = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._userInput = value.userInput;
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

  // user_input - computed: true, optional: true, required: false
  private _userInput?: string[]; 
  public get userInput() {
    return cdktf.Fn.tolist(this.getListAttribute('user_input'));
  }
  public set userInput(value: string[]) {
    this._userInput = value;
  }
  public resetUserInput() {
    this._userInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInputInput() {
    return this._userInput;
  }
}

export class ObjectFirewallCasbprofileSaasApplicationCustomControlOptionList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallCasbprofileSaasApplicationCustomControlOption[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallCasbprofileSaasApplicationCustomControlOptionOutputReference {
    return new ObjectFirewallCasbprofileSaasApplicationCustomControlOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallCasbprofileSaasApplicationCustomControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#name ObjectFirewallCasbprofile#name}
  */
  readonly name?: string;
  /**
  * option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#option ObjectFirewallCasbprofile#option}
  */
  readonly option?: ObjectFirewallCasbprofileSaasApplicationCustomControlOption[] | cdktf.IResolvable;
}

export function objectFirewallCasbprofileSaasApplicationCustomControlToTerraform(struct?: ObjectFirewallCasbprofileSaasApplicationCustomControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    option: cdktf.listMapper(objectFirewallCasbprofileSaasApplicationCustomControlOptionToTerraform, true)(struct!.option),
  }
}


export function objectFirewallCasbprofileSaasApplicationCustomControlToHclTerraform(struct?: ObjectFirewallCasbprofileSaasApplicationCustomControl | cdktf.IResolvable): any {
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
    option: {
      value: cdktf.listMapperHcl(objectFirewallCasbprofileSaasApplicationCustomControlOptionToHclTerraform, true)(struct!.option),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallCasbprofileSaasApplicationCustomControlOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallCasbprofileSaasApplicationCustomControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallCasbprofileSaasApplicationCustomControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._option?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallCasbprofileSaasApplicationCustomControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._option.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._option.internalValue = value.option;
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

  // option - computed: false, optional: true, required: false
  private _option = new ObjectFirewallCasbprofileSaasApplicationCustomControlOptionList(this, "option", false);
  public get option() {
    return this._option;
  }
  public putOption(value: ObjectFirewallCasbprofileSaasApplicationCustomControlOption[] | cdktf.IResolvable) {
    this._option.internalValue = value;
  }
  public resetOption() {
    this._option.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option.internalValue;
  }
}

export class ObjectFirewallCasbprofileSaasApplicationCustomControlList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallCasbprofileSaasApplicationCustomControl[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallCasbprofileSaasApplicationCustomControlOutputReference {
    return new ObjectFirewallCasbprofileSaasApplicationCustomControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallCasbprofileSaasApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#domain_control ObjectFirewallCasbprofile#domain_control}
  */
  readonly domainControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#domain_control_domains ObjectFirewallCasbprofile#domain_control_domains}
  */
  readonly domainControlDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#log ObjectFirewallCasbprofile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#name ObjectFirewallCasbprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#safe_search ObjectFirewallCasbprofile#safe_search}
  */
  readonly safeSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#safe_search_control ObjectFirewallCasbprofile#safe_search_control}
  */
  readonly safeSearchControl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#tenant_control ObjectFirewallCasbprofile#tenant_control}
  */
  readonly tenantControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#tenant_control_tenants ObjectFirewallCasbprofile#tenant_control_tenants}
  */
  readonly tenantControlTenants?: string[];
  /**
  * access_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#access_rule ObjectFirewallCasbprofile#access_rule}
  */
  readonly accessRule?: ObjectFirewallCasbprofileSaasApplicationAccessRule[] | cdktf.IResolvable;
  /**
  * custom_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#custom_control ObjectFirewallCasbprofile#custom_control}
  */
  readonly customControl?: ObjectFirewallCasbprofileSaasApplicationCustomControl[] | cdktf.IResolvable;
}

export function objectFirewallCasbprofileSaasApplicationToTerraform(struct?: ObjectFirewallCasbprofileSaasApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_control: cdktf.stringToTerraform(struct!.domainControl),
    domain_control_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainControlDomains),
    log: cdktf.stringToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    safe_search: cdktf.stringToTerraform(struct!.safeSearch),
    safe_search_control: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.safeSearchControl),
    tenant_control: cdktf.stringToTerraform(struct!.tenantControl),
    tenant_control_tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantControlTenants),
    access_rule: cdktf.listMapper(objectFirewallCasbprofileSaasApplicationAccessRuleToTerraform, true)(struct!.accessRule),
    custom_control: cdktf.listMapper(objectFirewallCasbprofileSaasApplicationCustomControlToTerraform, true)(struct!.customControl),
  }
}


export function objectFirewallCasbprofileSaasApplicationToHclTerraform(struct?: ObjectFirewallCasbprofileSaasApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_control: {
      value: cdktf.stringToHclTerraform(struct!.domainControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_control_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainControlDomains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
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
    safe_search: {
      value: cdktf.stringToHclTerraform(struct!.safeSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    safe_search_control: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.safeSearchControl),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tenant_control: {
      value: cdktf.stringToHclTerraform(struct!.tenantControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_control_tenants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantControlTenants),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    access_rule: {
      value: cdktf.listMapperHcl(objectFirewallCasbprofileSaasApplicationAccessRuleToHclTerraform, true)(struct!.accessRule),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallCasbprofileSaasApplicationAccessRuleList",
    },
    custom_control: {
      value: cdktf.listMapperHcl(objectFirewallCasbprofileSaasApplicationCustomControlToHclTerraform, true)(struct!.customControl),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallCasbprofileSaasApplicationCustomControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallCasbprofileSaasApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallCasbprofileSaasApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainControl = this._domainControl;
    }
    if (this._domainControlDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainControlDomains = this._domainControlDomains;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._safeSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeSearch = this._safeSearch;
    }
    if (this._safeSearchControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeSearchControl = this._safeSearchControl;
    }
    if (this._tenantControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantControl = this._tenantControl;
    }
    if (this._tenantControlTenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantControlTenants = this._tenantControlTenants;
    }
    if (this._accessRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRule = this._accessRule?.internalValue;
    }
    if (this._customControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customControl = this._customControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallCasbprofileSaasApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainControl = undefined;
      this._domainControlDomains = undefined;
      this._log = undefined;
      this._name = undefined;
      this._safeSearch = undefined;
      this._safeSearchControl = undefined;
      this._tenantControl = undefined;
      this._tenantControlTenants = undefined;
      this._accessRule.internalValue = undefined;
      this._customControl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainControl = value.domainControl;
      this._domainControlDomains = value.domainControlDomains;
      this._log = value.log;
      this._name = value.name;
      this._safeSearch = value.safeSearch;
      this._safeSearchControl = value.safeSearchControl;
      this._tenantControl = value.tenantControl;
      this._tenantControlTenants = value.tenantControlTenants;
      this._accessRule.internalValue = value.accessRule;
      this._customControl.internalValue = value.customControl;
    }
  }

  // domain_control - computed: true, optional: true, required: false
  private _domainControl?: string; 
  public get domainControl() {
    return this.getStringAttribute('domain_control');
  }
  public set domainControl(value: string) {
    this._domainControl = value;
  }
  public resetDomainControl() {
    this._domainControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControlInput() {
    return this._domainControl;
  }

  // domain_control_domains - computed: true, optional: true, required: false
  private _domainControlDomains?: string[]; 
  public get domainControlDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_control_domains'));
  }
  public set domainControlDomains(value: string[]) {
    this._domainControlDomains = value;
  }
  public resetDomainControlDomains() {
    this._domainControlDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControlDomainsInput() {
    return this._domainControlDomains;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // safe_search - computed: true, optional: true, required: false
  private _safeSearch?: string; 
  public get safeSearch() {
    return this.getStringAttribute('safe_search');
  }
  public set safeSearch(value: string) {
    this._safeSearch = value;
  }
  public resetSafeSearch() {
    this._safeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeSearchInput() {
    return this._safeSearch;
  }

  // safe_search_control - computed: true, optional: true, required: false
  private _safeSearchControl?: string[]; 
  public get safeSearchControl() {
    return cdktf.Fn.tolist(this.getListAttribute('safe_search_control'));
  }
  public set safeSearchControl(value: string[]) {
    this._safeSearchControl = value;
  }
  public resetSafeSearchControl() {
    this._safeSearchControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeSearchControlInput() {
    return this._safeSearchControl;
  }

  // tenant_control - computed: true, optional: true, required: false
  private _tenantControl?: string; 
  public get tenantControl() {
    return this.getStringAttribute('tenant_control');
  }
  public set tenantControl(value: string) {
    this._tenantControl = value;
  }
  public resetTenantControl() {
    this._tenantControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantControlInput() {
    return this._tenantControl;
  }

  // tenant_control_tenants - computed: true, optional: true, required: false
  private _tenantControlTenants?: string[]; 
  public get tenantControlTenants() {
    return cdktf.Fn.tolist(this.getListAttribute('tenant_control_tenants'));
  }
  public set tenantControlTenants(value: string[]) {
    this._tenantControlTenants = value;
  }
  public resetTenantControlTenants() {
    this._tenantControlTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantControlTenantsInput() {
    return this._tenantControlTenants;
  }

  // access_rule - computed: false, optional: true, required: false
  private _accessRule = new ObjectFirewallCasbprofileSaasApplicationAccessRuleList(this, "access_rule", false);
  public get accessRule() {
    return this._accessRule;
  }
  public putAccessRule(value: ObjectFirewallCasbprofileSaasApplicationAccessRule[] | cdktf.IResolvable) {
    this._accessRule.internalValue = value;
  }
  public resetAccessRule() {
    this._accessRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRuleInput() {
    return this._accessRule.internalValue;
  }

  // custom_control - computed: false, optional: true, required: false
  private _customControl = new ObjectFirewallCasbprofileSaasApplicationCustomControlList(this, "custom_control", false);
  public get customControl() {
    return this._customControl;
  }
  public putCustomControl(value: ObjectFirewallCasbprofileSaasApplicationCustomControl[] | cdktf.IResolvable) {
    this._customControl.internalValue = value;
  }
  public resetCustomControl() {
    this._customControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customControlInput() {
    return this._customControl.internalValue;
  }
}

export class ObjectFirewallCasbprofileSaasApplicationList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallCasbprofileSaasApplication[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallCasbprofileSaasApplicationOutputReference {
    return new ObjectFirewallCasbprofileSaasApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile fortimanager_object_firewall_casbprofile}
*/
export class ObjectFirewallCasbprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_casbprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallCasbprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallCasbprofile to import
  * @param importFromId The id of the existing ObjectFirewallCasbprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallCasbprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_casbprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile fortimanager_object_firewall_casbprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallCasbprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallCasbprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_casbprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._saasApplication.internalValue = config.saasApplication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // saas_application - computed: false, optional: true, required: false
  private _saasApplication = new ObjectFirewallCasbprofileSaasApplicationList(this, "saas_application", false);
  public get saasApplication() {
    return this._saasApplication;
  }
  public putSaasApplication(value: ObjectFirewallCasbprofileSaasApplication[] | cdktf.IResolvable) {
    this._saasApplication.internalValue = value;
  }
  public resetSaasApplication() {
    this._saasApplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasApplicationInput() {
    return this._saasApplication.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      saas_application: cdktf.listMapper(objectFirewallCasbprofileSaasApplicationToTerraform, true)(this._saasApplication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saas_application: {
        value: cdktf.listMapperHcl(objectFirewallCasbprofileSaasApplicationToHclTerraform, true)(this._saasApplication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallCasbprofileSaasApplicationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
