// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetadataUrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name for the Metadata URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url#name MetadataUrl#name}
  */
  readonly name: string;
  /**
  * The Metadata URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url#url MetadataUrl#url}
  */
  readonly url: string;
  /**
  * The persistent, unique ID for the Metadata Url. It can be any combination of `[a-zA-Z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url#url_id MetadataUrl#url_id}
  */
  readonly urlId?: string;
  /**
  * Perform Metadata Signature Validation. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url#validate_signature MetadataUrl#validate_signature}
  */
  readonly validateSignature?: boolean | cdktf.IResolvable;
  /**
  * Data of the Signature Verification Certificate for the Metadata URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url#x509_file MetadataUrl#x509_file}
  */
  readonly x509File?: MetadataUrlX509File;
}
export interface MetadataUrlCertView {
}

export function metadataUrlCertViewToTerraform(struct?: MetadataUrlCertView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function metadataUrlCertViewToHclTerraform(struct?: MetadataUrlCertView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MetadataUrlCertViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetadataUrlCertView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetadataUrlCertView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crypto_provider - computed: true, optional: false, required: false
  public get cryptoProvider() {
    return this.getStringAttribute('crypto_provider');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_dn - computed: true, optional: false, required: false
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }

  // sha256_fingerprint - computed: true, optional: false, required: false
  public get sha256Fingerprint() {
    return this.getStringAttribute('sha256_fingerprint');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_alternative_names'));
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface MetadataUrlX509File {
  /**
  * Cryptographic Provider. This is only applicable if Hybrid HSM mode is `true`. Options are `LOCAL` or `HSM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url#crypto_provider MetadataUrl#crypto_provider}
  */
  readonly cryptoProvider?: string;
  /**
  * The certificate data in PEM format. New line characters should be omitted or encoded in this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url#file_data MetadataUrl#file_data}
  */
  readonly fileData: string;
  /**
  * The persistent, unique ID for the certificate. It can be any combination of `[a-z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url#id MetadataUrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function metadataUrlX509FileToTerraform(struct?: MetadataUrlX509File | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_provider: cdktf.stringToTerraform(struct!.cryptoProvider),
    file_data: cdktf.stringToTerraform(struct!.fileData),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function metadataUrlX509FileToHclTerraform(struct?: MetadataUrlX509File | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_provider: {
      value: cdktf.stringToHclTerraform(struct!.cryptoProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_data: {
      value: cdktf.stringToHclTerraform(struct!.fileData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetadataUrlX509FileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetadataUrlX509File | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoProvider = this._cryptoProvider;
    }
    if (this._fileData !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileData = this._fileData;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetadataUrlX509File | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cryptoProvider = undefined;
      this._fileData = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cryptoProvider = value.cryptoProvider;
      this._fileData = value.fileData;
      this._id = value.id;
    }
  }

  // crypto_provider - computed: false, optional: true, required: false
  private _cryptoProvider?: string; 
  public get cryptoProvider() {
    return this.getStringAttribute('crypto_provider');
  }
  public set cryptoProvider(value: string) {
    this._cryptoProvider = value;
  }
  public resetCryptoProvider() {
    this._cryptoProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoProviderInput() {
    return this._cryptoProvider;
  }

  // file_data - computed: false, optional: false, required: true
  private _fileData?: string; 
  public get fileData() {
    return this.getStringAttribute('file_data');
  }
  public set fileData(value: string) {
    this._fileData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDataInput() {
    return this._fileData;
  }

  // formatted_file_data - computed: true, optional: false, required: false
  public get formattedFileData() {
    return this.getStringAttribute('formatted_file_data');
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url pingfederate_metadata_url}
*/
export class MetadataUrl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_metadata_url";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetadataUrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetadataUrl to import
  * @param importFromId The id of the existing MetadataUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetadataUrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_metadata_url", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/metadata_url pingfederate_metadata_url} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetadataUrlConfig
  */
  public constructor(scope: Construct, id: string, config: MetadataUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_metadata_url',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
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
    this._url = config.url;
    this._urlId = config.urlId;
    this._validateSignature = config.validateSignature;
    this._x509File.internalValue = config.x509File;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_view - computed: true, optional: false, required: false
  private _certView = new MetadataUrlCertViewOutputReference(this, "cert_view");
  public get certView() {
    return this._certView;
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

  // url_id - computed: true, optional: true, required: false
  private _urlId?: string; 
  public get urlId() {
    return this.getStringAttribute('url_id');
  }
  public set urlId(value: string) {
    this._urlId = value;
  }
  public resetUrlId() {
    this._urlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlIdInput() {
    return this._urlId;
  }

  // validate_signature - computed: true, optional: true, required: false
  private _validateSignature?: boolean | cdktf.IResolvable; 
  public get validateSignature() {
    return this.getBooleanAttribute('validate_signature');
  }
  public set validateSignature(value: boolean | cdktf.IResolvable) {
    this._validateSignature = value;
  }
  public resetValidateSignature() {
    this._validateSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateSignatureInput() {
    return this._validateSignature;
  }

  // x509_file - computed: false, optional: true, required: false
  private _x509File = new MetadataUrlX509FileOutputReference(this, "x509_file");
  public get x509File() {
    return this._x509File;
  }
  public putX509File(value: MetadataUrlX509File) {
    this._x509File.internalValue = value;
  }
  public resetX509File() {
    this._x509File.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509FileInput() {
    return this._x509File.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      url: cdktf.stringToTerraform(this._url),
      url_id: cdktf.stringToTerraform(this._urlId),
      validate_signature: cdktf.booleanToTerraform(this._validateSignature),
      x509_file: metadataUrlX509FileToTerraform(this._x509File.internalValue),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_id: {
        value: cdktf.stringToHclTerraform(this._urlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_signature: {
        value: cdktf.booleanToHclTerraform(this._validateSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      x509_file: {
        value: metadataUrlX509FileToHclTerraform(this._x509File.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MetadataUrlX509File",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
