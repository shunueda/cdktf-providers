// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectCasbProfileSaasapplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#adom ObjectCasbProfileSaasapplication#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#domain_control ObjectCasbProfileSaasapplication#domain_control}
  */
  readonly domainControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#domain_control_domains ObjectCasbProfileSaasapplication#domain_control_domains}
  */
  readonly domainControlDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#dynamic_sort_subtable ObjectCasbProfileSaasapplication#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#id ObjectCasbProfileSaasapplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#log ObjectCasbProfileSaasapplication#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#name ObjectCasbProfileSaasapplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#profile ObjectCasbProfileSaasapplication#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#safe_search ObjectCasbProfileSaasapplication#safe_search}
  */
  readonly safeSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#safe_search_control ObjectCasbProfileSaasapplication#safe_search_control}
  */
  readonly safeSearchControl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#scopetype ObjectCasbProfileSaasapplication#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#status ObjectCasbProfileSaasapplication#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#tenant_control ObjectCasbProfileSaasapplication#tenant_control}
  */
  readonly tenantControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#tenant_control_tenants ObjectCasbProfileSaasapplication#tenant_control_tenants}
  */
  readonly tenantControlTenants?: string[];
  /**
  * access_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#access_rule ObjectCasbProfileSaasapplication#access_rule}
  */
  readonly accessRule?: ObjectCasbProfileSaasapplicationAccessRule[] | cdktf.IResolvable;
  /**
  * advanced_tenant_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#advanced_tenant_control ObjectCasbProfileSaasapplication#advanced_tenant_control}
  */
  readonly advancedTenantControl?: ObjectCasbProfileSaasapplicationAdvancedTenantControl[] | cdktf.IResolvable;
  /**
  * custom_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#custom_control ObjectCasbProfileSaasapplication#custom_control}
  */
  readonly customControl?: ObjectCasbProfileSaasapplicationCustomControl[] | cdktf.IResolvable;
}
export interface ObjectCasbProfileSaasapplicationAccessRuleAttributeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#action ObjectCasbProfileSaasapplication#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#attribute_match ObjectCasbProfileSaasapplication#attribute_match}
  */
  readonly attributeMatch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#id ObjectCasbProfileSaasapplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function objectCasbProfileSaasapplicationAccessRuleAttributeFilterToTerraform(struct?: ObjectCasbProfileSaasapplicationAccessRuleAttributeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    attribute_match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeMatch),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function objectCasbProfileSaasapplicationAccessRuleAttributeFilterToHclTerraform(struct?: ObjectCasbProfileSaasapplicationAccessRuleAttributeFilter | cdktf.IResolvable): any {
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
    attribute_match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeMatch),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ObjectCasbProfileSaasapplicationAccessRuleAttributeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasapplicationAccessRuleAttributeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._attributeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMatch = this._attributeMatch;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectCasbProfileSaasapplicationAccessRuleAttributeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._attributeMatch = undefined;
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
      this._attributeMatch = value.attributeMatch;
      this._id = value.id;
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

  // attribute_match - computed: true, optional: true, required: false
  private _attributeMatch?: string[]; 
  public get attributeMatch() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_match'));
  }
  public set attributeMatch(value: string[]) {
    this._attributeMatch = value;
  }
  public resetAttributeMatch() {
    this._attributeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMatchInput() {
    return this._attributeMatch;
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

export class ObjectCasbProfileSaasapplicationAccessRuleAttributeFilterList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasapplicationAccessRuleAttributeFilter[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasapplicationAccessRuleAttributeFilterOutputReference {
    return new ObjectCasbProfileSaasapplicationAccessRuleAttributeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasapplicationAccessRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#action ObjectCasbProfileSaasapplication#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#bypass ObjectCasbProfileSaasapplication#bypass}
  */
  readonly bypass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#name ObjectCasbProfileSaasapplication#name}
  */
  readonly name?: string;
  /**
  * attribute_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#attribute_filter ObjectCasbProfileSaasapplication#attribute_filter}
  */
  readonly attributeFilter?: ObjectCasbProfileSaasapplicationAccessRuleAttributeFilter[] | cdktf.IResolvable;
}

export function objectCasbProfileSaasapplicationAccessRuleToTerraform(struct?: ObjectCasbProfileSaasapplicationAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    bypass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bypass),
    name: cdktf.stringToTerraform(struct!.name),
    attribute_filter: cdktf.listMapper(objectCasbProfileSaasapplicationAccessRuleAttributeFilterToTerraform, true)(struct!.attributeFilter),
  }
}


export function objectCasbProfileSaasapplicationAccessRuleToHclTerraform(struct?: ObjectCasbProfileSaasapplicationAccessRule | cdktf.IResolvable): any {
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
    attribute_filter: {
      value: cdktf.listMapperHcl(objectCasbProfileSaasapplicationAccessRuleAttributeFilterToHclTerraform, true)(struct!.attributeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasapplicationAccessRuleAttributeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectCasbProfileSaasapplicationAccessRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasapplicationAccessRule | cdktf.IResolvable | undefined {
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
    if (this._attributeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeFilter = this._attributeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectCasbProfileSaasapplicationAccessRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._bypass = undefined;
      this._name = undefined;
      this._attributeFilter.internalValue = undefined;
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
      this._attributeFilter.internalValue = value.attributeFilter;
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

  // attribute_filter - computed: false, optional: true, required: false
  private _attributeFilter = new ObjectCasbProfileSaasapplicationAccessRuleAttributeFilterList(this, "attribute_filter", false);
  public get attributeFilter() {
    return this._attributeFilter;
  }
  public putAttributeFilter(value: ObjectCasbProfileSaasapplicationAccessRuleAttributeFilter[] | cdktf.IResolvable) {
    this._attributeFilter.internalValue = value;
  }
  public resetAttributeFilter() {
    this._attributeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeFilterInput() {
    return this._attributeFilter.internalValue;
  }
}

export class ObjectCasbProfileSaasapplicationAccessRuleList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasapplicationAccessRule[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasapplicationAccessRuleOutputReference {
    return new ObjectCasbProfileSaasapplicationAccessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasapplicationAdvancedTenantControlAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#input ObjectCasbProfileSaasapplication#input}
  */
  readonly input?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#name ObjectCasbProfileSaasapplication#name}
  */
  readonly name?: string;
}

export function objectCasbProfileSaasapplicationAdvancedTenantControlAttributeToTerraform(struct?: ObjectCasbProfileSaasapplicationAdvancedTenantControlAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.input),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectCasbProfileSaasapplicationAdvancedTenantControlAttributeToHclTerraform(struct?: ObjectCasbProfileSaasapplicationAdvancedTenantControlAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.input),
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

export class ObjectCasbProfileSaasapplicationAdvancedTenantControlAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasapplicationAdvancedTenantControlAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectCasbProfileSaasapplicationAdvancedTenantControlAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
      this._name = value.name;
    }
  }

  // input - computed: true, optional: true, required: false
  private _input?: string[]; 
  public get input() {
    return cdktf.Fn.tolist(this.getListAttribute('input'));
  }
  public set input(value: string[]) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
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

export class ObjectCasbProfileSaasapplicationAdvancedTenantControlAttributeList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasapplicationAdvancedTenantControlAttribute[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasapplicationAdvancedTenantControlAttributeOutputReference {
    return new ObjectCasbProfileSaasapplicationAdvancedTenantControlAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasapplicationAdvancedTenantControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#name ObjectCasbProfileSaasapplication#name}
  */
  readonly name?: string[];
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#attribute ObjectCasbProfileSaasapplication#attribute}
  */
  readonly attribute?: ObjectCasbProfileSaasapplicationAdvancedTenantControlAttribute[] | cdktf.IResolvable;
}

export function objectCasbProfileSaasapplicationAdvancedTenantControlToTerraform(struct?: ObjectCasbProfileSaasapplicationAdvancedTenantControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    attribute: cdktf.listMapper(objectCasbProfileSaasapplicationAdvancedTenantControlAttributeToTerraform, true)(struct!.attribute),
  }
}


export function objectCasbProfileSaasapplicationAdvancedTenantControlToHclTerraform(struct?: ObjectCasbProfileSaasapplicationAdvancedTenantControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktf.listMapperHcl(objectCasbProfileSaasapplicationAdvancedTenantControlAttributeToHclTerraform, true)(struct!.attribute),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasapplicationAdvancedTenantControlAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectCasbProfileSaasapplicationAdvancedTenantControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasapplicationAdvancedTenantControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._attribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectCasbProfileSaasapplicationAdvancedTenantControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._attribute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._attribute.internalValue = value.attribute;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute = new ObjectCasbProfileSaasapplicationAdvancedTenantControlAttributeList(this, "attribute", false);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: ObjectCasbProfileSaasapplicationAdvancedTenantControlAttribute[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }
}

export class ObjectCasbProfileSaasapplicationAdvancedTenantControlList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasapplicationAdvancedTenantControl[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasapplicationAdvancedTenantControlOutputReference {
    return new ObjectCasbProfileSaasapplicationAdvancedTenantControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasapplicationCustomControlAttributeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#action ObjectCasbProfileSaasapplication#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#attribute_match ObjectCasbProfileSaasapplication#attribute_match}
  */
  readonly attributeMatch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#id ObjectCasbProfileSaasapplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function objectCasbProfileSaasapplicationCustomControlAttributeFilterToTerraform(struct?: ObjectCasbProfileSaasapplicationCustomControlAttributeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    attribute_match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeMatch),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function objectCasbProfileSaasapplicationCustomControlAttributeFilterToHclTerraform(struct?: ObjectCasbProfileSaasapplicationCustomControlAttributeFilter | cdktf.IResolvable): any {
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
    attribute_match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeMatch),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ObjectCasbProfileSaasapplicationCustomControlAttributeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasapplicationCustomControlAttributeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._attributeMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMatch = this._attributeMatch;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectCasbProfileSaasapplicationCustomControlAttributeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._attributeMatch = undefined;
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
      this._attributeMatch = value.attributeMatch;
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

  // attribute_match - computed: true, optional: true, required: false
  private _attributeMatch?: string[]; 
  public get attributeMatch() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_match'));
  }
  public set attributeMatch(value: string[]) {
    this._attributeMatch = value;
  }
  public resetAttributeMatch() {
    this._attributeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMatchInput() {
    return this._attributeMatch;
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

export class ObjectCasbProfileSaasapplicationCustomControlAttributeFilterList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasapplicationCustomControlAttributeFilter[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasapplicationCustomControlAttributeFilterOutputReference {
    return new ObjectCasbProfileSaasapplicationCustomControlAttributeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasapplicationCustomControlOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#name ObjectCasbProfileSaasapplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#user_input ObjectCasbProfileSaasapplication#user_input}
  */
  readonly userInput?: string[];
}

export function objectCasbProfileSaasapplicationCustomControlOptionToTerraform(struct?: ObjectCasbProfileSaasapplicationCustomControlOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_input: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userInput),
  }
}


export function objectCasbProfileSaasapplicationCustomControlOptionToHclTerraform(struct?: ObjectCasbProfileSaasapplicationCustomControlOption | cdktf.IResolvable): any {
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

export class ObjectCasbProfileSaasapplicationCustomControlOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasapplicationCustomControlOption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectCasbProfileSaasapplicationCustomControlOption | cdktf.IResolvable | undefined) {
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

export class ObjectCasbProfileSaasapplicationCustomControlOptionList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasapplicationCustomControlOption[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasapplicationCustomControlOptionOutputReference {
    return new ObjectCasbProfileSaasapplicationCustomControlOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasapplicationCustomControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#name ObjectCasbProfileSaasapplication#name}
  */
  readonly name?: string;
  /**
  * attribute_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#attribute_filter ObjectCasbProfileSaasapplication#attribute_filter}
  */
  readonly attributeFilter?: ObjectCasbProfileSaasapplicationCustomControlAttributeFilter[] | cdktf.IResolvable;
  /**
  * option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#option ObjectCasbProfileSaasapplication#option}
  */
  readonly option?: ObjectCasbProfileSaasapplicationCustomControlOption[] | cdktf.IResolvable;
}

export function objectCasbProfileSaasapplicationCustomControlToTerraform(struct?: ObjectCasbProfileSaasapplicationCustomControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    attribute_filter: cdktf.listMapper(objectCasbProfileSaasapplicationCustomControlAttributeFilterToTerraform, true)(struct!.attributeFilter),
    option: cdktf.listMapper(objectCasbProfileSaasapplicationCustomControlOptionToTerraform, true)(struct!.option),
  }
}


export function objectCasbProfileSaasapplicationCustomControlToHclTerraform(struct?: ObjectCasbProfileSaasapplicationCustomControl | cdktf.IResolvable): any {
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
    attribute_filter: {
      value: cdktf.listMapperHcl(objectCasbProfileSaasapplicationCustomControlAttributeFilterToHclTerraform, true)(struct!.attributeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasapplicationCustomControlAttributeFilterList",
    },
    option: {
      value: cdktf.listMapperHcl(objectCasbProfileSaasapplicationCustomControlOptionToHclTerraform, true)(struct!.option),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasapplicationCustomControlOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectCasbProfileSaasapplicationCustomControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasapplicationCustomControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._attributeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeFilter = this._attributeFilter?.internalValue;
    }
    if (this._option?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectCasbProfileSaasapplicationCustomControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._attributeFilter.internalValue = undefined;
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
      this._attributeFilter.internalValue = value.attributeFilter;
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

  // attribute_filter - computed: false, optional: true, required: false
  private _attributeFilter = new ObjectCasbProfileSaasapplicationCustomControlAttributeFilterList(this, "attribute_filter", false);
  public get attributeFilter() {
    return this._attributeFilter;
  }
  public putAttributeFilter(value: ObjectCasbProfileSaasapplicationCustomControlAttributeFilter[] | cdktf.IResolvable) {
    this._attributeFilter.internalValue = value;
  }
  public resetAttributeFilter() {
    this._attributeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeFilterInput() {
    return this._attributeFilter.internalValue;
  }

  // option - computed: false, optional: true, required: false
  private _option = new ObjectCasbProfileSaasapplicationCustomControlOptionList(this, "option", false);
  public get option() {
    return this._option;
  }
  public putOption(value: ObjectCasbProfileSaasapplicationCustomControlOption[] | cdktf.IResolvable) {
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

export class ObjectCasbProfileSaasapplicationCustomControlList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasapplicationCustomControl[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasapplicationCustomControlOutputReference {
    return new ObjectCasbProfileSaasapplicationCustomControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication fortimanager_object_casb_profile_saasapplication}
*/
export class ObjectCasbProfileSaasapplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_casb_profile_saasapplication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectCasbProfileSaasapplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectCasbProfileSaasapplication to import
  * @param importFromId The id of the existing ObjectCasbProfileSaasapplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectCasbProfileSaasapplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_casb_profile_saasapplication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication fortimanager_object_casb_profile_saasapplication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectCasbProfileSaasapplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectCasbProfileSaasapplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_casb_profile_saasapplication',
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
    this._domainControl = config.domainControl;
    this._domainControlDomains = config.domainControlDomains;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._log = config.log;
    this._name = config.name;
    this._profile = config.profile;
    this._safeSearch = config.safeSearch;
    this._safeSearchControl = config.safeSearchControl;
    this._scopetype = config.scopetype;
    this._status = config.status;
    this._tenantControl = config.tenantControl;
    this._tenantControlTenants = config.tenantControlTenants;
    this._accessRule.internalValue = config.accessRule;
    this._advancedTenantControl.internalValue = config.advancedTenantControl;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
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
  private _accessRule = new ObjectCasbProfileSaasapplicationAccessRuleList(this, "access_rule", false);
  public get accessRule() {
    return this._accessRule;
  }
  public putAccessRule(value: ObjectCasbProfileSaasapplicationAccessRule[] | cdktf.IResolvable) {
    this._accessRule.internalValue = value;
  }
  public resetAccessRule() {
    this._accessRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRuleInput() {
    return this._accessRule.internalValue;
  }

  // advanced_tenant_control - computed: false, optional: true, required: false
  private _advancedTenantControl = new ObjectCasbProfileSaasapplicationAdvancedTenantControlList(this, "advanced_tenant_control", false);
  public get advancedTenantControl() {
    return this._advancedTenantControl;
  }
  public putAdvancedTenantControl(value: ObjectCasbProfileSaasapplicationAdvancedTenantControl[] | cdktf.IResolvable) {
    this._advancedTenantControl.internalValue = value;
  }
  public resetAdvancedTenantControl() {
    this._advancedTenantControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedTenantControlInput() {
    return this._advancedTenantControl.internalValue;
  }

  // custom_control - computed: false, optional: true, required: false
  private _customControl = new ObjectCasbProfileSaasapplicationCustomControlList(this, "custom_control", false);
  public get customControl() {
    return this._customControl;
  }
  public putCustomControl(value: ObjectCasbProfileSaasapplicationCustomControl[] | cdktf.IResolvable) {
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
      domain_control: cdktf.stringToTerraform(this._domainControl),
      domain_control_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainControlDomains),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      log: cdktf.stringToTerraform(this._log),
      name: cdktf.stringToTerraform(this._name),
      profile: cdktf.stringToTerraform(this._profile),
      safe_search: cdktf.stringToTerraform(this._safeSearch),
      safe_search_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._safeSearchControl),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
      tenant_control: cdktf.stringToTerraform(this._tenantControl),
      tenant_control_tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantControlTenants),
      access_rule: cdktf.listMapper(objectCasbProfileSaasapplicationAccessRuleToTerraform, true)(this._accessRule.internalValue),
      advanced_tenant_control: cdktf.listMapper(objectCasbProfileSaasapplicationAdvancedTenantControlToTerraform, true)(this._advancedTenantControl.internalValue),
      custom_control: cdktf.listMapper(objectCasbProfileSaasapplicationCustomControlToTerraform, true)(this._customControl.internalValue),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
        value: cdktf.listMapperHcl(objectCasbProfileSaasapplicationAccessRuleToHclTerraform, true)(this._accessRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectCasbProfileSaasapplicationAccessRuleList",
      },
      advanced_tenant_control: {
        value: cdktf.listMapperHcl(objectCasbProfileSaasapplicationAdvancedTenantControlToHclTerraform, true)(this._advancedTenantControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectCasbProfileSaasapplicationAdvancedTenantControlList",
      },
      custom_control: {
        value: cdktf.listMapperHcl(objectCasbProfileSaasapplicationCustomControlToHclTerraform, true)(this._customControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectCasbProfileSaasapplicationCustomControlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
