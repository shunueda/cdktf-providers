// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CpsUploadCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to acknowledge change management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#acknowledge_change_management CpsUploadCertificate#acknowledge_change_management}
  */
  readonly acknowledgeChangeManagement?: boolean | cdktf.IResolvable;
  /**
  * Whether to acknowledge post-verification warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#acknowledge_post_verification_warnings CpsUploadCertificate#acknowledge_post_verification_warnings}
  */
  readonly acknowledgePostVerificationWarnings?: boolean | cdktf.IResolvable;
  /**
  * List of post-verification warnings to be automatically acknowledged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#auto_approve_warnings CpsUploadCertificate#auto_approve_warnings}
  */
  readonly autoApproveWarnings?: string[];
  /**
  * ECDSA certificate in pem format to be uploaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#certificate_ecdsa_pem CpsUploadCertificate#certificate_ecdsa_pem}
  */
  readonly certificateEcdsaPem?: string;
  /**
  * RSA certificate in pem format to be uploaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#certificate_rsa_pem CpsUploadCertificate#certificate_rsa_pem}
  */
  readonly certificateRsaPem?: string;
  /**
  * The unique identifier of the enrollment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#enrollment_id CpsUploadCertificate#enrollment_id}
  */
  readonly enrollmentId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#id CpsUploadCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Trust chain in pem format for provided ECDSA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#trust_chain_ecdsa_pem CpsUploadCertificate#trust_chain_ecdsa_pem}
  */
  readonly trustChainEcdsaPem?: string;
  /**
  * Trust chain in pem format for provided RSA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#trust_chain_rsa_pem CpsUploadCertificate#trust_chain_rsa_pem}
  */
  readonly trustChainRsaPem?: string;
  /**
  * Whether to wait for certificate to be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#wait_for_deployment CpsUploadCertificate#wait_for_deployment}
  */
  readonly waitForDeployment?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#timeouts CpsUploadCertificate#timeouts}
  */
  readonly timeouts?: CpsUploadCertificateTimeouts;
}
export interface CpsUploadCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#default CpsUploadCertificate#default}
  */
  readonly default?: string;
}

export function cpsUploadCertificateTimeoutsToTerraform(struct?: CpsUploadCertificateTimeoutsOutputReference | CpsUploadCertificateTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function cpsUploadCertificateTimeoutsToHclTerraform(struct?: CpsUploadCertificateTimeoutsOutputReference | CpsUploadCertificateTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CpsUploadCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CpsUploadCertificateTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CpsUploadCertificateTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate akamai_cps_upload_certificate}
*/
export class CpsUploadCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cps_upload_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CpsUploadCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CpsUploadCertificate to import
  * @param importFromId The id of the existing CpsUploadCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CpsUploadCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cps_upload_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_upload_certificate akamai_cps_upload_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CpsUploadCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CpsUploadCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cps_upload_certificate',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acknowledgeChangeManagement = config.acknowledgeChangeManagement;
    this._acknowledgePostVerificationWarnings = config.acknowledgePostVerificationWarnings;
    this._autoApproveWarnings = config.autoApproveWarnings;
    this._certificateEcdsaPem = config.certificateEcdsaPem;
    this._certificateRsaPem = config.certificateRsaPem;
    this._enrollmentId = config.enrollmentId;
    this._id = config.id;
    this._trustChainEcdsaPem = config.trustChainEcdsaPem;
    this._trustChainRsaPem = config.trustChainRsaPem;
    this._waitForDeployment = config.waitForDeployment;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acknowledge_change_management - computed: false, optional: true, required: false
  private _acknowledgeChangeManagement?: boolean | cdktf.IResolvable; 
  public get acknowledgeChangeManagement() {
    return this.getBooleanAttribute('acknowledge_change_management');
  }
  public set acknowledgeChangeManagement(value: boolean | cdktf.IResolvable) {
    this._acknowledgeChangeManagement = value;
  }
  public resetAcknowledgeChangeManagement() {
    this._acknowledgeChangeManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgeChangeManagementInput() {
    return this._acknowledgeChangeManagement;
  }

  // acknowledge_post_verification_warnings - computed: false, optional: true, required: false
  private _acknowledgePostVerificationWarnings?: boolean | cdktf.IResolvable; 
  public get acknowledgePostVerificationWarnings() {
    return this.getBooleanAttribute('acknowledge_post_verification_warnings');
  }
  public set acknowledgePostVerificationWarnings(value: boolean | cdktf.IResolvable) {
    this._acknowledgePostVerificationWarnings = value;
  }
  public resetAcknowledgePostVerificationWarnings() {
    this._acknowledgePostVerificationWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgePostVerificationWarningsInput() {
    return this._acknowledgePostVerificationWarnings;
  }

  // auto_approve_warnings - computed: false, optional: true, required: false
  private _autoApproveWarnings?: string[]; 
  public get autoApproveWarnings() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_approve_warnings'));
  }
  public set autoApproveWarnings(value: string[]) {
    this._autoApproveWarnings = value;
  }
  public resetAutoApproveWarnings() {
    this._autoApproveWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveWarningsInput() {
    return this._autoApproveWarnings;
  }

  // certificate_ecdsa_pem - computed: false, optional: true, required: false
  private _certificateEcdsaPem?: string; 
  public get certificateEcdsaPem() {
    return this.getStringAttribute('certificate_ecdsa_pem');
  }
  public set certificateEcdsaPem(value: string) {
    this._certificateEcdsaPem = value;
  }
  public resetCertificateEcdsaPem() {
    this._certificateEcdsaPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateEcdsaPemInput() {
    return this._certificateEcdsaPem;
  }

  // certificate_rsa_pem - computed: false, optional: true, required: false
  private _certificateRsaPem?: string; 
  public get certificateRsaPem() {
    return this.getStringAttribute('certificate_rsa_pem');
  }
  public set certificateRsaPem(value: string) {
    this._certificateRsaPem = value;
  }
  public resetCertificateRsaPem() {
    this._certificateRsaPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRsaPemInput() {
    return this._certificateRsaPem;
  }

  // enrollment_id - computed: false, optional: false, required: true
  private _enrollmentId?: number; 
  public get enrollmentId() {
    return this.getNumberAttribute('enrollment_id');
  }
  public set enrollmentId(value: number) {
    this._enrollmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentIdInput() {
    return this._enrollmentId;
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

  // trust_chain_ecdsa_pem - computed: false, optional: true, required: false
  private _trustChainEcdsaPem?: string; 
  public get trustChainEcdsaPem() {
    return this.getStringAttribute('trust_chain_ecdsa_pem');
  }
  public set trustChainEcdsaPem(value: string) {
    this._trustChainEcdsaPem = value;
  }
  public resetTrustChainEcdsaPem() {
    this._trustChainEcdsaPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustChainEcdsaPemInput() {
    return this._trustChainEcdsaPem;
  }

  // trust_chain_rsa_pem - computed: false, optional: true, required: false
  private _trustChainRsaPem?: string; 
  public get trustChainRsaPem() {
    return this.getStringAttribute('trust_chain_rsa_pem');
  }
  public set trustChainRsaPem(value: string) {
    this._trustChainRsaPem = value;
  }
  public resetTrustChainRsaPem() {
    this._trustChainRsaPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustChainRsaPemInput() {
    return this._trustChainRsaPem;
  }

  // wait_for_deployment - computed: false, optional: true, required: false
  private _waitForDeployment?: boolean | cdktf.IResolvable; 
  public get waitForDeployment() {
    return this.getBooleanAttribute('wait_for_deployment');
  }
  public set waitForDeployment(value: boolean | cdktf.IResolvable) {
    this._waitForDeployment = value;
  }
  public resetWaitForDeployment() {
    this._waitForDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeploymentInput() {
    return this._waitForDeployment;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CpsUploadCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CpsUploadCertificateTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acknowledge_change_management: cdktf.booleanToTerraform(this._acknowledgeChangeManagement),
      acknowledge_post_verification_warnings: cdktf.booleanToTerraform(this._acknowledgePostVerificationWarnings),
      auto_approve_warnings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoApproveWarnings),
      certificate_ecdsa_pem: cdktf.stringToTerraform(this._certificateEcdsaPem),
      certificate_rsa_pem: cdktf.stringToTerraform(this._certificateRsaPem),
      enrollment_id: cdktf.numberToTerraform(this._enrollmentId),
      id: cdktf.stringToTerraform(this._id),
      trust_chain_ecdsa_pem: cdktf.stringToTerraform(this._trustChainEcdsaPem),
      trust_chain_rsa_pem: cdktf.stringToTerraform(this._trustChainRsaPem),
      wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
      timeouts: cpsUploadCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acknowledge_change_management: {
        value: cdktf.booleanToHclTerraform(this._acknowledgeChangeManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      acknowledge_post_verification_warnings: {
        value: cdktf.booleanToHclTerraform(this._acknowledgePostVerificationWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_approve_warnings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoApproveWarnings),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate_ecdsa_pem: {
        value: cdktf.stringToHclTerraform(this._certificateEcdsaPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_rsa_pem: {
        value: cdktf.stringToHclTerraform(this._certificateRsaPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enrollment_id: {
        value: cdktf.numberToHclTerraform(this._enrollmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_chain_ecdsa_pem: {
        value: cdktf.stringToHclTerraform(this._trustChainEcdsaPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_chain_rsa_pem: {
        value: cdktf.stringToHclTerraform(this._trustChainRsaPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_deployment: {
        value: cdktf.booleanToHclTerraform(this._waitForDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: cpsUploadCertificateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CpsUploadCertificateTimeoutsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
