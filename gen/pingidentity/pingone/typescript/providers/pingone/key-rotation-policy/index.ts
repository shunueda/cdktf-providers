// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyRotationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The algorithm this key rotation policy applies to generated key rotation policy keys.  Options are `RSA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy#algorithm KeyRotationPolicy#algorithm}
  */
  readonly algorithm: string;
  /**
  * The ID of the environment to configure a key rotation policy for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy#environment_id KeyRotationPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * The number of bytes of a cryptographic key this key rotation policy will apply to generated key rotation policy keys.  Options are `2048`, `3072`, `4096`, `7680`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy#key_length KeyRotationPolicy#key_length}
  */
  readonly keyLength: number;
  /**
  * Human-readable name displayed in the admin console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy#name KeyRotationPolicy#name}
  */
  readonly name: string;
  /**
  * The number of days between key rotations.  The minimum value allowed is `30` days, while the maximum value allowed is 1 day less than the value set in the `validity_period` parameter.  Defaults to `90`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy#rotation_period KeyRotationPolicy#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * The signature algorithm this key rotation policy will apply to generated key rotation policy keys.  Options are `SHA256withRSA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy#signature_algorithm KeyRotationPolicy#signature_algorithm}
  */
  readonly signatureAlgorithm: string;
  /**
  * The DN this key rotation policy will apply to generated key rotation policy keys. The value will be applied as both issuerDN and subjectDN because generated keys are self-signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy#subject_dn KeyRotationPolicy#subject_dn}
  */
  readonly subjectDn: string;
  /**
  * How the key rotation policy will be used, pertaining to what operations the key rotation policy supports.  Options are `SIGNING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy#usage_type KeyRotationPolicy#usage_type}
  */
  readonly usageType: string;
  /**
  * Controls the "Starts At" and "Expires At" fields this key rotation policy will apply to generated key rotation policy keys.  Defaults to `365`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy#validity_period KeyRotationPolicy#validity_period}
  */
  readonly validityPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy pingone_key_rotation_policy}
*/
export class KeyRotationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_key_rotation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyRotationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyRotationPolicy to import
  * @param importFromId The id of the existing KeyRotationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyRotationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_key_rotation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key_rotation_policy pingone_key_rotation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyRotationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: KeyRotationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_key_rotation_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._environmentId = config.environmentId;
    this._keyLength = config.keyLength;
    this._name = config.name;
    this._rotationPeriod = config.rotationPeriod;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._subjectDn = config.subjectDn;
    this._usageType = config.usageType;
    this._validityPeriod = config.validityPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // current_key_id - computed: true, optional: false, required: false
  public get currentKeyId() {
    return this.getStringAttribute('current_key_id');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_length - computed: false, optional: false, required: true
  private _keyLength?: number; 
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }
  public set keyLength(value: number) {
    this._keyLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLengthInput() {
    return this._keyLength;
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

  // next_key_id - computed: true, optional: false, required: false
  public get nextKeyId() {
    return this.getStringAttribute('next_key_id');
  }

  // rotated_at - computed: true, optional: false, required: false
  public get rotatedAt() {
    return this.getStringAttribute('rotated_at');
  }

  // rotation_period - computed: true, optional: true, required: false
  private _rotationPeriod?: number; 
  public get rotationPeriod() {
    return this.getNumberAttribute('rotation_period');
  }
  public set rotationPeriod(value: number) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // signature_algorithm - computed: false, optional: false, required: true
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // subject_dn - computed: false, optional: false, required: true
  private _subjectDn?: string; 
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }
  public set subjectDn(value: string) {
    this._subjectDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectDnInput() {
    return this._subjectDn;
  }

  // usage_type - computed: false, optional: false, required: true
  private _usageType?: string; 
  public get usageType() {
    return this.getStringAttribute('usage_type');
  }
  public set usageType(value: string) {
    this._usageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTypeInput() {
    return this._usageType;
  }

  // validity_period - computed: true, optional: true, required: false
  private _validityPeriod?: number; 
  public get validityPeriod() {
    return this.getNumberAttribute('validity_period');
  }
  public set validityPeriod(value: number) {
    this._validityPeriod = value;
  }
  public resetValidityPeriod() {
    this._validityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodInput() {
    return this._validityPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      key_length: cdktf.numberToTerraform(this._keyLength),
      name: cdktf.stringToTerraform(this._name),
      rotation_period: cdktf.numberToTerraform(this._rotationPeriod),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      subject_dn: cdktf.stringToTerraform(this._subjectDn),
      usage_type: cdktf.stringToTerraform(this._usageType),
      validity_period: cdktf.numberToTerraform(this._validityPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_length: {
        value: cdktf.numberToHclTerraform(this._keyLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_period: {
        value: cdktf.numberToHclTerraform(this._rotationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_dn: {
        value: cdktf.stringToHclTerraform(this._subjectDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_type: {
        value: cdktf.stringToHclTerraform(this._usageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_period: {
        value: cdktf.numberToHclTerraform(this._validityPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
