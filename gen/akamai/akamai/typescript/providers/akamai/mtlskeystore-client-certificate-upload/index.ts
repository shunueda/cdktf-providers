// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MtlskeystoreClientCertificateUploadConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, all warnings will be acknowledged automatically. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload#auto_acknowledge_warnings MtlskeystoreClientCertificateUpload#auto_acknowledge_warnings}
  */
  readonly autoAcknowledgeWarnings?: boolean | cdktf.IResolvable;
  /**
  * The ID of the client certificate to which the signed certificate will be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload#client_certificate_id MtlskeystoreClientCertificateUpload#client_certificate_id}
  */
  readonly clientCertificateId: number;
  /**
  * The signed certificate to upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload#signed_certificate MtlskeystoreClientCertificateUpload#signed_certificate}
  */
  readonly signedCertificate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload#timeouts MtlskeystoreClientCertificateUpload#timeouts}
  */
  readonly timeouts?: MtlskeystoreClientCertificateUploadTimeouts;
  /**
  * The optional trust chain associated with the signed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload#trust_chain MtlskeystoreClientCertificateUpload#trust_chain}
  */
  readonly trustChain?: string;
  /**
  * The version number of the client certificate to upload the signed certificate to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload#version_number MtlskeystoreClientCertificateUpload#version_number}
  */
  readonly versionNumber: number;
  /**
  * Indicates whether to wait for the deployment of the uploaded certificate. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload#wait_for_deployment MtlskeystoreClientCertificateUpload#wait_for_deployment}
  */
  readonly waitForDeployment?: boolean | cdktf.IResolvable;
}
export interface MtlskeystoreClientCertificateUploadTimeouts {
  /**
  * Optional configurable resource create timeout. By default it's 30m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload#create MtlskeystoreClientCertificateUpload#create}
  */
  readonly create?: string;
  /**
  * Optional configurable resource update timeout. By default it's 30m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload#update MtlskeystoreClientCertificateUpload#update}
  */
  readonly update?: string;
}

export function mtlskeystoreClientCertificateUploadTimeoutsToTerraform(struct?: MtlskeystoreClientCertificateUploadTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mtlskeystoreClientCertificateUploadTimeoutsToHclTerraform(struct?: MtlskeystoreClientCertificateUploadTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MtlskeystoreClientCertificateUploadTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MtlskeystoreClientCertificateUploadTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MtlskeystoreClientCertificateUploadTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload akamai_mtlskeystore_client_certificate_upload}
*/
export class MtlskeystoreClientCertificateUpload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_mtlskeystore_client_certificate_upload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MtlskeystoreClientCertificateUpload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MtlskeystoreClientCertificateUpload to import
  * @param importFromId The id of the existing MtlskeystoreClientCertificateUpload that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MtlskeystoreClientCertificateUpload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_mtlskeystore_client_certificate_upload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/mtlskeystore_client_certificate_upload akamai_mtlskeystore_client_certificate_upload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MtlskeystoreClientCertificateUploadConfig
  */
  public constructor(scope: Construct, id: string, config: MtlskeystoreClientCertificateUploadConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_mtlskeystore_client_certificate_upload',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAcknowledgeWarnings = config.autoAcknowledgeWarnings;
    this._clientCertificateId = config.clientCertificateId;
    this._signedCertificate = config.signedCertificate;
    this._timeouts.internalValue = config.timeouts;
    this._trustChain = config.trustChain;
    this._versionNumber = config.versionNumber;
    this._waitForDeployment = config.waitForDeployment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_acknowledge_warnings - computed: true, optional: true, required: false
  private _autoAcknowledgeWarnings?: boolean | cdktf.IResolvable; 
  public get autoAcknowledgeWarnings() {
    return this.getBooleanAttribute('auto_acknowledge_warnings');
  }
  public set autoAcknowledgeWarnings(value: boolean | cdktf.IResolvable) {
    this._autoAcknowledgeWarnings = value;
  }
  public resetAutoAcknowledgeWarnings() {
    this._autoAcknowledgeWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcknowledgeWarningsInput() {
    return this._autoAcknowledgeWarnings;
  }

  // client_certificate_id - computed: false, optional: false, required: true
  private _clientCertificateId?: number; 
  public get clientCertificateId() {
    return this.getNumberAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: number) {
    this._clientCertificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId;
  }

  // signed_certificate - computed: false, optional: false, required: true
  private _signedCertificate?: string; 
  public get signedCertificate() {
    return this.getStringAttribute('signed_certificate');
  }
  public set signedCertificate(value: string) {
    this._signedCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signedCertificateInput() {
    return this._signedCertificate;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MtlskeystoreClientCertificateUploadTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MtlskeystoreClientCertificateUploadTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trust_chain - computed: false, optional: true, required: false
  private _trustChain?: string; 
  public get trustChain() {
    return this.getStringAttribute('trust_chain');
  }
  public set trustChain(value: string) {
    this._trustChain = value;
  }
  public resetTrustChain() {
    this._trustChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustChainInput() {
    return this._trustChain;
  }

  // version_guid - computed: true, optional: false, required: false
  public get versionGuid() {
    return this.getStringAttribute('version_guid');
  }

  // version_number - computed: false, optional: false, required: true
  private _versionNumber?: number; 
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
  public set versionNumber(value: number) {
    this._versionNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNumberInput() {
    return this._versionNumber;
  }

  // wait_for_deployment - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_acknowledge_warnings: cdktf.booleanToTerraform(this._autoAcknowledgeWarnings),
      client_certificate_id: cdktf.numberToTerraform(this._clientCertificateId),
      signed_certificate: cdktf.stringToTerraform(this._signedCertificate),
      timeouts: mtlskeystoreClientCertificateUploadTimeoutsToTerraform(this._timeouts.internalValue),
      trust_chain: cdktf.stringToTerraform(this._trustChain),
      version_number: cdktf.numberToTerraform(this._versionNumber),
      wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_acknowledge_warnings: {
        value: cdktf.booleanToHclTerraform(this._autoAcknowledgeWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_certificate_id: {
        value: cdktf.numberToHclTerraform(this._clientCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signed_certificate: {
        value: cdktf.stringToHclTerraform(this._signedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mtlskeystoreClientCertificateUploadTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MtlskeystoreClientCertificateUploadTimeouts",
      },
      trust_chain: {
        value: cdktf.stringToHclTerraform(this._trustChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_number: {
        value: cdktf.numberToHclTerraform(this._versionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_for_deployment: {
        value: cdktf.booleanToHclTerraform(this._waitForDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
