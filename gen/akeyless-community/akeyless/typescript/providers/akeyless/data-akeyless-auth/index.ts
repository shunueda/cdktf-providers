// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkeylessAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#id DataAkeylessAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * api_key_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#api_key_login DataAkeylessAuth#api_key_login}
  */
  readonly apiKeyLogin?: DataAkeylessAuthApiKeyLogin[] | cdktf.IResolvable;
  /**
  * aws_iam_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#aws_iam_login DataAkeylessAuth#aws_iam_login}
  */
  readonly awsIamLogin?: DataAkeylessAuthAwsIamLogin[] | cdktf.IResolvable;
  /**
  * azure_ad_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#azure_ad_login DataAkeylessAuth#azure_ad_login}
  */
  readonly azureAdLogin?: DataAkeylessAuthAzureAdLogin[] | cdktf.IResolvable;
  /**
  * cert_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#cert_login DataAkeylessAuth#cert_login}
  */
  readonly certLogin?: DataAkeylessAuthCertLogin[] | cdktf.IResolvable;
  /**
  * email_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#email_login DataAkeylessAuth#email_login}
  */
  readonly emailLogin?: DataAkeylessAuthEmailLogin[] | cdktf.IResolvable;
  /**
  * gcp_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#gcp_login DataAkeylessAuth#gcp_login}
  */
  readonly gcpLogin?: DataAkeylessAuthGcpLogin[] | cdktf.IResolvable;
  /**
  * jwt_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#jwt_login DataAkeylessAuth#jwt_login}
  */
  readonly jwtLogin?: DataAkeylessAuthJwtLogin[] | cdktf.IResolvable;
  /**
  * uid_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#uid_login DataAkeylessAuth#uid_login}
  */
  readonly uidLogin?: DataAkeylessAuthUidLogin[] | cdktf.IResolvable;
}
export interface DataAkeylessAuthApiKeyLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#access_id DataAkeylessAuth#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#access_key DataAkeylessAuth#access_key}
  */
  readonly accessKey: string;
}

export function dataAkeylessAuthApiKeyLoginToTerraform(struct?: DataAkeylessAuthApiKeyLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    access_key: cdktf.stringToTerraform(struct!.accessKey),
  }
}


export function dataAkeylessAuthApiKeyLoginToHclTerraform(struct?: DataAkeylessAuthApiKeyLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkeylessAuthApiKeyLoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkeylessAuthApiKeyLogin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkeylessAuthApiKeyLogin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessId = undefined;
      this._accessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessId = value.accessId;
      this._accessKey = value.accessKey;
    }
  }

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }
}

export class DataAkeylessAuthApiKeyLoginList extends cdktf.ComplexList {
  public internalValue? : DataAkeylessAuthApiKeyLogin[] | cdktf.IResolvable

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
  public get(index: number): DataAkeylessAuthApiKeyLoginOutputReference {
    return new DataAkeylessAuthApiKeyLoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkeylessAuthAwsIamLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#access_id DataAkeylessAuth#access_id}
  */
  readonly accessId: string;
}

export function dataAkeylessAuthAwsIamLoginToTerraform(struct?: DataAkeylessAuthAwsIamLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
  }
}


export function dataAkeylessAuthAwsIamLoginToHclTerraform(struct?: DataAkeylessAuthAwsIamLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkeylessAuthAwsIamLoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkeylessAuthAwsIamLogin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkeylessAuthAwsIamLogin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessId = value.accessId;
    }
  }

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }
}

export class DataAkeylessAuthAwsIamLoginList extends cdktf.ComplexList {
  public internalValue? : DataAkeylessAuthAwsIamLogin[] | cdktf.IResolvable

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
  public get(index: number): DataAkeylessAuthAwsIamLoginOutputReference {
    return new DataAkeylessAuthAwsIamLoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkeylessAuthAzureAdLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#access_id DataAkeylessAuth#access_id}
  */
  readonly accessId: string;
}

export function dataAkeylessAuthAzureAdLoginToTerraform(struct?: DataAkeylessAuthAzureAdLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
  }
}


export function dataAkeylessAuthAzureAdLoginToHclTerraform(struct?: DataAkeylessAuthAzureAdLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkeylessAuthAzureAdLoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkeylessAuthAzureAdLogin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkeylessAuthAzureAdLogin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessId = value.accessId;
    }
  }

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }
}

export class DataAkeylessAuthAzureAdLoginList extends cdktf.ComplexList {
  public internalValue? : DataAkeylessAuthAzureAdLogin[] | cdktf.IResolvable

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
  public get(index: number): DataAkeylessAuthAzureAdLoginOutputReference {
    return new DataAkeylessAuthAzureAdLoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkeylessAuthCertLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#access_id DataAkeylessAuth#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#cert_data DataAkeylessAuth#cert_data}
  */
  readonly certData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#cert_file_name DataAkeylessAuth#cert_file_name}
  */
  readonly certFileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#key_data DataAkeylessAuth#key_data}
  */
  readonly keyData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#key_file_name DataAkeylessAuth#key_file_name}
  */
  readonly keyFileName?: string;
}

export function dataAkeylessAuthCertLoginToTerraform(struct?: DataAkeylessAuthCertLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    cert_data: cdktf.stringToTerraform(struct!.certData),
    cert_file_name: cdktf.stringToTerraform(struct!.certFileName),
    key_data: cdktf.stringToTerraform(struct!.keyData),
    key_file_name: cdktf.stringToTerraform(struct!.keyFileName),
  }
}


export function dataAkeylessAuthCertLoginToHclTerraform(struct?: DataAkeylessAuthCertLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file_name: {
      value: cdktf.stringToHclTerraform(struct!.certFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file_name: {
      value: cdktf.stringToHclTerraform(struct!.keyFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkeylessAuthCertLoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkeylessAuthCertLogin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._certFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFileName = this._certFileName;
    }
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    if (this._keyFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFileName = this._keyFileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkeylessAuthCertLogin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessId = undefined;
      this._certData = undefined;
      this._certFileName = undefined;
      this._keyData = undefined;
      this._keyFileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessId = value.accessId;
      this._certData = value.certData;
      this._certFileName = value.certFileName;
      this._keyData = value.keyData;
      this._keyFileName = value.keyFileName;
    }
  }

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // cert_data - computed: false, optional: true, required: false
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  public resetCertData() {
    this._certData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
  }

  // cert_file_name - computed: false, optional: true, required: false
  private _certFileName?: string; 
  public get certFileName() {
    return this.getStringAttribute('cert_file_name');
  }
  public set certFileName(value: string) {
    this._certFileName = value;
  }
  public resetCertFileName() {
    this._certFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileNameInput() {
    return this._certFileName;
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }

  // key_file_name - computed: false, optional: true, required: false
  private _keyFileName?: string; 
  public get keyFileName() {
    return this.getStringAttribute('key_file_name');
  }
  public set keyFileName(value: string) {
    this._keyFileName = value;
  }
  public resetKeyFileName() {
    this._keyFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileNameInput() {
    return this._keyFileName;
  }
}

export class DataAkeylessAuthCertLoginList extends cdktf.ComplexList {
  public internalValue? : DataAkeylessAuthCertLogin[] | cdktf.IResolvable

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
  public get(index: number): DataAkeylessAuthCertLoginOutputReference {
    return new DataAkeylessAuthCertLoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkeylessAuthEmailLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#admin_email DataAkeylessAuth#admin_email}
  */
  readonly adminEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#admin_password DataAkeylessAuth#admin_password}
  */
  readonly adminPassword: string;
}

export function dataAkeylessAuthEmailLoginToTerraform(struct?: DataAkeylessAuthEmailLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
  }
}


export function dataAkeylessAuthEmailLoginToHclTerraform(struct?: DataAkeylessAuthEmailLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkeylessAuthEmailLoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkeylessAuthEmailLogin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkeylessAuthEmailLogin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminEmail = undefined;
      this._adminPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminEmail = value.adminEmail;
      this._adminPassword = value.adminPassword;
    }
  }

  // admin_email - computed: false, optional: false, required: true
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }
}

export class DataAkeylessAuthEmailLoginList extends cdktf.ComplexList {
  public internalValue? : DataAkeylessAuthEmailLogin[] | cdktf.IResolvable

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
  public get(index: number): DataAkeylessAuthEmailLoginOutputReference {
    return new DataAkeylessAuthEmailLoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkeylessAuthGcpLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#access_id DataAkeylessAuth#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#audience DataAkeylessAuth#audience}
  */
  readonly audience?: string;
}

export function dataAkeylessAuthGcpLoginToTerraform(struct?: DataAkeylessAuthGcpLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    audience: cdktf.stringToTerraform(struct!.audience),
  }
}


export function dataAkeylessAuthGcpLoginToHclTerraform(struct?: DataAkeylessAuthGcpLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkeylessAuthGcpLoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkeylessAuthGcpLogin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkeylessAuthGcpLogin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessId = undefined;
      this._audience = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessId = value.accessId;
      this._audience = value.audience;
    }
  }

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }
}

export class DataAkeylessAuthGcpLoginList extends cdktf.ComplexList {
  public internalValue? : DataAkeylessAuthGcpLogin[] | cdktf.IResolvable

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
  public get(index: number): DataAkeylessAuthGcpLoginOutputReference {
    return new DataAkeylessAuthGcpLoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkeylessAuthJwtLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#access_id DataAkeylessAuth#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#jwt DataAkeylessAuth#jwt}
  */
  readonly jwt: string;
}

export function dataAkeylessAuthJwtLoginToTerraform(struct?: DataAkeylessAuthJwtLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    jwt: cdktf.stringToTerraform(struct!.jwt),
  }
}


export function dataAkeylessAuthJwtLoginToHclTerraform(struct?: DataAkeylessAuthJwtLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt: {
      value: cdktf.stringToHclTerraform(struct!.jwt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkeylessAuthJwtLoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkeylessAuthJwtLogin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    if (this._jwt !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkeylessAuthJwtLogin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessId = undefined;
      this._jwt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessId = value.accessId;
      this._jwt = value.jwt;
    }
  }

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // jwt - computed: false, optional: false, required: true
  private _jwt?: string; 
  public get jwt() {
    return this.getStringAttribute('jwt');
  }
  public set jwt(value: string) {
    this._jwt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt;
  }
}

export class DataAkeylessAuthJwtLoginList extends cdktf.ComplexList {
  public internalValue? : DataAkeylessAuthJwtLogin[] | cdktf.IResolvable

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
  public get(index: number): DataAkeylessAuthJwtLoginOutputReference {
    return new DataAkeylessAuthJwtLoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkeylessAuthUidLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#access_id DataAkeylessAuth#access_id}
  */
  readonly accessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#uid_token DataAkeylessAuth#uid_token}
  */
  readonly uidToken: string;
}

export function dataAkeylessAuthUidLoginToTerraform(struct?: DataAkeylessAuthUidLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    uid_token: cdktf.stringToTerraform(struct!.uidToken),
  }
}


export function dataAkeylessAuthUidLoginToHclTerraform(struct?: DataAkeylessAuthUidLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid_token: {
      value: cdktf.stringToHclTerraform(struct!.uidToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkeylessAuthUidLoginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkeylessAuthUidLogin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessId = this._accessId;
    }
    if (this._uidToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.uidToken = this._uidToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkeylessAuthUidLogin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessId = undefined;
      this._uidToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessId = value.accessId;
      this._uidToken = value.uidToken;
    }
  }

  // access_id - computed: false, optional: true, required: false
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  public resetAccessId() {
    this._accessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // uid_token - computed: false, optional: false, required: true
  private _uidToken?: string; 
  public get uidToken() {
    return this.getStringAttribute('uid_token');
  }
  public set uidToken(value: string) {
    this._uidToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidTokenInput() {
    return this._uidToken;
  }
}

export class DataAkeylessAuthUidLoginList extends cdktf.ComplexList {
  public internalValue? : DataAkeylessAuthUidLogin[] | cdktf.IResolvable

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
  public get(index: number): DataAkeylessAuthUidLoginOutputReference {
    return new DataAkeylessAuthUidLoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth akeyless_auth}
*/
export class DataAkeylessAuth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkeylessAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkeylessAuth to import
  * @param importFromId The id of the existing DataAkeylessAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkeylessAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/data-sources/auth akeyless_auth} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkeylessAuthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkeylessAuthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless_auth',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
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
    this._apiKeyLogin.internalValue = config.apiKeyLogin;
    this._awsIamLogin.internalValue = config.awsIamLogin;
    this._azureAdLogin.internalValue = config.azureAdLogin;
    this._certLogin.internalValue = config.certLogin;
    this._emailLogin.internalValue = config.emailLogin;
    this._gcpLogin.internalValue = config.gcpLogin;
    this._jwtLogin.internalValue = config.jwtLogin;
    this._uidLogin.internalValue = config.uidLogin;
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

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // api_key_login - computed: false, optional: true, required: false
  private _apiKeyLogin = new DataAkeylessAuthApiKeyLoginList(this, "api_key_login", false);
  public get apiKeyLogin() {
    return this._apiKeyLogin;
  }
  public putApiKeyLogin(value: DataAkeylessAuthApiKeyLogin[] | cdktf.IResolvable) {
    this._apiKeyLogin.internalValue = value;
  }
  public resetApiKeyLogin() {
    this._apiKeyLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyLoginInput() {
    return this._apiKeyLogin.internalValue;
  }

  // aws_iam_login - computed: false, optional: true, required: false
  private _awsIamLogin = new DataAkeylessAuthAwsIamLoginList(this, "aws_iam_login", false);
  public get awsIamLogin() {
    return this._awsIamLogin;
  }
  public putAwsIamLogin(value: DataAkeylessAuthAwsIamLogin[] | cdktf.IResolvable) {
    this._awsIamLogin.internalValue = value;
  }
  public resetAwsIamLogin() {
    this._awsIamLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamLoginInput() {
    return this._awsIamLogin.internalValue;
  }

  // azure_ad_login - computed: false, optional: true, required: false
  private _azureAdLogin = new DataAkeylessAuthAzureAdLoginList(this, "azure_ad_login", false);
  public get azureAdLogin() {
    return this._azureAdLogin;
  }
  public putAzureAdLogin(value: DataAkeylessAuthAzureAdLogin[] | cdktf.IResolvable) {
    this._azureAdLogin.internalValue = value;
  }
  public resetAzureAdLogin() {
    this._azureAdLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdLoginInput() {
    return this._azureAdLogin.internalValue;
  }

  // cert_login - computed: false, optional: true, required: false
  private _certLogin = new DataAkeylessAuthCertLoginList(this, "cert_login", false);
  public get certLogin() {
    return this._certLogin;
  }
  public putCertLogin(value: DataAkeylessAuthCertLogin[] | cdktf.IResolvable) {
    this._certLogin.internalValue = value;
  }
  public resetCertLogin() {
    this._certLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certLoginInput() {
    return this._certLogin.internalValue;
  }

  // email_login - computed: false, optional: true, required: false
  private _emailLogin = new DataAkeylessAuthEmailLoginList(this, "email_login", false);
  public get emailLogin() {
    return this._emailLogin;
  }
  public putEmailLogin(value: DataAkeylessAuthEmailLogin[] | cdktf.IResolvable) {
    this._emailLogin.internalValue = value;
  }
  public resetEmailLogin() {
    this._emailLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailLoginInput() {
    return this._emailLogin.internalValue;
  }

  // gcp_login - computed: false, optional: true, required: false
  private _gcpLogin = new DataAkeylessAuthGcpLoginList(this, "gcp_login", false);
  public get gcpLogin() {
    return this._gcpLogin;
  }
  public putGcpLogin(value: DataAkeylessAuthGcpLogin[] | cdktf.IResolvable) {
    this._gcpLogin.internalValue = value;
  }
  public resetGcpLogin() {
    this._gcpLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpLoginInput() {
    return this._gcpLogin.internalValue;
  }

  // jwt_login - computed: false, optional: true, required: false
  private _jwtLogin = new DataAkeylessAuthJwtLoginList(this, "jwt_login", false);
  public get jwtLogin() {
    return this._jwtLogin;
  }
  public putJwtLogin(value: DataAkeylessAuthJwtLogin[] | cdktf.IResolvable) {
    this._jwtLogin.internalValue = value;
  }
  public resetJwtLogin() {
    this._jwtLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtLoginInput() {
    return this._jwtLogin.internalValue;
  }

  // uid_login - computed: false, optional: true, required: false
  private _uidLogin = new DataAkeylessAuthUidLoginList(this, "uid_login", false);
  public get uidLogin() {
    return this._uidLogin;
  }
  public putUidLogin(value: DataAkeylessAuthUidLogin[] | cdktf.IResolvable) {
    this._uidLogin.internalValue = value;
  }
  public resetUidLogin() {
    this._uidLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidLoginInput() {
    return this._uidLogin.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      api_key_login: cdktf.listMapper(dataAkeylessAuthApiKeyLoginToTerraform, true)(this._apiKeyLogin.internalValue),
      aws_iam_login: cdktf.listMapper(dataAkeylessAuthAwsIamLoginToTerraform, true)(this._awsIamLogin.internalValue),
      azure_ad_login: cdktf.listMapper(dataAkeylessAuthAzureAdLoginToTerraform, true)(this._azureAdLogin.internalValue),
      cert_login: cdktf.listMapper(dataAkeylessAuthCertLoginToTerraform, true)(this._certLogin.internalValue),
      email_login: cdktf.listMapper(dataAkeylessAuthEmailLoginToTerraform, true)(this._emailLogin.internalValue),
      gcp_login: cdktf.listMapper(dataAkeylessAuthGcpLoginToTerraform, true)(this._gcpLogin.internalValue),
      jwt_login: cdktf.listMapper(dataAkeylessAuthJwtLoginToTerraform, true)(this._jwtLogin.internalValue),
      uid_login: cdktf.listMapper(dataAkeylessAuthUidLoginToTerraform, true)(this._uidLogin.internalValue),
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
      api_key_login: {
        value: cdktf.listMapperHcl(dataAkeylessAuthApiKeyLoginToHclTerraform, true)(this._apiKeyLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkeylessAuthApiKeyLoginList",
      },
      aws_iam_login: {
        value: cdktf.listMapperHcl(dataAkeylessAuthAwsIamLoginToHclTerraform, true)(this._awsIamLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkeylessAuthAwsIamLoginList",
      },
      azure_ad_login: {
        value: cdktf.listMapperHcl(dataAkeylessAuthAzureAdLoginToHclTerraform, true)(this._azureAdLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkeylessAuthAzureAdLoginList",
      },
      cert_login: {
        value: cdktf.listMapperHcl(dataAkeylessAuthCertLoginToHclTerraform, true)(this._certLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkeylessAuthCertLoginList",
      },
      email_login: {
        value: cdktf.listMapperHcl(dataAkeylessAuthEmailLoginToHclTerraform, true)(this._emailLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkeylessAuthEmailLoginList",
      },
      gcp_login: {
        value: cdktf.listMapperHcl(dataAkeylessAuthGcpLoginToHclTerraform, true)(this._gcpLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkeylessAuthGcpLoginList",
      },
      jwt_login: {
        value: cdktf.listMapperHcl(dataAkeylessAuthJwtLoginToHclTerraform, true)(this._jwtLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkeylessAuthJwtLoginList",
      },
      uid_login: {
        value: cdktf.listMapperHcl(dataAkeylessAuthUidLoginToHclTerraform, true)(this._uidLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkeylessAuthUidLoginList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
