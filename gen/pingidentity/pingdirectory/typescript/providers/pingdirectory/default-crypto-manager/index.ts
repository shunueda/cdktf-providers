// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultCryptoManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the key length in bits for the preferred cipher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#cipher_key_length DefaultCryptoManager#cipher_key_length}
  */
  readonly cipherKeyLength?: number;
  /**
  * Specifies the cipher for the Directory Server using the syntax algorithm/mode/padding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#cipher_transformation DefaultCryptoManager#cipher_transformation}
  */
  readonly cipherTransformation?: string;
  /**
  * Specifies the preferred message digest algorithm for the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#digest_algorithm DefaultCryptoManager#digest_algorithm}
  */
  readonly digestAlgorithm?: string;
  /**
  * Indicates whether to enable support for TLS cipher suites that use the RSA key exchange algorithm. Cipher suites that rely on RSA key exchange are not recommended because they do not support forward secrecy, which means that if the private key is compromised, then any communication negotiated using that private key should also be considered compromised.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#enable_rsa_key_exchange_cipher_suites DefaultCryptoManager#enable_rsa_key_exchange_cipher_suites}
  */
  readonly enableRsaKeyExchangeCipherSuites?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to enable support for TLS cipher suites that use the SHA-1 digest algorithm. The SHA-1 digest algorithm is no longer considered secure and is not recommended for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#enable_sha_1_cipher_suites DefaultCryptoManager#enable_sha_1_cipher_suites}
  */
  readonly enableSha1CipherSuites?: boolean | cdktf.IResolvable;
  /**
  * The preferred key wrapping transformation for the Directory Server. This value must be the same for all server instances in a replication topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#key_wrapping_transformation DefaultCryptoManager#key_wrapping_transformation}
  */
  readonly keyWrappingTransformation?: string;
  /**
  * Specifies the preferred MAC algorithm for the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#mac_algorithm DefaultCryptoManager#mac_algorithm}
  */
  readonly macAlgorithm?: string;
  /**
  * Specifies the key length in bits for the preferred MAC algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#mac_key_length DefaultCryptoManager#mac_key_length}
  */
  readonly macKeyLength?: number;
  /**
  * Specifies the names of the TLS cipher suites that will be enabled for outbound connections initiated by the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#outbound_ssl_cipher_suite DefaultCryptoManager#outbound_ssl_cipher_suite}
  */
  readonly outboundSslCipherSuite?: string[];
  /**
  * Specifies the names of the TLS protocols that will be enabled for outbound connections initiated by the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#outbound_ssl_protocol DefaultCryptoManager#outbound_ssl_protocol}
  */
  readonly outboundSslProtocol?: string[];
  /**
  * The ID of the encryption settings definition to use for generating digital signatures. If this is not specified, then the server's preferred encryption settings definition will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#signing_encryption_settings_id DefaultCryptoManager#signing_encryption_settings_id}
  */
  readonly signingEncryptionSettingsId?: string;
  /**
  * Specifies the nickname (also called the alias) of the certificate that the Crypto Manager should use when performing SSL communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#ssl_cert_nickname DefaultCryptoManager#ssl_cert_nickname}
  */
  readonly sslCertNickname?: string;
  /**
  * Specifies the names of the TLS cipher suites that are allowed for use in secure communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#ssl_cipher_suite DefaultCryptoManager#ssl_cipher_suite}
  */
  readonly sslCipherSuite?: string[];
  /**
  * Specifies the names of TLS protocols that are allowed for use in secure communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#ssl_protocol DefaultCryptoManager#ssl_protocol}
  */
  readonly sslProtocol?: string[];
}
export interface DefaultCryptoManagerRequiredActions {
}

export function defaultCryptoManagerRequiredActionsToTerraform(struct?: DefaultCryptoManagerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultCryptoManagerRequiredActionsToHclTerraform(struct?: DefaultCryptoManagerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultCryptoManagerRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultCryptoManagerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCryptoManagerRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultCryptoManagerRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultCryptoManagerRequiredActionsOutputReference {
    return new DefaultCryptoManagerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager pingdirectory_default_crypto_manager}
*/
export class DefaultCryptoManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_crypto_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultCryptoManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultCryptoManager to import
  * @param importFromId The id of the existing DefaultCryptoManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultCryptoManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_crypto_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_crypto_manager pingdirectory_default_crypto_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultCryptoManagerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultCryptoManagerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_crypto_manager',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cipherKeyLength = config.cipherKeyLength;
    this._cipherTransformation = config.cipherTransformation;
    this._digestAlgorithm = config.digestAlgorithm;
    this._enableRsaKeyExchangeCipherSuites = config.enableRsaKeyExchangeCipherSuites;
    this._enableSha1CipherSuites = config.enableSha1CipherSuites;
    this._keyWrappingTransformation = config.keyWrappingTransformation;
    this._macAlgorithm = config.macAlgorithm;
    this._macKeyLength = config.macKeyLength;
    this._outboundSslCipherSuite = config.outboundSslCipherSuite;
    this._outboundSslProtocol = config.outboundSslProtocol;
    this._signingEncryptionSettingsId = config.signingEncryptionSettingsId;
    this._sslCertNickname = config.sslCertNickname;
    this._sslCipherSuite = config.sslCipherSuite;
    this._sslProtocol = config.sslProtocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher_key_length - computed: true, optional: true, required: false
  private _cipherKeyLength?: number; 
  public get cipherKeyLength() {
    return this.getNumberAttribute('cipher_key_length');
  }
  public set cipherKeyLength(value: number) {
    this._cipherKeyLength = value;
  }
  public resetCipherKeyLength() {
    this._cipherKeyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherKeyLengthInput() {
    return this._cipherKeyLength;
  }

  // cipher_transformation - computed: true, optional: true, required: false
  private _cipherTransformation?: string; 
  public get cipherTransformation() {
    return this.getStringAttribute('cipher_transformation');
  }
  public set cipherTransformation(value: string) {
    this._cipherTransformation = value;
  }
  public resetCipherTransformation() {
    this._cipherTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherTransformationInput() {
    return this._cipherTransformation;
  }

  // digest_algorithm - computed: true, optional: true, required: false
  private _digestAlgorithm?: string; 
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }
  public set digestAlgorithm(value: string) {
    this._digestAlgorithm = value;
  }
  public resetDigestAlgorithm() {
    this._digestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAlgorithmInput() {
    return this._digestAlgorithm;
  }

  // enable_rsa_key_exchange_cipher_suites - computed: true, optional: true, required: false
  private _enableRsaKeyExchangeCipherSuites?: boolean | cdktf.IResolvable; 
  public get enableRsaKeyExchangeCipherSuites() {
    return this.getBooleanAttribute('enable_rsa_key_exchange_cipher_suites');
  }
  public set enableRsaKeyExchangeCipherSuites(value: boolean | cdktf.IResolvable) {
    this._enableRsaKeyExchangeCipherSuites = value;
  }
  public resetEnableRsaKeyExchangeCipherSuites() {
    this._enableRsaKeyExchangeCipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRsaKeyExchangeCipherSuitesInput() {
    return this._enableRsaKeyExchangeCipherSuites;
  }

  // enable_sha_1_cipher_suites - computed: true, optional: true, required: false
  private _enableSha1CipherSuites?: boolean | cdktf.IResolvable; 
  public get enableSha1CipherSuites() {
    return this.getBooleanAttribute('enable_sha_1_cipher_suites');
  }
  public set enableSha1CipherSuites(value: boolean | cdktf.IResolvable) {
    this._enableSha1CipherSuites = value;
  }
  public resetEnableSha1CipherSuites() {
    this._enableSha1CipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSha1CipherSuitesInput() {
    return this._enableSha1CipherSuites;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_wrapping_transformation - computed: true, optional: true, required: false
  private _keyWrappingTransformation?: string; 
  public get keyWrappingTransformation() {
    return this.getStringAttribute('key_wrapping_transformation');
  }
  public set keyWrappingTransformation(value: string) {
    this._keyWrappingTransformation = value;
  }
  public resetKeyWrappingTransformation() {
    this._keyWrappingTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWrappingTransformationInput() {
    return this._keyWrappingTransformation;
  }

  // mac_algorithm - computed: true, optional: true, required: false
  private _macAlgorithm?: string; 
  public get macAlgorithm() {
    return this.getStringAttribute('mac_algorithm');
  }
  public set macAlgorithm(value: string) {
    this._macAlgorithm = value;
  }
  public resetMacAlgorithm() {
    this._macAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAlgorithmInput() {
    return this._macAlgorithm;
  }

  // mac_key_length - computed: true, optional: true, required: false
  private _macKeyLength?: number; 
  public get macKeyLength() {
    return this.getNumberAttribute('mac_key_length');
  }
  public set macKeyLength(value: number) {
    this._macKeyLength = value;
  }
  public resetMacKeyLength() {
    this._macKeyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macKeyLengthInput() {
    return this._macKeyLength;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // outbound_ssl_cipher_suite - computed: true, optional: true, required: false
  private _outboundSslCipherSuite?: string[]; 
  public get outboundSslCipherSuite() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_ssl_cipher_suite'));
  }
  public set outboundSslCipherSuite(value: string[]) {
    this._outboundSslCipherSuite = value;
  }
  public resetOutboundSslCipherSuite() {
    this._outboundSslCipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundSslCipherSuiteInput() {
    return this._outboundSslCipherSuite;
  }

  // outbound_ssl_protocol - computed: true, optional: true, required: false
  private _outboundSslProtocol?: string[]; 
  public get outboundSslProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_ssl_protocol'));
  }
  public set outboundSslProtocol(value: string[]) {
    this._outboundSslProtocol = value;
  }
  public resetOutboundSslProtocol() {
    this._outboundSslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundSslProtocolInput() {
    return this._outboundSslProtocol;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultCryptoManagerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // signing_encryption_settings_id - computed: true, optional: true, required: false
  private _signingEncryptionSettingsId?: string; 
  public get signingEncryptionSettingsId() {
    return this.getStringAttribute('signing_encryption_settings_id');
  }
  public set signingEncryptionSettingsId(value: string) {
    this._signingEncryptionSettingsId = value;
  }
  public resetSigningEncryptionSettingsId() {
    this._signingEncryptionSettingsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingEncryptionSettingsIdInput() {
    return this._signingEncryptionSettingsId;
  }

  // ssl_cert_nickname - computed: true, optional: true, required: false
  private _sslCertNickname?: string; 
  public get sslCertNickname() {
    return this.getStringAttribute('ssl_cert_nickname');
  }
  public set sslCertNickname(value: string) {
    this._sslCertNickname = value;
  }
  public resetSslCertNickname() {
    this._sslCertNickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertNicknameInput() {
    return this._sslCertNickname;
  }

  // ssl_cipher_suite - computed: true, optional: true, required: false
  private _sslCipherSuite?: string[]; 
  public get sslCipherSuite() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_cipher_suite'));
  }
  public set sslCipherSuite(value: string[]) {
    this._sslCipherSuite = value;
  }
  public resetSslCipherSuite() {
    this._sslCipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherSuiteInput() {
    return this._sslCipherSuite;
  }

  // ssl_protocol - computed: true, optional: true, required: false
  private _sslProtocol?: string[]; 
  public get sslProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_protocol'));
  }
  public set sslProtocol(value: string[]) {
    this._sslProtocol = value;
  }
  public resetSslProtocol() {
    this._sslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cipher_key_length: cdktf.numberToTerraform(this._cipherKeyLength),
      cipher_transformation: cdktf.stringToTerraform(this._cipherTransformation),
      digest_algorithm: cdktf.stringToTerraform(this._digestAlgorithm),
      enable_rsa_key_exchange_cipher_suites: cdktf.booleanToTerraform(this._enableRsaKeyExchangeCipherSuites),
      enable_sha_1_cipher_suites: cdktf.booleanToTerraform(this._enableSha1CipherSuites),
      key_wrapping_transformation: cdktf.stringToTerraform(this._keyWrappingTransformation),
      mac_algorithm: cdktf.stringToTerraform(this._macAlgorithm),
      mac_key_length: cdktf.numberToTerraform(this._macKeyLength),
      outbound_ssl_cipher_suite: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outboundSslCipherSuite),
      outbound_ssl_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outboundSslProtocol),
      signing_encryption_settings_id: cdktf.stringToTerraform(this._signingEncryptionSettingsId),
      ssl_cert_nickname: cdktf.stringToTerraform(this._sslCertNickname),
      ssl_cipher_suite: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslCipherSuite),
      ssl_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslProtocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cipher_key_length: {
        value: cdktf.numberToHclTerraform(this._cipherKeyLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cipher_transformation: {
        value: cdktf.stringToHclTerraform(this._cipherTransformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest_algorithm: {
        value: cdktf.stringToHclTerraform(this._digestAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_rsa_key_exchange_cipher_suites: {
        value: cdktf.booleanToHclTerraform(this._enableRsaKeyExchangeCipherSuites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sha_1_cipher_suites: {
        value: cdktf.booleanToHclTerraform(this._enableSha1CipherSuites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_wrapping_transformation: {
        value: cdktf.stringToHclTerraform(this._keyWrappingTransformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_algorithm: {
        value: cdktf.stringToHclTerraform(this._macAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_key_length: {
        value: cdktf.numberToHclTerraform(this._macKeyLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbound_ssl_cipher_suite: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outboundSslCipherSuite),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      outbound_ssl_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outboundSslProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      signing_encryption_settings_id: {
        value: cdktf.stringToHclTerraform(this._signingEncryptionSettingsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert_nickname: {
        value: cdktf.stringToHclTerraform(this._sslCertNickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cipher_suite: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslCipherSuite),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
