// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmDecryptionProfileListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list#device DataScmDecryptionProfileList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list#folder DataScmDecryptionProfileList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list#limit DataScmDecryptionProfileList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list#name DataScmDecryptionProfileList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list#offset DataScmDecryptionProfileList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list#snippet DataScmDecryptionProfileList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmDecryptionProfileListDataSslForwardProxy {
}

export function dataScmDecryptionProfileListDataSslForwardProxyToTerraform(struct?: DataScmDecryptionProfileListDataSslForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDecryptionProfileListDataSslForwardProxyToHclTerraform(struct?: DataScmDecryptionProfileListDataSslForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDecryptionProfileListDataSslForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDecryptionProfileListDataSslForwardProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDecryptionProfileListDataSslForwardProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_include_altname - computed: true, optional: false, required: false
  public get autoIncludeAltname() {
    return this.getBooleanAttribute('auto_include_altname');
  }

  // block_client_cert - computed: true, optional: false, required: false
  public get blockClientCert() {
    return this.getBooleanAttribute('block_client_cert');
  }

  // block_expired_certificate - computed: true, optional: false, required: false
  public get blockExpiredCertificate() {
    return this.getBooleanAttribute('block_expired_certificate');
  }

  // block_timeout_cert - computed: true, optional: false, required: false
  public get blockTimeoutCert() {
    return this.getBooleanAttribute('block_timeout_cert');
  }

  // block_tls13_downgrade_no_resource - computed: true, optional: false, required: false
  public get blockTls13DowngradeNoResource() {
    return this.getBooleanAttribute('block_tls13_downgrade_no_resource');
  }

  // block_unknown_cert - computed: true, optional: false, required: false
  public get blockUnknownCert() {
    return this.getBooleanAttribute('block_unknown_cert');
  }

  // block_unsupported_cipher - computed: true, optional: false, required: false
  public get blockUnsupportedCipher() {
    return this.getBooleanAttribute('block_unsupported_cipher');
  }

  // block_unsupported_version - computed: true, optional: false, required: false
  public get blockUnsupportedVersion() {
    return this.getBooleanAttribute('block_unsupported_version');
  }

  // block_untrusted_issuer - computed: true, optional: false, required: false
  public get blockUntrustedIssuer() {
    return this.getBooleanAttribute('block_untrusted_issuer');
  }

  // restrict_cert_exts - computed: true, optional: false, required: false
  public get restrictCertExts() {
    return this.getBooleanAttribute('restrict_cert_exts');
  }

  // strip_alpn - computed: true, optional: false, required: false
  public get stripAlpn() {
    return this.getBooleanAttribute('strip_alpn');
  }
}
export interface DataScmDecryptionProfileListDataSslInboundProxy {
}

export function dataScmDecryptionProfileListDataSslInboundProxyToTerraform(struct?: DataScmDecryptionProfileListDataSslInboundProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDecryptionProfileListDataSslInboundProxyToHclTerraform(struct?: DataScmDecryptionProfileListDataSslInboundProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDecryptionProfileListDataSslInboundProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDecryptionProfileListDataSslInboundProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDecryptionProfileListDataSslInboundProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_if_hsm_unavailable - computed: true, optional: false, required: false
  public get blockIfHsmUnavailable() {
    return this.getBooleanAttribute('block_if_hsm_unavailable');
  }

  // block_if_no_resource - computed: true, optional: false, required: false
  public get blockIfNoResource() {
    return this.getBooleanAttribute('block_if_no_resource');
  }

  // block_unsupported_cipher - computed: true, optional: false, required: false
  public get blockUnsupportedCipher() {
    return this.getBooleanAttribute('block_unsupported_cipher');
  }

  // block_unsupported_version - computed: true, optional: false, required: false
  public get blockUnsupportedVersion() {
    return this.getBooleanAttribute('block_unsupported_version');
  }
}
export interface DataScmDecryptionProfileListDataSslNoProxy {
}

export function dataScmDecryptionProfileListDataSslNoProxyToTerraform(struct?: DataScmDecryptionProfileListDataSslNoProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDecryptionProfileListDataSslNoProxyToHclTerraform(struct?: DataScmDecryptionProfileListDataSslNoProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDecryptionProfileListDataSslNoProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDecryptionProfileListDataSslNoProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDecryptionProfileListDataSslNoProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_expired_certificate - computed: true, optional: false, required: false
  public get blockExpiredCertificate() {
    return this.getBooleanAttribute('block_expired_certificate');
  }

  // block_untrusted_issuer - computed: true, optional: false, required: false
  public get blockUntrustedIssuer() {
    return this.getBooleanAttribute('block_untrusted_issuer');
  }
}
export interface DataScmDecryptionProfileListDataSslProtocolSettings {
}

export function dataScmDecryptionProfileListDataSslProtocolSettingsToTerraform(struct?: DataScmDecryptionProfileListDataSslProtocolSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDecryptionProfileListDataSslProtocolSettingsToHclTerraform(struct?: DataScmDecryptionProfileListDataSslProtocolSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDecryptionProfileListDataSslProtocolSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDecryptionProfileListDataSslProtocolSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDecryptionProfileListDataSslProtocolSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_algo_md5 - computed: true, optional: false, required: false
  public get authAlgoMd5() {
    return this.getBooleanAttribute('auth_algo_md5');
  }

  // auth_algo_sha1 - computed: true, optional: false, required: false
  public get authAlgoSha1() {
    return this.getBooleanAttribute('auth_algo_sha1');
  }

  // auth_algo_sha256 - computed: true, optional: false, required: false
  public get authAlgoSha256() {
    return this.getBooleanAttribute('auth_algo_sha256');
  }

  // auth_algo_sha384 - computed: true, optional: false, required: false
  public get authAlgoSha384() {
    return this.getBooleanAttribute('auth_algo_sha384');
  }

  // enc_algo_3des - computed: true, optional: false, required: false
  public get encAlgo3Des() {
    return this.getBooleanAttribute('enc_algo_3des');
  }

  // enc_algo_aes_128_cbc - computed: true, optional: false, required: false
  public get encAlgoAes128Cbc() {
    return this.getBooleanAttribute('enc_algo_aes_128_cbc');
  }

  // enc_algo_aes_128_gcm - computed: true, optional: false, required: false
  public get encAlgoAes128Gcm() {
    return this.getBooleanAttribute('enc_algo_aes_128_gcm');
  }

  // enc_algo_aes_256_cbc - computed: true, optional: false, required: false
  public get encAlgoAes256Cbc() {
    return this.getBooleanAttribute('enc_algo_aes_256_cbc');
  }

  // enc_algo_aes_256_gcm - computed: true, optional: false, required: false
  public get encAlgoAes256Gcm() {
    return this.getBooleanAttribute('enc_algo_aes_256_gcm');
  }

  // enc_algo_chacha20_poly1305 - computed: true, optional: false, required: false
  public get encAlgoChacha20Poly1305() {
    return this.getBooleanAttribute('enc_algo_chacha20_poly1305');
  }

  // enc_algo_rc4 - computed: true, optional: false, required: false
  public get encAlgoRc4() {
    return this.getBooleanAttribute('enc_algo_rc4');
  }

  // keyxchg_algo_dhe - computed: true, optional: false, required: false
  public get keyxchgAlgoDhe() {
    return this.getBooleanAttribute('keyxchg_algo_dhe');
  }

  // keyxchg_algo_ecdhe - computed: true, optional: false, required: false
  public get keyxchgAlgoEcdhe() {
    return this.getBooleanAttribute('keyxchg_algo_ecdhe');
  }

  // keyxchg_algo_rsa - computed: true, optional: false, required: false
  public get keyxchgAlgoRsa() {
    return this.getBooleanAttribute('keyxchg_algo_rsa');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
}
export interface DataScmDecryptionProfileListData {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list#id DataScmDecryptionProfileList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Must start with alphanumeric char and should contain only alphanemeric, underscore, hyphen, dot or space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list#name DataScmDecryptionProfileList#name}
  */
  readonly name?: string;
}

export function dataScmDecryptionProfileListDataToTerraform(struct?: DataScmDecryptionProfileListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmDecryptionProfileListDataToHclTerraform(struct?: DataScmDecryptionProfileListData): any {
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

export class DataScmDecryptionProfileListDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmDecryptionProfileListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDecryptionProfileListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: true, optional: false, required: true
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

  // name - computed: true, optional: true, required: false
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

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // ssl_forward_proxy - computed: true, optional: false, required: false
  private _sslForwardProxy = new DataScmDecryptionProfileListDataSslForwardProxyOutputReference(this, "ssl_forward_proxy");
  public get sslForwardProxy() {
    return this._sslForwardProxy;
  }

  // ssl_inbound_proxy - computed: true, optional: false, required: false
  private _sslInboundProxy = new DataScmDecryptionProfileListDataSslInboundProxyOutputReference(this, "ssl_inbound_proxy");
  public get sslInboundProxy() {
    return this._sslInboundProxy;
  }

  // ssl_no_proxy - computed: true, optional: false, required: false
  private _sslNoProxy = new DataScmDecryptionProfileListDataSslNoProxyOutputReference(this, "ssl_no_proxy");
  public get sslNoProxy() {
    return this._sslNoProxy;
  }

  // ssl_protocol_settings - computed: true, optional: false, required: false
  private _sslProtocolSettings = new DataScmDecryptionProfileListDataSslProtocolSettingsOutputReference(this, "ssl_protocol_settings");
  public get sslProtocolSettings() {
    return this._sslProtocolSettings;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }
}

export class DataScmDecryptionProfileListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmDecryptionProfileListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmDecryptionProfileListDataOutputReference {
    return new DataScmDecryptionProfileListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list scm_decryption_profile_list}
*/
export class DataScmDecryptionProfileList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_decryption_profile_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmDecryptionProfileList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmDecryptionProfileList to import
  * @param importFromId The id of the existing DataScmDecryptionProfileList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmDecryptionProfileList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_decryption_profile_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/decryption_profile_list scm_decryption_profile_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmDecryptionProfileListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmDecryptionProfileListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_decryption_profile_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmDecryptionProfileListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
