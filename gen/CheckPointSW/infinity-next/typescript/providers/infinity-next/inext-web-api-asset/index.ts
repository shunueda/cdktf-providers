// https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InextWebApiAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advanced Proxy Setting - Activate access log on gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#access_log InextWebApiAsset#access_log}
  */
  readonly accessLog?: boolean | cdktf.IResolvable;
  /**
  * behaviors used by the asset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#behaviors InextWebApiAsset#behaviors}
  */
  readonly behaviors?: string[];
  /**
  * Indicates whether the asset shares its URLs with other assets. URL sharing is allowed only between assets linked to different profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#is_shares_urls InextWebApiAsset#is_shares_urls}
  */
  readonly isSharesUrls?: boolean | cdktf.IResolvable;
  /**
  * The name of the resource, also acts as its unique ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#name InextWebApiAsset#name}
  */
  readonly name: string;
  /**
  * Profiles linked to the asset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#profiles InextWebApiAsset#profiles}
  */
  readonly profiles?: string[];
  /**
  * Advanced Proxy Setting - Redirect incoming HTTP requests to the same URL using HTTPS. (The configured application URLs for this asset must include both the HTTP and the HTTPS version of each URL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#redirect_to_https InextWebApiAsset#redirect_to_https}
  */
  readonly redirectToHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#state InextWebApiAsset#state}
  */
  readonly state?: string;
  /**
  * The URL of the application's backend server to which the reverse proxy redirects the relevant traffic sent to the exposed URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#upstream_url InextWebApiAsset#upstream_url}
  */
  readonly upstreamUrl?: string;
  /**
  * The application URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#urls InextWebApiAsset#urls}
  */
  readonly urls: string[];
  /**
  * additional_instructions_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#additional_instructions_blocks InextWebApiAsset#additional_instructions_blocks}
  */
  readonly additionalInstructionsBlocks?: InextWebApiAssetAdditionalInstructionsBlocks[] | cdktf.IResolvable;
  /**
  * custom_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#custom_headers InextWebApiAsset#custom_headers}
  */
  readonly customHeaders?: InextWebApiAssetCustomHeaders[] | cdktf.IResolvable;
  /**
  * mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#mtls InextWebApiAsset#mtls}
  */
  readonly mtls?: InextWebApiAssetMtls[] | cdktf.IResolvable;
  /**
  * practice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#practice InextWebApiAsset#practice}
  */
  readonly practice?: InextWebApiAssetPractice[] | cdktf.IResolvable;
  /**
  * proxy_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#proxy_setting InextWebApiAsset#proxy_setting}
  */
  readonly proxySetting?: InextWebApiAssetProxySetting[] | cdktf.IResolvable;
  /**
  * source_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#source_identifier InextWebApiAsset#source_identifier}
  */
  readonly sourceIdentifier?: InextWebApiAssetSourceIdentifier[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#tags InextWebApiAsset#tags}
  */
  readonly tags?: InextWebApiAssetTags[] | cdktf.IResolvable;
}
export interface InextWebApiAssetAdditionalInstructionsBlocks {
  /**
  * The instructions block data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#data InextWebApiAsset#data}
  */
  readonly data?: string;
  /**
  * Whether the instructions block is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#enable InextWebApiAsset#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * The name of the instructions block file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#filename InextWebApiAsset#filename}
  */
  readonly filename?: string;
  /**
  * The type of the instructions block file - .json, .yml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#filename_type InextWebApiAsset#filename_type}
  */
  readonly filenameType?: string;
  /**
  * The type of the additional instructions block - location_instructions or server_instructions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#type InextWebApiAsset#type}
  */
  readonly type: string;
}

export function inextWebApiAssetAdditionalInstructionsBlocksToTerraform(struct?: InextWebApiAssetAdditionalInstructionsBlocks | cdktf.IResolvable): any {
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


export function inextWebApiAssetAdditionalInstructionsBlocksToHclTerraform(struct?: InextWebApiAssetAdditionalInstructionsBlocks | cdktf.IResolvable): any {
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

export class InextWebApiAssetAdditionalInstructionsBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebApiAssetAdditionalInstructionsBlocks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InextWebApiAssetAdditionalInstructionsBlocks | cdktf.IResolvable | undefined) {
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

export class InextWebApiAssetAdditionalInstructionsBlocksList extends cdktf.ComplexList {
  public internalValue? : InextWebApiAssetAdditionalInstructionsBlocks[] | cdktf.IResolvable

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
  public get(index: number): InextWebApiAssetAdditionalInstructionsBlocksOutputReference {
    return new InextWebApiAssetAdditionalInstructionsBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebApiAssetCustomHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#name InextWebApiAsset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#value InextWebApiAsset#value}
  */
  readonly value: string;
}

export function inextWebApiAssetCustomHeadersToTerraform(struct?: InextWebApiAssetCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function inextWebApiAssetCustomHeadersToHclTerraform(struct?: InextWebApiAssetCustomHeaders | cdktf.IResolvable): any {
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

export class InextWebApiAssetCustomHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebApiAssetCustomHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InextWebApiAssetCustomHeaders | cdktf.IResolvable | undefined) {
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

export class InextWebApiAssetCustomHeadersList extends cdktf.ComplexList {
  public internalValue? : InextWebApiAssetCustomHeaders[] | cdktf.IResolvable

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
  public get(index: number): InextWebApiAssetCustomHeadersOutputReference {
    return new InextWebApiAssetCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebApiAssetMtls {
  /**
  * The type of the certificate file - .pem, .crt, .der, .p12, .pfx, .p7b, .p7c, .cer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#certificate_type InextWebApiAsset#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * The certificate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#data InextWebApiAsset#data}
  */
  readonly data?: string;
  /**
  * Whether the mTLS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#enable InextWebApiAsset#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * The name of the certificate file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#filename InextWebApiAsset#filename}
  */
  readonly filename?: string;
  /**
  * The type of the mTLS - server or client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#type InextWebApiAsset#type}
  */
  readonly type: string;
}

export function inextWebApiAssetMtlsToTerraform(struct?: InextWebApiAssetMtls | cdktf.IResolvable): any {
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


export function inextWebApiAssetMtlsToHclTerraform(struct?: InextWebApiAssetMtls | cdktf.IResolvable): any {
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

export class InextWebApiAssetMtlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebApiAssetMtls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InextWebApiAssetMtls | cdktf.IResolvable | undefined) {
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

export class InextWebApiAssetMtlsList extends cdktf.ComplexList {
  public internalValue? : InextWebApiAssetMtls[] | cdktf.IResolvable

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
  public get(index: number): InextWebApiAssetMtlsOutputReference {
    return new InextWebApiAssetMtlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebApiAssetPractice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#id InextWebApiAsset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The mode of the practice: Prevent, Inactive, Disabled or Learn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#main_mode InextWebApiAsset#main_mode}
  */
  readonly mainMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#practice_wrapper_id InextWebApiAsset#practice_wrapper_id}
  */
  readonly practiceWrapperId?: string;
  /**
  * The name of the sub practice as the key and its mode as the value. Allowed modes: Detect, Prevent, Inactive, AccordingToPractice, Disabled, Learn or Active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#sub_practices_modes InextWebApiAsset#sub_practices_modes}
  */
  readonly subPracticesModes?: { [key: string]: string };
  /**
  * The triggers used with the practice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#triggers InextWebApiAsset#triggers}
  */
  readonly triggers?: string[];
}

export function inextWebApiAssetPracticeToTerraform(struct?: InextWebApiAssetPractice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    main_mode: cdktf.stringToTerraform(struct!.mainMode),
    practice_wrapper_id: cdktf.stringToTerraform(struct!.practiceWrapperId),
    sub_practices_modes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.subPracticesModes),
    triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.triggers),
  }
}


export function inextWebApiAssetPracticeToHclTerraform(struct?: InextWebApiAssetPractice | cdktf.IResolvable): any {
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
    practice_wrapper_id: {
      value: cdktf.stringToHclTerraform(struct!.practiceWrapperId),
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

export class InextWebApiAssetPracticeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebApiAssetPractice | cdktf.IResolvable | undefined {
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
    if (this._practiceWrapperId !== undefined) {
      hasAnyValues = true;
      internalValueResult.practiceWrapperId = this._practiceWrapperId;
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

  public set internalValue(value: InextWebApiAssetPractice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mainMode = undefined;
      this._practiceWrapperId = undefined;
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
      this._practiceWrapperId = value.practiceWrapperId;
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

  // practice_wrapper_id - computed: true, optional: true, required: false
  private _practiceWrapperId?: string; 
  public get practiceWrapperId() {
    return this.getStringAttribute('practice_wrapper_id');
  }
  public set practiceWrapperId(value: string) {
    this._practiceWrapperId = value;
  }
  public resetPracticeWrapperId() {
    this._practiceWrapperId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get practiceWrapperIdInput() {
    return this._practiceWrapperId;
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

export class InextWebApiAssetPracticeList extends cdktf.ComplexList {
  public internalValue? : InextWebApiAssetPractice[] | cdktf.IResolvable

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
  public get(index: number): InextWebApiAssetPracticeOutputReference {
    return new InextWebApiAssetPracticeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebApiAssetProxySetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#key InextWebApiAsset#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#value InextWebApiAsset#value}
  */
  readonly value: string;
}

export function inextWebApiAssetProxySettingToTerraform(struct?: InextWebApiAssetProxySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function inextWebApiAssetProxySettingToHclTerraform(struct?: InextWebApiAssetProxySetting | cdktf.IResolvable): any {
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

export class InextWebApiAssetProxySettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebApiAssetProxySetting | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InextWebApiAssetProxySetting | cdktf.IResolvable | undefined) {
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

export class InextWebApiAssetProxySettingList extends cdktf.ComplexList {
  public internalValue? : InextWebApiAssetProxySetting[] | cdktf.IResolvable

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
  public get(index: number): InextWebApiAssetProxySettingOutputReference {
    return new InextWebApiAssetProxySettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebApiAssetSourceIdentifier {
  /**
  * The identifier of the source: SourceIP, XForwardedFor, HeaderKey, Cookie or JWTKey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#identifier InextWebApiAsset#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#values InextWebApiAsset#values}
  */
  readonly values?: string[];
}

export function inextWebApiAssetSourceIdentifierToTerraform(struct?: InextWebApiAssetSourceIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function inextWebApiAssetSourceIdentifierToHclTerraform(struct?: InextWebApiAssetSourceIdentifier | cdktf.IResolvable): any {
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

export class InextWebApiAssetSourceIdentifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebApiAssetSourceIdentifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InextWebApiAssetSourceIdentifier | cdktf.IResolvable | undefined) {
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

export class InextWebApiAssetSourceIdentifierList extends cdktf.ComplexList {
  public internalValue? : InextWebApiAssetSourceIdentifier[] | cdktf.IResolvable

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
  public get(index: number): InextWebApiAssetSourceIdentifierOutputReference {
    return new InextWebApiAssetSourceIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InextWebApiAssetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#key InextWebApiAsset#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#value InextWebApiAsset#value}
  */
  readonly value: string;
}

export function inextWebApiAssetTagsToTerraform(struct?: InextWebApiAssetTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function inextWebApiAssetTagsToHclTerraform(struct?: InextWebApiAssetTags | cdktf.IResolvable): any {
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

export class InextWebApiAssetTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InextWebApiAssetTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InextWebApiAssetTags | cdktf.IResolvable | undefined) {
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

export class InextWebApiAssetTagsList extends cdktf.ComplexList {
  public internalValue? : InextWebApiAssetTags[] | cdktf.IResolvable

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
  public get(index: number): InextWebApiAssetTagsOutputReference {
    return new InextWebApiAssetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset inext_web_api_asset}
*/
export class InextWebApiAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "inext_web_api_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InextWebApiAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InextWebApiAsset to import
  * @param importFromId The id of the existing InextWebApiAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InextWebApiAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "inext_web_api_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/infinity-next/1.3.2/docs/resources/inext_web_api_asset inext_web_api_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InextWebApiAssetConfig
  */
  public constructor(scope: Construct, id: string, config: InextWebApiAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'inext_web_api_asset',
      terraformGeneratorMetadata: {
        providerName: 'infinity-next',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
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
  private _additionalInstructionsBlocks = new InextWebApiAssetAdditionalInstructionsBlocksList(this, "additional_instructions_blocks", true);
  public get additionalInstructionsBlocks() {
    return this._additionalInstructionsBlocks;
  }
  public putAdditionalInstructionsBlocks(value: InextWebApiAssetAdditionalInstructionsBlocks[] | cdktf.IResolvable) {
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
  private _customHeaders = new InextWebApiAssetCustomHeadersList(this, "custom_headers", true);
  public get customHeaders() {
    return this._customHeaders;
  }
  public putCustomHeaders(value: InextWebApiAssetCustomHeaders[] | cdktf.IResolvable) {
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
  private _mtls = new InextWebApiAssetMtlsList(this, "mtls", true);
  public get mtls() {
    return this._mtls;
  }
  public putMtls(value: InextWebApiAssetMtls[] | cdktf.IResolvable) {
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
  private _practice = new InextWebApiAssetPracticeList(this, "practice", true);
  public get practice() {
    return this._practice;
  }
  public putPractice(value: InextWebApiAssetPractice[] | cdktf.IResolvable) {
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
  private _proxySetting = new InextWebApiAssetProxySettingList(this, "proxy_setting", true);
  public get proxySetting() {
    return this._proxySetting;
  }
  public putProxySetting(value: InextWebApiAssetProxySetting[] | cdktf.IResolvable) {
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
  private _sourceIdentifier = new InextWebApiAssetSourceIdentifierList(this, "source_identifier", true);
  public get sourceIdentifier() {
    return this._sourceIdentifier;
  }
  public putSourceIdentifier(value: InextWebApiAssetSourceIdentifier[] | cdktf.IResolvable) {
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
  private _tags = new InextWebApiAssetTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: InextWebApiAssetTags[] | cdktf.IResolvable) {
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
      additional_instructions_blocks: cdktf.listMapper(inextWebApiAssetAdditionalInstructionsBlocksToTerraform, true)(this._additionalInstructionsBlocks.internalValue),
      custom_headers: cdktf.listMapper(inextWebApiAssetCustomHeadersToTerraform, true)(this._customHeaders.internalValue),
      mtls: cdktf.listMapper(inextWebApiAssetMtlsToTerraform, true)(this._mtls.internalValue),
      practice: cdktf.listMapper(inextWebApiAssetPracticeToTerraform, true)(this._practice.internalValue),
      proxy_setting: cdktf.listMapper(inextWebApiAssetProxySettingToTerraform, true)(this._proxySetting.internalValue),
      source_identifier: cdktf.listMapper(inextWebApiAssetSourceIdentifierToTerraform, true)(this._sourceIdentifier.internalValue),
      tags: cdktf.listMapper(inextWebApiAssetTagsToTerraform, true)(this._tags.internalValue),
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
        value: cdktf.listMapperHcl(inextWebApiAssetAdditionalInstructionsBlocksToHclTerraform, true)(this._additionalInstructionsBlocks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiAssetAdditionalInstructionsBlocksList",
      },
      custom_headers: {
        value: cdktf.listMapperHcl(inextWebApiAssetCustomHeadersToHclTerraform, true)(this._customHeaders.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiAssetCustomHeadersList",
      },
      mtls: {
        value: cdktf.listMapperHcl(inextWebApiAssetMtlsToHclTerraform, true)(this._mtls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiAssetMtlsList",
      },
      practice: {
        value: cdktf.listMapperHcl(inextWebApiAssetPracticeToHclTerraform, true)(this._practice.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiAssetPracticeList",
      },
      proxy_setting: {
        value: cdktf.listMapperHcl(inextWebApiAssetProxySettingToHclTerraform, true)(this._proxySetting.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiAssetProxySettingList",
      },
      source_identifier: {
        value: cdktf.listMapperHcl(inextWebApiAssetSourceIdentifierToHclTerraform, true)(this._sourceIdentifier.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiAssetSourceIdentifierList",
      },
      tags: {
        value: cdktf.listMapperHcl(inextWebApiAssetTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InextWebApiAssetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
