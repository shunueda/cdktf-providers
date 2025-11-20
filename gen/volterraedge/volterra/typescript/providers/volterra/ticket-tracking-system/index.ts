// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TicketTrackingSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#annotations TicketTrackingSystem#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#description TicketTrackingSystem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#disable TicketTrackingSystem#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#id TicketTrackingSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#labels TicketTrackingSystem#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#name TicketTrackingSystem#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#namespace TicketTrackingSystem#namespace}
  */
  readonly namespace: string;
  /**
  * jira_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#jira_config TicketTrackingSystem#jira_config}
  */
  readonly jiraConfig?: TicketTrackingSystemJiraConfig;
}
export interface TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#decryption_provider TicketTrackingSystem#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#location TicketTrackingSystem#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#store_provider TicketTrackingSystem#store_provider}
  */
  readonly storeProvider?: string;
}

export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoToTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfo): any {
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


export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoToHclTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfo): any {
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

export class TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfo | undefined) {
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
export interface TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#decryption_provider TicketTrackingSystem#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#location TicketTrackingSystem#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#store_provider TicketTrackingSystem#store_provider}
  */
  readonly storeProvider?: string;
}

export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternalToTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternalOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternal): any {
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


export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternalToHclTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternalOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternal): any {
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

export class TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternal | undefined) {
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
export interface TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#provider TicketTrackingSystem#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#url TicketTrackingSystem#url}
  */
  readonly url: string;
}

export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfoToTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfoOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfoToHclTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfoOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfo): any {
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

export class TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfo | undefined {
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

  public set internalValue(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfo | undefined) {
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
export interface TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#key TicketTrackingSystem#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#location TicketTrackingSystem#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#provider TicketTrackingSystem#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#secret_encoding TicketTrackingSystem#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#version TicketTrackingSystem#version}
  */
  readonly version?: number;
}

export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfoToTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfoOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfo): any {
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


export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfoToHclTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfoOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfo): any {
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

export class TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfo | undefined {
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

  public set internalValue(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfo | undefined) {
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
export interface TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#name TicketTrackingSystem#name}
  */
  readonly name: string;
}

export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfoToTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfoOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfoToHclTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfoOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfo): any {
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

export class TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfo | undefined) {
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
export interface TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#secret_encoding_type TicketTrackingSystem#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#blindfold_secret_info TicketTrackingSystem#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#blindfold_secret_info_internal TicketTrackingSystem#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#clear_secret_info TicketTrackingSystem#clear_secret_info}
  */
  readonly clearSecretInfo?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#vault_secret_info TicketTrackingSystem#vault_secret_info}
  */
  readonly vaultSecretInfo?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#wingman_secret_info TicketTrackingSystem#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfo;
}

export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenToTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenToHclTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenOutputReference | TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiToken): any {
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
      value: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfoList",
    },
    vault_secret_info: {
      value: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiToken | undefined {
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

  public set internalValue(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiToken | undefined) {
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
  private _blindfoldSecretInfo = new TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenClearSecretInfo) {
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
  private _vaultSecretInfo = new TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenVaultSecretInfo) {
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
  private _wingmanSecretInfo = new TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenWingmanSecretInfo) {
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
export interface TicketTrackingSystemJiraConfigAdhocRestApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#account_email TicketTrackingSystem#account_email}
  */
  readonly accountEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#api_token TicketTrackingSystem#api_token}
  */
  readonly apiToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#organization_domain TicketTrackingSystem#organization_domain}
  */
  readonly organizationDomain: string;
  /**
  * encrypted_api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#encrypted_api_token TicketTrackingSystem#encrypted_api_token}
  */
  readonly encryptedApiToken?: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiToken;
}

export function ticketTrackingSystemJiraConfigAdhocRestApiToTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiOutputReference | TicketTrackingSystemJiraConfigAdhocRestApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_email: cdktf.stringToTerraform(struct!.accountEmail),
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    organization_domain: cdktf.stringToTerraform(struct!.organizationDomain),
    encrypted_api_token: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenToTerraform(struct!.encryptedApiToken),
  }
}


export function ticketTrackingSystemJiraConfigAdhocRestApiToHclTerraform(struct?: TicketTrackingSystemJiraConfigAdhocRestApiOutputReference | TicketTrackingSystemJiraConfigAdhocRestApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_email: {
      value: cdktf.stringToHclTerraform(struct!.accountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_domain: {
      value: cdktf.stringToHclTerraform(struct!.organizationDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_api_token: {
      value: ticketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenToHclTerraform(struct!.encryptedApiToken),
      isBlock: true,
      type: "list",
      storageClassType: "TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TicketTrackingSystemJiraConfigAdhocRestApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TicketTrackingSystemJiraConfigAdhocRestApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountEmail = this._accountEmail;
    }
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._organizationDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationDomain = this._organizationDomain;
    }
    if (this._encryptedApiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedApiToken = this._encryptedApiToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TicketTrackingSystemJiraConfigAdhocRestApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountEmail = undefined;
      this._apiToken = undefined;
      this._organizationDomain = undefined;
      this._encryptedApiToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountEmail = value.accountEmail;
      this._apiToken = value.apiToken;
      this._organizationDomain = value.organizationDomain;
      this._encryptedApiToken.internalValue = value.encryptedApiToken;
    }
  }

  // account_email - computed: false, optional: false, required: true
  private _accountEmail?: string; 
  public get accountEmail() {
    return this.getStringAttribute('account_email');
  }
  public set accountEmail(value: string) {
    this._accountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountEmailInput() {
    return this._accountEmail;
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // organization_domain - computed: false, optional: false, required: true
  private _organizationDomain?: string; 
  public get organizationDomain() {
    return this.getStringAttribute('organization_domain');
  }
  public set organizationDomain(value: string) {
    this._organizationDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationDomainInput() {
    return this._organizationDomain;
  }

  // encrypted_api_token - computed: false, optional: true, required: false
  private _encryptedApiToken = new TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiTokenOutputReference(this, "encrypted_api_token");
  public get encryptedApiToken() {
    return this._encryptedApiToken;
  }
  public putEncryptedApiToken(value: TicketTrackingSystemJiraConfigAdhocRestApiEncryptedApiToken) {
    this._encryptedApiToken.internalValue = value;
  }
  public resetEncryptedApiToken() {
    this._encryptedApiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedApiTokenInput() {
    return this._encryptedApiToken.internalValue;
  }
}
export interface TicketTrackingSystemJiraConfig {
  /**
  * adhoc_rest_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#adhoc_rest_api TicketTrackingSystem#adhoc_rest_api}
  */
  readonly adhocRestApi?: TicketTrackingSystemJiraConfigAdhocRestApi;
}

export function ticketTrackingSystemJiraConfigToTerraform(struct?: TicketTrackingSystemJiraConfigOutputReference | TicketTrackingSystemJiraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adhoc_rest_api: ticketTrackingSystemJiraConfigAdhocRestApiToTerraform(struct!.adhocRestApi),
  }
}


export function ticketTrackingSystemJiraConfigToHclTerraform(struct?: TicketTrackingSystemJiraConfigOutputReference | TicketTrackingSystemJiraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adhoc_rest_api: {
      value: ticketTrackingSystemJiraConfigAdhocRestApiToHclTerraform(struct!.adhocRestApi),
      isBlock: true,
      type: "list",
      storageClassType: "TicketTrackingSystemJiraConfigAdhocRestApiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TicketTrackingSystemJiraConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TicketTrackingSystemJiraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adhocRestApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adhocRestApi = this._adhocRestApi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TicketTrackingSystemJiraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adhocRestApi.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adhocRestApi.internalValue = value.adhocRestApi;
    }
  }

  // adhoc_rest_api - computed: false, optional: true, required: false
  private _adhocRestApi = new TicketTrackingSystemJiraConfigAdhocRestApiOutputReference(this, "adhoc_rest_api");
  public get adhocRestApi() {
    return this._adhocRestApi;
  }
  public putAdhocRestApi(value: TicketTrackingSystemJiraConfigAdhocRestApi) {
    this._adhocRestApi.internalValue = value;
  }
  public resetAdhocRestApi() {
    this._adhocRestApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adhocRestApiInput() {
    return this._adhocRestApi.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system volterra_ticket_tracking_system}
*/
export class TicketTrackingSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_ticket_tracking_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TicketTrackingSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TicketTrackingSystem to import
  * @param importFromId The id of the existing TicketTrackingSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TicketTrackingSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_ticket_tracking_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ticket_tracking_system volterra_ticket_tracking_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TicketTrackingSystemConfig
  */
  public constructor(scope: Construct, id: string, config: TicketTrackingSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_ticket_tracking_system',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
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
    this._jiraConfig.internalValue = config.jiraConfig;
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

  // jira_config - computed: false, optional: true, required: false
  private _jiraConfig = new TicketTrackingSystemJiraConfigOutputReference(this, "jira_config");
  public get jiraConfig() {
    return this._jiraConfig;
  }
  public putJiraConfig(value: TicketTrackingSystemJiraConfig) {
    this._jiraConfig.internalValue = value;
  }
  public resetJiraConfig() {
    this._jiraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraConfigInput() {
    return this._jiraConfig.internalValue;
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
      jira_config: ticketTrackingSystemJiraConfigToTerraform(this._jiraConfig.internalValue),
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
      jira_config: {
        value: ticketTrackingSystemJiraConfigToHclTerraform(this._jiraConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TicketTrackingSystemJiraConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
