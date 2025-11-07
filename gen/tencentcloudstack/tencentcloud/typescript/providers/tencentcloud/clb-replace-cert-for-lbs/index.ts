// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbReplaceCertForLbsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#id ClbReplaceCertForLbs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the certificate to be replaced, which can be a server certificate or a client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#old_certificate_id ClbReplaceCertForLbs#old_certificate_id}
  */
  readonly oldCertificateId: string;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#certificate ClbReplaceCertForLbs#certificate}
  */
  readonly certificate: ClbReplaceCertForLbsCertificate;
}
export interface ClbReplaceCertForLbsCertificate {
  /**
  * Content of the uploaded client certificate. When SSLMode = mutual, if there is no CertCaId, this parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#cert_ca_content ClbReplaceCertForLbs#cert_ca_content}
  */
  readonly certCaContent?: string;
  /**
  * ID of a client certificate. When the listener adopts mutual authentication (i.e., SSLMode = mutual), if you leave this parameter empty, you must upload the client certificate, including CertCaContent and CertCaName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#cert_ca_id ClbReplaceCertForLbs#cert_ca_id}
  */
  readonly certCaId?: string;
  /**
  * Name of the uploaded client CA certificate. When SSLMode = mutual, if there is no CertCaId, this parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#cert_ca_name ClbReplaceCertForLbs#cert_ca_name}
  */
  readonly certCaName?: string;
  /**
  * Content of the uploaded server certificate. If there is no CertId, this parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#cert_content ClbReplaceCertForLbs#cert_content}
  */
  readonly certContent?: string;
  /**
  * ID of a server certificate. If you leave this parameter empty, you must upload the certificate, including CertContent, CertKey, and CertName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#cert_id ClbReplaceCertForLbs#cert_id}
  */
  readonly certId?: string;
  /**
  * Key of the uploaded server certificate. If there is no CertId, this parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#cert_key ClbReplaceCertForLbs#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the uploaded server certificate. If there is no CertId, this parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#cert_name ClbReplaceCertForLbs#cert_name}
  */
  readonly certName?: string;
  /**
  * Authentication type. Value range: UNIDIRECTIONAL (unidirectional authentication), MUTUAL (mutual authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#ssl_mode ClbReplaceCertForLbs#ssl_mode}
  */
  readonly sslMode?: string;
}

export function clbReplaceCertForLbsCertificateToTerraform(struct?: ClbReplaceCertForLbsCertificateOutputReference | ClbReplaceCertForLbsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_ca_content: cdktf.stringToTerraform(struct!.certCaContent),
    cert_ca_id: cdktf.stringToTerraform(struct!.certCaId),
    cert_ca_name: cdktf.stringToTerraform(struct!.certCaName),
    cert_content: cdktf.stringToTerraform(struct!.certContent),
    cert_id: cdktf.stringToTerraform(struct!.certId),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    cert_name: cdktf.stringToTerraform(struct!.certName),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
  }
}


export function clbReplaceCertForLbsCertificateToHclTerraform(struct?: ClbReplaceCertForLbsCertificateOutputReference | ClbReplaceCertForLbsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_ca_content: {
      value: cdktf.stringToHclTerraform(struct!.certCaContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_ca_id: {
      value: cdktf.stringToHclTerraform(struct!.certCaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_ca_name: {
      value: cdktf.stringToHclTerraform(struct!.certCaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_content: {
      value: cdktf.stringToHclTerraform(struct!.certContent),
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
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_name: {
      value: cdktf.stringToHclTerraform(struct!.certName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClbReplaceCertForLbsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClbReplaceCertForLbsCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certCaContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.certCaContent = this._certCaContent;
    }
    if (this._certCaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certCaId = this._certCaId;
    }
    if (this._certCaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certCaName = this._certCaName;
    }
    if (this._certContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.certContent = this._certContent;
    }
    if (this._certId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certId = this._certId;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._certName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certName = this._certName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClbReplaceCertForLbsCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certCaContent = undefined;
      this._certCaId = undefined;
      this._certCaName = undefined;
      this._certContent = undefined;
      this._certId = undefined;
      this._certKey = undefined;
      this._certName = undefined;
      this._sslMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certCaContent = value.certCaContent;
      this._certCaId = value.certCaId;
      this._certCaName = value.certCaName;
      this._certContent = value.certContent;
      this._certId = value.certId;
      this._certKey = value.certKey;
      this._certName = value.certName;
      this._sslMode = value.sslMode;
    }
  }

  // cert_ca_content - computed: false, optional: true, required: false
  private _certCaContent?: string; 
  public get certCaContent() {
    return this.getStringAttribute('cert_ca_content');
  }
  public set certCaContent(value: string) {
    this._certCaContent = value;
  }
  public resetCertCaContent() {
    this._certCaContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCaContentInput() {
    return this._certCaContent;
  }

  // cert_ca_id - computed: false, optional: true, required: false
  private _certCaId?: string; 
  public get certCaId() {
    return this.getStringAttribute('cert_ca_id');
  }
  public set certCaId(value: string) {
    this._certCaId = value;
  }
  public resetCertCaId() {
    this._certCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCaIdInput() {
    return this._certCaId;
  }

  // cert_ca_name - computed: false, optional: true, required: false
  private _certCaName?: string; 
  public get certCaName() {
    return this.getStringAttribute('cert_ca_name');
  }
  public set certCaName(value: string) {
    this._certCaName = value;
  }
  public resetCertCaName() {
    this._certCaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCaNameInput() {
    return this._certCaName;
  }

  // cert_content - computed: false, optional: true, required: false
  private _certContent?: string; 
  public get certContent() {
    return this.getStringAttribute('cert_content');
  }
  public set certContent(value: string) {
    this._certContent = value;
  }
  public resetCertContent() {
    this._certContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certContentInput() {
    return this._certContent;
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

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
  }

  // cert_name - computed: false, optional: true, required: false
  private _certName?: string; 
  public get certName() {
    return this.getStringAttribute('cert_name');
  }
  public set certName(value: string) {
    this._certName = value;
  }
  public resetCertName() {
    this._certName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
  }

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs tencentcloud_clb_replace_cert_for_lbs}
*/
export class ClbReplaceCertForLbs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_replace_cert_for_lbs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbReplaceCertForLbs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbReplaceCertForLbs to import
  * @param importFromId The id of the existing ClbReplaceCertForLbs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbReplaceCertForLbs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_replace_cert_for_lbs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/clb_replace_cert_for_lbs tencentcloud_clb_replace_cert_for_lbs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbReplaceCertForLbsConfig
  */
  public constructor(scope: Construct, id: string, config: ClbReplaceCertForLbsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_replace_cert_for_lbs',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._oldCertificateId = config.oldCertificateId;
    this._certificate.internalValue = config.certificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // old_certificate_id - computed: false, optional: false, required: true
  private _oldCertificateId?: string; 
  public get oldCertificateId() {
    return this.getStringAttribute('old_certificate_id');
  }
  public set oldCertificateId(value: string) {
    this._oldCertificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldCertificateIdInput() {
    return this._oldCertificateId;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new ClbReplaceCertForLbsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ClbReplaceCertForLbsCertificate) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      old_certificate_id: cdktf.stringToTerraform(this._oldCertificateId),
      certificate: clbReplaceCertForLbsCertificateToTerraform(this._certificate.internalValue),
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
      old_certificate_id: {
        value: cdktf.stringToHclTerraform(this._oldCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: clbReplaceCertForLbsCertificateToHclTerraform(this._certificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClbReplaceCertForLbsCertificateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
