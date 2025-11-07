// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/risk_assessments_new_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RiskAssessmentsNewDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/risk_assessments_new_device#id RiskAssessmentsNewDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Length of time to remember devices for, in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/risk_assessments_new_device#remember_for RiskAssessmentsNewDevice#remember_for}
  */
  readonly rememberFor: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/risk_assessments_new_device auth0_risk_assessments_new_device}
*/
export class RiskAssessmentsNewDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_risk_assessments_new_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RiskAssessmentsNewDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RiskAssessmentsNewDevice to import
  * @param importFromId The id of the existing RiskAssessmentsNewDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/risk_assessments_new_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RiskAssessmentsNewDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_risk_assessments_new_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/risk_assessments_new_device auth0_risk_assessments_new_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RiskAssessmentsNewDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: RiskAssessmentsNewDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_risk_assessments_new_device',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
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
    this._rememberFor = config.rememberFor;
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

  // remember_for - computed: false, optional: false, required: true
  private _rememberFor?: number; 
  public get rememberFor() {
    return this.getNumberAttribute('remember_for');
  }
  public set rememberFor(value: number) {
    this._rememberFor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberForInput() {
    return this._rememberFor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      remember_for: cdktf.numberToTerraform(this._rememberFor),
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
      remember_for: {
        value: cdktf.numberToHclTerraform(this._rememberFor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
