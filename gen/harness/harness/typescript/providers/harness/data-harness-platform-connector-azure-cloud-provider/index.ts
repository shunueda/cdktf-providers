// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_azure_cloud_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformConnectorAzureCloudProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_azure_cloud_provider#id DataHarnessPlatformConnectorAzureCloudProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_azure_cloud_provider#identifier DataHarnessPlatformConnectorAzureCloudProvider#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_azure_cloud_provider#name DataHarnessPlatformConnectorAzureCloudProvider#name}
  */
  readonly name?: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_azure_cloud_provider#org_id DataHarnessPlatformConnectorAzureCloudProvider#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_azure_cloud_provider#project_id DataHarnessPlatformConnectorAzureCloudProvider#project_id}
  */
  readonly projectId?: string;
}
export interface DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa {
}

export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaToTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaToHclTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa | undefined) {
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
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaOutputReference {
    return new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth {
}

export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthToTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthToHclTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_msi_auth_ua - computed: true, optional: false, required: false
  private _azureMsiAuthUa = new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaList(this, "azure_msi_auth_ua", false);
  public get azureMsiAuthUa() {
    return this._azureMsiAuthUa;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthOutputReference {
    return new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails {
}

export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsToTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsToHclTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsOutputReference {
    return new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert {
}

export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertToTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertToHclTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_ref - computed: true, optional: false, required: false
  public get certificateRef() {
    return this.getStringAttribute('certificate_ref');
  }
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertOutputReference {
    return new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey {
}

export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyToTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyToHclTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyOutputReference {
    return new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth {
}

export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthToTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthToHclTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_client_key_cert - computed: true, optional: false, required: false
  private _azureClientKeyCert = new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertList(this, "azure_client_key_cert", false);
  public get azureClientKeyCert() {
    return this._azureClientKeyCert;
  }

  // azure_client_secret_key - computed: true, optional: false, required: false
  private _azureClientSecretKey = new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyList(this, "azure_client_secret_key", false);
  public get azureClientSecretKey() {
    return this._azureClientSecretKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthOutputReference {
    return new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetails {
}

export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsToTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsToHclTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsOutputReference {
    return new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec {
}

export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecToTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecToHclTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecOutputReference {
    return new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformConnectorAzureCloudProviderCredentials {
}

export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsToTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformConnectorAzureCloudProviderCredentialsToHclTerraform(struct?: DataHarnessPlatformConnectorAzureCloudProviderCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformConnectorAzureCloudProviderCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformConnectorAzureCloudProviderCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_inherit_from_delegate_details - computed: true, optional: false, required: false
  private _azureInheritFromDelegateDetails = new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsList(this, "azure_inherit_from_delegate_details", false);
  public get azureInheritFromDelegateDetails() {
    return this._azureInheritFromDelegateDetails;
  }

  // azure_manual_details - computed: true, optional: false, required: false
  private _azureManualDetails = new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsList(this, "azure_manual_details", false);
  public get azureManualDetails() {
    return this._azureManualDetails;
  }

  // azure_oidc_spec - computed: true, optional: false, required: false
  private _azureOidcSpec = new DataHarnessPlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecList(this, "azure_oidc_spec", false);
  public get azureOidcSpec() {
    return this._azureOidcSpec;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataHarnessPlatformConnectorAzureCloudProviderCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformConnectorAzureCloudProviderCredentialsOutputReference {
    return new DataHarnessPlatformConnectorAzureCloudProviderCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_azure_cloud_provider harness_platform_connector_azure_cloud_provider}
*/
export class DataHarnessPlatformConnectorAzureCloudProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_azure_cloud_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformConnectorAzureCloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformConnectorAzureCloudProvider to import
  * @param importFromId The id of the existing DataHarnessPlatformConnectorAzureCloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_azure_cloud_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformConnectorAzureCloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_azure_cloud_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_connector_azure_cloud_provider harness_platform_connector_azure_cloud_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformConnectorAzureCloudProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformConnectorAzureCloudProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_azure_cloud_provider',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
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
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_environment_type - computed: true, optional: false, required: false
  public get azureEnvironmentType() {
    return this.getStringAttribute('azure_environment_type');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataHarnessPlatformConnectorAzureCloudProviderCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }

  // delegate_selectors - computed: true, optional: false, required: false
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execute_on_delegate - computed: true, optional: false, required: false
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
