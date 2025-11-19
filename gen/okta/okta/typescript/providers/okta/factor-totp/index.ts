// https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FactorTotpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clock drift interval. This setting allows you to build in tolerance for any drift between the token's current time and the server's current time. Valid values: `3`, `5`, `10`. Default is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp#clock_drift_interval FactorTotp#clock_drift_interval}
  */
  readonly clockDriftInterval?: number;
  /**
  * HMAC Algorithm. Valid values: `HMacSHA1`, `HMacSHA256`, `HMacSHA512`. Default is `HMacSHA512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp#hmac_algorithm FactorTotp#hmac_algorithm}
  */
  readonly hmacAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp#id FactorTotp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The TOTP name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp#name FactorTotp#name}
  */
  readonly name: string;
  /**
  * Length of the password. Default is `6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp#otp_length FactorTotp#otp_length}
  */
  readonly otpLength?: number;
  /**
  * Shared secret encoding. Valid values: `base32`, `base64`, `hexadecimal`. Default is `base32`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp#shared_secret_encoding FactorTotp#shared_secret_encoding}
  */
  readonly sharedSecretEncoding?: string;
  /**
  * Time step in seconds. Valid values: `15`, `30`, `60`. Default is `15`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp#time_step FactorTotp#time_step}
  */
  readonly timeStep?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp okta_factor_totp}
*/
export class FactorTotp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_factor_totp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FactorTotp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FactorTotp to import
  * @param importFromId The id of the existing FactorTotp that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FactorTotp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_factor_totp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/factor_totp okta_factor_totp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FactorTotpConfig
  */
  public constructor(scope: Construct, id: string, config: FactorTotpConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_factor_totp',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.0',
        providerVersionConstraint: '6.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clockDriftInterval = config.clockDriftInterval;
    this._hmacAlgorithm = config.hmacAlgorithm;
    this._id = config.id;
    this._name = config.name;
    this._otpLength = config.otpLength;
    this._sharedSecretEncoding = config.sharedSecretEncoding;
    this._timeStep = config.timeStep;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clock_drift_interval - computed: false, optional: true, required: false
  private _clockDriftInterval?: number; 
  public get clockDriftInterval() {
    return this.getNumberAttribute('clock_drift_interval');
  }
  public set clockDriftInterval(value: number) {
    this._clockDriftInterval = value;
  }
  public resetClockDriftInterval() {
    this._clockDriftInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockDriftIntervalInput() {
    return this._clockDriftInterval;
  }

  // hmac_algorithm - computed: false, optional: true, required: false
  private _hmacAlgorithm?: string; 
  public get hmacAlgorithm() {
    return this.getStringAttribute('hmac_algorithm');
  }
  public set hmacAlgorithm(value: string) {
    this._hmacAlgorithm = value;
  }
  public resetHmacAlgorithm() {
    this._hmacAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacAlgorithmInput() {
    return this._hmacAlgorithm;
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

  // otp_length - computed: false, optional: true, required: false
  private _otpLength?: number; 
  public get otpLength() {
    return this.getNumberAttribute('otp_length');
  }
  public set otpLength(value: number) {
    this._otpLength = value;
  }
  public resetOtpLength() {
    this._otpLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLengthInput() {
    return this._otpLength;
  }

  // shared_secret_encoding - computed: false, optional: true, required: false
  private _sharedSecretEncoding?: string; 
  public get sharedSecretEncoding() {
    return this.getStringAttribute('shared_secret_encoding');
  }
  public set sharedSecretEncoding(value: string) {
    this._sharedSecretEncoding = value;
  }
  public resetSharedSecretEncoding() {
    this._sharedSecretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretEncodingInput() {
    return this._sharedSecretEncoding;
  }

  // time_step - computed: false, optional: true, required: false
  private _timeStep?: number; 
  public get timeStep() {
    return this.getNumberAttribute('time_step');
  }
  public set timeStep(value: number) {
    this._timeStep = value;
  }
  public resetTimeStep() {
    this._timeStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStepInput() {
    return this._timeStep;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clock_drift_interval: cdktf.numberToTerraform(this._clockDriftInterval),
      hmac_algorithm: cdktf.stringToTerraform(this._hmacAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      otp_length: cdktf.numberToTerraform(this._otpLength),
      shared_secret_encoding: cdktf.stringToTerraform(this._sharedSecretEncoding),
      time_step: cdktf.numberToTerraform(this._timeStep),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clock_drift_interval: {
        value: cdktf.numberToHclTerraform(this._clockDriftInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hmac_algorithm: {
        value: cdktf.stringToHclTerraform(this._hmacAlgorithm),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      otp_length: {
        value: cdktf.numberToHclTerraform(this._otpLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_secret_encoding: {
        value: cdktf.stringToHclTerraform(this._sharedSecretEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_step: {
        value: cdktf.numberToHclTerraform(this._timeStep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
