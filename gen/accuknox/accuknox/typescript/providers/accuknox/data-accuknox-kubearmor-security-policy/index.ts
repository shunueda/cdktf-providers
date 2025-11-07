// https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAccuknoxKubearmorSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_security_policy#id DataAccuknoxKubearmorSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_security_policy#name DataAccuknoxKubearmorSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_security_policy#namespace DataAccuknoxKubearmorSecurityPolicy#namespace}
  */
  readonly namespace?: string;
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSource {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilities {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getStringAttribute('capabilities');
  }

  // from_source - computed: true, optional: false, required: false
  private _fromSource = new DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyCapabilities {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // match_capabilities - computed: true, optional: false, required: false
  private _matchCapabilities = new DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesMatchCapabilitiesList(this, "match_capabilities", false);
  public get matchCapabilities() {
    return this._matchCapabilities;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSource {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSourceToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSourceOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectories {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // dir - computed: true, optional: false, required: false
  public get dir() {
    return this.getStringAttribute('dir');
  }

  // from_source - computed: true, optional: false, required: false
  private _fromSource = new DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // owner_only - computed: true, optional: false, required: false
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // recursive - computed: true, optional: false, required: false
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSource {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSourceToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSourceOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPaths {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // from_source - computed: true, optional: false, required: false
  private _fromSource = new DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // owner_only - computed: true, optional: false, required: false
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatterns {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatternsToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatternsToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatternsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // owner_only - computed: true, optional: false, required: false
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatternsOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyFile {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyFileToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyFileToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // match_directories - computed: true, optional: false, required: false
  private _matchDirectories = new DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchDirectoriesList(this, "match_directories", false);
  public get matchDirectories() {
    return this._matchDirectories;
  }

  // match_paths - computed: true, optional: false, required: false
  private _matchPaths = new DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }

  // match_patterns - computed: true, optional: false, required: false
  private _matchPatterns = new DataAccuknoxKubearmorSecurityPolicyPolicyFileMatchPatternsList(this, "match_patterns", false);
  public get matchPatterns() {
    return this._matchPatterns;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyFileOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSource {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSourceToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSourceOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocols {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // from_source - computed: true, optional: false, required: false
  private _fromSource = new DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyNetwork {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyNetworkToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyNetworkToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // match_protocols - computed: true, optional: false, required: false
  private _matchProtocols = new DataAccuknoxKubearmorSecurityPolicyPolicyNetworkMatchProtocolsList(this, "match_protocols", false);
  public get matchProtocols() {
    return this._matchProtocols;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyNetworkOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSource {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSourceToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSourceOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectories {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // dir - computed: true, optional: false, required: false
  public get dir() {
    return this.getStringAttribute('dir');
  }

  // from_source - computed: true, optional: false, required: false
  private _fromSource = new DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // owner_only - computed: true, optional: false, required: false
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }

  // recursive - computed: true, optional: false, required: false
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSource {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSourceToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSourceOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPaths {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // from_source - computed: true, optional: false, required: false
  private _fromSource = new DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // owner_only - computed: true, optional: false, required: false
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatterns {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatternsToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatternsToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatternsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // owner_only - computed: true, optional: false, required: false
  public get ownerOnly() {
    return this.getBooleanAttribute('owner_only');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatternsOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicyProcess {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyProcessToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicyProcess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicyProcess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicyProcess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // match_directories - computed: true, optional: false, required: false
  private _matchDirectories = new DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchDirectoriesList(this, "match_directories", false);
  public get matchDirectories() {
    return this._matchDirectories;
  }

  // match_paths - computed: true, optional: false, required: false
  private _matchPaths = new DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }

  // match_patterns - computed: true, optional: false, required: false
  private _matchPatterns = new DataAccuknoxKubearmorSecurityPolicyPolicyProcessMatchPatternsList(this, "match_patterns", false);
  public get matchPatterns() {
    return this._matchPatterns;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyProcessList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyProcessOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyProcessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicySelector {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicySelectorToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicySelectorToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicySelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicySelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicySelectorOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicySelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSource {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSourceToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dir - computed: true, optional: false, required: false
  public get dir() {
    return this.getStringAttribute('dir');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // recursive - computed: true, optional: false, required: false
  public get recursive() {
    return this.getStringAttribute('recursive');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSourceOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPaths {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_source - computed: true, optional: false, required: false
  private _fromSource = new DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // recursive - computed: true, optional: false, required: false
  public get recursive() {
    return this.getStringAttribute('recursive');
  }

  // syscall - computed: true, optional: false, required: false
  public get syscall() {
    return this.getListAttribute('syscall');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSource {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSourceToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dir - computed: true, optional: false, required: false
  public get dir() {
    return this.getStringAttribute('dir');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // recursive - computed: true, optional: false, required: false
  public get recursive() {
    return this.getStringAttribute('recursive');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSourceOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscalls {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_source - computed: true, optional: false, required: false
  private _fromSource = new DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }

  // syscall - computed: true, optional: false, required: false
  public get syscall() {
    return this.getListAttribute('syscall');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicySyscalls {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicySyscallsToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySyscalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicySyscallsToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicySyscalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySyscallsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicySyscalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicySyscalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_paths - computed: true, optional: false, required: false
  private _matchPaths = new DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }

  // match_syscalls - computed: true, optional: false, required: false
  private _matchSyscalls = new DataAccuknoxKubearmorSecurityPolicyPolicySyscallsMatchSyscallsList(this, "match_syscalls", false);
  public get matchSyscalls() {
    return this._matchSyscalls;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicySyscallsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicySyscallsOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicySyscallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorSecurityPolicyPolicy {
}

export function dataAccuknoxKubearmorSecurityPolicyPolicyToTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorSecurityPolicyPolicyToHclTerraform(struct?: DataAccuknoxKubearmorSecurityPolicyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAccuknoxKubearmorSecurityPolicyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorSecurityPolicyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataAccuknoxKubearmorSecurityPolicyPolicyCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAccuknoxKubearmorSecurityPolicyPolicyFileList(this, "file", false);
  public get file() {
    return this._file;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataAccuknoxKubearmorSecurityPolicyPolicyNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // process - computed: true, optional: false, required: false
  private _process = new DataAccuknoxKubearmorSecurityPolicyPolicyProcessList(this, "process", false);
  public get process() {
    return this._process;
  }

  // selector - computed: true, optional: false, required: false
  private _selector = new DataAccuknoxKubearmorSecurityPolicyPolicySelectorList(this, "selector", false);
  public get selector() {
    return this._selector;
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // syscalls - computed: true, optional: false, required: false
  private _syscalls = new DataAccuknoxKubearmorSecurityPolicyPolicySyscallsList(this, "syscalls", false);
  public get syscalls() {
    return this._syscalls;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataAccuknoxKubearmorSecurityPolicyPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorSecurityPolicyPolicyOutputReference {
    return new DataAccuknoxKubearmorSecurityPolicyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_security_policy accuknox_kubearmor_security_policy}
*/
export class DataAccuknoxKubearmorSecurityPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "accuknox_kubearmor_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAccuknoxKubearmorSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAccuknoxKubearmorSecurityPolicy to import
  * @param importFromId The id of the existing DataAccuknoxKubearmorSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAccuknoxKubearmorSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "accuknox_kubearmor_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_security_policy accuknox_kubearmor_security_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAccuknoxKubearmorSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAccuknoxKubearmorSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'accuknox_kubearmor_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'accuknox',
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
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataAccuknoxKubearmorSecurityPolicyPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
