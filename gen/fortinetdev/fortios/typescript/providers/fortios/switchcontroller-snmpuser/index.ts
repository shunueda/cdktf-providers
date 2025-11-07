// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerSnmpuserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#auth_proto SwitchcontrollerSnmpuser#auth_proto}
  */
  readonly authProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#auth_pwd SwitchcontrollerSnmpuser#auth_pwd}
  */
  readonly authPwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#id SwitchcontrollerSnmpuser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#name SwitchcontrollerSnmpuser#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#priv_proto SwitchcontrollerSnmpuser#priv_proto}
  */
  readonly privProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#priv_pwd SwitchcontrollerSnmpuser#priv_pwd}
  */
  readonly privPwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#queries SwitchcontrollerSnmpuser#queries}
  */
  readonly queries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#query_port SwitchcontrollerSnmpuser#query_port}
  */
  readonly queryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#security_level SwitchcontrollerSnmpuser#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#vdomparam SwitchcontrollerSnmpuser#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser fortios_switchcontroller_snmpuser}
*/
export class SwitchcontrollerSnmpuser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_snmpuser";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerSnmpuser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerSnmpuser to import
  * @param importFromId The id of the existing SwitchcontrollerSnmpuser that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerSnmpuser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_snmpuser", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmpuser fortios_switchcontroller_snmpuser} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerSnmpuserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerSnmpuserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_snmpuser',
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
    this._authProto = config.authProto;
    this._authPwd = config.authPwd;
    this._id = config.id;
    this._name = config.name;
    this._privProto = config.privProto;
    this._privPwd = config.privPwd;
    this._queries = config.queries;
    this._queryPort = config.queryPort;
    this._securityLevel = config.securityLevel;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_proto - computed: true, optional: true, required: false
  private _authProto?: string; 
  public get authProto() {
    return this.getStringAttribute('auth_proto');
  }
  public set authProto(value: string) {
    this._authProto = value;
  }
  public resetAuthProto() {
    this._authProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtoInput() {
    return this._authProto;
  }

  // auth_pwd - computed: false, optional: true, required: false
  private _authPwd?: string; 
  public get authPwd() {
    return this.getStringAttribute('auth_pwd');
  }
  public set authPwd(value: string) {
    this._authPwd = value;
  }
  public resetAuthPwd() {
    this._authPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPwdInput() {
    return this._authPwd;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priv_proto - computed: true, optional: true, required: false
  private _privProto?: string; 
  public get privProto() {
    return this.getStringAttribute('priv_proto');
  }
  public set privProto(value: string) {
    this._privProto = value;
  }
  public resetPrivProto() {
    this._privProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privProtoInput() {
    return this._privProto;
  }

  // priv_pwd - computed: false, optional: true, required: false
  private _privPwd?: string; 
  public get privPwd() {
    return this.getStringAttribute('priv_pwd');
  }
  public set privPwd(value: string) {
    this._privPwd = value;
  }
  public resetPrivPwd() {
    this._privPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privPwdInput() {
    return this._privPwd;
  }

  // queries - computed: true, optional: true, required: false
  private _queries?: string; 
  public get queries() {
    return this.getStringAttribute('queries');
  }
  public set queries(value: string) {
    this._queries = value;
  }
  public resetQueries() {
    this._queries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }

  // query_port - computed: true, optional: true, required: false
  private _queryPort?: number; 
  public get queryPort() {
    return this.getNumberAttribute('query_port');
  }
  public set queryPort(value: number) {
    this._queryPort = value;
  }
  public resetQueryPort() {
    this._queryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPortInput() {
    return this._queryPort;
  }

  // security_level - computed: true, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
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
      auth_proto: cdktf.stringToTerraform(this._authProto),
      auth_pwd: cdktf.stringToTerraform(this._authPwd),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priv_proto: cdktf.stringToTerraform(this._privProto),
      priv_pwd: cdktf.stringToTerraform(this._privPwd),
      queries: cdktf.stringToTerraform(this._queries),
      query_port: cdktf.numberToTerraform(this._queryPort),
      security_level: cdktf.stringToTerraform(this._securityLevel),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_proto: {
        value: cdktf.stringToHclTerraform(this._authProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_pwd: {
        value: cdktf.stringToHclTerraform(this._authPwd),
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
      priv_proto: {
        value: cdktf.stringToHclTerraform(this._privProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priv_pwd: {
        value: cdktf.stringToHclTerraform(this._privPwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queries: {
        value: cdktf.stringToHclTerraform(this._queries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_port: {
        value: cdktf.numberToHclTerraform(this._queryPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_level: {
        value: cdktf.stringToHclTerraform(this._securityLevel),
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
