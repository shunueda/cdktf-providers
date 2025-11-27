// https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/data-sources/k8sv2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGcoreK8Sv2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/data-sources/k8sv2#id DataGcoreK8Sv2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/data-sources/k8sv2#name DataGcoreK8Sv2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/data-sources/k8sv2#project_id DataGcoreK8Sv2#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/data-sources/k8sv2#project_name DataGcoreK8Sv2#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/data-sources/k8sv2#region_id DataGcoreK8Sv2#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/data-sources/k8sv2#region_name DataGcoreK8Sv2#region_name}
  */
  readonly regionName?: string;
}
export interface DataGcoreK8Sv2AuthenticationOidc {
}

export function dataGcoreK8Sv2AuthenticationOidcToTerraform(struct?: DataGcoreK8Sv2AuthenticationOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreK8Sv2AuthenticationOidcToHclTerraform(struct?: DataGcoreK8Sv2AuthenticationOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreK8Sv2AuthenticationOidcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreK8Sv2AuthenticationOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreK8Sv2AuthenticationOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // groups_claim - computed: true, optional: false, required: false
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }

  // groups_prefix - computed: true, optional: false, required: false
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }

  // issuer_url - computed: true, optional: false, required: false
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }

  // required_claims - computed: true, optional: false, required: false
  private _requiredClaims = new cdktf.StringMap(this, "required_claims");
  public get requiredClaims() {
    return this._requiredClaims;
  }

  // signing_algs - computed: true, optional: false, required: false
  public get signingAlgs() {
    return cdktf.Fn.tolist(this.getListAttribute('signing_algs'));
  }

  // username_claim - computed: true, optional: false, required: false
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }

  // username_prefix - computed: true, optional: false, required: false
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
}

export class DataGcoreK8Sv2AuthenticationOidcList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreK8Sv2AuthenticationOidcOutputReference {
    return new DataGcoreK8Sv2AuthenticationOidcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreK8Sv2Authentication {
}

export function dataGcoreK8Sv2AuthenticationToTerraform(struct?: DataGcoreK8Sv2Authentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreK8Sv2AuthenticationToHclTerraform(struct?: DataGcoreK8Sv2Authentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreK8Sv2AuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreK8Sv2Authentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreK8Sv2Authentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oidc - computed: true, optional: false, required: false
  private _oidc = new DataGcoreK8Sv2AuthenticationOidcList(this, "oidc", false);
  public get oidc() {
    return this._oidc;
  }
}

export class DataGcoreK8Sv2AuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreK8Sv2AuthenticationOutputReference {
    return new DataGcoreK8Sv2AuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreK8Sv2CniCilium {
}

export function dataGcoreK8Sv2CniCiliumToTerraform(struct?: DataGcoreK8Sv2CniCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreK8Sv2CniCiliumToHclTerraform(struct?: DataGcoreK8Sv2CniCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreK8Sv2CniCiliumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreK8Sv2CniCilium | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreK8Sv2CniCilium | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }

  // hubble_relay - computed: true, optional: false, required: false
  public get hubbleRelay() {
    return this.getBooleanAttribute('hubble_relay');
  }

  // hubble_ui - computed: true, optional: false, required: false
  public get hubbleUi() {
    return this.getBooleanAttribute('hubble_ui');
  }

  // lb_acceleration - computed: true, optional: false, required: false
  public get lbAcceleration() {
    return this.getBooleanAttribute('lb_acceleration');
  }

  // lb_mode - computed: true, optional: false, required: false
  public get lbMode() {
    return this.getStringAttribute('lb_mode');
  }

  // mask_size - computed: true, optional: false, required: false
  public get maskSize() {
    return this.getNumberAttribute('mask_size');
  }

  // mask_size_v6 - computed: true, optional: false, required: false
  public get maskSizeV6() {
    return this.getNumberAttribute('mask_size_v6');
  }

  // routing_mode - computed: true, optional: false, required: false
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }

  // tunnel - computed: true, optional: false, required: false
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
}

export class DataGcoreK8Sv2CniCiliumList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreK8Sv2CniCiliumOutputReference {
    return new DataGcoreK8Sv2CniCiliumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreK8Sv2Cni {
}

export function dataGcoreK8Sv2CniToTerraform(struct?: DataGcoreK8Sv2Cni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreK8Sv2CniToHclTerraform(struct?: DataGcoreK8Sv2Cni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreK8Sv2CniOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreK8Sv2Cni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreK8Sv2Cni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cilium - computed: true, optional: false, required: false
  private _cilium = new DataGcoreK8Sv2CniCiliumList(this, "cilium", false);
  public get cilium() {
    return this._cilium;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}

export class DataGcoreK8Sv2CniList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreK8Sv2CniOutputReference {
    return new DataGcoreK8Sv2CniOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreK8Sv2CsiNfs {
}

export function dataGcoreK8Sv2CsiNfsToTerraform(struct?: DataGcoreK8Sv2CsiNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreK8Sv2CsiNfsToHclTerraform(struct?: DataGcoreK8Sv2CsiNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreK8Sv2CsiNfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreK8Sv2CsiNfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreK8Sv2CsiNfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vast_enabled - computed: true, optional: false, required: false
  public get vastEnabled() {
    return this.getBooleanAttribute('vast_enabled');
  }
}

export class DataGcoreK8Sv2CsiNfsList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreK8Sv2CsiNfsOutputReference {
    return new DataGcoreK8Sv2CsiNfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreK8Sv2Csi {
}

export function dataGcoreK8Sv2CsiToTerraform(struct?: DataGcoreK8Sv2Csi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreK8Sv2CsiToHclTerraform(struct?: DataGcoreK8Sv2Csi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreK8Sv2CsiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreK8Sv2Csi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreK8Sv2Csi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nfs - computed: true, optional: false, required: false
  private _nfs = new DataGcoreK8Sv2CsiNfsList(this, "nfs", false);
  public get nfs() {
    return this._nfs;
  }
}

export class DataGcoreK8Sv2CsiList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreK8Sv2CsiOutputReference {
    return new DataGcoreK8Sv2CsiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreK8Sv2DdosProfileFields {
}

export function dataGcoreK8Sv2DdosProfileFieldsToTerraform(struct?: DataGcoreK8Sv2DdosProfileFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreK8Sv2DdosProfileFieldsToHclTerraform(struct?: DataGcoreK8Sv2DdosProfileFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreK8Sv2DdosProfileFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreK8Sv2DdosProfileFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreK8Sv2DdosProfileFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_field - computed: true, optional: false, required: false
  public get baseField() {
    return this.getNumberAttribute('base_field');
  }

  // field_value - computed: true, optional: false, required: false
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGcoreK8Sv2DdosProfileFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreK8Sv2DdosProfileFieldsOutputReference {
    return new DataGcoreK8Sv2DdosProfileFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreK8Sv2DdosProfile {
}

export function dataGcoreK8Sv2DdosProfileToTerraform(struct?: DataGcoreK8Sv2DdosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreK8Sv2DdosProfileToHclTerraform(struct?: DataGcoreK8Sv2DdosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreK8Sv2DdosProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreK8Sv2DdosProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreK8Sv2DdosProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataGcoreK8Sv2DdosProfileFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }

  // profile_template - computed: true, optional: false, required: false
  public get profileTemplate() {
    return this.getNumberAttribute('profile_template');
  }

  // profile_template_name - computed: true, optional: false, required: false
  public get profileTemplateName() {
    return this.getStringAttribute('profile_template_name');
  }
}

export class DataGcoreK8Sv2DdosProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreK8Sv2DdosProfileOutputReference {
    return new DataGcoreK8Sv2DdosProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreK8Sv2Pools {
}

export function dataGcoreK8Sv2PoolsToTerraform(struct?: DataGcoreK8Sv2Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreK8Sv2PoolsToHclTerraform(struct?: DataGcoreK8Sv2Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreK8Sv2PoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreK8Sv2Pools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreK8Sv2Pools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_healing_enabled - computed: true, optional: false, required: false
  public get autoHealingEnabled() {
    return this.getBooleanAttribute('auto_healing_enabled');
  }

  // boot_volume_size - computed: true, optional: false, required: false
  public get bootVolumeSize() {
    return this.getNumberAttribute('boot_volume_size');
  }

  // boot_volume_type - computed: true, optional: false, required: false
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // crio_config - computed: true, optional: false, required: false
  private _crioConfig = new cdktf.StringMap(this, "crio_config");
  public get crioConfig() {
    return this._crioConfig;
  }

  // flavor_id - computed: true, optional: false, required: false
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }

  // is_public_ipv4 - computed: true, optional: false, required: false
  public get isPublicIpv4() {
    return this.getBooleanAttribute('is_public_ipv4');
  }

  // kubelet_config - computed: true, optional: false, required: false
  private _kubeletConfig = new cdktf.StringMap(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // max_node_count - computed: true, optional: false, required: false
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }

  // min_node_count - computed: true, optional: false, required: false
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // servergroup_id - computed: true, optional: false, required: false
  public get servergroupId() {
    return this.getStringAttribute('servergroup_id');
  }

  // servergroup_name - computed: true, optional: false, required: false
  public get servergroupName() {
    return this.getStringAttribute('servergroup_name');
  }

  // servergroup_policy - computed: true, optional: false, required: false
  public get servergroupPolicy() {
    return this.getStringAttribute('servergroup_policy');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new cdktf.StringMap(this, "taints");
  public get taints() {
    return this._taints;
  }
}

export class DataGcoreK8Sv2PoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreK8Sv2PoolsOutputReference {
    return new DataGcoreK8Sv2PoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/data-sources/k8sv2 gcore_k8sv2}
*/
export class DataGcoreK8Sv2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_k8sv2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGcoreK8Sv2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGcoreK8Sv2 to import
  * @param importFromId The id of the existing DataGcoreK8Sv2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/data-sources/k8sv2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGcoreK8Sv2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_k8sv2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/data-sources/k8sv2 gcore_k8sv2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGcoreK8Sv2Config
  */
  public constructor(scope: Construct, id: string, config: DataGcoreK8Sv2Config) {
    super(scope, id, {
      terraformResourceType: 'gcore_k8sv2',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.2',
        providerVersionConstraint: '0.32.2'
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
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataGcoreK8Sv2AuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }

  // autoscaler_config - computed: true, optional: false, required: false
  private _autoscalerConfig = new cdktf.StringMap(this, "autoscaler_config");
  public get autoscalerConfig() {
    return this._autoscalerConfig;
  }

  // cni - computed: true, optional: false, required: false
  private _cni = new DataGcoreK8Sv2CniList(this, "cni", false);
  public get cni() {
    return this._cni;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // creator_task_id - computed: true, optional: false, required: false
  public get creatorTaskId() {
    return this.getStringAttribute('creator_task_id');
  }

  // csi - computed: true, optional: false, required: false
  private _csi = new DataGcoreK8Sv2CsiList(this, "csi", false);
  public get csi() {
    return this._csi;
  }

  // ddos_profile - computed: true, optional: false, required: false
  private _ddosProfile = new DataGcoreK8Sv2DdosProfileList(this, "ddos_profile", false);
  public get ddosProfile() {
    return this._ddosProfile;
  }

  // fixed_network - computed: true, optional: false, required: false
  public get fixedNetwork() {
    return this.getStringAttribute('fixed_network');
  }

  // fixed_subnet - computed: true, optional: false, required: false
  public get fixedSubnet() {
    return this.getStringAttribute('fixed_subnet');
  }

  // flavor_id - computed: true, optional: false, required: false
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
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

  // is_ipv6 - computed: true, optional: false, required: false
  public get isIpv6() {
    return this.getBooleanAttribute('is_ipv6');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // keypair - computed: true, optional: false, required: false
  public get keypair() {
    return this.getStringAttribute('keypair');
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

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // pods_ip_pool - computed: true, optional: false, required: false
  public get podsIpPool() {
    return this.getStringAttribute('pods_ip_pool');
  }

  // pods_ipv6_pool - computed: true, optional: false, required: false
  public get podsIpv6Pool() {
    return this.getStringAttribute('pods_ipv6_pool');
  }

  // pools - computed: true, optional: false, required: false
  private _pools = new DataGcoreK8Sv2PoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // services_ip_pool - computed: true, optional: false, required: false
  public get servicesIpPool() {
    return this.getStringAttribute('services_ip_pool');
  }

  // services_ipv6_pool - computed: true, optional: false, required: false
  public get servicesIpv6Pool() {
    return this.getStringAttribute('services_ipv6_pool');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
