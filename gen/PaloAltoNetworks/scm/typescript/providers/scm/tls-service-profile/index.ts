// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TlsServiceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#certificate TlsServiceProfile#certificate}
  */
  readonly certificate: string;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#device TlsServiceProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#folder TlsServiceProfile#folder}
  */
  readonly folder?: string;
  /**
  * TLS service profile name. The value is `muCustomDomainSSLProfile` when it is used on mobile-agent infra settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#name TlsServiceProfile#name}
  */
  readonly name: string;
  /**
  * Protocol settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#protocol_settings TlsServiceProfile#protocol_settings}
  */
  readonly protocolSettings: TlsServiceProfileProtocolSettings;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#snippet TlsServiceProfile#snippet}
  */
  readonly snippet?: string;
}
export interface TlsServiceProfileProtocolSettings {
  /**
  * Allow SHA1 authentication?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#auth_algo_sha1 TlsServiceProfile#auth_algo_sha1}
  */
  readonly authAlgoSha1?: boolean | cdktf.IResolvable;
  /**
  * Allow SHA256 authentication?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#auth_algo_sha256 TlsServiceProfile#auth_algo_sha256}
  */
  readonly authAlgoSha256?: boolean | cdktf.IResolvable;
  /**
  * Allow SHA384 authentication?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#auth_algo_sha384 TlsServiceProfile#auth_algo_sha384}
  */
  readonly authAlgoSha384?: boolean | cdktf.IResolvable;
  /**
  * Allow 3DES algorithm?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#enc_algo_3des TlsServiceProfile#enc_algo_3des}
  */
  readonly encAlgo3Des?: boolean | cdktf.IResolvable;
  /**
  * Allow AES-128-CBC algorithm?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#enc_algo_aes_128_cbc TlsServiceProfile#enc_algo_aes_128_cbc}
  */
  readonly encAlgoAes128Cbc?: boolean | cdktf.IResolvable;
  /**
  * Allow AES-128-GCM algorithm?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#enc_algo_aes_128_gcm TlsServiceProfile#enc_algo_aes_128_gcm}
  */
  readonly encAlgoAes128Gcm?: boolean | cdktf.IResolvable;
  /**
  * Allow AES-256-CBC algorithm?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#enc_algo_aes_256_cbc TlsServiceProfile#enc_algo_aes_256_cbc}
  */
  readonly encAlgoAes256Cbc?: boolean | cdktf.IResolvable;
  /**
  * Allow algorithm AES-256-GCM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#enc_algo_aes_256_gcm TlsServiceProfile#enc_algo_aes_256_gcm}
  */
  readonly encAlgoAes256Gcm?: boolean | cdktf.IResolvable;
  /**
  * Allow RC4 algorithm?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#enc_algo_rc4 TlsServiceProfile#enc_algo_rc4}
  */
  readonly encAlgoRc4?: boolean | cdktf.IResolvable;
  /**
  * Allow DHE algorithm?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#keyxchg_algo_dhe TlsServiceProfile#keyxchg_algo_dhe}
  */
  readonly keyxchgAlgoDhe?: boolean | cdktf.IResolvable;
  /**
  * Allow ECDHE algorithm?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#keyxchg_algo_ecdhe TlsServiceProfile#keyxchg_algo_ecdhe}
  */
  readonly keyxchgAlgoEcdhe?: boolean | cdktf.IResolvable;
  /**
  * Allow RSA algorithm?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#keyxchg_algo_rsa TlsServiceProfile#keyxchg_algo_rsa}
  */
  readonly keyxchgAlgoRsa?: boolean | cdktf.IResolvable;
  /**
  * Maximum TLS version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#max_version TlsServiceProfile#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum TLS version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#min_version TlsServiceProfile#min_version}
  */
  readonly minVersion?: string;
}

export function tlsServiceProfileProtocolSettingsToTerraform(struct?: TlsServiceProfileProtocolSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_algo_sha1: cdktf.booleanToTerraform(struct!.authAlgoSha1),
    auth_algo_sha256: cdktf.booleanToTerraform(struct!.authAlgoSha256),
    auth_algo_sha384: cdktf.booleanToTerraform(struct!.authAlgoSha384),
    enc_algo_3des: cdktf.booleanToTerraform(struct!.encAlgo3Des),
    enc_algo_aes_128_cbc: cdktf.booleanToTerraform(struct!.encAlgoAes128Cbc),
    enc_algo_aes_128_gcm: cdktf.booleanToTerraform(struct!.encAlgoAes128Gcm),
    enc_algo_aes_256_cbc: cdktf.booleanToTerraform(struct!.encAlgoAes256Cbc),
    enc_algo_aes_256_gcm: cdktf.booleanToTerraform(struct!.encAlgoAes256Gcm),
    enc_algo_rc4: cdktf.booleanToTerraform(struct!.encAlgoRc4),
    keyxchg_algo_dhe: cdktf.booleanToTerraform(struct!.keyxchgAlgoDhe),
    keyxchg_algo_ecdhe: cdktf.booleanToTerraform(struct!.keyxchgAlgoEcdhe),
    keyxchg_algo_rsa: cdktf.booleanToTerraform(struct!.keyxchgAlgoRsa),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function tlsServiceProfileProtocolSettingsToHclTerraform(struct?: TlsServiceProfileProtocolSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_algo_sha1: {
      value: cdktf.booleanToHclTerraform(struct!.authAlgoSha1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_algo_sha256: {
      value: cdktf.booleanToHclTerraform(struct!.authAlgoSha256),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_algo_sha384: {
      value: cdktf.booleanToHclTerraform(struct!.authAlgoSha384),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_3des: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgo3Des),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_aes_128_cbc: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoAes128Cbc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_aes_128_gcm: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoAes128Gcm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_aes_256_cbc: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoAes256Cbc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_aes_256_gcm: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoAes256Gcm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enc_algo_rc4: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoRc4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyxchg_algo_dhe: {
      value: cdktf.booleanToHclTerraform(struct!.keyxchgAlgoDhe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyxchg_algo_ecdhe: {
      value: cdktf.booleanToHclTerraform(struct!.keyxchgAlgoEcdhe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyxchg_algo_rsa: {
      value: cdktf.booleanToHclTerraform(struct!.keyxchgAlgoRsa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TlsServiceProfileProtocolSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TlsServiceProfileProtocolSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authAlgoSha1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgoSha1 = this._authAlgoSha1;
    }
    if (this._authAlgoSha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgoSha256 = this._authAlgoSha256;
    }
    if (this._authAlgoSha384 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgoSha384 = this._authAlgoSha384;
    }
    if (this._encAlgo3Des !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgo3Des = this._encAlgo3Des;
    }
    if (this._encAlgoAes128Cbc !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoAes128Cbc = this._encAlgoAes128Cbc;
    }
    if (this._encAlgoAes128Gcm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoAes128Gcm = this._encAlgoAes128Gcm;
    }
    if (this._encAlgoAes256Cbc !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoAes256Cbc = this._encAlgoAes256Cbc;
    }
    if (this._encAlgoAes256Gcm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoAes256Gcm = this._encAlgoAes256Gcm;
    }
    if (this._encAlgoRc4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoRc4 = this._encAlgoRc4;
    }
    if (this._keyxchgAlgoDhe !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyxchgAlgoDhe = this._keyxchgAlgoDhe;
    }
    if (this._keyxchgAlgoEcdhe !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyxchgAlgoEcdhe = this._keyxchgAlgoEcdhe;
    }
    if (this._keyxchgAlgoRsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyxchgAlgoRsa = this._keyxchgAlgoRsa;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TlsServiceProfileProtocolSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authAlgoSha1 = undefined;
      this._authAlgoSha256 = undefined;
      this._authAlgoSha384 = undefined;
      this._encAlgo3Des = undefined;
      this._encAlgoAes128Cbc = undefined;
      this._encAlgoAes128Gcm = undefined;
      this._encAlgoAes256Cbc = undefined;
      this._encAlgoAes256Gcm = undefined;
      this._encAlgoRc4 = undefined;
      this._keyxchgAlgoDhe = undefined;
      this._keyxchgAlgoEcdhe = undefined;
      this._keyxchgAlgoRsa = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authAlgoSha1 = value.authAlgoSha1;
      this._authAlgoSha256 = value.authAlgoSha256;
      this._authAlgoSha384 = value.authAlgoSha384;
      this._encAlgo3Des = value.encAlgo3Des;
      this._encAlgoAes128Cbc = value.encAlgoAes128Cbc;
      this._encAlgoAes128Gcm = value.encAlgoAes128Gcm;
      this._encAlgoAes256Cbc = value.encAlgoAes256Cbc;
      this._encAlgoAes256Gcm = value.encAlgoAes256Gcm;
      this._encAlgoRc4 = value.encAlgoRc4;
      this._keyxchgAlgoDhe = value.keyxchgAlgoDhe;
      this._keyxchgAlgoEcdhe = value.keyxchgAlgoEcdhe;
      this._keyxchgAlgoRsa = value.keyxchgAlgoRsa;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // auth_algo_sha1 - computed: false, optional: true, required: false
  private _authAlgoSha1?: boolean | cdktf.IResolvable; 
  public get authAlgoSha1() {
    return this.getBooleanAttribute('auth_algo_sha1');
  }
  public set authAlgoSha1(value: boolean | cdktf.IResolvable) {
    this._authAlgoSha1 = value;
  }
  public resetAuthAlgoSha1() {
    this._authAlgoSha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoSha1Input() {
    return this._authAlgoSha1;
  }

  // auth_algo_sha256 - computed: false, optional: true, required: false
  private _authAlgoSha256?: boolean | cdktf.IResolvable; 
  public get authAlgoSha256() {
    return this.getBooleanAttribute('auth_algo_sha256');
  }
  public set authAlgoSha256(value: boolean | cdktf.IResolvable) {
    this._authAlgoSha256 = value;
  }
  public resetAuthAlgoSha256() {
    this._authAlgoSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoSha256Input() {
    return this._authAlgoSha256;
  }

  // auth_algo_sha384 - computed: false, optional: true, required: false
  private _authAlgoSha384?: boolean | cdktf.IResolvable; 
  public get authAlgoSha384() {
    return this.getBooleanAttribute('auth_algo_sha384');
  }
  public set authAlgoSha384(value: boolean | cdktf.IResolvable) {
    this._authAlgoSha384 = value;
  }
  public resetAuthAlgoSha384() {
    this._authAlgoSha384 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoSha384Input() {
    return this._authAlgoSha384;
  }

  // enc_algo_3des - computed: false, optional: true, required: false
  private _encAlgo3Des?: boolean | cdktf.IResolvable; 
  public get encAlgo3Des() {
    return this.getBooleanAttribute('enc_algo_3des');
  }
  public set encAlgo3Des(value: boolean | cdktf.IResolvable) {
    this._encAlgo3Des = value;
  }
  public resetEncAlgo3Des() {
    this._encAlgo3Des = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgo3DesInput() {
    return this._encAlgo3Des;
  }

  // enc_algo_aes_128_cbc - computed: false, optional: true, required: false
  private _encAlgoAes128Cbc?: boolean | cdktf.IResolvable; 
  public get encAlgoAes128Cbc() {
    return this.getBooleanAttribute('enc_algo_aes_128_cbc');
  }
  public set encAlgoAes128Cbc(value: boolean | cdktf.IResolvable) {
    this._encAlgoAes128Cbc = value;
  }
  public resetEncAlgoAes128Cbc() {
    this._encAlgoAes128Cbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoAes128CbcInput() {
    return this._encAlgoAes128Cbc;
  }

  // enc_algo_aes_128_gcm - computed: false, optional: true, required: false
  private _encAlgoAes128Gcm?: boolean | cdktf.IResolvable; 
  public get encAlgoAes128Gcm() {
    return this.getBooleanAttribute('enc_algo_aes_128_gcm');
  }
  public set encAlgoAes128Gcm(value: boolean | cdktf.IResolvable) {
    this._encAlgoAes128Gcm = value;
  }
  public resetEncAlgoAes128Gcm() {
    this._encAlgoAes128Gcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoAes128GcmInput() {
    return this._encAlgoAes128Gcm;
  }

  // enc_algo_aes_256_cbc - computed: false, optional: true, required: false
  private _encAlgoAes256Cbc?: boolean | cdktf.IResolvable; 
  public get encAlgoAes256Cbc() {
    return this.getBooleanAttribute('enc_algo_aes_256_cbc');
  }
  public set encAlgoAes256Cbc(value: boolean | cdktf.IResolvable) {
    this._encAlgoAes256Cbc = value;
  }
  public resetEncAlgoAes256Cbc() {
    this._encAlgoAes256Cbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoAes256CbcInput() {
    return this._encAlgoAes256Cbc;
  }

  // enc_algo_aes_256_gcm - computed: false, optional: true, required: false
  private _encAlgoAes256Gcm?: boolean | cdktf.IResolvable; 
  public get encAlgoAes256Gcm() {
    return this.getBooleanAttribute('enc_algo_aes_256_gcm');
  }
  public set encAlgoAes256Gcm(value: boolean | cdktf.IResolvable) {
    this._encAlgoAes256Gcm = value;
  }
  public resetEncAlgoAes256Gcm() {
    this._encAlgoAes256Gcm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoAes256GcmInput() {
    return this._encAlgoAes256Gcm;
  }

  // enc_algo_rc4 - computed: false, optional: true, required: false
  private _encAlgoRc4?: boolean | cdktf.IResolvable; 
  public get encAlgoRc4() {
    return this.getBooleanAttribute('enc_algo_rc4');
  }
  public set encAlgoRc4(value: boolean | cdktf.IResolvable) {
    this._encAlgoRc4 = value;
  }
  public resetEncAlgoRc4() {
    this._encAlgoRc4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoRc4Input() {
    return this._encAlgoRc4;
  }

  // keyxchg_algo_dhe - computed: false, optional: true, required: false
  private _keyxchgAlgoDhe?: boolean | cdktf.IResolvable; 
  public get keyxchgAlgoDhe() {
    return this.getBooleanAttribute('keyxchg_algo_dhe');
  }
  public set keyxchgAlgoDhe(value: boolean | cdktf.IResolvable) {
    this._keyxchgAlgoDhe = value;
  }
  public resetKeyxchgAlgoDhe() {
    this._keyxchgAlgoDhe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyxchgAlgoDheInput() {
    return this._keyxchgAlgoDhe;
  }

  // keyxchg_algo_ecdhe - computed: false, optional: true, required: false
  private _keyxchgAlgoEcdhe?: boolean | cdktf.IResolvable; 
  public get keyxchgAlgoEcdhe() {
    return this.getBooleanAttribute('keyxchg_algo_ecdhe');
  }
  public set keyxchgAlgoEcdhe(value: boolean | cdktf.IResolvable) {
    this._keyxchgAlgoEcdhe = value;
  }
  public resetKeyxchgAlgoEcdhe() {
    this._keyxchgAlgoEcdhe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyxchgAlgoEcdheInput() {
    return this._keyxchgAlgoEcdhe;
  }

  // keyxchg_algo_rsa - computed: false, optional: true, required: false
  private _keyxchgAlgoRsa?: boolean | cdktf.IResolvable; 
  public get keyxchgAlgoRsa() {
    return this.getBooleanAttribute('keyxchg_algo_rsa');
  }
  public set keyxchgAlgoRsa(value: boolean | cdktf.IResolvable) {
    this._keyxchgAlgoRsa = value;
  }
  public resetKeyxchgAlgoRsa() {
    this._keyxchgAlgoRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyxchgAlgoRsaInput() {
    return this._keyxchgAlgoRsa;
  }

  // max_version - computed: true, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: true, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile scm_tls_service_profile}
*/
export class TlsServiceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_tls_service_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TlsServiceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TlsServiceProfile to import
  * @param importFromId The id of the existing TlsServiceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TlsServiceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_tls_service_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/tls_service_profile scm_tls_service_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TlsServiceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: TlsServiceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_tls_service_profile',
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
    this._certificate = config.certificate;
    this._device = config.device;
    this._folder = config.folder;
    this._name = config.name;
    this._protocolSettings.internalValue = config.protocolSettings;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // protocol_settings - computed: false, optional: false, required: true
  private _protocolSettings = new TlsServiceProfileProtocolSettingsOutputReference(this, "protocol_settings");
  public get protocolSettings() {
    return this._protocolSettings;
  }
  public putProtocolSettings(value: TlsServiceProfileProtocolSettings) {
    this._protocolSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolSettingsInput() {
    return this._protocolSettings.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      protocol_settings: tlsServiceProfileProtocolSettingsToTerraform(this._protocolSettings.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_settings: {
        value: tlsServiceProfileProtocolSettingsToHclTerraform(this._protocolSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TlsServiceProfileProtocolSettings",
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
