// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#annotations CloudLink#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#description CloudLink#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#disable CloudLink#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#disabled CloudLink#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#id CloudLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#labels CloudLink#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#name CloudLink#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#namespace CloudLink#namespace}
  */
  readonly namespace: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#aws CloudLink#aws}
  */
  readonly aws?: CloudLinkAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#azure CloudLink#azure}
  */
  readonly azure?: CloudLinkAzure;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#enabled CloudLink#enabled}
  */
  readonly enabled?: CloudLinkEnabled;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#gcp CloudLink#gcp}
  */
  readonly gcp?: CloudLinkGcp;
}
export interface CloudLinkAwsAwsCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#name CloudLink#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#namespace CloudLink#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#tenant CloudLink#tenant}
  */
  readonly tenant?: string;
}

export function cloudLinkAwsAwsCredToTerraform(struct?: CloudLinkAwsAwsCredOutputReference | CloudLinkAwsAwsCred): any {
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


export function cloudLinkAwsAwsCredToHclTerraform(struct?: CloudLinkAwsAwsCredOutputReference | CloudLinkAwsAwsCred): any {
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

export class CloudLinkAwsAwsCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsAwsCred | undefined {
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

  public set internalValue(value: CloudLinkAwsAwsCred | undefined) {
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
export interface CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#decryption_provider CloudLink#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#location CloudLink#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#store_provider CloudLink#store_provider}
  */
  readonly storeProvider?: string;
}

export function cloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoToTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoOutputReference | CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfo): any {
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


export function cloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoToHclTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoOutputReference | CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfo): any {
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

export class CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfo | undefined) {
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
export interface CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#decryption_provider CloudLink#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#location CloudLink#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#store_provider CloudLink#store_provider}
  */
  readonly storeProvider?: string;
}

export function cloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternalToTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternalOutputReference | CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternal): any {
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


export function cloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternalOutputReference | CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternal): any {
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

export class CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface CloudLinkAwsByocConnectionsAuthKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#provider CloudLink#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#url CloudLink#url}
  */
  readonly url: string;
}

export function cloudLinkAwsByocConnectionsAuthKeyClearSecretInfoToTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyClearSecretInfoOutputReference | CloudLinkAwsByocConnectionsAuthKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cloudLinkAwsByocConnectionsAuthKeyClearSecretInfoToHclTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyClearSecretInfoOutputReference | CloudLinkAwsByocConnectionsAuthKeyClearSecretInfo): any {
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

export class CloudLinkAwsByocConnectionsAuthKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByocConnectionsAuthKeyClearSecretInfo | undefined {
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

  public set internalValue(value: CloudLinkAwsByocConnectionsAuthKeyClearSecretInfo | undefined) {
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
export interface CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#key CloudLink#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#location CloudLink#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#provider CloudLink#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#secret_encoding CloudLink#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#version CloudLink#version}
  */
  readonly version?: number;
}

export function cloudLinkAwsByocConnectionsAuthKeyVaultSecretInfoToTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfoOutputReference | CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfo): any {
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


export function cloudLinkAwsByocConnectionsAuthKeyVaultSecretInfoToHclTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfoOutputReference | CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfo): any {
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

export class CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfo | undefined {
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

  public set internalValue(value: CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfo | undefined) {
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
export interface CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#name CloudLink#name}
  */
  readonly name: string;
}

export function cloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfoToTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfoOutputReference | CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfoToHclTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfoOutputReference | CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfo): any {
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

export class CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfo | undefined) {
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
export interface CloudLinkAwsByocConnectionsAuthKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#secret_encoding_type CloudLink#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#blindfold_secret_info CloudLink#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#blindfold_secret_info_internal CloudLink#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#clear_secret_info CloudLink#clear_secret_info}
  */
  readonly clearSecretInfo?: CloudLinkAwsByocConnectionsAuthKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#vault_secret_info CloudLink#vault_secret_info}
  */
  readonly vaultSecretInfo?: CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#wingman_secret_info CloudLink#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfo;
}

export function cloudLinkAwsByocConnectionsAuthKeyToTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyOutputReference | CloudLinkAwsByocConnectionsAuthKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cloudLinkAwsByocConnectionsAuthKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cloudLinkAwsByocConnectionsAuthKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cloudLinkAwsByocConnectionsAuthKeyToHclTerraform(struct?: CloudLinkAwsByocConnectionsAuthKeyOutputReference | CloudLinkAwsByocConnectionsAuthKey): any {
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
      value: cloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cloudLinkAwsByocConnectionsAuthKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsAuthKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: cloudLinkAwsByocConnectionsAuthKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinkAwsByocConnectionsAuthKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByocConnectionsAuthKey | undefined {
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

  public set internalValue(value: CloudLinkAwsByocConnectionsAuthKey | undefined) {
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
  private _blindfoldSecretInfo = new CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CloudLinkAwsByocConnectionsAuthKeyBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new CloudLinkAwsByocConnectionsAuthKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CloudLinkAwsByocConnectionsAuthKeyClearSecretInfo) {
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
  private _vaultSecretInfo = new CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CloudLinkAwsByocConnectionsAuthKeyVaultSecretInfo) {
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
  private _wingmanSecretInfo = new CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CloudLinkAwsByocConnectionsAuthKeyWingmanSecretInfo) {
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
export interface CloudLinkAwsByocConnectionsCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#latitude CloudLink#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#longitude CloudLink#longitude}
  */
  readonly longitude?: number;
}

export function cloudLinkAwsByocConnectionsCoordinatesToTerraform(struct?: CloudLinkAwsByocConnectionsCoordinatesOutputReference | CloudLinkAwsByocConnectionsCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function cloudLinkAwsByocConnectionsCoordinatesToHclTerraform(struct?: CloudLinkAwsByocConnectionsCoordinatesOutputReference | CloudLinkAwsByocConnectionsCoordinates): any {
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

export class CloudLinkAwsByocConnectionsCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByocConnectionsCoordinates | undefined {
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

  public set internalValue(value: CloudLinkAwsByocConnectionsCoordinates | undefined) {
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
export interface CloudLinkAwsByocConnectionsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#aws_router_peer_address CloudLink#aws_router_peer_address}
  */
  readonly awsRouterPeerAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#router_peer_address CloudLink#router_peer_address}
  */
  readonly routerPeerAddress: string;
}

export function cloudLinkAwsByocConnectionsIpv4ToTerraform(struct?: CloudLinkAwsByocConnectionsIpv4OutputReference | CloudLinkAwsByocConnectionsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_router_peer_address: cdktf.stringToTerraform(struct!.awsRouterPeerAddress),
    router_peer_address: cdktf.stringToTerraform(struct!.routerPeerAddress),
  }
}


export function cloudLinkAwsByocConnectionsIpv4ToHclTerraform(struct?: CloudLinkAwsByocConnectionsIpv4OutputReference | CloudLinkAwsByocConnectionsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_router_peer_address: {
      value: cdktf.stringToHclTerraform(struct!.awsRouterPeerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_peer_address: {
      value: cdktf.stringToHclTerraform(struct!.routerPeerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinkAwsByocConnectionsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByocConnectionsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRouterPeerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRouterPeerAddress = this._awsRouterPeerAddress;
    }
    if (this._routerPeerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerPeerAddress = this._routerPeerAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkAwsByocConnectionsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRouterPeerAddress = undefined;
      this._routerPeerAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRouterPeerAddress = value.awsRouterPeerAddress;
      this._routerPeerAddress = value.routerPeerAddress;
    }
  }

  // aws_router_peer_address - computed: false, optional: false, required: true
  private _awsRouterPeerAddress?: string; 
  public get awsRouterPeerAddress() {
    return this.getStringAttribute('aws_router_peer_address');
  }
  public set awsRouterPeerAddress(value: string) {
    this._awsRouterPeerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRouterPeerAddressInput() {
    return this._awsRouterPeerAddress;
  }

  // router_peer_address - computed: false, optional: false, required: true
  private _routerPeerAddress?: string; 
  public get routerPeerAddress() {
    return this.getStringAttribute('router_peer_address');
  }
  public set routerPeerAddress(value: string) {
    this._routerPeerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerPeerAddressInput() {
    return this._routerPeerAddress;
  }
}
export interface CloudLinkAwsByocConnectionsIpv6 {
}

export function cloudLinkAwsByocConnectionsIpv6ToTerraform(struct?: CloudLinkAwsByocConnectionsIpv6OutputReference | CloudLinkAwsByocConnectionsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudLinkAwsByocConnectionsIpv6ToHclTerraform(struct?: CloudLinkAwsByocConnectionsIpv6OutputReference | CloudLinkAwsByocConnectionsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudLinkAwsByocConnectionsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByocConnectionsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkAwsByocConnectionsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CloudLinkAwsByocConnectionsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#description CloudLink#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#disable CloudLink#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#name CloudLink#name}
  */
  readonly name: string;
}

export function cloudLinkAwsByocConnectionsMetadataToTerraform(struct?: CloudLinkAwsByocConnectionsMetadataOutputReference | CloudLinkAwsByocConnectionsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudLinkAwsByocConnectionsMetadataToHclTerraform(struct?: CloudLinkAwsByocConnectionsMetadataOutputReference | CloudLinkAwsByocConnectionsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class CloudLinkAwsByocConnectionsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByocConnectionsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkAwsByocConnectionsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CloudLinkAwsByocConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#bgp_asn CloudLink#bgp_asn}
  */
  readonly bgpAsn: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#connection_id CloudLink#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#enable_sitelink CloudLink#enable_sitelink}
  */
  readonly enableSitelink?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#jumbo_mtu CloudLink#jumbo_mtu}
  */
  readonly jumboMtu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#region CloudLink#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#system_generated_name CloudLink#system_generated_name}
  */
  readonly systemGeneratedName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#tags CloudLink#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#user_assigned_name CloudLink#user_assigned_name}
  */
  readonly userAssignedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#virtual_interface_type CloudLink#virtual_interface_type}
  */
  readonly virtualInterfaceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#vlan CloudLink#vlan}
  */
  readonly vlan: number;
  /**
  * auth_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#auth_key CloudLink#auth_key}
  */
  readonly authKey: CloudLinkAwsByocConnectionsAuthKey;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#coordinates CloudLink#coordinates}
  */
  readonly coordinates?: CloudLinkAwsByocConnectionsCoordinates;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#ipv4 CloudLink#ipv4}
  */
  readonly ipv4?: CloudLinkAwsByocConnectionsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#ipv6 CloudLink#ipv6}
  */
  readonly ipv6?: CloudLinkAwsByocConnectionsIpv6;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#metadata CloudLink#metadata}
  */
  readonly metadata: CloudLinkAwsByocConnectionsMetadata;
}

export function cloudLinkAwsByocConnectionsToTerraform(struct?: CloudLinkAwsByocConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_asn: cdktf.numberToTerraform(struct!.bgpAsn),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    enable_sitelink: cdktf.booleanToTerraform(struct!.enableSitelink),
    jumbo_mtu: cdktf.booleanToTerraform(struct!.jumboMtu),
    region: cdktf.stringToTerraform(struct!.region),
    system_generated_name: cdktf.booleanToTerraform(struct!.systemGeneratedName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    user_assigned_name: cdktf.stringToTerraform(struct!.userAssignedName),
    virtual_interface_type: cdktf.stringToTerraform(struct!.virtualInterfaceType),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    auth_key: cloudLinkAwsByocConnectionsAuthKeyToTerraform(struct!.authKey),
    coordinates: cloudLinkAwsByocConnectionsCoordinatesToTerraform(struct!.coordinates),
    ipv4: cloudLinkAwsByocConnectionsIpv4ToTerraform(struct!.ipv4),
    ipv6: cloudLinkAwsByocConnectionsIpv6ToTerraform(struct!.ipv6),
    metadata: cloudLinkAwsByocConnectionsMetadataToTerraform(struct!.metadata),
  }
}


export function cloudLinkAwsByocConnectionsToHclTerraform(struct?: CloudLinkAwsByocConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_asn: {
      value: cdktf.numberToHclTerraform(struct!.bgpAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_sitelink: {
      value: cdktf.booleanToHclTerraform(struct!.enableSitelink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jumbo_mtu: {
      value: cdktf.booleanToHclTerraform(struct!.jumboMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_generated_name: {
      value: cdktf.booleanToHclTerraform(struct!.systemGeneratedName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    user_assigned_name: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_interface_type: {
      value: cdktf.stringToHclTerraform(struct!.virtualInterfaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_key: {
      value: cloudLinkAwsByocConnectionsAuthKeyToHclTerraform(struct!.authKey),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsAuthKeyList",
    },
    coordinates: {
      value: cloudLinkAwsByocConnectionsCoordinatesToHclTerraform(struct!.coordinates),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsCoordinatesList",
    },
    ipv4: {
      value: cloudLinkAwsByocConnectionsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsIpv4List",
    },
    ipv6: {
      value: cloudLinkAwsByocConnectionsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsIpv6List",
    },
    metadata: {
      value: cloudLinkAwsByocConnectionsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinkAwsByocConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudLinkAwsByocConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsn = this._bgpAsn;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._enableSitelink !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSitelink = this._enableSitelink;
    }
    if (this._jumboMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboMtu = this._jumboMtu;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._systemGeneratedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemGeneratedName = this._systemGeneratedName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._userAssignedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedName = this._userAssignedName;
    }
    if (this._virtualInterfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualInterfaceType = this._virtualInterfaceType;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._authKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey?.internalValue;
    }
    if (this._coordinates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkAwsByocConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpAsn = undefined;
      this._connectionId = undefined;
      this._enableSitelink = undefined;
      this._jumboMtu = undefined;
      this._region = undefined;
      this._systemGeneratedName = undefined;
      this._tags = undefined;
      this._userAssignedName = undefined;
      this._virtualInterfaceType = undefined;
      this._vlan = undefined;
      this._authKey.internalValue = undefined;
      this._coordinates.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpAsn = value.bgpAsn;
      this._connectionId = value.connectionId;
      this._enableSitelink = value.enableSitelink;
      this._jumboMtu = value.jumboMtu;
      this._region = value.region;
      this._systemGeneratedName = value.systemGeneratedName;
      this._tags = value.tags;
      this._userAssignedName = value.userAssignedName;
      this._virtualInterfaceType = value.virtualInterfaceType;
      this._vlan = value.vlan;
      this._authKey.internalValue = value.authKey;
      this._coordinates.internalValue = value.coordinates;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
      this._metadata.internalValue = value.metadata;
    }
  }

  // bgp_asn - computed: false, optional: false, required: true
  private _bgpAsn?: number; 
  public get bgpAsn() {
    return this.getNumberAttribute('bgp_asn');
  }
  public set bgpAsn(value: number) {
    this._bgpAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsnInput() {
    return this._bgpAsn;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // enable_sitelink - computed: false, optional: true, required: false
  private _enableSitelink?: boolean | cdktf.IResolvable; 
  public get enableSitelink() {
    return this.getBooleanAttribute('enable_sitelink');
  }
  public set enableSitelink(value: boolean | cdktf.IResolvable) {
    this._enableSitelink = value;
  }
  public resetEnableSitelink() {
    this._enableSitelink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSitelinkInput() {
    return this._enableSitelink;
  }

  // jumbo_mtu - computed: false, optional: true, required: false
  private _jumboMtu?: boolean | cdktf.IResolvable; 
  public get jumboMtu() {
    return this.getBooleanAttribute('jumbo_mtu');
  }
  public set jumboMtu(value: boolean | cdktf.IResolvable) {
    this._jumboMtu = value;
  }
  public resetJumboMtu() {
    this._jumboMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboMtuInput() {
    return this._jumboMtu;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // system_generated_name - computed: false, optional: true, required: false
  private _systemGeneratedName?: boolean | cdktf.IResolvable; 
  public get systemGeneratedName() {
    return this.getBooleanAttribute('system_generated_name');
  }
  public set systemGeneratedName(value: boolean | cdktf.IResolvable) {
    this._systemGeneratedName = value;
  }
  public resetSystemGeneratedName() {
    this._systemGeneratedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemGeneratedNameInput() {
    return this._systemGeneratedName;
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

  // user_assigned_name - computed: false, optional: true, required: false
  private _userAssignedName?: string; 
  public get userAssignedName() {
    return this.getStringAttribute('user_assigned_name');
  }
  public set userAssignedName(value: string) {
    this._userAssignedName = value;
  }
  public resetUserAssignedName() {
    this._userAssignedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedNameInput() {
    return this._userAssignedName;
  }

  // virtual_interface_type - computed: false, optional: true, required: false
  private _virtualInterfaceType?: string; 
  public get virtualInterfaceType() {
    return this.getStringAttribute('virtual_interface_type');
  }
  public set virtualInterfaceType(value: string) {
    this._virtualInterfaceType = value;
  }
  public resetVirtualInterfaceType() {
    this._virtualInterfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInterfaceTypeInput() {
    return this._virtualInterfaceType;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // auth_key - computed: false, optional: false, required: true
  private _authKey = new CloudLinkAwsByocConnectionsAuthKeyOutputReference(this, "auth_key");
  public get authKey() {
    return this._authKey;
  }
  public putAuthKey(value: CloudLinkAwsByocConnectionsAuthKey) {
    this._authKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey.internalValue;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new CloudLinkAwsByocConnectionsCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: CloudLinkAwsByocConnectionsCoordinates) {
    this._coordinates.internalValue = value;
  }
  public resetCoordinates() {
    this._coordinates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new CloudLinkAwsByocConnectionsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: CloudLinkAwsByocConnectionsIpv4) {
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
  private _ipv6 = new CloudLinkAwsByocConnectionsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: CloudLinkAwsByocConnectionsIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CloudLinkAwsByocConnectionsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CloudLinkAwsByocConnectionsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CloudLinkAwsByocConnectionsList extends cdktf.ComplexList {
  public internalValue? : CloudLinkAwsByocConnections[] | cdktf.IResolvable

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
  public get(index: number): CloudLinkAwsByocConnectionsOutputReference {
    return new CloudLinkAwsByocConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudLinkAwsByoc {
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#connections CloudLink#connections}
  */
  readonly connections: CloudLinkAwsByocConnections[] | cdktf.IResolvable;
}

export function cloudLinkAwsByocToTerraform(struct?: CloudLinkAwsByocOutputReference | CloudLinkAwsByoc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connections: cdktf.listMapper(cloudLinkAwsByocConnectionsToTerraform, true)(struct!.connections),
  }
}


export function cloudLinkAwsByocToHclTerraform(struct?: CloudLinkAwsByocOutputReference | CloudLinkAwsByoc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connections: {
      value: cdktf.listMapperHcl(cloudLinkAwsByocConnectionsToHclTerraform, true)(struct!.connections),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinkAwsByocOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsByoc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connections = this._connections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkAwsByoc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connections.internalValue = value.connections;
    }
  }

  // connections - computed: false, optional: false, required: true
  private _connections = new CloudLinkAwsByocConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: CloudLinkAwsByocConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }
}
export interface CloudLinkAwsF5XcManaged {
}

export function cloudLinkAwsF5XcManagedToTerraform(struct?: CloudLinkAwsF5XcManagedOutputReference | CloudLinkAwsF5XcManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudLinkAwsF5XcManagedToHclTerraform(struct?: CloudLinkAwsF5XcManagedOutputReference | CloudLinkAwsF5XcManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudLinkAwsF5XcManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAwsF5XcManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkAwsF5XcManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CloudLinkAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#auto CloudLink#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#custom_asn CloudLink#custom_asn}
  */
  readonly customAsn?: number;
  /**
  * aws_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#aws_cred CloudLink#aws_cred}
  */
  readonly awsCred: CloudLinkAwsAwsCred;
  /**
  * byoc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#byoc CloudLink#byoc}
  */
  readonly byoc?: CloudLinkAwsByoc;
  /**
  * f5xc_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#f5xc_managed CloudLink#f5xc_managed}
  */
  readonly f5XcManaged?: CloudLinkAwsF5XcManaged;
}

export function cloudLinkAwsToTerraform(struct?: CloudLinkAwsOutputReference | CloudLinkAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    custom_asn: cdktf.numberToTerraform(struct!.customAsn),
    aws_cred: cloudLinkAwsAwsCredToTerraform(struct!.awsCred),
    byoc: cloudLinkAwsByocToTerraform(struct!.byoc),
    f5xc_managed: cloudLinkAwsF5XcManagedToTerraform(struct!.f5XcManaged),
  }
}


export function cloudLinkAwsToHclTerraform(struct?: CloudLinkAwsOutputReference | CloudLinkAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_asn: {
      value: cdktf.numberToHclTerraform(struct!.customAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aws_cred: {
      value: cloudLinkAwsAwsCredToHclTerraform(struct!.awsCred),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsAwsCredList",
    },
    byoc: {
      value: cloudLinkAwsByocToHclTerraform(struct!.byoc),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsByocList",
    },
    f5xc_managed: {
      value: cloudLinkAwsF5XcManagedToHclTerraform(struct!.f5XcManaged),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkAwsF5XcManagedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinkAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._customAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAsn = this._customAsn;
    }
    if (this._awsCred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCred = this._awsCred?.internalValue;
    }
    if (this._byoc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.byoc = this._byoc?.internalValue;
    }
    if (this._f5XcManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5XcManaged = this._f5XcManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auto = undefined;
      this._customAsn = undefined;
      this._awsCred.internalValue = undefined;
      this._byoc.internalValue = undefined;
      this._f5XcManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auto = value.auto;
      this._customAsn = value.customAsn;
      this._awsCred.internalValue = value.awsCred;
      this._byoc.internalValue = value.byoc;
      this._f5XcManaged.internalValue = value.f5XcManaged;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
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

  // aws_cred - computed: false, optional: false, required: true
  private _awsCred = new CloudLinkAwsAwsCredOutputReference(this, "aws_cred");
  public get awsCred() {
    return this._awsCred;
  }
  public putAwsCred(value: CloudLinkAwsAwsCred) {
    this._awsCred.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredInput() {
    return this._awsCred.internalValue;
  }

  // byoc - computed: false, optional: true, required: false
  private _byoc = new CloudLinkAwsByocOutputReference(this, "byoc");
  public get byoc() {
    return this._byoc;
  }
  public putByoc(value: CloudLinkAwsByoc) {
    this._byoc.internalValue = value;
  }
  public resetByoc() {
    this._byoc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byocInput() {
    return this._byoc.internalValue;
  }

  // f5xc_managed - computed: false, optional: true, required: false
  private _f5XcManaged = new CloudLinkAwsF5XcManagedOutputReference(this, "f5xc_managed");
  public get f5XcManaged() {
    return this._f5XcManaged;
  }
  public putF5XcManaged(value: CloudLinkAwsF5XcManaged) {
    this._f5XcManaged.internalValue = value;
  }
  public resetF5XcManaged() {
    this._f5XcManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5XcManagedInput() {
    return this._f5XcManaged.internalValue;
  }
}
export interface CloudLinkAzure {
}

export function cloudLinkAzureToTerraform(struct?: CloudLinkAzureOutputReference | CloudLinkAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudLinkAzureToHclTerraform(struct?: CloudLinkAzureOutputReference | CloudLinkAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudLinkAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CloudLinkEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#cloudlink_network_name CloudLink#cloudlink_network_name}
  */
  readonly cloudlinkNetworkName: string;
}

export function cloudLinkEnabledToTerraform(struct?: CloudLinkEnabledOutputReference | CloudLinkEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudlink_network_name: cdktf.stringToTerraform(struct!.cloudlinkNetworkName),
  }
}


export function cloudLinkEnabledToHclTerraform(struct?: CloudLinkEnabledOutputReference | CloudLinkEnabled): any {
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

export class CloudLinkEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudlinkNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudlinkNetworkName = this._cloudlinkNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkEnabled | undefined) {
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
export interface CloudLinkGcpByocConnectionsCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#latitude CloudLink#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#longitude CloudLink#longitude}
  */
  readonly longitude?: number;
}

export function cloudLinkGcpByocConnectionsCoordinatesToTerraform(struct?: CloudLinkGcpByocConnectionsCoordinatesOutputReference | CloudLinkGcpByocConnectionsCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function cloudLinkGcpByocConnectionsCoordinatesToHclTerraform(struct?: CloudLinkGcpByocConnectionsCoordinatesOutputReference | CloudLinkGcpByocConnectionsCoordinates): any {
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

export class CloudLinkGcpByocConnectionsCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkGcpByocConnectionsCoordinates | undefined {
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

  public set internalValue(value: CloudLinkGcpByocConnectionsCoordinates | undefined) {
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
export interface CloudLinkGcpByocConnectionsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#description CloudLink#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#disable CloudLink#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#name CloudLink#name}
  */
  readonly name: string;
}

export function cloudLinkGcpByocConnectionsMetadataToTerraform(struct?: CloudLinkGcpByocConnectionsMetadataOutputReference | CloudLinkGcpByocConnectionsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudLinkGcpByocConnectionsMetadataToHclTerraform(struct?: CloudLinkGcpByocConnectionsMetadataOutputReference | CloudLinkGcpByocConnectionsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class CloudLinkGcpByocConnectionsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkGcpByocConnectionsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkGcpByocConnectionsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CloudLinkGcpByocConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#interconnect_attachment_name CloudLink#interconnect_attachment_name}
  */
  readonly interconnectAttachmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#project CloudLink#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#region CloudLink#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#same_as_credential CloudLink#same_as_credential}
  */
  readonly sameAsCredential?: boolean | cdktf.IResolvable;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#coordinates CloudLink#coordinates}
  */
  readonly coordinates?: CloudLinkGcpByocConnectionsCoordinates;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#metadata CloudLink#metadata}
  */
  readonly metadata: CloudLinkGcpByocConnectionsMetadata;
}

export function cloudLinkGcpByocConnectionsToTerraform(struct?: CloudLinkGcpByocConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interconnect_attachment_name: cdktf.stringToTerraform(struct!.interconnectAttachmentName),
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
    same_as_credential: cdktf.booleanToTerraform(struct!.sameAsCredential),
    coordinates: cloudLinkGcpByocConnectionsCoordinatesToTerraform(struct!.coordinates),
    metadata: cloudLinkGcpByocConnectionsMetadataToTerraform(struct!.metadata),
  }
}


export function cloudLinkGcpByocConnectionsToHclTerraform(struct?: CloudLinkGcpByocConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interconnect_attachment_name: {
      value: cdktf.stringToHclTerraform(struct!.interconnectAttachmentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_as_credential: {
      value: cdktf.booleanToHclTerraform(struct!.sameAsCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    coordinates: {
      value: cloudLinkGcpByocConnectionsCoordinatesToHclTerraform(struct!.coordinates),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkGcpByocConnectionsCoordinatesList",
    },
    metadata: {
      value: cloudLinkGcpByocConnectionsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkGcpByocConnectionsMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinkGcpByocConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudLinkGcpByocConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interconnectAttachmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnectAttachmentName = this._interconnectAttachmentName;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sameAsCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameAsCredential = this._sameAsCredential;
    }
    if (this._coordinates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkGcpByocConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interconnectAttachmentName = undefined;
      this._project = undefined;
      this._region = undefined;
      this._sameAsCredential = undefined;
      this._coordinates.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interconnectAttachmentName = value.interconnectAttachmentName;
      this._project = value.project;
      this._region = value.region;
      this._sameAsCredential = value.sameAsCredential;
      this._coordinates.internalValue = value.coordinates;
      this._metadata.internalValue = value.metadata;
    }
  }

  // interconnect_attachment_name - computed: false, optional: false, required: true
  private _interconnectAttachmentName?: string; 
  public get interconnectAttachmentName() {
    return this.getStringAttribute('interconnect_attachment_name');
  }
  public set interconnectAttachmentName(value: string) {
    this._interconnectAttachmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectAttachmentNameInput() {
    return this._interconnectAttachmentName;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // same_as_credential - computed: false, optional: true, required: false
  private _sameAsCredential?: boolean | cdktf.IResolvable; 
  public get sameAsCredential() {
    return this.getBooleanAttribute('same_as_credential');
  }
  public set sameAsCredential(value: boolean | cdktf.IResolvable) {
    this._sameAsCredential = value;
  }
  public resetSameAsCredential() {
    this._sameAsCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameAsCredentialInput() {
    return this._sameAsCredential;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new CloudLinkGcpByocConnectionsCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: CloudLinkGcpByocConnectionsCoordinates) {
    this._coordinates.internalValue = value;
  }
  public resetCoordinates() {
    this._coordinates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CloudLinkGcpByocConnectionsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CloudLinkGcpByocConnectionsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CloudLinkGcpByocConnectionsList extends cdktf.ComplexList {
  public internalValue? : CloudLinkGcpByocConnections[] | cdktf.IResolvable

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
  public get(index: number): CloudLinkGcpByocConnectionsOutputReference {
    return new CloudLinkGcpByocConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudLinkGcpByoc {
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#connections CloudLink#connections}
  */
  readonly connections: CloudLinkGcpByocConnections[] | cdktf.IResolvable;
}

export function cloudLinkGcpByocToTerraform(struct?: CloudLinkGcpByocOutputReference | CloudLinkGcpByoc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connections: cdktf.listMapper(cloudLinkGcpByocConnectionsToTerraform, true)(struct!.connections),
  }
}


export function cloudLinkGcpByocToHclTerraform(struct?: CloudLinkGcpByocOutputReference | CloudLinkGcpByoc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connections: {
      value: cdktf.listMapperHcl(cloudLinkGcpByocConnectionsToHclTerraform, true)(struct!.connections),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkGcpByocConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinkGcpByocOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkGcpByoc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connections = this._connections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkGcpByoc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connections.internalValue = value.connections;
    }
  }

  // connections - computed: false, optional: false, required: true
  private _connections = new CloudLinkGcpByocConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: CloudLinkGcpByocConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }
}
export interface CloudLinkGcpGcpCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#name CloudLink#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#namespace CloudLink#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#tenant CloudLink#tenant}
  */
  readonly tenant?: string;
}

export function cloudLinkGcpGcpCredToTerraform(struct?: CloudLinkGcpGcpCredOutputReference | CloudLinkGcpGcpCred): any {
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


export function cloudLinkGcpGcpCredToHclTerraform(struct?: CloudLinkGcpGcpCredOutputReference | CloudLinkGcpGcpCred): any {
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

export class CloudLinkGcpGcpCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkGcpGcpCred | undefined {
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

  public set internalValue(value: CloudLinkGcpGcpCred | undefined) {
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
export interface CloudLinkGcp {
  /**
  * byoc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#byoc CloudLink#byoc}
  */
  readonly byoc?: CloudLinkGcpByoc;
  /**
  * gcp_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#gcp_cred CloudLink#gcp_cred}
  */
  readonly gcpCred: CloudLinkGcpGcpCred;
}

export function cloudLinkGcpToTerraform(struct?: CloudLinkGcpOutputReference | CloudLinkGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byoc: cloudLinkGcpByocToTerraform(struct!.byoc),
    gcp_cred: cloudLinkGcpGcpCredToTerraform(struct!.gcpCred),
  }
}


export function cloudLinkGcpToHclTerraform(struct?: CloudLinkGcpOutputReference | CloudLinkGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byoc: {
      value: cloudLinkGcpByocToHclTerraform(struct!.byoc),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkGcpByocList",
    },
    gcp_cred: {
      value: cloudLinkGcpGcpCredToHclTerraform(struct!.gcpCred),
      isBlock: true,
      type: "list",
      storageClassType: "CloudLinkGcpGcpCredList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudLinkGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudLinkGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byoc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.byoc = this._byoc?.internalValue;
    }
    if (this._gcpCred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpCred = this._gcpCred?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudLinkGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._byoc.internalValue = undefined;
      this._gcpCred.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._byoc.internalValue = value.byoc;
      this._gcpCred.internalValue = value.gcpCred;
    }
  }

  // byoc - computed: false, optional: true, required: false
  private _byoc = new CloudLinkGcpByocOutputReference(this, "byoc");
  public get byoc() {
    return this._byoc;
  }
  public putByoc(value: CloudLinkGcpByoc) {
    this._byoc.internalValue = value;
  }
  public resetByoc() {
    this._byoc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byocInput() {
    return this._byoc.internalValue;
  }

  // gcp_cred - computed: false, optional: false, required: true
  private _gcpCred = new CloudLinkGcpGcpCredOutputReference(this, "gcp_cred");
  public get gcpCred() {
    return this._gcpCred;
  }
  public putGcpCred(value: CloudLinkGcpGcpCred) {
    this._gcpCred.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCredInput() {
    return this._gcpCred.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link volterra_cloud_link}
*/
export class CloudLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_cloud_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudLink to import
  * @param importFromId The id of the existing CloudLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_cloud_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cloud_link volterra_cloud_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudLinkConfig
  */
  public constructor(scope: Construct, id: string, config: CloudLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_cloud_link',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
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
    this._disabled = config.disabled;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._enabled.internalValue = config.enabled;
    this._gcp.internalValue = config.gcp;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // aws - computed: false, optional: true, required: false
  private _aws = new CloudLinkAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: CloudLinkAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new CloudLinkAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: CloudLinkAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new CloudLinkEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: CloudLinkEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new CloudLinkGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: CloudLinkGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      aws: cloudLinkAwsToTerraform(this._aws.internalValue),
      azure: cloudLinkAzureToTerraform(this._azure.internalValue),
      enabled: cloudLinkEnabledToTerraform(this._enabled.internalValue),
      gcp: cloudLinkGcpToTerraform(this._gcp.internalValue),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      aws: {
        value: cloudLinkAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudLinkAwsList",
      },
      azure: {
        value: cloudLinkAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudLinkAzureList",
      },
      enabled: {
        value: cloudLinkEnabledToHclTerraform(this._enabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudLinkEnabledList",
      },
      gcp: {
        value: cloudLinkGcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudLinkGcpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
