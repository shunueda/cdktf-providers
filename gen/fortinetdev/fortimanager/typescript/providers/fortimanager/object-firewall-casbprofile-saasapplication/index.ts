// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallCasbprofileSaasapplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#adom ObjectFirewallCasbprofileSaasapplication#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#casb_profile ObjectFirewallCasbprofileSaasapplication#casb_profile}
  */
  readonly casbProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#domain_control ObjectFirewallCasbprofileSaasapplication#domain_control}
  */
  readonly domainControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#domain_control_domains ObjectFirewallCasbprofileSaasapplication#domain_control_domains}
  */
  readonly domainControlDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#dynamic_sort_subtable ObjectFirewallCasbprofileSaasapplication#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#id ObjectFirewallCasbprofileSaasapplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#log ObjectFirewallCasbprofileSaasapplication#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#name ObjectFirewallCasbprofileSaasapplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#safe_search ObjectFirewallCasbprofileSaasapplication#safe_search}
  */
  readonly safeSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#safe_search_control ObjectFirewallCasbprofileSaasapplication#safe_search_control}
  */
  readonly safeSearchControl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#scopetype ObjectFirewallCasbprofileSaasapplication#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#tenant_control ObjectFirewallCasbprofileSaasapplication#tenant_control}
  */
  readonly tenantControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#tenant_control_tenants ObjectFirewallCasbprofileSaasapplication#tenant_control_tenants}
  */
  readonly tenantControlTenants?: string[];
  /**
  * access_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#access_rule ObjectFirewallCasbprofileSaasapplication#access_rule}
  */
  readonly accessRule?: ObjectFirewallCasbprofileSaasapplicationAccessRule[] | cdktf.IResolvable;
  /**
  * custom_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#custom_control ObjectFirewallCasbprofileSaasapplication#custom_control}
  */
  readonly customControl?: ObjectFirewallCasbprofileSaasapplicationCustomControl[] | cdktf.IResolvable;
}
export interface ObjectFirewallCasbprofileSaasapplicationAccessRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#action ObjectFirewallCasbprofileSaasapplication#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#bypass ObjectFirewallCasbprofileSaasapplication#bypass}
  */
  readonly bypass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#name ObjectFirewallCasbprofileSaasapplication#name}
  */
  readonly name?: string;
}

export function objectFirewallCasbprofileSaasapplicationAccessRuleToTerraform(struct?: ObjectFirewallCasbprofileSaasapplicationAccessRule | cdktf.IResolvable): any {
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


export function objectFirewallCasbprofileSaasapplicationAccessRuleToHclTerraform(struct?: ObjectFirewallCasbprofileSaasapplicationAccessRule | cdktf.IResolvable): any {
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

export class ObjectFirewallCasbprofileSaasapplicationAccessRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallCasbprofileSaasapplicationAccessRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallCasbprofileSaasapplicationAccessRule | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallCasbprofileSaasapplicationAccessRuleList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallCasbprofileSaasapplicationAccessRule[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallCasbprofileSaasapplicationAccessRuleOutputReference {
    return new ObjectFirewallCasbprofileSaasapplicationAccessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallCasbprofileSaasapplicationCustomControlOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#name ObjectFirewallCasbprofileSaasapplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#user_input ObjectFirewallCasbprofileSaasapplication#user_input}
  */
  readonly userInput?: string[];
}

export function objectFirewallCasbprofileSaasapplicationCustomControlOptionToTerraform(struct?: ObjectFirewallCasbprofileSaasapplicationCustomControlOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_input: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userInput),
  }
}


export function objectFirewallCasbprofileSaasapplicationCustomControlOptionToHclTerraform(struct?: ObjectFirewallCasbprofileSaasapplicationCustomControlOption | cdktf.IResolvable): any {
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

export class ObjectFirewallCasbprofileSaasapplicationCustomControlOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallCasbprofileSaasapplicationCustomControlOption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallCasbprofileSaasapplicationCustomControlOption | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallCasbprofileSaasapplicationCustomControlOptionList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallCasbprofileSaasapplicationCustomControlOption[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallCasbprofileSaasapplicationCustomControlOptionOutputReference {
    return new ObjectFirewallCasbprofileSaasapplicationCustomControlOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallCasbprofileSaasapplicationCustomControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#name ObjectFirewallCasbprofileSaasapplication#name}
  */
  readonly name?: string;
  /**
  * option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#option ObjectFirewallCasbprofileSaasapplication#option}
  */
  readonly option?: ObjectFirewallCasbprofileSaasapplicationCustomControlOption[] | cdktf.IResolvable;
}

export function objectFirewallCasbprofileSaasapplicationCustomControlToTerraform(struct?: ObjectFirewallCasbprofileSaasapplicationCustomControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    option: cdktf.listMapper(objectFirewallCasbprofileSaasapplicationCustomControlOptionToTerraform, true)(struct!.option),
  }
}


export function objectFirewallCasbprofileSaasapplicationCustomControlToHclTerraform(struct?: ObjectFirewallCasbprofileSaasapplicationCustomControl | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(objectFirewallCasbprofileSaasapplicationCustomControlOptionToHclTerraform, true)(struct!.option),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallCasbprofileSaasapplicationCustomControlOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallCasbprofileSaasapplicationCustomControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallCasbprofileSaasapplicationCustomControl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallCasbprofileSaasapplicationCustomControl | cdktf.IResolvable | undefined) {
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
  private _option = new ObjectFirewallCasbprofileSaasapplicationCustomControlOptionList(this, "option", false);
  public get option() {
    return this._option;
  }
  public putOption(value: ObjectFirewallCasbprofileSaasapplicationCustomControlOption[] | cdktf.IResolvable) {
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

export class ObjectFirewallCasbprofileSaasapplicationCustomControlList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallCasbprofileSaasapplicationCustomControl[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallCasbprofileSaasapplicationCustomControlOutputReference {
    return new ObjectFirewallCasbprofileSaasapplicationCustomControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication fortimanager_object_firewall_casbprofile_saasapplication}
*/
export class ObjectFirewallCasbprofileSaasapplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_casbprofile_saasapplication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallCasbprofileSaasapplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallCasbprofileSaasapplication to import
  * @param importFromId The id of the existing ObjectFirewallCasbprofileSaasapplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallCasbprofileSaasapplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_casbprofile_saasapplication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication fortimanager_object_firewall_casbprofile_saasapplication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallCasbprofileSaasapplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallCasbprofileSaasapplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_casbprofile_saasapplication',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._casbProfile = config.casbProfile;
    this._domainControl = config.domainControl;
    this._domainControlDomains = config.domainControlDomains;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._log = config.log;
    this._name = config.name;
    this._safeSearch = config.safeSearch;
    this._safeSearchControl = config.safeSearchControl;
    this._scopetype = config.scopetype;
    this._tenantControl = config.tenantControl;
    this._tenantControlTenants = config.tenantControlTenants;
    this._accessRule.internalValue = config.accessRule;
    this._customControl.internalValue = config.customControl;
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

  // casb_profile - computed: false, optional: false, required: true
  private _casbProfile?: string; 
  public get casbProfile() {
    return this.getStringAttribute('casb_profile');
  }
  public set casbProfile(value: string) {
    this._casbProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get casbProfileInput() {
    return this._casbProfile;
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
  private _accessRule = new ObjectFirewallCasbprofileSaasapplicationAccessRuleList(this, "access_rule", false);
  public get accessRule() {
    return this._accessRule;
  }
  public putAccessRule(value: ObjectFirewallCasbprofileSaasapplicationAccessRule[] | cdktf.IResolvable) {
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
  private _customControl = new ObjectFirewallCasbprofileSaasapplicationCustomControlList(this, "custom_control", false);
  public get customControl() {
    return this._customControl;
  }
  public putCustomControl(value: ObjectFirewallCasbprofileSaasapplicationCustomControl[] | cdktf.IResolvable) {
    this._customControl.internalValue = value;
  }
  public resetCustomControl() {
    this._customControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customControlInput() {
    return this._customControl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      casb_profile: cdktf.stringToTerraform(this._casbProfile),
      domain_control: cdktf.stringToTerraform(this._domainControl),
      domain_control_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainControlDomains),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      log: cdktf.stringToTerraform(this._log),
      name: cdktf.stringToTerraform(this._name),
      safe_search: cdktf.stringToTerraform(this._safeSearch),
      safe_search_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._safeSearchControl),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      tenant_control: cdktf.stringToTerraform(this._tenantControl),
      tenant_control_tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantControlTenants),
      access_rule: cdktf.listMapper(objectFirewallCasbprofileSaasapplicationAccessRuleToTerraform, true)(this._accessRule.internalValue),
      custom_control: cdktf.listMapper(objectFirewallCasbprofileSaasapplicationCustomControlToTerraform, true)(this._customControl.internalValue),
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
      casb_profile: {
        value: cdktf.stringToHclTerraform(this._casbProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_control: {
        value: cdktf.stringToHclTerraform(this._domainControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_control_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainControlDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      log: {
        value: cdktf.stringToHclTerraform(this._log),
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
      safe_search: {
        value: cdktf.stringToHclTerraform(this._safeSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      safe_search_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._safeSearchControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_control: {
        value: cdktf.stringToHclTerraform(this._tenantControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_control_tenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantControlTenants),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      access_rule: {
        value: cdktf.listMapperHcl(objectFirewallCasbprofileSaasapplicationAccessRuleToHclTerraform, true)(this._accessRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallCasbprofileSaasapplicationAccessRuleList",
      },
      custom_control: {
        value: cdktf.listMapperHcl(objectFirewallCasbprofileSaasapplicationCustomControlToHclTerraform, true)(this._customControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallCasbprofileSaasapplicationCustomControlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
