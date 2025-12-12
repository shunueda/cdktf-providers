import * as cdktf from 'cdktf';
export interface AwsVpcSiteAdminPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#decryption_provider AwsVpcSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#location AwsVpcSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#store_provider AwsVpcSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function awsVpcSiteAdminPasswordBlindfoldSecretInfoToTerraform(struct?: AwsVpcSiteAdminPasswordBlindfoldSecretInfoOutputReference | AwsVpcSiteAdminPasswordBlindfoldSecretInfo): any {
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


export function awsVpcSiteAdminPasswordBlindfoldSecretInfoToHclTerraform(struct?: AwsVpcSiteAdminPasswordBlindfoldSecretInfoOutputReference | AwsVpcSiteAdminPasswordBlindfoldSecretInfo): any {
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

export class AwsVpcSiteAdminPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteAdminPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AwsVpcSiteAdminPasswordBlindfoldSecretInfo | undefined) {
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
export interface AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#decryption_provider AwsVpcSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#location AwsVpcSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#store_provider AwsVpcSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function awsVpcSiteAdminPasswordBlindfoldSecretInfoInternalToTerraform(struct?: AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternalOutputReference | AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternal): any {
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


export function awsVpcSiteAdminPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternalOutputReference | AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternal): any {
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

export class AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternal | undefined) {
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
export interface AwsVpcSiteAdminPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#provider AwsVpcSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#url AwsVpcSite#url}
  */
  readonly url: string;
}

export function awsVpcSiteAdminPasswordClearSecretInfoToTerraform(struct?: AwsVpcSiteAdminPasswordClearSecretInfoOutputReference | AwsVpcSiteAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function awsVpcSiteAdminPasswordClearSecretInfoToHclTerraform(struct?: AwsVpcSiteAdminPasswordClearSecretInfoOutputReference | AwsVpcSiteAdminPasswordClearSecretInfo): any {
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

export class AwsVpcSiteAdminPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteAdminPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: AwsVpcSiteAdminPasswordClearSecretInfo | undefined) {
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
export interface AwsVpcSiteAdminPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#key AwsVpcSite#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#location AwsVpcSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#provider AwsVpcSite#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#secret_encoding AwsVpcSite#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#version AwsVpcSite#version}
  */
  readonly version?: number;
}

export function awsVpcSiteAdminPasswordVaultSecretInfoToTerraform(struct?: AwsVpcSiteAdminPasswordVaultSecretInfoOutputReference | AwsVpcSiteAdminPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function awsVpcSiteAdminPasswordVaultSecretInfoToHclTerraform(struct?: AwsVpcSiteAdminPasswordVaultSecretInfoOutputReference | AwsVpcSiteAdminPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteAdminPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteAdminPasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteAdminPasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface AwsVpcSiteAdminPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name: string;
}

export function awsVpcSiteAdminPasswordWingmanSecretInfoToTerraform(struct?: AwsVpcSiteAdminPasswordWingmanSecretInfoOutputReference | AwsVpcSiteAdminPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function awsVpcSiteAdminPasswordWingmanSecretInfoToHclTerraform(struct?: AwsVpcSiteAdminPasswordWingmanSecretInfoOutputReference | AwsVpcSiteAdminPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteAdminPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteAdminPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteAdminPasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface AwsVpcSiteAdminPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#secret_encoding_type AwsVpcSite#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#blindfold_secret_info AwsVpcSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AwsVpcSiteAdminPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#blindfold_secret_info_internal AwsVpcSite#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#clear_secret_info AwsVpcSite#clear_secret_info}
  */
  readonly clearSecretInfo?: AwsVpcSiteAdminPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#vault_secret_info AwsVpcSite#vault_secret_info}
  */
  readonly vaultSecretInfo?: AwsVpcSiteAdminPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#wingman_secret_info AwsVpcSite#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: AwsVpcSiteAdminPasswordWingmanSecretInfo;
}

export function awsVpcSiteAdminPasswordToTerraform(struct?: AwsVpcSiteAdminPasswordOutputReference | AwsVpcSiteAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: awsVpcSiteAdminPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: awsVpcSiteAdminPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: awsVpcSiteAdminPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: awsVpcSiteAdminPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: awsVpcSiteAdminPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function awsVpcSiteAdminPasswordToHclTerraform(struct?: AwsVpcSiteAdminPasswordOutputReference | AwsVpcSiteAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: awsVpcSiteAdminPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteAdminPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: awsVpcSiteAdminPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: awsVpcSiteAdminPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteAdminPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: awsVpcSiteAdminPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteAdminPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: awsVpcSiteAdminPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteAdminPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteAdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteAdminPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteAdminPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new AwsVpcSiteAdminPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AwsVpcSiteAdminPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: AwsVpcSiteAdminPasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new AwsVpcSiteAdminPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AwsVpcSiteAdminPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new AwsVpcSiteAdminPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: AwsVpcSiteAdminPasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new AwsVpcSiteAdminPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: AwsVpcSiteAdminPasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface AwsVpcSiteAwsCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteAwsCredToTerraform(struct?: AwsVpcSiteAwsCredOutputReference | AwsVpcSiteAwsCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteAwsCredToHclTerraform(struct?: AwsVpcSiteAwsCredOutputReference | AwsVpcSiteAwsCred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteAwsCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteAwsCred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteAwsCred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AwsVpcSiteBlockedServicesBlockedSevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#dns AwsVpcSite#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#network_type AwsVpcSite#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ssh AwsVpcSite#ssh}
  */
  readonly ssh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#web_user_interface AwsVpcSite#web_user_interface}
  */
  readonly webUserInterface?: boolean | cdktf.IResolvable;
}

export function awsVpcSiteBlockedServicesBlockedSeviceToTerraform(struct?: AwsVpcSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.booleanToTerraform(struct!.dns),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ssh: cdktf.booleanToTerraform(struct!.ssh),
    web_user_interface: cdktf.booleanToTerraform(struct!.webUserInterface),
  }
}


export function awsVpcSiteBlockedServicesBlockedSeviceToHclTerraform(struct?: AwsVpcSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.booleanToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh: {
      value: cdktf.booleanToHclTerraform(struct!.ssh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_user_interface: {
      value: cdktf.booleanToHclTerraform(struct!.webUserInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteBlockedServicesBlockedSeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ssh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh;
    }
    if (this._webUserInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.webUserInterface = this._webUserInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._networkType = undefined;
      this._ssh = undefined;
      this._webUserInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._networkType = value.networkType;
      this._ssh = value.ssh;
      this._webUserInterface = value.webUserInterface;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: boolean | cdktf.IResolvable; 
  public get dns() {
    return this.getBooleanAttribute('dns');
  }
  public set dns(value: boolean | cdktf.IResolvable) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: boolean | cdktf.IResolvable; 
  public get ssh() {
    return this.getBooleanAttribute('ssh');
  }
  public set ssh(value: boolean | cdktf.IResolvable) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // web_user_interface - computed: false, optional: true, required: false
  private _webUserInterface?: boolean | cdktf.IResolvable; 
  public get webUserInterface() {
    return this.getBooleanAttribute('web_user_interface');
  }
  public set webUserInterface(value: boolean | cdktf.IResolvable) {
    this._webUserInterface = value;
  }
  public resetWebUserInterface() {
    this._webUserInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUserInterfaceInput() {
    return this._webUserInterface;
  }
}

export class AwsVpcSiteBlockedServicesBlockedSeviceList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteBlockedServicesBlockedSeviceOutputReference {
    return new AwsVpcSiteBlockedServicesBlockedSeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteBlockedServices {
  /**
  * blocked_sevice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#blocked_sevice AwsVpcSite#blocked_sevice}
  */
  readonly blockedSevice?: AwsVpcSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable;
}

export function awsVpcSiteBlockedServicesToTerraform(struct?: AwsVpcSiteBlockedServicesOutputReference | AwsVpcSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_sevice: cdktf.listMapper(awsVpcSiteBlockedServicesBlockedSeviceToTerraform, true)(struct!.blockedSevice),
  }
}


export function awsVpcSiteBlockedServicesToHclTerraform(struct?: AwsVpcSiteBlockedServicesOutputReference | AwsVpcSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_sevice: {
      value: cdktf.listMapperHcl(awsVpcSiteBlockedServicesBlockedSeviceToHclTerraform, true)(struct!.blockedSevice),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteBlockedServicesBlockedSeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteBlockedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteBlockedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedSevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedSevice = this._blockedSevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteBlockedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockedSevice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockedSevice.internalValue = value.blockedSevice;
    }
  }

  // blocked_sevice - computed: false, optional: true, required: false
  private _blockedSevice = new AwsVpcSiteBlockedServicesBlockedSeviceList(this, "blocked_sevice", false);
  public get blockedSevice() {
    return this._blockedSevice;
  }
  public putBlockedSevice(value: AwsVpcSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable) {
    this._blockedSevice.internalValue = value;
  }
  public resetBlockedSevice() {
    this._blockedSevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedSeviceInput() {
    return this._blockedSevice.internalValue;
  }
}
export interface AwsVpcSiteCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#latitude AwsVpcSite#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#longitude AwsVpcSite#longitude}
  */
  readonly longitude?: number;
}

export function awsVpcSiteCoordinatesToTerraform(struct?: AwsVpcSiteCoordinatesOutputReference | AwsVpcSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function awsVpcSiteCoordinatesToHclTerraform(struct?: AwsVpcSiteCoordinatesOutputReference | AwsVpcSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteCoordinates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteCoordinates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}
export interface AwsVpcSiteCustomDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#inside_nameserver AwsVpcSite#inside_nameserver}
  */
  readonly insideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#inside_nameserver_v6 AwsVpcSite#inside_nameserver_v6}
  */
  readonly insideNameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#outside_nameserver AwsVpcSite#outside_nameserver}
  */
  readonly outsideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#outside_nameserver_v6 AwsVpcSite#outside_nameserver_v6}
  */
  readonly outsideNameserverV6?: string;
}

export function awsVpcSiteCustomDnsToTerraform(struct?: AwsVpcSiteCustomDnsOutputReference | AwsVpcSiteCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_nameserver: cdktf.stringToTerraform(struct!.insideNameserver),
    inside_nameserver_v6: cdktf.stringToTerraform(struct!.insideNameserverV6),
    outside_nameserver: cdktf.stringToTerraform(struct!.outsideNameserver),
    outside_nameserver_v6: cdktf.stringToTerraform(struct!.outsideNameserverV6),
  }
}


export function awsVpcSiteCustomDnsToHclTerraform(struct?: AwsVpcSiteCustomDnsOutputReference | AwsVpcSiteCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.insideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.insideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteCustomDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteCustomDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNameserver = this._insideNameserver;
    }
    if (this._insideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNameserverV6 = this._insideNameserverV6;
    }
    if (this._outsideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserver = this._outsideNameserver;
    }
    if (this._outsideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserverV6 = this._outsideNameserverV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteCustomDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNameserver = undefined;
      this._insideNameserverV6 = undefined;
      this._outsideNameserver = undefined;
      this._outsideNameserverV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNameserver = value.insideNameserver;
      this._insideNameserverV6 = value.insideNameserverV6;
      this._outsideNameserver = value.outsideNameserver;
      this._outsideNameserverV6 = value.outsideNameserverV6;
    }
  }

  // inside_nameserver - computed: false, optional: true, required: false
  private _insideNameserver?: string; 
  public get insideNameserver() {
    return this.getStringAttribute('inside_nameserver');
  }
  public set insideNameserver(value: string) {
    this._insideNameserver = value;
  }
  public resetInsideNameserver() {
    this._insideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverInput() {
    return this._insideNameserver;
  }

  // inside_nameserver_v6 - computed: false, optional: true, required: false
  private _insideNameserverV6?: string; 
  public get insideNameserverV6() {
    return this.getStringAttribute('inside_nameserver_v6');
  }
  public set insideNameserverV6(value: string) {
    this._insideNameserverV6 = value;
  }
  public resetInsideNameserverV6() {
    this._insideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverV6Input() {
    return this._insideNameserverV6;
  }

  // outside_nameserver - computed: false, optional: true, required: false
  private _outsideNameserver?: string; 
  public get outsideNameserver() {
    return this.getStringAttribute('outside_nameserver');
  }
  public set outsideNameserver(value: string) {
    this._outsideNameserver = value;
  }
  public resetOutsideNameserver() {
    this._outsideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverInput() {
    return this._outsideNameserver;
  }

  // outside_nameserver_v6 - computed: false, optional: true, required: false
  private _outsideNameserverV6?: string; 
  public get outsideNameserverV6() {
    return this.getStringAttribute('outside_nameserver_v6');
  }
  public set outsideNameserverV6(value: string) {
    this._outsideNameserverV6 = value;
  }
  public resetOutsideNameserverV6() {
    this._outsideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverV6Input() {
    return this._outsideNameserverV6;
  }
}
export interface AwsVpcSiteCustomSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#inside_security_group_id AwsVpcSite#inside_security_group_id}
  */
  readonly insideSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#outside_security_group_id AwsVpcSite#outside_security_group_id}
  */
  readonly outsideSecurityGroupId?: string;
}

export function awsVpcSiteCustomSecurityGroupToTerraform(struct?: AwsVpcSiteCustomSecurityGroupOutputReference | AwsVpcSiteCustomSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_security_group_id: cdktf.stringToTerraform(struct!.insideSecurityGroupId),
    outside_security_group_id: cdktf.stringToTerraform(struct!.outsideSecurityGroupId),
  }
}


export function awsVpcSiteCustomSecurityGroupToHclTerraform(struct?: AwsVpcSiteCustomSecurityGroupOutputReference | AwsVpcSiteCustomSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.insideSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.outsideSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteCustomSecurityGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteCustomSecurityGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSecurityGroupId = this._insideSecurityGroupId;
    }
    if (this._outsideSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSecurityGroupId = this._outsideSecurityGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteCustomSecurityGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideSecurityGroupId = undefined;
      this._outsideSecurityGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideSecurityGroupId = value.insideSecurityGroupId;
      this._outsideSecurityGroupId = value.outsideSecurityGroupId;
    }
  }

  // inside_security_group_id - computed: false, optional: true, required: false
  private _insideSecurityGroupId?: string; 
  public get insideSecurityGroupId() {
    return this.getStringAttribute('inside_security_group_id');
  }
  public set insideSecurityGroupId(value: string) {
    this._insideSecurityGroupId = value;
  }
  public resetInsideSecurityGroupId() {
    this._insideSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSecurityGroupIdInput() {
    return this._insideSecurityGroupId;
  }

  // outside_security_group_id - computed: false, optional: true, required: false
  private _outsideSecurityGroupId?: string; 
  public get outsideSecurityGroupId() {
    return this.getStringAttribute('outside_security_group_id');
  }
  public set outsideSecurityGroupId(value: string) {
    this._outsideSecurityGroupId = value;
  }
  public resetOutsideSecurityGroupId() {
    this._outsideSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSecurityGroupIdInput() {
    return this._outsideSecurityGroupId;
  }
}
export interface AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#cloudlink_network_name AwsVpcSite#cloudlink_network_name}
  */
  readonly cloudlinkNetworkName: string;
}

export function awsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectToTerraform(struct?: AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectOutputReference | AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudlink_network_name: cdktf.stringToTerraform(struct!.cloudlinkNetworkName),
  }
}


export function awsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectToHclTerraform(struct?: AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectOutputReference | AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudlink_network_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudlinkNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudlinkNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudlinkNetworkName = this._cloudlinkNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudlinkNetworkName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudlinkNetworkName = value.cloudlinkNetworkName;
    }
  }

  // cloudlink_network_name - computed: false, optional: false, required: true
  private _cloudlinkNetworkName?: string; 
  public get cloudlinkNetworkName() {
    return this.getStringAttribute('cloudlink_network_name');
  }
  public set cloudlinkNetworkName(value: string) {
    this._cloudlinkNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudlinkNetworkNameInput() {
    return this._cloudlinkNetworkName;
  }
}
export interface AwsVpcSiteDirectConnectEnabledHostedVifsVifListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#other_region AwsVpcSite#other_region}
  */
  readonly otherRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#same_as_site_region AwsVpcSite#same_as_site_region}
  */
  readonly sameAsSiteRegion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#vif_id AwsVpcSite#vif_id}
  */
  readonly vifId: string;
}

export function awsVpcSiteDirectConnectEnabledHostedVifsVifListStructToTerraform(struct?: AwsVpcSiteDirectConnectEnabledHostedVifsVifListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other_region: cdktf.stringToTerraform(struct!.otherRegion),
    same_as_site_region: cdktf.booleanToTerraform(struct!.sameAsSiteRegion),
    vif_id: cdktf.stringToTerraform(struct!.vifId),
  }
}


export function awsVpcSiteDirectConnectEnabledHostedVifsVifListStructToHclTerraform(struct?: AwsVpcSiteDirectConnectEnabledHostedVifsVifListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other_region: {
      value: cdktf.stringToHclTerraform(struct!.otherRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_as_site_region: {
      value: cdktf.booleanToHclTerraform(struct!.sameAsSiteRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vif_id: {
      value: cdktf.stringToHclTerraform(struct!.vifId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteDirectConnectEnabledHostedVifsVifListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteDirectConnectEnabledHostedVifsVifListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._otherRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherRegion = this._otherRegion;
    }
    if (this._sameAsSiteRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameAsSiteRegion = this._sameAsSiteRegion;
    }
    if (this._vifId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vifId = this._vifId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteDirectConnectEnabledHostedVifsVifListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._otherRegion = undefined;
      this._sameAsSiteRegion = undefined;
      this._vifId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._otherRegion = value.otherRegion;
      this._sameAsSiteRegion = value.sameAsSiteRegion;
      this._vifId = value.vifId;
    }
  }

  // other_region - computed: false, optional: true, required: false
  private _otherRegion?: string; 
  public get otherRegion() {
    return this.getStringAttribute('other_region');
  }
  public set otherRegion(value: string) {
    this._otherRegion = value;
  }
  public resetOtherRegion() {
    this._otherRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherRegionInput() {
    return this._otherRegion;
  }

  // same_as_site_region - computed: false, optional: true, required: false
  private _sameAsSiteRegion?: boolean | cdktf.IResolvable; 
  public get sameAsSiteRegion() {
    return this.getBooleanAttribute('same_as_site_region');
  }
  public set sameAsSiteRegion(value: boolean | cdktf.IResolvable) {
    this._sameAsSiteRegion = value;
  }
  public resetSameAsSiteRegion() {
    this._sameAsSiteRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameAsSiteRegionInput() {
    return this._sameAsSiteRegion;
  }

  // vif_id - computed: false, optional: false, required: true
  private _vifId?: string; 
  public get vifId() {
    return this.getStringAttribute('vif_id');
  }
  public set vifId(value: string) {
    this._vifId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vifIdInput() {
    return this._vifId;
  }
}

export class AwsVpcSiteDirectConnectEnabledHostedVifsVifListStructList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteDirectConnectEnabledHostedVifsVifListStruct[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteDirectConnectEnabledHostedVifsVifListStructOutputReference {
    return new AwsVpcSiteDirectConnectEnabledHostedVifsVifListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteDirectConnectEnabledHostedVifs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#site_registration_over_internet AwsVpcSite#site_registration_over_internet}
  */
  readonly siteRegistrationOverInternet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#vifs AwsVpcSite#vifs}
  */
  readonly vifs?: string[];
  /**
  * site_registration_over_direct_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#site_registration_over_direct_connect AwsVpcSite#site_registration_over_direct_connect}
  */
  readonly siteRegistrationOverDirectConnect?: AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect;
  /**
  * vif_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#vif_list AwsVpcSite#vif_list}
  */
  readonly vifList?: AwsVpcSiteDirectConnectEnabledHostedVifsVifListStruct[] | cdktf.IResolvable;
}

export function awsVpcSiteDirectConnectEnabledHostedVifsToTerraform(struct?: AwsVpcSiteDirectConnectEnabledHostedVifsOutputReference | AwsVpcSiteDirectConnectEnabledHostedVifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_registration_over_internet: cdktf.booleanToTerraform(struct!.siteRegistrationOverInternet),
    vifs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vifs),
    site_registration_over_direct_connect: awsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectToTerraform(struct!.siteRegistrationOverDirectConnect),
    vif_list: cdktf.listMapper(awsVpcSiteDirectConnectEnabledHostedVifsVifListStructToTerraform, true)(struct!.vifList),
  }
}


export function awsVpcSiteDirectConnectEnabledHostedVifsToHclTerraform(struct?: AwsVpcSiteDirectConnectEnabledHostedVifsOutputReference | AwsVpcSiteDirectConnectEnabledHostedVifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_registration_over_internet: {
      value: cdktf.booleanToHclTerraform(struct!.siteRegistrationOverInternet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vifs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vifs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_registration_over_direct_connect: {
      value: awsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectToHclTerraform(struct!.siteRegistrationOverDirectConnect),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectList",
    },
    vif_list: {
      value: cdktf.listMapperHcl(awsVpcSiteDirectConnectEnabledHostedVifsVifListStructToHclTerraform, true)(struct!.vifList),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteDirectConnectEnabledHostedVifsVifListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteDirectConnectEnabledHostedVifsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteDirectConnectEnabledHostedVifs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteRegistrationOverInternet !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteRegistrationOverInternet = this._siteRegistrationOverInternet;
    }
    if (this._vifs !== undefined) {
      hasAnyValues = true;
      internalValueResult.vifs = this._vifs;
    }
    if (this._siteRegistrationOverDirectConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteRegistrationOverDirectConnect = this._siteRegistrationOverDirectConnect?.internalValue;
    }
    if (this._vifList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vifList = this._vifList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteDirectConnectEnabledHostedVifs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteRegistrationOverInternet = undefined;
      this._vifs = undefined;
      this._siteRegistrationOverDirectConnect.internalValue = undefined;
      this._vifList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteRegistrationOverInternet = value.siteRegistrationOverInternet;
      this._vifs = value.vifs;
      this._siteRegistrationOverDirectConnect.internalValue = value.siteRegistrationOverDirectConnect;
      this._vifList.internalValue = value.vifList;
    }
  }

  // site_registration_over_internet - computed: false, optional: true, required: false
  private _siteRegistrationOverInternet?: boolean | cdktf.IResolvable; 
  public get siteRegistrationOverInternet() {
    return this.getBooleanAttribute('site_registration_over_internet');
  }
  public set siteRegistrationOverInternet(value: boolean | cdktf.IResolvable) {
    this._siteRegistrationOverInternet = value;
  }
  public resetSiteRegistrationOverInternet() {
    this._siteRegistrationOverInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteRegistrationOverInternetInput() {
    return this._siteRegistrationOverInternet;
  }

  // vifs - computed: false, optional: true, required: false
  private _vifs?: string[]; 
  public get vifs() {
    return this.getListAttribute('vifs');
  }
  public set vifs(value: string[]) {
    this._vifs = value;
  }
  public resetVifs() {
    this._vifs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vifsInput() {
    return this._vifs;
  }

  // site_registration_over_direct_connect - computed: false, optional: true, required: false
  private _siteRegistrationOverDirectConnect = new AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectOutputReference(this, "site_registration_over_direct_connect");
  public get siteRegistrationOverDirectConnect() {
    return this._siteRegistrationOverDirectConnect;
  }
  public putSiteRegistrationOverDirectConnect(value: AwsVpcSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect) {
    this._siteRegistrationOverDirectConnect.internalValue = value;
  }
  public resetSiteRegistrationOverDirectConnect() {
    this._siteRegistrationOverDirectConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteRegistrationOverDirectConnectInput() {
    return this._siteRegistrationOverDirectConnect.internalValue;
  }

  // vif_list - computed: false, optional: true, required: false
  private _vifList = new AwsVpcSiteDirectConnectEnabledHostedVifsVifListStructList(this, "vif_list", false);
  public get vifList() {
    return this._vifList;
  }
  public putVifList(value: AwsVpcSiteDirectConnectEnabledHostedVifsVifListStruct[] | cdktf.IResolvable) {
    this._vifList.internalValue = value;
  }
  public resetVifList() {
    this._vifList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vifListInput() {
    return this._vifList.internalValue;
  }
}
export interface AwsVpcSiteDirectConnectEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#auto_asn AwsVpcSite#auto_asn}
  */
  readonly autoAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#cloud_aggregated_prefix AwsVpcSite#cloud_aggregated_prefix}
  */
  readonly cloudAggregatedPrefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_asn AwsVpcSite#custom_asn}
  */
  readonly customAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#dc_connect_aggregated_prefix AwsVpcSite#dc_connect_aggregated_prefix}
  */
  readonly dcConnectAggregatedPrefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#manual_gw AwsVpcSite#manual_gw}
  */
  readonly manualGw?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#standard_vifs AwsVpcSite#standard_vifs}
  */
  readonly standardVifs?: boolean | cdktf.IResolvable;
  /**
  * hosted_vifs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#hosted_vifs AwsVpcSite#hosted_vifs}
  */
  readonly hostedVifs?: AwsVpcSiteDirectConnectEnabledHostedVifs;
}

export function awsVpcSiteDirectConnectEnabledToTerraform(struct?: AwsVpcSiteDirectConnectEnabledOutputReference | AwsVpcSiteDirectConnectEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_asn: cdktf.booleanToTerraform(struct!.autoAsn),
    cloud_aggregated_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudAggregatedPrefix),
    custom_asn: cdktf.numberToTerraform(struct!.customAsn),
    dc_connect_aggregated_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dcConnectAggregatedPrefix),
    manual_gw: cdktf.booleanToTerraform(struct!.manualGw),
    standard_vifs: cdktf.booleanToTerraform(struct!.standardVifs),
    hosted_vifs: awsVpcSiteDirectConnectEnabledHostedVifsToTerraform(struct!.hostedVifs),
  }
}


export function awsVpcSiteDirectConnectEnabledToHclTerraform(struct?: AwsVpcSiteDirectConnectEnabledOutputReference | AwsVpcSiteDirectConnectEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_asn: {
      value: cdktf.booleanToHclTerraform(struct!.autoAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_aggregated_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudAggregatedPrefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_asn: {
      value: cdktf.numberToHclTerraform(struct!.customAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dc_connect_aggregated_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dcConnectAggregatedPrefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    manual_gw: {
      value: cdktf.booleanToHclTerraform(struct!.manualGw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    standard_vifs: {
      value: cdktf.booleanToHclTerraform(struct!.standardVifs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosted_vifs: {
      value: awsVpcSiteDirectConnectEnabledHostedVifsToHclTerraform(struct!.hostedVifs),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteDirectConnectEnabledHostedVifsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteDirectConnectEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteDirectConnectEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAsn = this._autoAsn;
    }
    if (this._cloudAggregatedPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAggregatedPrefix = this._cloudAggregatedPrefix;
    }
    if (this._customAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAsn = this._customAsn;
    }
    if (this._dcConnectAggregatedPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcConnectAggregatedPrefix = this._dcConnectAggregatedPrefix;
    }
    if (this._manualGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualGw = this._manualGw;
    }
    if (this._standardVifs !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardVifs = this._standardVifs;
    }
    if (this._hostedVifs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedVifs = this._hostedVifs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteDirectConnectEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoAsn = undefined;
      this._cloudAggregatedPrefix = undefined;
      this._customAsn = undefined;
      this._dcConnectAggregatedPrefix = undefined;
      this._manualGw = undefined;
      this._standardVifs = undefined;
      this._hostedVifs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoAsn = value.autoAsn;
      this._cloudAggregatedPrefix = value.cloudAggregatedPrefix;
      this._customAsn = value.customAsn;
      this._dcConnectAggregatedPrefix = value.dcConnectAggregatedPrefix;
      this._manualGw = value.manualGw;
      this._standardVifs = value.standardVifs;
      this._hostedVifs.internalValue = value.hostedVifs;
    }
  }

  // auto_asn - computed: false, optional: true, required: false
  private _autoAsn?: boolean | cdktf.IResolvable; 
  public get autoAsn() {
    return this.getBooleanAttribute('auto_asn');
  }
  public set autoAsn(value: boolean | cdktf.IResolvable) {
    this._autoAsn = value;
  }
  public resetAutoAsn() {
    this._autoAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAsnInput() {
    return this._autoAsn;
  }

  // cloud_aggregated_prefix - computed: false, optional: true, required: false
  private _cloudAggregatedPrefix?: string[]; 
  public get cloudAggregatedPrefix() {
    return this.getListAttribute('cloud_aggregated_prefix');
  }
  public set cloudAggregatedPrefix(value: string[]) {
    this._cloudAggregatedPrefix = value;
  }
  public resetCloudAggregatedPrefix() {
    this._cloudAggregatedPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAggregatedPrefixInput() {
    return this._cloudAggregatedPrefix;
  }

  // custom_asn - computed: false, optional: true, required: false
  private _customAsn?: number; 
  public get customAsn() {
    return this.getNumberAttribute('custom_asn');
  }
  public set customAsn(value: number) {
    this._customAsn = value;
  }
  public resetCustomAsn() {
    this._customAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAsnInput() {
    return this._customAsn;
  }

  // dc_connect_aggregated_prefix - computed: false, optional: true, required: false
  private _dcConnectAggregatedPrefix?: string[]; 
  public get dcConnectAggregatedPrefix() {
    return this.getListAttribute('dc_connect_aggregated_prefix');
  }
  public set dcConnectAggregatedPrefix(value: string[]) {
    this._dcConnectAggregatedPrefix = value;
  }
  public resetDcConnectAggregatedPrefix() {
    this._dcConnectAggregatedPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcConnectAggregatedPrefixInput() {
    return this._dcConnectAggregatedPrefix;
  }

  // manual_gw - computed: false, optional: true, required: false
  private _manualGw?: boolean | cdktf.IResolvable; 
  public get manualGw() {
    return this.getBooleanAttribute('manual_gw');
  }
  public set manualGw(value: boolean | cdktf.IResolvable) {
    this._manualGw = value;
  }
  public resetManualGw() {
    this._manualGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualGwInput() {
    return this._manualGw;
  }

  // standard_vifs - computed: false, optional: true, required: false
  private _standardVifs?: boolean | cdktf.IResolvable; 
  public get standardVifs() {
    return this.getBooleanAttribute('standard_vifs');
  }
  public set standardVifs(value: boolean | cdktf.IResolvable) {
    this._standardVifs = value;
  }
  public resetStandardVifs() {
    this._standardVifs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardVifsInput() {
    return this._standardVifs;
  }

  // hosted_vifs - computed: false, optional: true, required: false
  private _hostedVifs = new AwsVpcSiteDirectConnectEnabledHostedVifsOutputReference(this, "hosted_vifs");
  public get hostedVifs() {
    return this._hostedVifs;
  }
  public putHostedVifs(value: AwsVpcSiteDirectConnectEnabledHostedVifs) {
    this._hostedVifs.internalValue = value;
  }
  public resetHostedVifs() {
    this._hostedVifs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedVifsInput() {
    return this._hostedVifs.internalValue;
  }
}
export interface AwsVpcSiteEgressNatGw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#nat_gw_id AwsVpcSite#nat_gw_id}
  */
  readonly natGwId?: string;
}

export function awsVpcSiteEgressNatGwToTerraform(struct?: AwsVpcSiteEgressNatGwOutputReference | AwsVpcSiteEgressNatGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_gw_id: cdktf.stringToTerraform(struct!.natGwId),
  }
}


export function awsVpcSiteEgressNatGwToHclTerraform(struct?: AwsVpcSiteEgressNatGwOutputReference | AwsVpcSiteEgressNatGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_gw_id: {
      value: cdktf.stringToHclTerraform(struct!.natGwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteEgressNatGwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteEgressNatGw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natGwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.natGwId = this._natGwId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteEgressNatGw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._natGwId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._natGwId = value.natGwId;
    }
  }

  // nat_gw_id - computed: false, optional: true, required: false
  private _natGwId?: string; 
  public get natGwId() {
    return this.getStringAttribute('nat_gw_id');
  }
  public set natGwId(value: string) {
    this._natGwId = value;
  }
  public resetNatGwId() {
    this._natGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGwIdInput() {
    return this._natGwId;
  }
}
export interface AwsVpcSiteEgressVirtualPrivateGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#vgw_id AwsVpcSite#vgw_id}
  */
  readonly vgwId?: string;
}

export function awsVpcSiteEgressVirtualPrivateGatewayToTerraform(struct?: AwsVpcSiteEgressVirtualPrivateGatewayOutputReference | AwsVpcSiteEgressVirtualPrivateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vgw_id: cdktf.stringToTerraform(struct!.vgwId),
  }
}


export function awsVpcSiteEgressVirtualPrivateGatewayToHclTerraform(struct?: AwsVpcSiteEgressVirtualPrivateGatewayOutputReference | AwsVpcSiteEgressVirtualPrivateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vgw_id: {
      value: cdktf.stringToHclTerraform(struct!.vgwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteEgressVirtualPrivateGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteEgressVirtualPrivateGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vgwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vgwId = this._vgwId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteEgressVirtualPrivateGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vgwId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vgwId = value.vgwId;
    }
  }

  // vgw_id - computed: false, optional: true, required: false
  private _vgwId?: string; 
  public get vgwId() {
    return this.getStringAttribute('vgw_id');
  }
  public set vgwId(value: string) {
    this._vgwId = value;
  }
  public resetVgwId() {
    this._vgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgwIdInput() {
    return this._vgwId;
  }
}
export interface AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#enhanced_firewall_policies AwsVpcSite#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function awsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesToTerraform(struct?: AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesOutputReference | AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(awsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function awsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesToHclTerraform(struct?: AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesOutputReference | AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enhancedFirewallPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enhancedFirewallPolicies.internalValue = value.enhancedFirewallPolicies;
    }
  }

  // enhanced_firewall_policies - computed: false, optional: false, required: true
  private _enhancedFirewallPolicies = new AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#forward_proxy_policies AwsVpcSite#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function awsVpcSiteIngressEgressGwActiveForwardProxyPoliciesToTerraform(struct?: AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesOutputReference | AwsVpcSiteIngressEgressGwActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(awsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function awsVpcSiteIngressEgressGwActiveForwardProxyPoliciesToHclTerraform(struct?: AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesOutputReference | AwsVpcSiteIngressEgressGwActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwActiveForwardProxyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardProxyPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardProxyPolicies.internalValue = value.forwardProxyPolicies;
    }
  }

  // forward_proxy_policies - computed: false, optional: false, required: true
  private _forwardProxyPolicies = new AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesToTerraform(struct?: AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesToHclTerraform(struct?: AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesOutputReference {
    return new AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwActiveNetworkPolicies {
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#network_policies AwsVpcSite#network_policies}
  */
  readonly networkPolicies: AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable;
}

export function awsVpcSiteIngressEgressGwActiveNetworkPoliciesToTerraform(struct?: AwsVpcSiteIngressEgressGwActiveNetworkPoliciesOutputReference | AwsVpcSiteIngressEgressGwActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policies: cdktf.listMapper(awsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesToTerraform, true)(struct!.networkPolicies),
  }
}


export function awsVpcSiteIngressEgressGwActiveNetworkPoliciesToHclTerraform(struct?: AwsVpcSiteIngressEgressGwActiveNetworkPoliciesOutputReference | AwsVpcSiteIngressEgressGwActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policies: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesToHclTerraform, true)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwActiveNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwActiveNetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwActiveNetworkPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPolicies.internalValue = value.networkPolicies;
    }
  }

  // network_policies - computed: false, optional: false, required: true
  private _networkPolicies = new AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: AwsVpcSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwAllowedVipPortCustomPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#port_ranges AwsVpcSite#port_ranges}
  */
  readonly portRanges: string;
}

export function awsVpcSiteIngressEgressGwAllowedVipPortCustomPortsToTerraform(struct?: AwsVpcSiteIngressEgressGwAllowedVipPortCustomPortsOutputReference | AwsVpcSiteIngressEgressGwAllowedVipPortCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function awsVpcSiteIngressEgressGwAllowedVipPortCustomPortsToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAllowedVipPortCustomPortsOutputReference | AwsVpcSiteIngressEgressGwAllowedVipPortCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAllowedVipPortCustomPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwAllowedVipPortCustomPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAllowedVipPortCustomPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portRanges = value.portRanges;
    }
  }

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }
}
export interface AwsVpcSiteIngressEgressGwAllowedVipPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_allowed_vip_port AwsVpcSite#disable_allowed_vip_port}
  */
  readonly disableAllowedVipPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_http_https_port AwsVpcSite#use_http_https_port}
  */
  readonly useHttpHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_http_port AwsVpcSite#use_http_port}
  */
  readonly useHttpPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_https_port AwsVpcSite#use_https_port}
  */
  readonly useHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * custom_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_ports AwsVpcSite#custom_ports}
  */
  readonly customPorts?: AwsVpcSiteIngressEgressGwAllowedVipPortCustomPorts;
}

export function awsVpcSiteIngressEgressGwAllowedVipPortToTerraform(struct?: AwsVpcSiteIngressEgressGwAllowedVipPortOutputReference | AwsVpcSiteIngressEgressGwAllowedVipPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_allowed_vip_port: cdktf.booleanToTerraform(struct!.disableAllowedVipPort),
    use_http_https_port: cdktf.booleanToTerraform(struct!.useHttpHttpsPort),
    use_http_port: cdktf.booleanToTerraform(struct!.useHttpPort),
    use_https_port: cdktf.booleanToTerraform(struct!.useHttpsPort),
    custom_ports: awsVpcSiteIngressEgressGwAllowedVipPortCustomPortsToTerraform(struct!.customPorts),
  }
}


export function awsVpcSiteIngressEgressGwAllowedVipPortToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAllowedVipPortOutputReference | AwsVpcSiteIngressEgressGwAllowedVipPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_allowed_vip_port: {
      value: cdktf.booleanToHclTerraform(struct!.disableAllowedVipPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_ports: {
      value: awsVpcSiteIngressEgressGwAllowedVipPortCustomPortsToHclTerraform(struct!.customPorts),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAllowedVipPortCustomPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAllowedVipPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwAllowedVipPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAllowedVipPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAllowedVipPort = this._disableAllowedVipPort;
    }
    if (this._useHttpHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpHttpsPort = this._useHttpHttpsPort;
    }
    if (this._useHttpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpPort = this._useHttpPort;
    }
    if (this._useHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpsPort = this._useHttpsPort;
    }
    if (this._customPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPorts = this._customPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAllowedVipPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAllowedVipPort = undefined;
      this._useHttpHttpsPort = undefined;
      this._useHttpPort = undefined;
      this._useHttpsPort = undefined;
      this._customPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAllowedVipPort = value.disableAllowedVipPort;
      this._useHttpHttpsPort = value.useHttpHttpsPort;
      this._useHttpPort = value.useHttpPort;
      this._useHttpsPort = value.useHttpsPort;
      this._customPorts.internalValue = value.customPorts;
    }
  }

  // disable_allowed_vip_port - computed: false, optional: true, required: false
  private _disableAllowedVipPort?: boolean | cdktf.IResolvable; 
  public get disableAllowedVipPort() {
    return this.getBooleanAttribute('disable_allowed_vip_port');
  }
  public set disableAllowedVipPort(value: boolean | cdktf.IResolvable) {
    this._disableAllowedVipPort = value;
  }
  public resetDisableAllowedVipPort() {
    this._disableAllowedVipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllowedVipPortInput() {
    return this._disableAllowedVipPort;
  }

  // use_http_https_port - computed: false, optional: true, required: false
  private _useHttpHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpHttpsPort() {
    return this.getBooleanAttribute('use_http_https_port');
  }
  public set useHttpHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpHttpsPort = value;
  }
  public resetUseHttpHttpsPort() {
    this._useHttpHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpHttpsPortInput() {
    return this._useHttpHttpsPort;
  }

  // use_http_port - computed: false, optional: true, required: false
  private _useHttpPort?: boolean | cdktf.IResolvable; 
  public get useHttpPort() {
    return this.getBooleanAttribute('use_http_port');
  }
  public set useHttpPort(value: boolean | cdktf.IResolvable) {
    this._useHttpPort = value;
  }
  public resetUseHttpPort() {
    this._useHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpPortInput() {
    return this._useHttpPort;
  }

  // use_https_port - computed: false, optional: true, required: false
  private _useHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpsPort() {
    return this.getBooleanAttribute('use_https_port');
  }
  public set useHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpsPort = value;
  }
  public resetUseHttpsPort() {
    this._useHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpsPortInput() {
    return this._useHttpsPort;
  }

  // custom_ports - computed: false, optional: true, required: false
  private _customPorts = new AwsVpcSiteIngressEgressGwAllowedVipPortCustomPortsOutputReference(this, "custom_ports");
  public get customPorts() {
    return this._customPorts;
  }
  public putCustomPorts(value: AwsVpcSiteIngressEgressGwAllowedVipPortCustomPorts) {
    this._customPorts.internalValue = value;
  }
  public resetCustomPorts() {
    this._customPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortsInput() {
    return this._customPorts.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#port_ranges AwsVpcSite#port_ranges}
  */
  readonly portRanges: string;
}

export function awsVpcSiteIngressEgressGwAllowedVipPortSliCustomPortsToTerraform(struct?: AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPortsOutputReference | AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function awsVpcSiteIngressEgressGwAllowedVipPortSliCustomPortsToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPortsOutputReference | AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portRanges = value.portRanges;
    }
  }

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }
}
export interface AwsVpcSiteIngressEgressGwAllowedVipPortSli {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_allowed_vip_port AwsVpcSite#disable_allowed_vip_port}
  */
  readonly disableAllowedVipPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_http_https_port AwsVpcSite#use_http_https_port}
  */
  readonly useHttpHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_http_port AwsVpcSite#use_http_port}
  */
  readonly useHttpPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_https_port AwsVpcSite#use_https_port}
  */
  readonly useHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * custom_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_ports AwsVpcSite#custom_ports}
  */
  readonly customPorts?: AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPorts;
}

export function awsVpcSiteIngressEgressGwAllowedVipPortSliToTerraform(struct?: AwsVpcSiteIngressEgressGwAllowedVipPortSliOutputReference | AwsVpcSiteIngressEgressGwAllowedVipPortSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_allowed_vip_port: cdktf.booleanToTerraform(struct!.disableAllowedVipPort),
    use_http_https_port: cdktf.booleanToTerraform(struct!.useHttpHttpsPort),
    use_http_port: cdktf.booleanToTerraform(struct!.useHttpPort),
    use_https_port: cdktf.booleanToTerraform(struct!.useHttpsPort),
    custom_ports: awsVpcSiteIngressEgressGwAllowedVipPortSliCustomPortsToTerraform(struct!.customPorts),
  }
}


export function awsVpcSiteIngressEgressGwAllowedVipPortSliToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAllowedVipPortSliOutputReference | AwsVpcSiteIngressEgressGwAllowedVipPortSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_allowed_vip_port: {
      value: cdktf.booleanToHclTerraform(struct!.disableAllowedVipPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_ports: {
      value: awsVpcSiteIngressEgressGwAllowedVipPortSliCustomPortsToHclTerraform(struct!.customPorts),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAllowedVipPortSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwAllowedVipPortSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAllowedVipPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAllowedVipPort = this._disableAllowedVipPort;
    }
    if (this._useHttpHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpHttpsPort = this._useHttpHttpsPort;
    }
    if (this._useHttpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpPort = this._useHttpPort;
    }
    if (this._useHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpsPort = this._useHttpsPort;
    }
    if (this._customPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPorts = this._customPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAllowedVipPortSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAllowedVipPort = undefined;
      this._useHttpHttpsPort = undefined;
      this._useHttpPort = undefined;
      this._useHttpsPort = undefined;
      this._customPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAllowedVipPort = value.disableAllowedVipPort;
      this._useHttpHttpsPort = value.useHttpHttpsPort;
      this._useHttpPort = value.useHttpPort;
      this._useHttpsPort = value.useHttpsPort;
      this._customPorts.internalValue = value.customPorts;
    }
  }

  // disable_allowed_vip_port - computed: false, optional: true, required: false
  private _disableAllowedVipPort?: boolean | cdktf.IResolvable; 
  public get disableAllowedVipPort() {
    return this.getBooleanAttribute('disable_allowed_vip_port');
  }
  public set disableAllowedVipPort(value: boolean | cdktf.IResolvable) {
    this._disableAllowedVipPort = value;
  }
  public resetDisableAllowedVipPort() {
    this._disableAllowedVipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllowedVipPortInput() {
    return this._disableAllowedVipPort;
  }

  // use_http_https_port - computed: false, optional: true, required: false
  private _useHttpHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpHttpsPort() {
    return this.getBooleanAttribute('use_http_https_port');
  }
  public set useHttpHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpHttpsPort = value;
  }
  public resetUseHttpHttpsPort() {
    this._useHttpHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpHttpsPortInput() {
    return this._useHttpHttpsPort;
  }

  // use_http_port - computed: false, optional: true, required: false
  private _useHttpPort?: boolean | cdktf.IResolvable; 
  public get useHttpPort() {
    return this.getBooleanAttribute('use_http_port');
  }
  public set useHttpPort(value: boolean | cdktf.IResolvable) {
    this._useHttpPort = value;
  }
  public resetUseHttpPort() {
    this._useHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpPortInput() {
    return this._useHttpPort;
  }

  // use_https_port - computed: false, optional: true, required: false
  private _useHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpsPort() {
    return this.getBooleanAttribute('use_https_port');
  }
  public set useHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpsPort = value;
  }
  public resetUseHttpsPort() {
    this._useHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpsPortInput() {
    return this._useHttpsPort;
  }

  // custom_ports - computed: false, optional: true, required: false
  private _customPorts = new AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPortsOutputReference(this, "custom_ports");
  public get customPorts() {
    return this._customPorts;
  }
  public putCustomPorts(value: AwsVpcSiteIngressEgressGwAllowedVipPortSliCustomPorts) {
    this._customPorts.internalValue = value;
  }
  public resetCustomPorts() {
    this._customPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortsInput() {
    return this._customPorts.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv4 AwsVpcSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv6 AwsVpcSite#ipv6}
  */
  readonly ipv6?: string;
}

export function awsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParamToTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParamOutputReference | AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function awsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParamToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParamOutputReference | AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AwsVpcSiteIngressEgressGwAzNodesInsideSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#existing_subnet_id AwsVpcSite#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#subnet_param AwsVpcSite#subnet_param}
  */
  readonly subnetParam?: AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParam;
}

export function awsVpcSiteIngressEgressGwAzNodesInsideSubnetToTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesInsideSubnetOutputReference | AwsVpcSiteIngressEgressGwAzNodesInsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: awsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function awsVpcSiteIngressEgressGwAzNodesInsideSubnetToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesInsideSubnetOutputReference | AwsVpcSiteIngressEgressGwAzNodesInsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: awsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAzNodesInsideSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwAzNodesInsideSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAzNodesInsideSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AwsVpcSiteIngressEgressGwAzNodesInsideSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv4 AwsVpcSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv6 AwsVpcSite#ipv6}
  */
  readonly ipv6?: string;
}

export function awsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamToTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamOutputReference | AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function awsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamOutputReference | AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AwsVpcSiteIngressEgressGwAzNodesOutsideSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#existing_subnet_id AwsVpcSite#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#subnet_param AwsVpcSite#subnet_param}
  */
  readonly subnetParam?: AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam;
}

export function awsVpcSiteIngressEgressGwAzNodesOutsideSubnetToTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetOutputReference | AwsVpcSiteIngressEgressGwAzNodesOutsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: awsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function awsVpcSiteIngressEgressGwAzNodesOutsideSubnetToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetOutputReference | AwsVpcSiteIngressEgressGwAzNodesOutsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: awsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwAzNodesOutsideSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAzNodesOutsideSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv4 AwsVpcSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv6 AwsVpcSite#ipv6}
  */
  readonly ipv6?: string;
}

export function awsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParamToTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParamOutputReference | AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function awsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParamToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParamOutputReference | AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#existing_subnet_id AwsVpcSite#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#subnet_param AwsVpcSite#subnet_param}
  */
  readonly subnetParam?: AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParam;
}

export function awsVpcSiteIngressEgressGwAzNodesWorkloadSubnetToTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetOutputReference | AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: awsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function awsVpcSiteIngressEgressGwAzNodesWorkloadSubnetToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetOutputReference | AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: awsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwAzNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#aws_az_name AwsVpcSite#aws_az_name}
  */
  readonly awsAzName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disk_size AwsVpcSite#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#reserved_inside_subnet AwsVpcSite#reserved_inside_subnet}
  */
  readonly reservedInsideSubnet?: boolean | cdktf.IResolvable;
  /**
  * inside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#inside_subnet AwsVpcSite#inside_subnet}
  */
  readonly insideSubnet?: AwsVpcSiteIngressEgressGwAzNodesInsideSubnet;
  /**
  * outside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#outside_subnet AwsVpcSite#outside_subnet}
  */
  readonly outsideSubnet: AwsVpcSiteIngressEgressGwAzNodesOutsideSubnet;
  /**
  * workload_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#workload_subnet AwsVpcSite#workload_subnet}
  */
  readonly workloadSubnet?: AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnet;
}

export function awsVpcSiteIngressEgressGwAzNodesToTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_az_name: cdktf.stringToTerraform(struct!.awsAzName),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    reserved_inside_subnet: cdktf.booleanToTerraform(struct!.reservedInsideSubnet),
    inside_subnet: awsVpcSiteIngressEgressGwAzNodesInsideSubnetToTerraform(struct!.insideSubnet),
    outside_subnet: awsVpcSiteIngressEgressGwAzNodesOutsideSubnetToTerraform(struct!.outsideSubnet),
    workload_subnet: awsVpcSiteIngressEgressGwAzNodesWorkloadSubnetToTerraform(struct!.workloadSubnet),
  }
}


export function awsVpcSiteIngressEgressGwAzNodesToHclTerraform(struct?: AwsVpcSiteIngressEgressGwAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_az_name: {
      value: cdktf.stringToHclTerraform(struct!.awsAzName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reserved_inside_subnet: {
      value: cdktf.booleanToHclTerraform(struct!.reservedInsideSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_subnet: {
      value: awsVpcSiteIngressEgressGwAzNodesInsideSubnetToHclTerraform(struct!.insideSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAzNodesInsideSubnetList",
    },
    outside_subnet: {
      value: awsVpcSiteIngressEgressGwAzNodesOutsideSubnetToHclTerraform(struct!.outsideSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetList",
    },
    workload_subnet: {
      value: awsVpcSiteIngressEgressGwAzNodesWorkloadSubnetToHclTerraform(struct!.workloadSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwAzNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwAzNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAzName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAzName = this._awsAzName;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._reservedInsideSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedInsideSubnet = this._reservedInsideSubnet;
    }
    if (this._insideSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSubnet = this._insideSubnet?.internalValue;
    }
    if (this._outsideSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSubnet = this._outsideSubnet?.internalValue;
    }
    if (this._workloadSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSubnet = this._workloadSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwAzNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAzName = undefined;
      this._diskSize = undefined;
      this._reservedInsideSubnet = undefined;
      this._insideSubnet.internalValue = undefined;
      this._outsideSubnet.internalValue = undefined;
      this._workloadSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAzName = value.awsAzName;
      this._diskSize = value.diskSize;
      this._reservedInsideSubnet = value.reservedInsideSubnet;
      this._insideSubnet.internalValue = value.insideSubnet;
      this._outsideSubnet.internalValue = value.outsideSubnet;
      this._workloadSubnet.internalValue = value.workloadSubnet;
    }
  }

  // aws_az_name - computed: false, optional: false, required: true
  private _awsAzName?: string; 
  public get awsAzName() {
    return this.getStringAttribute('aws_az_name');
  }
  public set awsAzName(value: string) {
    this._awsAzName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAzNameInput() {
    return this._awsAzName;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // reserved_inside_subnet - computed: false, optional: true, required: false
  private _reservedInsideSubnet?: boolean | cdktf.IResolvable; 
  public get reservedInsideSubnet() {
    return this.getBooleanAttribute('reserved_inside_subnet');
  }
  public set reservedInsideSubnet(value: boolean | cdktf.IResolvable) {
    this._reservedInsideSubnet = value;
  }
  public resetReservedInsideSubnet() {
    this._reservedInsideSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInsideSubnetInput() {
    return this._reservedInsideSubnet;
  }

  // inside_subnet - computed: false, optional: true, required: false
  private _insideSubnet = new AwsVpcSiteIngressEgressGwAzNodesInsideSubnetOutputReference(this, "inside_subnet");
  public get insideSubnet() {
    return this._insideSubnet;
  }
  public putInsideSubnet(value: AwsVpcSiteIngressEgressGwAzNodesInsideSubnet) {
    this._insideSubnet.internalValue = value;
  }
  public resetInsideSubnet() {
    this._insideSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSubnetInput() {
    return this._insideSubnet.internalValue;
  }

  // outside_subnet - computed: false, optional: false, required: true
  private _outsideSubnet = new AwsVpcSiteIngressEgressGwAzNodesOutsideSubnetOutputReference(this, "outside_subnet");
  public get outsideSubnet() {
    return this._outsideSubnet;
  }
  public putOutsideSubnet(value: AwsVpcSiteIngressEgressGwAzNodesOutsideSubnet) {
    this._outsideSubnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSubnetInput() {
    return this._outsideSubnet.internalValue;
  }

  // workload_subnet - computed: false, optional: true, required: false
  private _workloadSubnet = new AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnetOutputReference(this, "workload_subnet");
  public get workloadSubnet() {
    return this._workloadSubnet;
  }
  public putWorkloadSubnet(value: AwsVpcSiteIngressEgressGwAzNodesWorkloadSubnet) {
    this._workloadSubnet.internalValue = value;
  }
  public resetWorkloadSubnet() {
    this._workloadSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSubnetInput() {
    return this._workloadSubnet.internalValue;
  }
}

export class AwsVpcSiteIngressEgressGwAzNodesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwAzNodes[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwAzNodesOutputReference {
    return new AwsVpcSiteIngressEgressGwAzNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwDcClusterGroupInsideVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteIngressEgressGwDcClusterGroupInsideVnToTerraform(struct?: AwsVpcSiteIngressEgressGwDcClusterGroupInsideVnOutputReference | AwsVpcSiteIngressEgressGwDcClusterGroupInsideVn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteIngressEgressGwDcClusterGroupInsideVnToHclTerraform(struct?: AwsVpcSiteIngressEgressGwDcClusterGroupInsideVnOutputReference | AwsVpcSiteIngressEgressGwDcClusterGroupInsideVn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwDcClusterGroupInsideVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwDcClusterGroupInsideVn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwDcClusterGroupInsideVn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteIngressEgressGwDcClusterGroupOutsideVnToTerraform(struct?: AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVnOutputReference | AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteIngressEgressGwDcClusterGroupOutsideVnToHclTerraform(struct?: AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVnOutputReference | AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#hash_algorithms AwsVpcSite#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling {
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#decryption_provider AwsVpcSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#location AwsVpcSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#store_provider AwsVpcSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#decryption_provider AwsVpcSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#location AwsVpcSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#store_provider AwsVpcSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#provider AwsVpcSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#url AwsVpcSite#url}
  */
  readonly url: string;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
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

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined) {
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
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#key AwsVpcSite#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#location AwsVpcSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#provider AwsVpcSite#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#secret_encoding AwsVpcSite#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#version AwsVpcSite#version}
  */
  readonly version?: number;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name: string;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#secret_encoding_type AwsVpcSite#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#blindfold_secret_info AwsVpcSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#blindfold_secret_info_internal AwsVpcSite#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#clear_secret_info AwsVpcSite#clear_secret_info}
  */
  readonly clearSecretInfo?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#vault_secret_info AwsVpcSite#vault_secret_info}
  */
  readonly vaultSecretInfo?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#wingman_secret_info AwsVpcSite#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults {
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#certificate_url AwsVpcSite#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#description AwsVpcSite#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_hash_algorithms AwsVpcSite#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_ocsp_stapling AwsVpcSite#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#private_key AwsVpcSite#private_key}
  */
  readonly privateKey: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_system_defaults AwsVpcSite#use_system_defaults}
  */
  readonly useSystemDefaults?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingList",
    },
    private_key: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyList",
    },
    use_system_defaults: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#exact_value AwsVpcSite#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#regex_value AwsVpcSite#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#suffix_value AwsVpcSite#suffix_value}
  */
  readonly suffixValue?: string;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_interception AwsVpcSite#disable_interception}
  */
  readonly disableInterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#enable_interception AwsVpcSite#enable_interception}
  */
  readonly enableInterception?: boolean | cdktf.IResolvable;
  /**
  * domain_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#domain_match AwsVpcSite#domain_match}
  */
  readonly domainMatch: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_interception: cdktf.booleanToTerraform(struct!.disableInterception),
    enable_interception: cdktf.booleanToTerraform(struct!.enableInterception),
    domain_match: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct!.domainMatch),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_interception: {
      value: cdktf.booleanToHclTerraform(struct!.disableInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_interception: {
      value: cdktf.booleanToHclTerraform(struct!.enableInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_match: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct!.domainMatch),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInterception = this._disableInterception;
    }
    if (this._enableInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterception = this._enableInterception;
    }
    if (this._domainMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatch = this._domainMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableInterception = undefined;
      this._enableInterception = undefined;
      this._domainMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableInterception = value.disableInterception;
      this._enableInterception = value.enableInterception;
      this._domainMatch.internalValue = value.domainMatch;
    }
  }

  // disable_interception - computed: false, optional: true, required: false
  private _disableInterception?: boolean | cdktf.IResolvable; 
  public get disableInterception() {
    return this.getBooleanAttribute('disable_interception');
  }
  public set disableInterception(value: boolean | cdktf.IResolvable) {
    this._disableInterception = value;
  }
  public resetDisableInterception() {
    this._disableInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInterceptionInput() {
    return this._disableInterception;
  }

  // enable_interception - computed: false, optional: true, required: false
  private _enableInterception?: boolean | cdktf.IResolvable; 
  public get enableInterception() {
    return this.getBooleanAttribute('enable_interception');
  }
  public set enableInterception(value: boolean | cdktf.IResolvable) {
    this._enableInterception = value;
  }
  public resetEnableInterception() {
    this._enableInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterceptionInput() {
    return this._enableInterception;
  }

  // domain_match - computed: false, optional: false, required: true
  private _domainMatch = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference(this, "domain_match");
  public get domainMatch() {
    return this._domainMatch;
  }
  public putDomainMatch(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch) {
    this._domainMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatchInput() {
    return this._domainMatch.internalValue;
  }
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference {
    return new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy {
  /**
  * interception_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#interception_rules AwsVpcSite#interception_rules}
  */
  readonly interceptionRules: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interception_rules: cdktf.listMapper(awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform, true)(struct!.interceptionRules),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interception_rules: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform, true)(struct!.interceptionRules),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interceptionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptionRules = this._interceptionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interceptionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interceptionRules.internalValue = value.interceptionRules;
    }
  }

  // interception_rules - computed: false, optional: false, required: true
  private _interceptionRules = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList(this, "interception_rules", false);
  public get interceptionRules() {
    return this._interceptionRules;
  }
  public putInterceptionRules(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable) {
    this._interceptionRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptionRulesInput() {
    return this._interceptionRules.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#enable_for_all_domains AwsVpcSite#enable_for_all_domains}
  */
  readonly enableForAllDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#trusted_ca_url AwsVpcSite#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#volterra_certificate AwsVpcSite#volterra_certificate}
  */
  readonly volterraCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#volterra_trusted_ca AwsVpcSite#volterra_trusted_ca}
  */
  readonly volterraTrustedCa?: boolean | cdktf.IResolvable;
  /**
  * custom_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_certificate AwsVpcSite#custom_certificate}
  */
  readonly customCertificate?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#policy AwsVpcSite#policy}
  */
  readonly policy?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_for_all_domains: cdktf.booleanToTerraform(struct!.enableForAllDomains),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    volterra_certificate: cdktf.booleanToTerraform(struct!.volterraCertificate),
    volterra_trusted_ca: cdktf.booleanToTerraform(struct!.volterraTrustedCa),
    custom_certificate: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct!.customCertificate),
    policy: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct!.policy),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_for_all_domains: {
      value: cdktf.booleanToHclTerraform(struct!.enableForAllDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volterra_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.volterraCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_trusted_ca: {
      value: cdktf.booleanToHclTerraform(struct!.volterraTrustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_certificate: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct!.customCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateList",
    },
    policy: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableForAllDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableForAllDomains = this._enableForAllDomains;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._volterraCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraCertificate = this._volterraCertificate;
    }
    if (this._volterraTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraTrustedCa = this._volterraTrustedCa;
    }
    if (this._customCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertificate = this._customCertificate?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableForAllDomains = undefined;
      this._trustedCaUrl = undefined;
      this._volterraCertificate = undefined;
      this._volterraTrustedCa = undefined;
      this._customCertificate.internalValue = undefined;
      this._policy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableForAllDomains = value.enableForAllDomains;
      this._trustedCaUrl = value.trustedCaUrl;
      this._volterraCertificate = value.volterraCertificate;
      this._volterraTrustedCa = value.volterraTrustedCa;
      this._customCertificate.internalValue = value.customCertificate;
      this._policy.internalValue = value.policy;
    }
  }

  // enable_for_all_domains - computed: false, optional: true, required: false
  private _enableForAllDomains?: boolean | cdktf.IResolvable; 
  public get enableForAllDomains() {
    return this.getBooleanAttribute('enable_for_all_domains');
  }
  public set enableForAllDomains(value: boolean | cdktf.IResolvable) {
    this._enableForAllDomains = value;
  }
  public resetEnableForAllDomains() {
    this._enableForAllDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForAllDomainsInput() {
    return this._enableForAllDomains;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // volterra_certificate - computed: false, optional: true, required: false
  private _volterraCertificate?: boolean | cdktf.IResolvable; 
  public get volterraCertificate() {
    return this.getBooleanAttribute('volterra_certificate');
  }
  public set volterraCertificate(value: boolean | cdktf.IResolvable) {
    this._volterraCertificate = value;
  }
  public resetVolterraCertificate() {
    this._volterraCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraCertificateInput() {
    return this._volterraCertificate;
  }

  // volterra_trusted_ca - computed: false, optional: true, required: false
  private _volterraTrustedCa?: boolean | cdktf.IResolvable; 
  public get volterraTrustedCa() {
    return this.getBooleanAttribute('volterra_trusted_ca');
  }
  public set volterraTrustedCa(value: boolean | cdktf.IResolvable) {
    this._volterraTrustedCa = value;
  }
  public resetVolterraTrustedCa() {
    this._volterraTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraTrustedCaInput() {
    return this._volterraTrustedCa;
  }

  // custom_certificate - computed: false, optional: true, required: false
  private _customCertificate = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference(this, "custom_certificate");
  public get customCertificate() {
    return this._customCertificate;
  }
  public putCustomCertificate(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate) {
    this._customCertificate.internalValue = value;
  }
  public resetCustomCertificate() {
    this._customCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateInput() {
    return this._customCertificate.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#connection_timeout AwsVpcSite#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#max_connect_attempts AwsVpcSite#max_connect_attempts}
  */
  readonly maxConnectAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_interception AwsVpcSite#no_interception}
  */
  readonly noInterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#white_listed_ports AwsVpcSite#white_listed_ports}
  */
  readonly whiteListedPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#white_listed_prefixes AwsVpcSite#white_listed_prefixes}
  */
  readonly whiteListedPrefixes?: string[];
  /**
  * tls_intercept block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tls_intercept AwsVpcSite#tls_intercept}
  */
  readonly tlsIntercept?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    max_connect_attempts: cdktf.numberToTerraform(struct!.maxConnectAttempts),
    no_interception: cdktf.booleanToTerraform(struct!.noInterception),
    white_listed_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.whiteListedPorts),
    white_listed_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whiteListedPrefixes),
    tls_intercept: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct!.tlsIntercept),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connect_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_interception: {
      value: cdktf.booleanToHclTerraform(struct!.noInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    white_listed_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.whiteListedPorts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    white_listed_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whiteListedPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_intercept: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct!.tlsIntercept),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._maxConnectAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectAttempts = this._maxConnectAttempts;
    }
    if (this._noInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInterception = this._noInterception;
    }
    if (this._whiteListedPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListedPorts = this._whiteListedPorts;
    }
    if (this._whiteListedPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListedPrefixes = this._whiteListedPrefixes;
    }
    if (this._tlsIntercept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsIntercept = this._tlsIntercept?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionTimeout = undefined;
      this._maxConnectAttempts = undefined;
      this._noInterception = undefined;
      this._whiteListedPorts = undefined;
      this._whiteListedPrefixes = undefined;
      this._tlsIntercept.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionTimeout = value.connectionTimeout;
      this._maxConnectAttempts = value.maxConnectAttempts;
      this._noInterception = value.noInterception;
      this._whiteListedPorts = value.whiteListedPorts;
      this._whiteListedPrefixes = value.whiteListedPrefixes;
      this._tlsIntercept.internalValue = value.tlsIntercept;
    }
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // max_connect_attempts - computed: false, optional: true, required: false
  private _maxConnectAttempts?: number; 
  public get maxConnectAttempts() {
    return this.getNumberAttribute('max_connect_attempts');
  }
  public set maxConnectAttempts(value: number) {
    this._maxConnectAttempts = value;
  }
  public resetMaxConnectAttempts() {
    this._maxConnectAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectAttemptsInput() {
    return this._maxConnectAttempts;
  }

  // no_interception - computed: false, optional: true, required: false
  private _noInterception?: boolean | cdktf.IResolvable; 
  public get noInterception() {
    return this.getBooleanAttribute('no_interception');
  }
  public set noInterception(value: boolean | cdktf.IResolvable) {
    this._noInterception = value;
  }
  public resetNoInterception() {
    this._noInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInterceptionInput() {
    return this._noInterception;
  }

  // white_listed_ports - computed: false, optional: true, required: false
  private _whiteListedPorts?: number[]; 
  public get whiteListedPorts() {
    return this.getNumberListAttribute('white_listed_ports');
  }
  public set whiteListedPorts(value: number[]) {
    this._whiteListedPorts = value;
  }
  public resetWhiteListedPorts() {
    this._whiteListedPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedPortsInput() {
    return this._whiteListedPorts;
  }

  // white_listed_prefixes - computed: false, optional: true, required: false
  private _whiteListedPrefixes?: string[]; 
  public get whiteListedPrefixes() {
    return this.getListAttribute('white_listed_prefixes');
  }
  public set whiteListedPrefixes(value: string[]) {
    this._whiteListedPrefixes = value;
  }
  public resetWhiteListedPrefixes() {
    this._whiteListedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedPrefixesInput() {
    return this._whiteListedPrefixes;
  }

  // tls_intercept - computed: false, optional: true, required: false
  private _tlsIntercept = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference(this, "tls_intercept");
  public get tlsIntercept() {
    return this._tlsIntercept;
  }
  public putTlsIntercept(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept) {
    this._tlsIntercept.internalValue = value;
  }
  public resetTlsIntercept() {
    this._tlsIntercept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInterceptInput() {
    return this._tlsIntercept.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#global_vn AwsVpcSite#global_vn}
  */
  readonly globalVn: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalVn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalVn.internalValue = value.globalVn;
    }
  }

  // global_vn - computed: false, optional: false, required: true
  private _globalVn = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#global_vn AwsVpcSite#global_vn}
  */
  readonly globalVn: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalVn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalVn.internalValue = value.globalVn;
    }
  }

  // global_vn - computed: false, optional: false, required: true
  private _globalVn = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_forward_proxy AwsVpcSite#disable_forward_proxy}
  */
  readonly disableForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * enable_forward_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#enable_forward_proxy AwsVpcSite#enable_forward_proxy}
  */
  readonly enableForwardProxy?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy;
  /**
  * sli_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#sli_to_global_dr AwsVpcSite#sli_to_global_dr}
  */
  readonly sliToGlobalDr?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr;
  /**
  * slo_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#slo_to_global_dr AwsVpcSite#slo_to_global_dr}
  */
  readonly sloToGlobalDr?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_forward_proxy: cdktf.booleanToTerraform(struct!.disableForwardProxy),
    enable_forward_proxy: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct!.enableForwardProxy),
    sli_to_global_dr: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct!.sliToGlobalDr),
    slo_to_global_dr: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct!.sloToGlobalDr),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_forward_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.disableForwardProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_forward_proxy: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct!.enableForwardProxy),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyList",
    },
    sli_to_global_dr: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct!.sliToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrList",
    },
    slo_to_global_dr: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct!.sloToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableForwardProxy = this._disableForwardProxy;
    }
    if (this._enableForwardProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableForwardProxy = this._enableForwardProxy?.internalValue;
    }
    if (this._sliToGlobalDr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliToGlobalDr = this._sliToGlobalDr?.internalValue;
    }
    if (this._sloToGlobalDr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloToGlobalDr = this._sloToGlobalDr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableForwardProxy = undefined;
      this._enableForwardProxy.internalValue = undefined;
      this._sliToGlobalDr.internalValue = undefined;
      this._sloToGlobalDr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableForwardProxy = value.disableForwardProxy;
      this._enableForwardProxy.internalValue = value.enableForwardProxy;
      this._sliToGlobalDr.internalValue = value.sliToGlobalDr;
      this._sloToGlobalDr.internalValue = value.sloToGlobalDr;
    }
  }

  // disable_forward_proxy - computed: false, optional: true, required: false
  private _disableForwardProxy?: boolean | cdktf.IResolvable; 
  public get disableForwardProxy() {
    return this.getBooleanAttribute('disable_forward_proxy');
  }
  public set disableForwardProxy(value: boolean | cdktf.IResolvable) {
    this._disableForwardProxy = value;
  }
  public resetDisableForwardProxy() {
    this._disableForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableForwardProxyInput() {
    return this._disableForwardProxy;
  }

  // enable_forward_proxy - computed: false, optional: true, required: false
  private _enableForwardProxy = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference(this, "enable_forward_proxy");
  public get enableForwardProxy() {
    return this._enableForwardProxy;
  }
  public putEnableForwardProxy(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy) {
    this._enableForwardProxy.internalValue = value;
  }
  public resetEnableForwardProxy() {
    this._enableForwardProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForwardProxyInput() {
    return this._enableForwardProxy.internalValue;
  }

  // sli_to_global_dr - computed: false, optional: true, required: false
  private _sliToGlobalDr = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference(this, "sli_to_global_dr");
  public get sliToGlobalDr() {
    return this._sliToGlobalDr;
  }
  public putSliToGlobalDr(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr) {
    this._sliToGlobalDr.internalValue = value;
  }
  public resetSliToGlobalDr() {
    this._sliToGlobalDr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliToGlobalDrInput() {
    return this._sliToGlobalDr.internalValue;
  }

  // slo_to_global_dr - computed: false, optional: true, required: false
  private _sloToGlobalDr = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference(this, "slo_to_global_dr");
  public get sloToGlobalDr() {
    return this._sloToGlobalDr;
  }
  public putSloToGlobalDr(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr) {
    this._sloToGlobalDr.internalValue = value;
  }
  public resetSloToGlobalDr() {
    this._sloToGlobalDr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloToGlobalDrInput() {
    return this._sloToGlobalDr.internalValue;
  }
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsOutputReference {
    return new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwGlobalNetworkListStruct {
  /**
  * global_network_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#global_network_connections AwsVpcSite#global_network_connections}
  */
  readonly globalNetworkConnections: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable;
}

export function awsVpcSiteIngressEgressGwGlobalNetworkListStructToTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListStructOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_network_connections: cdktf.listMapper(awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsToTerraform, true)(struct!.globalNetworkConnections),
  }
}


export function awsVpcSiteIngressEgressGwGlobalNetworkListStructToHclTerraform(struct?: AwsVpcSiteIngressEgressGwGlobalNetworkListStructOutputReference | AwsVpcSiteIngressEgressGwGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_network_connections: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsToHclTerraform, true)(struct!.globalNetworkConnections),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwGlobalNetworkListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwGlobalNetworkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalNetworkConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkConnections = this._globalNetworkConnections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwGlobalNetworkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalNetworkConnections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalNetworkConnections.internalValue = value.globalNetworkConnections;
    }
  }

  // global_network_connections - computed: false, optional: false, required: true
  private _globalNetworkConnections = new AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsList(this, "global_network_connections", false);
  public get globalNetworkConnections() {
    return this._globalNetworkConnections;
  }
  public putGlobalNetworkConnections(value: AwsVpcSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable) {
    this._globalNetworkConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkConnectionsInput() {
    return this._globalNetworkConnections.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference {
    return new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#addr AwsVpcSite#addr}
  */
  readonly addr?: string;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#addr AwsVpcSite#addr}
  */
  readonly addr?: string;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv4 AwsVpcSite#ipv4}
  */
  readonly ipv4?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv6 AwsVpcSite#ipv6}
  */
  readonly ipv6?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#type AwsVpcSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#interface AwsVpcSite#interface}
  */
  readonly interface?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#nexthop_address AwsVpcSite#nexthop_address}
  */
  readonly nexthopAddress?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nexthopAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddress = this._nexthopAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._nexthopAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._nexthopAddress.internalValue = value.nexthopAddress;
    }
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

  // interface - computed: false, optional: true, required: false
  private _interface = new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_address - computed: false, optional: true, required: false
  private _nexthopAddress = new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
    this._nexthopAddress.internalValue = value;
  }
  public resetNexthopAddress() {
    this._nexthopAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressInput() {
    return this._nexthopAddress.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#plen AwsVpcSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#prefix AwsVpcSite#prefix}
  */
  readonly prefix?: string;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#plen AwsVpcSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#prefix AwsVpcSite#prefix}
  */
  readonly prefix?: string;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv4 AwsVpcSite#ipv4}
  */
  readonly ipv4?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv6 AwsVpcSite#ipv6}
  */
  readonly ipv6?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#attrs AwsVpcSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#labels AwsVpcSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#nexthop AwsVpcSite#nexthop}
  */
  readonly nexthop?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#subnets AwsVpcSite#subnets}
  */
  readonly subnets: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nexthop: {
      value: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attrs = value.attrs;
      this._labels = value.labels;
      this._nexthop.internalValue = value.nexthop;
      this._subnets.internalValue = value.subnets;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#simple_static_route AwsVpcSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_static_route AwsVpcSite#custom_static_route}
  */
  readonly customStaticRoute?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_static_route: {
      value: cdktf.stringToHclTerraform(struct!.simpleStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_static_route: {
      value: awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleStaticRoute = this._simpleStaticRoute;
    }
    if (this._customStaticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStaticRoute = this._customStaticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = undefined;
      this._customStaticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = value.simpleStaticRoute;
      this._customStaticRoute.internalValue = value.customStaticRoute;
    }
  }

  // simple_static_route - computed: false, optional: true, required: false
  private _simpleStaticRoute?: string; 
  public get simpleStaticRoute() {
    return this.getStringAttribute('simple_static_route');
  }
  public set simpleStaticRoute(value: string) {
    this._simpleStaticRoute = value;
  }
  public resetSimpleStaticRoute() {
    this._simpleStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleStaticRouteInput() {
    return this._simpleStaticRoute;
  }

  // custom_static_route - computed: false, optional: true, required: false
  private _customStaticRoute = new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute) {
    this._customStaticRoute.internalValue = value;
  }
  public resetCustomStaticRoute() {
    this._customStaticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStaticRouteInput() {
    return this._customStaticRoute.internalValue;
  }
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructOutputReference {
    return new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwInsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#static_route_list AwsVpcSite#static_route_list}
  */
  readonly staticRouteList: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function awsVpcSiteIngressEgressGwInsideStaticRoutesToTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesOutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function awsVpcSiteIngressEgressGwInsideStaticRoutesToHclTerraform(struct?: AwsVpcSiteIngressEgressGwInsideStaticRoutesOutputReference | AwsVpcSiteIngressEgressGwInsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwInsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwInsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwInsideStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRouteList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRouteList.internalValue = value.staticRouteList;
    }
  }

  // static_route_list - computed: false, optional: false, required: true
  private _staticRouteList = new AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: AwsVpcSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference {
    return new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#addr AwsVpcSite#addr}
  */
  readonly addr?: string;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#addr AwsVpcSite#addr}
  */
  readonly addr?: string;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv4 AwsVpcSite#ipv4}
  */
  readonly ipv4?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv6 AwsVpcSite#ipv6}
  */
  readonly ipv6?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#type AwsVpcSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#interface AwsVpcSite#interface}
  */
  readonly interface?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#nexthop_address AwsVpcSite#nexthop_address}
  */
  readonly nexthopAddress?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nexthopAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddress = this._nexthopAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._nexthopAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._nexthopAddress.internalValue = value.nexthopAddress;
    }
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

  // interface - computed: false, optional: true, required: false
  private _interface = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_address - computed: false, optional: true, required: false
  private _nexthopAddress = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
    this._nexthopAddress.internalValue = value;
  }
  public resetNexthopAddress() {
    this._nexthopAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressInput() {
    return this._nexthopAddress.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#plen AwsVpcSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#prefix AwsVpcSite#prefix}
  */
  readonly prefix?: string;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#plen AwsVpcSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#prefix AwsVpcSite#prefix}
  */
  readonly prefix?: string;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv4 AwsVpcSite#ipv4}
  */
  readonly ipv4?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv6 AwsVpcSite#ipv6}
  */
  readonly ipv6?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#attrs AwsVpcSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#labels AwsVpcSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#nexthop AwsVpcSite#nexthop}
  */
  readonly nexthop?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#subnets AwsVpcSite#subnets}
  */
  readonly subnets: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nexthop: {
      value: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attrs = value.attrs;
      this._labels = value.labels;
      this._nexthop.internalValue = value.nexthop;
      this._subnets.internalValue = value.subnets;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#simple_static_route AwsVpcSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_static_route AwsVpcSite#custom_static_route}
  */
  readonly customStaticRoute?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_static_route: {
      value: cdktf.stringToHclTerraform(struct!.simpleStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_static_route: {
      value: awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleStaticRoute = this._simpleStaticRoute;
    }
    if (this._customStaticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStaticRoute = this._customStaticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = undefined;
      this._customStaticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = value.simpleStaticRoute;
      this._customStaticRoute.internalValue = value.customStaticRoute;
    }
  }

  // simple_static_route - computed: false, optional: true, required: false
  private _simpleStaticRoute?: string; 
  public get simpleStaticRoute() {
    return this.getStringAttribute('simple_static_route');
  }
  public set simpleStaticRoute(value: string) {
    this._simpleStaticRoute = value;
  }
  public resetSimpleStaticRoute() {
    this._simpleStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleStaticRouteInput() {
    return this._simpleStaticRoute;
  }

  // custom_static_route - computed: false, optional: true, required: false
  private _customStaticRoute = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute) {
    this._customStaticRoute.internalValue = value;
  }
  public resetCustomStaticRoute() {
    this._customStaticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStaticRouteInput() {
    return this._customStaticRoute.internalValue;
  }
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructOutputReference {
    return new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressEgressGwOutsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#static_route_list AwsVpcSite#static_route_list}
  */
  readonly staticRouteList: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function awsVpcSiteIngressEgressGwOutsideStaticRoutesToTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesOutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function awsVpcSiteIngressEgressGwOutsideStaticRoutesToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutsideStaticRoutesOutputReference | AwsVpcSiteIngressEgressGwOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwOutsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRouteList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRouteList.internalValue = value.staticRouteList;
    }
  }

  // static_route_list - computed: false, optional: false, required: true
  private _staticRouteList = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#jumbo AwsVpcSite#jumbo}
  */
  readonly jumbo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_jumbo AwsVpcSite#no_jumbo}
  */
  readonly noJumbo?: boolean | cdktf.IResolvable;
}

export function awsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct?: AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jumbo: cdktf.booleanToTerraform(struct!.jumbo),
    no_jumbo: cdktf.booleanToTerraform(struct!.noJumbo),
  }
}


export function awsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct?: AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.jumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.noJumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumbo = this._jumbo;
    }
    if (this._noJumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.noJumbo = this._noJumbo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jumbo = undefined;
      this._noJumbo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jumbo = value.jumbo;
      this._noJumbo = value.noJumbo;
    }
  }

  // jumbo - computed: false, optional: true, required: false
  private _jumbo?: boolean | cdktf.IResolvable; 
  public get jumbo() {
    return this.getBooleanAttribute('jumbo');
  }
  public set jumbo(value: boolean | cdktf.IResolvable) {
    this._jumbo = value;
  }
  public resetJumbo() {
    this._jumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboInput() {
    return this._jumbo;
  }

  // no_jumbo - computed: false, optional: true, required: false
  private _noJumbo?: boolean | cdktf.IResolvable; 
  public get noJumbo() {
    return this.getBooleanAttribute('no_jumbo');
  }
  public set noJumbo(value: boolean | cdktf.IResolvable) {
    this._noJumbo = value;
  }
  public resetNoJumbo() {
    this._noJumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noJumboInput() {
    return this._noJumbo;
  }
}
export interface AwsVpcSiteIngressEgressGwPerformanceEnhancementMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#perf_mode_l7_enhanced AwsVpcSite#perf_mode_l7_enhanced}
  */
  readonly perfModeL7Enhanced?: boolean | cdktf.IResolvable;
  /**
  * perf_mode_l3_enhanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#perf_mode_l3_enhanced AwsVpcSite#perf_mode_l3_enhanced}
  */
  readonly perfModeL3Enhanced?: AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced;
}

export function awsVpcSiteIngressEgressGwPerformanceEnhancementModeToTerraform(struct?: AwsVpcSiteIngressEgressGwPerformanceEnhancementModeOutputReference | AwsVpcSiteIngressEgressGwPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perf_mode_l7_enhanced: cdktf.booleanToTerraform(struct!.perfModeL7Enhanced),
    perf_mode_l3_enhanced: awsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct!.perfModeL3Enhanced),
  }
}


export function awsVpcSiteIngressEgressGwPerformanceEnhancementModeToHclTerraform(struct?: AwsVpcSiteIngressEgressGwPerformanceEnhancementModeOutputReference | AwsVpcSiteIngressEgressGwPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perf_mode_l7_enhanced: {
      value: cdktf.booleanToHclTerraform(struct!.perfModeL7Enhanced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    perf_mode_l3_enhanced: {
      value: awsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct!.perfModeL3Enhanced),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwPerformanceEnhancementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGwPerformanceEnhancementMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perfModeL7Enhanced !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL7Enhanced = this._perfModeL7Enhanced;
    }
    if (this._perfModeL3Enhanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL3Enhanced = this._perfModeL3Enhanced?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGwPerformanceEnhancementMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perfModeL7Enhanced = undefined;
      this._perfModeL3Enhanced.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perfModeL7Enhanced = value.perfModeL7Enhanced;
      this._perfModeL3Enhanced.internalValue = value.perfModeL3Enhanced;
    }
  }

  // perf_mode_l7_enhanced - computed: false, optional: true, required: false
  private _perfModeL7Enhanced?: boolean | cdktf.IResolvable; 
  public get perfModeL7Enhanced() {
    return this.getBooleanAttribute('perf_mode_l7_enhanced');
  }
  public set perfModeL7Enhanced(value: boolean | cdktf.IResolvable) {
    this._perfModeL7Enhanced = value;
  }
  public resetPerfModeL7Enhanced() {
    this._perfModeL7Enhanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL7EnhancedInput() {
    return this._perfModeL7Enhanced;
  }

  // perf_mode_l3_enhanced - computed: false, optional: true, required: false
  private _perfModeL3Enhanced = new AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference(this, "perf_mode_l3_enhanced");
  public get perfModeL3Enhanced() {
    return this._perfModeL3Enhanced;
  }
  public putPerfModeL3Enhanced(value: AwsVpcSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced) {
    this._perfModeL3Enhanced.internalValue = value;
  }
  public resetPerfModeL3Enhanced() {
    this._perfModeL3Enhanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL3EnhancedInput() {
    return this._perfModeL3Enhanced.internalValue;
  }
}
export interface AwsVpcSiteIngressEgressGw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#aws_certified_hw AwsVpcSite#aws_certified_hw}
  */
  readonly awsCertifiedHw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#forward_proxy_allow_all AwsVpcSite#forward_proxy_allow_all}
  */
  readonly forwardProxyAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_dc_cluster_group AwsVpcSite#no_dc_cluster_group}
  */
  readonly noDcClusterGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_forward_proxy AwsVpcSite#no_forward_proxy}
  */
  readonly noForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_global_network AwsVpcSite#no_global_network}
  */
  readonly noGlobalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_inside_static_routes AwsVpcSite#no_inside_static_routes}
  */
  readonly noInsideStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_network_policy AwsVpcSite#no_network_policy}
  */
  readonly noNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_outside_static_routes AwsVpcSite#no_outside_static_routes}
  */
  readonly noOutsideStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#sm_connection_public_ip AwsVpcSite#sm_connection_public_ip}
  */
  readonly smConnectionPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#sm_connection_pvt_ip AwsVpcSite#sm_connection_pvt_ip}
  */
  readonly smConnectionPvtIp?: boolean | cdktf.IResolvable;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#active_enhanced_firewall_policies AwsVpcSite#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#active_forward_proxy_policies AwsVpcSite#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: AwsVpcSiteIngressEgressGwActiveForwardProxyPolicies;
  /**
  * active_network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#active_network_policies AwsVpcSite#active_network_policies}
  */
  readonly activeNetworkPolicies?: AwsVpcSiteIngressEgressGwActiveNetworkPolicies;
  /**
  * allowed_vip_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#allowed_vip_port AwsVpcSite#allowed_vip_port}
  */
  readonly allowedVipPort?: AwsVpcSiteIngressEgressGwAllowedVipPort;
  /**
  * allowed_vip_port_sli block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#allowed_vip_port_sli AwsVpcSite#allowed_vip_port_sli}
  */
  readonly allowedVipPortSli?: AwsVpcSiteIngressEgressGwAllowedVipPortSli;
  /**
  * az_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#az_nodes AwsVpcSite#az_nodes}
  */
  readonly azNodes: AwsVpcSiteIngressEgressGwAzNodes[] | cdktf.IResolvable;
  /**
  * dc_cluster_group_inside_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#dc_cluster_group_inside_vn AwsVpcSite#dc_cluster_group_inside_vn}
  */
  readonly dcClusterGroupInsideVn?: AwsVpcSiteIngressEgressGwDcClusterGroupInsideVn;
  /**
  * dc_cluster_group_outside_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#dc_cluster_group_outside_vn AwsVpcSite#dc_cluster_group_outside_vn}
  */
  readonly dcClusterGroupOutsideVn?: AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVn;
  /**
  * global_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#global_network_list AwsVpcSite#global_network_list}
  */
  readonly globalNetworkList?: AwsVpcSiteIngressEgressGwGlobalNetworkListStruct;
  /**
  * inside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#inside_static_routes AwsVpcSite#inside_static_routes}
  */
  readonly insideStaticRoutes?: AwsVpcSiteIngressEgressGwInsideStaticRoutes;
  /**
  * outside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#outside_static_routes AwsVpcSite#outside_static_routes}
  */
  readonly outsideStaticRoutes?: AwsVpcSiteIngressEgressGwOutsideStaticRoutes;
  /**
  * performance_enhancement_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#performance_enhancement_mode AwsVpcSite#performance_enhancement_mode}
  */
  readonly performanceEnhancementMode?: AwsVpcSiteIngressEgressGwPerformanceEnhancementMode;
}

export function awsVpcSiteIngressEgressGwToTerraform(struct?: AwsVpcSiteIngressEgressGwOutputReference | AwsVpcSiteIngressEgressGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_certified_hw: cdktf.stringToTerraform(struct!.awsCertifiedHw),
    forward_proxy_allow_all: cdktf.booleanToTerraform(struct!.forwardProxyAllowAll),
    no_dc_cluster_group: cdktf.booleanToTerraform(struct!.noDcClusterGroup),
    no_forward_proxy: cdktf.booleanToTerraform(struct!.noForwardProxy),
    no_global_network: cdktf.booleanToTerraform(struct!.noGlobalNetwork),
    no_inside_static_routes: cdktf.booleanToTerraform(struct!.noInsideStaticRoutes),
    no_network_policy: cdktf.booleanToTerraform(struct!.noNetworkPolicy),
    no_outside_static_routes: cdktf.booleanToTerraform(struct!.noOutsideStaticRoutes),
    sm_connection_public_ip: cdktf.booleanToTerraform(struct!.smConnectionPublicIp),
    sm_connection_pvt_ip: cdktf.booleanToTerraform(struct!.smConnectionPvtIp),
    active_enhanced_firewall_policies: awsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: awsVpcSiteIngressEgressGwActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_network_policies: awsVpcSiteIngressEgressGwActiveNetworkPoliciesToTerraform(struct!.activeNetworkPolicies),
    allowed_vip_port: awsVpcSiteIngressEgressGwAllowedVipPortToTerraform(struct!.allowedVipPort),
    allowed_vip_port_sli: awsVpcSiteIngressEgressGwAllowedVipPortSliToTerraform(struct!.allowedVipPortSli),
    az_nodes: cdktf.listMapper(awsVpcSiteIngressEgressGwAzNodesToTerraform, true)(struct!.azNodes),
    dc_cluster_group_inside_vn: awsVpcSiteIngressEgressGwDcClusterGroupInsideVnToTerraform(struct!.dcClusterGroupInsideVn),
    dc_cluster_group_outside_vn: awsVpcSiteIngressEgressGwDcClusterGroupOutsideVnToTerraform(struct!.dcClusterGroupOutsideVn),
    global_network_list: awsVpcSiteIngressEgressGwGlobalNetworkListStructToTerraform(struct!.globalNetworkList),
    inside_static_routes: awsVpcSiteIngressEgressGwInsideStaticRoutesToTerraform(struct!.insideStaticRoutes),
    outside_static_routes: awsVpcSiteIngressEgressGwOutsideStaticRoutesToTerraform(struct!.outsideStaticRoutes),
    performance_enhancement_mode: awsVpcSiteIngressEgressGwPerformanceEnhancementModeToTerraform(struct!.performanceEnhancementMode),
  }
}


export function awsVpcSiteIngressEgressGwToHclTerraform(struct?: AwsVpcSiteIngressEgressGwOutputReference | AwsVpcSiteIngressEgressGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_certified_hw: {
      value: cdktf.stringToHclTerraform(struct!.awsCertifiedHw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_proxy_allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.forwardProxyAllowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_dc_cluster_group: {
      value: cdktf.booleanToHclTerraform(struct!.noDcClusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_forward_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.noForwardProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_global_network: {
      value: cdktf.booleanToHclTerraform(struct!.noGlobalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_inside_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noInsideStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_network_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noNetworkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_outside_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noOutsideStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_pvt_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPvtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    active_enhanced_firewall_policies: {
      value: awsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: awsVpcSiteIngressEgressGwActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesList",
    },
    active_network_policies: {
      value: awsVpcSiteIngressEgressGwActiveNetworkPoliciesToHclTerraform(struct!.activeNetworkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwActiveNetworkPoliciesList",
    },
    allowed_vip_port: {
      value: awsVpcSiteIngressEgressGwAllowedVipPortToHclTerraform(struct!.allowedVipPort),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAllowedVipPortList",
    },
    allowed_vip_port_sli: {
      value: awsVpcSiteIngressEgressGwAllowedVipPortSliToHclTerraform(struct!.allowedVipPortSli),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAllowedVipPortSliList",
    },
    az_nodes: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressEgressGwAzNodesToHclTerraform, true)(struct!.azNodes),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwAzNodesList",
    },
    dc_cluster_group_inside_vn: {
      value: awsVpcSiteIngressEgressGwDcClusterGroupInsideVnToHclTerraform(struct!.dcClusterGroupInsideVn),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwDcClusterGroupInsideVnList",
    },
    dc_cluster_group_outside_vn: {
      value: awsVpcSiteIngressEgressGwDcClusterGroupOutsideVnToHclTerraform(struct!.dcClusterGroupOutsideVn),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVnList",
    },
    global_network_list: {
      value: awsVpcSiteIngressEgressGwGlobalNetworkListStructToHclTerraform(struct!.globalNetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwGlobalNetworkListStructList",
    },
    inside_static_routes: {
      value: awsVpcSiteIngressEgressGwInsideStaticRoutesToHclTerraform(struct!.insideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwInsideStaticRoutesList",
    },
    outside_static_routes: {
      value: awsVpcSiteIngressEgressGwOutsideStaticRoutesToHclTerraform(struct!.outsideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwOutsideStaticRoutesList",
    },
    performance_enhancement_mode: {
      value: awsVpcSiteIngressEgressGwPerformanceEnhancementModeToHclTerraform(struct!.performanceEnhancementMode),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressEgressGwPerformanceEnhancementModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressEgressGwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressEgressGw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsCertifiedHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCertifiedHw = this._awsCertifiedHw;
    }
    if (this._forwardProxyAllowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyAllowAll = this._forwardProxyAllowAll;
    }
    if (this._noDcClusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDcClusterGroup = this._noDcClusterGroup;
    }
    if (this._noForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noForwardProxy = this._noForwardProxy;
    }
    if (this._noGlobalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGlobalNetwork = this._noGlobalNetwork;
    }
    if (this._noInsideStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInsideStaticRoutes = this._noInsideStaticRoutes;
    }
    if (this._noNetworkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNetworkPolicy = this._noNetworkPolicy;
    }
    if (this._noOutsideStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOutsideStaticRoutes = this._noOutsideStaticRoutes;
    }
    if (this._smConnectionPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPublicIp = this._smConnectionPublicIp;
    }
    if (this._smConnectionPvtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPvtIp = this._smConnectionPvtIp;
    }
    if (this._activeEnhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeEnhancedFirewallPolicies = this._activeEnhancedFirewallPolicies?.internalValue;
    }
    if (this._activeForwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeForwardProxyPolicies = this._activeForwardProxyPolicies?.internalValue;
    }
    if (this._activeNetworkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNetworkPolicies = this._activeNetworkPolicies?.internalValue;
    }
    if (this._allowedVipPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVipPort = this._allowedVipPort?.internalValue;
    }
    if (this._allowedVipPortSli?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVipPortSli = this._allowedVipPortSli?.internalValue;
    }
    if (this._azNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azNodes = this._azNodes?.internalValue;
    }
    if (this._dcClusterGroupInsideVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupInsideVn = this._dcClusterGroupInsideVn?.internalValue;
    }
    if (this._dcClusterGroupOutsideVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupOutsideVn = this._dcClusterGroupOutsideVn?.internalValue;
    }
    if (this._globalNetworkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkList = this._globalNetworkList?.internalValue;
    }
    if (this._insideStaticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideStaticRoutes = this._insideStaticRoutes?.internalValue;
    }
    if (this._outsideStaticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideStaticRoutes = this._outsideStaticRoutes?.internalValue;
    }
    if (this._performanceEnhancementMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceEnhancementMode = this._performanceEnhancementMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressEgressGw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsCertifiedHw = undefined;
      this._forwardProxyAllowAll = undefined;
      this._noDcClusterGroup = undefined;
      this._noForwardProxy = undefined;
      this._noGlobalNetwork = undefined;
      this._noInsideStaticRoutes = undefined;
      this._noNetworkPolicy = undefined;
      this._noOutsideStaticRoutes = undefined;
      this._smConnectionPublicIp = undefined;
      this._smConnectionPvtIp = undefined;
      this._activeEnhancedFirewallPolicies.internalValue = undefined;
      this._activeForwardProxyPolicies.internalValue = undefined;
      this._activeNetworkPolicies.internalValue = undefined;
      this._allowedVipPort.internalValue = undefined;
      this._allowedVipPortSli.internalValue = undefined;
      this._azNodes.internalValue = undefined;
      this._dcClusterGroupInsideVn.internalValue = undefined;
      this._dcClusterGroupOutsideVn.internalValue = undefined;
      this._globalNetworkList.internalValue = undefined;
      this._insideStaticRoutes.internalValue = undefined;
      this._outsideStaticRoutes.internalValue = undefined;
      this._performanceEnhancementMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsCertifiedHw = value.awsCertifiedHw;
      this._forwardProxyAllowAll = value.forwardProxyAllowAll;
      this._noDcClusterGroup = value.noDcClusterGroup;
      this._noForwardProxy = value.noForwardProxy;
      this._noGlobalNetwork = value.noGlobalNetwork;
      this._noInsideStaticRoutes = value.noInsideStaticRoutes;
      this._noNetworkPolicy = value.noNetworkPolicy;
      this._noOutsideStaticRoutes = value.noOutsideStaticRoutes;
      this._smConnectionPublicIp = value.smConnectionPublicIp;
      this._smConnectionPvtIp = value.smConnectionPvtIp;
      this._activeEnhancedFirewallPolicies.internalValue = value.activeEnhancedFirewallPolicies;
      this._activeForwardProxyPolicies.internalValue = value.activeForwardProxyPolicies;
      this._activeNetworkPolicies.internalValue = value.activeNetworkPolicies;
      this._allowedVipPort.internalValue = value.allowedVipPort;
      this._allowedVipPortSli.internalValue = value.allowedVipPortSli;
      this._azNodes.internalValue = value.azNodes;
      this._dcClusterGroupInsideVn.internalValue = value.dcClusterGroupInsideVn;
      this._dcClusterGroupOutsideVn.internalValue = value.dcClusterGroupOutsideVn;
      this._globalNetworkList.internalValue = value.globalNetworkList;
      this._insideStaticRoutes.internalValue = value.insideStaticRoutes;
      this._outsideStaticRoutes.internalValue = value.outsideStaticRoutes;
      this._performanceEnhancementMode.internalValue = value.performanceEnhancementMode;
    }
  }

  // aws_certified_hw - computed: false, optional: false, required: true
  private _awsCertifiedHw?: string; 
  public get awsCertifiedHw() {
    return this.getStringAttribute('aws_certified_hw');
  }
  public set awsCertifiedHw(value: string) {
    this._awsCertifiedHw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCertifiedHwInput() {
    return this._awsCertifiedHw;
  }

  // forward_proxy_allow_all - computed: false, optional: true, required: false
  private _forwardProxyAllowAll?: boolean | cdktf.IResolvable; 
  public get forwardProxyAllowAll() {
    return this.getBooleanAttribute('forward_proxy_allow_all');
  }
  public set forwardProxyAllowAll(value: boolean | cdktf.IResolvable) {
    this._forwardProxyAllowAll = value;
  }
  public resetForwardProxyAllowAll() {
    this._forwardProxyAllowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyAllowAllInput() {
    return this._forwardProxyAllowAll;
  }

  // no_dc_cluster_group - computed: false, optional: true, required: false
  private _noDcClusterGroup?: boolean | cdktf.IResolvable; 
  public get noDcClusterGroup() {
    return this.getBooleanAttribute('no_dc_cluster_group');
  }
  public set noDcClusterGroup(value: boolean | cdktf.IResolvable) {
    this._noDcClusterGroup = value;
  }
  public resetNoDcClusterGroup() {
    this._noDcClusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDcClusterGroupInput() {
    return this._noDcClusterGroup;
  }

  // no_forward_proxy - computed: false, optional: true, required: false
  private _noForwardProxy?: boolean | cdktf.IResolvable; 
  public get noForwardProxy() {
    return this.getBooleanAttribute('no_forward_proxy');
  }
  public set noForwardProxy(value: boolean | cdktf.IResolvable) {
    this._noForwardProxy = value;
  }
  public resetNoForwardProxy() {
    this._noForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noForwardProxyInput() {
    return this._noForwardProxy;
  }

  // no_global_network - computed: false, optional: true, required: false
  private _noGlobalNetwork?: boolean | cdktf.IResolvable; 
  public get noGlobalNetwork() {
    return this.getBooleanAttribute('no_global_network');
  }
  public set noGlobalNetwork(value: boolean | cdktf.IResolvable) {
    this._noGlobalNetwork = value;
  }
  public resetNoGlobalNetwork() {
    this._noGlobalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGlobalNetworkInput() {
    return this._noGlobalNetwork;
  }

  // no_inside_static_routes - computed: false, optional: true, required: false
  private _noInsideStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noInsideStaticRoutes() {
    return this.getBooleanAttribute('no_inside_static_routes');
  }
  public set noInsideStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noInsideStaticRoutes = value;
  }
  public resetNoInsideStaticRoutes() {
    this._noInsideStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInsideStaticRoutesInput() {
    return this._noInsideStaticRoutes;
  }

  // no_network_policy - computed: false, optional: true, required: false
  private _noNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get noNetworkPolicy() {
    return this.getBooleanAttribute('no_network_policy');
  }
  public set noNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._noNetworkPolicy = value;
  }
  public resetNoNetworkPolicy() {
    this._noNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNetworkPolicyInput() {
    return this._noNetworkPolicy;
  }

  // no_outside_static_routes - computed: false, optional: true, required: false
  private _noOutsideStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noOutsideStaticRoutes() {
    return this.getBooleanAttribute('no_outside_static_routes');
  }
  public set noOutsideStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noOutsideStaticRoutes = value;
  }
  public resetNoOutsideStaticRoutes() {
    this._noOutsideStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOutsideStaticRoutesInput() {
    return this._noOutsideStaticRoutes;
  }

  // sm_connection_public_ip - computed: false, optional: true, required: false
  private _smConnectionPublicIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPublicIp() {
    return this.getBooleanAttribute('sm_connection_public_ip');
  }
  public set smConnectionPublicIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPublicIp = value;
  }
  public resetSmConnectionPublicIp() {
    this._smConnectionPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPublicIpInput() {
    return this._smConnectionPublicIp;
  }

  // sm_connection_pvt_ip - computed: false, optional: true, required: false
  private _smConnectionPvtIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPvtIp() {
    return this.getBooleanAttribute('sm_connection_pvt_ip');
  }
  public set smConnectionPvtIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPvtIp = value;
  }
  public resetSmConnectionPvtIp() {
    this._smConnectionPvtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPvtIpInput() {
    return this._smConnectionPvtIp;
  }

  // active_enhanced_firewall_policies - computed: false, optional: true, required: false
  private _activeEnhancedFirewallPolicies = new AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: AwsVpcSiteIngressEgressGwActiveEnhancedFirewallPolicies) {
    this._activeEnhancedFirewallPolicies.internalValue = value;
  }
  public resetActiveEnhancedFirewallPolicies() {
    this._activeEnhancedFirewallPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeEnhancedFirewallPoliciesInput() {
    return this._activeEnhancedFirewallPolicies.internalValue;
  }

  // active_forward_proxy_policies - computed: false, optional: true, required: false
  private _activeForwardProxyPolicies = new AwsVpcSiteIngressEgressGwActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: AwsVpcSiteIngressEgressGwActiveForwardProxyPolicies) {
    this._activeForwardProxyPolicies.internalValue = value;
  }
  public resetActiveForwardProxyPolicies() {
    this._activeForwardProxyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeForwardProxyPoliciesInput() {
    return this._activeForwardProxyPolicies.internalValue;
  }

  // active_network_policies - computed: false, optional: true, required: false
  private _activeNetworkPolicies = new AwsVpcSiteIngressEgressGwActiveNetworkPoliciesOutputReference(this, "active_network_policies");
  public get activeNetworkPolicies() {
    return this._activeNetworkPolicies;
  }
  public putActiveNetworkPolicies(value: AwsVpcSiteIngressEgressGwActiveNetworkPolicies) {
    this._activeNetworkPolicies.internalValue = value;
  }
  public resetActiveNetworkPolicies() {
    this._activeNetworkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNetworkPoliciesInput() {
    return this._activeNetworkPolicies.internalValue;
  }

  // allowed_vip_port - computed: false, optional: true, required: false
  private _allowedVipPort = new AwsVpcSiteIngressEgressGwAllowedVipPortOutputReference(this, "allowed_vip_port");
  public get allowedVipPort() {
    return this._allowedVipPort;
  }
  public putAllowedVipPort(value: AwsVpcSiteIngressEgressGwAllowedVipPort) {
    this._allowedVipPort.internalValue = value;
  }
  public resetAllowedVipPort() {
    this._allowedVipPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVipPortInput() {
    return this._allowedVipPort.internalValue;
  }

  // allowed_vip_port_sli - computed: false, optional: true, required: false
  private _allowedVipPortSli = new AwsVpcSiteIngressEgressGwAllowedVipPortSliOutputReference(this, "allowed_vip_port_sli");
  public get allowedVipPortSli() {
    return this._allowedVipPortSli;
  }
  public putAllowedVipPortSli(value: AwsVpcSiteIngressEgressGwAllowedVipPortSli) {
    this._allowedVipPortSli.internalValue = value;
  }
  public resetAllowedVipPortSli() {
    this._allowedVipPortSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVipPortSliInput() {
    return this._allowedVipPortSli.internalValue;
  }

  // az_nodes - computed: false, optional: false, required: true
  private _azNodes = new AwsVpcSiteIngressEgressGwAzNodesList(this, "az_nodes", false);
  public get azNodes() {
    return this._azNodes;
  }
  public putAzNodes(value: AwsVpcSiteIngressEgressGwAzNodes[] | cdktf.IResolvable) {
    this._azNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azNodesInput() {
    return this._azNodes.internalValue;
  }

  // dc_cluster_group_inside_vn - computed: false, optional: true, required: false
  private _dcClusterGroupInsideVn = new AwsVpcSiteIngressEgressGwDcClusterGroupInsideVnOutputReference(this, "dc_cluster_group_inside_vn");
  public get dcClusterGroupInsideVn() {
    return this._dcClusterGroupInsideVn;
  }
  public putDcClusterGroupInsideVn(value: AwsVpcSiteIngressEgressGwDcClusterGroupInsideVn) {
    this._dcClusterGroupInsideVn.internalValue = value;
  }
  public resetDcClusterGroupInsideVn() {
    this._dcClusterGroupInsideVn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInsideVnInput() {
    return this._dcClusterGroupInsideVn.internalValue;
  }

  // dc_cluster_group_outside_vn - computed: false, optional: true, required: false
  private _dcClusterGroupOutsideVn = new AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVnOutputReference(this, "dc_cluster_group_outside_vn");
  public get dcClusterGroupOutsideVn() {
    return this._dcClusterGroupOutsideVn;
  }
  public putDcClusterGroupOutsideVn(value: AwsVpcSiteIngressEgressGwDcClusterGroupOutsideVn) {
    this._dcClusterGroupOutsideVn.internalValue = value;
  }
  public resetDcClusterGroupOutsideVn() {
    this._dcClusterGroupOutsideVn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupOutsideVnInput() {
    return this._dcClusterGroupOutsideVn.internalValue;
  }

  // global_network_list - computed: false, optional: true, required: false
  private _globalNetworkList = new AwsVpcSiteIngressEgressGwGlobalNetworkListStructOutputReference(this, "global_network_list");
  public get globalNetworkList() {
    return this._globalNetworkList;
  }
  public putGlobalNetworkList(value: AwsVpcSiteIngressEgressGwGlobalNetworkListStruct) {
    this._globalNetworkList.internalValue = value;
  }
  public resetGlobalNetworkList() {
    this._globalNetworkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkListInput() {
    return this._globalNetworkList.internalValue;
  }

  // inside_static_routes - computed: false, optional: true, required: false
  private _insideStaticRoutes = new AwsVpcSiteIngressEgressGwInsideStaticRoutesOutputReference(this, "inside_static_routes");
  public get insideStaticRoutes() {
    return this._insideStaticRoutes;
  }
  public putInsideStaticRoutes(value: AwsVpcSiteIngressEgressGwInsideStaticRoutes) {
    this._insideStaticRoutes.internalValue = value;
  }
  public resetInsideStaticRoutes() {
    this._insideStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStaticRoutesInput() {
    return this._insideStaticRoutes.internalValue;
  }

  // outside_static_routes - computed: false, optional: true, required: false
  private _outsideStaticRoutes = new AwsVpcSiteIngressEgressGwOutsideStaticRoutesOutputReference(this, "outside_static_routes");
  public get outsideStaticRoutes() {
    return this._outsideStaticRoutes;
  }
  public putOutsideStaticRoutes(value: AwsVpcSiteIngressEgressGwOutsideStaticRoutes) {
    this._outsideStaticRoutes.internalValue = value;
  }
  public resetOutsideStaticRoutes() {
    this._outsideStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideStaticRoutesInput() {
    return this._outsideStaticRoutes.internalValue;
  }

  // performance_enhancement_mode - computed: false, optional: true, required: false
  private _performanceEnhancementMode = new AwsVpcSiteIngressEgressGwPerformanceEnhancementModeOutputReference(this, "performance_enhancement_mode");
  public get performanceEnhancementMode() {
    return this._performanceEnhancementMode;
  }
  public putPerformanceEnhancementMode(value: AwsVpcSiteIngressEgressGwPerformanceEnhancementMode) {
    this._performanceEnhancementMode.internalValue = value;
  }
  public resetPerformanceEnhancementMode() {
    this._performanceEnhancementMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceEnhancementModeInput() {
    return this._performanceEnhancementMode.internalValue;
  }
}
export interface AwsVpcSiteIngressGwAllowedVipPortCustomPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#port_ranges AwsVpcSite#port_ranges}
  */
  readonly portRanges: string;
}

export function awsVpcSiteIngressGwAllowedVipPortCustomPortsToTerraform(struct?: AwsVpcSiteIngressGwAllowedVipPortCustomPortsOutputReference | AwsVpcSiteIngressGwAllowedVipPortCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function awsVpcSiteIngressGwAllowedVipPortCustomPortsToHclTerraform(struct?: AwsVpcSiteIngressGwAllowedVipPortCustomPortsOutputReference | AwsVpcSiteIngressGwAllowedVipPortCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressGwAllowedVipPortCustomPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressGwAllowedVipPortCustomPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressGwAllowedVipPortCustomPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portRanges = value.portRanges;
    }
  }

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }
}
export interface AwsVpcSiteIngressGwAllowedVipPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_allowed_vip_port AwsVpcSite#disable_allowed_vip_port}
  */
  readonly disableAllowedVipPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_http_https_port AwsVpcSite#use_http_https_port}
  */
  readonly useHttpHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_http_port AwsVpcSite#use_http_port}
  */
  readonly useHttpPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_https_port AwsVpcSite#use_https_port}
  */
  readonly useHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * custom_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_ports AwsVpcSite#custom_ports}
  */
  readonly customPorts?: AwsVpcSiteIngressGwAllowedVipPortCustomPorts;
}

export function awsVpcSiteIngressGwAllowedVipPortToTerraform(struct?: AwsVpcSiteIngressGwAllowedVipPortOutputReference | AwsVpcSiteIngressGwAllowedVipPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_allowed_vip_port: cdktf.booleanToTerraform(struct!.disableAllowedVipPort),
    use_http_https_port: cdktf.booleanToTerraform(struct!.useHttpHttpsPort),
    use_http_port: cdktf.booleanToTerraform(struct!.useHttpPort),
    use_https_port: cdktf.booleanToTerraform(struct!.useHttpsPort),
    custom_ports: awsVpcSiteIngressGwAllowedVipPortCustomPortsToTerraform(struct!.customPorts),
  }
}


export function awsVpcSiteIngressGwAllowedVipPortToHclTerraform(struct?: AwsVpcSiteIngressGwAllowedVipPortOutputReference | AwsVpcSiteIngressGwAllowedVipPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_allowed_vip_port: {
      value: cdktf.booleanToHclTerraform(struct!.disableAllowedVipPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_ports: {
      value: awsVpcSiteIngressGwAllowedVipPortCustomPortsToHclTerraform(struct!.customPorts),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressGwAllowedVipPortCustomPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressGwAllowedVipPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressGwAllowedVipPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAllowedVipPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAllowedVipPort = this._disableAllowedVipPort;
    }
    if (this._useHttpHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpHttpsPort = this._useHttpHttpsPort;
    }
    if (this._useHttpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpPort = this._useHttpPort;
    }
    if (this._useHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpsPort = this._useHttpsPort;
    }
    if (this._customPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPorts = this._customPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressGwAllowedVipPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAllowedVipPort = undefined;
      this._useHttpHttpsPort = undefined;
      this._useHttpPort = undefined;
      this._useHttpsPort = undefined;
      this._customPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAllowedVipPort = value.disableAllowedVipPort;
      this._useHttpHttpsPort = value.useHttpHttpsPort;
      this._useHttpPort = value.useHttpPort;
      this._useHttpsPort = value.useHttpsPort;
      this._customPorts.internalValue = value.customPorts;
    }
  }

  // disable_allowed_vip_port - computed: false, optional: true, required: false
  private _disableAllowedVipPort?: boolean | cdktf.IResolvable; 
  public get disableAllowedVipPort() {
    return this.getBooleanAttribute('disable_allowed_vip_port');
  }
  public set disableAllowedVipPort(value: boolean | cdktf.IResolvable) {
    this._disableAllowedVipPort = value;
  }
  public resetDisableAllowedVipPort() {
    this._disableAllowedVipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllowedVipPortInput() {
    return this._disableAllowedVipPort;
  }

  // use_http_https_port - computed: false, optional: true, required: false
  private _useHttpHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpHttpsPort() {
    return this.getBooleanAttribute('use_http_https_port');
  }
  public set useHttpHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpHttpsPort = value;
  }
  public resetUseHttpHttpsPort() {
    this._useHttpHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpHttpsPortInput() {
    return this._useHttpHttpsPort;
  }

  // use_http_port - computed: false, optional: true, required: false
  private _useHttpPort?: boolean | cdktf.IResolvable; 
  public get useHttpPort() {
    return this.getBooleanAttribute('use_http_port');
  }
  public set useHttpPort(value: boolean | cdktf.IResolvable) {
    this._useHttpPort = value;
  }
  public resetUseHttpPort() {
    this._useHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpPortInput() {
    return this._useHttpPort;
  }

  // use_https_port - computed: false, optional: true, required: false
  private _useHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpsPort() {
    return this.getBooleanAttribute('use_https_port');
  }
  public set useHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpsPort = value;
  }
  public resetUseHttpsPort() {
    this._useHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpsPortInput() {
    return this._useHttpsPort;
  }

  // custom_ports - computed: false, optional: true, required: false
  private _customPorts = new AwsVpcSiteIngressGwAllowedVipPortCustomPortsOutputReference(this, "custom_ports");
  public get customPorts() {
    return this._customPorts;
  }
  public putCustomPorts(value: AwsVpcSiteIngressGwAllowedVipPortCustomPorts) {
    this._customPorts.internalValue = value;
  }
  public resetCustomPorts() {
    this._customPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortsInput() {
    return this._customPorts.internalValue;
  }
}
export interface AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv4 AwsVpcSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv6 AwsVpcSite#ipv6}
  */
  readonly ipv6?: string;
}

export function awsVpcSiteIngressGwAzNodesLocalSubnetSubnetParamToTerraform(struct?: AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParamOutputReference | AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function awsVpcSiteIngressGwAzNodesLocalSubnetSubnetParamToHclTerraform(struct?: AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParamOutputReference | AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AwsVpcSiteIngressGwAzNodesLocalSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#existing_subnet_id AwsVpcSite#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#subnet_param AwsVpcSite#subnet_param}
  */
  readonly subnetParam?: AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParam;
}

export function awsVpcSiteIngressGwAzNodesLocalSubnetToTerraform(struct?: AwsVpcSiteIngressGwAzNodesLocalSubnetOutputReference | AwsVpcSiteIngressGwAzNodesLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: awsVpcSiteIngressGwAzNodesLocalSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function awsVpcSiteIngressGwAzNodesLocalSubnetToHclTerraform(struct?: AwsVpcSiteIngressGwAzNodesLocalSubnetOutputReference | AwsVpcSiteIngressGwAzNodesLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: awsVpcSiteIngressGwAzNodesLocalSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressGwAzNodesLocalSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressGwAzNodesLocalSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressGwAzNodesLocalSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AwsVpcSiteIngressGwAzNodesLocalSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AwsVpcSiteIngressGwAzNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#aws_az_name AwsVpcSite#aws_az_name}
  */
  readonly awsAzName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disk_size AwsVpcSite#disk_size}
  */
  readonly diskSize?: number;
  /**
  * local_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#local_subnet AwsVpcSite#local_subnet}
  */
  readonly localSubnet?: AwsVpcSiteIngressGwAzNodesLocalSubnet;
}

export function awsVpcSiteIngressGwAzNodesToTerraform(struct?: AwsVpcSiteIngressGwAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_az_name: cdktf.stringToTerraform(struct!.awsAzName),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    local_subnet: awsVpcSiteIngressGwAzNodesLocalSubnetToTerraform(struct!.localSubnet),
  }
}


export function awsVpcSiteIngressGwAzNodesToHclTerraform(struct?: AwsVpcSiteIngressGwAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_az_name: {
      value: cdktf.stringToHclTerraform(struct!.awsAzName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_subnet: {
      value: awsVpcSiteIngressGwAzNodesLocalSubnetToHclTerraform(struct!.localSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressGwAzNodesLocalSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressGwAzNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteIngressGwAzNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAzName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAzName = this._awsAzName;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._localSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnet = this._localSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressGwAzNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAzName = undefined;
      this._diskSize = undefined;
      this._localSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAzName = value.awsAzName;
      this._diskSize = value.diskSize;
      this._localSubnet.internalValue = value.localSubnet;
    }
  }

  // aws_az_name - computed: false, optional: false, required: true
  private _awsAzName?: string; 
  public get awsAzName() {
    return this.getStringAttribute('aws_az_name');
  }
  public set awsAzName(value: string) {
    this._awsAzName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAzNameInput() {
    return this._awsAzName;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // local_subnet - computed: false, optional: true, required: false
  private _localSubnet = new AwsVpcSiteIngressGwAzNodesLocalSubnetOutputReference(this, "local_subnet");
  public get localSubnet() {
    return this._localSubnet;
  }
  public putLocalSubnet(value: AwsVpcSiteIngressGwAzNodesLocalSubnet) {
    this._localSubnet.internalValue = value;
  }
  public resetLocalSubnet() {
    this._localSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet.internalValue;
  }
}

export class AwsVpcSiteIngressGwAzNodesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteIngressGwAzNodes[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteIngressGwAzNodesOutputReference {
    return new AwsVpcSiteIngressGwAzNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#jumbo AwsVpcSite#jumbo}
  */
  readonly jumbo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_jumbo AwsVpcSite#no_jumbo}
  */
  readonly noJumbo?: boolean | cdktf.IResolvable;
}

export function awsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct?: AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jumbo: cdktf.booleanToTerraform(struct!.jumbo),
    no_jumbo: cdktf.booleanToTerraform(struct!.noJumbo),
  }
}


export function awsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct?: AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.jumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.noJumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumbo = this._jumbo;
    }
    if (this._noJumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.noJumbo = this._noJumbo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jumbo = undefined;
      this._noJumbo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jumbo = value.jumbo;
      this._noJumbo = value.noJumbo;
    }
  }

  // jumbo - computed: false, optional: true, required: false
  private _jumbo?: boolean | cdktf.IResolvable; 
  public get jumbo() {
    return this.getBooleanAttribute('jumbo');
  }
  public set jumbo(value: boolean | cdktf.IResolvable) {
    this._jumbo = value;
  }
  public resetJumbo() {
    this._jumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboInput() {
    return this._jumbo;
  }

  // no_jumbo - computed: false, optional: true, required: false
  private _noJumbo?: boolean | cdktf.IResolvable; 
  public get noJumbo() {
    return this.getBooleanAttribute('no_jumbo');
  }
  public set noJumbo(value: boolean | cdktf.IResolvable) {
    this._noJumbo = value;
  }
  public resetNoJumbo() {
    this._noJumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noJumboInput() {
    return this._noJumbo;
  }
}
export interface AwsVpcSiteIngressGwPerformanceEnhancementMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#perf_mode_l7_enhanced AwsVpcSite#perf_mode_l7_enhanced}
  */
  readonly perfModeL7Enhanced?: boolean | cdktf.IResolvable;
  /**
  * perf_mode_l3_enhanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#perf_mode_l3_enhanced AwsVpcSite#perf_mode_l3_enhanced}
  */
  readonly perfModeL3Enhanced?: AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced;
}

export function awsVpcSiteIngressGwPerformanceEnhancementModeToTerraform(struct?: AwsVpcSiteIngressGwPerformanceEnhancementModeOutputReference | AwsVpcSiteIngressGwPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perf_mode_l7_enhanced: cdktf.booleanToTerraform(struct!.perfModeL7Enhanced),
    perf_mode_l3_enhanced: awsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct!.perfModeL3Enhanced),
  }
}


export function awsVpcSiteIngressGwPerformanceEnhancementModeToHclTerraform(struct?: AwsVpcSiteIngressGwPerformanceEnhancementModeOutputReference | AwsVpcSiteIngressGwPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perf_mode_l7_enhanced: {
      value: cdktf.booleanToHclTerraform(struct!.perfModeL7Enhanced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    perf_mode_l3_enhanced: {
      value: awsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct!.perfModeL3Enhanced),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressGwPerformanceEnhancementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressGwPerformanceEnhancementMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perfModeL7Enhanced !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL7Enhanced = this._perfModeL7Enhanced;
    }
    if (this._perfModeL3Enhanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL3Enhanced = this._perfModeL3Enhanced?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressGwPerformanceEnhancementMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perfModeL7Enhanced = undefined;
      this._perfModeL3Enhanced.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perfModeL7Enhanced = value.perfModeL7Enhanced;
      this._perfModeL3Enhanced.internalValue = value.perfModeL3Enhanced;
    }
  }

  // perf_mode_l7_enhanced - computed: false, optional: true, required: false
  private _perfModeL7Enhanced?: boolean | cdktf.IResolvable; 
  public get perfModeL7Enhanced() {
    return this.getBooleanAttribute('perf_mode_l7_enhanced');
  }
  public set perfModeL7Enhanced(value: boolean | cdktf.IResolvable) {
    this._perfModeL7Enhanced = value;
  }
  public resetPerfModeL7Enhanced() {
    this._perfModeL7Enhanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL7EnhancedInput() {
    return this._perfModeL7Enhanced;
  }

  // perf_mode_l3_enhanced - computed: false, optional: true, required: false
  private _perfModeL3Enhanced = new AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference(this, "perf_mode_l3_enhanced");
  public get perfModeL3Enhanced() {
    return this._perfModeL3Enhanced;
  }
  public putPerfModeL3Enhanced(value: AwsVpcSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced) {
    this._perfModeL3Enhanced.internalValue = value;
  }
  public resetPerfModeL3Enhanced() {
    this._perfModeL3Enhanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL3EnhancedInput() {
    return this._perfModeL3Enhanced.internalValue;
  }
}
export interface AwsVpcSiteIngressGw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#aws_certified_hw AwsVpcSite#aws_certified_hw}
  */
  readonly awsCertifiedHw: string;
  /**
  * allowed_vip_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#allowed_vip_port AwsVpcSite#allowed_vip_port}
  */
  readonly allowedVipPort?: AwsVpcSiteIngressGwAllowedVipPort;
  /**
  * az_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#az_nodes AwsVpcSite#az_nodes}
  */
  readonly azNodes: AwsVpcSiteIngressGwAzNodes[] | cdktf.IResolvable;
  /**
  * performance_enhancement_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#performance_enhancement_mode AwsVpcSite#performance_enhancement_mode}
  */
  readonly performanceEnhancementMode?: AwsVpcSiteIngressGwPerformanceEnhancementMode;
}

export function awsVpcSiteIngressGwToTerraform(struct?: AwsVpcSiteIngressGwOutputReference | AwsVpcSiteIngressGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_certified_hw: cdktf.stringToTerraform(struct!.awsCertifiedHw),
    allowed_vip_port: awsVpcSiteIngressGwAllowedVipPortToTerraform(struct!.allowedVipPort),
    az_nodes: cdktf.listMapper(awsVpcSiteIngressGwAzNodesToTerraform, true)(struct!.azNodes),
    performance_enhancement_mode: awsVpcSiteIngressGwPerformanceEnhancementModeToTerraform(struct!.performanceEnhancementMode),
  }
}


export function awsVpcSiteIngressGwToHclTerraform(struct?: AwsVpcSiteIngressGwOutputReference | AwsVpcSiteIngressGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_certified_hw: {
      value: cdktf.stringToHclTerraform(struct!.awsCertifiedHw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_vip_port: {
      value: awsVpcSiteIngressGwAllowedVipPortToHclTerraform(struct!.allowedVipPort),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressGwAllowedVipPortList",
    },
    az_nodes: {
      value: cdktf.listMapperHcl(awsVpcSiteIngressGwAzNodesToHclTerraform, true)(struct!.azNodes),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressGwAzNodesList",
    },
    performance_enhancement_mode: {
      value: awsVpcSiteIngressGwPerformanceEnhancementModeToHclTerraform(struct!.performanceEnhancementMode),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteIngressGwPerformanceEnhancementModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteIngressGwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteIngressGw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsCertifiedHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCertifiedHw = this._awsCertifiedHw;
    }
    if (this._allowedVipPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVipPort = this._allowedVipPort?.internalValue;
    }
    if (this._azNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azNodes = this._azNodes?.internalValue;
    }
    if (this._performanceEnhancementMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceEnhancementMode = this._performanceEnhancementMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteIngressGw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsCertifiedHw = undefined;
      this._allowedVipPort.internalValue = undefined;
      this._azNodes.internalValue = undefined;
      this._performanceEnhancementMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsCertifiedHw = value.awsCertifiedHw;
      this._allowedVipPort.internalValue = value.allowedVipPort;
      this._azNodes.internalValue = value.azNodes;
      this._performanceEnhancementMode.internalValue = value.performanceEnhancementMode;
    }
  }

  // aws_certified_hw - computed: false, optional: false, required: true
  private _awsCertifiedHw?: string; 
  public get awsCertifiedHw() {
    return this.getStringAttribute('aws_certified_hw');
  }
  public set awsCertifiedHw(value: string) {
    this._awsCertifiedHw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCertifiedHwInput() {
    return this._awsCertifiedHw;
  }

  // allowed_vip_port - computed: false, optional: true, required: false
  private _allowedVipPort = new AwsVpcSiteIngressGwAllowedVipPortOutputReference(this, "allowed_vip_port");
  public get allowedVipPort() {
    return this._allowedVipPort;
  }
  public putAllowedVipPort(value: AwsVpcSiteIngressGwAllowedVipPort) {
    this._allowedVipPort.internalValue = value;
  }
  public resetAllowedVipPort() {
    this._allowedVipPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVipPortInput() {
    return this._allowedVipPort.internalValue;
  }

  // az_nodes - computed: false, optional: false, required: true
  private _azNodes = new AwsVpcSiteIngressGwAzNodesList(this, "az_nodes", false);
  public get azNodes() {
    return this._azNodes;
  }
  public putAzNodes(value: AwsVpcSiteIngressGwAzNodes[] | cdktf.IResolvable) {
    this._azNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azNodesInput() {
    return this._azNodes.internalValue;
  }

  // performance_enhancement_mode - computed: false, optional: true, required: false
  private _performanceEnhancementMode = new AwsVpcSiteIngressGwPerformanceEnhancementModeOutputReference(this, "performance_enhancement_mode");
  public get performanceEnhancementMode() {
    return this._performanceEnhancementMode;
  }
  public putPerformanceEnhancementMode(value: AwsVpcSiteIngressGwPerformanceEnhancementMode) {
    this._performanceEnhancementMode.internalValue = value;
  }
  public resetPerformanceEnhancementMode() {
    this._performanceEnhancementMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceEnhancementModeInput() {
    return this._performanceEnhancementMode.internalValue;
  }
}
export interface AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_vega_upgrade_mode AwsVpcSite#disable_vega_upgrade_mode}
  */
  readonly disableVegaUpgradeMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#drain_max_unavailable_node_count AwsVpcSite#drain_max_unavailable_node_count}
  */
  readonly drainMaxUnavailableNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#drain_max_unavailable_node_percentage AwsVpcSite#drain_max_unavailable_node_percentage}
  */
  readonly drainMaxUnavailableNodePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#drain_node_timeout AwsVpcSite#drain_node_timeout}
  */
  readonly drainNodeTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#enable_vega_upgrade_mode AwsVpcSite#enable_vega_upgrade_mode}
  */
  readonly enableVegaUpgradeMode?: boolean | cdktf.IResolvable;
}

export function awsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct?: AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_vega_upgrade_mode: cdktf.booleanToTerraform(struct!.disableVegaUpgradeMode),
    drain_max_unavailable_node_count: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodeCount),
    drain_max_unavailable_node_percentage: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodePercentage),
    drain_node_timeout: cdktf.numberToTerraform(struct!.drainNodeTimeout),
    enable_vega_upgrade_mode: cdktf.booleanToTerraform(struct!.enableVegaUpgradeMode),
  }
}


export function awsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct?: AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_vega_upgrade_mode: {
      value: cdktf.booleanToHclTerraform(struct!.disableVegaUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drain_max_unavailable_node_count: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_max_unavailable_node_percentage: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_node_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainNodeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_vega_upgrade_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableVegaUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVegaUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVegaUpgradeMode = this._disableVegaUpgradeMode;
    }
    if (this._drainMaxUnavailableNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodeCount = this._drainMaxUnavailableNodeCount;
    }
    if (this._drainMaxUnavailableNodePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodePercentage = this._drainMaxUnavailableNodePercentage;
    }
    if (this._drainNodeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainNodeTimeout = this._drainNodeTimeout;
    }
    if (this._enableVegaUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVegaUpgradeMode = this._enableVegaUpgradeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVegaUpgradeMode = undefined;
      this._drainMaxUnavailableNodeCount = undefined;
      this._drainMaxUnavailableNodePercentage = undefined;
      this._drainNodeTimeout = undefined;
      this._enableVegaUpgradeMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVegaUpgradeMode = value.disableVegaUpgradeMode;
      this._drainMaxUnavailableNodeCount = value.drainMaxUnavailableNodeCount;
      this._drainMaxUnavailableNodePercentage = value.drainMaxUnavailableNodePercentage;
      this._drainNodeTimeout = value.drainNodeTimeout;
      this._enableVegaUpgradeMode = value.enableVegaUpgradeMode;
    }
  }

  // disable_vega_upgrade_mode - computed: false, optional: true, required: false
  private _disableVegaUpgradeMode?: boolean | cdktf.IResolvable; 
  public get disableVegaUpgradeMode() {
    return this.getBooleanAttribute('disable_vega_upgrade_mode');
  }
  public set disableVegaUpgradeMode(value: boolean | cdktf.IResolvable) {
    this._disableVegaUpgradeMode = value;
  }
  public resetDisableVegaUpgradeMode() {
    this._disableVegaUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVegaUpgradeModeInput() {
    return this._disableVegaUpgradeMode;
  }

  // drain_max_unavailable_node_count - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodeCount?: number; 
  public get drainMaxUnavailableNodeCount() {
    return this.getNumberAttribute('drain_max_unavailable_node_count');
  }
  public set drainMaxUnavailableNodeCount(value: number) {
    this._drainMaxUnavailableNodeCount = value;
  }
  public resetDrainMaxUnavailableNodeCount() {
    this._drainMaxUnavailableNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodeCountInput() {
    return this._drainMaxUnavailableNodeCount;
  }

  // drain_max_unavailable_node_percentage - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodePercentage?: number; 
  public get drainMaxUnavailableNodePercentage() {
    return this.getNumberAttribute('drain_max_unavailable_node_percentage');
  }
  public set drainMaxUnavailableNodePercentage(value: number) {
    this._drainMaxUnavailableNodePercentage = value;
  }
  public resetDrainMaxUnavailableNodePercentage() {
    this._drainMaxUnavailableNodePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodePercentageInput() {
    return this._drainMaxUnavailableNodePercentage;
  }

  // drain_node_timeout - computed: false, optional: false, required: true
  private _drainNodeTimeout?: number; 
  public get drainNodeTimeout() {
    return this.getNumberAttribute('drain_node_timeout');
  }
  public set drainNodeTimeout(value: number) {
    this._drainNodeTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNodeTimeoutInput() {
    return this._drainNodeTimeout;
  }

  // enable_vega_upgrade_mode - computed: false, optional: true, required: false
  private _enableVegaUpgradeMode?: boolean | cdktf.IResolvable; 
  public get enableVegaUpgradeMode() {
    return this.getBooleanAttribute('enable_vega_upgrade_mode');
  }
  public set enableVegaUpgradeMode(value: boolean | cdktf.IResolvable) {
    this._enableVegaUpgradeMode = value;
  }
  public resetEnableVegaUpgradeMode() {
    this._enableVegaUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVegaUpgradeModeInput() {
    return this._enableVegaUpgradeMode;
  }
}
export interface AwsVpcSiteKubernetesUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_upgrade_drain AwsVpcSite#disable_upgrade_drain}
  */
  readonly disableUpgradeDrain?: boolean | cdktf.IResolvable;
  /**
  * enable_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#enable_upgrade_drain AwsVpcSite#enable_upgrade_drain}
  */
  readonly enableUpgradeDrain?: AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrain;
}

export function awsVpcSiteKubernetesUpgradeDrainToTerraform(struct?: AwsVpcSiteKubernetesUpgradeDrainOutputReference | AwsVpcSiteKubernetesUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_upgrade_drain: cdktf.booleanToTerraform(struct!.disableUpgradeDrain),
    enable_upgrade_drain: awsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct!.enableUpgradeDrain),
  }
}


export function awsVpcSiteKubernetesUpgradeDrainToHclTerraform(struct?: AwsVpcSiteKubernetesUpgradeDrainOutputReference | AwsVpcSiteKubernetesUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_upgrade_drain: {
      value: cdktf.booleanToHclTerraform(struct!.disableUpgradeDrain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_upgrade_drain: {
      value: awsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct!.enableUpgradeDrain),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteKubernetesUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteKubernetesUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableUpgradeDrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUpgradeDrain = this._disableUpgradeDrain;
    }
    if (this._enableUpgradeDrain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUpgradeDrain = this._enableUpgradeDrain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteKubernetesUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableUpgradeDrain = undefined;
      this._enableUpgradeDrain.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableUpgradeDrain = value.disableUpgradeDrain;
      this._enableUpgradeDrain.internalValue = value.enableUpgradeDrain;
    }
  }

  // disable_upgrade_drain - computed: false, optional: true, required: false
  private _disableUpgradeDrain?: boolean | cdktf.IResolvable; 
  public get disableUpgradeDrain() {
    return this.getBooleanAttribute('disable_upgrade_drain');
  }
  public set disableUpgradeDrain(value: boolean | cdktf.IResolvable) {
    this._disableUpgradeDrain = value;
  }
  public resetDisableUpgradeDrain() {
    this._disableUpgradeDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUpgradeDrainInput() {
    return this._disableUpgradeDrain;
  }

  // enable_upgrade_drain - computed: false, optional: true, required: false
  private _enableUpgradeDrain = new AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference(this, "enable_upgrade_drain");
  public get enableUpgradeDrain() {
    return this._enableUpgradeDrain;
  }
  public putEnableUpgradeDrain(value: AwsVpcSiteKubernetesUpgradeDrainEnableUpgradeDrain) {
    this._enableUpgradeDrain.internalValue = value;
  }
  public resetEnableUpgradeDrain() {
    this._enableUpgradeDrain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUpgradeDrainInput() {
    return this._enableUpgradeDrain.internalValue;
  }
}
export interface AwsVpcSiteLogReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteLogReceiverToTerraform(struct?: AwsVpcSiteLogReceiverOutputReference | AwsVpcSiteLogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteLogReceiverToHclTerraform(struct?: AwsVpcSiteLogReceiverOutputReference | AwsVpcSiteLogReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteLogReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteLogReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteLogReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AwsVpcSiteOfflineSurvivabilityMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#enable_offline_survivability_mode AwsVpcSite#enable_offline_survivability_mode}
  */
  readonly enableOfflineSurvivabilityMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_offline_survivability_mode AwsVpcSite#no_offline_survivability_mode}
  */
  readonly noOfflineSurvivabilityMode?: boolean | cdktf.IResolvable;
}

export function awsVpcSiteOfflineSurvivabilityModeToTerraform(struct?: AwsVpcSiteOfflineSurvivabilityModeOutputReference | AwsVpcSiteOfflineSurvivabilityMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_offline_survivability_mode: cdktf.booleanToTerraform(struct!.enableOfflineSurvivabilityMode),
    no_offline_survivability_mode: cdktf.booleanToTerraform(struct!.noOfflineSurvivabilityMode),
  }
}


export function awsVpcSiteOfflineSurvivabilityModeToHclTerraform(struct?: AwsVpcSiteOfflineSurvivabilityModeOutputReference | AwsVpcSiteOfflineSurvivabilityMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_offline_survivability_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableOfflineSurvivabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_offline_survivability_mode: {
      value: cdktf.booleanToHclTerraform(struct!.noOfflineSurvivabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteOfflineSurvivabilityModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteOfflineSurvivabilityMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOfflineSurvivabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOfflineSurvivabilityMode = this._enableOfflineSurvivabilityMode;
    }
    if (this._noOfflineSurvivabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOfflineSurvivabilityMode = this._noOfflineSurvivabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteOfflineSurvivabilityMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOfflineSurvivabilityMode = undefined;
      this._noOfflineSurvivabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOfflineSurvivabilityMode = value.enableOfflineSurvivabilityMode;
      this._noOfflineSurvivabilityMode = value.noOfflineSurvivabilityMode;
    }
  }

  // enable_offline_survivability_mode - computed: false, optional: true, required: false
  private _enableOfflineSurvivabilityMode?: boolean | cdktf.IResolvable; 
  public get enableOfflineSurvivabilityMode() {
    return this.getBooleanAttribute('enable_offline_survivability_mode');
  }
  public set enableOfflineSurvivabilityMode(value: boolean | cdktf.IResolvable) {
    this._enableOfflineSurvivabilityMode = value;
  }
  public resetEnableOfflineSurvivabilityMode() {
    this._enableOfflineSurvivabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOfflineSurvivabilityModeInput() {
    return this._enableOfflineSurvivabilityMode;
  }

  // no_offline_survivability_mode - computed: false, optional: true, required: false
  private _noOfflineSurvivabilityMode?: boolean | cdktf.IResolvable; 
  public get noOfflineSurvivabilityMode() {
    return this.getBooleanAttribute('no_offline_survivability_mode');
  }
  public set noOfflineSurvivabilityMode(value: boolean | cdktf.IResolvable) {
    this._noOfflineSurvivabilityMode = value;
  }
  public resetNoOfflineSurvivabilityMode() {
    this._noOfflineSurvivabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOfflineSurvivabilityModeInput() {
    return this._noOfflineSurvivabilityMode;
  }
}
export interface AwsVpcSiteOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#default_os_version AwsVpcSite#default_os_version}
  */
  readonly defaultOsVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#operating_system_version AwsVpcSite#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
}

export function awsVpcSiteOsToTerraform(struct?: AwsVpcSiteOsOutputReference | AwsVpcSiteOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_os_version: cdktf.booleanToTerraform(struct!.defaultOsVersion),
    operating_system_version: cdktf.stringToTerraform(struct!.operatingSystemVersion),
  }
}


export function awsVpcSiteOsToHclTerraform(struct?: AwsVpcSiteOsOutputReference | AwsVpcSiteOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_os_version: {
      value: cdktf.booleanToHclTerraform(struct!.defaultOsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operating_system_version: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultOsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOsVersion = this._defaultOsVersion;
    }
    if (this._operatingSystemVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemVersion = this._operatingSystemVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultOsVersion = undefined;
      this._operatingSystemVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultOsVersion = value.defaultOsVersion;
      this._operatingSystemVersion = value.operatingSystemVersion;
    }
  }

  // default_os_version - computed: false, optional: true, required: false
  private _defaultOsVersion?: boolean | cdktf.IResolvable; 
  public get defaultOsVersion() {
    return this.getBooleanAttribute('default_os_version');
  }
  public set defaultOsVersion(value: boolean | cdktf.IResolvable) {
    this._defaultOsVersion = value;
  }
  public resetDefaultOsVersion() {
    this._defaultOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOsVersionInput() {
    return this._defaultOsVersion;
  }

  // operating_system_version - computed: false, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }
}
export interface AwsVpcSitePrivateConnectivityCloudLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSitePrivateConnectivityCloudLinkToTerraform(struct?: AwsVpcSitePrivateConnectivityCloudLinkOutputReference | AwsVpcSitePrivateConnectivityCloudLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSitePrivateConnectivityCloudLinkToHclTerraform(struct?: AwsVpcSitePrivateConnectivityCloudLinkOutputReference | AwsVpcSitePrivateConnectivityCloudLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSitePrivateConnectivityCloudLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSitePrivateConnectivityCloudLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSitePrivateConnectivityCloudLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AwsVpcSitePrivateConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#inside AwsVpcSite#inside}
  */
  readonly inside?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#outside AwsVpcSite#outside}
  */
  readonly outside?: boolean | cdktf.IResolvable;
  /**
  * cloud_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#cloud_link AwsVpcSite#cloud_link}
  */
  readonly cloudLink: AwsVpcSitePrivateConnectivityCloudLink;
}

export function awsVpcSitePrivateConnectivityToTerraform(struct?: AwsVpcSitePrivateConnectivityOutputReference | AwsVpcSitePrivateConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.booleanToTerraform(struct!.inside),
    outside: cdktf.booleanToTerraform(struct!.outside),
    cloud_link: awsVpcSitePrivateConnectivityCloudLinkToTerraform(struct!.cloudLink),
  }
}


export function awsVpcSitePrivateConnectivityToHclTerraform(struct?: AwsVpcSitePrivateConnectivityOutputReference | AwsVpcSitePrivateConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.booleanToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside: {
      value: cdktf.booleanToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_link: {
      value: awsVpcSitePrivateConnectivityCloudLinkToHclTerraform(struct!.cloudLink),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSitePrivateConnectivityCloudLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSitePrivateConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSitePrivateConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._cloudLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLink = this._cloudLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSitePrivateConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
      this._cloudLink.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
      this._cloudLink.internalValue = value.cloudLink;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: boolean | cdktf.IResolvable; 
  public get inside() {
    return this.getBooleanAttribute('inside');
  }
  public set inside(value: boolean | cdktf.IResolvable) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: boolean | cdktf.IResolvable; 
  public get outside() {
    return this.getBooleanAttribute('outside');
  }
  public set outside(value: boolean | cdktf.IResolvable) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // cloud_link - computed: false, optional: false, required: true
  private _cloudLink = new AwsVpcSitePrivateConnectivityCloudLinkOutputReference(this, "cloud_link");
  public get cloudLink() {
    return this._cloudLink;
  }
  public putCloudLink(value: AwsVpcSitePrivateConnectivityCloudLink) {
    this._cloudLink.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLinkInput() {
    return this._cloudLink.internalValue;
  }
}
export interface AwsVpcSiteSw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#default_sw_version AwsVpcSite#default_sw_version}
  */
  readonly defaultSwVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#volterra_software_version AwsVpcSite#volterra_software_version}
  */
  readonly volterraSoftwareVersion?: string;
}

export function awsVpcSiteSwToTerraform(struct?: AwsVpcSiteSwOutputReference | AwsVpcSiteSw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_sw_version: cdktf.booleanToTerraform(struct!.defaultSwVersion),
    volterra_software_version: cdktf.stringToTerraform(struct!.volterraSoftwareVersion),
  }
}


export function awsVpcSiteSwToHclTerraform(struct?: AwsVpcSiteSwOutputReference | AwsVpcSiteSw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_sw_version: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSwVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_software_version: {
      value: cdktf.stringToHclTerraform(struct!.volterraSoftwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteSwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteSw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSwVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSwVersion = this._defaultSwVersion;
    }
    if (this._volterraSoftwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSoftwareVersion = this._volterraSoftwareVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteSw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSwVersion = undefined;
      this._volterraSoftwareVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSwVersion = value.defaultSwVersion;
      this._volterraSoftwareVersion = value.volterraSoftwareVersion;
    }
  }

  // default_sw_version - computed: false, optional: true, required: false
  private _defaultSwVersion?: boolean | cdktf.IResolvable; 
  public get defaultSwVersion() {
    return this.getBooleanAttribute('default_sw_version');
  }
  public set defaultSwVersion(value: boolean | cdktf.IResolvable) {
    this._defaultSwVersion = value;
  }
  public resetDefaultSwVersion() {
    this._defaultSwVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSwVersionInput() {
    return this._defaultSwVersion;
  }

  // volterra_software_version - computed: false, optional: true, required: false
  private _volterraSoftwareVersion?: string; 
  public get volterraSoftwareVersion() {
    return this.getStringAttribute('volterra_software_version');
  }
  public set volterraSoftwareVersion(value: string) {
    this._volterraSoftwareVersion = value;
  }
  public resetVolterraSoftwareVersion() {
    this._volterraSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSoftwareVersionInput() {
    return this._volterraSoftwareVersion;
  }
}
export interface AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#enhanced_firewall_policies AwsVpcSite#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function awsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesToTerraform(struct?: AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesOutputReference | AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(awsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function awsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesToHclTerraform(struct?: AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesOutputReference | AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(awsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enhancedFirewallPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enhancedFirewallPolicies.internalValue = value.enhancedFirewallPolicies;
    }
  }

  // enhanced_firewall_policies - computed: false, optional: false, required: true
  private _enhancedFirewallPolicies = new AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: AwsVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteVoltstackClusterActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#forward_proxy_policies AwsVpcSite#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function awsVpcSiteVoltstackClusterActiveForwardProxyPoliciesToTerraform(struct?: AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesOutputReference | AwsVpcSiteVoltstackClusterActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(awsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function awsVpcSiteVoltstackClusterActiveForwardProxyPoliciesToHclTerraform(struct?: AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesOutputReference | AwsVpcSiteVoltstackClusterActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(awsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterActiveForwardProxyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardProxyPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardProxyPolicies.internalValue = value.forwardProxyPolicies;
    }
  }

  // forward_proxy_policies - computed: false, optional: false, required: true
  private _forwardProxyPolicies = new AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: AwsVpcSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesToTerraform(struct?: AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesToHclTerraform(struct?: AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesOutputReference {
    return new AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteVoltstackClusterActiveNetworkPolicies {
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#network_policies AwsVpcSite#network_policies}
  */
  readonly networkPolicies: AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable;
}

export function awsVpcSiteVoltstackClusterActiveNetworkPoliciesToTerraform(struct?: AwsVpcSiteVoltstackClusterActiveNetworkPoliciesOutputReference | AwsVpcSiteVoltstackClusterActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policies: cdktf.listMapper(awsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesToTerraform, true)(struct!.networkPolicies),
  }
}


export function awsVpcSiteVoltstackClusterActiveNetworkPoliciesToHclTerraform(struct?: AwsVpcSiteVoltstackClusterActiveNetworkPoliciesOutputReference | AwsVpcSiteVoltstackClusterActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policies: {
      value: cdktf.listMapperHcl(awsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesToHclTerraform, true)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterActiveNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterActiveNetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterActiveNetworkPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPolicies.internalValue = value.networkPolicies;
    }
  }

  // network_policies - computed: false, optional: false, required: true
  private _networkPolicies = new AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: AwsVpcSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }
}
export interface AwsVpcSiteVoltstackClusterAllowedVipPortCustomPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#port_ranges AwsVpcSite#port_ranges}
  */
  readonly portRanges: string;
}

export function awsVpcSiteVoltstackClusterAllowedVipPortCustomPortsToTerraform(struct?: AwsVpcSiteVoltstackClusterAllowedVipPortCustomPortsOutputReference | AwsVpcSiteVoltstackClusterAllowedVipPortCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function awsVpcSiteVoltstackClusterAllowedVipPortCustomPortsToHclTerraform(struct?: AwsVpcSiteVoltstackClusterAllowedVipPortCustomPortsOutputReference | AwsVpcSiteVoltstackClusterAllowedVipPortCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterAllowedVipPortCustomPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterAllowedVipPortCustomPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterAllowedVipPortCustomPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portRanges = value.portRanges;
    }
  }

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }
}
export interface AwsVpcSiteVoltstackClusterAllowedVipPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_allowed_vip_port AwsVpcSite#disable_allowed_vip_port}
  */
  readonly disableAllowedVipPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_http_https_port AwsVpcSite#use_http_https_port}
  */
  readonly useHttpHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_http_port AwsVpcSite#use_http_port}
  */
  readonly useHttpPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_https_port AwsVpcSite#use_https_port}
  */
  readonly useHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * custom_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_ports AwsVpcSite#custom_ports}
  */
  readonly customPorts?: AwsVpcSiteVoltstackClusterAllowedVipPortCustomPorts;
}

export function awsVpcSiteVoltstackClusterAllowedVipPortToTerraform(struct?: AwsVpcSiteVoltstackClusterAllowedVipPortOutputReference | AwsVpcSiteVoltstackClusterAllowedVipPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_allowed_vip_port: cdktf.booleanToTerraform(struct!.disableAllowedVipPort),
    use_http_https_port: cdktf.booleanToTerraform(struct!.useHttpHttpsPort),
    use_http_port: cdktf.booleanToTerraform(struct!.useHttpPort),
    use_https_port: cdktf.booleanToTerraform(struct!.useHttpsPort),
    custom_ports: awsVpcSiteVoltstackClusterAllowedVipPortCustomPortsToTerraform(struct!.customPorts),
  }
}


export function awsVpcSiteVoltstackClusterAllowedVipPortToHclTerraform(struct?: AwsVpcSiteVoltstackClusterAllowedVipPortOutputReference | AwsVpcSiteVoltstackClusterAllowedVipPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_allowed_vip_port: {
      value: cdktf.booleanToHclTerraform(struct!.disableAllowedVipPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_ports: {
      value: awsVpcSiteVoltstackClusterAllowedVipPortCustomPortsToHclTerraform(struct!.customPorts),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterAllowedVipPortCustomPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterAllowedVipPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterAllowedVipPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAllowedVipPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAllowedVipPort = this._disableAllowedVipPort;
    }
    if (this._useHttpHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpHttpsPort = this._useHttpHttpsPort;
    }
    if (this._useHttpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpPort = this._useHttpPort;
    }
    if (this._useHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpsPort = this._useHttpsPort;
    }
    if (this._customPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPorts = this._customPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterAllowedVipPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAllowedVipPort = undefined;
      this._useHttpHttpsPort = undefined;
      this._useHttpPort = undefined;
      this._useHttpsPort = undefined;
      this._customPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAllowedVipPort = value.disableAllowedVipPort;
      this._useHttpHttpsPort = value.useHttpHttpsPort;
      this._useHttpPort = value.useHttpPort;
      this._useHttpsPort = value.useHttpsPort;
      this._customPorts.internalValue = value.customPorts;
    }
  }

  // disable_allowed_vip_port - computed: false, optional: true, required: false
  private _disableAllowedVipPort?: boolean | cdktf.IResolvable; 
  public get disableAllowedVipPort() {
    return this.getBooleanAttribute('disable_allowed_vip_port');
  }
  public set disableAllowedVipPort(value: boolean | cdktf.IResolvable) {
    this._disableAllowedVipPort = value;
  }
  public resetDisableAllowedVipPort() {
    this._disableAllowedVipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllowedVipPortInput() {
    return this._disableAllowedVipPort;
  }

  // use_http_https_port - computed: false, optional: true, required: false
  private _useHttpHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpHttpsPort() {
    return this.getBooleanAttribute('use_http_https_port');
  }
  public set useHttpHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpHttpsPort = value;
  }
  public resetUseHttpHttpsPort() {
    this._useHttpHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpHttpsPortInput() {
    return this._useHttpHttpsPort;
  }

  // use_http_port - computed: false, optional: true, required: false
  private _useHttpPort?: boolean | cdktf.IResolvable; 
  public get useHttpPort() {
    return this.getBooleanAttribute('use_http_port');
  }
  public set useHttpPort(value: boolean | cdktf.IResolvable) {
    this._useHttpPort = value;
  }
  public resetUseHttpPort() {
    this._useHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpPortInput() {
    return this._useHttpPort;
  }

  // use_https_port - computed: false, optional: true, required: false
  private _useHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpsPort() {
    return this.getBooleanAttribute('use_https_port');
  }
  public set useHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpsPort = value;
  }
  public resetUseHttpsPort() {
    this._useHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpsPortInput() {
    return this._useHttpsPort;
  }

  // custom_ports - computed: false, optional: true, required: false
  private _customPorts = new AwsVpcSiteVoltstackClusterAllowedVipPortCustomPortsOutputReference(this, "custom_ports");
  public get customPorts() {
    return this._customPorts;
  }
  public putCustomPorts(value: AwsVpcSiteVoltstackClusterAllowedVipPortCustomPorts) {
    this._customPorts.internalValue = value;
  }
  public resetCustomPorts() {
    this._customPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortsInput() {
    return this._customPorts.internalValue;
  }
}
export interface AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv4 AwsVpcSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#ipv6 AwsVpcSite#ipv6}
  */
  readonly ipv6?: string;
}

export function awsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParamToTerraform(struct?: AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParamOutputReference | AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function awsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParamToHclTerraform(struct?: AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParamOutputReference | AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AwsVpcSiteVoltstackClusterAzNodesLocalSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#existing_subnet_id AwsVpcSite#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#subnet_param AwsVpcSite#subnet_param}
  */
  readonly subnetParam?: AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParam;
}

export function awsVpcSiteVoltstackClusterAzNodesLocalSubnetToTerraform(struct?: AwsVpcSiteVoltstackClusterAzNodesLocalSubnetOutputReference | AwsVpcSiteVoltstackClusterAzNodesLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: awsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function awsVpcSiteVoltstackClusterAzNodesLocalSubnetToHclTerraform(struct?: AwsVpcSiteVoltstackClusterAzNodesLocalSubnetOutputReference | AwsVpcSiteVoltstackClusterAzNodesLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: awsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterAzNodesLocalSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterAzNodesLocalSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterAzNodesLocalSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AwsVpcSiteVoltstackClusterAzNodesLocalSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AwsVpcSiteVoltstackClusterAzNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#aws_az_name AwsVpcSite#aws_az_name}
  */
  readonly awsAzName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disk_size AwsVpcSite#disk_size}
  */
  readonly diskSize?: number;
  /**
  * local_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#local_subnet AwsVpcSite#local_subnet}
  */
  readonly localSubnet?: AwsVpcSiteVoltstackClusterAzNodesLocalSubnet;
}

export function awsVpcSiteVoltstackClusterAzNodesToTerraform(struct?: AwsVpcSiteVoltstackClusterAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_az_name: cdktf.stringToTerraform(struct!.awsAzName),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    local_subnet: awsVpcSiteVoltstackClusterAzNodesLocalSubnetToTerraform(struct!.localSubnet),
  }
}


export function awsVpcSiteVoltstackClusterAzNodesToHclTerraform(struct?: AwsVpcSiteVoltstackClusterAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_az_name: {
      value: cdktf.stringToHclTerraform(struct!.awsAzName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_subnet: {
      value: awsVpcSiteVoltstackClusterAzNodesLocalSubnetToHclTerraform(struct!.localSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterAzNodesLocalSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterAzNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteVoltstackClusterAzNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAzName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAzName = this._awsAzName;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._localSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnet = this._localSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterAzNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAzName = undefined;
      this._diskSize = undefined;
      this._localSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAzName = value.awsAzName;
      this._diskSize = value.diskSize;
      this._localSubnet.internalValue = value.localSubnet;
    }
  }

  // aws_az_name - computed: false, optional: false, required: true
  private _awsAzName?: string; 
  public get awsAzName() {
    return this.getStringAttribute('aws_az_name');
  }
  public set awsAzName(value: string) {
    this._awsAzName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAzNameInput() {
    return this._awsAzName;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // local_subnet - computed: false, optional: true, required: false
  private _localSubnet = new AwsVpcSiteVoltstackClusterAzNodesLocalSubnetOutputReference(this, "local_subnet");
  public get localSubnet() {
    return this._localSubnet;
  }
  public putLocalSubnet(value: AwsVpcSiteVoltstackClusterAzNodesLocalSubnet) {
    this._localSubnet.internalValue = value;
  }
  public resetLocalSubnet() {
    this._localSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet.internalValue;
  }
}

export class AwsVpcSiteVoltstackClusterAzNodesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteVoltstackClusterAzNodes[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteVoltstackClusterAzNodesOutputReference {
    return new AwsVpcSiteVoltstackClusterAzNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteVoltstackClusterDcClusterGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tenant AwsVpcSite#tenant}
  */
  readonly tenant?: string;
}

export function awsVpcSiteVoltstackClusterDcClusterGroupToTerraform(struct?: AwsVpcSiteVoltstackClusterDcClusterGroupOutputReference | AwsVpcSiteVoltstackClusterDcClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function awsVpcSiteVoltstackClusterDcClusterGroupToHclTerraform(struct?: AwsVpcSiteVoltstackClusterDcClusterGroupOutputReference | AwsVpcSiteVoltstackClusterDcClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterDcClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterDcClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterDcClusterGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#hash_algorithms AwsVpcSite#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling {
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#decryption_provider AwsVpcSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#location AwsVpcSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#store_provider AwsVpcSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#decryption_provider AwsVpcSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#location AwsVpcSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#store_provider AwsVpcSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#provider AwsVpcSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#url AwsVpcSite#url}
  */
  readonly url: string;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
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

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined) {
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
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#key AwsVpcSite#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#location AwsVpcSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#provider AwsVpcSite#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#secret_encoding AwsVpcSite#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#version AwsVpcSite#version}
  */
  readonly version?: number;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name: string;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#secret_encoding_type AwsVpcSite#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#blindfold_secret_info AwsVpcSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#blindfold_secret_info_internal AwsVpcSite#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#clear_secret_info AwsVpcSite#clear_secret_info}
  */
  readonly clearSecretInfo?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#vault_secret_info AwsVpcSite#vault_secret_info}
  */
  readonly vaultSecretInfo?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#wingman_secret_info AwsVpcSite#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults {
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#certificate_url AwsVpcSite#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#description AwsVpcSite#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_hash_algorithms AwsVpcSite#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_ocsp_stapling AwsVpcSite#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#private_key AwsVpcSite#private_key}
  */
  readonly privateKey: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#use_system_defaults AwsVpcSite#use_system_defaults}
  */
  readonly useSystemDefaults?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingList",
    },
    private_key: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyList",
    },
    use_system_defaults: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#exact_value AwsVpcSite#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#regex_value AwsVpcSite#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#suffix_value AwsVpcSite#suffix_value}
  */
  readonly suffixValue?: string;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#disable_interception AwsVpcSite#disable_interception}
  */
  readonly disableInterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#enable_interception AwsVpcSite#enable_interception}
  */
  readonly enableInterception?: boolean | cdktf.IResolvable;
  /**
  * domain_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#domain_match AwsVpcSite#domain_match}
  */
  readonly domainMatch: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_interception: cdktf.booleanToTerraform(struct!.disableInterception),
    enable_interception: cdktf.booleanToTerraform(struct!.enableInterception),
    domain_match: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct!.domainMatch),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_interception: {
      value: cdktf.booleanToHclTerraform(struct!.disableInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_interception: {
      value: cdktf.booleanToHclTerraform(struct!.enableInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_match: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct!.domainMatch),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInterception = this._disableInterception;
    }
    if (this._enableInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterception = this._enableInterception;
    }
    if (this._domainMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatch = this._domainMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableInterception = undefined;
      this._enableInterception = undefined;
      this._domainMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableInterception = value.disableInterception;
      this._enableInterception = value.enableInterception;
      this._domainMatch.internalValue = value.domainMatch;
    }
  }

  // disable_interception - computed: false, optional: true, required: false
  private _disableInterception?: boolean | cdktf.IResolvable; 
  public get disableInterception() {
    return this.getBooleanAttribute('disable_interception');
  }
  public set disableInterception(value: boolean | cdktf.IResolvable) {
    this._disableInterception = value;
  }
  public resetDisableInterception() {
    this._disableInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInterceptionInput() {
    return this._disableInterception;
  }

  // enable_interception - computed: false, optional: true, required: false
  private _enableInterception?: boolean | cdktf.IResolvable; 
  public get enableInterception() {
    return this.getBooleanAttribute('enable_interception');
  }
  public set enableInterception(value: boolean | cdktf.IResolvable) {
    this._enableInterception = value;
  }
  public resetEnableInterception() {
    this._enableInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterceptionInput() {
    return this._enableInterception;
  }

  // domain_match - computed: false, optional: false, required: true
  private _domainMatch = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference(this, "domain_match");
  public get domainMatch() {
    return this._domainMatch;
  }
  public putDomainMatch(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch) {
    this._domainMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatchInput() {
    return this._domainMatch.internalValue;
  }
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList extends cdktf.ComplexList {
  public internalValue? : AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable

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
  public get(index: number): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference {
    return new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy {
  /**
  * interception_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#interception_rules AwsVpcSite#interception_rules}
  */
  readonly interceptionRules: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interception_rules: cdktf.listMapper(awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform, true)(struct!.interceptionRules),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interception_rules: {
      value: cdktf.listMapperHcl(awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform, true)(struct!.interceptionRules),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interceptionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptionRules = this._interceptionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interceptionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interceptionRules.internalValue = value.interceptionRules;
    }
  }

  // interception_rules - computed: false, optional: false, required: true
  private _interceptionRules = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList(this, "interception_rules", false);
  public get interceptionRules() {
    return this._interceptionRules;
  }
  public putInterceptionRules(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable) {
    this._interceptionRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptionRulesInput() {
    return this._interceptionRules.internalValue;
  }
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#enable_for_all_domains AwsVpcSite#enable_for_all_domains}
  */
  readonly enableForAllDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#trusted_ca_url AwsVpcSite#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#volterra_certificate AwsVpcSite#volterra_certificate}
  */
  readonly volterraCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#volterra_trusted_ca AwsVpcSite#volterra_trusted_ca}
  */
  readonly volterraTrustedCa?: boolean | cdktf.IResolvable;
  /**
  * custom_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#custom_certificate AwsVpcSite#custom_certificate}
  */
  readonly customCertificate?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#policy AwsVpcSite#policy}
  */
  readonly policy?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_for_all_domains: cdktf.booleanToTerraform(struct!.enableForAllDomains),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    volterra_certificate: cdktf.booleanToTerraform(struct!.volterraCertificate),
    volterra_trusted_ca: cdktf.booleanToTerraform(struct!.volterraTrustedCa),
    custom_certificate: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct!.customCertificate),
    policy: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct!.policy),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_for_all_domains: {
      value: cdktf.booleanToHclTerraform(struct!.enableForAllDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volterra_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.volterraCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_trusted_ca: {
      value: cdktf.booleanToHclTerraform(struct!.volterraTrustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_certificate: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct!.customCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateList",
    },
    policy: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableForAllDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableForAllDomains = this._enableForAllDomains;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._volterraCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraCertificate = this._volterraCertificate;
    }
    if (this._volterraTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraTrustedCa = this._volterraTrustedCa;
    }
    if (this._customCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertificate = this._customCertificate?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableForAllDomains = undefined;
      this._trustedCaUrl = undefined;
      this._volterraCertificate = undefined;
      this._volterraTrustedCa = undefined;
      this._customCertificate.internalValue = undefined;
      this._policy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableForAllDomains = value.enableForAllDomains;
      this._trustedCaUrl = value.trustedCaUrl;
      this._volterraCertificate = value.volterraCertificate;
      this._volterraTrustedCa = value.volterraTrustedCa;
      this._customCertificate.internalValue = value.customCertificate;
      this._policy.internalValue = value.policy;
    }
  }

  // enable_for_all_domains - computed: false, optional: true, required: false
  private _enableForAllDomains?: boolean | cdktf.IResolvable; 
  public get enableForAllDomains() {
    return this.getBooleanAttribute('enable_for_all_domains');
  }
  public set enableForAllDomains(value: boolean | cdktf.IResolvable) {
    this._enableForAllDomains = value;
  }
  public resetEnableForAllDomains() {
    this._enableForAllDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForAllDomainsInput() {
    return this._enableForAllDomains;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // volterra_certificate - computed: false, optional: true, required: false
  private _volterraCertificate?: boolean | cdktf.IResolvable; 
  public get volterraCertificate() {
    return this.getBooleanAttribute('volterra_certificate');
  }
  public set volterraCertificate(value: boolean | cdktf.IResolvable) {
    this._volterraCertificate = value;
  }
  public resetVolterraCertificate() {
    this._volterraCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraCertificateInput() {
    return this._volterraCertificate;
  }

  // volterra_trusted_ca - computed: false, optional: true, required: false
  private _volterraTrustedCa?: boolean | cdktf.IResolvable; 
  public get volterraTrustedCa() {
    return this.getBooleanAttribute('volterra_trusted_ca');
  }
  public set volterraTrustedCa(value: boolean | cdktf.IResolvable) {
    this._volterraTrustedCa = value;
  }
  public resetVolterraTrustedCa() {
    this._volterraTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraTrustedCaInput() {
    return this._volterraTrustedCa;
  }

  // custom_certificate - computed: false, optional: true, required: false
  private _customCertificate = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference(this, "custom_certificate");
  public get customCertificate() {
    return this._customCertificate;
  }
  public putCustomCertificate(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate) {
    this._customCertificate.internalValue = value;
  }
  public resetCustomCertificate() {
    this._customCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateInput() {
    return this._customCertificate.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#connection_timeout AwsVpcSite#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#max_connect_attempts AwsVpcSite#max_connect_attempts}
  */
  readonly maxConnectAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#no_interception AwsVpcSite#no_interception}
  */
  readonly noInterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#white_listed_ports AwsVpcSite#white_listed_ports}
  */
  readonly whiteListedPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#white_listed_prefixes AwsVpcSite#white_listed_prefixes}
  */
  readonly whiteListedPrefixes?: string[];
  /**
  * tls_intercept block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/aws_vpc_site#tls_intercept AwsVpcSite#tls_intercept}
  */
  readonly tlsIntercept?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept;
}

export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    max_connect_attempts: cdktf.numberToTerraform(struct!.maxConnectAttempts),
    no_interception: cdktf.booleanToTerraform(struct!.noInterception),
    white_listed_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.whiteListedPorts),
    white_listed_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whiteListedPrefixes),
    tls_intercept: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct!.tlsIntercept),
  }
}


export function awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct?: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connect_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_interception: {
      value: cdktf.booleanToHclTerraform(struct!.noInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    white_listed_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.whiteListedPorts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    white_listed_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whiteListedPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_intercept: {
      value: awsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct!.tlsIntercept),
      isBlock: true,
      type: "list",
      storageClassType: "AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._maxConnectAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectAttempts = this._maxConnectAttempts;
    }
    if (this._noInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInterception = this._noInterception;
    }
    if (this._whiteListedPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListedPorts = this._whiteListedPorts;
    }
    if (this._whiteListedPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListedPrefixes = this._whiteListedPrefixes;
    }
    if (this._tlsIntercept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsIntercept = this._tlsIntercept?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionTimeout = undefined;
      this._maxConnectAttempts = undefined;
      this._noInterception = undefined;
      this._whiteListedPorts = undefined;
      this._whiteListedPrefixes = undefined;
      this._tlsIntercept.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionTimeout = value.connectionTimeout;
      this._maxConnectAttempts = value.maxConnectAttempts;
      this._noInterception = value.noInterception;
      this._whiteListedPorts = value.whiteListedPorts;
      this._whiteListedPrefixes = value.whiteListedPrefixes;
      this._tlsIntercept.internalValue = value.tlsIntercept;
    }
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // max_connect_attempts - computed: false, optional: true, required: false
  private _maxConnectAttempts?: number; 
  public get maxConnectAttempts() {
    return this.getNumberAttribute('max_connect_attempts');
  }
  public set maxConnectAttempts(value: number) {
    this._maxConnectAttempts = value;
  }
  public resetMaxConnectAttempts() {
    this._maxConnectAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectAttemptsInput() {
    return this._maxConnectAttempts;
  }

  // no_interception - computed: false, optional: true, required: false
  private _noInterception?: boolean | cdktf.IResolvable; 
  public get noInterception() {
    return this.getBooleanAttribute('no_interception');
  }
  public set noInterception(value: boolean | cdktf.IResolvable) {
    this._noInterception = value;
  }
  public resetNoInterception() {
    this._noInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInterceptionInput() {
    return this._noInterception;
  }

  // white_listed_ports - computed: false, optional: true, required: false
  private _whiteListedPorts?: number[]; 
  public get whiteListedPorts() {
    return this.getNumberListAttribute('white_listed_ports');
  }
  public set whiteListedPorts(value: number[]) {
    this._whiteListedPorts = value;
  }
  public resetWhiteListedPorts() {
    this._whiteListedPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedPortsInput() {
    return this._whiteListedPorts;
  }

  // white_listed_prefixes - computed: false, optional: true, required: false
  private _whiteListedPrefixes?: string[]; 
  public get whiteListedPrefixes() {
    return this.getListAttribute('white_listed_prefixes');
  }
  public set whiteListedPrefixes(value: string[]) {
    this._whiteListedPrefixes = value;
  }
  public resetWhiteListedPrefixes() {
    this._whiteListedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedPrefixesInput() {
    return this._whiteListedPrefixes;
  }

  // tls_intercept - computed: false, optional: true, required: false
  private _tlsIntercept = new AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference(this, "tls_intercept");
  public get tlsIntercept() {
    return this._tlsIntercept;
  }
  public putTlsIntercept(value: AwsVpcSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept) {
    this._tlsIntercept.internalValue = value;
  }
  public resetTlsIntercept() {
    this._tlsIntercept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInterceptInput() {
    return this._tlsIntercept.internalValue;
  }
}
