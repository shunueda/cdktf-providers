// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fipscc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFipsccConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fipscc#entropy_token SystemFipscc#entropy_token}
  */
  readonly entropyToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fipscc#id SystemFipscc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fipscc#key_generation_self_test SystemFipscc#key_generation_self_test}
  */
  readonly keyGenerationSelfTest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fipscc#self_test_period SystemFipscc#self_test_period}
  */
  readonly selfTestPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fipscc#status SystemFipscc#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fipscc#vdomparam SystemFipscc#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fipscc fortios_system_fipscc}
*/
export class SystemFipscc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_fipscc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFipscc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFipscc to import
  * @param importFromId The id of the existing SystemFipscc that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fipscc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFipscc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_fipscc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fipscc fortios_system_fipscc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFipsccConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFipsccConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_fipscc',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entropyToken = config.entropyToken;
    this._id = config.id;
    this._keyGenerationSelfTest = config.keyGenerationSelfTest;
    this._selfTestPeriod = config.selfTestPeriod;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entropy_token - computed: true, optional: true, required: false
  private _entropyToken?: string; 
  public get entropyToken() {
    return this.getStringAttribute('entropy_token');
  }
  public set entropyToken(value: string) {
    this._entropyToken = value;
  }
  public resetEntropyToken() {
    this._entropyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entropyTokenInput() {
    return this._entropyToken;
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

  // key_generation_self_test - computed: true, optional: true, required: false
  private _keyGenerationSelfTest?: string; 
  public get keyGenerationSelfTest() {
    return this.getStringAttribute('key_generation_self_test');
  }
  public set keyGenerationSelfTest(value: string) {
    this._keyGenerationSelfTest = value;
  }
  public resetKeyGenerationSelfTest() {
    this._keyGenerationSelfTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyGenerationSelfTestInput() {
    return this._keyGenerationSelfTest;
  }

  // self_test_period - computed: true, optional: true, required: false
  private _selfTestPeriod?: number; 
  public get selfTestPeriod() {
    return this.getNumberAttribute('self_test_period');
  }
  public set selfTestPeriod(value: number) {
    this._selfTestPeriod = value;
  }
  public resetSelfTestPeriod() {
    this._selfTestPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfTestPeriodInput() {
    return this._selfTestPeriod;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entropy_token: cdktf.stringToTerraform(this._entropyToken),
      id: cdktf.stringToTerraform(this._id),
      key_generation_self_test: cdktf.stringToTerraform(this._keyGenerationSelfTest),
      self_test_period: cdktf.numberToTerraform(this._selfTestPeriod),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entropy_token: {
        value: cdktf.stringToHclTerraform(this._entropyToken),
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
      key_generation_self_test: {
        value: cdktf.stringToHclTerraform(this._keyGenerationSelfTest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_test_period: {
        value: cdktf.numberToHclTerraform(this._selfTestPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
