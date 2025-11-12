// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/decryption_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmDecryptionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/decryption_profile#id DataScmDecryptionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Must start with alphanumeric char and should contain only alphanemeric, underscore, hyphen, dot or space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/decryption_profile#name DataScmDecryptionProfile#name}
  */
  readonly name?: string;
}
export interface DataScmDecryptionProfileSslForwardProxy {
}

export function dataScmDecryptionProfileSslForwardProxyToTerraform(struct?: DataScmDecryptionProfileSslForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDecryptionProfileSslForwardProxyToHclTerraform(struct?: DataScmDecryptionProfileSslForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDecryptionProfileSslForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDecryptionProfileSslForwardProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDecryptionProfileSslForwardProxy | undefined) {
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
export interface DataScmDecryptionProfileSslInboundProxy {
}

export function dataScmDecryptionProfileSslInboundProxyToTerraform(struct?: DataScmDecryptionProfileSslInboundProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDecryptionProfileSslInboundProxyToHclTerraform(struct?: DataScmDecryptionProfileSslInboundProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDecryptionProfileSslInboundProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDecryptionProfileSslInboundProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDecryptionProfileSslInboundProxy | undefined) {
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
export interface DataScmDecryptionProfileSslNoProxy {
}

export function dataScmDecryptionProfileSslNoProxyToTerraform(struct?: DataScmDecryptionProfileSslNoProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDecryptionProfileSslNoProxyToHclTerraform(struct?: DataScmDecryptionProfileSslNoProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDecryptionProfileSslNoProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDecryptionProfileSslNoProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDecryptionProfileSslNoProxy | undefined) {
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
export interface DataScmDecryptionProfileSslProtocolSettings {
}

export function dataScmDecryptionProfileSslProtocolSettingsToTerraform(struct?: DataScmDecryptionProfileSslProtocolSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmDecryptionProfileSslProtocolSettingsToHclTerraform(struct?: DataScmDecryptionProfileSslProtocolSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmDecryptionProfileSslProtocolSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmDecryptionProfileSslProtocolSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmDecryptionProfileSslProtocolSettings | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/decryption_profile scm_decryption_profile}
*/
export class DataScmDecryptionProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_decryption_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmDecryptionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmDecryptionProfile to import
  * @param importFromId The id of the existing DataScmDecryptionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/decryption_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmDecryptionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_decryption_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/decryption_profile scm_decryption_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmDecryptionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmDecryptionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_decryption_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
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
  private _sslForwardProxy = new DataScmDecryptionProfileSslForwardProxyOutputReference(this, "ssl_forward_proxy");
  public get sslForwardProxy() {
    return this._sslForwardProxy;
  }

  // ssl_inbound_proxy - computed: true, optional: false, required: false
  private _sslInboundProxy = new DataScmDecryptionProfileSslInboundProxyOutputReference(this, "ssl_inbound_proxy");
  public get sslInboundProxy() {
    return this._sslInboundProxy;
  }

  // ssl_no_proxy - computed: true, optional: false, required: false
  private _sslNoProxy = new DataScmDecryptionProfileSslNoProxyOutputReference(this, "ssl_no_proxy");
  public get sslNoProxy() {
    return this._sslNoProxy;
  }

  // ssl_protocol_settings - computed: true, optional: false, required: false
  private _sslProtocolSettings = new DataScmDecryptionProfileSslProtocolSettingsOutputReference(this, "ssl_protocol_settings");
  public get sslProtocolSettings() {
    return this._sslProtocolSettings;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
