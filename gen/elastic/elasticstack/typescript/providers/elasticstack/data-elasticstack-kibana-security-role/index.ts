// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/kibana_security_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackKibanaSecurityRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/kibana_security_role#description DataElasticstackKibanaSecurityRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/kibana_security_role#id DataElasticstackKibanaSecurityRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional meta-data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/kibana_security_role#metadata DataElasticstackKibanaSecurityRole#metadata}
  */
  readonly metadata?: string;
  /**
  * The name for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/kibana_security_role#name DataElasticstackKibanaSecurityRole#name}
  */
  readonly name: string;
}
export interface DataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurity {
}

export function dataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurityToTerraform(struct?: DataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurityToHclTerraform(struct?: DataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // except - computed: true, optional: false, required: false
  public get except() {
    return cdktf.Fn.tolist(this.getListAttribute('except'));
  }

  // grant - computed: true, optional: false, required: false
  public get grant() {
    return cdktf.Fn.tolist(this.getListAttribute('grant'));
  }
}

export class DataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurityList extends cdktf.ComplexList {

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
  public get(index: number): DataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurityOutputReference {
    return new DataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataElasticstackKibanaSecurityRoleElasticsearchIndices {
}

export function dataElasticstackKibanaSecurityRoleElasticsearchIndicesToTerraform(struct?: DataElasticstackKibanaSecurityRoleElasticsearchIndices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataElasticstackKibanaSecurityRoleElasticsearchIndicesToHclTerraform(struct?: DataElasticstackKibanaSecurityRoleElasticsearchIndices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataElasticstackKibanaSecurityRoleElasticsearchIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataElasticstackKibanaSecurityRoleElasticsearchIndices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataElasticstackKibanaSecurityRoleElasticsearchIndices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_security - computed: true, optional: false, required: false
  private _fieldSecurity = new DataElasticstackKibanaSecurityRoleElasticsearchIndicesFieldSecurityList(this, "field_security", false);
  public get fieldSecurity() {
    return this._fieldSecurity;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }

  // privileges - computed: true, optional: false, required: false
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}

export class DataElasticstackKibanaSecurityRoleElasticsearchIndicesList extends cdktf.ComplexList {

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
  public get(index: number): DataElasticstackKibanaSecurityRoleElasticsearchIndicesOutputReference {
    return new DataElasticstackKibanaSecurityRoleElasticsearchIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity {
}

export function dataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityToTerraform(struct?: DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityToHclTerraform(struct?: DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // except - computed: true, optional: false, required: false
  public get except() {
    return cdktf.Fn.tolist(this.getListAttribute('except'));
  }

  // grant - computed: true, optional: false, required: false
  public get grant() {
    return cdktf.Fn.tolist(this.getListAttribute('grant'));
  }
}

export class DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityList extends cdktf.ComplexList {

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
  public get(index: number): DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityOutputReference {
    return new DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndices {
}

export function dataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesToTerraform(struct?: DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesToHclTerraform(struct?: DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clusters - computed: true, optional: false, required: false
  public get clusters() {
    return cdktf.Fn.tolist(this.getListAttribute('clusters'));
  }

  // field_security - computed: true, optional: false, required: false
  private _fieldSecurity = new DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesFieldSecurityList(this, "field_security", false);
  public get fieldSecurity() {
    return this._fieldSecurity;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }

  // privileges - computed: true, optional: false, required: false
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}

export class DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesList extends cdktf.ComplexList {

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
  public get(index: number): DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesOutputReference {
    return new DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataElasticstackKibanaSecurityRoleElasticsearch {
}

export function dataElasticstackKibanaSecurityRoleElasticsearchToTerraform(struct?: DataElasticstackKibanaSecurityRoleElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataElasticstackKibanaSecurityRoleElasticsearchToHclTerraform(struct?: DataElasticstackKibanaSecurityRoleElasticsearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataElasticstackKibanaSecurityRoleElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataElasticstackKibanaSecurityRoleElasticsearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataElasticstackKibanaSecurityRoleElasticsearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster'));
  }

  // indices - computed: true, optional: false, required: false
  private _indices = new DataElasticstackKibanaSecurityRoleElasticsearchIndicesList(this, "indices", true);
  public get indices() {
    return this._indices;
  }

  // remote_indices - computed: true, optional: false, required: false
  private _remoteIndices = new DataElasticstackKibanaSecurityRoleElasticsearchRemoteIndicesList(this, "remote_indices", true);
  public get remoteIndices() {
    return this._remoteIndices;
  }

  // run_as - computed: true, optional: false, required: false
  public get runAs() {
    return cdktf.Fn.tolist(this.getListAttribute('run_as'));
  }
}

export class DataElasticstackKibanaSecurityRoleElasticsearchList extends cdktf.ComplexList {

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
  public get(index: number): DataElasticstackKibanaSecurityRoleElasticsearchOutputReference {
    return new DataElasticstackKibanaSecurityRoleElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataElasticstackKibanaSecurityRoleKibanaFeature {
}

export function dataElasticstackKibanaSecurityRoleKibanaFeatureToTerraform(struct?: DataElasticstackKibanaSecurityRoleKibanaFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataElasticstackKibanaSecurityRoleKibanaFeatureToHclTerraform(struct?: DataElasticstackKibanaSecurityRoleKibanaFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataElasticstackKibanaSecurityRoleKibanaFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataElasticstackKibanaSecurityRoleKibanaFeature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataElasticstackKibanaSecurityRoleKibanaFeature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privileges - computed: true, optional: false, required: false
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
}

export class DataElasticstackKibanaSecurityRoleKibanaFeatureList extends cdktf.ComplexList {

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
  public get(index: number): DataElasticstackKibanaSecurityRoleKibanaFeatureOutputReference {
    return new DataElasticstackKibanaSecurityRoleKibanaFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataElasticstackKibanaSecurityRoleKibana {
}

export function dataElasticstackKibanaSecurityRoleKibanaToTerraform(struct?: DataElasticstackKibanaSecurityRoleKibana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataElasticstackKibanaSecurityRoleKibanaToHclTerraform(struct?: DataElasticstackKibanaSecurityRoleKibana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataElasticstackKibanaSecurityRoleKibanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataElasticstackKibanaSecurityRoleKibana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataElasticstackKibanaSecurityRoleKibana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base - computed: true, optional: false, required: false
  public get base() {
    return cdktf.Fn.tolist(this.getListAttribute('base'));
  }

  // feature - computed: true, optional: false, required: false
  private _feature = new DataElasticstackKibanaSecurityRoleKibanaFeatureList(this, "feature", true);
  public get feature() {
    return this._feature;
  }

  // spaces - computed: true, optional: false, required: false
  public get spaces() {
    return cdktf.Fn.tolist(this.getListAttribute('spaces'));
  }
}

export class DataElasticstackKibanaSecurityRoleKibanaList extends cdktf.ComplexList {

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
  public get(index: number): DataElasticstackKibanaSecurityRoleKibanaOutputReference {
    return new DataElasticstackKibanaSecurityRoleKibanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/kibana_security_role elasticstack_kibana_security_role}
*/
export class DataElasticstackKibanaSecurityRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_security_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackKibanaSecurityRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackKibanaSecurityRole to import
  * @param importFromId The id of the existing DataElasticstackKibanaSecurityRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/kibana_security_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackKibanaSecurityRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_security_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/kibana_security_role elasticstack_kibana_security_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackKibanaSecurityRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackKibanaSecurityRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_security_role',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1'
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
    this._metadata = config.metadata;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // elasticsearch - computed: true, optional: false, required: false
  private _elasticsearch = new DataElasticstackKibanaSecurityRoleElasticsearchList(this, "elasticsearch", true);
  public get elasticsearch() {
    return this._elasticsearch;
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

  // kibana - computed: true, optional: false, required: false
  private _kibana = new DataElasticstackKibanaSecurityRoleKibanaList(this, "kibana", true);
  public get kibana() {
    return this._kibana;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
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
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
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
