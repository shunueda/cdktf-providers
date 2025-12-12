import * as cdktf from 'cdktf';
import { GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo,
globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform,
globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform,
GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference,
GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal,
globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform,
globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform,
GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference,
GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo,
globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform,
globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform,
GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference,
GlobalLogReceiverSplunkReceiverBatch,
globalLogReceiverSplunkReceiverBatchToTerraform,
globalLogReceiverSplunkReceiverBatchToHclTerraform,
GlobalLogReceiverSplunkReceiverBatchOutputReference,
GlobalLogReceiverSplunkReceiverCompression,
globalLogReceiverSplunkReceiverCompressionToTerraform,
globalLogReceiverSplunkReceiverCompressionToHclTerraform,
GlobalLogReceiverSplunkReceiverCompressionOutputReference,
GlobalLogReceiverSplunkReceiverSplunkHecToken,
globalLogReceiverSplunkReceiverSplunkHecTokenToTerraform,
globalLogReceiverSplunkReceiverSplunkHecTokenToHclTerraform,
GlobalLogReceiverSplunkReceiverSplunkHecTokenOutputReference } from './structs0'
export interface GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
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


export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo): any {
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

export class GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined {
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

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo | undefined) {
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
export interface GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
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

export class GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined) {
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
export interface GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo;
}

export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl): any {
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
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl | undefined {
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

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl | undefined) {
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
  private _blindfoldSecretInfo = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlClearSecretInfo) {
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
  private _vaultSecretInfo = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlVaultSecretInfo) {
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
  private _wingmanSecretInfo = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlWingmanSecretInfo) {
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
export interface GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#certificate GlobalLogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#key_url GlobalLogReceiver#key_url}
  */
  readonly keyUrl?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl;
}

export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key_url: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function globalLogReceiverSplunkReceiverUseTlsMtlsEnableToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableOutputReference | GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_url: {
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._keyUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._keyUrl.internalValue = value.keyUrl;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // key_url - computed: false, optional: true, required: false
  private _keyUrl = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableKeyUrl) {
    this._keyUrl.internalValue = value;
  }
  public resetKeyUrl() {
    this._keyUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUrlInput() {
    return this._keyUrl.internalValue;
  }
}
export interface GlobalLogReceiverSplunkReceiverUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#disable_verify_certificate GlobalLogReceiver#disable_verify_certificate}
  */
  readonly disableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#disable_verify_hostname GlobalLogReceiver#disable_verify_hostname}
  */
  readonly disableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#enable_verify_certificate GlobalLogReceiver#enable_verify_certificate}
  */
  readonly enableVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#enable_verify_hostname GlobalLogReceiver#enable_verify_hostname}
  */
  readonly enableVerifyHostname?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#mtls_disabled GlobalLogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#no_ca GlobalLogReceiver#no_ca}
  */
  readonly noCa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#trusted_ca_url GlobalLogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#mtls_enable GlobalLogReceiver#mtls_enable}
  */
  readonly mtlsEnable?: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable;
}

export function globalLogReceiverSplunkReceiverUseTlsToTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsOutputReference | GlobalLogReceiverSplunkReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_verify_certificate: cdktf.booleanToTerraform(struct!.disableVerifyCertificate),
    disable_verify_hostname: cdktf.booleanToTerraform(struct!.disableVerifyHostname),
    enable_verify_certificate: cdktf.booleanToTerraform(struct!.enableVerifyCertificate),
    enable_verify_hostname: cdktf.booleanToTerraform(struct!.enableVerifyHostname),
    mtls_disabled: cdktf.booleanToTerraform(struct!.mtlsDisabled),
    no_ca: cdktf.booleanToTerraform(struct!.noCa),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    mtls_enable: globalLogReceiverSplunkReceiverUseTlsMtlsEnableToTerraform(struct!.mtlsEnable),
  }
}


export function globalLogReceiverSplunkReceiverUseTlsToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverUseTlsOutputReference | GlobalLogReceiverSplunkReceiverUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.disableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_verify_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.enableVerifyHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtls_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.mtlsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ca: {
      value: cdktf.booleanToHclTerraform(struct!.noCa),
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
    mtls_enable: {
      value: globalLogReceiverSplunkReceiverUseTlsMtlsEnableToHclTerraform(struct!.mtlsEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiverUseTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyCertificate = this._disableVerifyCertificate;
    }
    if (this._disableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVerifyHostname = this._disableVerifyHostname;
    }
    if (this._enableVerifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyCertificate = this._enableVerifyCertificate;
    }
    if (this._enableVerifyHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVerifyHostname = this._enableVerifyHostname;
    }
    if (this._mtlsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsDisabled = this._mtlsDisabled;
    }
    if (this._noCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCa = this._noCa;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._mtlsEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsEnable = this._mtlsEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiverUseTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVerifyCertificate = undefined;
      this._disableVerifyHostname = undefined;
      this._enableVerifyCertificate = undefined;
      this._enableVerifyHostname = undefined;
      this._mtlsDisabled = undefined;
      this._noCa = undefined;
      this._trustedCaUrl = undefined;
      this._mtlsEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVerifyCertificate = value.disableVerifyCertificate;
      this._disableVerifyHostname = value.disableVerifyHostname;
      this._enableVerifyCertificate = value.enableVerifyCertificate;
      this._enableVerifyHostname = value.enableVerifyHostname;
      this._mtlsDisabled = value.mtlsDisabled;
      this._noCa = value.noCa;
      this._trustedCaUrl = value.trustedCaUrl;
      this._mtlsEnable.internalValue = value.mtlsEnable;
    }
  }

  // disable_verify_certificate - computed: false, optional: true, required: false
  private _disableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get disableVerifyCertificate() {
    return this.getBooleanAttribute('disable_verify_certificate');
  }
  public set disableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._disableVerifyCertificate = value;
  }
  public resetDisableVerifyCertificate() {
    this._disableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyCertificateInput() {
    return this._disableVerifyCertificate;
  }

  // disable_verify_hostname - computed: false, optional: true, required: false
  private _disableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get disableVerifyHostname() {
    return this.getBooleanAttribute('disable_verify_hostname');
  }
  public set disableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._disableVerifyHostname = value;
  }
  public resetDisableVerifyHostname() {
    this._disableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVerifyHostnameInput() {
    return this._disableVerifyHostname;
  }

  // enable_verify_certificate - computed: false, optional: true, required: false
  private _enableVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get enableVerifyCertificate() {
    return this.getBooleanAttribute('enable_verify_certificate');
  }
  public set enableVerifyCertificate(value: boolean | cdktf.IResolvable) {
    this._enableVerifyCertificate = value;
  }
  public resetEnableVerifyCertificate() {
    this._enableVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyCertificateInput() {
    return this._enableVerifyCertificate;
  }

  // enable_verify_hostname - computed: false, optional: true, required: false
  private _enableVerifyHostname?: boolean | cdktf.IResolvable; 
  public get enableVerifyHostname() {
    return this.getBooleanAttribute('enable_verify_hostname');
  }
  public set enableVerifyHostname(value: boolean | cdktf.IResolvable) {
    this._enableVerifyHostname = value;
  }
  public resetEnableVerifyHostname() {
    this._enableVerifyHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerifyHostnameInput() {
    return this._enableVerifyHostname;
  }

  // mtls_disabled - computed: false, optional: true, required: false
  private _mtlsDisabled?: boolean | cdktf.IResolvable; 
  public get mtlsDisabled() {
    return this.getBooleanAttribute('mtls_disabled');
  }
  public set mtlsDisabled(value: boolean | cdktf.IResolvable) {
    this._mtlsDisabled = value;
  }
  public resetMtlsDisabled() {
    this._mtlsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsDisabledInput() {
    return this._mtlsDisabled;
  }

  // no_ca - computed: false, optional: true, required: false
  private _noCa?: boolean | cdktf.IResolvable; 
  public get noCa() {
    return this.getBooleanAttribute('no_ca');
  }
  public set noCa(value: boolean | cdktf.IResolvable) {
    this._noCa = value;
  }
  public resetNoCa() {
    this._noCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCaInput() {
    return this._noCa;
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

  // mtls_enable - computed: false, optional: true, required: false
  private _mtlsEnable = new GlobalLogReceiverSplunkReceiverUseTlsMtlsEnableOutputReference(this, "mtls_enable");
  public get mtlsEnable() {
    return this._mtlsEnable;
  }
  public putMtlsEnable(value: GlobalLogReceiverSplunkReceiverUseTlsMtlsEnable) {
    this._mtlsEnable.internalValue = value;
  }
  public resetMtlsEnable() {
    this._mtlsEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsEnableInput() {
    return this._mtlsEnable.internalValue;
  }
}
export interface GlobalLogReceiverSplunkReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#endpoint GlobalLogReceiver#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#no_tls GlobalLogReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#batch GlobalLogReceiver#batch}
  */
  readonly batch?: GlobalLogReceiverSplunkReceiverBatch;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#compression GlobalLogReceiver#compression}
  */
  readonly compression?: GlobalLogReceiverSplunkReceiverCompression;
  /**
  * splunk_hec_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#splunk_hec_token GlobalLogReceiver#splunk_hec_token}
  */
  readonly splunkHecToken: GlobalLogReceiverSplunkReceiverSplunkHecToken;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#use_tls GlobalLogReceiver#use_tls}
  */
  readonly useTls?: GlobalLogReceiverSplunkReceiverUseTls;
}

export function globalLogReceiverSplunkReceiverToTerraform(struct?: GlobalLogReceiverSplunkReceiverOutputReference | GlobalLogReceiverSplunkReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    no_tls: cdktf.booleanToTerraform(struct!.noTls),
    batch: globalLogReceiverSplunkReceiverBatchToTerraform(struct!.batch),
    compression: globalLogReceiverSplunkReceiverCompressionToTerraform(struct!.compression),
    splunk_hec_token: globalLogReceiverSplunkReceiverSplunkHecTokenToTerraform(struct!.splunkHecToken),
    use_tls: globalLogReceiverSplunkReceiverUseTlsToTerraform(struct!.useTls),
  }
}


export function globalLogReceiverSplunkReceiverToHclTerraform(struct?: GlobalLogReceiverSplunkReceiverOutputReference | GlobalLogReceiverSplunkReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_tls: {
      value: cdktf.booleanToHclTerraform(struct!.noTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batch: {
      value: globalLogReceiverSplunkReceiverBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverBatchList",
    },
    compression: {
      value: globalLogReceiverSplunkReceiverCompressionToHclTerraform(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverCompressionList",
    },
    splunk_hec_token: {
      value: globalLogReceiverSplunkReceiverSplunkHecTokenToHclTerraform(struct!.splunkHecToken),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverSplunkHecTokenList",
    },
    use_tls: {
      value: globalLogReceiverSplunkReceiverUseTlsToHclTerraform(struct!.useTls),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSplunkReceiverUseTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSplunkReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSplunkReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._noTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTls = this._noTls;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._splunkHecToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHecToken = this._splunkHecToken?.internalValue;
    }
    if (this._useTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSplunkReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._noTls = undefined;
      this._batch.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._splunkHecToken.internalValue = undefined;
      this._useTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._noTls = value.noTls;
      this._batch.internalValue = value.batch;
      this._compression.internalValue = value.compression;
      this._splunkHecToken.internalValue = value.splunkHecToken;
      this._useTls.internalValue = value.useTls;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // no_tls - computed: false, optional: true, required: false
  private _noTls?: boolean | cdktf.IResolvable; 
  public get noTls() {
    return this.getBooleanAttribute('no_tls');
  }
  public set noTls(value: boolean | cdktf.IResolvable) {
    this._noTls = value;
  }
  public resetNoTls() {
    this._noTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsInput() {
    return this._noTls;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GlobalLogReceiverSplunkReceiverBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GlobalLogReceiverSplunkReceiverBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new GlobalLogReceiverSplunkReceiverCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: GlobalLogReceiverSplunkReceiverCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // splunk_hec_token - computed: false, optional: false, required: true
  private _splunkHecToken = new GlobalLogReceiverSplunkReceiverSplunkHecTokenOutputReference(this, "splunk_hec_token");
  public get splunkHecToken() {
    return this._splunkHecToken;
  }
  public putSplunkHecToken(value: GlobalLogReceiverSplunkReceiverSplunkHecToken) {
    this._splunkHecToken.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHecTokenInput() {
    return this._splunkHecToken.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls = new GlobalLogReceiverSplunkReceiverUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: GlobalLogReceiverSplunkReceiverUseTls) {
    this._useTls.internalValue = value;
  }
  public resetUseTls() {
    this._useTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls.internalValue;
  }
}
export interface GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo): any {
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


export function globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo): any {
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

export class GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo | undefined) {
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
export interface GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#decryption_provider GlobalLogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#store_provider GlobalLogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternalToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternal): any {
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


export function globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternalOutputReference | GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternal): any {
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

export class GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: string;
}

export function globalLogReceiverSumoLogicReceiverUrlClearSecretInfoToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function globalLogReceiverSumoLogicReceiverUrlClearSecretInfoToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo): any {
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

export class GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo | undefined {
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

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo | undefined) {
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
export interface GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#key GlobalLogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#location GlobalLogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#provider GlobalLogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#secret_encoding GlobalLogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#version GlobalLogReceiver#version}
  */
  readonly version?: number;
}

export function globalLogReceiverSumoLogicReceiverUrlVaultSecretInfoToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfo): any {
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


export function globalLogReceiverSumoLogicReceiverUrlVaultSecretInfoToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfo): any {
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

export class GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfo | undefined {
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

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfo | undefined) {
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
export interface GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
}

export function globalLogReceiverSumoLogicReceiverUrlWingmanSecretInfoToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function globalLogReceiverSumoLogicReceiverUrlWingmanSecretInfoToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfoOutputReference | GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfo): any {
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

export class GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfo | undefined) {
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
export interface GlobalLogReceiverSumoLogicReceiverUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#secret_encoding_type GlobalLogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#blindfold_secret_info GlobalLogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#blindfold_secret_info_internal GlobalLogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#clear_secret_info GlobalLogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#vault_secret_info GlobalLogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#wingman_secret_info GlobalLogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfo;
}

export function globalLogReceiverSumoLogicReceiverUrlToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlOutputReference | GlobalLogReceiverSumoLogicReceiverUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: globalLogReceiverSumoLogicReceiverUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: globalLogReceiverSumoLogicReceiverUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: globalLogReceiverSumoLogicReceiverUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function globalLogReceiverSumoLogicReceiverUrlToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverUrlOutputReference | GlobalLogReceiverSumoLogicReceiverUrl): any {
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
      value: globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: globalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: globalLogReceiverSumoLogicReceiverUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: globalLogReceiverSumoLogicReceiverUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: globalLogReceiverSumoLogicReceiverUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSumoLogicReceiverUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiverUrl | undefined {
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

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiverUrl | undefined) {
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
  private _blindfoldSecretInfo = new GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: GlobalLogReceiverSumoLogicReceiverUrlBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: GlobalLogReceiverSumoLogicReceiverUrlClearSecretInfo) {
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
  private _vaultSecretInfo = new GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: GlobalLogReceiverSumoLogicReceiverUrlVaultSecretInfo) {
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
  private _wingmanSecretInfo = new GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: GlobalLogReceiverSumoLogicReceiverUrlWingmanSecretInfo) {
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
export interface GlobalLogReceiverSumoLogicReceiver {
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#url GlobalLogReceiver#url}
  */
  readonly url: GlobalLogReceiverSumoLogicReceiverUrl;
}

export function globalLogReceiverSumoLogicReceiverToTerraform(struct?: GlobalLogReceiverSumoLogicReceiverOutputReference | GlobalLogReceiverSumoLogicReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: globalLogReceiverSumoLogicReceiverUrlToTerraform(struct!.url),
  }
}


export function globalLogReceiverSumoLogicReceiverToHclTerraform(struct?: GlobalLogReceiverSumoLogicReceiverOutputReference | GlobalLogReceiverSumoLogicReceiver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: globalLogReceiverSumoLogicReceiverUrlToHclTerraform(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalLogReceiverSumoLogicReceiverUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalLogReceiverSumoLogicReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalLogReceiverSumoLogicReceiver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalLogReceiverSumoLogicReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url.internalValue = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url = new GlobalLogReceiverSumoLogicReceiverUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: GlobalLogReceiverSumoLogicReceiverUrl) {
    this._url.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}
