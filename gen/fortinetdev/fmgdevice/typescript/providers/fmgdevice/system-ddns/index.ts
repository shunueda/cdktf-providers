// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDdnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#addr_type SystemDdns#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#bound_ip SystemDdns#bound_ip}
  */
  readonly boundIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#clear_text SystemDdns#clear_text}
  */
  readonly clearText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_auth SystemDdns#ddns_auth}
  */
  readonly ddnsAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_domain SystemDdns#ddns_domain}
  */
  readonly ddnsDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_key SystemDdns#ddns_key}
  */
  readonly ddnsKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_keyname SystemDdns#ddns_keyname}
  */
  readonly ddnsKeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_password SystemDdns#ddns_password}
  */
  readonly ddnsPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_server SystemDdns#ddns_server}
  */
  readonly ddnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_server_addr SystemDdns#ddns_server_addr}
  */
  readonly ddnsServerAddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_server_ip SystemDdns#ddns_server_ip}
  */
  readonly ddnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_sn SystemDdns#ddns_sn}
  */
  readonly ddnsSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_ttl SystemDdns#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_username SystemDdns#ddns_username}
  */
  readonly ddnsUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddns_zone SystemDdns#ddns_zone}
  */
  readonly ddnsZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ddnsid SystemDdns#ddnsid}
  */
  readonly ddnsid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#device_name SystemDdns#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#id SystemDdns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#monitor_interface SystemDdns#monitor_interface}
  */
  readonly monitorInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#server_type SystemDdns#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#ssl_certificate SystemDdns#ssl_certificate}
  */
  readonly sslCertificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#update_interval SystemDdns#update_interval}
  */
  readonly updateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#use_public_ip SystemDdns#use_public_ip}
  */
  readonly usePublicIp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns fmgdevice_system_ddns}
*/
export class SystemDdns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_ddns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDdns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDdns to import
  * @param importFromId The id of the existing SystemDdns that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDdns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_ddns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ddns fmgdevice_system_ddns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDdnsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDdnsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_ddns',
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
    this._addrType = config.addrType;
    this._boundIp = config.boundIp;
    this._clearText = config.clearText;
    this._ddnsAuth = config.ddnsAuth;
    this._ddnsDomain = config.ddnsDomain;
    this._ddnsKey = config.ddnsKey;
    this._ddnsKeyname = config.ddnsKeyname;
    this._ddnsPassword = config.ddnsPassword;
    this._ddnsServer = config.ddnsServer;
    this._ddnsServerAddr = config.ddnsServerAddr;
    this._ddnsServerIp = config.ddnsServerIp;
    this._ddnsSn = config.ddnsSn;
    this._ddnsTtl = config.ddnsTtl;
    this._ddnsUsername = config.ddnsUsername;
    this._ddnsZone = config.ddnsZone;
    this._ddnsid = config.ddnsid;
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._monitorInterface = config.monitorInterface;
    this._serverType = config.serverType;
    this._sslCertificate = config.sslCertificate;
    this._updateInterval = config.updateInterval;
    this._usePublicIp = config.usePublicIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // bound_ip - computed: false, optional: true, required: false
  private _boundIp?: string; 
  public get boundIp() {
    return this.getStringAttribute('bound_ip');
  }
  public set boundIp(value: string) {
    this._boundIp = value;
  }
  public resetBoundIp() {
    this._boundIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIpInput() {
    return this._boundIp;
  }

  // clear_text - computed: true, optional: true, required: false
  private _clearText?: string; 
  public get clearText() {
    return this.getStringAttribute('clear_text');
  }
  public set clearText(value: string) {
    this._clearText = value;
  }
  public resetClearText() {
    this._clearText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearTextInput() {
    return this._clearText;
  }

  // ddns_auth - computed: true, optional: true, required: false
  private _ddnsAuth?: string; 
  public get ddnsAuth() {
    return this.getStringAttribute('ddns_auth');
  }
  public set ddnsAuth(value: string) {
    this._ddnsAuth = value;
  }
  public resetDdnsAuth() {
    this._ddnsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsAuthInput() {
    return this._ddnsAuth;
  }

  // ddns_domain - computed: false, optional: true, required: false
  private _ddnsDomain?: string; 
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }
  public set ddnsDomain(value: string) {
    this._ddnsDomain = value;
  }
  public resetDdnsDomain() {
    this._ddnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainInput() {
    return this._ddnsDomain;
  }

  // ddns_key - computed: true, optional: true, required: false
  private _ddnsKey?: string[]; 
  public get ddnsKey() {
    return cdktf.Fn.tolist(this.getListAttribute('ddns_key'));
  }
  public set ddnsKey(value: string[]) {
    this._ddnsKey = value;
  }
  public resetDdnsKey() {
    this._ddnsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeyInput() {
    return this._ddnsKey;
  }

  // ddns_keyname - computed: false, optional: true, required: false
  private _ddnsKeyname?: string; 
  public get ddnsKeyname() {
    return this.getStringAttribute('ddns_keyname');
  }
  public set ddnsKeyname(value: string) {
    this._ddnsKeyname = value;
  }
  public resetDdnsKeyname() {
    this._ddnsKeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeynameInput() {
    return this._ddnsKeyname;
  }

  // ddns_password - computed: true, optional: true, required: false
  private _ddnsPassword?: string[]; 
  public get ddnsPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('ddns_password'));
  }
  public set ddnsPassword(value: string[]) {
    this._ddnsPassword = value;
  }
  public resetDdnsPassword() {
    this._ddnsPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsPasswordInput() {
    return this._ddnsPassword;
  }

  // ddns_server - computed: false, optional: true, required: false
  private _ddnsServer?: string; 
  public get ddnsServer() {
    return this.getStringAttribute('ddns_server');
  }
  public set ddnsServer(value: string) {
    this._ddnsServer = value;
  }
  public resetDdnsServer() {
    this._ddnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerInput() {
    return this._ddnsServer;
  }

  // ddns_server_addr - computed: true, optional: true, required: false
  private _ddnsServerAddr?: string[]; 
  public get ddnsServerAddr() {
    return cdktf.Fn.tolist(this.getListAttribute('ddns_server_addr'));
  }
  public set ddnsServerAddr(value: string[]) {
    this._ddnsServerAddr = value;
  }
  public resetDdnsServerAddr() {
    this._ddnsServerAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerAddrInput() {
    return this._ddnsServerAddr;
  }

  // ddns_server_ip - computed: false, optional: true, required: false
  private _ddnsServerIp?: string; 
  public get ddnsServerIp() {
    return this.getStringAttribute('ddns_server_ip');
  }
  public set ddnsServerIp(value: string) {
    this._ddnsServerIp = value;
  }
  public resetDdnsServerIp() {
    this._ddnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerIpInput() {
    return this._ddnsServerIp;
  }

  // ddns_sn - computed: false, optional: true, required: false
  private _ddnsSn?: string; 
  public get ddnsSn() {
    return this.getStringAttribute('ddns_sn');
  }
  public set ddnsSn(value: string) {
    this._ddnsSn = value;
  }
  public resetDdnsSn() {
    this._ddnsSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsSnInput() {
    return this._ddnsSn;
  }

  // ddns_ttl - computed: true, optional: true, required: false
  private _ddnsTtl?: number; 
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }
  public set ddnsTtl(value: number) {
    this._ddnsTtl = value;
  }
  public resetDdnsTtl() {
    this._ddnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlInput() {
    return this._ddnsTtl;
  }

  // ddns_username - computed: false, optional: true, required: false
  private _ddnsUsername?: string; 
  public get ddnsUsername() {
    return this.getStringAttribute('ddns_username');
  }
  public set ddnsUsername(value: string) {
    this._ddnsUsername = value;
  }
  public resetDdnsUsername() {
    this._ddnsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUsernameInput() {
    return this._ddnsUsername;
  }

  // ddns_zone - computed: false, optional: true, required: false
  private _ddnsZone?: string; 
  public get ddnsZone() {
    return this.getStringAttribute('ddns_zone');
  }
  public set ddnsZone(value: string) {
    this._ddnsZone = value;
  }
  public resetDdnsZone() {
    this._ddnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsZoneInput() {
    return this._ddnsZone;
  }

  // ddnsid - computed: false, optional: true, required: false
  private _ddnsid?: number; 
  public get ddnsid() {
    return this.getNumberAttribute('ddnsid');
  }
  public set ddnsid(value: number) {
    this._ddnsid = value;
  }
  public resetDdnsid() {
    this._ddnsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsidInput() {
    return this._ddnsid;
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

  // monitor_interface - computed: true, optional: true, required: false
  private _monitorInterface?: string[]; 
  public get monitorInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_interface'));
  }
  public set monitorInterface(value: string[]) {
    this._monitorInterface = value;
  }
  public resetMonitorInterface() {
    this._monitorInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInterfaceInput() {
    return this._monitorInterface;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // ssl_certificate - computed: true, optional: true, required: false
  private _sslCertificate?: string[]; 
  public get sslCertificate() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_certificate'));
  }
  public set sslCertificate(value: string[]) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // use_public_ip - computed: true, optional: true, required: false
  private _usePublicIp?: string; 
  public get usePublicIp() {
    return this.getStringAttribute('use_public_ip');
  }
  public set usePublicIp(value: string) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_type: cdktf.stringToTerraform(this._addrType),
      bound_ip: cdktf.stringToTerraform(this._boundIp),
      clear_text: cdktf.stringToTerraform(this._clearText),
      ddns_auth: cdktf.stringToTerraform(this._ddnsAuth),
      ddns_domain: cdktf.stringToTerraform(this._ddnsDomain),
      ddns_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ddnsKey),
      ddns_keyname: cdktf.stringToTerraform(this._ddnsKeyname),
      ddns_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ddnsPassword),
      ddns_server: cdktf.stringToTerraform(this._ddnsServer),
      ddns_server_addr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ddnsServerAddr),
      ddns_server_ip: cdktf.stringToTerraform(this._ddnsServerIp),
      ddns_sn: cdktf.stringToTerraform(this._ddnsSn),
      ddns_ttl: cdktf.numberToTerraform(this._ddnsTtl),
      ddns_username: cdktf.stringToTerraform(this._ddnsUsername),
      ddns_zone: cdktf.stringToTerraform(this._ddnsZone),
      ddnsid: cdktf.numberToTerraform(this._ddnsid),
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      monitor_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorInterface),
      server_type: cdktf.stringToTerraform(this._serverType),
      ssl_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslCertificate),
      update_interval: cdktf.numberToTerraform(this._updateInterval),
      use_public_ip: cdktf.stringToTerraform(this._usePublicIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_type: {
        value: cdktf.stringToHclTerraform(this._addrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bound_ip: {
        value: cdktf.stringToHclTerraform(this._boundIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_text: {
        value: cdktf.stringToHclTerraform(this._clearText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_auth: {
        value: cdktf.stringToHclTerraform(this._ddnsAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_domain: {
        value: cdktf.stringToHclTerraform(this._ddnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ddnsKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ddns_keyname: {
        value: cdktf.stringToHclTerraform(this._ddnsKeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ddnsPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ddns_server: {
        value: cdktf.stringToHclTerraform(this._ddnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_server_addr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ddnsServerAddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ddns_server_ip: {
        value: cdktf.stringToHclTerraform(this._ddnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_sn: {
        value: cdktf.stringToHclTerraform(this._ddnsSn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_ttl: {
        value: cdktf.numberToHclTerraform(this._ddnsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddns_username: {
        value: cdktf.stringToHclTerraform(this._ddnsUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_zone: {
        value: cdktf.stringToHclTerraform(this._ddnsZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddnsid: {
        value: cdktf.numberToHclTerraform(this._ddnsid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      monitor_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslCertificate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      update_interval: {
        value: cdktf.numberToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_public_ip: {
        value: cdktf.stringToHclTerraform(this._usePublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
