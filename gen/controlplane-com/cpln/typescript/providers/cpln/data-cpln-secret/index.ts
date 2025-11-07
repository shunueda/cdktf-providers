// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCplnSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#name DataCplnSecret#name}
  */
  readonly name: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#aws DataCplnSecret#aws}
  */
  readonly aws?: DataCplnSecretAws[] | cdktf.IResolvable;
  /**
  * azure_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#azure_connector DataCplnSecret#azure_connector}
  */
  readonly azureConnector?: DataCplnSecretAzureConnector[] | cdktf.IResolvable;
  /**
  * ecr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#ecr DataCplnSecret#ecr}
  */
  readonly ecr?: DataCplnSecretEcr[] | cdktf.IResolvable;
  /**
  * keypair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#keypair DataCplnSecret#keypair}
  */
  readonly keypair?: DataCplnSecretKeypair[] | cdktf.IResolvable;
  /**
  * nats_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#nats_account DataCplnSecret#nats_account}
  */
  readonly natsAccount?: DataCplnSecretNatsAccount[] | cdktf.IResolvable;
  /**
  * opaque block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#opaque DataCplnSecret#opaque}
  */
  readonly opaque?: DataCplnSecretOpaque[] | cdktf.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#tls DataCplnSecret#tls}
  */
  readonly tls?: DataCplnSecretTls[] | cdktf.IResolvable;
  /**
  * userpass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#userpass DataCplnSecret#userpass}
  */
  readonly userpass?: DataCplnSecretUserpass[] | cdktf.IResolvable;
}
export interface DataCplnSecretAws {
}

export function dataCplnSecretAwsToTerraform(struct?: DataCplnSecretAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnSecretAwsToHclTerraform(struct?: DataCplnSecretAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnSecretAwsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnSecretAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnSecretAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class DataCplnSecretAwsList extends cdktf.ComplexList {
  public internalValue? : DataCplnSecretAws[] | cdktf.IResolvable

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
  public get(index: number): DataCplnSecretAwsOutputReference {
    return new DataCplnSecretAwsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnSecretAzureConnector {
}

export function dataCplnSecretAzureConnectorToTerraform(struct?: DataCplnSecretAzureConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnSecretAzureConnectorToHclTerraform(struct?: DataCplnSecretAzureConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnSecretAzureConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnSecretAzureConnector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnSecretAzureConnector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataCplnSecretAzureConnectorList extends cdktf.ComplexList {
  public internalValue? : DataCplnSecretAzureConnector[] | cdktf.IResolvable

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
  public get(index: number): DataCplnSecretAzureConnectorOutputReference {
    return new DataCplnSecretAzureConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnSecretEcr {
  /**
  * AWS IAM Role External ID. Used when setting up cross-account access to your ECR repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#external_id DataCplnSecret#external_id}
  */
  readonly externalId?: string;
}

export function dataCplnSecretEcrToTerraform(struct?: DataCplnSecretEcr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
  }
}


export function dataCplnSecretEcrToHclTerraform(struct?: DataCplnSecretEcr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnSecretEcrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnSecretEcr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnSecretEcr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // repos - computed: true, optional: false, required: false
  public get repos() {
    return cdktf.Fn.tolist(this.getListAttribute('repos'));
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class DataCplnSecretEcrList extends cdktf.ComplexList {
  public internalValue? : DataCplnSecretEcr[] | cdktf.IResolvable

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
  public get(index: number): DataCplnSecretEcrOutputReference {
    return new DataCplnSecretEcrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnSecretKeypair {
}

export function dataCplnSecretKeypairToTerraform(struct?: DataCplnSecretKeypair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnSecretKeypairToHclTerraform(struct?: DataCplnSecretKeypair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnSecretKeypairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnSecretKeypair | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnSecretKeypair | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class DataCplnSecretKeypairList extends cdktf.ComplexList {
  public internalValue? : DataCplnSecretKeypair[] | cdktf.IResolvable

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
  public get(index: number): DataCplnSecretKeypairOutputReference {
    return new DataCplnSecretKeypairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnSecretNatsAccount {
}

export function dataCplnSecretNatsAccountToTerraform(struct?: DataCplnSecretNatsAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnSecretNatsAccountToHclTerraform(struct?: DataCplnSecretNatsAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnSecretNatsAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnSecretNatsAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnSecretNatsAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
}

export class DataCplnSecretNatsAccountList extends cdktf.ComplexList {
  public internalValue? : DataCplnSecretNatsAccount[] | cdktf.IResolvable

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
  public get(index: number): DataCplnSecretNatsAccountOutputReference {
    return new DataCplnSecretNatsAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnSecretOpaque {
}

export function dataCplnSecretOpaqueToTerraform(struct?: DataCplnSecretOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnSecretOpaqueToHclTerraform(struct?: DataCplnSecretOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnSecretOpaqueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnSecretOpaque | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnSecretOpaque | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }
}

export class DataCplnSecretOpaqueList extends cdktf.ComplexList {
  public internalValue? : DataCplnSecretOpaque[] | cdktf.IResolvable

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
  public get(index: number): DataCplnSecretOpaqueOutputReference {
    return new DataCplnSecretOpaqueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnSecretTls {
}

export function dataCplnSecretTlsToTerraform(struct?: DataCplnSecretTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnSecretTlsToHclTerraform(struct?: DataCplnSecretTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnSecretTlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnSecretTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnSecretTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // chain - computed: true, optional: false, required: false
  public get chain() {
    return this.getStringAttribute('chain');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataCplnSecretTlsList extends cdktf.ComplexList {
  public internalValue? : DataCplnSecretTls[] | cdktf.IResolvable

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
  public get(index: number): DataCplnSecretTlsOutputReference {
    return new DataCplnSecretTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnSecretUserpass {
}

export function dataCplnSecretUserpassToTerraform(struct?: DataCplnSecretUserpass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnSecretUserpassToHclTerraform(struct?: DataCplnSecretUserpass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnSecretUserpassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnSecretUserpass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnSecretUserpass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataCplnSecretUserpassList extends cdktf.ComplexList {
  public internalValue? : DataCplnSecretUserpass[] | cdktf.IResolvable

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
  public get(index: number): DataCplnSecretUserpassOutputReference {
    return new DataCplnSecretUserpassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret cpln_secret}
*/
export class DataCplnSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCplnSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCplnSecret to import
  * @param importFromId The id of the existing DataCplnSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCplnSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/secret cpln_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCplnSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataCplnSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_secret',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._aws.internalValue = config.aws;
    this._azureConnector.internalValue = config.azureConnector;
    this._ecr.internalValue = config.ecr;
    this._keypair.internalValue = config.keypair;
    this._natsAccount.internalValue = config.natsAccount;
    this._opaque.internalValue = config.opaque;
    this._tls.internalValue = config.tls;
    this._userpass.internalValue = config.userpass;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_sdk - computed: true, optional: false, required: false
  public get azureSdk() {
    return this.getStringAttribute('azure_sdk');
  }

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dictionary - computed: true, optional: false, required: false
  private _dictionary = new cdktf.StringMap(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }

  // dictionary_as_envs - computed: true, optional: false, required: false
  private _dictionaryAsEnvs = new cdktf.StringMap(this, "dictionary_as_envs");
  public get dictionaryAsEnvs() {
    return this._dictionaryAsEnvs;
  }

  // docker - computed: true, optional: false, required: false
  public get docker() {
    return this.getStringAttribute('docker');
  }

  // gcp - computed: true, optional: false, required: false
  public get gcp() {
    return this.getStringAttribute('gcp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // secret_link - computed: true, optional: false, required: false
  public get secretLink() {
    return this.getStringAttribute('secret_link');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataCplnSecretAwsList(this, "aws", false);
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataCplnSecretAws[] | cdktf.IResolvable) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure_connector - computed: false, optional: true, required: false
  private _azureConnector = new DataCplnSecretAzureConnectorList(this, "azure_connector", false);
  public get azureConnector() {
    return this._azureConnector;
  }
  public putAzureConnector(value: DataCplnSecretAzureConnector[] | cdktf.IResolvable) {
    this._azureConnector.internalValue = value;
  }
  public resetAzureConnector() {
    this._azureConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConnectorInput() {
    return this._azureConnector.internalValue;
  }

  // ecr - computed: false, optional: true, required: false
  private _ecr = new DataCplnSecretEcrList(this, "ecr", false);
  public get ecr() {
    return this._ecr;
  }
  public putEcr(value: DataCplnSecretEcr[] | cdktf.IResolvable) {
    this._ecr.internalValue = value;
  }
  public resetEcr() {
    this._ecr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrInput() {
    return this._ecr.internalValue;
  }

  // keypair - computed: false, optional: true, required: false
  private _keypair = new DataCplnSecretKeypairList(this, "keypair", false);
  public get keypair() {
    return this._keypair;
  }
  public putKeypair(value: DataCplnSecretKeypair[] | cdktf.IResolvable) {
    this._keypair.internalValue = value;
  }
  public resetKeypair() {
    this._keypair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairInput() {
    return this._keypair.internalValue;
  }

  // nats_account - computed: false, optional: true, required: false
  private _natsAccount = new DataCplnSecretNatsAccountList(this, "nats_account", false);
  public get natsAccount() {
    return this._natsAccount;
  }
  public putNatsAccount(value: DataCplnSecretNatsAccount[] | cdktf.IResolvable) {
    this._natsAccount.internalValue = value;
  }
  public resetNatsAccount() {
    this._natsAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natsAccountInput() {
    return this._natsAccount.internalValue;
  }

  // opaque - computed: false, optional: true, required: false
  private _opaque = new DataCplnSecretOpaqueList(this, "opaque", false);
  public get opaque() {
    return this._opaque;
  }
  public putOpaque(value: DataCplnSecretOpaque[] | cdktf.IResolvable) {
    this._opaque.internalValue = value;
  }
  public resetOpaque() {
    this._opaque.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaqueInput() {
    return this._opaque.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataCplnSecretTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataCplnSecretTls[] | cdktf.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // userpass - computed: false, optional: true, required: false
  private _userpass = new DataCplnSecretUserpassList(this, "userpass", false);
  public get userpass() {
    return this._userpass;
  }
  public putUserpass(value: DataCplnSecretUserpass[] | cdktf.IResolvable) {
    this._userpass.internalValue = value;
  }
  public resetUserpass() {
    this._userpass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userpassInput() {
    return this._userpass.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      aws: cdktf.listMapper(dataCplnSecretAwsToTerraform, true)(this._aws.internalValue),
      azure_connector: cdktf.listMapper(dataCplnSecretAzureConnectorToTerraform, true)(this._azureConnector.internalValue),
      ecr: cdktf.listMapper(dataCplnSecretEcrToTerraform, true)(this._ecr.internalValue),
      keypair: cdktf.listMapper(dataCplnSecretKeypairToTerraform, true)(this._keypair.internalValue),
      nats_account: cdktf.listMapper(dataCplnSecretNatsAccountToTerraform, true)(this._natsAccount.internalValue),
      opaque: cdktf.listMapper(dataCplnSecretOpaqueToTerraform, true)(this._opaque.internalValue),
      tls: cdktf.listMapper(dataCplnSecretTlsToTerraform, true)(this._tls.internalValue),
      userpass: cdktf.listMapper(dataCplnSecretUserpassToTerraform, true)(this._userpass.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws: {
        value: cdktf.listMapperHcl(dataCplnSecretAwsToHclTerraform, true)(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnSecretAwsList",
      },
      azure_connector: {
        value: cdktf.listMapperHcl(dataCplnSecretAzureConnectorToHclTerraform, true)(this._azureConnector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnSecretAzureConnectorList",
      },
      ecr: {
        value: cdktf.listMapperHcl(dataCplnSecretEcrToHclTerraform, true)(this._ecr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnSecretEcrList",
      },
      keypair: {
        value: cdktf.listMapperHcl(dataCplnSecretKeypairToHclTerraform, true)(this._keypair.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnSecretKeypairList",
      },
      nats_account: {
        value: cdktf.listMapperHcl(dataCplnSecretNatsAccountToHclTerraform, true)(this._natsAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnSecretNatsAccountList",
      },
      opaque: {
        value: cdktf.listMapperHcl(dataCplnSecretOpaqueToHclTerraform, true)(this._opaque.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnSecretOpaqueList",
      },
      tls: {
        value: cdktf.listMapperHcl(dataCplnSecretTlsToHclTerraform, true)(this._tls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnSecretTlsList",
      },
      userpass: {
        value: cdktf.listMapperHcl(dataCplnSecretUserpassToHclTerraform, true)(this._userpass.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnSecretUserpassList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
