// https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InextWebAppAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advanced Proxy Setting - Activate access log on gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#access_log InextWebAppAsset#access_log}
  */
  readonly accessLog?: boolean | cdktf.IResolvable;
  /**
  * behaviors used by the asset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#behaviors InextWebAppAsset#behaviors}
  */
  readonly behaviors?: string[];
  /**
  * Indicates whether the asset shares its URLs with other assets. URL sharing is allowed only between assets linked to different profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#is_shares_urls InextWebAppAsset#is_shares_urls}
  */
  readonly isSharesUrls?: boolean | cdktf.IResolvable;
  /**
  * The name of the resource, also acts as its unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#name InextWebAppAsset#name}
  */
  readonly name: string;
  /**
  * Profiles linked to the asset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#profiles InextWebAppAsset#profiles}
  */
  readonly profiles?: string[];
  /**
  * Advanced Proxy Setting - Redirect incoming HTTP requests to the same URL using HTTPS. (The configured application URLs for this asset must include both the HTTP and the HTTPS version of each URL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#redirect_to_https InextWebAppAsset#redirect_to_https}
  */
  readonly redirectToHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#state InextWebAppAsset#state}
  */
  readonly state?: string;
  /**
  * The URL of the application's backend server to which the reverse proxy redirects the relevant traffic sent to the exposed URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#upstream_url InextWebAppAsset#upstream_url}
  */
  readonly upstreamUrl?: string;
  /**
  * The application URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#urls InextWebAppAsset#urls}
  */
  readonly urls: string[];
  /**
  * additional_instructions_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#additional_instructions_blocks InextWebAppAsset#additional_instructions_blocks}
  */
  readonly additionalInstructionsBlocks?: InextWebAppAssetAdditionalInstructionsBlocks[] | cdktf.IResolvable;
  /**
  * custom_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#custom_headers InextWebAppAsset#custom_headers}
  */
  readonly customHeaders?: InextWebAppAssetCustomHeaders[] | cdktf.IResolvable;
  /**
  * mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#mtls InextWebAppAsset#mtls}
  */
  readonly mtls?: InextWebAppAssetMtls[] | cdktf.IResolvable;
  /**
  * practice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#practice InextWebAppAsset#practice}
  */
  readonly practice?: InextWebAppAssetPractice[] | cdktf.IResolvable;
  /**
  * proxy_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#proxy_setting InextWebAppAsset#proxy_setting}
  */
  readonly proxySetting?: InextWebAppAssetProxySetting[] | cdktf.IResolvable;
  /**
  * source_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#source_identifier InextWebAppAsset#source_identifier}
  */
  readonly sourceIdentifier?: InextWebAppAssetSourceIdentifier[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#tags InextWebAppAsset#tags}
  */
  readonly tags?: InextWebAppAssetTags[] | cdktf.IResolvable;
}
export interface InextWebAppAssetAdditionalInstructionsBlocks {
  /**
  * The instructions block data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#data InextWebAppAsset#data}
  */
  readonly data?: string;
  /**
  * Whether the instructions block is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#enable InextWebAppAsset#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * The name of the instructions block file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#filename InextWebAppAsset#filename}
  */
  readonly filename?: string;
  /**
  * The type of the instructions block file - .json, .yml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#filename_type InextWebAppAsset#filename_type}
  */
  readonly filenameType?: string;
  /**
  * The type of the additional instructions block - location_instructions or server_instructions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#type InextWebAppAsset#type}
  */
  readonly type: string;
}

export function inextWebAppAssetAdditionalInstructionsBlocksToTerraform(struct?: InextWebAppAssetAdditionalInstructionsBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    enable: cdktf.booleanToTerraform(struct!.enable),
    filename: cdktf.stringToTerraform(struct!.filename),
    filename_type: cdktf.stringToTerraform(struct!.filenameType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function inextWebAppAssetAdditionalInstructionsBlocksToHclTerraform(struct?: InextWebAppAssetAdditionalInstructionsBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename_type: {
      value: cdktf.stringToHclTerraform(struct!.filenameType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebAppAssetAdditionalInstructionsBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebAppAssetAdditionalInstructionsBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._filenameType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameType = this._filenameType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebAppAssetAdditionalInstructionsBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._enable = undefined;
      this._filename = undefined;
      this._filenameType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._enable = value.enable;
      this._filename = value.filename;
      this._filenameType = value.filenameType;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_id - computed: true, optional: false, required: false
  public get dataId() {
    return this.getStringAttribute('data_id');
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_id - computed: true, optional: false, required: false
  public get enableId() {
    return this.getStringAttribute('enable_id');
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // filename_id - computed: true, optional: false, required: false
  public get filenameId() {
    return this.getStringAttribute('filename_id');
  }

  // filename_type - computed: false, optional: true, required: false
  private _filenameType?: string; 
  public get filenameType() {
    return this.getStringAttribute('filename_type');
  }
  public set filenameType(value: string) {
    this._filenameType = value;
  }
  public resetFilenameType() {
    this._filenameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameTypeInput() {
    return this._filenameType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class InextWebAppAssetAdditionalInstructionsBlocksList extends cdktf.ComplexList {
  public internalValue? : InextWebAppAssetAdditionalInstructionsBlocks[] | cdktf.IResolvable

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
  public get(index: number): InextWebAppAssetAdditionalInstructionsBlocksOutputReference {
    return new InextWebAppAssetAdditionalInstructionsBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebAppAssetCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#name InextWebAppAsset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#value InextWebAppAsset#value}
  */
  readonly value: string;
}

export function inextWebAppAssetCustomHeadersToTerraform(struct?: InextWebAppAssetCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function inextWebAppAssetCustomHeadersToHclTerraform(struct?: InextWebAppAssetCustomHeaders | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebAppAssetCustomHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebAppAssetCustomHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebAppAssetCustomHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // header_id - computed: true, optional: false, required: false
  public get headerId() {
    return this.getStringAttribute('header_id');
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class InextWebAppAssetCustomHeadersList extends cdktf.ComplexList {
  public internalValue? : InextWebAppAssetCustomHeaders[] | cdktf.IResolvable

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
  public get(index: number): InextWebAppAssetCustomHeadersOutputReference {
    return new InextWebAppAssetCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebAppAssetMtls {
  /**
  * The type of the certificate file - .pem, .crt, .der, .p12, .pfx, .p7b, .p7c, .cer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#certificate_type InextWebAppAsset#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * The certificate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#data InextWebAppAsset#data}
  */
  readonly data?: string;
  /**
  * Whether the mTLS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#enable InextWebAppAsset#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * The name of the certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#filename InextWebAppAsset#filename}
  */
  readonly filename?: string;
  /**
  * The type of the mTLS - server or client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#type InextWebAppAsset#type}
  */
  readonly type: string;
}

export function inextWebAppAssetMtlsToTerraform(struct?: InextWebAppAssetMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_type: cdktf.stringToTerraform(struct!.certificateType),
    data: cdktf.stringToTerraform(struct!.data),
    enable: cdktf.booleanToTerraform(struct!.enable),
    filename: cdktf.stringToTerraform(struct!.filename),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function inextWebAppAssetMtlsToHclTerraform(struct?: InextWebAppAssetMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_type: {
      value: cdktf.stringToHclTerraform(struct!.certificateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebAppAssetMtlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebAppAssetMtls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateType = this._certificateType;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebAppAssetMtls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateType = undefined;
      this._data = undefined;
      this._enable = undefined;
      this._filename = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateType = value.certificateType;
      this._data = value.data;
      this._enable = value.enable;
      this._filename = value.filename;
      this._type = value.type;
    }
  }

  // certificate_type - computed: false, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_id - computed: true, optional: false, required: false
  public get dataId() {
    return this.getStringAttribute('data_id');
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_id - computed: true, optional: false, required: false
  public get enableId() {
    return this.getStringAttribute('enable_id');
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // filename_id - computed: true, optional: false, required: false
  public get filenameId() {
    return this.getStringAttribute('filename_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class InextWebAppAssetMtlsList extends cdktf.ComplexList {
  public internalValue? : InextWebAppAssetMtls[] | cdktf.IResolvable

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
  public get(index: number): InextWebAppAssetMtlsOutputReference {
    return new InextWebAppAssetMtlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebAppAssetPractice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#id InextWebAppAsset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The mode of the practice: Prevent, Inactive, Disabled or Learn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#main_mode InextWebAppAsset#main_mode}
  */
  readonly mainMode: string;
  /**
  * The name of the sub practice as the key and its mode as the value. Allowed modes: Detect, Prevent, Inactive, AccordingToPractice, Disabled, Learn or Active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#sub_practices_modes InextWebAppAsset#sub_practices_modes}
  */
  readonly subPracticesModes?: { [key: string]: string };
  /**
  * The triggers used with the practice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#triggers InextWebAppAsset#triggers}
  */
  readonly triggers?: string[];
}

export function inextWebAppAssetPracticeToTerraform(struct?: InextWebAppAssetPractice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    main_mode: cdktf.stringToTerraform(struct!.mainMode),
    sub_practices_modes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.subPracticesModes),
    triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.triggers),
  }
}


export function inextWebAppAssetPracticeToHclTerraform(struct?: InextWebAppAssetPractice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_mode: {
      value: cdktf.stringToHclTerraform(struct!.mainMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_practices_modes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.subPracticesModes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    triggers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.triggers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebAppAssetPracticeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebAppAssetPractice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mainMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainMode = this._mainMode;
    }
    if (this._subPracticesModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPracticesModes = this._subPracticesModes;
    }
    if (this._triggers !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebAppAssetPractice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mainMode = undefined;
      this._subPracticesModes = undefined;
      this._triggers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mainMode = value.mainMode;
      this._subPracticesModes = value.subPracticesModes;
      this._triggers = value.triggers;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // main_mode - computed: false, optional: false, required: true
  private _mainMode?: string; 
  public get mainMode() {
    return this.getStringAttribute('main_mode');
  }
  public set mainMode(value: string) {
    this._mainMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainModeInput() {
    return this._mainMode;
  }

  // practice_wrapper_id - computed: true, optional: false, required: false
  public get practiceWrapperId() {
    return this.getStringAttribute('practice_wrapper_id');
  }

  // sub_practices_modes - computed: false, optional: true, required: false
  private _subPracticesModes?: { [key: string]: string }; 
  public get subPracticesModes() {
    return this.getStringMapAttribute('sub_practices_modes');
  }
  public set subPracticesModes(value: { [key: string]: string }) {
    this._subPracticesModes = value;
  }
  public resetSubPracticesModes() {
    this._subPracticesModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPracticesModesInput() {
    return this._subPracticesModes;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: string[]; 
  public get triggers() {
    return cdktf.Fn.tolist(this.getListAttribute('triggers'));
  }
  public set triggers(value: string[]) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }
}

export class InextWebAppAssetPracticeList extends cdktf.ComplexList {
  public internalValue? : InextWebAppAssetPractice[] | cdktf.IResolvable

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
  public get(index: number): InextWebAppAssetPracticeOutputReference {
    return new InextWebAppAssetPracticeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebAppAssetProxySetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#key InextWebAppAsset#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#value InextWebAppAsset#value}
  */
  readonly value: string;
}

export function inextWebAppAssetProxySettingToTerraform(struct?: InextWebAppAssetProxySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function inextWebAppAssetProxySettingToHclTerraform(struct?: InextWebAppAssetProxySetting | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebAppAssetProxySettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebAppAssetProxySetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebAppAssetProxySetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class InextWebAppAssetProxySettingList extends cdktf.ComplexList {
  public internalValue? : InextWebAppAssetProxySetting[] | cdktf.IResolvable

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
  public get(index: number): InextWebAppAssetProxySettingOutputReference {
    return new InextWebAppAssetProxySettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebAppAssetSourceIdentifier {
  /**
  * The identifier of the source: SourceIP, XForwardedFor, HeaderKey Cookie or JWTKey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#identifier InextWebAppAsset#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#values InextWebAppAsset#values}
  */
  readonly values?: string[];
}

export function inextWebAppAssetSourceIdentifierToTerraform(struct?: InextWebAppAssetSourceIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function inextWebAppAssetSourceIdentifierToHclTerraform(struct?: InextWebAppAssetSourceIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebAppAssetSourceIdentifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebAppAssetSourceIdentifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebAppAssetSourceIdentifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._values = value.values;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_ids - computed: true, optional: false, required: false
  public get valuesIds() {
    return cdktf.Fn.tolist(this.getListAttribute('values_ids'));
  }
}

export class InextWebAppAssetSourceIdentifierList extends cdktf.ComplexList {
  public internalValue? : InextWebAppAssetSourceIdentifier[] | cdktf.IResolvable

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
  public get(index: number): InextWebAppAssetSourceIdentifierOutputReference {
    return new InextWebAppAssetSourceIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebAppAssetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#key InextWebAppAsset#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#value InextWebAppAsset#value}
  */
  readonly value: string;
}

export function inextWebAppAssetTagsToTerraform(struct?: InextWebAppAssetTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function inextWebAppAssetTagsToHclTerraform(struct?: InextWebAppAssetTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InextWebAppAssetTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebAppAssetTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InextWebAppAssetTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class InextWebAppAssetTagsList extends cdktf.ComplexList {
  public internalValue? : InextWebAppAssetTags[] | cdktf.IResolvable

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
  public get(index: number): InextWebAppAssetTagsOutputReference {
    return new InextWebAppAssetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset inext_web_app_asset}
*/
export class InextWebAppAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "inext_web_app_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InextWebAppAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InextWebAppAsset to import
  * @param importFromId The id of the existing InextWebAppAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InextWebAppAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "inext_web_app_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.0/docs/resources/inext_web_app_asset inext_web_app_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InextWebAppAssetConfig
  */
  public constructor(scope: Construct, id: string, config: InextWebAppAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'inext_web_app_asset',
      terraformGeneratorMetadata: {
        providerName: 'infinity-next',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLog = config.accessLog;
    this._behaviors = config.behaviors;
    this._isSharesUrls = config.isSharesUrls;
    this._name = config.name;
    this._profiles = config.profiles;
    this._redirectToHttps = config.redirectToHttps;
    this._state = config.state;
    this._upstreamUrl = config.upstreamUrl;
    this._urls = config.urls;
    this._additionalInstructionsBlocks.internalValue = config.additionalInstructionsBlocks;
    this._customHeaders.internalValue = config.customHeaders;
    this._mtls.internalValue = config.mtls;
    this._practice.internalValue = config.practice;
    this._proxySetting.internalValue = config.proxySetting;
    this._sourceIdentifier.internalValue = config.sourceIdentifier;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_log - computed: false, optional: true, required: false
  private _accessLog?: boolean | cdktf.IResolvable; 
  public get accessLog() {
    return this.getBooleanAttribute('access_log');
  }
  public set accessLog(value: boolean | cdktf.IResolvable) {
    this._accessLog = value;
  }
  public resetAccessLog() {
    this._accessLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog;
  }

  // access_log_id - computed: true, optional: false, required: false
  public get accessLogId() {
    return this.getStringAttribute('access_log_id');
  }

  // asset_type - computed: true, optional: false, required: false
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }

  // behaviors - computed: false, optional: true, required: false
  private _behaviors?: string[]; 
  public get behaviors() {
    return cdktf.Fn.tolist(this.getListAttribute('behaviors'));
  }
  public set behaviors(value: string[]) {
    this._behaviors = value;
  }
  public resetBehaviors() {
    this._behaviors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorsInput() {
    return this._behaviors;
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // custom_headers_id - computed: true, optional: false, required: false
  public get customHeadersId() {
    return this.getStringAttribute('custom_headers_id');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intelligence_tags - computed: true, optional: false, required: false
  public get intelligenceTags() {
    return this.getStringAttribute('intelligence_tags');
  }

  // is_shares_urls - computed: true, optional: true, required: false
  private _isSharesUrls?: boolean | cdktf.IResolvable; 
  public get isSharesUrls() {
    return this.getBooleanAttribute('is_shares_urls');
  }
  public set isSharesUrls(value: boolean | cdktf.IResolvable) {
    this._isSharesUrls = value;
  }
  public resetIsSharesUrls() {
    this._isSharesUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSharesUrlsInput() {
    return this._isSharesUrls;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // main_attributes - computed: true, optional: false, required: false
  public get mainAttributes() {
    return this.getStringAttribute('main_attributes');
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

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getStringAttribute('order');
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return cdktf.Fn.tolist(this.getListAttribute('profiles'));
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // redirect_to_https - computed: false, optional: true, required: false
  private _redirectToHttps?: boolean | cdktf.IResolvable; 
  public get redirectToHttps() {
    return this.getBooleanAttribute('redirect_to_https');
  }
  public set redirectToHttps(value: boolean | cdktf.IResolvable) {
    this._redirectToHttps = value;
  }
  public resetRedirectToHttps() {
    this._redirectToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToHttpsInput() {
    return this._redirectToHttps;
  }

  // redirect_to_https_id - computed: true, optional: false, required: false
  public get redirectToHttpsId() {
    return this.getStringAttribute('redirect_to_https_id');
  }

  // sources - computed: true, optional: false, required: false
  public get sources() {
    return this.getStringAttribute('sources');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // upstream_url - computed: false, optional: true, required: false
  private _upstreamUrl?: string; 
  public get upstreamUrl() {
    return this.getStringAttribute('upstream_url');
  }
  public set upstreamUrl(value: string) {
    this._upstreamUrl = value;
  }
  public resetUpstreamUrl() {
    this._upstreamUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamUrlInput() {
    return this._upstreamUrl;
  }

  // urls - computed: false, optional: false, required: true
  private _urls?: string[]; 
  public get urls() {
    return cdktf.Fn.tolist(this.getListAttribute('urls'));
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // urls_ids - computed: true, optional: false, required: false
  public get urlsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('urls_ids'));
  }

  // additional_instructions_blocks - computed: false, optional: true, required: false
  private _additionalInstructionsBlocks = new InextWebAppAssetAdditionalInstructionsBlocksList(this, "additional_instructions_blocks", true);
  public get additionalInstructionsBlocks() {
    return this._additionalInstructionsBlocks;
  }
  public putAdditionalInstructionsBlocks(value: InextWebAppAssetAdditionalInstructionsBlocks[] | cdktf.IResolvable) {
    this._additionalInstructionsBlocks.internalValue = value;
  }
  public resetAdditionalInstructionsBlocks() {
    this._additionalInstructionsBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInstructionsBlocksInput() {
    return this._additionalInstructionsBlocks.internalValue;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders = new InextWebAppAssetCustomHeadersList(this, "custom_headers", true);
  public get customHeaders() {
    return this._customHeaders;
  }
  public putCustomHeaders(value: InextWebAppAssetCustomHeaders[] | cdktf.IResolvable) {
    this._customHeaders.internalValue = value;
  }
  public resetCustomHeaders() {
    this._customHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders.internalValue;
  }

  // mtls - computed: false, optional: true, required: false
  private _mtls = new InextWebAppAssetMtlsList(this, "mtls", true);
  public get mtls() {
    return this._mtls;
  }
  public putMtls(value: InextWebAppAssetMtls[] | cdktf.IResolvable) {
    this._mtls.internalValue = value;
  }
  public resetMtls() {
    this._mtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsInput() {
    return this._mtls.internalValue;
  }

  // practice - computed: false, optional: true, required: false
  private _practice = new InextWebAppAssetPracticeList(this, "practice", true);
  public get practice() {
    return this._practice;
  }
  public putPractice(value: InextWebAppAssetPractice[] | cdktf.IResolvable) {
    this._practice.internalValue = value;
  }
  public resetPractice() {
    this._practice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get practiceInput() {
    return this._practice.internalValue;
  }

  // proxy_setting - computed: false, optional: true, required: false
  private _proxySetting = new InextWebAppAssetProxySettingList(this, "proxy_setting", true);
  public get proxySetting() {
    return this._proxySetting;
  }
  public putProxySetting(value: InextWebAppAssetProxySetting[] | cdktf.IResolvable) {
    this._proxySetting.internalValue = value;
  }
  public resetProxySetting() {
    this._proxySetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySettingInput() {
    return this._proxySetting.internalValue;
  }

  // source_identifier - computed: false, optional: true, required: false
  private _sourceIdentifier = new InextWebAppAssetSourceIdentifierList(this, "source_identifier", true);
  public get sourceIdentifier() {
    return this._sourceIdentifier;
  }
  public putSourceIdentifier(value: InextWebAppAssetSourceIdentifier[] | cdktf.IResolvable) {
    this._sourceIdentifier.internalValue = value;
  }
  public resetSourceIdentifier() {
    this._sourceIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdentifierInput() {
    return this._sourceIdentifier.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new InextWebAppAssetTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: InextWebAppAssetTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_log: cdktf.booleanToTerraform(this._accessLog),
      behaviors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._behaviors),
      is_shares_urls: cdktf.booleanToTerraform(this._isSharesUrls),
      name: cdktf.stringToTerraform(this._name),
      profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profiles),
      redirect_to_https: cdktf.booleanToTerraform(this._redirectToHttps),
      state: cdktf.stringToTerraform(this._state),
      upstream_url: cdktf.stringToTerraform(this._upstreamUrl),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
      additional_instructions_blocks: cdktf.listMapper(inextWebAppAssetAdditionalInstructionsBlocksToTerraform, true)(this._additionalInstructionsBlocks.internalValue),
      custom_headers: cdktf.listMapper(inextWebAppAssetCustomHeadersToTerraform, true)(this._customHeaders.internalValue),
      mtls: cdktf.listMapper(inextWebAppAssetMtlsToTerraform, true)(this._mtls.internalValue),
      practice: cdktf.listMapper(inextWebAppAssetPracticeToTerraform, true)(this._practice.internalValue),
      proxy_setting: cdktf.listMapper(inextWebAppAssetProxySettingToTerraform, true)(this._proxySetting.internalValue),
      source_identifier: cdktf.listMapper(inextWebAppAssetSourceIdentifierToTerraform, true)(this._sourceIdentifier.internalValue),
      tags: cdktf.listMapper(inextWebAppAssetTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_log: {
        value: cdktf.booleanToHclTerraform(this._accessLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      behaviors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._behaviors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_shares_urls: {
        value: cdktf.booleanToHclTerraform(this._isSharesUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redirect_to_https: {
        value: cdktf.booleanToHclTerraform(this._redirectToHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_url: {
        value: cdktf.stringToHclTerraform(this._upstreamUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_instructions_blocks: {
        value: cdktf.listMapperHcl(inextWebAppAssetAdditionalInstructionsBlocksToHclTerraform, true)(this._additionalInstructionsBlocks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppAssetAdditionalInstructionsBlocksList",
      },
      custom_headers: {
        value: cdktf.listMapperHcl(inextWebAppAssetCustomHeadersToHclTerraform, true)(this._customHeaders.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppAssetCustomHeadersList",
      },
      mtls: {
        value: cdktf.listMapperHcl(inextWebAppAssetMtlsToHclTerraform, true)(this._mtls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppAssetMtlsList",
      },
      practice: {
        value: cdktf.listMapperHcl(inextWebAppAssetPracticeToHclTerraform, true)(this._practice.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppAssetPracticeList",
      },
      proxy_setting: {
        value: cdktf.listMapperHcl(inextWebAppAssetProxySettingToHclTerraform, true)(this._proxySetting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppAssetProxySettingList",
      },
      source_identifier: {
        value: cdktf.listMapperHcl(inextWebAppAssetSourceIdentifierToHclTerraform, true)(this._sourceIdentifier.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppAssetSourceIdentifierList",
      },
      tags: {
        value: cdktf.listMapperHcl(inextWebAppAssetTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebAppAssetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
