// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StagePasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_password#allow_show_password StagePassword#allow_show_password}
  */
  readonly allowShowPassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_password#backends StagePassword#backends}
  */
  readonly backends: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_password#configure_flow StagePassword#configure_flow}
  */
  readonly configureFlow?: string;
  /**
  * Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_password#failed_attempts_before_cancel StagePassword#failed_attempts_before_cancel}
  */
  readonly failedAttemptsBeforeCancel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_password#id StagePassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_password#name StagePassword#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_password authentik_stage_password}
*/
export class StagePassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StagePassword resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StagePassword to import
  * @param importFromId The id of the existing StagePassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StagePassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_password authentik_stage_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StagePasswordConfig
  */
  public constructor(scope: Construct, id: string, config: StagePasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_password',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowShowPassword = config.allowShowPassword;
    this._backends = config.backends;
    this._configureFlow = config.configureFlow;
    this._failedAttemptsBeforeCancel = config.failedAttemptsBeforeCancel;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_show_password - computed: false, optional: true, required: false
  private _allowShowPassword?: boolean | cdktf.IResolvable; 
  public get allowShowPassword() {
    return this.getBooleanAttribute('allow_show_password');
  }
  public set allowShowPassword(value: boolean | cdktf.IResolvable) {
    this._allowShowPassword = value;
  }
  public resetAllowShowPassword() {
    this._allowShowPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowShowPasswordInput() {
    return this._allowShowPassword;
  }

  // backends - computed: false, optional: false, required: true
  private _backends?: string[]; 
  public get backends() {
    return this.getListAttribute('backends');
  }
  public set backends(value: string[]) {
    this._backends = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends;
  }

  // configure_flow - computed: false, optional: true, required: false
  private _configureFlow?: string; 
  public get configureFlow() {
    return this.getStringAttribute('configure_flow');
  }
  public set configureFlow(value: string) {
    this._configureFlow = value;
  }
  public resetConfigureFlow() {
    this._configureFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureFlowInput() {
    return this._configureFlow;
  }

  // failed_attempts_before_cancel - computed: false, optional: true, required: false
  private _failedAttemptsBeforeCancel?: number; 
  public get failedAttemptsBeforeCancel() {
    return this.getNumberAttribute('failed_attempts_before_cancel');
  }
  public set failedAttemptsBeforeCancel(value: number) {
    this._failedAttemptsBeforeCancel = value;
  }
  public resetFailedAttemptsBeforeCancel() {
    this._failedAttemptsBeforeCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAttemptsBeforeCancelInput() {
    return this._failedAttemptsBeforeCancel;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_show_password: cdktf.booleanToTerraform(this._allowShowPassword),
      backends: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backends),
      configure_flow: cdktf.stringToTerraform(this._configureFlow),
      failed_attempts_before_cancel: cdktf.numberToTerraform(this._failedAttemptsBeforeCancel),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_show_password: {
        value: cdktf.booleanToHclTerraform(this._allowShowPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backends: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backends),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      configure_flow: {
        value: cdktf.stringToHclTerraform(this._configureFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_attempts_before_cancel: {
        value: cdktf.numberToHclTerraform(this._failedAttemptsBeforeCancel),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
