// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerSnmpUserAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#auth_proto WirelesscontrollerSnmpUserA#auth_proto}
  */
  readonly authProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#auth_pwd WirelesscontrollerSnmpUserA#auth_pwd}
  */
  readonly authPwd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#device_name WirelesscontrollerSnmpUserA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#device_vdom WirelesscontrollerSnmpUserA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#id WirelesscontrollerSnmpUserA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#name WirelesscontrollerSnmpUserA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#notify_hosts WirelesscontrollerSnmpUserA#notify_hosts}
  */
  readonly notifyHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#priv_proto WirelesscontrollerSnmpUserA#priv_proto}
  */
  readonly privProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#priv_pwd WirelesscontrollerSnmpUserA#priv_pwd}
  */
  readonly privPwd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#queries WirelesscontrollerSnmpUserA#queries}
  */
  readonly queries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#security_level WirelesscontrollerSnmpUserA#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#status WirelesscontrollerSnmpUserA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#trap_status WirelesscontrollerSnmpUserA#trap_status}
  */
  readonly trapStatus?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user fmgdevice_wirelesscontroller_snmp_user}
*/
export class WirelesscontrollerSnmpUserA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_snmp_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerSnmpUserA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerSnmpUserA to import
  * @param importFromId The id of the existing WirelesscontrollerSnmpUserA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerSnmpUserA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_snmp_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_snmp_user fmgdevice_wirelesscontroller_snmp_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerSnmpUserAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerSnmpUserAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_snmp_user',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._name = config.name;
    this._notifyHosts = config.notifyHosts;
    this._privProto = config.privProto;
    this._privPwd = config.privPwd;
    this._queries = config.queries;
    this._securityLevel = config.securityLevel;
    this._status = config.status;
    this._trapStatus = config.trapStatus;
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

  // auth_pwd - computed: true, optional: true, required: false
  private _authPwd?: string[]; 
  public get authPwd() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_pwd'));
  }
  public set authPwd(value: string[]) {
    this._authPwd = value;
  }
  public resetAuthPwd() {
    this._authPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPwdInput() {
    return this._authPwd;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // name - computed: false, optional: true, required: false
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
  private _notifyHosts?: string[]; 
  public get notifyHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_hosts'));
  }
  public set notifyHosts(value: string[]) {
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

  // priv_pwd - computed: true, optional: true, required: false
  private _privPwd?: string[]; 
  public get privPwd() {
    return cdktf.Fn.tolist(this.getListAttribute('priv_pwd'));
  }
  public set privPwd(value: string[]) {
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

  // trap_status - computed: true, optional: true, required: false
  private _trapStatus?: string; 
  public get trapStatus() {
    return this.getStringAttribute('trap_status');
  }
  public set trapStatus(value: string) {
    this._trapStatus = value;
  }
  public resetTrapStatus() {
    this._trapStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapStatusInput() {
    return this._trapStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_proto: cdktf.stringToTerraform(this._authProto),
      auth_pwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authPwd),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyHosts),
      priv_proto: cdktf.stringToTerraform(this._privProto),
      priv_pwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privPwd),
      queries: cdktf.stringToTerraform(this._queries),
      security_level: cdktf.stringToTerraform(this._securityLevel),
      status: cdktf.stringToTerraform(this._status),
      trap_status: cdktf.stringToTerraform(this._trapStatus),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authPwd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifyHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      priv_proto: {
        value: cdktf.stringToHclTerraform(this._privProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priv_pwd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privPwd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      queries: {
        value: cdktf.stringToHclTerraform(this._queries),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_status: {
        value: cdktf.stringToHclTerraform(this._trapStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
