// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserTacacsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#authen_type UserTacacs#authen_type}
  */
  readonly authenType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#authorization UserTacacs#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#id UserTacacs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#interface UserTacacs#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#interface_select_method UserTacacs#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#key UserTacacs#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#name UserTacacs#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#port UserTacacs#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#secondary_key UserTacacs#secondary_key}
  */
  readonly secondaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#secondary_server UserTacacs#secondary_server}
  */
  readonly secondaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#server UserTacacs#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#source_ip UserTacacs#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#status_ttl UserTacacs#status_ttl}
  */
  readonly statusTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#tertiary_key UserTacacs#tertiary_key}
  */
  readonly tertiaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#tertiary_server UserTacacs#tertiary_server}
  */
  readonly tertiaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#vdomparam UserTacacs#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#vrf_select UserTacacs#vrf_select}
  */
  readonly vrfSelect?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs fortios_user_tacacs}
*/
export class UserTacacs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_tacacs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserTacacs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserTacacs to import
  * @param importFromId The id of the existing UserTacacs that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserTacacs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_tacacs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_tacacs fortios_user_tacacs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserTacacsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserTacacsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_tacacs',
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
    this._authenType = config.authenType;
    this._authorization = config.authorization;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._key = config.key;
    this._name = config.name;
    this._port = config.port;
    this._secondaryKey = config.secondaryKey;
    this._secondaryServer = config.secondaryServer;
    this._server = config.server;
    this._sourceIp = config.sourceIp;
    this._statusTtl = config.statusTtl;
    this._tertiaryKey = config.tertiaryKey;
    this._tertiaryServer = config.tertiaryServer;
    this._vdomparam = config.vdomparam;
    this._vrfSelect = config.vrfSelect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authen_type - computed: true, optional: true, required: false
  private _authenType?: string; 
  public get authenType() {
    return this.getStringAttribute('authen_type');
  }
  public set authenType(value: string) {
    this._authenType = value;
  }
  public resetAuthenType() {
    this._authenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenTypeInput() {
    return this._authenType;
  }

  // authorization - computed: true, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secondary_key - computed: false, optional: true, required: false
  private _secondaryKey?: string; 
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }
  public set secondaryKey(value: string) {
    this._secondaryKey = value;
  }
  public resetSecondaryKey() {
    this._secondaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryKeyInput() {
    return this._secondaryKey;
  }

  // secondary_server - computed: false, optional: true, required: false
  private _secondaryServer?: string; 
  public get secondaryServer() {
    return this.getStringAttribute('secondary_server');
  }
  public set secondaryServer(value: string) {
    this._secondaryServer = value;
  }
  public resetSecondaryServer() {
    this._secondaryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryServerInput() {
    return this._secondaryServer;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // status_ttl - computed: true, optional: true, required: false
  private _statusTtl?: number; 
  public get statusTtl() {
    return this.getNumberAttribute('status_ttl');
  }
  public set statusTtl(value: number) {
    this._statusTtl = value;
  }
  public resetStatusTtl() {
    this._statusTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusTtlInput() {
    return this._statusTtl;
  }

  // tertiary_key - computed: false, optional: true, required: false
  private _tertiaryKey?: string; 
  public get tertiaryKey() {
    return this.getStringAttribute('tertiary_key');
  }
  public set tertiaryKey(value: string) {
    this._tertiaryKey = value;
  }
  public resetTertiaryKey() {
    this._tertiaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryKeyInput() {
    return this._tertiaryKey;
  }

  // tertiary_server - computed: false, optional: true, required: false
  private _tertiaryServer?: string; 
  public get tertiaryServer() {
    return this.getStringAttribute('tertiary_server');
  }
  public set tertiaryServer(value: string) {
    this._tertiaryServer = value;
  }
  public resetTertiaryServer() {
    this._tertiaryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryServerInput() {
    return this._tertiaryServer;
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

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authen_type: cdktf.stringToTerraform(this._authenType),
      authorization: cdktf.stringToTerraform(this._authorization),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      secondary_key: cdktf.stringToTerraform(this._secondaryKey),
      secondary_server: cdktf.stringToTerraform(this._secondaryServer),
      server: cdktf.stringToTerraform(this._server),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      status_ttl: cdktf.numberToTerraform(this._statusTtl),
      tertiary_key: cdktf.stringToTerraform(this._tertiaryKey),
      tertiary_server: cdktf.stringToTerraform(this._tertiaryServer),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authen_type: {
        value: cdktf.stringToHclTerraform(this._authenType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_key: {
        value: cdktf.stringToHclTerraform(this._secondaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_server: {
        value: cdktf.stringToHclTerraform(this._secondaryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_ttl: {
        value: cdktf.numberToHclTerraform(this._statusTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tertiary_key: {
        value: cdktf.stringToHclTerraform(this._tertiaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tertiary_server: {
        value: cdktf.stringToHclTerraform(this._tertiaryServer),
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
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
