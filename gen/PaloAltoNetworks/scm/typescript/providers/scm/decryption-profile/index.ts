// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DecryptionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#device DecryptionProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#folder DecryptionProfile#folder}
  */
  readonly folder?: string;
  /**
  * Must start with alphanumeric char and should contain only alphanemeric, underscore, hyphen, dot or space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#name DecryptionProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#snippet DecryptionProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * Ssl forward proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#ssl_forward_proxy DecryptionProfile#ssl_forward_proxy}
  */
  readonly sslForwardProxy?: DecryptionProfileSslForwardProxy;
  /**
  * Ssl inbound proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#ssl_inbound_proxy DecryptionProfile#ssl_inbound_proxy}
  */
  readonly sslInboundProxy?: DecryptionProfileSslInboundProxy;
  /**
  * Ssl no proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#ssl_no_proxy DecryptionProfile#ssl_no_proxy}
  */
  readonly sslNoProxy?: DecryptionProfileSslNoProxy;
  /**
  * Ssl protocol settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#ssl_protocol_settings DecryptionProfile#ssl_protocol_settings}
  */
  readonly sslProtocolSettings?: DecryptionProfileSslProtocolSettings;
}
export interface DecryptionProfileSslForwardProxy {
  /**
  * Auto include altname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#auto_include_altname DecryptionProfile#auto_include_altname}
  */
  readonly autoIncludeAltname?: boolean | cdktf.IResolvable;
  /**
  * Block client cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_client_cert DecryptionProfile#block_client_cert}
  */
  readonly blockClientCert?: boolean | cdktf.IResolvable;
  /**
  * Block expired certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_expired_certificate DecryptionProfile#block_expired_certificate}
  */
  readonly blockExpiredCertificate?: boolean | cdktf.IResolvable;
  /**
  * Block timeout cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_timeout_cert DecryptionProfile#block_timeout_cert}
  */
  readonly blockTimeoutCert?: boolean | cdktf.IResolvable;
  /**
  * Block tls13 downgrade no resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_tls13_downgrade_no_resource DecryptionProfile#block_tls13_downgrade_no_resource}
  */
  readonly blockTls13DowngradeNoResource?: boolean | cdktf.IResolvable;
  /**
  * Block unknown cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_unknown_cert DecryptionProfile#block_unknown_cert}
  */
  readonly blockUnknownCert?: boolean | cdktf.IResolvable;
  /**
  * Block unsupported cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_unsupported_cipher DecryptionProfile#block_unsupported_cipher}
  */
  readonly blockUnsupportedCipher?: boolean | cdktf.IResolvable;
  /**
  * Block unsupported version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_unsupported_version DecryptionProfile#block_unsupported_version}
  */
  readonly blockUnsupportedVersion?: boolean | cdktf.IResolvable;
  /**
  * Block untrusted issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_untrusted_issuer DecryptionProfile#block_untrusted_issuer}
  */
  readonly blockUntrustedIssuer?: boolean | cdktf.IResolvable;
  /**
  * Restrict cert exts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#restrict_cert_exts DecryptionProfile#restrict_cert_exts}
  */
  readonly restrictCertExts?: boolean | cdktf.IResolvable;
  /**
  * Strip alpn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#strip_alpn DecryptionProfile#strip_alpn}
  */
  readonly stripAlpn?: boolean | cdktf.IResolvable;
}

export function decryptionProfileSslForwardProxyToTerraform(struct?: DecryptionProfileSslForwardProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_include_altname: cdktf.booleanToTerraform(struct!.autoIncludeAltname),
    block_client_cert: cdktf.booleanToTerraform(struct!.blockClientCert),
    block_expired_certificate: cdktf.booleanToTerraform(struct!.blockExpiredCertificate),
    block_timeout_cert: cdktf.booleanToTerraform(struct!.blockTimeoutCert),
    block_tls13_downgrade_no_resource: cdktf.booleanToTerraform(struct!.blockTls13DowngradeNoResource),
    block_unknown_cert: cdktf.booleanToTerraform(struct!.blockUnknownCert),
    block_unsupported_cipher: cdktf.booleanToTerraform(struct!.blockUnsupportedCipher),
    block_unsupported_version: cdktf.booleanToTerraform(struct!.blockUnsupportedVersion),
    block_untrusted_issuer: cdktf.booleanToTerraform(struct!.blockUntrustedIssuer),
    restrict_cert_exts: cdktf.booleanToTerraform(struct!.restrictCertExts),
    strip_alpn: cdktf.booleanToTerraform(struct!.stripAlpn),
  }
}


export function decryptionProfileSslForwardProxyToHclTerraform(struct?: DecryptionProfileSslForwardProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_include_altname: {
      value: cdktf.booleanToHclTerraform(struct!.autoIncludeAltname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_client_cert: {
      value: cdktf.booleanToHclTerraform(struct!.blockClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_expired_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.blockExpiredCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_timeout_cert: {
      value: cdktf.booleanToHclTerraform(struct!.blockTimeoutCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_tls13_downgrade_no_resource: {
      value: cdktf.booleanToHclTerraform(struct!.blockTls13DowngradeNoResource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_unknown_cert: {
      value: cdktf.booleanToHclTerraform(struct!.blockUnknownCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_unsupported_cipher: {
      value: cdktf.booleanToHclTerraform(struct!.blockUnsupportedCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_unsupported_version: {
      value: cdktf.booleanToHclTerraform(struct!.blockUnsupportedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_untrusted_issuer: {
      value: cdktf.booleanToHclTerraform(struct!.blockUntrustedIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_cert_exts: {
      value: cdktf.booleanToHclTerraform(struct!.restrictCertExts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_alpn: {
      value: cdktf.booleanToHclTerraform(struct!.stripAlpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionProfileSslForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionProfileSslForwardProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoIncludeAltname !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncludeAltname = this._autoIncludeAltname;
    }
    if (this._blockClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockClientCert = this._blockClientCert;
    }
    if (this._blockExpiredCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockExpiredCertificate = this._blockExpiredCertificate;
    }
    if (this._blockTimeoutCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTimeoutCert = this._blockTimeoutCert;
    }
    if (this._blockTls13DowngradeNoResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTls13DowngradeNoResource = this._blockTls13DowngradeNoResource;
    }
    if (this._blockUnknownCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUnknownCert = this._blockUnknownCert;
    }
    if (this._blockUnsupportedCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUnsupportedCipher = this._blockUnsupportedCipher;
    }
    if (this._blockUnsupportedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUnsupportedVersion = this._blockUnsupportedVersion;
    }
    if (this._blockUntrustedIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUntrustedIssuer = this._blockUntrustedIssuer;
    }
    if (this._restrictCertExts !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictCertExts = this._restrictCertExts;
    }
    if (this._stripAlpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripAlpn = this._stripAlpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionProfileSslForwardProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoIncludeAltname = undefined;
      this._blockClientCert = undefined;
      this._blockExpiredCertificate = undefined;
      this._blockTimeoutCert = undefined;
      this._blockTls13DowngradeNoResource = undefined;
      this._blockUnknownCert = undefined;
      this._blockUnsupportedCipher = undefined;
      this._blockUnsupportedVersion = undefined;
      this._blockUntrustedIssuer = undefined;
      this._restrictCertExts = undefined;
      this._stripAlpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoIncludeAltname = value.autoIncludeAltname;
      this._blockClientCert = value.blockClientCert;
      this._blockExpiredCertificate = value.blockExpiredCertificate;
      this._blockTimeoutCert = value.blockTimeoutCert;
      this._blockTls13DowngradeNoResource = value.blockTls13DowngradeNoResource;
      this._blockUnknownCert = value.blockUnknownCert;
      this._blockUnsupportedCipher = value.blockUnsupportedCipher;
      this._blockUnsupportedVersion = value.blockUnsupportedVersion;
      this._blockUntrustedIssuer = value.blockUntrustedIssuer;
      this._restrictCertExts = value.restrictCertExts;
      this._stripAlpn = value.stripAlpn;
    }
  }

  // auto_include_altname - computed: true, optional: true, required: false
  private _autoIncludeAltname?: boolean | cdktf.IResolvable; 
  public get autoIncludeAltname() {
    return this.getBooleanAttribute('auto_include_altname');
  }
  public set autoIncludeAltname(value: boolean | cdktf.IResolvable) {
    this._autoIncludeAltname = value;
  }
  public resetAutoIncludeAltname() {
    this._autoIncludeAltname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncludeAltnameInput() {
    return this._autoIncludeAltname;
  }

  // block_client_cert - computed: true, optional: true, required: false
  private _blockClientCert?: boolean | cdktf.IResolvable; 
  public get blockClientCert() {
    return this.getBooleanAttribute('block_client_cert');
  }
  public set blockClientCert(value: boolean | cdktf.IResolvable) {
    this._blockClientCert = value;
  }
  public resetBlockClientCert() {
    this._blockClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockClientCertInput() {
    return this._blockClientCert;
  }

  // block_expired_certificate - computed: true, optional: true, required: false
  private _blockExpiredCertificate?: boolean | cdktf.IResolvable; 
  public get blockExpiredCertificate() {
    return this.getBooleanAttribute('block_expired_certificate');
  }
  public set blockExpiredCertificate(value: boolean | cdktf.IResolvable) {
    this._blockExpiredCertificate = value;
  }
  public resetBlockExpiredCertificate() {
    this._blockExpiredCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExpiredCertificateInput() {
    return this._blockExpiredCertificate;
  }

  // block_timeout_cert - computed: true, optional: true, required: false
  private _blockTimeoutCert?: boolean | cdktf.IResolvable; 
  public get blockTimeoutCert() {
    return this.getBooleanAttribute('block_timeout_cert');
  }
  public set blockTimeoutCert(value: boolean | cdktf.IResolvable) {
    this._blockTimeoutCert = value;
  }
  public resetBlockTimeoutCert() {
    this._blockTimeoutCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTimeoutCertInput() {
    return this._blockTimeoutCert;
  }

  // block_tls13_downgrade_no_resource - computed: true, optional: true, required: false
  private _blockTls13DowngradeNoResource?: boolean | cdktf.IResolvable; 
  public get blockTls13DowngradeNoResource() {
    return this.getBooleanAttribute('block_tls13_downgrade_no_resource');
  }
  public set blockTls13DowngradeNoResource(value: boolean | cdktf.IResolvable) {
    this._blockTls13DowngradeNoResource = value;
  }
  public resetBlockTls13DowngradeNoResource() {
    this._blockTls13DowngradeNoResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTls13DowngradeNoResourceInput() {
    return this._blockTls13DowngradeNoResource;
  }

  // block_unknown_cert - computed: true, optional: true, required: false
  private _blockUnknownCert?: boolean | cdktf.IResolvable; 
  public get blockUnknownCert() {
    return this.getBooleanAttribute('block_unknown_cert');
  }
  public set blockUnknownCert(value: boolean | cdktf.IResolvable) {
    this._blockUnknownCert = value;
  }
  public resetBlockUnknownCert() {
    this._blockUnknownCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnknownCertInput() {
    return this._blockUnknownCert;
  }

  // block_unsupported_cipher - computed: true, optional: true, required: false
  private _blockUnsupportedCipher?: boolean | cdktf.IResolvable; 
  public get blockUnsupportedCipher() {
    return this.getBooleanAttribute('block_unsupported_cipher');
  }
  public set blockUnsupportedCipher(value: boolean | cdktf.IResolvable) {
    this._blockUnsupportedCipher = value;
  }
  public resetBlockUnsupportedCipher() {
    this._blockUnsupportedCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnsupportedCipherInput() {
    return this._blockUnsupportedCipher;
  }

  // block_unsupported_version - computed: true, optional: true, required: false
  private _blockUnsupportedVersion?: boolean | cdktf.IResolvable; 
  public get blockUnsupportedVersion() {
    return this.getBooleanAttribute('block_unsupported_version');
  }
  public set blockUnsupportedVersion(value: boolean | cdktf.IResolvable) {
    this._blockUnsupportedVersion = value;
  }
  public resetBlockUnsupportedVersion() {
    this._blockUnsupportedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnsupportedVersionInput() {
    return this._blockUnsupportedVersion;
  }

  // block_untrusted_issuer - computed: true, optional: true, required: false
  private _blockUntrustedIssuer?: boolean | cdktf.IResolvable; 
  public get blockUntrustedIssuer() {
    return this.getBooleanAttribute('block_untrusted_issuer');
  }
  public set blockUntrustedIssuer(value: boolean | cdktf.IResolvable) {
    this._blockUntrustedIssuer = value;
  }
  public resetBlockUntrustedIssuer() {
    this._blockUntrustedIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUntrustedIssuerInput() {
    return this._blockUntrustedIssuer;
  }

  // restrict_cert_exts - computed: true, optional: true, required: false
  private _restrictCertExts?: boolean | cdktf.IResolvable; 
  public get restrictCertExts() {
    return this.getBooleanAttribute('restrict_cert_exts');
  }
  public set restrictCertExts(value: boolean | cdktf.IResolvable) {
    this._restrictCertExts = value;
  }
  public resetRestrictCertExts() {
    this._restrictCertExts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCertExtsInput() {
    return this._restrictCertExts;
  }

  // strip_alpn - computed: true, optional: true, required: false
  private _stripAlpn?: boolean | cdktf.IResolvable; 
  public get stripAlpn() {
    return this.getBooleanAttribute('strip_alpn');
  }
  public set stripAlpn(value: boolean | cdktf.IResolvable) {
    this._stripAlpn = value;
  }
  public resetStripAlpn() {
    this._stripAlpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripAlpnInput() {
    return this._stripAlpn;
  }
}
export interface DecryptionProfileSslInboundProxy {
  /**
  * Block if hsm unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_if_hsm_unavailable DecryptionProfile#block_if_hsm_unavailable}
  */
  readonly blockIfHsmUnavailable?: boolean | cdktf.IResolvable;
  /**
  * Block if no resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_if_no_resource DecryptionProfile#block_if_no_resource}
  */
  readonly blockIfNoResource?: boolean | cdktf.IResolvable;
  /**
  * Block unsupported cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_unsupported_cipher DecryptionProfile#block_unsupported_cipher}
  */
  readonly blockUnsupportedCipher?: boolean | cdktf.IResolvable;
  /**
  * Block unsupported version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_unsupported_version DecryptionProfile#block_unsupported_version}
  */
  readonly blockUnsupportedVersion?: boolean | cdktf.IResolvable;
}

export function decryptionProfileSslInboundProxyToTerraform(struct?: DecryptionProfileSslInboundProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_if_hsm_unavailable: cdktf.booleanToTerraform(struct!.blockIfHsmUnavailable),
    block_if_no_resource: cdktf.booleanToTerraform(struct!.blockIfNoResource),
    block_unsupported_cipher: cdktf.booleanToTerraform(struct!.blockUnsupportedCipher),
    block_unsupported_version: cdktf.booleanToTerraform(struct!.blockUnsupportedVersion),
  }
}


export function decryptionProfileSslInboundProxyToHclTerraform(struct?: DecryptionProfileSslInboundProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_if_hsm_unavailable: {
      value: cdktf.booleanToHclTerraform(struct!.blockIfHsmUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_if_no_resource: {
      value: cdktf.booleanToHclTerraform(struct!.blockIfNoResource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_unsupported_cipher: {
      value: cdktf.booleanToHclTerraform(struct!.blockUnsupportedCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_unsupported_version: {
      value: cdktf.booleanToHclTerraform(struct!.blockUnsupportedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionProfileSslInboundProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionProfileSslInboundProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockIfHsmUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIfHsmUnavailable = this._blockIfHsmUnavailable;
    }
    if (this._blockIfNoResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIfNoResource = this._blockIfNoResource;
    }
    if (this._blockUnsupportedCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUnsupportedCipher = this._blockUnsupportedCipher;
    }
    if (this._blockUnsupportedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUnsupportedVersion = this._blockUnsupportedVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionProfileSslInboundProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockIfHsmUnavailable = undefined;
      this._blockIfNoResource = undefined;
      this._blockUnsupportedCipher = undefined;
      this._blockUnsupportedVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockIfHsmUnavailable = value.blockIfHsmUnavailable;
      this._blockIfNoResource = value.blockIfNoResource;
      this._blockUnsupportedCipher = value.blockUnsupportedCipher;
      this._blockUnsupportedVersion = value.blockUnsupportedVersion;
    }
  }

  // block_if_hsm_unavailable - computed: true, optional: true, required: false
  private _blockIfHsmUnavailable?: boolean | cdktf.IResolvable; 
  public get blockIfHsmUnavailable() {
    return this.getBooleanAttribute('block_if_hsm_unavailable');
  }
  public set blockIfHsmUnavailable(value: boolean | cdktf.IResolvable) {
    this._blockIfHsmUnavailable = value;
  }
  public resetBlockIfHsmUnavailable() {
    this._blockIfHsmUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIfHsmUnavailableInput() {
    return this._blockIfHsmUnavailable;
  }

  // block_if_no_resource - computed: true, optional: true, required: false
  private _blockIfNoResource?: boolean | cdktf.IResolvable; 
  public get blockIfNoResource() {
    return this.getBooleanAttribute('block_if_no_resource');
  }
  public set blockIfNoResource(value: boolean | cdktf.IResolvable) {
    this._blockIfNoResource = value;
  }
  public resetBlockIfNoResource() {
    this._blockIfNoResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIfNoResourceInput() {
    return this._blockIfNoResource;
  }

  // block_unsupported_cipher - computed: true, optional: true, required: false
  private _blockUnsupportedCipher?: boolean | cdktf.IResolvable; 
  public get blockUnsupportedCipher() {
    return this.getBooleanAttribute('block_unsupported_cipher');
  }
  public set blockUnsupportedCipher(value: boolean | cdktf.IResolvable) {
    this._blockUnsupportedCipher = value;
  }
  public resetBlockUnsupportedCipher() {
    this._blockUnsupportedCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnsupportedCipherInput() {
    return this._blockUnsupportedCipher;
  }

  // block_unsupported_version - computed: true, optional: true, required: false
  private _blockUnsupportedVersion?: boolean | cdktf.IResolvable; 
  public get blockUnsupportedVersion() {
    return this.getBooleanAttribute('block_unsupported_version');
  }
  public set blockUnsupportedVersion(value: boolean | cdktf.IResolvable) {
    this._blockUnsupportedVersion = value;
  }
  public resetBlockUnsupportedVersion() {
    this._blockUnsupportedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnsupportedVersionInput() {
    return this._blockUnsupportedVersion;
  }
}
export interface DecryptionProfileSslNoProxy {
  /**
  * Block expired certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_expired_certificate DecryptionProfile#block_expired_certificate}
  */
  readonly blockExpiredCertificate?: boolean | cdktf.IResolvable;
  /**
  * Block untrusted issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#block_untrusted_issuer DecryptionProfile#block_untrusted_issuer}
  */
  readonly blockUntrustedIssuer?: boolean | cdktf.IResolvable;
}

export function decryptionProfileSslNoProxyToTerraform(struct?: DecryptionProfileSslNoProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_expired_certificate: cdktf.booleanToTerraform(struct!.blockExpiredCertificate),
    block_untrusted_issuer: cdktf.booleanToTerraform(struct!.blockUntrustedIssuer),
  }
}


export function decryptionProfileSslNoProxyToHclTerraform(struct?: DecryptionProfileSslNoProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_expired_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.blockExpiredCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_untrusted_issuer: {
      value: cdktf.booleanToHclTerraform(struct!.blockUntrustedIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionProfileSslNoProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionProfileSslNoProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockExpiredCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockExpiredCertificate = this._blockExpiredCertificate;
    }
    if (this._blockUntrustedIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUntrustedIssuer = this._blockUntrustedIssuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionProfileSslNoProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockExpiredCertificate = undefined;
      this._blockUntrustedIssuer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockExpiredCertificate = value.blockExpiredCertificate;
      this._blockUntrustedIssuer = value.blockUntrustedIssuer;
    }
  }

  // block_expired_certificate - computed: true, optional: true, required: false
  private _blockExpiredCertificate?: boolean | cdktf.IResolvable; 
  public get blockExpiredCertificate() {
    return this.getBooleanAttribute('block_expired_certificate');
  }
  public set blockExpiredCertificate(value: boolean | cdktf.IResolvable) {
    this._blockExpiredCertificate = value;
  }
  public resetBlockExpiredCertificate() {
    this._blockExpiredCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExpiredCertificateInput() {
    return this._blockExpiredCertificate;
  }

  // block_untrusted_issuer - computed: true, optional: true, required: false
  private _blockUntrustedIssuer?: boolean | cdktf.IResolvable; 
  public get blockUntrustedIssuer() {
    return this.getBooleanAttribute('block_untrusted_issuer');
  }
  public set blockUntrustedIssuer(value: boolean | cdktf.IResolvable) {
    this._blockUntrustedIssuer = value;
  }
  public resetBlockUntrustedIssuer() {
    this._blockUntrustedIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUntrustedIssuerInput() {
    return this._blockUntrustedIssuer;
  }
}
export interface DecryptionProfileSslProtocolSettings {
  /**
  * Auth algo md5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#auth_algo_md5 DecryptionProfile#auth_algo_md5}
  */
  readonly authAlgoMd5?: boolean | cdktf.IResolvable;
  /**
  * Auth algo sha1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#auth_algo_sha1 DecryptionProfile#auth_algo_sha1}
  */
  readonly authAlgoSha1?: boolean | cdktf.IResolvable;
  /**
  * Auth algo sha256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#auth_algo_sha256 DecryptionProfile#auth_algo_sha256}
  */
  readonly authAlgoSha256?: boolean | cdktf.IResolvable;
  /**
  * Auth algo sha384
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#auth_algo_sha384 DecryptionProfile#auth_algo_sha384}
  */
  readonly authAlgoSha384?: boolean | cdktf.IResolvable;
  /**
  * Enc algo3des
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#enc_algo_3des DecryptionProfile#enc_algo_3des}
  */
  readonly encAlgo3Des?: boolean | cdktf.IResolvable;
  /**
  * Enc algo aes128 cbc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#enc_algo_aes_128_cbc DecryptionProfile#enc_algo_aes_128_cbc}
  */
  readonly encAlgoAes128Cbc?: boolean | cdktf.IResolvable;
  /**
  * Enc algo aes128 gcm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#enc_algo_aes_128_gcm DecryptionProfile#enc_algo_aes_128_gcm}
  */
  readonly encAlgoAes128Gcm?: boolean | cdktf.IResolvable;
  /**
  * Enc algo aes256 cbc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#enc_algo_aes_256_cbc DecryptionProfile#enc_algo_aes_256_cbc}
  */
  readonly encAlgoAes256Cbc?: boolean | cdktf.IResolvable;
  /**
  * Enc algo aes256 gcm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#enc_algo_aes_256_gcm DecryptionProfile#enc_algo_aes_256_gcm}
  */
  readonly encAlgoAes256Gcm?: boolean | cdktf.IResolvable;
  /**
  * Enc algo chacha20 poly1305
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#enc_algo_chacha20_poly1305 DecryptionProfile#enc_algo_chacha20_poly1305}
  */
  readonly encAlgoChacha20Poly1305?: boolean | cdktf.IResolvable;
  /**
  * Enc algo rc4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#enc_algo_rc4 DecryptionProfile#enc_algo_rc4}
  */
  readonly encAlgoRc4?: boolean | cdktf.IResolvable;
  /**
  * Keyxchg algo dhe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#keyxchg_algo_dhe DecryptionProfile#keyxchg_algo_dhe}
  */
  readonly keyxchgAlgoDhe?: boolean | cdktf.IResolvable;
  /**
  * Keyxchg algo ecdhe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#keyxchg_algo_ecdhe DecryptionProfile#keyxchg_algo_ecdhe}
  */
  readonly keyxchgAlgoEcdhe?: boolean | cdktf.IResolvable;
  /**
  * Keyxchg algo rsa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#keyxchg_algo_rsa DecryptionProfile#keyxchg_algo_rsa}
  */
  readonly keyxchgAlgoRsa?: boolean | cdktf.IResolvable;
  /**
  * Max version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#max_version DecryptionProfile#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Min version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#min_version DecryptionProfile#min_version}
  */
  readonly minVersion?: string;
}

export function decryptionProfileSslProtocolSettingsToTerraform(struct?: DecryptionProfileSslProtocolSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_algo_md5: cdktf.booleanToTerraform(struct!.authAlgoMd5),
    auth_algo_sha1: cdktf.booleanToTerraform(struct!.authAlgoSha1),
    auth_algo_sha256: cdktf.booleanToTerraform(struct!.authAlgoSha256),
    auth_algo_sha384: cdktf.booleanToTerraform(struct!.authAlgoSha384),
    enc_algo_3des: cdktf.booleanToTerraform(struct!.encAlgo3Des),
    enc_algo_aes_128_cbc: cdktf.booleanToTerraform(struct!.encAlgoAes128Cbc),
    enc_algo_aes_128_gcm: cdktf.booleanToTerraform(struct!.encAlgoAes128Gcm),
    enc_algo_aes_256_cbc: cdktf.booleanToTerraform(struct!.encAlgoAes256Cbc),
    enc_algo_aes_256_gcm: cdktf.booleanToTerraform(struct!.encAlgoAes256Gcm),
    enc_algo_chacha20_poly1305: cdktf.booleanToTerraform(struct!.encAlgoChacha20Poly1305),
    enc_algo_rc4: cdktf.booleanToTerraform(struct!.encAlgoRc4),
    keyxchg_algo_dhe: cdktf.booleanToTerraform(struct!.keyxchgAlgoDhe),
    keyxchg_algo_ecdhe: cdktf.booleanToTerraform(struct!.keyxchgAlgoEcdhe),
    keyxchg_algo_rsa: cdktf.booleanToTerraform(struct!.keyxchgAlgoRsa),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function decryptionProfileSslProtocolSettingsToHclTerraform(struct?: DecryptionProfileSslProtocolSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_algo_md5: {
      value: cdktf.booleanToHclTerraform(struct!.authAlgoMd5),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    enc_algo_chacha20_poly1305: {
      value: cdktf.booleanToHclTerraform(struct!.encAlgoChacha20Poly1305),
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

export class DecryptionProfileSslProtocolSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionProfileSslProtocolSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authAlgoMd5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAlgoMd5 = this._authAlgoMd5;
    }
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
    if (this._encAlgoChacha20Poly1305 !== undefined) {
      hasAnyValues = true;
      internalValueResult.encAlgoChacha20Poly1305 = this._encAlgoChacha20Poly1305;
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

  public set internalValue(value: DecryptionProfileSslProtocolSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authAlgoMd5 = undefined;
      this._authAlgoSha1 = undefined;
      this._authAlgoSha256 = undefined;
      this._authAlgoSha384 = undefined;
      this._encAlgo3Des = undefined;
      this._encAlgoAes128Cbc = undefined;
      this._encAlgoAes128Gcm = undefined;
      this._encAlgoAes256Cbc = undefined;
      this._encAlgoAes256Gcm = undefined;
      this._encAlgoChacha20Poly1305 = undefined;
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
      this._authAlgoMd5 = value.authAlgoMd5;
      this._authAlgoSha1 = value.authAlgoSha1;
      this._authAlgoSha256 = value.authAlgoSha256;
      this._authAlgoSha384 = value.authAlgoSha384;
      this._encAlgo3Des = value.encAlgo3Des;
      this._encAlgoAes128Cbc = value.encAlgoAes128Cbc;
      this._encAlgoAes128Gcm = value.encAlgoAes128Gcm;
      this._encAlgoAes256Cbc = value.encAlgoAes256Cbc;
      this._encAlgoAes256Gcm = value.encAlgoAes256Gcm;
      this._encAlgoChacha20Poly1305 = value.encAlgoChacha20Poly1305;
      this._encAlgoRc4 = value.encAlgoRc4;
      this._keyxchgAlgoDhe = value.keyxchgAlgoDhe;
      this._keyxchgAlgoEcdhe = value.keyxchgAlgoEcdhe;
      this._keyxchgAlgoRsa = value.keyxchgAlgoRsa;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // auth_algo_md5 - computed: true, optional: true, required: false
  private _authAlgoMd5?: boolean | cdktf.IResolvable; 
  public get authAlgoMd5() {
    return this.getBooleanAttribute('auth_algo_md5');
  }
  public set authAlgoMd5(value: boolean | cdktf.IResolvable) {
    this._authAlgoMd5 = value;
  }
  public resetAuthAlgoMd5() {
    this._authAlgoMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgoMd5Input() {
    return this._authAlgoMd5;
  }

  // auth_algo_sha1 - computed: true, optional: true, required: false
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

  // auth_algo_sha256 - computed: true, optional: true, required: false
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

  // auth_algo_sha384 - computed: true, optional: true, required: false
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

  // enc_algo_3des - computed: true, optional: true, required: false
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

  // enc_algo_aes_128_cbc - computed: true, optional: true, required: false
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

  // enc_algo_aes_128_gcm - computed: true, optional: true, required: false
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

  // enc_algo_aes_256_cbc - computed: true, optional: true, required: false
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

  // enc_algo_aes_256_gcm - computed: true, optional: true, required: false
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

  // enc_algo_chacha20_poly1305 - computed: true, optional: true, required: false
  private _encAlgoChacha20Poly1305?: boolean | cdktf.IResolvable; 
  public get encAlgoChacha20Poly1305() {
    return this.getBooleanAttribute('enc_algo_chacha20_poly1305');
  }
  public set encAlgoChacha20Poly1305(value: boolean | cdktf.IResolvable) {
    this._encAlgoChacha20Poly1305 = value;
  }
  public resetEncAlgoChacha20Poly1305() {
    this._encAlgoChacha20Poly1305 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgoChacha20Poly1305Input() {
    return this._encAlgoChacha20Poly1305;
  }

  // enc_algo_rc4 - computed: true, optional: true, required: false
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

  // keyxchg_algo_dhe - computed: true, optional: true, required: false
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

  // keyxchg_algo_ecdhe - computed: true, optional: true, required: false
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

  // keyxchg_algo_rsa - computed: true, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile scm_decryption_profile}
*/
export class DecryptionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_decryption_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DecryptionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DecryptionProfile to import
  * @param importFromId The id of the existing DecryptionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DecryptionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_decryption_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_profile scm_decryption_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DecryptionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DecryptionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_decryption_profile',
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
    this._name = config.name;
    this._snippet = config.snippet;
    this._sslForwardProxy.internalValue = config.sslForwardProxy;
    this._sslInboundProxy.internalValue = config.sslInboundProxy;
    this._sslNoProxy.internalValue = config.sslNoProxy;
    this._sslProtocolSettings.internalValue = config.sslProtocolSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ssl_forward_proxy - computed: true, optional: true, required: false
  private _sslForwardProxy = new DecryptionProfileSslForwardProxyOutputReference(this, "ssl_forward_proxy");
  public get sslForwardProxy() {
    return this._sslForwardProxy;
  }
  public putSslForwardProxy(value: DecryptionProfileSslForwardProxy) {
    this._sslForwardProxy.internalValue = value;
  }
  public resetSslForwardProxy() {
    this._sslForwardProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslForwardProxyInput() {
    return this._sslForwardProxy.internalValue;
  }

  // ssl_inbound_proxy - computed: true, optional: true, required: false
  private _sslInboundProxy = new DecryptionProfileSslInboundProxyOutputReference(this, "ssl_inbound_proxy");
  public get sslInboundProxy() {
    return this._sslInboundProxy;
  }
  public putSslInboundProxy(value: DecryptionProfileSslInboundProxy) {
    this._sslInboundProxy.internalValue = value;
  }
  public resetSslInboundProxy() {
    this._sslInboundProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInboundProxyInput() {
    return this._sslInboundProxy.internalValue;
  }

  // ssl_no_proxy - computed: true, optional: true, required: false
  private _sslNoProxy = new DecryptionProfileSslNoProxyOutputReference(this, "ssl_no_proxy");
  public get sslNoProxy() {
    return this._sslNoProxy;
  }
  public putSslNoProxy(value: DecryptionProfileSslNoProxy) {
    this._sslNoProxy.internalValue = value;
  }
  public resetSslNoProxy() {
    this._sslNoProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslNoProxyInput() {
    return this._sslNoProxy.internalValue;
  }

  // ssl_protocol_settings - computed: true, optional: true, required: false
  private _sslProtocolSettings = new DecryptionProfileSslProtocolSettingsOutputReference(this, "ssl_protocol_settings");
  public get sslProtocolSettings() {
    return this._sslProtocolSettings;
  }
  public putSslProtocolSettings(value: DecryptionProfileSslProtocolSettings) {
    this._sslProtocolSettings.internalValue = value;
  }
  public resetSslProtocolSettings() {
    this._sslProtocolSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolSettingsInput() {
    return this._sslProtocolSettings.internalValue;
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
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
      ssl_forward_proxy: decryptionProfileSslForwardProxyToTerraform(this._sslForwardProxy.internalValue),
      ssl_inbound_proxy: decryptionProfileSslInboundProxyToTerraform(this._sslInboundProxy.internalValue),
      ssl_no_proxy: decryptionProfileSslNoProxyToTerraform(this._sslNoProxy.internalValue),
      ssl_protocol_settings: decryptionProfileSslProtocolSettingsToTerraform(this._sslProtocolSettings.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_forward_proxy: {
        value: decryptionProfileSslForwardProxyToHclTerraform(this._sslForwardProxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DecryptionProfileSslForwardProxy",
      },
      ssl_inbound_proxy: {
        value: decryptionProfileSslInboundProxyToHclTerraform(this._sslInboundProxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DecryptionProfileSslInboundProxy",
      },
      ssl_no_proxy: {
        value: decryptionProfileSslNoProxyToHclTerraform(this._sslNoProxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DecryptionProfileSslNoProxy",
      },
      ssl_protocol_settings: {
        value: decryptionProfileSslProtocolSettingsToHclTerraform(this._sslProtocolSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DecryptionProfileSslProtocolSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
