// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Profile Name, This is one of the already created Citrix SD-WAN profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#cb_profile_name DeviceProfile#cb_profile_name}
  */
  readonly cbProfileName?: string;
  /**
  * Host Password for this profile.Used for BLX form factor of ADC. Minimum length =  1 Maximum length =  127
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#host_password DeviceProfile#host_password}
  */
  readonly hostPassword?: string;
  /**
  * Host User Name for this profile.Used for BLX form factor of ADC. Minimum length =  1 Maximum length =  127
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#host_username DeviceProfile#host_username}
  */
  readonly hostUsername?: string;
  /**
  * HTTP port to connect to the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#http_port DeviceProfile#http_port}
  */
  readonly httpPort?: number;
  /**
  * HTTPS port to connect to the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#https_port DeviceProfile#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#id DeviceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max waiting time to reboot Citrix ADC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#max_wait_time_reboot DeviceProfile#max_wait_time_reboot}
  */
  readonly maxWaitTimeReboot?: string;
  /**
  * Profile Name. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#name DeviceProfile#name}
  */
  readonly name: string;
  /**
  * Profile Name, This is one of the already created Citrix ADC profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#ns_profile_name DeviceProfile#ns_profile_name}
  */
  readonly nsProfileName?: string;
  /**
  * Passphrase with which private key is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#passphrase DeviceProfile#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Instance credentials.Password for this profile. Minimum length =  1 Maximum length =  127
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#password DeviceProfile#password}
  */
  readonly password: string;
  /**
  * SNMP v3 auth password for this profile. Minimum length =  8 Maximum length =  31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#snmpauthpassword DeviceProfile#snmpauthpassword}
  */
  readonly snmpauthpassword?: string;
  /**
  * SNMP v3 auth protocol for this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#snmpauthprotocol DeviceProfile#snmpauthprotocol}
  */
  readonly snmpauthprotocol?: string;
  /**
  * SNMP community for this profile. Maximum length =  31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#snmpcommunity DeviceProfile#snmpcommunity}
  */
  readonly snmpcommunity?: string;
  /**
  * SNMP v3 priv password for this profile. Minimum length =  8 Maximum length =  31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#snmpprivpassword DeviceProfile#snmpprivpassword}
  */
  readonly snmpprivpassword?: string;
  /**
  * SNMP v3 priv protocol for this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#snmpprivprotocol DeviceProfile#snmpprivprotocol}
  */
  readonly snmpprivprotocol?: string;
  /**
  * SNMP v3 security level for this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#snmpsecuritylevel DeviceProfile#snmpsecuritylevel}
  */
  readonly snmpsecuritylevel?: string;
  /**
  * SNMP v3 security name for this profile. Maximum length =  31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#snmpsecurityname DeviceProfile#snmpsecurityname}
  */
  readonly snmpsecurityname?: string;
  /**
  * SNMP version for this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#snmpversion DeviceProfile#snmpversion}
  */
  readonly snmpversion?: string;
  /**
  * SSH port to connect to the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#ssh_port DeviceProfile#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * SSL Certificate for certificate based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#ssl_cert DeviceProfile#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * SSL Private Key for key based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#ssl_private_key DeviceProfile#ssl_private_key}
  */
  readonly sslPrivateKey?: string;
  /**
  * Communication protocol (http or https) with Instances. Minimum length =  1 Maximum length =  10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#svm_ns_comm DeviceProfile#svm_ns_comm}
  */
  readonly svmNsComm?: string;
  /**
  * Profile Type, This must be with in specified supported instance types: blx,sdvanvw,ns,nssdx,cbwanopt,cpx. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#type DeviceProfile#type}
  */
  readonly type?: string;
  /**
  * True, if the communication with Instance needs to be global and not device specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#use_global_setting_for_communication_with_ns DeviceProfile#use_global_setting_for_communication_with_ns}
  */
  readonly useGlobalSettingForCommunicationWithNs?: boolean | cdktf.IResolvable;
  /**
  * Instance credentials.Username provided in the profile will be used to contact the instance. Minimum length =  1 Maximum length =  127
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#username DeviceProfile#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile netscalersdx_device_profile}
*/
export class DeviceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_device_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceProfile to import
  * @param importFromId The id of the existing DeviceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_device_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_profile netscalersdx_device_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_device_profile',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cbProfileName = config.cbProfileName;
    this._hostPassword = config.hostPassword;
    this._hostUsername = config.hostUsername;
    this._httpPort = config.httpPort;
    this._httpsPort = config.httpsPort;
    this._id = config.id;
    this._maxWaitTimeReboot = config.maxWaitTimeReboot;
    this._name = config.name;
    this._nsProfileName = config.nsProfileName;
    this._passphrase = config.passphrase;
    this._password = config.password;
    this._snmpauthpassword = config.snmpauthpassword;
    this._snmpauthprotocol = config.snmpauthprotocol;
    this._snmpcommunity = config.snmpcommunity;
    this._snmpprivpassword = config.snmpprivpassword;
    this._snmpprivprotocol = config.snmpprivprotocol;
    this._snmpsecuritylevel = config.snmpsecuritylevel;
    this._snmpsecurityname = config.snmpsecurityname;
    this._snmpversion = config.snmpversion;
    this._sshPort = config.sshPort;
    this._sslCert = config.sslCert;
    this._sslPrivateKey = config.sslPrivateKey;
    this._svmNsComm = config.svmNsComm;
    this._type = config.type;
    this._useGlobalSettingForCommunicationWithNs = config.useGlobalSettingForCommunicationWithNs;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cb_profile_name - computed: false, optional: true, required: false
  private _cbProfileName?: string; 
  public get cbProfileName() {
    return this.getStringAttribute('cb_profile_name');
  }
  public set cbProfileName(value: string) {
    this._cbProfileName = value;
  }
  public resetCbProfileName() {
    this._cbProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbProfileNameInput() {
    return this._cbProfileName;
  }

  // host_password - computed: false, optional: true, required: false
  private _hostPassword?: string; 
  public get hostPassword() {
    return this.getStringAttribute('host_password');
  }
  public set hostPassword(value: string) {
    this._hostPassword = value;
  }
  public resetHostPassword() {
    this._hostPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPasswordInput() {
    return this._hostPassword;
  }

  // host_username - computed: false, optional: true, required: false
  private _hostUsername?: string; 
  public get hostUsername() {
    return this.getStringAttribute('host_username');
  }
  public set hostUsername(value: string) {
    this._hostUsername = value;
  }
  public resetHostUsername() {
    this._hostUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUsernameInput() {
    return this._hostUsername;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
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

  // max_wait_time_reboot - computed: false, optional: true, required: false
  private _maxWaitTimeReboot?: string; 
  public get maxWaitTimeReboot() {
    return this.getStringAttribute('max_wait_time_reboot');
  }
  public set maxWaitTimeReboot(value: string) {
    this._maxWaitTimeReboot = value;
  }
  public resetMaxWaitTimeReboot() {
    this._maxWaitTimeReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeRebootInput() {
    return this._maxWaitTimeReboot;
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

  // ns_profile_name - computed: false, optional: true, required: false
  private _nsProfileName?: string; 
  public get nsProfileName() {
    return this.getStringAttribute('ns_profile_name');
  }
  public set nsProfileName(value: string) {
    this._nsProfileName = value;
  }
  public resetNsProfileName() {
    this._nsProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsProfileNameInput() {
    return this._nsProfileName;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // snmpauthpassword - computed: false, optional: true, required: false
  private _snmpauthpassword?: string; 
  public get snmpauthpassword() {
    return this.getStringAttribute('snmpauthpassword');
  }
  public set snmpauthpassword(value: string) {
    this._snmpauthpassword = value;
  }
  public resetSnmpauthpassword() {
    this._snmpauthpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpauthpasswordInput() {
    return this._snmpauthpassword;
  }

  // snmpauthprotocol - computed: false, optional: true, required: false
  private _snmpauthprotocol?: string; 
  public get snmpauthprotocol() {
    return this.getStringAttribute('snmpauthprotocol');
  }
  public set snmpauthprotocol(value: string) {
    this._snmpauthprotocol = value;
  }
  public resetSnmpauthprotocol() {
    this._snmpauthprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpauthprotocolInput() {
    return this._snmpauthprotocol;
  }

  // snmpcommunity - computed: false, optional: true, required: false
  private _snmpcommunity?: string; 
  public get snmpcommunity() {
    return this.getStringAttribute('snmpcommunity');
  }
  public set snmpcommunity(value: string) {
    this._snmpcommunity = value;
  }
  public resetSnmpcommunity() {
    this._snmpcommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpcommunityInput() {
    return this._snmpcommunity;
  }

  // snmpprivpassword - computed: false, optional: true, required: false
  private _snmpprivpassword?: string; 
  public get snmpprivpassword() {
    return this.getStringAttribute('snmpprivpassword');
  }
  public set snmpprivpassword(value: string) {
    this._snmpprivpassword = value;
  }
  public resetSnmpprivpassword() {
    this._snmpprivpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpprivpasswordInput() {
    return this._snmpprivpassword;
  }

  // snmpprivprotocol - computed: false, optional: true, required: false
  private _snmpprivprotocol?: string; 
  public get snmpprivprotocol() {
    return this.getStringAttribute('snmpprivprotocol');
  }
  public set snmpprivprotocol(value: string) {
    this._snmpprivprotocol = value;
  }
  public resetSnmpprivprotocol() {
    this._snmpprivprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpprivprotocolInput() {
    return this._snmpprivprotocol;
  }

  // snmpsecuritylevel - computed: false, optional: true, required: false
  private _snmpsecuritylevel?: string; 
  public get snmpsecuritylevel() {
    return this.getStringAttribute('snmpsecuritylevel');
  }
  public set snmpsecuritylevel(value: string) {
    this._snmpsecuritylevel = value;
  }
  public resetSnmpsecuritylevel() {
    this._snmpsecuritylevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpsecuritylevelInput() {
    return this._snmpsecuritylevel;
  }

  // snmpsecurityname - computed: false, optional: true, required: false
  private _snmpsecurityname?: string; 
  public get snmpsecurityname() {
    return this.getStringAttribute('snmpsecurityname');
  }
  public set snmpsecurityname(value: string) {
    this._snmpsecurityname = value;
  }
  public resetSnmpsecurityname() {
    this._snmpsecurityname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpsecuritynameInput() {
    return this._snmpsecurityname;
  }

  // snmpversion - computed: false, optional: true, required: false
  private _snmpversion?: string; 
  public get snmpversion() {
    return this.getStringAttribute('snmpversion');
  }
  public set snmpversion(value: string) {
    this._snmpversion = value;
  }
  public resetSnmpversion() {
    this._snmpversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpversionInput() {
    return this._snmpversion;
  }

  // ssh_port - computed: false, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // ssl_cert - computed: false, optional: true, required: false
  private _sslCert?: string; 
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }
  public set sslCert(value: string) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // ssl_private_key - computed: false, optional: true, required: false
  private _sslPrivateKey?: string; 
  public get sslPrivateKey() {
    return this.getStringAttribute('ssl_private_key');
  }
  public set sslPrivateKey(value: string) {
    this._sslPrivateKey = value;
  }
  public resetSslPrivateKey() {
    this._sslPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPrivateKeyInput() {
    return this._sslPrivateKey;
  }

  // svm_ns_comm - computed: false, optional: true, required: false
  private _svmNsComm?: string; 
  public get svmNsComm() {
    return this.getStringAttribute('svm_ns_comm');
  }
  public set svmNsComm(value: string) {
    this._svmNsComm = value;
  }
  public resetSvmNsComm() {
    this._svmNsComm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNsCommInput() {
    return this._svmNsComm;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_global_setting_for_communication_with_ns - computed: false, optional: true, required: false
  private _useGlobalSettingForCommunicationWithNs?: boolean | cdktf.IResolvable; 
  public get useGlobalSettingForCommunicationWithNs() {
    return this.getBooleanAttribute('use_global_setting_for_communication_with_ns');
  }
  public set useGlobalSettingForCommunicationWithNs(value: boolean | cdktf.IResolvable) {
    this._useGlobalSettingForCommunicationWithNs = value;
  }
  public resetUseGlobalSettingForCommunicationWithNs() {
    this._useGlobalSettingForCommunicationWithNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGlobalSettingForCommunicationWithNsInput() {
    return this._useGlobalSettingForCommunicationWithNs;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cb_profile_name: cdktf.stringToTerraform(this._cbProfileName),
      host_password: cdktf.stringToTerraform(this._hostPassword),
      host_username: cdktf.stringToTerraform(this._hostUsername),
      http_port: cdktf.numberToTerraform(this._httpPort),
      https_port: cdktf.numberToTerraform(this._httpsPort),
      id: cdktf.stringToTerraform(this._id),
      max_wait_time_reboot: cdktf.stringToTerraform(this._maxWaitTimeReboot),
      name: cdktf.stringToTerraform(this._name),
      ns_profile_name: cdktf.stringToTerraform(this._nsProfileName),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      password: cdktf.stringToTerraform(this._password),
      snmpauthpassword: cdktf.stringToTerraform(this._snmpauthpassword),
      snmpauthprotocol: cdktf.stringToTerraform(this._snmpauthprotocol),
      snmpcommunity: cdktf.stringToTerraform(this._snmpcommunity),
      snmpprivpassword: cdktf.stringToTerraform(this._snmpprivpassword),
      snmpprivprotocol: cdktf.stringToTerraform(this._snmpprivprotocol),
      snmpsecuritylevel: cdktf.stringToTerraform(this._snmpsecuritylevel),
      snmpsecurityname: cdktf.stringToTerraform(this._snmpsecurityname),
      snmpversion: cdktf.stringToTerraform(this._snmpversion),
      ssh_port: cdktf.stringToTerraform(this._sshPort),
      ssl_cert: cdktf.stringToTerraform(this._sslCert),
      ssl_private_key: cdktf.stringToTerraform(this._sslPrivateKey),
      svm_ns_comm: cdktf.stringToTerraform(this._svmNsComm),
      type: cdktf.stringToTerraform(this._type),
      use_global_setting_for_communication_with_ns: cdktf.booleanToTerraform(this._useGlobalSettingForCommunicationWithNs),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cb_profile_name: {
        value: cdktf.stringToHclTerraform(this._cbProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_password: {
        value: cdktf.stringToHclTerraform(this._hostPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_username: {
        value: cdktf.stringToHclTerraform(this._hostUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_port: {
        value: cdktf.numberToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_port: {
        value: cdktf.numberToHclTerraform(this._httpsPort),
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
      max_wait_time_reboot: {
        value: cdktf.stringToHclTerraform(this._maxWaitTimeReboot),
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
      ns_profile_name: {
        value: cdktf.stringToHclTerraform(this._nsProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpauthpassword: {
        value: cdktf.stringToHclTerraform(this._snmpauthpassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpauthprotocol: {
        value: cdktf.stringToHclTerraform(this._snmpauthprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpcommunity: {
        value: cdktf.stringToHclTerraform(this._snmpcommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpprivpassword: {
        value: cdktf.stringToHclTerraform(this._snmpprivpassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpprivprotocol: {
        value: cdktf.stringToHclTerraform(this._snmpprivprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpsecuritylevel: {
        value: cdktf.stringToHclTerraform(this._snmpsecuritylevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpsecurityname: {
        value: cdktf.stringToHclTerraform(this._snmpsecurityname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpversion: {
        value: cdktf.stringToHclTerraform(this._snmpversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_port: {
        value: cdktf.stringToHclTerraform(this._sshPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert: {
        value: cdktf.stringToHclTerraform(this._sslCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_private_key: {
        value: cdktf.stringToHclTerraform(this._sslPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_ns_comm: {
        value: cdktf.stringToHclTerraform(this._svmNsComm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_global_setting_for_communication_with_ns: {
        value: cdktf.booleanToHclTerraform(this._useGlobalSettingForCommunicationWithNs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
