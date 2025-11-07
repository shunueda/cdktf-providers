// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbTemplateSnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify authentication key (Specify key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#auth_key GslbTemplateSnmp#auth_key}
  */
  readonly authKey?: string;
  /**
  * 'sha': SHA; 'md5': MD5;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#auth_proto GslbTemplateSnmp#auth_proto}
  */
  readonly authProto?: string;
  /**
  * Specify community for version 2c (Community name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#community GslbTemplateSnmp#community}
  */
  readonly community?: string;
  /**
  * Specify context engine ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#context_engine_id GslbTemplateSnmp#context_engine_id}
  */
  readonly contextEngineId?: string;
  /**
  * Specify context name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#context_name GslbTemplateSnmp#context_name}
  */
  readonly contextName?: string;
  /**
  * Specify host (Host name or ip address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#host GslbTemplateSnmp#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#id GslbTemplateSnmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify Interface ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#interface GslbTemplateSnmp#interface}
  */
  readonly interface?: number;
  /**
  * Specify interval, default is 3 (Interval, unit: second, default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#interval GslbTemplateSnmp#interval}
  */
  readonly interval?: number;
  /**
  * Specify OID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#oid GslbTemplateSnmp#oid}
  */
  readonly oid?: string;
  /**
  * Specify port, default is 161 (Port Number, default is 161)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#port GslbTemplateSnmp#port}
  */
  readonly port?: number;
  /**
  * Specify privacy key (Specify key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#priv_key GslbTemplateSnmp#priv_key}
  */
  readonly privKey?: string;
  /**
  * 'aes': AES; 'des': DES;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#priv_proto GslbTemplateSnmp#priv_proto}
  */
  readonly privProto?: string;
  /**
  * Specify security engine ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#security_engine_id GslbTemplateSnmp#security_engine_id}
  */
  readonly securityEngineId?: string;
  /**
  * 'no-auth': No authentication; 'auth-no-priv': Authentication, but no privacy; 'auth-priv': Authentication and privacy;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#security_level GslbTemplateSnmp#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Specify name of snmp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#snmp_name GslbTemplateSnmp#snmp_name}
  */
  readonly snmpName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#user_tag GslbTemplateSnmp#user_tag}
  */
  readonly userTag?: string;
  /**
  * Specify username (User name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#username GslbTemplateSnmp#username}
  */
  readonly username?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#uuid GslbTemplateSnmp#uuid}
  */
  readonly uuid?: string;
  /**
  * 'v1': Version 1; 'v2c': Version 2c; 'v3': Version 3;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#version GslbTemplateSnmp#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp thunder_gslb_template_snmp}
*/
export class GslbTemplateSnmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_template_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbTemplateSnmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbTemplateSnmp to import
  * @param importFromId The id of the existing GslbTemplateSnmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbTemplateSnmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_template_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_template_snmp thunder_gslb_template_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbTemplateSnmpConfig
  */
  public constructor(scope: Construct, id: string, config: GslbTemplateSnmpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_template_snmp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authKey = config.authKey;
    this._authProto = config.authProto;
    this._community = config.community;
    this._contextEngineId = config.contextEngineId;
    this._contextName = config.contextName;
    this._host = config.host;
    this._id = config.id;
    this._interface = config.interface;
    this._interval = config.interval;
    this._oid = config.oid;
    this._port = config.port;
    this._privKey = config.privKey;
    this._privProto = config.privProto;
    this._securityEngineId = config.securityEngineId;
    this._securityLevel = config.securityLevel;
    this._snmpName = config.snmpName;
    this._userTag = config.userTag;
    this._username = config.username;
    this._uuid = config.uuid;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // auth_proto - computed: false, optional: true, required: false
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

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // context_engine_id - computed: false, optional: true, required: false
  private _contextEngineId?: string; 
  public get contextEngineId() {
    return this.getStringAttribute('context_engine_id');
  }
  public set contextEngineId(value: string) {
    this._contextEngineId = value;
  }
  public resetContextEngineId() {
    this._contextEngineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextEngineIdInput() {
    return this._contextEngineId;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
  private _interface?: number; 
  public get interface() {
    return this.getNumberAttribute('interface');
  }
  public set interface(value: number) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // oid - computed: false, optional: true, required: false
  private _oid?: string; 
  public get oid() {
    return this.getStringAttribute('oid');
  }
  public set oid(value: string) {
    this._oid = value;
  }
  public resetOid() {
    this._oid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid;
  }

  // port - computed: false, optional: true, required: false
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

  // priv_key - computed: false, optional: true, required: false
  private _privKey?: string; 
  public get privKey() {
    return this.getStringAttribute('priv_key');
  }
  public set privKey(value: string) {
    this._privKey = value;
  }
  public resetPrivKey() {
    this._privKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privKeyInput() {
    return this._privKey;
  }

  // priv_proto - computed: false, optional: true, required: false
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

  // security_engine_id - computed: false, optional: true, required: false
  private _securityEngineId?: string; 
  public get securityEngineId() {
    return this.getStringAttribute('security_engine_id');
  }
  public set securityEngineId(value: string) {
    this._securityEngineId = value;
  }
  public resetSecurityEngineId() {
    this._securityEngineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEngineIdInput() {
    return this._securityEngineId;
  }

  // security_level - computed: false, optional: true, required: false
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

  // snmp_name - computed: false, optional: false, required: true
  private _snmpName?: string; 
  public get snmpName() {
    return this.getStringAttribute('snmp_name');
  }
  public set snmpName(value: string) {
    this._snmpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpNameInput() {
    return this._snmpName;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_key: cdktf.stringToTerraform(this._authKey),
      auth_proto: cdktf.stringToTerraform(this._authProto),
      community: cdktf.stringToTerraform(this._community),
      context_engine_id: cdktf.stringToTerraform(this._contextEngineId),
      context_name: cdktf.stringToTerraform(this._contextName),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.numberToTerraform(this._interface),
      interval: cdktf.numberToTerraform(this._interval),
      oid: cdktf.stringToTerraform(this._oid),
      port: cdktf.numberToTerraform(this._port),
      priv_key: cdktf.stringToTerraform(this._privKey),
      priv_proto: cdktf.stringToTerraform(this._privProto),
      security_engine_id: cdktf.stringToTerraform(this._securityEngineId),
      security_level: cdktf.stringToTerraform(this._securityLevel),
      snmp_name: cdktf.stringToTerraform(this._snmpName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      username: cdktf.stringToTerraform(this._username),
      uuid: cdktf.stringToTerraform(this._uuid),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_proto: {
        value: cdktf.stringToHclTerraform(this._authProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      community: {
        value: cdktf.stringToHclTerraform(this._community),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_engine_id: {
        value: cdktf.stringToHclTerraform(this._contextEngineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_name: {
        value: cdktf.stringToHclTerraform(this._contextName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
        value: cdktf.numberToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oid: {
        value: cdktf.stringToHclTerraform(this._oid),
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
      priv_key: {
        value: cdktf.stringToHclTerraform(this._privKey),
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
      security_engine_id: {
        value: cdktf.stringToHclTerraform(this._securityEngineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_level: {
        value: cdktf.stringToHclTerraform(this._securityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_name: {
        value: cdktf.stringToHclTerraform(this._snmpName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
