// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CasbProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#comment CasbProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#dynamic_sort_subtable CasbProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#get_all_tables CasbProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#id CasbProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#name CasbProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#vdomparam CasbProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * saas_application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#saas_application CasbProfile#saas_application}
  */
  readonly saasApplication?: CasbProfileSaasApplication[] | cdktf.IResolvable;
}
export interface CasbProfileSaasApplicationAccessRuleAttributeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#action CasbProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#attribute_match CasbProfile#attribute_match}
  */
  readonly attributeMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#id CasbProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function casbProfileSaasApplicationAccessRuleAttributeFilterToTerraform(struct?: CasbProfileSaasApplicationAccessRuleAttributeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    attribute_match: cdktf.stringToTerraform(struct!.attributeMatch),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function casbProfileSaasApplicationAccessRuleAttributeFilterToHclTerraform(struct?: CasbProfileSaasApplicationAccessRuleAttributeFilter | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.attributeMatch),
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

export class CasbProfileSaasApplicationAccessRuleAttributeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationAccessRuleAttributeFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbProfileSaasApplicationAccessRuleAttributeFilter | cdktf.IResolvable | undefined) {
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

  // attribute_match - computed: false, optional: true, required: false
  private _attributeMatch?: string; 
  public get attributeMatch() {
    return this.getStringAttribute('attribute_match');
  }
  public set attributeMatch(value: string) {
    this._attributeMatch = value;
  }
  public resetAttributeMatch() {
    this._attributeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMatchInput() {
    return this._attributeMatch;
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
}

export class CasbProfileSaasApplicationAccessRuleAttributeFilterList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationAccessRuleAttributeFilter[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationAccessRuleAttributeFilterOutputReference {
    return new CasbProfileSaasApplicationAccessRuleAttributeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationAccessRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#action CasbProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#bypass CasbProfile#bypass}
  */
  readonly bypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#name CasbProfile#name}
  */
  readonly name?: string;
  /**
  * attribute_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#attribute_filter CasbProfile#attribute_filter}
  */
  readonly attributeFilter?: CasbProfileSaasApplicationAccessRuleAttributeFilter[] | cdktf.IResolvable;
}

export function casbProfileSaasApplicationAccessRuleToTerraform(struct?: CasbProfileSaasApplicationAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    bypass: cdktf.stringToTerraform(struct!.bypass),
    name: cdktf.stringToTerraform(struct!.name),
    attribute_filter: cdktf.listMapper(casbProfileSaasApplicationAccessRuleAttributeFilterToTerraform, true)(struct!.attributeFilter),
  }
}


export function casbProfileSaasApplicationAccessRuleToHclTerraform(struct?: CasbProfileSaasApplicationAccessRule | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.bypass),
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
    attribute_filter: {
      value: cdktf.listMapperHcl(casbProfileSaasApplicationAccessRuleAttributeFilterToHclTerraform, true)(struct!.attributeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "CasbProfileSaasApplicationAccessRuleAttributeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasbProfileSaasApplicationAccessRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationAccessRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbProfileSaasApplicationAccessRule | cdktf.IResolvable | undefined) {
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

  // bypass - computed: false, optional: true, required: false
  private _bypass?: string; 
  public get bypass() {
    return this.getStringAttribute('bypass');
  }
  public set bypass(value: string) {
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
  private _attributeFilter = new CasbProfileSaasApplicationAccessRuleAttributeFilterList(this, "attribute_filter", false);
  public get attributeFilter() {
    return this._attributeFilter;
  }
  public putAttributeFilter(value: CasbProfileSaasApplicationAccessRuleAttributeFilter[] | cdktf.IResolvable) {
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

export class CasbProfileSaasApplicationAccessRuleList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationAccessRule[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationAccessRuleOutputReference {
    return new CasbProfileSaasApplicationAccessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationAdvancedTenantControlAttributeInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#value CasbProfile#value}
  */
  readonly value?: string;
}

export function casbProfileSaasApplicationAdvancedTenantControlAttributeInputToTerraform(struct?: CasbProfileSaasApplicationAdvancedTenantControlAttributeInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function casbProfileSaasApplicationAdvancedTenantControlAttributeInputToHclTerraform(struct?: CasbProfileSaasApplicationAdvancedTenantControlAttributeInput | cdktf.IResolvable): any {
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

export class CasbProfileSaasApplicationAdvancedTenantControlAttributeInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationAdvancedTenantControlAttributeInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbProfileSaasApplicationAdvancedTenantControlAttributeInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CasbProfileSaasApplicationAdvancedTenantControlAttributeInputList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationAdvancedTenantControlAttributeInput[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationAdvancedTenantControlAttributeInputOutputReference {
    return new CasbProfileSaasApplicationAdvancedTenantControlAttributeInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationAdvancedTenantControlAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#name CasbProfile#name}
  */
  readonly name?: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#input CasbProfile#input}
  */
  readonly input?: CasbProfileSaasApplicationAdvancedTenantControlAttributeInput[] | cdktf.IResolvable;
}

export function casbProfileSaasApplicationAdvancedTenantControlAttributeToTerraform(struct?: CasbProfileSaasApplicationAdvancedTenantControlAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    input: cdktf.listMapper(casbProfileSaasApplicationAdvancedTenantControlAttributeInputToTerraform, true)(struct!.input),
  }
}


export function casbProfileSaasApplicationAdvancedTenantControlAttributeToHclTerraform(struct?: CasbProfileSaasApplicationAdvancedTenantControlAttribute | cdktf.IResolvable): any {
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
    input: {
      value: cdktf.listMapperHcl(casbProfileSaasApplicationAdvancedTenantControlAttributeInputToHclTerraform, true)(struct!.input),
      isBlock: true,
      type: "set",
      storageClassType: "CasbProfileSaasApplicationAdvancedTenantControlAttributeInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasbProfileSaasApplicationAdvancedTenantControlAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationAdvancedTenantControlAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbProfileSaasApplicationAdvancedTenantControlAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._input.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._input.internalValue = value.input;
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

  // input - computed: false, optional: true, required: false
  private _input = new CasbProfileSaasApplicationAdvancedTenantControlAttributeInputList(this, "input", true);
  public get input() {
    return this._input;
  }
  public putInput(value: CasbProfileSaasApplicationAdvancedTenantControlAttributeInput[] | cdktf.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }
}

export class CasbProfileSaasApplicationAdvancedTenantControlAttributeList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationAdvancedTenantControlAttribute[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationAdvancedTenantControlAttributeOutputReference {
    return new CasbProfileSaasApplicationAdvancedTenantControlAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationAdvancedTenantControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#name CasbProfile#name}
  */
  readonly name?: string;
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#attribute CasbProfile#attribute}
  */
  readonly attribute?: CasbProfileSaasApplicationAdvancedTenantControlAttribute[] | cdktf.IResolvable;
}

export function casbProfileSaasApplicationAdvancedTenantControlToTerraform(struct?: CasbProfileSaasApplicationAdvancedTenantControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    attribute: cdktf.listMapper(casbProfileSaasApplicationAdvancedTenantControlAttributeToTerraform, true)(struct!.attribute),
  }
}


export function casbProfileSaasApplicationAdvancedTenantControlToHclTerraform(struct?: CasbProfileSaasApplicationAdvancedTenantControl | cdktf.IResolvable): any {
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
    attribute: {
      value: cdktf.listMapperHcl(casbProfileSaasApplicationAdvancedTenantControlAttributeToHclTerraform, true)(struct!.attribute),
      isBlock: true,
      type: "list",
      storageClassType: "CasbProfileSaasApplicationAdvancedTenantControlAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasbProfileSaasApplicationAdvancedTenantControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationAdvancedTenantControl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbProfileSaasApplicationAdvancedTenantControl | cdktf.IResolvable | undefined) {
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

  // attribute - computed: false, optional: true, required: false
  private _attribute = new CasbProfileSaasApplicationAdvancedTenantControlAttributeList(this, "attribute", false);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: CasbProfileSaasApplicationAdvancedTenantControlAttribute[] | cdktf.IResolvable) {
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

export class CasbProfileSaasApplicationAdvancedTenantControlList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationAdvancedTenantControl[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationAdvancedTenantControlOutputReference {
    return new CasbProfileSaasApplicationAdvancedTenantControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationCustomControlAttributeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#action CasbProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#attribute_match CasbProfile#attribute_match}
  */
  readonly attributeMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#id CasbProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function casbProfileSaasApplicationCustomControlAttributeFilterToTerraform(struct?: CasbProfileSaasApplicationCustomControlAttributeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    attribute_match: cdktf.stringToTerraform(struct!.attributeMatch),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function casbProfileSaasApplicationCustomControlAttributeFilterToHclTerraform(struct?: CasbProfileSaasApplicationCustomControlAttributeFilter | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.attributeMatch),
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

export class CasbProfileSaasApplicationCustomControlAttributeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationCustomControlAttributeFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbProfileSaasApplicationCustomControlAttributeFilter | cdktf.IResolvable | undefined) {
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

  // attribute_match - computed: false, optional: true, required: false
  private _attributeMatch?: string; 
  public get attributeMatch() {
    return this.getStringAttribute('attribute_match');
  }
  public set attributeMatch(value: string) {
    this._attributeMatch = value;
  }
  public resetAttributeMatch() {
    this._attributeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMatchInput() {
    return this._attributeMatch;
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
}

export class CasbProfileSaasApplicationCustomControlAttributeFilterList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationCustomControlAttributeFilter[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationCustomControlAttributeFilterOutputReference {
    return new CasbProfileSaasApplicationCustomControlAttributeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationCustomControlOptionUserInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#value CasbProfile#value}
  */
  readonly value?: string;
}

export function casbProfileSaasApplicationCustomControlOptionUserInputToTerraform(struct?: CasbProfileSaasApplicationCustomControlOptionUserInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function casbProfileSaasApplicationCustomControlOptionUserInputToHclTerraform(struct?: CasbProfileSaasApplicationCustomControlOptionUserInput | cdktf.IResolvable): any {
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

export class CasbProfileSaasApplicationCustomControlOptionUserInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationCustomControlOptionUserInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbProfileSaasApplicationCustomControlOptionUserInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CasbProfileSaasApplicationCustomControlOptionUserInputList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationCustomControlOptionUserInput[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationCustomControlOptionUserInputOutputReference {
    return new CasbProfileSaasApplicationCustomControlOptionUserInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationCustomControlOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#name CasbProfile#name}
  */
  readonly name?: string;
  /**
  * user_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#user_input CasbProfile#user_input}
  */
  readonly userInput?: CasbProfileSaasApplicationCustomControlOptionUserInput[] | cdktf.IResolvable;
}

export function casbProfileSaasApplicationCustomControlOptionToTerraform(struct?: CasbProfileSaasApplicationCustomControlOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_input: cdktf.listMapper(casbProfileSaasApplicationCustomControlOptionUserInputToTerraform, true)(struct!.userInput),
  }
}


export function casbProfileSaasApplicationCustomControlOptionToHclTerraform(struct?: CasbProfileSaasApplicationCustomControlOption | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(casbProfileSaasApplicationCustomControlOptionUserInputToHclTerraform, true)(struct!.userInput),
      isBlock: true,
      type: "set",
      storageClassType: "CasbProfileSaasApplicationCustomControlOptionUserInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasbProfileSaasApplicationCustomControlOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationCustomControlOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInput = this._userInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbProfileSaasApplicationCustomControlOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._userInput.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._userInput.internalValue = value.userInput;
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

  // user_input - computed: false, optional: true, required: false
  private _userInput = new CasbProfileSaasApplicationCustomControlOptionUserInputList(this, "user_input", true);
  public get userInput() {
    return this._userInput;
  }
  public putUserInput(value: CasbProfileSaasApplicationCustomControlOptionUserInput[] | cdktf.IResolvable) {
    this._userInput.internalValue = value;
  }
  public resetUserInput() {
    this._userInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInputInput() {
    return this._userInput.internalValue;
  }
}

export class CasbProfileSaasApplicationCustomControlOptionList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationCustomControlOption[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationCustomControlOptionOutputReference {
    return new CasbProfileSaasApplicationCustomControlOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationCustomControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#name CasbProfile#name}
  */
  readonly name?: string;
  /**
  * attribute_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#attribute_filter CasbProfile#attribute_filter}
  */
  readonly attributeFilter?: CasbProfileSaasApplicationCustomControlAttributeFilter[] | cdktf.IResolvable;
  /**
  * option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#option CasbProfile#option}
  */
  readonly option?: CasbProfileSaasApplicationCustomControlOption[] | cdktf.IResolvable;
}

export function casbProfileSaasApplicationCustomControlToTerraform(struct?: CasbProfileSaasApplicationCustomControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    attribute_filter: cdktf.listMapper(casbProfileSaasApplicationCustomControlAttributeFilterToTerraform, true)(struct!.attributeFilter),
    option: cdktf.listMapper(casbProfileSaasApplicationCustomControlOptionToTerraform, true)(struct!.option),
  }
}


export function casbProfileSaasApplicationCustomControlToHclTerraform(struct?: CasbProfileSaasApplicationCustomControl | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(casbProfileSaasApplicationCustomControlAttributeFilterToHclTerraform, true)(struct!.attributeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "CasbProfileSaasApplicationCustomControlAttributeFilterList",
    },
    option: {
      value: cdktf.listMapperHcl(casbProfileSaasApplicationCustomControlOptionToHclTerraform, true)(struct!.option),
      isBlock: true,
      type: "list",
      storageClassType: "CasbProfileSaasApplicationCustomControlOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasbProfileSaasApplicationCustomControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationCustomControl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CasbProfileSaasApplicationCustomControl | cdktf.IResolvable | undefined) {
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
  private _attributeFilter = new CasbProfileSaasApplicationCustomControlAttributeFilterList(this, "attribute_filter", false);
  public get attributeFilter() {
    return this._attributeFilter;
  }
  public putAttributeFilter(value: CasbProfileSaasApplicationCustomControlAttributeFilter[] | cdktf.IResolvable) {
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
  private _option = new CasbProfileSaasApplicationCustomControlOptionList(this, "option", false);
  public get option() {
    return this._option;
  }
  public putOption(value: CasbProfileSaasApplicationCustomControlOption[] | cdktf.IResolvable) {
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

export class CasbProfileSaasApplicationCustomControlList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationCustomControl[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationCustomControlOutputReference {
    return new CasbProfileSaasApplicationCustomControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationDomainControlDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#name CasbProfile#name}
  */
  readonly name?: string;
}

export function casbProfileSaasApplicationDomainControlDomainsToTerraform(struct?: CasbProfileSaasApplicationDomainControlDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function casbProfileSaasApplicationDomainControlDomainsToHclTerraform(struct?: CasbProfileSaasApplicationDomainControlDomains | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasbProfileSaasApplicationDomainControlDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationDomainControlDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbProfileSaasApplicationDomainControlDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class CasbProfileSaasApplicationDomainControlDomainsList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationDomainControlDomains[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationDomainControlDomainsOutputReference {
    return new CasbProfileSaasApplicationDomainControlDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationSafeSearchControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#name CasbProfile#name}
  */
  readonly name?: string;
}

export function casbProfileSaasApplicationSafeSearchControlToTerraform(struct?: CasbProfileSaasApplicationSafeSearchControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function casbProfileSaasApplicationSafeSearchControlToHclTerraform(struct?: CasbProfileSaasApplicationSafeSearchControl | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasbProfileSaasApplicationSafeSearchControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationSafeSearchControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbProfileSaasApplicationSafeSearchControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class CasbProfileSaasApplicationSafeSearchControlList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationSafeSearchControl[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationSafeSearchControlOutputReference {
    return new CasbProfileSaasApplicationSafeSearchControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplicationTenantControlTenants {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#name CasbProfile#name}
  */
  readonly name?: string;
}

export function casbProfileSaasApplicationTenantControlTenantsToTerraform(struct?: CasbProfileSaasApplicationTenantControlTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function casbProfileSaasApplicationTenantControlTenantsToHclTerraform(struct?: CasbProfileSaasApplicationTenantControlTenants | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasbProfileSaasApplicationTenantControlTenantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplicationTenantControlTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbProfileSaasApplicationTenantControlTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class CasbProfileSaasApplicationTenantControlTenantsList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplicationTenantControlTenants[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationTenantControlTenantsOutputReference {
    return new CasbProfileSaasApplicationTenantControlTenantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasbProfileSaasApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#domain_control CasbProfile#domain_control}
  */
  readonly domainControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#log CasbProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#name CasbProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#safe_search CasbProfile#safe_search}
  */
  readonly safeSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#status CasbProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#tenant_control CasbProfile#tenant_control}
  */
  readonly tenantControl?: string;
  /**
  * access_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#access_rule CasbProfile#access_rule}
  */
  readonly accessRule?: CasbProfileSaasApplicationAccessRule[] | cdktf.IResolvable;
  /**
  * advanced_tenant_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#advanced_tenant_control CasbProfile#advanced_tenant_control}
  */
  readonly advancedTenantControl?: CasbProfileSaasApplicationAdvancedTenantControl[] | cdktf.IResolvable;
  /**
  * custom_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#custom_control CasbProfile#custom_control}
  */
  readonly customControl?: CasbProfileSaasApplicationCustomControl[] | cdktf.IResolvable;
  /**
  * domain_control_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#domain_control_domains CasbProfile#domain_control_domains}
  */
  readonly domainControlDomains?: CasbProfileSaasApplicationDomainControlDomains[] | cdktf.IResolvable;
  /**
  * safe_search_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#safe_search_control CasbProfile#safe_search_control}
  */
  readonly safeSearchControl?: CasbProfileSaasApplicationSafeSearchControl[] | cdktf.IResolvable;
  /**
  * tenant_control_tenants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#tenant_control_tenants CasbProfile#tenant_control_tenants}
  */
  readonly tenantControlTenants?: CasbProfileSaasApplicationTenantControlTenants[] | cdktf.IResolvable;
}

export function casbProfileSaasApplicationToTerraform(struct?: CasbProfileSaasApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_control: cdktf.stringToTerraform(struct!.domainControl),
    log: cdktf.stringToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    safe_search: cdktf.stringToTerraform(struct!.safeSearch),
    status: cdktf.stringToTerraform(struct!.status),
    tenant_control: cdktf.stringToTerraform(struct!.tenantControl),
    access_rule: cdktf.listMapper(casbProfileSaasApplicationAccessRuleToTerraform, true)(struct!.accessRule),
    advanced_tenant_control: cdktf.listMapper(casbProfileSaasApplicationAdvancedTenantControlToTerraform, true)(struct!.advancedTenantControl),
    custom_control: cdktf.listMapper(casbProfileSaasApplicationCustomControlToTerraform, true)(struct!.customControl),
    domain_control_domains: cdktf.listMapper(casbProfileSaasApplicationDomainControlDomainsToTerraform, true)(struct!.domainControlDomains),
    safe_search_control: cdktf.listMapper(casbProfileSaasApplicationSafeSearchControlToTerraform, true)(struct!.safeSearchControl),
    tenant_control_tenants: cdktf.listMapper(casbProfileSaasApplicationTenantControlTenantsToTerraform, true)(struct!.tenantControlTenants),
  }
}


export function casbProfileSaasApplicationToHclTerraform(struct?: CasbProfileSaasApplication | cdktf.IResolvable): any {
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_control: {
      value: cdktf.stringToHclTerraform(struct!.tenantControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_rule: {
      value: cdktf.listMapperHcl(casbProfileSaasApplicationAccessRuleToHclTerraform, true)(struct!.accessRule),
      isBlock: true,
      type: "list",
      storageClassType: "CasbProfileSaasApplicationAccessRuleList",
    },
    advanced_tenant_control: {
      value: cdktf.listMapperHcl(casbProfileSaasApplicationAdvancedTenantControlToHclTerraform, true)(struct!.advancedTenantControl),
      isBlock: true,
      type: "list",
      storageClassType: "CasbProfileSaasApplicationAdvancedTenantControlList",
    },
    custom_control: {
      value: cdktf.listMapperHcl(casbProfileSaasApplicationCustomControlToHclTerraform, true)(struct!.customControl),
      isBlock: true,
      type: "list",
      storageClassType: "CasbProfileSaasApplicationCustomControlList",
    },
    domain_control_domains: {
      value: cdktf.listMapperHcl(casbProfileSaasApplicationDomainControlDomainsToHclTerraform, true)(struct!.domainControlDomains),
      isBlock: true,
      type: "set",
      storageClassType: "CasbProfileSaasApplicationDomainControlDomainsList",
    },
    safe_search_control: {
      value: cdktf.listMapperHcl(casbProfileSaasApplicationSafeSearchControlToHclTerraform, true)(struct!.safeSearchControl),
      isBlock: true,
      type: "set",
      storageClassType: "CasbProfileSaasApplicationSafeSearchControlList",
    },
    tenant_control_tenants: {
      value: cdktf.listMapperHcl(casbProfileSaasApplicationTenantControlTenantsToHclTerraform, true)(struct!.tenantControlTenants),
      isBlock: true,
      type: "set",
      storageClassType: "CasbProfileSaasApplicationTenantControlTenantsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasbProfileSaasApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CasbProfileSaasApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainControl = this._domainControl;
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tenantControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantControl = this._tenantControl;
    }
    if (this._accessRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRule = this._accessRule?.internalValue;
    }
    if (this._advancedTenantControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedTenantControl = this._advancedTenantControl?.internalValue;
    }
    if (this._customControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customControl = this._customControl?.internalValue;
    }
    if (this._domainControlDomains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainControlDomains = this._domainControlDomains?.internalValue;
    }
    if (this._safeSearchControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeSearchControl = this._safeSearchControl?.internalValue;
    }
    if (this._tenantControlTenants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantControlTenants = this._tenantControlTenants?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasbProfileSaasApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainControl = undefined;
      this._log = undefined;
      this._name = undefined;
      this._safeSearch = undefined;
      this._status = undefined;
      this._tenantControl = undefined;
      this._accessRule.internalValue = undefined;
      this._advancedTenantControl.internalValue = undefined;
      this._customControl.internalValue = undefined;
      this._domainControlDomains.internalValue = undefined;
      this._safeSearchControl.internalValue = undefined;
      this._tenantControlTenants.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainControl = value.domainControl;
      this._log = value.log;
      this._name = value.name;
      this._safeSearch = value.safeSearch;
      this._status = value.status;
      this._tenantControl = value.tenantControl;
      this._accessRule.internalValue = value.accessRule;
      this._advancedTenantControl.internalValue = value.advancedTenantControl;
      this._customControl.internalValue = value.customControl;
      this._domainControlDomains.internalValue = value.domainControlDomains;
      this._safeSearchControl.internalValue = value.safeSearchControl;
      this._tenantControlTenants.internalValue = value.tenantControlTenants;
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

  // access_rule - computed: false, optional: true, required: false
  private _accessRule = new CasbProfileSaasApplicationAccessRuleList(this, "access_rule", false);
  public get accessRule() {
    return this._accessRule;
  }
  public putAccessRule(value: CasbProfileSaasApplicationAccessRule[] | cdktf.IResolvable) {
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
  private _advancedTenantControl = new CasbProfileSaasApplicationAdvancedTenantControlList(this, "advanced_tenant_control", false);
  public get advancedTenantControl() {
    return this._advancedTenantControl;
  }
  public putAdvancedTenantControl(value: CasbProfileSaasApplicationAdvancedTenantControl[] | cdktf.IResolvable) {
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
  private _customControl = new CasbProfileSaasApplicationCustomControlList(this, "custom_control", false);
  public get customControl() {
    return this._customControl;
  }
  public putCustomControl(value: CasbProfileSaasApplicationCustomControl[] | cdktf.IResolvable) {
    this._customControl.internalValue = value;
  }
  public resetCustomControl() {
    this._customControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customControlInput() {
    return this._customControl.internalValue;
  }

  // domain_control_domains - computed: false, optional: true, required: false
  private _domainControlDomains = new CasbProfileSaasApplicationDomainControlDomainsList(this, "domain_control_domains", true);
  public get domainControlDomains() {
    return this._domainControlDomains;
  }
  public putDomainControlDomains(value: CasbProfileSaasApplicationDomainControlDomains[] | cdktf.IResolvable) {
    this._domainControlDomains.internalValue = value;
  }
  public resetDomainControlDomains() {
    this._domainControlDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControlDomainsInput() {
    return this._domainControlDomains.internalValue;
  }

  // safe_search_control - computed: false, optional: true, required: false
  private _safeSearchControl = new CasbProfileSaasApplicationSafeSearchControlList(this, "safe_search_control", true);
  public get safeSearchControl() {
    return this._safeSearchControl;
  }
  public putSafeSearchControl(value: CasbProfileSaasApplicationSafeSearchControl[] | cdktf.IResolvable) {
    this._safeSearchControl.internalValue = value;
  }
  public resetSafeSearchControl() {
    this._safeSearchControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeSearchControlInput() {
    return this._safeSearchControl.internalValue;
  }

  // tenant_control_tenants - computed: false, optional: true, required: false
  private _tenantControlTenants = new CasbProfileSaasApplicationTenantControlTenantsList(this, "tenant_control_tenants", true);
  public get tenantControlTenants() {
    return this._tenantControlTenants;
  }
  public putTenantControlTenants(value: CasbProfileSaasApplicationTenantControlTenants[] | cdktf.IResolvable) {
    this._tenantControlTenants.internalValue = value;
  }
  public resetTenantControlTenants() {
    this._tenantControlTenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantControlTenantsInput() {
    return this._tenantControlTenants.internalValue;
  }
}

export class CasbProfileSaasApplicationList extends cdktf.ComplexList {
  public internalValue? : CasbProfileSaasApplication[] | cdktf.IResolvable

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
  public get(index: number): CasbProfileSaasApplicationOutputReference {
    return new CasbProfileSaasApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile fortios_casb_profile}
*/
export class CasbProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_casb_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CasbProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CasbProfile to import
  * @param importFromId The id of the existing CasbProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CasbProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_casb_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/casb_profile fortios_casb_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CasbProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CasbProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_casb_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._saasApplication.internalValue = config.saasApplication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // saas_application - computed: false, optional: true, required: false
  private _saasApplication = new CasbProfileSaasApplicationList(this, "saas_application", false);
  public get saasApplication() {
    return this._saasApplication;
  }
  public putSaasApplication(value: CasbProfileSaasApplication[] | cdktf.IResolvable) {
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
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      saas_application: cdktf.listMapper(casbProfileSaasApplicationToTerraform, true)(this._saasApplication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saas_application: {
        value: cdktf.listMapperHcl(casbProfileSaasApplicationToHclTerraform, true)(this._saasApplication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CasbProfileSaasApplicationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
