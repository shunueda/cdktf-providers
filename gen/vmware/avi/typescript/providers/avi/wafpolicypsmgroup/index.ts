// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafpolicypsmgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#description Wafpolicypsmgroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#enable Wafpolicypsmgroup#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#hit_action Wafpolicypsmgroup#hit_action}
  */
  readonly hitAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#id Wafpolicypsmgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#is_learning_group Wafpolicypsmgroup#is_learning_group}
  */
  readonly isLearningGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#miss_action Wafpolicypsmgroup#miss_action}
  */
  readonly missAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#name Wafpolicypsmgroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#tenant_ref Wafpolicypsmgroup#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#uuid Wafpolicypsmgroup#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#configpb_attributes Wafpolicypsmgroup#configpb_attributes}
  */
  readonly configpbAttributes?: WafpolicypsmgroupConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#locations Wafpolicypsmgroup#locations}
  */
  readonly locations?: WafpolicypsmgroupLocations[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#markers Wafpolicypsmgroup#markers}
  */
  readonly markers?: WafpolicypsmgroupMarkers[] | cdktf.IResolvable;
}
export interface WafpolicypsmgroupConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#version Wafpolicypsmgroup#version}
  */
  readonly version?: string;
}

export function wafpolicypsmgroupConfigpbAttributesToTerraform(struct?: WafpolicypsmgroupConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function wafpolicypsmgroupConfigpbAttributesToHclTerraform(struct?: WafpolicypsmgroupConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicypsmgroupConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicypsmgroupConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicypsmgroupConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class WafpolicypsmgroupConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : WafpolicypsmgroupConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): WafpolicypsmgroupConfigpbAttributesOutputReference {
    return new WafpolicypsmgroupConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicypsmgroupLocationsMatchHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_case Wafpolicypsmgroup#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_criteria Wafpolicypsmgroup#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#value Wafpolicypsmgroup#value}
  */
  readonly value?: string[];
}

export function wafpolicypsmgroupLocationsMatchHostToTerraform(struct?: WafpolicypsmgroupLocationsMatchHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function wafpolicypsmgroupLocationsMatchHostToHclTerraform(struct?: WafpolicypsmgroupLocationsMatchHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicypsmgroupLocationsMatchHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicypsmgroupLocationsMatchHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicypsmgroupLocationsMatchHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._value = value.value;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class WafpolicypsmgroupLocationsMatchHostList extends cdktf.ComplexList {
  public internalValue? : WafpolicypsmgroupLocationsMatchHost[] | cdktf.IResolvable

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
  public get(index: number): WafpolicypsmgroupLocationsMatchHostOutputReference {
    return new WafpolicypsmgroupLocationsMatchHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicypsmgroupLocationsMatchMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_criteria Wafpolicypsmgroup#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#methods Wafpolicypsmgroup#methods}
  */
  readonly methods: string[];
}

export function wafpolicypsmgroupLocationsMatchMethodsToTerraform(struct?: WafpolicypsmgroupLocationsMatchMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function wafpolicypsmgroupLocationsMatchMethodsToHclTerraform(struct?: WafpolicypsmgroupLocationsMatchMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicypsmgroupLocationsMatchMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicypsmgroupLocationsMatchMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicypsmgroupLocationsMatchMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._methods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._methods = value.methods;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}

export class WafpolicypsmgroupLocationsMatchMethodsList extends cdktf.ComplexList {
  public internalValue? : WafpolicypsmgroupLocationsMatchMethods[] | cdktf.IResolvable

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
  public get(index: number): WafpolicypsmgroupLocationsMatchMethodsOutputReference {
    return new WafpolicypsmgroupLocationsMatchMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicypsmgroupLocationsMatchPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_case Wafpolicypsmgroup#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_criteria Wafpolicypsmgroup#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_decoded_string Wafpolicypsmgroup#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_str Wafpolicypsmgroup#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#string_group_refs Wafpolicypsmgroup#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function wafpolicypsmgroupLocationsMatchPathToTerraform(struct?: WafpolicypsmgroupLocationsMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_decoded_string: cdktf.stringToTerraform(struct!.matchDecodedString),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function wafpolicypsmgroupLocationsMatchPathToHclTerraform(struct?: WafpolicypsmgroupLocationsMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_decoded_string: {
      value: cdktf.stringToHclTerraform(struct!.matchDecodedString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicypsmgroupLocationsMatchPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicypsmgroupLocationsMatchPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchDecodedString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDecodedString = this._matchDecodedString;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicypsmgroupLocationsMatchPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._matchDecodedString = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._matchDecodedString = value.matchDecodedString;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_decoded_string - computed: false, optional: true, required: false
  private _matchDecodedString?: string; 
  public get matchDecodedString() {
    return this.getStringAttribute('match_decoded_string');
  }
  public set matchDecodedString(value: string) {
    this._matchDecodedString = value;
  }
  public resetMatchDecodedString() {
    this._matchDecodedString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDecodedStringInput() {
    return this._matchDecodedString;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class WafpolicypsmgroupLocationsMatchPathList extends cdktf.ComplexList {
  public internalValue? : WafpolicypsmgroupLocationsMatchPath[] | cdktf.IResolvable

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
  public get(index: number): WafpolicypsmgroupLocationsMatchPathOutputReference {
    return new WafpolicypsmgroupLocationsMatchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicypsmgroupLocationsMatch {
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#host Wafpolicypsmgroup#host}
  */
  readonly host?: WafpolicypsmgroupLocationsMatchHost[] | cdktf.IResolvable;
  /**
  * methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#methods Wafpolicypsmgroup#methods}
  */
  readonly methods?: WafpolicypsmgroupLocationsMatchMethods[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#path Wafpolicypsmgroup#path}
  */
  readonly path?: WafpolicypsmgroupLocationsMatchPath[] | cdktf.IResolvable;
}

export function wafpolicypsmgroupLocationsMatchToTerraform(struct?: WafpolicypsmgroupLocationsMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.listMapper(wafpolicypsmgroupLocationsMatchHostToTerraform, true)(struct!.host),
    methods: cdktf.listMapper(wafpolicypsmgroupLocationsMatchMethodsToTerraform, true)(struct!.methods),
    path: cdktf.listMapper(wafpolicypsmgroupLocationsMatchPathToTerraform, true)(struct!.path),
  }
}


export function wafpolicypsmgroupLocationsMatchToHclTerraform(struct?: WafpolicypsmgroupLocationsMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.listMapperHcl(wafpolicypsmgroupLocationsMatchHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicypsmgroupLocationsMatchHostList",
    },
    methods: {
      value: cdktf.listMapperHcl(wafpolicypsmgroupLocationsMatchMethodsToHclTerraform, true)(struct!.methods),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicypsmgroupLocationsMatchMethodsList",
    },
    path: {
      value: cdktf.listMapperHcl(wafpolicypsmgroupLocationsMatchPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicypsmgroupLocationsMatchPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicypsmgroupLocationsMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicypsmgroupLocationsMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicypsmgroupLocationsMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host.internalValue = undefined;
      this._methods.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host.internalValue = value.host;
      this._methods.internalValue = value.methods;
      this._path.internalValue = value.path;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host = new WafpolicypsmgroupLocationsMatchHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: WafpolicypsmgroupLocationsMatchHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new WafpolicypsmgroupLocationsMatchMethodsList(this, "methods", true);
  public get methods() {
    return this._methods;
  }
  public putMethods(value: WafpolicypsmgroupLocationsMatchMethods[] | cdktf.IResolvable) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new WafpolicypsmgroupLocationsMatchPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: WafpolicypsmgroupLocationsMatchPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class WafpolicypsmgroupLocationsMatchList extends cdktf.ComplexList {
  public internalValue? : WafpolicypsmgroupLocationsMatch[] | cdktf.IResolvable

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
  public get(index: number): WafpolicypsmgroupLocationsMatchOutputReference {
    return new WafpolicypsmgroupLocationsMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicypsmgroupLocationsRulesMatchElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#excluded Wafpolicypsmgroup#excluded}
  */
  readonly excluded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#index Wafpolicypsmgroup#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_case Wafpolicypsmgroup#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_op Wafpolicypsmgroup#match_op}
  */
  readonly matchOp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#name Wafpolicypsmgroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#sub_element Wafpolicypsmgroup#sub_element}
  */
  readonly subElement?: string;
}

export function wafpolicypsmgroupLocationsRulesMatchElementsToTerraform(struct?: WafpolicypsmgroupLocationsRulesMatchElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.stringToTerraform(struct!.excluded),
    index: cdktf.stringToTerraform(struct!.index),
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
    name: cdktf.stringToTerraform(struct!.name),
    sub_element: cdktf.stringToTerraform(struct!.subElement),
  }
}


export function wafpolicypsmgroupLocationsRulesMatchElementsToHclTerraform(struct?: WafpolicypsmgroupLocationsRulesMatchElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded: {
      value: cdktf.stringToHclTerraform(struct!.excluded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
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
    sub_element: {
      value: cdktf.stringToHclTerraform(struct!.subElement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicypsmgroupLocationsRulesMatchElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicypsmgroupLocationsRulesMatchElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.subElement = this._subElement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicypsmgroupLocationsRulesMatchElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excluded = undefined;
      this._index = undefined;
      this._matchCase = undefined;
      this._matchOp = undefined;
      this._name = undefined;
      this._subElement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excluded = value.excluded;
      this._index = value.index;
      this._matchCase = value.matchCase;
      this._matchOp = value.matchOp;
      this._name = value.name;
      this._subElement = value.subElement;
    }
  }

  // excluded - computed: false, optional: true, required: false
  private _excluded?: string; 
  public get excluded() {
    return this.getStringAttribute('excluded');
  }
  public set excluded(value: string) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
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

  // sub_element - computed: true, optional: true, required: false
  private _subElement?: string; 
  public get subElement() {
    return this.getStringAttribute('sub_element');
  }
  public set subElement(value: string) {
    this._subElement = value;
  }
  public resetSubElement() {
    this._subElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subElementInput() {
    return this._subElement;
  }
}

export class WafpolicypsmgroupLocationsRulesMatchElementsList extends cdktf.ComplexList {
  public internalValue? : WafpolicypsmgroupLocationsRulesMatchElements[] | cdktf.IResolvable

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
  public get(index: number): WafpolicypsmgroupLocationsRulesMatchElementsOutputReference {
    return new WafpolicypsmgroupLocationsRulesMatchElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicypsmgroupLocationsRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#description Wafpolicypsmgroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#enable Wafpolicypsmgroup#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#index Wafpolicypsmgroup#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_case Wafpolicypsmgroup#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_value_max_length Wafpolicypsmgroup#match_value_max_length}
  */
  readonly matchValueMaxLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_value_pattern Wafpolicypsmgroup#match_value_pattern}
  */
  readonly matchValuePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_value_string_group_key Wafpolicypsmgroup#match_value_string_group_key}
  */
  readonly matchValueStringGroupKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_value_string_group_ref Wafpolicypsmgroup#match_value_string_group_ref}
  */
  readonly matchValueStringGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#mode Wafpolicypsmgroup#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#name Wafpolicypsmgroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#paranoia_level Wafpolicypsmgroup#paranoia_level}
  */
  readonly paranoiaLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#rule_id Wafpolicypsmgroup#rule_id}
  */
  readonly ruleId: string;
  /**
  * match_elements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match_elements Wafpolicypsmgroup#match_elements}
  */
  readonly matchElements?: WafpolicypsmgroupLocationsRulesMatchElements[] | cdktf.IResolvable;
}

export function wafpolicypsmgroupLocationsRulesToTerraform(struct?: WafpolicypsmgroupLocationsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_value_max_length: cdktf.stringToTerraform(struct!.matchValueMaxLength),
    match_value_pattern: cdktf.stringToTerraform(struct!.matchValuePattern),
    match_value_string_group_key: cdktf.stringToTerraform(struct!.matchValueStringGroupKey),
    match_value_string_group_ref: cdktf.stringToTerraform(struct!.matchValueStringGroupRef),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    paranoia_level: cdktf.stringToTerraform(struct!.paranoiaLevel),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    match_elements: cdktf.listMapper(wafpolicypsmgroupLocationsRulesMatchElementsToTerraform, true)(struct!.matchElements),
  }
}


export function wafpolicypsmgroupLocationsRulesToHclTerraform(struct?: WafpolicypsmgroupLocationsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value_max_length: {
      value: cdktf.stringToHclTerraform(struct!.matchValueMaxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.matchValuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value_string_group_key: {
      value: cdktf.stringToHclTerraform(struct!.matchValueStringGroupKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value_string_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.matchValueStringGroupRef),
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
    paranoia_level: {
      value: cdktf.stringToHclTerraform(struct!.paranoiaLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_elements: {
      value: cdktf.listMapperHcl(wafpolicypsmgroupLocationsRulesMatchElementsToHclTerraform, true)(struct!.matchElements),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicypsmgroupLocationsRulesMatchElementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicypsmgroupLocationsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicypsmgroupLocationsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchValueMaxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueMaxLength = this._matchValueMaxLength;
    }
    if (this._matchValuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValuePattern = this._matchValuePattern;
    }
    if (this._matchValueStringGroupKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueStringGroupKey = this._matchValueStringGroupKey;
    }
    if (this._matchValueStringGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueStringGroupRef = this._matchValueStringGroupRef;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._paranoiaLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.paranoiaLevel = this._paranoiaLevel;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._matchElements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchElements = this._matchElements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicypsmgroupLocationsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._matchCase = undefined;
      this._matchValueMaxLength = undefined;
      this._matchValuePattern = undefined;
      this._matchValueStringGroupKey = undefined;
      this._matchValueStringGroupRef = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._paranoiaLevel = undefined;
      this._ruleId = undefined;
      this._matchElements.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enable = value.enable;
      this._index = value.index;
      this._matchCase = value.matchCase;
      this._matchValueMaxLength = value.matchValueMaxLength;
      this._matchValuePattern = value.matchValuePattern;
      this._matchValueStringGroupKey = value.matchValueStringGroupKey;
      this._matchValueStringGroupRef = value.matchValueStringGroupRef;
      this._mode = value.mode;
      this._name = value.name;
      this._paranoiaLevel = value.paranoiaLevel;
      this._ruleId = value.ruleId;
      this._matchElements.internalValue = value.matchElements;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_value_max_length - computed: true, optional: true, required: false
  private _matchValueMaxLength?: string; 
  public get matchValueMaxLength() {
    return this.getStringAttribute('match_value_max_length');
  }
  public set matchValueMaxLength(value: string) {
    this._matchValueMaxLength = value;
  }
  public resetMatchValueMaxLength() {
    this._matchValueMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueMaxLengthInput() {
    return this._matchValueMaxLength;
  }

  // match_value_pattern - computed: true, optional: true, required: false
  private _matchValuePattern?: string; 
  public get matchValuePattern() {
    return this.getStringAttribute('match_value_pattern');
  }
  public set matchValuePattern(value: string) {
    this._matchValuePattern = value;
  }
  public resetMatchValuePattern() {
    this._matchValuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuePatternInput() {
    return this._matchValuePattern;
  }

  // match_value_string_group_key - computed: true, optional: true, required: false
  private _matchValueStringGroupKey?: string; 
  public get matchValueStringGroupKey() {
    return this.getStringAttribute('match_value_string_group_key');
  }
  public set matchValueStringGroupKey(value: string) {
    this._matchValueStringGroupKey = value;
  }
  public resetMatchValueStringGroupKey() {
    this._matchValueStringGroupKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringGroupKeyInput() {
    return this._matchValueStringGroupKey;
  }

  // match_value_string_group_ref - computed: true, optional: true, required: false
  private _matchValueStringGroupRef?: string; 
  public get matchValueStringGroupRef() {
    return this.getStringAttribute('match_value_string_group_ref');
  }
  public set matchValueStringGroupRef(value: string) {
    this._matchValueStringGroupRef = value;
  }
  public resetMatchValueStringGroupRef() {
    this._matchValueStringGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringGroupRefInput() {
    return this._matchValueStringGroupRef;
  }

  // mode - computed: true, optional: true, required: false
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

  // paranoia_level - computed: false, optional: true, required: false
  private _paranoiaLevel?: string; 
  public get paranoiaLevel() {
    return this.getStringAttribute('paranoia_level');
  }
  public set paranoiaLevel(value: string) {
    this._paranoiaLevel = value;
  }
  public resetParanoiaLevel() {
    this._paranoiaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paranoiaLevelInput() {
    return this._paranoiaLevel;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // match_elements - computed: false, optional: true, required: false
  private _matchElements = new WafpolicypsmgroupLocationsRulesMatchElementsList(this, "match_elements", false);
  public get matchElements() {
    return this._matchElements;
  }
  public putMatchElements(value: WafpolicypsmgroupLocationsRulesMatchElements[] | cdktf.IResolvable) {
    this._matchElements.internalValue = value;
  }
  public resetMatchElements() {
    this._matchElements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchElementsInput() {
    return this._matchElements.internalValue;
  }
}

export class WafpolicypsmgroupLocationsRulesList extends cdktf.ComplexList {
  public internalValue? : WafpolicypsmgroupLocationsRules[] | cdktf.IResolvable

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
  public get(index: number): WafpolicypsmgroupLocationsRulesOutputReference {
    return new WafpolicypsmgroupLocationsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicypsmgroupLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#description Wafpolicypsmgroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#index Wafpolicypsmgroup#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#name Wafpolicypsmgroup#name}
  */
  readonly name: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#match Wafpolicypsmgroup#match}
  */
  readonly match?: WafpolicypsmgroupLocationsMatch[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#rules Wafpolicypsmgroup#rules}
  */
  readonly rules?: WafpolicypsmgroupLocationsRules[] | cdktf.IResolvable;
}

export function wafpolicypsmgroupLocationsToTerraform(struct?: WafpolicypsmgroupLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    match: cdktf.listMapper(wafpolicypsmgroupLocationsMatchToTerraform, true)(struct!.match),
    rules: cdktf.listMapper(wafpolicypsmgroupLocationsRulesToTerraform, true)(struct!.rules),
  }
}


export function wafpolicypsmgroupLocationsToHclTerraform(struct?: WafpolicypsmgroupLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
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
    match: {
      value: cdktf.listMapperHcl(wafpolicypsmgroupLocationsMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "WafpolicypsmgroupLocationsMatchList",
    },
    rules: {
      value: cdktf.listMapperHcl(wafpolicypsmgroupLocationsRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "WafpolicypsmgroupLocationsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicypsmgroupLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicypsmgroupLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicypsmgroupLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._index = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._index = value.index;
      this._name = value.name;
      this._match.internalValue = value.match;
      this._rules.internalValue = value.rules;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // match - computed: false, optional: true, required: false
  private _match = new WafpolicypsmgroupLocationsMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: WafpolicypsmgroupLocationsMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WafpolicypsmgroupLocationsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WafpolicypsmgroupLocationsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class WafpolicypsmgroupLocationsList extends cdktf.ComplexList {
  public internalValue? : WafpolicypsmgroupLocations[] | cdktf.IResolvable

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
  public get(index: number): WafpolicypsmgroupLocationsOutputReference {
    return new WafpolicypsmgroupLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafpolicypsmgroupMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#key Wafpolicypsmgroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#values Wafpolicypsmgroup#values}
  */
  readonly values?: string[];
}

export function wafpolicypsmgroupMarkersToTerraform(struct?: WafpolicypsmgroupMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function wafpolicypsmgroupMarkersToHclTerraform(struct?: WafpolicypsmgroupMarkers | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafpolicypsmgroupMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafpolicypsmgroupMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafpolicypsmgroupMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
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

export class WafpolicypsmgroupMarkersList extends cdktf.ComplexList {
  public internalValue? : WafpolicypsmgroupMarkers[] | cdktf.IResolvable

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
  public get(index: number): WafpolicypsmgroupMarkersOutputReference {
    return new WafpolicypsmgroupMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup avi_wafpolicypsmgroup}
*/
export class Wafpolicypsmgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_wafpolicypsmgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafpolicypsmgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafpolicypsmgroup to import
  * @param importFromId The id of the existing Wafpolicypsmgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafpolicypsmgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_wafpolicypsmgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafpolicypsmgroup avi_wafpolicypsmgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafpolicypsmgroupConfig
  */
  public constructor(scope: Construct, id: string, config: WafpolicypsmgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_wafpolicypsmgroup',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enable = config.enable;
    this._hitAction = config.hitAction;
    this._id = config.id;
    this._isLearningGroup = config.isLearningGroup;
    this._missAction = config.missAction;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._locations.internalValue = config.locations;
    this._markers.internalValue = config.markers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // hit_action - computed: false, optional: true, required: false
  private _hitAction?: string; 
  public get hitAction() {
    return this.getStringAttribute('hit_action');
  }
  public set hitAction(value: string) {
    this._hitAction = value;
  }
  public resetHitAction() {
    this._hitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitActionInput() {
    return this._hitAction;
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

  // is_learning_group - computed: false, optional: true, required: false
  private _isLearningGroup?: string; 
  public get isLearningGroup() {
    return this.getStringAttribute('is_learning_group');
  }
  public set isLearningGroup(value: string) {
    this._isLearningGroup = value;
  }
  public resetIsLearningGroup() {
    this._isLearningGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLearningGroupInput() {
    return this._isLearningGroup;
  }

  // miss_action - computed: false, optional: true, required: false
  private _missAction?: string; 
  public get missAction() {
    return this.getStringAttribute('miss_action');
  }
  public set missAction(value: string) {
    this._missAction = value;
  }
  public resetMissAction() {
    this._missAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missActionInput() {
    return this._missAction;
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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new WafpolicypsmgroupConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: WafpolicypsmgroupConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new WafpolicypsmgroupLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }
  public putLocations(value: WafpolicypsmgroupLocations[] | cdktf.IResolvable) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new WafpolicypsmgroupMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: WafpolicypsmgroupMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enable: cdktf.stringToTerraform(this._enable),
      hit_action: cdktf.stringToTerraform(this._hitAction),
      id: cdktf.stringToTerraform(this._id),
      is_learning_group: cdktf.stringToTerraform(this._isLearningGroup),
      miss_action: cdktf.stringToTerraform(this._missAction),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(wafpolicypsmgroupConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      locations: cdktf.listMapper(wafpolicypsmgroupLocationsToTerraform, true)(this._locations.internalValue),
      markers: cdktf.listMapper(wafpolicypsmgroupMarkersToTerraform, true)(this._markers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.stringToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hit_action: {
        value: cdktf.stringToHclTerraform(this._hitAction),
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
      is_learning_group: {
        value: cdktf.stringToHclTerraform(this._isLearningGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      miss_action: {
        value: cdktf.stringToHclTerraform(this._missAction),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(wafpolicypsmgroupConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafpolicypsmgroupConfigpbAttributesList",
      },
      locations: {
        value: cdktf.listMapperHcl(wafpolicypsmgroupLocationsToHclTerraform, true)(this._locations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafpolicypsmgroupLocationsList",
      },
      markers: {
        value: cdktf.listMapperHcl(wafpolicypsmgroupMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafpolicypsmgroupMarkersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
