// https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_host_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAccuknoxKubearmorHostSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_host_security_policy#id DataAccuknoxKubearmorHostSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_host_security_policy#name DataAccuknoxKubearmorHostSecurityPolicy#name}
  */
  readonly name: string;
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSource {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSource | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilities {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilities | undefined) {
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
  private _fromSource = new DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesFromSourceList(this, "from_source", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilities {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilities | undefined) {
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
  private _matchCapabilities = new DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesMatchCapabilitiesList(this, "match_capabilities", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSource {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSourceToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSource | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSourceOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectories {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectories | undefined) {
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
  private _fromSource = new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesFromSourceList(this, "from_source", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSource {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSourceToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSource | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSourceOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPaths {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPaths | undefined) {
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
  private _fromSource = new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsFromSourceList(this, "from_source", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatterns {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatternsToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatternsToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatterns | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatternsOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyFile {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyFileToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyFile | undefined) {
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
  private _matchDirectories = new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchDirectoriesList(this, "match_directories", false);
  public get matchDirectories() {
    return this._matchDirectories;
  }

  // match_paths - computed: true, optional: false, required: false
  private _matchPaths = new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }

  // match_patterns - computed: true, optional: false, required: false
  private _matchPatterns = new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileMatchPatternsList(this, "match_patterns", false);
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
    return this.getStringAttribute('tags');
  }
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyFileOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSource {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSourceToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSource | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSourceOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocols {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocols | undefined) {
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
  private _fromSource = new DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsFromSourceList(this, "from_source", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyNetwork {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyNetwork | undefined) {
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
  private _matchProtocols = new DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkMatchProtocolsList(this, "match_protocols", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelector {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelectorToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelectorToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelector | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelectorOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSource {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSourceToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSource | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSourceOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectories {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectories | undefined) {
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
  private _fromSource = new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesFromSourceList(this, "from_source", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSource {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSourceToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSource | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSourceOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPaths {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPaths | undefined) {
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
  private _fromSource = new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsFromSourceList(this, "from_source", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatterns {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatternsToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatternsToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatterns | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatternsOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicyProcess {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyProcessToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicyProcess | undefined) {
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
  private _matchDirectories = new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchDirectoriesList(this, "match_directories", false);
  public get matchDirectories() {
    return this._matchDirectories;
  }

  // match_paths - computed: true, optional: false, required: false
  private _matchPaths = new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }

  // match_patterns - computed: true, optional: false, required: false
  private _matchPatterns = new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessMatchPatternsList(this, "match_patterns", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSource {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSourceToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSource | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSourceOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPaths {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_source - computed: true, optional: false, required: false
  private _fromSource = new DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsFromSourceList(this, "from_source", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSource {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSourceToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSourceToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSource | undefined) {
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSourceOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscalls {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_source - computed: true, optional: false, required: false
  private _fromSource = new DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsFromSourceList(this, "from_source", false);
  public get fromSource() {
    return this._fromSource;
  }

  // syscall - computed: true, optional: false, required: false
  public get syscall() {
    return this.getListAttribute('syscall');
  }
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicySyscalls {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicySyscalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicySyscalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_paths - computed: true, optional: false, required: false
  private _matchPaths = new DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }

  // match_syscalls - computed: true, optional: false, required: false
  private _matchSyscalls = new DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsMatchSyscallsList(this, "match_syscalls", false);
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

export class DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAccuknoxKubearmorHostSecurityPolicyPolicy {
}

export function dataAccuknoxKubearmorHostSecurityPolicyPolicyToTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAccuknoxKubearmorHostSecurityPolicyPolicyToHclTerraform(struct?: DataAccuknoxKubearmorHostSecurityPolicyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAccuknoxKubearmorHostSecurityPolicyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAccuknoxKubearmorHostSecurityPolicyPolicy | undefined) {
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
  private _capabilities = new DataAccuknoxKubearmorHostSecurityPolicyPolicyCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAccuknoxKubearmorHostSecurityPolicyPolicyFileList(this, "file", false);
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
  private _network = new DataAccuknoxKubearmorHostSecurityPolicyPolicyNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new DataAccuknoxKubearmorHostSecurityPolicyPolicyNodeSelectorList(this, "node_selector", false);
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // process - computed: true, optional: false, required: false
  private _process = new DataAccuknoxKubearmorHostSecurityPolicyPolicyProcessList(this, "process", false);
  public get process() {
    return this._process;
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // syscalls - computed: true, optional: false, required: false
  private _syscalls = new DataAccuknoxKubearmorHostSecurityPolicyPolicySyscallsList(this, "syscalls", false);
  public get syscalls() {
    return this._syscalls;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }
}

export class DataAccuknoxKubearmorHostSecurityPolicyPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAccuknoxKubearmorHostSecurityPolicyPolicyOutputReference {
    return new DataAccuknoxKubearmorHostSecurityPolicyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_host_security_policy accuknox_kubearmor_host_security_policy}
*/
export class DataAccuknoxKubearmorHostSecurityPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "accuknox_kubearmor_host_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAccuknoxKubearmorHostSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAccuknoxKubearmorHostSecurityPolicy to import
  * @param importFromId The id of the existing DataAccuknoxKubearmorHostSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_host_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAccuknoxKubearmorHostSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "accuknox_kubearmor_host_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_host_security_policy accuknox_kubearmor_host_security_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAccuknoxKubearmorHostSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAccuknoxKubearmorHostSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'accuknox_kubearmor_host_security_policy',
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

  // policy - computed: true, optional: false, required: false
  private _policy = new DataAccuknoxKubearmorHostSecurityPolicyPolicyList(this, "policy", false);
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
