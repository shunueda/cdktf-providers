// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/compute_manager_realization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtComputeManagerRealizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Check if registration of compute manager is complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/compute_manager_realization#check_registration DataNsxtComputeManagerRealization#check_registration}
  */
  readonly checkRegistration?: boolean | cdktf.IResolvable;
  /**
  * Initial delay to start realization checks in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/compute_manager_realization#delay DataNsxtComputeManagerRealization#delay}
  */
  readonly delay?: number;
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/compute_manager_realization#id DataNsxtComputeManagerRealization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Realization timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/compute_manager_realization#timeout DataNsxtComputeManagerRealization#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/compute_manager_realization nsxt_compute_manager_realization}
*/
export class DataNsxtComputeManagerRealization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_compute_manager_realization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtComputeManagerRealization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtComputeManagerRealization to import
  * @param importFromId The id of the existing DataNsxtComputeManagerRealization that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/compute_manager_realization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtComputeManagerRealization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_compute_manager_realization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/compute_manager_realization nsxt_compute_manager_realization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtComputeManagerRealizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsxtComputeManagerRealizationConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_compute_manager_realization',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkRegistration = config.checkRegistration;
    this._delay = config.delay;
    this._id = config.id;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_registration - computed: false, optional: true, required: false
  private _checkRegistration?: boolean | cdktf.IResolvable; 
  public get checkRegistration() {
    return this.getBooleanAttribute('check_registration');
  }
  public set checkRegistration(value: boolean | cdktf.IResolvable) {
    this._checkRegistration = value;
  }
  public resetCheckRegistration() {
    this._checkRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRegistrationInput() {
    return this._checkRegistration;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // registration_status - computed: true, optional: false, required: false
  public get registrationStatus() {
    return this.getStringAttribute('registration_status');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_registration: cdktf.booleanToTerraform(this._checkRegistration),
      delay: cdktf.numberToTerraform(this._delay),
      id: cdktf.stringToTerraform(this._id),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_registration: {
        value: cdktf.booleanToHclTerraform(this._checkRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
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
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
