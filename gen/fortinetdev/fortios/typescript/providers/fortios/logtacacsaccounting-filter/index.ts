// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logtacacsaccounting_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogtacacsaccountingFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logtacacsaccounting_filter#cli_cmd_audit LogtacacsaccountingFilter#cli_cmd_audit}
  */
  readonly cliCmdAudit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logtacacsaccounting_filter#config_change_audit LogtacacsaccountingFilter#config_change_audit}
  */
  readonly configChangeAudit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logtacacsaccounting_filter#id LogtacacsaccountingFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logtacacsaccounting_filter#login_audit LogtacacsaccountingFilter#login_audit}
  */
  readonly loginAudit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logtacacsaccounting_filter#vdomparam LogtacacsaccountingFilter#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logtacacsaccounting_filter fortios_logtacacsaccounting_filter}
*/
export class LogtacacsaccountingFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_logtacacsaccounting_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogtacacsaccountingFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogtacacsaccountingFilter to import
  * @param importFromId The id of the existing LogtacacsaccountingFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logtacacsaccounting_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogtacacsaccountingFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_logtacacsaccounting_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logtacacsaccounting_filter fortios_logtacacsaccounting_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogtacacsaccountingFilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogtacacsaccountingFilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_logtacacsaccounting_filter',
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
    this._cliCmdAudit = config.cliCmdAudit;
    this._configChangeAudit = config.configChangeAudit;
    this._id = config.id;
    this._loginAudit = config.loginAudit;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cli_cmd_audit - computed: true, optional: true, required: false
  private _cliCmdAudit?: string; 
  public get cliCmdAudit() {
    return this.getStringAttribute('cli_cmd_audit');
  }
  public set cliCmdAudit(value: string) {
    this._cliCmdAudit = value;
  }
  public resetCliCmdAudit() {
    this._cliCmdAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliCmdAuditInput() {
    return this._cliCmdAudit;
  }

  // config_change_audit - computed: true, optional: true, required: false
  private _configChangeAudit?: string; 
  public get configChangeAudit() {
    return this.getStringAttribute('config_change_audit');
  }
  public set configChangeAudit(value: string) {
    this._configChangeAudit = value;
  }
  public resetConfigChangeAudit() {
    this._configChangeAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configChangeAuditInput() {
    return this._configChangeAudit;
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

  // login_audit - computed: true, optional: true, required: false
  private _loginAudit?: string; 
  public get loginAudit() {
    return this.getStringAttribute('login_audit');
  }
  public set loginAudit(value: string) {
    this._loginAudit = value;
  }
  public resetLoginAudit() {
    this._loginAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAuditInput() {
    return this._loginAudit;
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
      cli_cmd_audit: cdktf.stringToTerraform(this._cliCmdAudit),
      config_change_audit: cdktf.stringToTerraform(this._configChangeAudit),
      id: cdktf.stringToTerraform(this._id),
      login_audit: cdktf.stringToTerraform(this._loginAudit),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cli_cmd_audit: {
        value: cdktf.stringToHclTerraform(this._cliCmdAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_change_audit: {
        value: cdktf.stringToHclTerraform(this._configChangeAudit),
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
      login_audit: {
        value: cdktf.stringToHclTerraform(this._loginAudit),
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
