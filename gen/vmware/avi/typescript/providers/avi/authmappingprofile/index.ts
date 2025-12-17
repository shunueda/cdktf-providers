// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthmappingprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#description Authmappingprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#id Authmappingprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#name Authmappingprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#tenant_ref Authmappingprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#type Authmappingprofile#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#uuid Authmappingprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#configpb_attributes Authmappingprofile#configpb_attributes}
  */
  readonly configpbAttributes?: AuthmappingprofileConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * mapping_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#mapping_rules Authmappingprofile#mapping_rules}
  */
  readonly mappingRules: AuthmappingprofileMappingRules[] | cdktf.IResolvable;
}
export interface AuthmappingprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#version Authmappingprofile#version}
  */
  readonly version?: string;
}

export function authmappingprofileConfigpbAttributesToTerraform(struct?: AuthmappingprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function authmappingprofileConfigpbAttributesToHclTerraform(struct?: AuthmappingprofileConfigpbAttributes | cdktf.IResolvable): any {
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

export class AuthmappingprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthmappingprofileConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthmappingprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class AuthmappingprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : AuthmappingprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): AuthmappingprofileConfigpbAttributesOutputReference {
    return new AuthmappingprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthmappingprofileMappingRulesAttributeMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#criteria Authmappingprofile#criteria}
  */
  readonly criteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#name Authmappingprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#values Authmappingprofile#values}
  */
  readonly values?: string[];
}

export function authmappingprofileMappingRulesAttributeMatchToTerraform(struct?: AuthmappingprofileMappingRulesAttributeMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function authmappingprofileMappingRulesAttributeMatchToHclTerraform(struct?: AuthmappingprofileMappingRulesAttributeMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
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

export class AuthmappingprofileMappingRulesAttributeMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthmappingprofileMappingRulesAttributeMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthmappingprofileMappingRulesAttributeMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria = value.criteria;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
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

export class AuthmappingprofileMappingRulesAttributeMatchList extends cdktf.ComplexList {
  public internalValue? : AuthmappingprofileMappingRulesAttributeMatch[] | cdktf.IResolvable

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
  public get(index: number): AuthmappingprofileMappingRulesAttributeMatchOutputReference {
    return new AuthmappingprofileMappingRulesAttributeMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthmappingprofileMappingRulesGroupMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#criteria Authmappingprofile#criteria}
  */
  readonly criteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#groups Authmappingprofile#groups}
  */
  readonly groups?: string[];
}

export function authmappingprofileMappingRulesGroupMatchToTerraform(struct?: AuthmappingprofileMappingRulesGroupMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
  }
}


export function authmappingprofileMappingRulesGroupMatchToHclTerraform(struct?: AuthmappingprofileMappingRulesGroupMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthmappingprofileMappingRulesGroupMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthmappingprofileMappingRulesGroupMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthmappingprofileMappingRulesGroupMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria = undefined;
      this._groups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria = value.criteria;
      this._groups = value.groups;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }
}

export class AuthmappingprofileMappingRulesGroupMatchList extends cdktf.ComplexList {
  public internalValue? : AuthmappingprofileMappingRulesGroupMatch[] | cdktf.IResolvable

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
  public get(index: number): AuthmappingprofileMappingRulesGroupMatchOutputReference {
    return new AuthmappingprofileMappingRulesGroupMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthmappingprofileMappingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#assign_policy Authmappingprofile#assign_policy}
  */
  readonly assignPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#assign_role Authmappingprofile#assign_role}
  */
  readonly assignRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#assign_tenant Authmappingprofile#assign_tenant}
  */
  readonly assignTenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#assign_userprofile Authmappingprofile#assign_userprofile}
  */
  readonly assignUserprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#default_tenant_ref Authmappingprofile#default_tenant_ref}
  */
  readonly defaultTenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#index Authmappingprofile#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#is_superuser Authmappingprofile#is_superuser}
  */
  readonly isSuperuser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#policy_attribute_name Authmappingprofile#policy_attribute_name}
  */
  readonly policyAttributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#role_attribute_name Authmappingprofile#role_attribute_name}
  */
  readonly roleAttributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#role_refs Authmappingprofile#role_refs}
  */
  readonly roleRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#tenant_attribute_name Authmappingprofile#tenant_attribute_name}
  */
  readonly tenantAttributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#tenant_refs Authmappingprofile#tenant_refs}
  */
  readonly tenantRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#userprofile_attribute_name Authmappingprofile#userprofile_attribute_name}
  */
  readonly userprofileAttributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#userprofile_ref Authmappingprofile#userprofile_ref}
  */
  readonly userprofileRef?: string;
  /**
  * attribute_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#attribute_match Authmappingprofile#attribute_match}
  */
  readonly attributeMatch?: AuthmappingprofileMappingRulesAttributeMatch[] | cdktf.IResolvable;
  /**
  * group_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#group_match Authmappingprofile#group_match}
  */
  readonly groupMatch?: AuthmappingprofileMappingRulesGroupMatch[] | cdktf.IResolvable;
}

export function authmappingprofileMappingRulesToTerraform(struct?: AuthmappingprofileMappingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_policy: cdktf.stringToTerraform(struct!.assignPolicy),
    assign_role: cdktf.stringToTerraform(struct!.assignRole),
    assign_tenant: cdktf.stringToTerraform(struct!.assignTenant),
    assign_userprofile: cdktf.stringToTerraform(struct!.assignUserprofile),
    default_tenant_ref: cdktf.stringToTerraform(struct!.defaultTenantRef),
    index: cdktf.stringToTerraform(struct!.index),
    is_superuser: cdktf.stringToTerraform(struct!.isSuperuser),
    policy_attribute_name: cdktf.stringToTerraform(struct!.policyAttributeName),
    role_attribute_name: cdktf.stringToTerraform(struct!.roleAttributeName),
    role_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roleRefs),
    tenant_attribute_name: cdktf.stringToTerraform(struct!.tenantAttributeName),
    tenant_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantRefs),
    userprofile_attribute_name: cdktf.stringToTerraform(struct!.userprofileAttributeName),
    userprofile_ref: cdktf.stringToTerraform(struct!.userprofileRef),
    attribute_match: cdktf.listMapper(authmappingprofileMappingRulesAttributeMatchToTerraform, true)(struct!.attributeMatch),
    group_match: cdktf.listMapper(authmappingprofileMappingRulesGroupMatchToTerraform, true)(struct!.groupMatch),
  }
}


export function authmappingprofileMappingRulesToHclTerraform(struct?: AuthmappingprofileMappingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_policy: {
      value: cdktf.stringToHclTerraform(struct!.assignPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assign_role: {
      value: cdktf.stringToHclTerraform(struct!.assignRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assign_tenant: {
      value: cdktf.stringToHclTerraform(struct!.assignTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assign_userprofile: {
      value: cdktf.stringToHclTerraform(struct!.assignUserprofile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_tenant_ref: {
      value: cdktf.stringToHclTerraform(struct!.defaultTenantRef),
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
    is_superuser: {
      value: cdktf.stringToHclTerraform(struct!.isSuperuser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.policyAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.roleAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roleRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tenant_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    userprofile_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.userprofileAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userprofile_ref: {
      value: cdktf.stringToHclTerraform(struct!.userprofileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_match: {
      value: cdktf.listMapperHcl(authmappingprofileMappingRulesAttributeMatchToHclTerraform, true)(struct!.attributeMatch),
      isBlock: true,
      type: "set",
      storageClassType: "AuthmappingprofileMappingRulesAttributeMatchList",
    },
    group_match: {
      value: cdktf.listMapperHcl(authmappingprofileMappingRulesGroupMatchToHclTerraform, true)(struct!.groupMatch),
      isBlock: true,
      type: "set",
      storageClassType: "AuthmappingprofileMappingRulesGroupMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthmappingprofileMappingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthmappingprofileMappingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPolicy = this._assignPolicy;
    }
    if (this._assignRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignRole = this._assignRole;
    }
    if (this._assignTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignTenant = this._assignTenant;
    }
    if (this._assignUserprofile !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignUserprofile = this._assignUserprofile;
    }
    if (this._defaultTenantRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTenantRef = this._defaultTenantRef;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._isSuperuser !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSuperuser = this._isSuperuser;
    }
    if (this._policyAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyAttributeName = this._policyAttributeName;
    }
    if (this._roleAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleAttributeName = this._roleAttributeName;
    }
    if (this._roleRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleRefs = this._roleRefs;
    }
    if (this._tenantAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantAttributeName = this._tenantAttributeName;
    }
    if (this._tenantRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantRefs = this._tenantRefs;
    }
    if (this._userprofileAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userprofileAttributeName = this._userprofileAttributeName;
    }
    if (this._userprofileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.userprofileRef = this._userprofileRef;
    }
    if (this._attributeMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMatch = this._attributeMatch?.internalValue;
    }
    if (this._groupMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMatch = this._groupMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthmappingprofileMappingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPolicy = undefined;
      this._assignRole = undefined;
      this._assignTenant = undefined;
      this._assignUserprofile = undefined;
      this._defaultTenantRef = undefined;
      this._index = undefined;
      this._isSuperuser = undefined;
      this._policyAttributeName = undefined;
      this._roleAttributeName = undefined;
      this._roleRefs = undefined;
      this._tenantAttributeName = undefined;
      this._tenantRefs = undefined;
      this._userprofileAttributeName = undefined;
      this._userprofileRef = undefined;
      this._attributeMatch.internalValue = undefined;
      this._groupMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPolicy = value.assignPolicy;
      this._assignRole = value.assignRole;
      this._assignTenant = value.assignTenant;
      this._assignUserprofile = value.assignUserprofile;
      this._defaultTenantRef = value.defaultTenantRef;
      this._index = value.index;
      this._isSuperuser = value.isSuperuser;
      this._policyAttributeName = value.policyAttributeName;
      this._roleAttributeName = value.roleAttributeName;
      this._roleRefs = value.roleRefs;
      this._tenantAttributeName = value.tenantAttributeName;
      this._tenantRefs = value.tenantRefs;
      this._userprofileAttributeName = value.userprofileAttributeName;
      this._userprofileRef = value.userprofileRef;
      this._attributeMatch.internalValue = value.attributeMatch;
      this._groupMatch.internalValue = value.groupMatch;
    }
  }

  // assign_policy - computed: true, optional: true, required: false
  private _assignPolicy?: string; 
  public get assignPolicy() {
    return this.getStringAttribute('assign_policy');
  }
  public set assignPolicy(value: string) {
    this._assignPolicy = value;
  }
  public resetAssignPolicy() {
    this._assignPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPolicyInput() {
    return this._assignPolicy;
  }

  // assign_role - computed: true, optional: true, required: false
  private _assignRole?: string; 
  public get assignRole() {
    return this.getStringAttribute('assign_role');
  }
  public set assignRole(value: string) {
    this._assignRole = value;
  }
  public resetAssignRole() {
    this._assignRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignRoleInput() {
    return this._assignRole;
  }

  // assign_tenant - computed: true, optional: true, required: false
  private _assignTenant?: string; 
  public get assignTenant() {
    return this.getStringAttribute('assign_tenant');
  }
  public set assignTenant(value: string) {
    this._assignTenant = value;
  }
  public resetAssignTenant() {
    this._assignTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignTenantInput() {
    return this._assignTenant;
  }

  // assign_userprofile - computed: true, optional: true, required: false
  private _assignUserprofile?: string; 
  public get assignUserprofile() {
    return this.getStringAttribute('assign_userprofile');
  }
  public set assignUserprofile(value: string) {
    this._assignUserprofile = value;
  }
  public resetAssignUserprofile() {
    this._assignUserprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignUserprofileInput() {
    return this._assignUserprofile;
  }

  // default_tenant_ref - computed: true, optional: true, required: false
  private _defaultTenantRef?: string; 
  public get defaultTenantRef() {
    return this.getStringAttribute('default_tenant_ref');
  }
  public set defaultTenantRef(value: string) {
    this._defaultTenantRef = value;
  }
  public resetDefaultTenantRef() {
    this._defaultTenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTenantRefInput() {
    return this._defaultTenantRef;
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

  // is_superuser - computed: true, optional: true, required: false
  private _isSuperuser?: string; 
  public get isSuperuser() {
    return this.getStringAttribute('is_superuser');
  }
  public set isSuperuser(value: string) {
    this._isSuperuser = value;
  }
  public resetIsSuperuser() {
    this._isSuperuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSuperuserInput() {
    return this._isSuperuser;
  }

  // policy_attribute_name - computed: true, optional: true, required: false
  private _policyAttributeName?: string; 
  public get policyAttributeName() {
    return this.getStringAttribute('policy_attribute_name');
  }
  public set policyAttributeName(value: string) {
    this._policyAttributeName = value;
  }
  public resetPolicyAttributeName() {
    this._policyAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAttributeNameInput() {
    return this._policyAttributeName;
  }

  // role_attribute_name - computed: true, optional: true, required: false
  private _roleAttributeName?: string; 
  public get roleAttributeName() {
    return this.getStringAttribute('role_attribute_name');
  }
  public set roleAttributeName(value: string) {
    this._roleAttributeName = value;
  }
  public resetRoleAttributeName() {
    this._roleAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAttributeNameInput() {
    return this._roleAttributeName;
  }

  // role_refs - computed: false, optional: true, required: false
  private _roleRefs?: string[]; 
  public get roleRefs() {
    return this.getListAttribute('role_refs');
  }
  public set roleRefs(value: string[]) {
    this._roleRefs = value;
  }
  public resetRoleRefs() {
    this._roleRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRefsInput() {
    return this._roleRefs;
  }

  // tenant_attribute_name - computed: true, optional: true, required: false
  private _tenantAttributeName?: string; 
  public get tenantAttributeName() {
    return this.getStringAttribute('tenant_attribute_name');
  }
  public set tenantAttributeName(value: string) {
    this._tenantAttributeName = value;
  }
  public resetTenantAttributeName() {
    this._tenantAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantAttributeNameInput() {
    return this._tenantAttributeName;
  }

  // tenant_refs - computed: false, optional: true, required: false
  private _tenantRefs?: string[]; 
  public get tenantRefs() {
    return this.getListAttribute('tenant_refs');
  }
  public set tenantRefs(value: string[]) {
    this._tenantRefs = value;
  }
  public resetTenantRefs() {
    this._tenantRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefsInput() {
    return this._tenantRefs;
  }

  // userprofile_attribute_name - computed: true, optional: true, required: false
  private _userprofileAttributeName?: string; 
  public get userprofileAttributeName() {
    return this.getStringAttribute('userprofile_attribute_name');
  }
  public set userprofileAttributeName(value: string) {
    this._userprofileAttributeName = value;
  }
  public resetUserprofileAttributeName() {
    this._userprofileAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userprofileAttributeNameInput() {
    return this._userprofileAttributeName;
  }

  // userprofile_ref - computed: true, optional: true, required: false
  private _userprofileRef?: string; 
  public get userprofileRef() {
    return this.getStringAttribute('userprofile_ref');
  }
  public set userprofileRef(value: string) {
    this._userprofileRef = value;
  }
  public resetUserprofileRef() {
    this._userprofileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userprofileRefInput() {
    return this._userprofileRef;
  }

  // attribute_match - computed: false, optional: true, required: false
  private _attributeMatch = new AuthmappingprofileMappingRulesAttributeMatchList(this, "attribute_match", true);
  public get attributeMatch() {
    return this._attributeMatch;
  }
  public putAttributeMatch(value: AuthmappingprofileMappingRulesAttributeMatch[] | cdktf.IResolvable) {
    this._attributeMatch.internalValue = value;
  }
  public resetAttributeMatch() {
    this._attributeMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMatchInput() {
    return this._attributeMatch.internalValue;
  }

  // group_match - computed: false, optional: true, required: false
  private _groupMatch = new AuthmappingprofileMappingRulesGroupMatchList(this, "group_match", true);
  public get groupMatch() {
    return this._groupMatch;
  }
  public putGroupMatch(value: AuthmappingprofileMappingRulesGroupMatch[] | cdktf.IResolvable) {
    this._groupMatch.internalValue = value;
  }
  public resetGroupMatch() {
    this._groupMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMatchInput() {
    return this._groupMatch.internalValue;
  }
}

export class AuthmappingprofileMappingRulesList extends cdktf.ComplexList {
  public internalValue? : AuthmappingprofileMappingRules[] | cdktf.IResolvable

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
  public get(index: number): AuthmappingprofileMappingRulesOutputReference {
    return new AuthmappingprofileMappingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile avi_authmappingprofile}
*/
export class Authmappingprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_authmappingprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authmappingprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authmappingprofile to import
  * @param importFromId The id of the existing Authmappingprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authmappingprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_authmappingprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/authmappingprofile avi_authmappingprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthmappingprofileConfig
  */
  public constructor(scope: Construct, id: string, config: AuthmappingprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_authmappingprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
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
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._type = config.type;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._mappingRules.internalValue = config.mappingRules;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
  private _configpbAttributes = new AuthmappingprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: AuthmappingprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // mapping_rules - computed: false, optional: false, required: true
  private _mappingRules = new AuthmappingprofileMappingRulesList(this, "mapping_rules", false);
  public get mappingRules() {
    return this._mappingRules;
  }
  public putMappingRules(value: AuthmappingprofileMappingRules[] | cdktf.IResolvable) {
    this._mappingRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRulesInput() {
    return this._mappingRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(authmappingprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      mapping_rules: cdktf.listMapper(authmappingprofileMappingRulesToTerraform, true)(this._mappingRules.internalValue),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
        value: cdktf.listMapperHcl(authmappingprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthmappingprofileConfigpbAttributesList",
      },
      mapping_rules: {
        value: cdktf.listMapperHcl(authmappingprofileMappingRulesToHclTerraform, true)(this._mappingRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthmappingprofileMappingRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
