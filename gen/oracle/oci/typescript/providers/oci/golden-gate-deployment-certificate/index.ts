// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoldenGateDeploymentCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate#certificate_content GoldenGateDeploymentCertificate#certificate_content}
  */
  readonly certificateContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate#deployment_id GoldenGateDeploymentCertificate#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate#id GoldenGateDeploymentCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate#is_lock_override GoldenGateDeploymentCertificate#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate#key GoldenGateDeploymentCertificate#key}
  */
  readonly key: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate#timeouts GoldenGateDeploymentCertificate#timeouts}
  */
  readonly timeouts?: GoldenGateDeploymentCertificateTimeouts;
}
export interface GoldenGateDeploymentCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate#create GoldenGateDeploymentCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate#delete GoldenGateDeploymentCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate#update GoldenGateDeploymentCertificate#update}
  */
  readonly update?: string;
}

export function goldenGateDeploymentCertificateTimeoutsToTerraform(struct?: GoldenGateDeploymentCertificateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function goldenGateDeploymentCertificateTimeoutsToHclTerraform(struct?: GoldenGateDeploymentCertificateTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class GoldenGateDeploymentCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoldenGateDeploymentCertificateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGateDeploymentCertificateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate oci_golden_gate_deployment_certificate}
*/
export class GoldenGateDeploymentCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_deployment_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoldenGateDeploymentCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoldenGateDeploymentCertificate to import
  * @param importFromId The id of the existing GoldenGateDeploymentCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoldenGateDeploymentCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_golden_gate_deployment_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/golden_gate_deployment_certificate oci_golden_gate_deployment_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoldenGateDeploymentCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: GoldenGateDeploymentCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_deployment_certificate',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateContent = config.certificateContent;
    this._deploymentId = config.deploymentId;
    this._id = config.id;
    this._isLockOverride = config.isLockOverride;
    this._key = config.key;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authority_key_id - computed: true, optional: false, required: false
  public get authorityKeyId() {
    return this.getStringAttribute('authority_key_id');
  }

  // certificate_content - computed: false, optional: false, required: true
  private _certificateContent?: string; 
  public get certificateContent() {
    return this.getStringAttribute('certificate_content');
  }
  public set certificateContent(value: string) {
    this._certificateContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateContentInput() {
    return this._certificateContent;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
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

  // is_ca - computed: true, optional: false, required: false
  public get isCa() {
    return this.getBooleanAttribute('is_ca');
  }

  // is_lock_override - computed: true, optional: true, required: false
  private _isLockOverride?: boolean | cdktf.IResolvable; 
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }
  public set isLockOverride(value: boolean | cdktf.IResolvable) {
    this._isLockOverride = value;
  }
  public resetIsLockOverride() {
    this._isLockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockOverrideInput() {
    return this._isLockOverride;
  }

  // is_self_signed - computed: true, optional: false, required: false
  public get isSelfSigned() {
    return this.getBooleanAttribute('is_self_signed');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // md5hash - computed: true, optional: false, required: false
  public get md5Hash() {
    return this.getStringAttribute('md5hash');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // public_key_algorithm - computed: true, optional: false, required: false
  public get publicKeyAlgorithm() {
    return this.getStringAttribute('public_key_algorithm');
  }

  // public_key_size - computed: true, optional: false, required: false
  public get publicKeySize() {
    return this.getStringAttribute('public_key_size');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // sha1hash - computed: true, optional: false, required: false
  public get sha1Hash() {
    return this.getStringAttribute('sha1hash');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subject_key_id - computed: true, optional: false, required: false
  public get subjectKeyId() {
    return this.getStringAttribute('subject_key_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_valid_from - computed: true, optional: false, required: false
  public get timeValidFrom() {
    return this.getStringAttribute('time_valid_from');
  }

  // time_valid_to - computed: true, optional: false, required: false
  public get timeValidTo() {
    return this.getStringAttribute('time_valid_to');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoldenGateDeploymentCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoldenGateDeploymentCertificateTimeouts) {
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
      certificate_content: cdktf.stringToTerraform(this._certificateContent),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      id: cdktf.stringToTerraform(this._id),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      key: cdktf.stringToTerraform(this._key),
      timeouts: goldenGateDeploymentCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_content: {
        value: cdktf.stringToHclTerraform(this._certificateContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
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
      is_lock_override: {
        value: cdktf.booleanToHclTerraform(this._isLockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: goldenGateDeploymentCertificateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoldenGateDeploymentCertificateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
