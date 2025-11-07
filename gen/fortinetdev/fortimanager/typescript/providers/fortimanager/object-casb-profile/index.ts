// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectCasbProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#adom ObjectCasbProfile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#comment ObjectCasbProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#dynamic_sort_subtable ObjectCasbProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#id ObjectCasbProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#name ObjectCasbProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#scopetype ObjectCasbProfile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * saas_application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#saas_application ObjectCasbProfile#saas_application}
  */
  readonly saasApplication?: ObjectCasbProfileSaasApplication[] | cdktf.IResolvable;
}
export interface ObjectCasbProfileSaasApplicationAccessRuleAttributeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#action ObjectCasbProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#attribute_match ObjectCasbProfile#attribute_match}
  */
  readonly attributeMatch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#id ObjectCasbProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function objectCasbProfileSaasApplicationAccessRuleAttributeFilterToTerraform(struct?: ObjectCasbProfileSaasApplicationAccessRuleAttributeFilter | cdktf.IResolvable): any {
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


export function objectCasbProfileSaasApplicationAccessRuleAttributeFilterToHclTerraform(struct?: ObjectCasbProfileSaasApplicationAccessRuleAttributeFilter | cdktf.IResolvable): any {
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

export class ObjectCasbProfileSaasApplicationAccessRuleAttributeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasApplicationAccessRuleAttributeFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectCasbProfileSaasApplicationAccessRuleAttributeFilter | cdktf.IResolvable | undefined) {
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

export class ObjectCasbProfileSaasApplicationAccessRuleAttributeFilterList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasApplicationAccessRuleAttributeFilter[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasApplicationAccessRuleAttributeFilterOutputReference {
    return new ObjectCasbProfileSaasApplicationAccessRuleAttributeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasApplicationAccessRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#action ObjectCasbProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#bypass ObjectCasbProfile#bypass}
  */
  readonly bypass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#name ObjectCasbProfile#name}
  */
  readonly name?: string;
  /**
  * attribute_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#attribute_filter ObjectCasbProfile#attribute_filter}
  */
  readonly attributeFilter?: ObjectCasbProfileSaasApplicationAccessRuleAttributeFilter[] | cdktf.IResolvable;
}

export function objectCasbProfileSaasApplicationAccessRuleToTerraform(struct?: ObjectCasbProfileSaasApplicationAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    bypass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bypass),
    name: cdktf.stringToTerraform(struct!.name),
    attribute_filter: cdktf.listMapper(objectCasbProfileSaasApplicationAccessRuleAttributeFilterToTerraform, true)(struct!.attributeFilter),
  }
}


export function objectCasbProfileSaasApplicationAccessRuleToHclTerraform(struct?: ObjectCasbProfileSaasApplicationAccessRule | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(objectCasbProfileSaasApplicationAccessRuleAttributeFilterToHclTerraform, true)(struct!.attributeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasApplicationAccessRuleAttributeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectCasbProfileSaasApplicationAccessRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasApplicationAccessRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectCasbProfileSaasApplicationAccessRule | cdktf.IResolvable | undefined) {
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
  private _attributeFilter = new ObjectCasbProfileSaasApplicationAccessRuleAttributeFilterList(this, "attribute_filter", false);
  public get attributeFilter() {
    return this._attributeFilter;
  }
  public putAttributeFilter(value: ObjectCasbProfileSaasApplicationAccessRuleAttributeFilter[] | cdktf.IResolvable) {
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

export class ObjectCasbProfileSaasApplicationAccessRuleList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasApplicationAccessRule[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasApplicationAccessRuleOutputReference {
    return new ObjectCasbProfileSaasApplicationAccessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasApplicationAdvancedTenantControlAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#input ObjectCasbProfile#input}
  */
  readonly input?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#name ObjectCasbProfile#name}
  */
  readonly name?: string;
}

export function objectCasbProfileSaasApplicationAdvancedTenantControlAttributeToTerraform(struct?: ObjectCasbProfileSaasApplicationAdvancedTenantControlAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.input),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectCasbProfileSaasApplicationAdvancedTenantControlAttributeToHclTerraform(struct?: ObjectCasbProfileSaasApplicationAdvancedTenantControlAttribute | cdktf.IResolvable): any {
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

export class ObjectCasbProfileSaasApplicationAdvancedTenantControlAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasApplicationAdvancedTenantControlAttribute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectCasbProfileSaasApplicationAdvancedTenantControlAttribute | cdktf.IResolvable | undefined) {
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

export class ObjectCasbProfileSaasApplicationAdvancedTenantControlAttributeList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasApplicationAdvancedTenantControlAttribute[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasApplicationAdvancedTenantControlAttributeOutputReference {
    return new ObjectCasbProfileSaasApplicationAdvancedTenantControlAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasApplicationAdvancedTenantControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#name ObjectCasbProfile#name}
  */
  readonly name?: string[];
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#attribute ObjectCasbProfile#attribute}
  */
  readonly attribute?: ObjectCasbProfileSaasApplicationAdvancedTenantControlAttribute[] | cdktf.IResolvable;
}

export function objectCasbProfileSaasApplicationAdvancedTenantControlToTerraform(struct?: ObjectCasbProfileSaasApplicationAdvancedTenantControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    attribute: cdktf.listMapper(objectCasbProfileSaasApplicationAdvancedTenantControlAttributeToTerraform, true)(struct!.attribute),
  }
}


export function objectCasbProfileSaasApplicationAdvancedTenantControlToHclTerraform(struct?: ObjectCasbProfileSaasApplicationAdvancedTenantControl | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(objectCasbProfileSaasApplicationAdvancedTenantControlAttributeToHclTerraform, true)(struct!.attribute),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasApplicationAdvancedTenantControlAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectCasbProfileSaasApplicationAdvancedTenantControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasApplicationAdvancedTenantControl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectCasbProfileSaasApplicationAdvancedTenantControl | cdktf.IResolvable | undefined) {
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
  private _attribute = new ObjectCasbProfileSaasApplicationAdvancedTenantControlAttributeList(this, "attribute", false);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: ObjectCasbProfileSaasApplicationAdvancedTenantControlAttribute[] | cdktf.IResolvable) {
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

export class ObjectCasbProfileSaasApplicationAdvancedTenantControlList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasApplicationAdvancedTenantControl[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasApplicationAdvancedTenantControlOutputReference {
    return new ObjectCasbProfileSaasApplicationAdvancedTenantControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasApplicationCustomControlAttributeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#action ObjectCasbProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#attribute_match ObjectCasbProfile#attribute_match}
  */
  readonly attributeMatch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#id ObjectCasbProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function objectCasbProfileSaasApplicationCustomControlAttributeFilterToTerraform(struct?: ObjectCasbProfileSaasApplicationCustomControlAttributeFilter | cdktf.IResolvable): any {
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


export function objectCasbProfileSaasApplicationCustomControlAttributeFilterToHclTerraform(struct?: ObjectCasbProfileSaasApplicationCustomControlAttributeFilter | cdktf.IResolvable): any {
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

export class ObjectCasbProfileSaasApplicationCustomControlAttributeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasApplicationCustomControlAttributeFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectCasbProfileSaasApplicationCustomControlAttributeFilter | cdktf.IResolvable | undefined) {
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

export class ObjectCasbProfileSaasApplicationCustomControlAttributeFilterList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasApplicationCustomControlAttributeFilter[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasApplicationCustomControlAttributeFilterOutputReference {
    return new ObjectCasbProfileSaasApplicationCustomControlAttributeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasApplicationCustomControlOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#name ObjectCasbProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#user_input ObjectCasbProfile#user_input}
  */
  readonly userInput?: string[];
}

export function objectCasbProfileSaasApplicationCustomControlOptionToTerraform(struct?: ObjectCasbProfileSaasApplicationCustomControlOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_input: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userInput),
  }
}


export function objectCasbProfileSaasApplicationCustomControlOptionToHclTerraform(struct?: ObjectCasbProfileSaasApplicationCustomControlOption | cdktf.IResolvable): any {
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

export class ObjectCasbProfileSaasApplicationCustomControlOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasApplicationCustomControlOption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectCasbProfileSaasApplicationCustomControlOption | cdktf.IResolvable | undefined) {
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

export class ObjectCasbProfileSaasApplicationCustomControlOptionList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasApplicationCustomControlOption[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasApplicationCustomControlOptionOutputReference {
    return new ObjectCasbProfileSaasApplicationCustomControlOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasApplicationCustomControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#name ObjectCasbProfile#name}
  */
  readonly name?: string;
  /**
  * attribute_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#attribute_filter ObjectCasbProfile#attribute_filter}
  */
  readonly attributeFilter?: ObjectCasbProfileSaasApplicationCustomControlAttributeFilter[] | cdktf.IResolvable;
  /**
  * option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#option ObjectCasbProfile#option}
  */
  readonly option?: ObjectCasbProfileSaasApplicationCustomControlOption[] | cdktf.IResolvable;
}

export function objectCasbProfileSaasApplicationCustomControlToTerraform(struct?: ObjectCasbProfileSaasApplicationCustomControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    attribute_filter: cdktf.listMapper(objectCasbProfileSaasApplicationCustomControlAttributeFilterToTerraform, true)(struct!.attributeFilter),
    option: cdktf.listMapper(objectCasbProfileSaasApplicationCustomControlOptionToTerraform, true)(struct!.option),
  }
}


export function objectCasbProfileSaasApplicationCustomControlToHclTerraform(struct?: ObjectCasbProfileSaasApplicationCustomControl | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(objectCasbProfileSaasApplicationCustomControlAttributeFilterToHclTerraform, true)(struct!.attributeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasApplicationCustomControlAttributeFilterList",
    },
    option: {
      value: cdktf.listMapperHcl(objectCasbProfileSaasApplicationCustomControlOptionToHclTerraform, true)(struct!.option),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasApplicationCustomControlOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectCasbProfileSaasApplicationCustomControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasApplicationCustomControl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectCasbProfileSaasApplicationCustomControl | cdktf.IResolvable | undefined) {
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
  private _attributeFilter = new ObjectCasbProfileSaasApplicationCustomControlAttributeFilterList(this, "attribute_filter", false);
  public get attributeFilter() {
    return this._attributeFilter;
  }
  public putAttributeFilter(value: ObjectCasbProfileSaasApplicationCustomControlAttributeFilter[] | cdktf.IResolvable) {
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
  private _option = new ObjectCasbProfileSaasApplicationCustomControlOptionList(this, "option", false);
  public get option() {
    return this._option;
  }
  public putOption(value: ObjectCasbProfileSaasApplicationCustomControlOption[] | cdktf.IResolvable) {
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

export class ObjectCasbProfileSaasApplicationCustomControlList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasApplicationCustomControl[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasApplicationCustomControlOutputReference {
    return new ObjectCasbProfileSaasApplicationCustomControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectCasbProfileSaasApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#domain_control ObjectCasbProfile#domain_control}
  */
  readonly domainControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#domain_control_domains ObjectCasbProfile#domain_control_domains}
  */
  readonly domainControlDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#log ObjectCasbProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#name ObjectCasbProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#safe_search ObjectCasbProfile#safe_search}
  */
  readonly safeSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#safe_search_control ObjectCasbProfile#safe_search_control}
  */
  readonly safeSearchControl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#status ObjectCasbProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#tenant_control ObjectCasbProfile#tenant_control}
  */
  readonly tenantControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#tenant_control_tenants ObjectCasbProfile#tenant_control_tenants}
  */
  readonly tenantControlTenants?: string[];
  /**
  * access_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#access_rule ObjectCasbProfile#access_rule}
  */
  readonly accessRule?: ObjectCasbProfileSaasApplicationAccessRule[] | cdktf.IResolvable;
  /**
  * advanced_tenant_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#advanced_tenant_control ObjectCasbProfile#advanced_tenant_control}
  */
  readonly advancedTenantControl?: ObjectCasbProfileSaasApplicationAdvancedTenantControl[] | cdktf.IResolvable;
  /**
  * custom_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#custom_control ObjectCasbProfile#custom_control}
  */
  readonly customControl?: ObjectCasbProfileSaasApplicationCustomControl[] | cdktf.IResolvable;
}

export function objectCasbProfileSaasApplicationToTerraform(struct?: ObjectCasbProfileSaasApplication | cdktf.IResolvable): any {
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
    status: cdktf.stringToTerraform(struct!.status),
    tenant_control: cdktf.stringToTerraform(struct!.tenantControl),
    tenant_control_tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantControlTenants),
    access_rule: cdktf.listMapper(objectCasbProfileSaasApplicationAccessRuleToTerraform, true)(struct!.accessRule),
    advanced_tenant_control: cdktf.listMapper(objectCasbProfileSaasApplicationAdvancedTenantControlToTerraform, true)(struct!.advancedTenantControl),
    custom_control: cdktf.listMapper(objectCasbProfileSaasApplicationCustomControlToTerraform, true)(struct!.customControl),
  }
}


export function objectCasbProfileSaasApplicationToHclTerraform(struct?: ObjectCasbProfileSaasApplication | cdktf.IResolvable): any {
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
    tenant_control_tenants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantControlTenants),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    access_rule: {
      value: cdktf.listMapperHcl(objectCasbProfileSaasApplicationAccessRuleToHclTerraform, true)(struct!.accessRule),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasApplicationAccessRuleList",
    },
    advanced_tenant_control: {
      value: cdktf.listMapperHcl(objectCasbProfileSaasApplicationAdvancedTenantControlToHclTerraform, true)(struct!.advancedTenantControl),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasApplicationAdvancedTenantControlList",
    },
    custom_control: {
      value: cdktf.listMapperHcl(objectCasbProfileSaasApplicationCustomControlToHclTerraform, true)(struct!.customControl),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectCasbProfileSaasApplicationCustomControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectCasbProfileSaasApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectCasbProfileSaasApplication | cdktf.IResolvable | undefined {
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
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
    if (this._advancedTenantControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedTenantControl = this._advancedTenantControl?.internalValue;
    }
    if (this._customControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customControl = this._customControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectCasbProfileSaasApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainControl = undefined;
      this._domainControlDomains = undefined;
      this._log = undefined;
      this._name = undefined;
      this._safeSearch = undefined;
      this._safeSearchControl = undefined;
      this._status = undefined;
      this._tenantControl = undefined;
      this._tenantControlTenants = undefined;
      this._accessRule.internalValue = undefined;
      this._advancedTenantControl.internalValue = undefined;
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
      this._status = value.status;
      this._tenantControl = value.tenantControl;
      this._tenantControlTenants = value.tenantControlTenants;
      this._accessRule.internalValue = value.accessRule;
      this._advancedTenantControl.internalValue = value.advancedTenantControl;
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
  private _accessRule = new ObjectCasbProfileSaasApplicationAccessRuleList(this, "access_rule", false);
  public get accessRule() {
    return this._accessRule;
  }
  public putAccessRule(value: ObjectCasbProfileSaasApplicationAccessRule[] | cdktf.IResolvable) {
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
  private _advancedTenantControl = new ObjectCasbProfileSaasApplicationAdvancedTenantControlList(this, "advanced_tenant_control", false);
  public get advancedTenantControl() {
    return this._advancedTenantControl;
  }
  public putAdvancedTenantControl(value: ObjectCasbProfileSaasApplicationAdvancedTenantControl[] | cdktf.IResolvable) {
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
  private _customControl = new ObjectCasbProfileSaasApplicationCustomControlList(this, "custom_control", false);
  public get customControl() {
    return this._customControl;
  }
  public putCustomControl(value: ObjectCasbProfileSaasApplicationCustomControl[] | cdktf.IResolvable) {
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

export class ObjectCasbProfileSaasApplicationList extends cdktf.ComplexList {
  public internalValue? : ObjectCasbProfileSaasApplication[] | cdktf.IResolvable

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
  public get(index: number): ObjectCasbProfileSaasApplicationOutputReference {
    return new ObjectCasbProfileSaasApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile fortimanager_object_casb_profile}
*/
export class ObjectCasbProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_casb_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectCasbProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectCasbProfile to import
  * @param importFromId The id of the existing ObjectCasbProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectCasbProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_casb_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile fortimanager_object_casb_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectCasbProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectCasbProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_casb_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._comment = config.comment;
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
  private _saasApplication = new ObjectCasbProfileSaasApplicationList(this, "saas_application", false);
  public get saasApplication() {
    return this._saasApplication;
  }
  public putSaasApplication(value: ObjectCasbProfileSaasApplication[] | cdktf.IResolvable) {
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
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      saas_application: cdktf.listMapper(objectCasbProfileSaasApplicationToTerraform, true)(this._saasApplication.internalValue),
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
        value: cdktf.listMapperHcl(objectCasbProfileSaasApplicationToHclTerraform, true)(this._saasApplication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectCasbProfileSaasApplicationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
