// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosBucketDomainCertificateAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#bucket CosBucketDomainCertificateAttachment#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#id CosBucketDomainCertificateAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * domain_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#domain_certificate CosBucketDomainCertificateAttachment#domain_certificate}
  */
  readonly domainCertificate: CosBucketDomainCertificateAttachmentDomainCertificate;
}
export interface CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCert {
  /**
  * Public key of certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#cert CosBucketDomainCertificateAttachment#cert}
  */
  readonly cert: string;
  /**
  * ID of certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#cert_id CosBucketDomainCertificateAttachment#cert_id}
  */
  readonly certId?: string;
  /**
  * Private key of certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#private_key CosBucketDomainCertificateAttachment#private_key}
  */
  readonly privateKey: string;
}

export function cosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCertToTerraform(struct?: CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCertOutputReference | CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    cert_id: cdktf.stringToTerraform(struct!.certId),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function cosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCertToHclTerraform(struct?: CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCertOutputReference | CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_id: {
      value: cdktf.stringToHclTerraform(struct!.certId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._certId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certId = this._certId;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._certId = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._certId = value.certId;
      this._privateKey = value.privateKey;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // cert_id - computed: false, optional: true, required: false
  private _certId?: string; 
  public get certId() {
    return this.getStringAttribute('cert_id');
  }
  public set certId(value: string) {
    this._certId = value;
  }
  public resetCertId() {
    this._certId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdInput() {
    return this._certId;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface CosBucketDomainCertificateAttachmentDomainCertificateCertificate {
  /**
  * Certificate type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#cert_type CosBucketDomainCertificateAttachment#cert_type}
  */
  readonly certType: string;
  /**
  * custom_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#custom_cert CosBucketDomainCertificateAttachment#custom_cert}
  */
  readonly customCert: CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCert;
}

export function cosBucketDomainCertificateAttachmentDomainCertificateCertificateToTerraform(struct?: CosBucketDomainCertificateAttachmentDomainCertificateCertificateOutputReference | CosBucketDomainCertificateAttachmentDomainCertificateCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_type: cdktf.stringToTerraform(struct!.certType),
    custom_cert: cosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCertToTerraform(struct!.customCert),
  }
}


export function cosBucketDomainCertificateAttachmentDomainCertificateCertificateToHclTerraform(struct?: CosBucketDomainCertificateAttachmentDomainCertificateCertificateOutputReference | CosBucketDomainCertificateAttachmentDomainCertificateCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_type: {
      value: cdktf.stringToHclTerraform(struct!.certType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_cert: {
      value: cosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCertToHclTerraform(struct!.customCert),
      isBlock: true,
      type: "list",
      storageClassType: "CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCertList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketDomainCertificateAttachmentDomainCertificateCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketDomainCertificateAttachmentDomainCertificateCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certType = this._certType;
    }
    if (this._customCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCert = this._customCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketDomainCertificateAttachmentDomainCertificateCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certType = undefined;
      this._customCert.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certType = value.certType;
      this._customCert.internalValue = value.customCert;
    }
  }

  // cert_type - computed: false, optional: false, required: true
  private _certType?: string; 
  public get certType() {
    return this.getStringAttribute('cert_type');
  }
  public set certType(value: string) {
    this._certType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // custom_cert - computed: false, optional: false, required: true
  private _customCert = new CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCertOutputReference(this, "custom_cert");
  public get customCert() {
    return this._customCert;
  }
  public putCustomCert(value: CosBucketDomainCertificateAttachmentDomainCertificateCertificateCustomCert) {
    this._customCert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertInput() {
    return this._customCert.internalValue;
  }
}
export interface CosBucketDomainCertificateAttachmentDomainCertificate {
  /**
  * The name of domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#domain CosBucketDomainCertificateAttachment#domain}
  */
  readonly domain: string;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#certificate CosBucketDomainCertificateAttachment#certificate}
  */
  readonly certificate: CosBucketDomainCertificateAttachmentDomainCertificateCertificate;
}

export function cosBucketDomainCertificateAttachmentDomainCertificateToTerraform(struct?: CosBucketDomainCertificateAttachmentDomainCertificateOutputReference | CosBucketDomainCertificateAttachmentDomainCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    certificate: cosBucketDomainCertificateAttachmentDomainCertificateCertificateToTerraform(struct!.certificate),
  }
}


export function cosBucketDomainCertificateAttachmentDomainCertificateToHclTerraform(struct?: CosBucketDomainCertificateAttachmentDomainCertificateOutputReference | CosBucketDomainCertificateAttachmentDomainCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cosBucketDomainCertificateAttachmentDomainCertificateCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "CosBucketDomainCertificateAttachmentDomainCertificateCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketDomainCertificateAttachmentDomainCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketDomainCertificateAttachmentDomainCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketDomainCertificateAttachmentDomainCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._certificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._certificate.internalValue = value.certificate;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new CosBucketDomainCertificateAttachmentDomainCertificateCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: CosBucketDomainCertificateAttachmentDomainCertificateCertificate) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment tencentcloud_cos_bucket_domain_certificate_attachment}
*/
export class CosBucketDomainCertificateAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cos_bucket_domain_certificate_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosBucketDomainCertificateAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosBucketDomainCertificateAttachment to import
  * @param importFromId The id of the existing CosBucketDomainCertificateAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosBucketDomainCertificateAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cos_bucket_domain_certificate_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_domain_certificate_attachment tencentcloud_cos_bucket_domain_certificate_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosBucketDomainCertificateAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CosBucketDomainCertificateAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cos_bucket_domain_certificate_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._id = config.id;
    this._domainCertificate.internalValue = config.domainCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // domain_certificate - computed: false, optional: false, required: true
  private _domainCertificate = new CosBucketDomainCertificateAttachmentDomainCertificateOutputReference(this, "domain_certificate");
  public get domainCertificate() {
    return this._domainCertificate;
  }
  public putDomainCertificate(value: CosBucketDomainCertificateAttachmentDomainCertificate) {
    this._domainCertificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainCertificateInput() {
    return this._domainCertificate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      domain_certificate: cosBucketDomainCertificateAttachmentDomainCertificateToTerraform(this._domainCertificate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_certificate: {
        value: cosBucketDomainCertificateAttachmentDomainCertificateToHclTerraform(this._domainCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketDomainCertificateAttachmentDomainCertificateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
