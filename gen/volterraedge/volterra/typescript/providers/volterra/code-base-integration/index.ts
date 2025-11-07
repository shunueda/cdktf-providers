// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodeBaseIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#annotations CodeBaseIntegration#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#description CodeBaseIntegration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#disable CodeBaseIntegration#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#id CodeBaseIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#labels CodeBaseIntegration#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#name CodeBaseIntegration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#namespace CodeBaseIntegration#namespace}
  */
  readonly namespace: string;
  /**
  * code_base_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#code_base_integration CodeBaseIntegration#code_base_integration}
  */
  readonly codeBaseIntegration?: CodeBaseIntegrationCodeBaseIntegration;
}
export interface CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#decryption_provider CodeBaseIntegration#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#location CodeBaseIntegration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#store_provider CodeBaseIntegration#store_provider}
  */
  readonly storeProvider?: string;
}

export function codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#provider CodeBaseIntegration#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#url CodeBaseIntegration#url}
  */
  readonly url: string;
}

export function codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#blindfold_secret_info CodeBaseIntegration#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#clear_secret_info CodeBaseIntegration#clear_secret_info}
  */
  readonly clearSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfo;
}

export function codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenOutputReference | CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenOutputReference | CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationAzureRepos {
  /**
  * access_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#access_token CodeBaseIntegration#access_token}
  */
  readonly accessToken: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessToken;
}

export function codeBaseIntegrationCodeBaseIntegrationAzureReposToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationAzureReposOutputReference | CodeBaseIntegrationCodeBaseIntegrationAzureRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenToTerraform(struct!.accessToken),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationAzureReposToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationAzureReposOutputReference | CodeBaseIntegrationCodeBaseIntegrationAzureRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: codeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationAzureReposOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationAzureRepos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationAzureRepos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken.internalValue = value.accessToken;
    }
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken = new CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: CodeBaseIntegrationCodeBaseIntegrationAzureReposAccessToken) {
    this._accessToken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#decryption_provider CodeBaseIntegration#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#location CodeBaseIntegration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#store_provider CodeBaseIntegration#store_provider}
  */
  readonly storeProvider?: string;
}

export function codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#provider CodeBaseIntegration#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#url CodeBaseIntegration#url}
  */
  readonly url: string;
}

export function codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswd {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#blindfold_secret_info CodeBaseIntegration#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#clear_secret_info CodeBaseIntegration#clear_secret_info}
  */
  readonly clearSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfo;
}

export function codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationBitbucket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#username CodeBaseIntegration#username}
  */
  readonly username: string;
  /**
  * passwd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#passwd CodeBaseIntegration#passwd}
  */
  readonly passwd: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswd;
}

export function codeBaseIntegrationCodeBaseIntegrationBitbucketToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    passwd: codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdToTerraform(struct!.passwd),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationBitbucketToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passwd: {
      value: codeBaseIntegrationCodeBaseIntegrationBitbucketPasswdToHclTerraform(struct!.passwd),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationBitbucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationBitbucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._passwd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwd = this._passwd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationBitbucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._passwd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._passwd.internalValue = value.passwd;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // passwd - computed: false, optional: false, required: true
  private _passwd = new CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswdOutputReference(this, "passwd");
  public get passwd() {
    return this._passwd;
  }
  public putPasswd(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketPasswd) {
    this._passwd.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdInput() {
    return this._passwd.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#decryption_provider CodeBaseIntegration#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#location CodeBaseIntegration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#store_provider CodeBaseIntegration#store_provider}
  */
  readonly storeProvider?: string;
}

export function codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#provider CodeBaseIntegration#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#url CodeBaseIntegration#url}
  */
  readonly url: string;
}

export function codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswd {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#blindfold_secret_info CodeBaseIntegration#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#clear_secret_info CodeBaseIntegration#clear_secret_info}
  */
  readonly clearSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfo;
}

export function codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationBitbucketServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#url CodeBaseIntegration#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#username CodeBaseIntegration#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#verify_ssl CodeBaseIntegration#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
  /**
  * passwd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#passwd CodeBaseIntegration#passwd}
  */
  readonly passwd: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswd;
}

export function codeBaseIntegrationCodeBaseIntegrationBitbucketServerToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
    verify_ssl: cdktf.booleanToTerraform(struct!.verifySsl),
    passwd: codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdToTerraform(struct!.passwd),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationBitbucketServerToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerOutputReference | CodeBaseIntegrationCodeBaseIntegrationBitbucketServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.verifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passwd: {
      value: codeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdToHclTerraform(struct!.passwd),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationBitbucketServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationBitbucketServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._verifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySsl = this._verifySsl;
    }
    if (this._passwd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwd = this._passwd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._username = undefined;
      this._verifySsl = undefined;
      this._passwd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._username = value.username;
      this._verifySsl = value.verifySsl;
      this._passwd.internalValue = value.passwd;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_ssl - computed: false, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
  public set verifySsl(value: boolean | cdktf.IResolvable) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
  }

  // passwd - computed: false, optional: false, required: true
  private _passwd = new CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswdOutputReference(this, "passwd");
  public get passwd() {
    return this._passwd;
  }
  public putPasswd(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketServerPasswd) {
    this._passwd.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdInput() {
    return this._passwd.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#decryption_provider CodeBaseIntegration#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#location CodeBaseIntegration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#store_provider CodeBaseIntegration#store_provider}
  */
  readonly storeProvider?: string;
}

export function codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#provider CodeBaseIntegration#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#url CodeBaseIntegration#url}
  */
  readonly url: string;
}

export function codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGithubAccessToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#blindfold_secret_info CodeBaseIntegration#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#clear_secret_info CodeBaseIntegration#clear_secret_info}
  */
  readonly clearSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfo;
}

export function codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGithubAccessToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGithubAccessToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#username CodeBaseIntegration#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#verify_ssl CodeBaseIntegration#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
  /**
  * access_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#access_token CodeBaseIntegration#access_token}
  */
  readonly accessToken: CodeBaseIntegrationCodeBaseIntegrationGithubAccessToken;
}

export function codeBaseIntegrationCodeBaseIntegrationGithubToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    verify_ssl: cdktf.booleanToTerraform(struct!.verifySsl),
    access_token: codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenToTerraform(struct!.accessToken),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGithubToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.verifySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_token: {
      value: codeBaseIntegrationCodeBaseIntegrationGithubAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._verifySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySsl = this._verifySsl;
    }
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._verifySsl = undefined;
      this._accessToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._verifySsl = value.verifySsl;
      this._accessToken.internalValue = value.accessToken;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_ssl - computed: false, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
  public set verifySsl(value: boolean | cdktf.IResolvable) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken = new CodeBaseIntegrationCodeBaseIntegrationGithubAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: CodeBaseIntegrationCodeBaseIntegrationGithubAccessToken) {
    this._accessToken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#decryption_provider CodeBaseIntegration#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#location CodeBaseIntegration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#store_provider CodeBaseIntegration#store_provider}
  */
  readonly storeProvider?: string;
}

export function codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#provider CodeBaseIntegration#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#url CodeBaseIntegration#url}
  */
  readonly url: string;
}

export function codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#blindfold_secret_info CodeBaseIntegration#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#clear_secret_info CodeBaseIntegration#clear_secret_info}
  */
  readonly clearSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfo;
}

export function codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGithubEnterprise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#hostname CodeBaseIntegration#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#username CodeBaseIntegration#username}
  */
  readonly username: string;
  /**
  * access_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#access_token CodeBaseIntegration#access_token}
  */
  readonly accessToken: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessToken;
}

export function codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    username: cdktf.stringToTerraform(struct!.username),
    access_token: codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenToTerraform(struct!.accessToken),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseOutputReference | CodeBaseIntegrationCodeBaseIntegrationGithubEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token: {
      value: codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGithubEnterprise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGithubEnterprise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._username = undefined;
      this._accessToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._username = value.username;
      this._accessToken.internalValue = value.accessToken;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken = new CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseAccessToken) {
    this._accessToken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#decryption_provider CodeBaseIntegration#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#location CodeBaseIntegration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#store_provider CodeBaseIntegration#store_provider}
  */
  readonly storeProvider?: string;
}

export function codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#provider CodeBaseIntegration#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#url CodeBaseIntegration#url}
  */
  readonly url: string;
}

export function codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGitlabAccessToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#blindfold_secret_info CodeBaseIntegration#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#clear_secret_info CodeBaseIntegration#clear_secret_info}
  */
  readonly clearSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfo;
}

export function codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGitlabAccessToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGitlab {
  /**
  * access_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#access_token CodeBaseIntegration#access_token}
  */
  readonly accessToken: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessToken;
}

export function codeBaseIntegrationCodeBaseIntegrationGitlabToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenToTerraform(struct!.accessToken),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGitlabToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: codeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken.internalValue = value.accessToken;
    }
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken = new CodeBaseIntegrationCodeBaseIntegrationGitlabAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: CodeBaseIntegrationCodeBaseIntegrationGitlabAccessToken) {
    this._accessToken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#decryption_provider CodeBaseIntegration#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#location CodeBaseIntegration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#store_provider CodeBaseIntegration#store_provider}
  */
  readonly storeProvider?: string;
}

export function codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#provider CodeBaseIntegration#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#url CodeBaseIntegration#url}
  */
  readonly url: string;
}

export function codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfoToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfoToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfoOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#blindfold_secret_info CodeBaseIntegration#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#clear_secret_info CodeBaseIntegration#clear_secret_info}
  */
  readonly clearSecretInfo?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfo;
}

export function codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegrationGitlabEnterprise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#url CodeBaseIntegration#url}
  */
  readonly url: string;
  /**
  * access_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#access_token CodeBaseIntegration#access_token}
  */
  readonly accessToken: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessToken;
}

export function codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    access_token: codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenToTerraform(struct!.accessToken),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseOutputReference | CodeBaseIntegrationCodeBaseIntegrationGitlabEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token: {
      value: codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegrationGitlabEnterprise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterprise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._accessToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._accessToken.internalValue = value.accessToken;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken = new CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseAccessToken) {
    this._accessToken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }
}
export interface CodeBaseIntegrationCodeBaseIntegration {
  /**
  * azure_repos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#azure_repos CodeBaseIntegration#azure_repos}
  */
  readonly azureRepos?: CodeBaseIntegrationCodeBaseIntegrationAzureRepos;
  /**
  * bitbucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#bitbucket CodeBaseIntegration#bitbucket}
  */
  readonly bitbucket?: CodeBaseIntegrationCodeBaseIntegrationBitbucket;
  /**
  * bitbucket_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#bitbucket_server CodeBaseIntegration#bitbucket_server}
  */
  readonly bitbucketServer?: CodeBaseIntegrationCodeBaseIntegrationBitbucketServer;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#github CodeBaseIntegration#github}
  */
  readonly github?: CodeBaseIntegrationCodeBaseIntegrationGithub;
  /**
  * github_enterprise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#github_enterprise CodeBaseIntegration#github_enterprise}
  */
  readonly githubEnterprise?: CodeBaseIntegrationCodeBaseIntegrationGithubEnterprise;
  /**
  * gitlab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#gitlab CodeBaseIntegration#gitlab}
  */
  readonly gitlab?: CodeBaseIntegrationCodeBaseIntegrationGitlab;
  /**
  * gitlab_enterprise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#gitlab_enterprise CodeBaseIntegration#gitlab_enterprise}
  */
  readonly gitlabEnterprise?: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterprise;
}

export function codeBaseIntegrationCodeBaseIntegrationToTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationOutputReference | CodeBaseIntegrationCodeBaseIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_repos: codeBaseIntegrationCodeBaseIntegrationAzureReposToTerraform(struct!.azureRepos),
    bitbucket: codeBaseIntegrationCodeBaseIntegrationBitbucketToTerraform(struct!.bitbucket),
    bitbucket_server: codeBaseIntegrationCodeBaseIntegrationBitbucketServerToTerraform(struct!.bitbucketServer),
    github: codeBaseIntegrationCodeBaseIntegrationGithubToTerraform(struct!.github),
    github_enterprise: codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseToTerraform(struct!.githubEnterprise),
    gitlab: codeBaseIntegrationCodeBaseIntegrationGitlabToTerraform(struct!.gitlab),
    gitlab_enterprise: codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseToTerraform(struct!.gitlabEnterprise),
  }
}


export function codeBaseIntegrationCodeBaseIntegrationToHclTerraform(struct?: CodeBaseIntegrationCodeBaseIntegrationOutputReference | CodeBaseIntegrationCodeBaseIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_repos: {
      value: codeBaseIntegrationCodeBaseIntegrationAzureReposToHclTerraform(struct!.azureRepos),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationAzureReposList",
    },
    bitbucket: {
      value: codeBaseIntegrationCodeBaseIntegrationBitbucketToHclTerraform(struct!.bitbucket),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationBitbucketList",
    },
    bitbucket_server: {
      value: codeBaseIntegrationCodeBaseIntegrationBitbucketServerToHclTerraform(struct!.bitbucketServer),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationBitbucketServerList",
    },
    github: {
      value: codeBaseIntegrationCodeBaseIntegrationGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGithubList",
    },
    github_enterprise: {
      value: codeBaseIntegrationCodeBaseIntegrationGithubEnterpriseToHclTerraform(struct!.githubEnterprise),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseList",
    },
    gitlab: {
      value: codeBaseIntegrationCodeBaseIntegrationGitlabToHclTerraform(struct!.gitlab),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGitlabList",
    },
    gitlab_enterprise: {
      value: codeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseToHclTerraform(struct!.gitlabEnterprise),
      isBlock: true,
      type: "list",
      storageClassType: "CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeBaseIntegrationCodeBaseIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodeBaseIntegrationCodeBaseIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureRepos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureRepos = this._azureRepos?.internalValue;
    }
    if (this._bitbucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitbucket = this._bitbucket?.internalValue;
    }
    if (this._bitbucketServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitbucketServer = this._bitbucketServer?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._githubEnterprise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubEnterprise = this._githubEnterprise?.internalValue;
    }
    if (this._gitlab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlab = this._gitlab?.internalValue;
    }
    if (this._gitlabEnterprise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlabEnterprise = this._gitlabEnterprise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeBaseIntegrationCodeBaseIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureRepos.internalValue = undefined;
      this._bitbucket.internalValue = undefined;
      this._bitbucketServer.internalValue = undefined;
      this._github.internalValue = undefined;
      this._githubEnterprise.internalValue = undefined;
      this._gitlab.internalValue = undefined;
      this._gitlabEnterprise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureRepos.internalValue = value.azureRepos;
      this._bitbucket.internalValue = value.bitbucket;
      this._bitbucketServer.internalValue = value.bitbucketServer;
      this._github.internalValue = value.github;
      this._githubEnterprise.internalValue = value.githubEnterprise;
      this._gitlab.internalValue = value.gitlab;
      this._gitlabEnterprise.internalValue = value.gitlabEnterprise;
    }
  }

  // azure_repos - computed: false, optional: true, required: false
  private _azureRepos = new CodeBaseIntegrationCodeBaseIntegrationAzureReposOutputReference(this, "azure_repos");
  public get azureRepos() {
    return this._azureRepos;
  }
  public putAzureRepos(value: CodeBaseIntegrationCodeBaseIntegrationAzureRepos) {
    this._azureRepos.internalValue = value;
  }
  public resetAzureRepos() {
    this._azureRepos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureReposInput() {
    return this._azureRepos.internalValue;
  }

  // bitbucket - computed: false, optional: true, required: false
  private _bitbucket = new CodeBaseIntegrationCodeBaseIntegrationBitbucketOutputReference(this, "bitbucket");
  public get bitbucket() {
    return this._bitbucket;
  }
  public putBitbucket(value: CodeBaseIntegrationCodeBaseIntegrationBitbucket) {
    this._bitbucket.internalValue = value;
  }
  public resetBitbucket() {
    this._bitbucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketInput() {
    return this._bitbucket.internalValue;
  }

  // bitbucket_server - computed: false, optional: true, required: false
  private _bitbucketServer = new CodeBaseIntegrationCodeBaseIntegrationBitbucketServerOutputReference(this, "bitbucket_server");
  public get bitbucketServer() {
    return this._bitbucketServer;
  }
  public putBitbucketServer(value: CodeBaseIntegrationCodeBaseIntegrationBitbucketServer) {
    this._bitbucketServer.internalValue = value;
  }
  public resetBitbucketServer() {
    this._bitbucketServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketServerInput() {
    return this._bitbucketServer.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new CodeBaseIntegrationCodeBaseIntegrationGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: CodeBaseIntegrationCodeBaseIntegrationGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // github_enterprise - computed: false, optional: true, required: false
  private _githubEnterprise = new CodeBaseIntegrationCodeBaseIntegrationGithubEnterpriseOutputReference(this, "github_enterprise");
  public get githubEnterprise() {
    return this._githubEnterprise;
  }
  public putGithubEnterprise(value: CodeBaseIntegrationCodeBaseIntegrationGithubEnterprise) {
    this._githubEnterprise.internalValue = value;
  }
  public resetGithubEnterprise() {
    this._githubEnterprise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseInput() {
    return this._githubEnterprise.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new CodeBaseIntegrationCodeBaseIntegrationGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: CodeBaseIntegrationCodeBaseIntegrationGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // gitlab_enterprise - computed: false, optional: true, required: false
  private _gitlabEnterprise = new CodeBaseIntegrationCodeBaseIntegrationGitlabEnterpriseOutputReference(this, "gitlab_enterprise");
  public get gitlabEnterprise() {
    return this._gitlabEnterprise;
  }
  public putGitlabEnterprise(value: CodeBaseIntegrationCodeBaseIntegrationGitlabEnterprise) {
    this._gitlabEnterprise.internalValue = value;
  }
  public resetGitlabEnterprise() {
    this._gitlabEnterprise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabEnterpriseInput() {
    return this._gitlabEnterprise.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration volterra_code_base_integration}
*/
export class CodeBaseIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_code_base_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CodeBaseIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodeBaseIntegration to import
  * @param importFromId The id of the existing CodeBaseIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodeBaseIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_code_base_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/code_base_integration volterra_code_base_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodeBaseIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: CodeBaseIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_code_base_integration',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._codeBaseIntegration.internalValue = config.codeBaseIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // code_base_integration - computed: false, optional: true, required: false
  private _codeBaseIntegration = new CodeBaseIntegrationCodeBaseIntegrationOutputReference(this, "code_base_integration");
  public get codeBaseIntegration() {
    return this._codeBaseIntegration;
  }
  public putCodeBaseIntegration(value: CodeBaseIntegrationCodeBaseIntegration) {
    this._codeBaseIntegration.internalValue = value;
  }
  public resetCodeBaseIntegration() {
    this._codeBaseIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationInput() {
    return this._codeBaseIntegration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      code_base_integration: codeBaseIntegrationCodeBaseIntegrationToTerraform(this._codeBaseIntegration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      code_base_integration: {
        value: codeBaseIntegrationCodeBaseIntegrationToHclTerraform(this._codeBaseIntegration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodeBaseIntegrationCodeBaseIntegrationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
