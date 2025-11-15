// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain#enabled PortalCustomDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain#hostname PortalCustomDomain#hostname}
  */
  readonly hostname: string;
  /**
  * The Portal identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain#portal_id PortalCustomDomain#portal_id}
  */
  readonly portalId: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain#ssl PortalCustomDomain#ssl}
  */
  readonly ssl: PortalCustomDomainSsl;
}
export interface PortalCustomDomainSsl {
  /**
  * Custom certificate to be used for the SSL termination. Only used when domain_verification_method == "custom_certificate". Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain#custom_certificate PortalCustomDomain#custom_certificate}
  */
  readonly customCertificate?: string;
  /**
  * Custom certificate private key to be used for the SSL termination. Only used when domain_verification_method == "custom_certificate". Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain#custom_private_key PortalCustomDomain#custom_private_key}
  */
  readonly customPrivateKey?: string;
  /**
  * must be one of ["custom_certificate", "http"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain#domain_verification_method PortalCustomDomain#domain_verification_method}
  */
  readonly domainVerificationMethod?: string;
  /**
  * Advanced option. If true, the custom certificate is served exactly as provided, without attempting to bundle against a public trust store. Required for certificates issued by an internal/private CA. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain#skip_ca_check PortalCustomDomain#skip_ca_check}
  */
  readonly skipCaCheck?: boolean | cdktf.IResolvable;
}

export function portalCustomDomainSslToTerraform(struct?: PortalCustomDomainSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_certificate: cdktf.stringToTerraform(struct!.customCertificate),
    custom_private_key: cdktf.stringToTerraform(struct!.customPrivateKey),
    domain_verification_method: cdktf.stringToTerraform(struct!.domainVerificationMethod),
    skip_ca_check: cdktf.booleanToTerraform(struct!.skipCaCheck),
  }
}


export function portalCustomDomainSslToHclTerraform(struct?: PortalCustomDomainSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_certificate: {
      value: cdktf.stringToHclTerraform(struct!.customCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_private_key: {
      value: cdktf.stringToHclTerraform(struct!.customPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_verification_method: {
      value: cdktf.stringToHclTerraform(struct!.domainVerificationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_ca_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipCaCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalCustomDomainSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalCustomDomainSsl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertificate = this._customCertificate;
    }
    if (this._customPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPrivateKey = this._customPrivateKey;
    }
    if (this._domainVerificationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainVerificationMethod = this._domainVerificationMethod;
    }
    if (this._skipCaCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCaCheck = this._skipCaCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalCustomDomainSsl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customCertificate = undefined;
      this._customPrivateKey = undefined;
      this._domainVerificationMethod = undefined;
      this._skipCaCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customCertificate = value.customCertificate;
      this._customPrivateKey = value.customPrivateKey;
      this._domainVerificationMethod = value.domainVerificationMethod;
      this._skipCaCheck = value.skipCaCheck;
    }
  }

  // custom_certificate - computed: false, optional: true, required: false
  private _customCertificate?: string; 
  public get customCertificate() {
    return this.getStringAttribute('custom_certificate');
  }
  public set customCertificate(value: string) {
    this._customCertificate = value;
  }
  public resetCustomCertificate() {
    this._customCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateInput() {
    return this._customCertificate;
  }

  // custom_private_key - computed: false, optional: true, required: false
  private _customPrivateKey?: string; 
  public get customPrivateKey() {
    return this.getStringAttribute('custom_private_key');
  }
  public set customPrivateKey(value: string) {
    this._customPrivateKey = value;
  }
  public resetCustomPrivateKey() {
    this._customPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPrivateKeyInput() {
    return this._customPrivateKey;
  }

  // domain_verification_method - computed: true, optional: true, required: false
  private _domainVerificationMethod?: string; 
  public get domainVerificationMethod() {
    return this.getStringAttribute('domain_verification_method');
  }
  public set domainVerificationMethod(value: string) {
    this._domainVerificationMethod = value;
  }
  public resetDomainVerificationMethod() {
    this._domainVerificationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainVerificationMethodInput() {
    return this._domainVerificationMethod;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // skip_ca_check - computed: true, optional: true, required: false
  private _skipCaCheck?: boolean | cdktf.IResolvable; 
  public get skipCaCheck() {
    return this.getBooleanAttribute('skip_ca_check');
  }
  public set skipCaCheck(value: boolean | cdktf.IResolvable) {
    this._skipCaCheck = value;
  }
  public resetSkipCaCheck() {
    this._skipCaCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCaCheckInput() {
    return this._skipCaCheck;
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // validation_errors - computed: true, optional: false, required: false
  public get validationErrors() {
    return this.getListAttribute('validation_errors');
  }

  // verification_status - computed: true, optional: false, required: false
  public get verificationStatus() {
    return this.getStringAttribute('verification_status');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain konnect_portal_custom_domain}
*/
export class PortalCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_portal_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortalCustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortalCustomDomain to import
  * @param importFromId The id of the existing PortalCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortalCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_portal_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/portal_custom_domain konnect_portal_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: PortalCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_portal_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._hostname = config.hostname;
    this._portalId = config.portalId;
    this._ssl.internalValue = config.ssl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cname_status - computed: true, optional: false, required: false
  public get cnameStatus() {
    return this.getStringAttribute('cname_status');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // portal_id - computed: false, optional: false, required: true
  private _portalId?: string; 
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }
  public set portalId(value: string) {
    this._portalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalIdInput() {
    return this._portalId;
  }

  // ssl - computed: false, optional: false, required: true
  private _ssl = new PortalCustomDomainSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: PortalCustomDomainSsl) {
    this._ssl.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      hostname: cdktf.stringToTerraform(this._hostname),
      portal_id: cdktf.stringToTerraform(this._portalId),
      ssl: portalCustomDomainSslToTerraform(this._ssl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_id: {
        value: cdktf.stringToHclTerraform(this._portalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: portalCustomDomainSslToHclTerraform(this._ssl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortalCustomDomainSsl",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
