// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpmiUserAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add a new IPMI user (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#add SystemIpmiUserA#add}
  */
  readonly add?: string;
  /**
  * Full control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#administrator SystemIpmiUserA#administrator}
  */
  readonly administrator?: number;
  /**
  * Lowest privilege level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#callback SystemIpmiUserA#callback}
  */
  readonly callback?: number;
  /**
  * Disable an existing IPMI user (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#disable SystemIpmiUserA#disable}
  */
  readonly disable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#id SystemIpmiUserA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * New IPMI User Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#newname SystemIpmiUserA#newname}
  */
  readonly newname?: string;
  /**
  * New Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#newpass SystemIpmiUserA#newpass}
  */
  readonly newpass?: string;
  /**
  * Most BMC commands are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#operator SystemIpmiUserA#operator}
  */
  readonly operator?: number;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#password SystemIpmiUserA#password}
  */
  readonly password?: string;
  /**
  * Change an existing IPMI user privilege (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#privilege SystemIpmiUserA#privilege}
  */
  readonly privilege?: string;
  /**
  * Change User Name (Current IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#setname SystemIpmiUserA#setname}
  */
  readonly setname?: string;
  /**
  * Change Password (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#setpass SystemIpmiUserA#setpass}
  */
  readonly setpass?: string;
  /**
  * Only 'benign' commands are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#user SystemIpmiUserA#user}
  */
  readonly user?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user thunder_system_ipmi_user}
*/
export class SystemIpmiUserA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ipmi_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIpmiUserA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIpmiUserA to import
  * @param importFromId The id of the existing SystemIpmiUserA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIpmiUserA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ipmi_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_user thunder_system_ipmi_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpmiUserAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpmiUserAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ipmi_user',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._add = config.add;
    this._administrator = config.administrator;
    this._callback = config.callback;
    this._disable = config.disable;
    this._id = config.id;
    this._newname = config.newname;
    this._newpass = config.newpass;
    this._operator = config.operator;
    this._password = config.password;
    this._privilege = config.privilege;
    this._setname = config.setname;
    this._setpass = config.setpass;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add - computed: false, optional: true, required: false
  private _add?: string; 
  public get add() {
    return this.getStringAttribute('add');
  }
  public set add(value: string) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // administrator - computed: false, optional: true, required: false
  private _administrator?: number; 
  public get administrator() {
    return this.getNumberAttribute('administrator');
  }
  public set administrator(value: number) {
    this._administrator = value;
  }
  public resetAdministrator() {
    this._administrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorInput() {
    return this._administrator;
  }

  // callback - computed: false, optional: true, required: false
  private _callback?: number; 
  public get callback() {
    return this.getNumberAttribute('callback');
  }
  public set callback(value: number) {
    this._callback = value;
  }
  public resetCallback() {
    this._callback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackInput() {
    return this._callback;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: string; 
  public get disable() {
    return this.getStringAttribute('disable');
  }
  public set disable(value: string) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // newname - computed: false, optional: true, required: false
  private _newname?: string; 
  public get newname() {
    return this.getStringAttribute('newname');
  }
  public set newname(value: string) {
    this._newname = value;
  }
  public resetNewname() {
    this._newname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newnameInput() {
    return this._newname;
  }

  // newpass - computed: false, optional: true, required: false
  private _newpass?: string; 
  public get newpass() {
    return this.getStringAttribute('newpass');
  }
  public set newpass(value: string) {
    this._newpass = value;
  }
  public resetNewpass() {
    this._newpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newpassInput() {
    return this._newpass;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: number; 
  public get operator() {
    return this.getNumberAttribute('operator');
  }
  public set operator(value: number) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // privilege - computed: false, optional: true, required: false
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // setname - computed: false, optional: true, required: false
  private _setname?: string; 
  public get setname() {
    return this.getStringAttribute('setname');
  }
  public set setname(value: string) {
    this._setname = value;
  }
  public resetSetname() {
    this._setname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setnameInput() {
    return this._setname;
  }

  // setpass - computed: false, optional: true, required: false
  private _setpass?: string; 
  public get setpass() {
    return this.getStringAttribute('setpass');
  }
  public set setpass(value: string) {
    this._setpass = value;
  }
  public resetSetpass() {
    this._setpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setpassInput() {
    return this._setpass;
  }

  // user - computed: false, optional: true, required: false
  private _user?: number; 
  public get user() {
    return this.getNumberAttribute('user');
  }
  public set user(value: number) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add: cdktf.stringToTerraform(this._add),
      administrator: cdktf.numberToTerraform(this._administrator),
      callback: cdktf.numberToTerraform(this._callback),
      disable: cdktf.stringToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      newname: cdktf.stringToTerraform(this._newname),
      newpass: cdktf.stringToTerraform(this._newpass),
      operator: cdktf.numberToTerraform(this._operator),
      password: cdktf.stringToTerraform(this._password),
      privilege: cdktf.stringToTerraform(this._privilege),
      setname: cdktf.stringToTerraform(this._setname),
      setpass: cdktf.stringToTerraform(this._setpass),
      user: cdktf.numberToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add: {
        value: cdktf.stringToHclTerraform(this._add),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      administrator: {
        value: cdktf.numberToHclTerraform(this._administrator),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      callback: {
        value: cdktf.numberToHclTerraform(this._callback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.stringToHclTerraform(this._disable),
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
      newname: {
        value: cdktf.stringToHclTerraform(this._newname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      newpass: {
        value: cdktf.stringToHclTerraform(this._newpass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operator: {
        value: cdktf.numberToHclTerraform(this._operator),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privilege: {
        value: cdktf.stringToHclTerraform(this._privilege),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setname: {
        value: cdktf.stringToHclTerraform(this._setname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setpass: {
        value: cdktf.stringToHclTerraform(this._setpass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.numberToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
