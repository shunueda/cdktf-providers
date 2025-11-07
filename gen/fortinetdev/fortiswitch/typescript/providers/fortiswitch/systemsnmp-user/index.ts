// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemsnmpUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#auth_proto SystemsnmpUser#auth_proto}
  */
  readonly authProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#auth_pwd SystemsnmpUser#auth_pwd}
  */
  readonly authPwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#events SystemsnmpUser#events}
  */
  readonly events?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#id SystemsnmpUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#name SystemsnmpUser#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#notify_hosts SystemsnmpUser#notify_hosts}
  */
  readonly notifyHosts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#priv_proto SystemsnmpUser#priv_proto}
  */
  readonly privProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#priv_pwd SystemsnmpUser#priv_pwd}
  */
  readonly privPwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#queries SystemsnmpUser#queries}
  */
  readonly queries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#query_port SystemsnmpUser#query_port}
  */
  readonly queryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#security_level SystemsnmpUser#security_level}
  */
  readonly securityLevel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user fortiswitch_systemsnmp_user}
*/
export class SystemsnmpUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_systemsnmp_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemsnmpUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemsnmpUser to import
  * @param importFromId The id of the existing SystemsnmpUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemsnmpUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_systemsnmp_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemsnmp_user fortiswitch_systemsnmp_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemsnmpUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemsnmpUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_systemsnmp_user',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
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
    this._events = config.events;
    this._id = config.id;
    this._name = config.name;
    this._notifyHosts = config.notifyHosts;
    this._privProto = config.privProto;
    this._privPwd = config.privPwd;
    this._queries = config.queries;
    this._queryPort = config.queryPort;
    this._securityLevel = config.securityLevel;
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

  // events - computed: true, optional: true, required: false
  private _events?: string; 
  public get events() {
    return this.getStringAttribute('events');
  }
  public set events(value: string) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
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

  // notify_hosts - computed: true, optional: true, required: false
  private _notifyHosts?: string; 
  public get notifyHosts() {
    return this.getStringAttribute('notify_hosts');
  }
  public set notifyHosts(value: string) {
    this._notifyHosts = value;
  }
  public resetNotifyHosts() {
    this._notifyHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyHostsInput() {
    return this._notifyHosts;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_proto: cdktf.stringToTerraform(this._authProto),
      auth_pwd: cdktf.stringToTerraform(this._authPwd),
      events: cdktf.stringToTerraform(this._events),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify_hosts: cdktf.stringToTerraform(this._notifyHosts),
      priv_proto: cdktf.stringToTerraform(this._privProto),
      priv_pwd: cdktf.stringToTerraform(this._privPwd),
      queries: cdktf.stringToTerraform(this._queries),
      query_port: cdktf.numberToTerraform(this._queryPort),
      security_level: cdktf.stringToTerraform(this._securityLevel),
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
      events: {
        value: cdktf.stringToHclTerraform(this._events),
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
      notify_hosts: {
        value: cdktf.stringToHclTerraform(this._notifyHosts),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
