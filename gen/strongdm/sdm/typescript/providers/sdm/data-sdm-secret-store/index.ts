// https://registry.terraform.io/providers/strongdm/sdm/15.41.0/docs/data-sources/secret_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdmSecretStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.41.0/docs/data-sources/secret_store#id DataSdmSecretStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.41.0/docs/data-sources/secret_store#name DataSdmSecretStore#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.41.0/docs/data-sources/secret_store#tags DataSdmSecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.41.0/docs/data-sources/secret_store#type DataSdmSecretStore#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.41.0/docs/data-sources/secret_store#timeouts DataSdmSecretStore#timeouts}
  */
  readonly timeouts?: DataSdmSecretStoreTimeouts;
}
export interface DataSdmSecretStoreSecretStoresActiveDirectoryStore {
}

export function dataSdmSecretStoreSecretStoresActiveDirectoryStoreToTerraform(struct?: DataSdmSecretStoreSecretStoresActiveDirectoryStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresActiveDirectoryStoreToHclTerraform(struct?: DataSdmSecretStoreSecretStoresActiveDirectoryStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresActiveDirectoryStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresActiveDirectoryStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresActiveDirectoryStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresActiveDirectoryStoreList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresActiveDirectoryStoreOutputReference {
    return new DataSdmSecretStoreSecretStoresActiveDirectoryStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresAws {
}

export function dataSdmSecretStoreSecretStoresAwsToTerraform(struct?: DataSdmSecretStoreSecretStoresAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresAwsToHclTerraform(struct?: DataSdmSecretStoreSecretStoresAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresAwsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // role_external_id - computed: true, optional: false, required: false
  public get roleExternalId() {
    return this.getStringAttribute('role_external_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresAwsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresAwsOutputReference {
    return new DataSdmSecretStoreSecretStoresAwsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresAwsCertX509 {
}

export function dataSdmSecretStoreSecretStoresAwsCertX509ToTerraform(struct?: DataSdmSecretStoreSecretStoresAwsCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresAwsCertX509ToHclTerraform(struct?: DataSdmSecretStoreSecretStoresAwsCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresAwsCertX509OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresAwsCertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresAwsCertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_arn - computed: true, optional: false, required: false
  public get caArn() {
    return this.getStringAttribute('ca_arn');
  }

  // certificate_template_arn - computed: true, optional: false, required: false
  public get certificateTemplateArn() {
    return this.getStringAttribute('certificate_template_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // signing_algo - computed: true, optional: false, required: false
  public get signingAlgo() {
    return this.getStringAttribute('signing_algo');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresAwsCertX509List extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresAwsCertX509OutputReference {
    return new DataSdmSecretStoreSecretStoresAwsCertX509OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresAzureStore {
}

export function dataSdmSecretStoreSecretStoresAzureStoreToTerraform(struct?: DataSdmSecretStoreSecretStoresAzureStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresAzureStoreToHclTerraform(struct?: DataSdmSecretStoreSecretStoresAzureStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresAzureStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresAzureStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresAzureStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vault_uri - computed: true, optional: false, required: false
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }
}

export class DataSdmSecretStoreSecretStoresAzureStoreList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresAzureStoreOutputReference {
    return new DataSdmSecretStoreSecretStoresAzureStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresCyberarkConjur {
}

export function dataSdmSecretStoreSecretStoresCyberarkConjurToTerraform(struct?: DataSdmSecretStoreSecretStoresCyberarkConjur): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresCyberarkConjurToHclTerraform(struct?: DataSdmSecretStoreSecretStoresCyberarkConjur): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresCyberarkConjurOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresCyberarkConjur | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresCyberarkConjur | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_url - computed: true, optional: false, required: false
  public get appUrl() {
    return this.getStringAttribute('app_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresCyberarkConjurList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresCyberarkConjurOutputReference {
    return new DataSdmSecretStoreSecretStoresCyberarkConjurOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresCyberarkPam {
}

export function dataSdmSecretStoreSecretStoresCyberarkPamToTerraform(struct?: DataSdmSecretStoreSecretStoresCyberarkPam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresCyberarkPamToHclTerraform(struct?: DataSdmSecretStoreSecretStoresCyberarkPam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresCyberarkPamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresCyberarkPam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresCyberarkPam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_url - computed: true, optional: false, required: false
  public get appUrl() {
    return this.getStringAttribute('app_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresCyberarkPamList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresCyberarkPamOutputReference {
    return new DataSdmSecretStoreSecretStoresCyberarkPamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresCyberarkPamExperimental {
}

export function dataSdmSecretStoreSecretStoresCyberarkPamExperimentalToTerraform(struct?: DataSdmSecretStoreSecretStoresCyberarkPamExperimental): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresCyberarkPamExperimentalToHclTerraform(struct?: DataSdmSecretStoreSecretStoresCyberarkPamExperimental): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresCyberarkPamExperimentalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresCyberarkPamExperimental | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresCyberarkPamExperimental | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_url - computed: true, optional: false, required: false
  public get appUrl() {
    return this.getStringAttribute('app_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresCyberarkPamExperimentalList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresCyberarkPamExperimentalOutputReference {
    return new DataSdmSecretStoreSecretStoresCyberarkPamExperimentalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresDelineaStore {
}

export function dataSdmSecretStoreSecretStoresDelineaStoreToTerraform(struct?: DataSdmSecretStoreSecretStoresDelineaStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresDelineaStoreToHclTerraform(struct?: DataSdmSecretStoreSecretStoresDelineaStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresDelineaStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresDelineaStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresDelineaStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
}

export class DataSdmSecretStoreSecretStoresDelineaStoreList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresDelineaStoreOutputReference {
    return new DataSdmSecretStoreSecretStoresDelineaStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresGcpCertX509Store {
}

export function dataSdmSecretStoreSecretStoresGcpCertX509StoreToTerraform(struct?: DataSdmSecretStoreSecretStoresGcpCertX509Store): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresGcpCertX509StoreToHclTerraform(struct?: DataSdmSecretStoreSecretStoresGcpCertX509Store): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresGcpCertX509StoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresGcpCertX509Store | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresGcpCertX509Store | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_id - computed: true, optional: false, required: false
  public get caId() {
    return this.getStringAttribute('ca_id');
  }

  // ca_pool_id - computed: true, optional: false, required: false
  public get caPoolId() {
    return this.getStringAttribute('ca_pool_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresGcpCertX509StoreList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresGcpCertX509StoreOutputReference {
    return new DataSdmSecretStoreSecretStoresGcpCertX509StoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresGcpStore {
}

export function dataSdmSecretStoreSecretStoresGcpStoreToTerraform(struct?: DataSdmSecretStoreSecretStoresGcpStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresGcpStoreToHclTerraform(struct?: DataSdmSecretStoreSecretStoresGcpStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresGcpStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresGcpStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresGcpStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresGcpStoreList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresGcpStoreOutputReference {
    return new DataSdmSecretStoreSecretStoresGcpStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresKeyfactorSshStore {
}

export function dataSdmSecretStoreSecretStoresKeyfactorSshStoreToTerraform(struct?: DataSdmSecretStoreSecretStoresKeyfactorSshStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresKeyfactorSshStoreToHclTerraform(struct?: DataSdmSecretStoreSecretStoresKeyfactorSshStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresKeyfactorSshStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresKeyfactorSshStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresKeyfactorSshStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_file_path - computed: true, optional: false, required: false
  public get caFilePath() {
    return this.getStringAttribute('ca_file_path');
  }

  // certificate_file_path - computed: true, optional: false, required: false
  public get certificateFilePath() {
    return this.getStringAttribute('certificate_file_path');
  }

  // default_certificate_authority_name - computed: true, optional: false, required: false
  public get defaultCertificateAuthorityName() {
    return this.getStringAttribute('default_certificate_authority_name');
  }

  // default_certificate_profile_name - computed: true, optional: false, required: false
  public get defaultCertificateProfileName() {
    return this.getStringAttribute('default_certificate_profile_name');
  }

  // default_end_entity_profile_name - computed: true, optional: false, required: false
  public get defaultEndEntityProfileName() {
    return this.getStringAttribute('default_end_entity_profile_name');
  }

  // enrollment_code_env_var - computed: true, optional: false, required: false
  public get enrollmentCodeEnvVar() {
    return this.getStringAttribute('enrollment_code_env_var');
  }

  // enrollment_username_env_var - computed: true, optional: false, required: false
  public get enrollmentUsernameEnvVar() {
    return this.getStringAttribute('enrollment_username_env_var');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_file_path - computed: true, optional: false, required: false
  public get keyFilePath() {
    return this.getStringAttribute('key_file_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresKeyfactorSshStoreList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresKeyfactorSshStoreOutputReference {
    return new DataSdmSecretStoreSecretStoresKeyfactorSshStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresKeyfactorX509Store {
}

export function dataSdmSecretStoreSecretStoresKeyfactorX509StoreToTerraform(struct?: DataSdmSecretStoreSecretStoresKeyfactorX509Store): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresKeyfactorX509StoreToHclTerraform(struct?: DataSdmSecretStoreSecretStoresKeyfactorX509Store): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresKeyfactorX509StoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresKeyfactorX509Store | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresKeyfactorX509Store | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_file_path - computed: true, optional: false, required: false
  public get caFilePath() {
    return this.getStringAttribute('ca_file_path');
  }

  // certificate_file_path - computed: true, optional: false, required: false
  public get certificateFilePath() {
    return this.getStringAttribute('certificate_file_path');
  }

  // default_certificate_authority_name - computed: true, optional: false, required: false
  public get defaultCertificateAuthorityName() {
    return this.getStringAttribute('default_certificate_authority_name');
  }

  // default_certificate_profile_name - computed: true, optional: false, required: false
  public get defaultCertificateProfileName() {
    return this.getStringAttribute('default_certificate_profile_name');
  }

  // default_end_entity_profile_name - computed: true, optional: false, required: false
  public get defaultEndEntityProfileName() {
    return this.getStringAttribute('default_end_entity_profile_name');
  }

  // enrollment_code_env_var - computed: true, optional: false, required: false
  public get enrollmentCodeEnvVar() {
    return this.getStringAttribute('enrollment_code_env_var');
  }

  // enrollment_username_env_var - computed: true, optional: false, required: false
  public get enrollmentUsernameEnvVar() {
    return this.getStringAttribute('enrollment_username_env_var');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_file_path - computed: true, optional: false, required: false
  public get keyFilePath() {
    return this.getStringAttribute('key_file_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresKeyfactorX509StoreList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresKeyfactorX509StoreOutputReference {
    return new DataSdmSecretStoreSecretStoresKeyfactorX509StoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresStrongVault {
}

export function dataSdmSecretStoreSecretStoresStrongVaultToTerraform(struct?: DataSdmSecretStoreSecretStoresStrongVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresStrongVaultToHclTerraform(struct?: DataSdmSecretStoreSecretStoresStrongVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresStrongVaultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresStrongVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresStrongVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresStrongVaultList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresStrongVaultOutputReference {
    return new DataSdmSecretStoreSecretStoresStrongVaultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultApprole {
}

export function dataSdmSecretStoreSecretStoresVaultApproleToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultApprole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultApproleToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultApprole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultApproleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultApprole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultApprole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultApproleList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultApproleOutputReference {
    return new DataSdmSecretStoreSecretStoresVaultApproleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultApproleCertSsh {
}

export function dataSdmSecretStoreSecretStoresVaultApproleCertSshToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultApproleCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultApproleCertSshToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultApproleCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultApproleCertSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultApproleCertSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultApproleCertSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // signing_role - computed: true, optional: false, required: false
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }

  // ssh_mount_point - computed: true, optional: false, required: false
  public get sshMountPoint() {
    return this.getStringAttribute('ssh_mount_point');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultApproleCertSshList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultApproleCertSshOutputReference {
    return new DataSdmSecretStoreSecretStoresVaultApproleCertSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultApproleCertX509 {
}

export function dataSdmSecretStoreSecretStoresVaultApproleCertX509ToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultApproleCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultApproleCertX509ToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultApproleCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultApproleCertX509OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultApproleCertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultApproleCertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // pki_mount_point - computed: true, optional: false, required: false
  public get pkiMountPoint() {
    return this.getStringAttribute('pki_mount_point');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // signing_role - computed: true, optional: false, required: false
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultApproleCertX509List extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultApproleCertX509OutputReference {
    return new DataSdmSecretStoreSecretStoresVaultApproleCertX509OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultAwsEc2 {
}

export function dataSdmSecretStoreSecretStoresVaultAwsEc2ToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsEc2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultAwsEc2ToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsEc2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultAwsEc2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultAwsEc2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultAwsEc2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultAwsEc2List extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultAwsEc2OutputReference {
    return new DataSdmSecretStoreSecretStoresVaultAwsEc2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultAwsEc2CertSsh {
}

export function dataSdmSecretStoreSecretStoresVaultAwsEc2CertSshToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsEc2CertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultAwsEc2CertSshToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsEc2CertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultAwsEc2CertSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultAwsEc2CertSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultAwsEc2CertSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // signing_role - computed: true, optional: false, required: false
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }

  // ssh_mount_point - computed: true, optional: false, required: false
  public get sshMountPoint() {
    return this.getStringAttribute('ssh_mount_point');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultAwsEc2CertSshList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultAwsEc2CertSshOutputReference {
    return new DataSdmSecretStoreSecretStoresVaultAwsEc2CertSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultAwsEc2CertX509 {
}

export function dataSdmSecretStoreSecretStoresVaultAwsEc2CertX509ToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsEc2CertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultAwsEc2CertX509ToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsEc2CertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultAwsEc2CertX509OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultAwsEc2CertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultAwsEc2CertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // pki_mount_point - computed: true, optional: false, required: false
  public get pkiMountPoint() {
    return this.getStringAttribute('pki_mount_point');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // signing_role - computed: true, optional: false, required: false
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultAwsEc2CertX509List extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultAwsEc2CertX509OutputReference {
    return new DataSdmSecretStoreSecretStoresVaultAwsEc2CertX509OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultAwsIam {
}

export function dataSdmSecretStoreSecretStoresVaultAwsIamToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultAwsIamToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultAwsIamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultAwsIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultAwsIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultAwsIamList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultAwsIamOutputReference {
    return new DataSdmSecretStoreSecretStoresVaultAwsIamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultAwsIamCertSsh {
}

export function dataSdmSecretStoreSecretStoresVaultAwsIamCertSshToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsIamCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultAwsIamCertSshToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsIamCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultAwsIamCertSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultAwsIamCertSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultAwsIamCertSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // signing_role - computed: true, optional: false, required: false
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }

  // ssh_mount_point - computed: true, optional: false, required: false
  public get sshMountPoint() {
    return this.getStringAttribute('ssh_mount_point');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultAwsIamCertSshList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultAwsIamCertSshOutputReference {
    return new DataSdmSecretStoreSecretStoresVaultAwsIamCertSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultAwsIamCertX509 {
}

export function dataSdmSecretStoreSecretStoresVaultAwsIamCertX509ToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsIamCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultAwsIamCertX509ToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultAwsIamCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultAwsIamCertX509OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultAwsIamCertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultAwsIamCertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // pki_mount_point - computed: true, optional: false, required: false
  public get pkiMountPoint() {
    return this.getStringAttribute('pki_mount_point');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // signing_role - computed: true, optional: false, required: false
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultAwsIamCertX509List extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultAwsIamCertX509OutputReference {
    return new DataSdmSecretStoreSecretStoresVaultAwsIamCertX509OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultTls {
}

export function dataSdmSecretStoreSecretStoresVaultTlsToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultTlsToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultTlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_cert_path - computed: true, optional: false, required: false
  public get caCertPath() {
    return this.getStringAttribute('ca_cert_path');
  }

  // client_cert_path - computed: true, optional: false, required: false
  public get clientCertPath() {
    return this.getStringAttribute('client_cert_path');
  }

  // client_key_path - computed: true, optional: false, required: false
  public get clientKeyPath() {
    return this.getStringAttribute('client_key_path');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultTlsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultTlsOutputReference {
    return new DataSdmSecretStoreSecretStoresVaultTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultTlsCertSsh {
}

export function dataSdmSecretStoreSecretStoresVaultTlsCertSshToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultTlsCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultTlsCertSshToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultTlsCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultTlsCertSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultTlsCertSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultTlsCertSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_cert_path - computed: true, optional: false, required: false
  public get caCertPath() {
    return this.getStringAttribute('ca_cert_path');
  }

  // client_cert_path - computed: true, optional: false, required: false
  public get clientCertPath() {
    return this.getStringAttribute('client_cert_path');
  }

  // client_key_path - computed: true, optional: false, required: false
  public get clientKeyPath() {
    return this.getStringAttribute('client_key_path');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // signing_role - computed: true, optional: false, required: false
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }

  // ssh_mount_point - computed: true, optional: false, required: false
  public get sshMountPoint() {
    return this.getStringAttribute('ssh_mount_point');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultTlsCertSshList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultTlsCertSshOutputReference {
    return new DataSdmSecretStoreSecretStoresVaultTlsCertSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultTlsCertX509 {
}

export function dataSdmSecretStoreSecretStoresVaultTlsCertX509ToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultTlsCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultTlsCertX509ToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultTlsCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultTlsCertX509OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultTlsCertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultTlsCertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_cert_path - computed: true, optional: false, required: false
  public get caCertPath() {
    return this.getStringAttribute('ca_cert_path');
  }

  // client_cert_path - computed: true, optional: false, required: false
  public get clientCertPath() {
    return this.getStringAttribute('client_cert_path');
  }

  // client_key_path - computed: true, optional: false, required: false
  public get clientKeyPath() {
    return this.getStringAttribute('client_key_path');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // pki_mount_point - computed: true, optional: false, required: false
  public get pkiMountPoint() {
    return this.getStringAttribute('pki_mount_point');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // signing_role - computed: true, optional: false, required: false
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultTlsCertX509List extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultTlsCertX509OutputReference {
    return new DataSdmSecretStoreSecretStoresVaultTlsCertX509OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultToken {
}

export function dataSdmSecretStoreSecretStoresVaultTokenToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultTokenToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultTokenList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultTokenOutputReference {
    return new DataSdmSecretStoreSecretStoresVaultTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultTokenCertSsh {
}

export function dataSdmSecretStoreSecretStoresVaultTokenCertSshToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultTokenCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultTokenCertSshToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultTokenCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultTokenCertSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultTokenCertSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultTokenCertSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // signing_role - computed: true, optional: false, required: false
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }

  // ssh_mount_point - computed: true, optional: false, required: false
  public get sshMountPoint() {
    return this.getStringAttribute('ssh_mount_point');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultTokenCertSshList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultTokenCertSshOutputReference {
    return new DataSdmSecretStoreSecretStoresVaultTokenCertSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStoresVaultTokenCertX509 {
}

export function dataSdmSecretStoreSecretStoresVaultTokenCertX509ToTerraform(struct?: DataSdmSecretStoreSecretStoresVaultTokenCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresVaultTokenCertX509ToHclTerraform(struct?: DataSdmSecretStoreSecretStoresVaultTokenCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresVaultTokenCertX509OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStoresVaultTokenCertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStoresVaultTokenCertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_cert_ttl_minutes - computed: true, optional: false, required: false
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // pki_mount_point - computed: true, optional: false, required: false
  public get pkiMountPoint() {
    return this.getStringAttribute('pki_mount_point');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // signing_role - computed: true, optional: false, required: false
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataSdmSecretStoreSecretStoresVaultTokenCertX509List extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresVaultTokenCertX509OutputReference {
    return new DataSdmSecretStoreSecretStoresVaultTokenCertX509OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreSecretStores {
}

export function dataSdmSecretStoreSecretStoresToTerraform(struct?: DataSdmSecretStoreSecretStores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmSecretStoreSecretStoresToHclTerraform(struct?: DataSdmSecretStoreSecretStores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmSecretStoreSecretStoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmSecretStoreSecretStores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreSecretStores | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory_store - computed: true, optional: false, required: false
  private _activeDirectoryStore = new DataSdmSecretStoreSecretStoresActiveDirectoryStoreList(this, "active_directory_store", false);
  public get activeDirectoryStore() {
    return this._activeDirectoryStore;
  }

  // aws - computed: true, optional: false, required: false
  private _aws = new DataSdmSecretStoreSecretStoresAwsList(this, "aws", false);
  public get aws() {
    return this._aws;
  }

  // aws_cert_x509 - computed: true, optional: false, required: false
  private _awsCertX509 = new DataSdmSecretStoreSecretStoresAwsCertX509List(this, "aws_cert_x509", false);
  public get awsCertX509() {
    return this._awsCertX509;
  }

  // azure_store - computed: true, optional: false, required: false
  private _azureStore = new DataSdmSecretStoreSecretStoresAzureStoreList(this, "azure_store", false);
  public get azureStore() {
    return this._azureStore;
  }

  // cyberark_conjur - computed: true, optional: false, required: false
  private _cyberarkConjur = new DataSdmSecretStoreSecretStoresCyberarkConjurList(this, "cyberark_conjur", false);
  public get cyberarkConjur() {
    return this._cyberarkConjur;
  }

  // cyberark_pam - computed: true, optional: false, required: false
  private _cyberarkPam = new DataSdmSecretStoreSecretStoresCyberarkPamList(this, "cyberark_pam", false);
  public get cyberarkPam() {
    return this._cyberarkPam;
  }

  // cyberark_pam_experimental - computed: true, optional: false, required: false
  private _cyberarkPamExperimental = new DataSdmSecretStoreSecretStoresCyberarkPamExperimentalList(this, "cyberark_pam_experimental", false);
  public get cyberarkPamExperimental() {
    return this._cyberarkPamExperimental;
  }

  // delinea_store - computed: true, optional: false, required: false
  private _delineaStore = new DataSdmSecretStoreSecretStoresDelineaStoreList(this, "delinea_store", false);
  public get delineaStore() {
    return this._delineaStore;
  }

  // gcp_cert_x_509_store - computed: true, optional: false, required: false
  private _gcpCertX509Store = new DataSdmSecretStoreSecretStoresGcpCertX509StoreList(this, "gcp_cert_x_509_store", false);
  public get gcpCertX509Store() {
    return this._gcpCertX509Store;
  }

  // gcp_store - computed: true, optional: false, required: false
  private _gcpStore = new DataSdmSecretStoreSecretStoresGcpStoreList(this, "gcp_store", false);
  public get gcpStore() {
    return this._gcpStore;
  }

  // keyfactor_ssh_store - computed: true, optional: false, required: false
  private _keyfactorSshStore = new DataSdmSecretStoreSecretStoresKeyfactorSshStoreList(this, "keyfactor_ssh_store", false);
  public get keyfactorSshStore() {
    return this._keyfactorSshStore;
  }

  // keyfactor_x_509_store - computed: true, optional: false, required: false
  private _keyfactorX509Store = new DataSdmSecretStoreSecretStoresKeyfactorX509StoreList(this, "keyfactor_x_509_store", false);
  public get keyfactorX509Store() {
    return this._keyfactorX509Store;
  }

  // strong_vault - computed: true, optional: false, required: false
  private _strongVault = new DataSdmSecretStoreSecretStoresStrongVaultList(this, "strong_vault", false);
  public get strongVault() {
    return this._strongVault;
  }

  // vault_approle - computed: true, optional: false, required: false
  private _vaultApprole = new DataSdmSecretStoreSecretStoresVaultApproleList(this, "vault_approle", false);
  public get vaultApprole() {
    return this._vaultApprole;
  }

  // vault_approle_cert_ssh - computed: true, optional: false, required: false
  private _vaultApproleCertSsh = new DataSdmSecretStoreSecretStoresVaultApproleCertSshList(this, "vault_approle_cert_ssh", false);
  public get vaultApproleCertSsh() {
    return this._vaultApproleCertSsh;
  }

  // vault_approle_cert_x509 - computed: true, optional: false, required: false
  private _vaultApproleCertX509 = new DataSdmSecretStoreSecretStoresVaultApproleCertX509List(this, "vault_approle_cert_x509", false);
  public get vaultApproleCertX509() {
    return this._vaultApproleCertX509;
  }

  // vault_aws_ec2 - computed: true, optional: false, required: false
  private _vaultAwsEc2 = new DataSdmSecretStoreSecretStoresVaultAwsEc2List(this, "vault_aws_ec2", false);
  public get vaultAwsEc2() {
    return this._vaultAwsEc2;
  }

  // vault_aws_ec2_cert_ssh - computed: true, optional: false, required: false
  private _vaultAwsEc2CertSsh = new DataSdmSecretStoreSecretStoresVaultAwsEc2CertSshList(this, "vault_aws_ec2_cert_ssh", false);
  public get vaultAwsEc2CertSsh() {
    return this._vaultAwsEc2CertSsh;
  }

  // vault_aws_ec2_cert_x509 - computed: true, optional: false, required: false
  private _vaultAwsEc2CertX509 = new DataSdmSecretStoreSecretStoresVaultAwsEc2CertX509List(this, "vault_aws_ec2_cert_x509", false);
  public get vaultAwsEc2CertX509() {
    return this._vaultAwsEc2CertX509;
  }

  // vault_aws_iam - computed: true, optional: false, required: false
  private _vaultAwsIam = new DataSdmSecretStoreSecretStoresVaultAwsIamList(this, "vault_aws_iam", false);
  public get vaultAwsIam() {
    return this._vaultAwsIam;
  }

  // vault_aws_iam_cert_ssh - computed: true, optional: false, required: false
  private _vaultAwsIamCertSsh = new DataSdmSecretStoreSecretStoresVaultAwsIamCertSshList(this, "vault_aws_iam_cert_ssh", false);
  public get vaultAwsIamCertSsh() {
    return this._vaultAwsIamCertSsh;
  }

  // vault_aws_iam_cert_x509 - computed: true, optional: false, required: false
  private _vaultAwsIamCertX509 = new DataSdmSecretStoreSecretStoresVaultAwsIamCertX509List(this, "vault_aws_iam_cert_x509", false);
  public get vaultAwsIamCertX509() {
    return this._vaultAwsIamCertX509;
  }

  // vault_tls - computed: true, optional: false, required: false
  private _vaultTls = new DataSdmSecretStoreSecretStoresVaultTlsList(this, "vault_tls", false);
  public get vaultTls() {
    return this._vaultTls;
  }

  // vault_tls_cert_ssh - computed: true, optional: false, required: false
  private _vaultTlsCertSsh = new DataSdmSecretStoreSecretStoresVaultTlsCertSshList(this, "vault_tls_cert_ssh", false);
  public get vaultTlsCertSsh() {
    return this._vaultTlsCertSsh;
  }

  // vault_tls_cert_x509 - computed: true, optional: false, required: false
  private _vaultTlsCertX509 = new DataSdmSecretStoreSecretStoresVaultTlsCertX509List(this, "vault_tls_cert_x509", false);
  public get vaultTlsCertX509() {
    return this._vaultTlsCertX509;
  }

  // vault_token - computed: true, optional: false, required: false
  private _vaultToken = new DataSdmSecretStoreSecretStoresVaultTokenList(this, "vault_token", false);
  public get vaultToken() {
    return this._vaultToken;
  }

  // vault_token_cert_ssh - computed: true, optional: false, required: false
  private _vaultTokenCertSsh = new DataSdmSecretStoreSecretStoresVaultTokenCertSshList(this, "vault_token_cert_ssh", false);
  public get vaultTokenCertSsh() {
    return this._vaultTokenCertSsh;
  }

  // vault_token_cert_x509 - computed: true, optional: false, required: false
  private _vaultTokenCertX509 = new DataSdmSecretStoreSecretStoresVaultTokenCertX509List(this, "vault_token_cert_x509", false);
  public get vaultTokenCertX509() {
    return this._vaultTokenCertX509;
  }
}

export class DataSdmSecretStoreSecretStoresList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmSecretStoreSecretStoresOutputReference {
    return new DataSdmSecretStoreSecretStoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmSecretStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.41.0/docs/data-sources/secret_store#default DataSdmSecretStore#default}
  */
  readonly default?: string;
}

export function dataSdmSecretStoreTimeoutsToTerraform(struct?: DataSdmSecretStoreTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function dataSdmSecretStoreTimeoutsToHclTerraform(struct?: DataSdmSecretStoreTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSdmSecretStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSdmSecretStoreTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmSecretStoreTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.41.0/docs/data-sources/secret_store sdm_secret_store}
*/
export class DataSdmSecretStore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm_secret_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdmSecretStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdmSecretStore to import
  * @param importFromId The id of the existing DataSdmSecretStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.41.0/docs/data-sources/secret_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdmSecretStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm_secret_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.41.0/docs/data-sources/secret_store sdm_secret_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdmSecretStoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdmSecretStoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdm_secret_store',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.41.0',
        providerVersionConstraint: '15.41.0'
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
    this._tags = config.tags;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
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

  // secret_stores - computed: true, optional: false, required: false
  private _secretStores = new DataSdmSecretStoreSecretStoresList(this, "secret_stores", false);
  public get secretStores() {
    return this._secretStores;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSdmSecretStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSdmSecretStoreTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      timeouts: dataSdmSecretStoreTimeoutsToTerraform(this._timeouts.internalValue),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSdmSecretStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSdmSecretStoreTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
