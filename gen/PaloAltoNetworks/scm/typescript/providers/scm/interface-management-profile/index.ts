// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceManagementProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#device InterfaceManagementProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#folder InterfaceManagementProfile#folder}
  */
  readonly folder?: string;
  /**
  * Allow HTTP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#http InterfaceManagementProfile#http}
  */
  readonly http?: boolean | cdktf.IResolvable;
  /**
  * Allow HTTP OCSP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#http_ocsp InterfaceManagementProfile#http_ocsp}
  */
  readonly httpOcsp?: boolean | cdktf.IResolvable;
  /**
  * Allow HTTPS?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#https InterfaceManagementProfile#https}
  */
  readonly https?: boolean | cdktf.IResolvable;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#name InterfaceManagementProfile#name}
  */
  readonly name: string;
  /**
  * Allowed IP address(es)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#permitted_ip InterfaceManagementProfile#permitted_ip}
  */
  readonly permittedIp?: string[];
  /**
  * Allow ping?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#ping InterfaceManagementProfile#ping}
  */
  readonly ping?: boolean | cdktf.IResolvable;
  /**
  * Allow response pages?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#response_pages InterfaceManagementProfile#response_pages}
  */
  readonly responsePages?: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#snippet InterfaceManagementProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * Allow SSH?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#ssh InterfaceManagementProfile#ssh}
  */
  readonly ssh?: boolean | cdktf.IResolvable;
  /**
  * Allow telnet? Seriously, why would you do this?!?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#telnet InterfaceManagementProfile#telnet}
  */
  readonly telnet?: boolean | cdktf.IResolvable;
  /**
  * Allow User-ID?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#userid_service InterfaceManagementProfile#userid_service}
  */
  readonly useridService?: boolean | cdktf.IResolvable;
  /**
  * Allow User-ID syslog listener (SSL)?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#userid_syslog_listener_ssl InterfaceManagementProfile#userid_syslog_listener_ssl}
  */
  readonly useridSyslogListenerSsl?: boolean | cdktf.IResolvable;
  /**
  * Allow User-ID syslog listener (UDP)?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#userid_syslog_listener_udp InterfaceManagementProfile#userid_syslog_listener_udp}
  */
  readonly useridSyslogListenerUdp?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile scm_interface_management_profile}
*/
export class InterfaceManagementProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_interface_management_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceManagementProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceManagementProfile to import
  * @param importFromId The id of the existing InterfaceManagementProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceManagementProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_interface_management_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/interface_management_profile scm_interface_management_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceManagementProfileConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceManagementProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_interface_management_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._http = config.http;
    this._httpOcsp = config.httpOcsp;
    this._https = config.https;
    this._name = config.name;
    this._permittedIp = config.permittedIp;
    this._ping = config.ping;
    this._responsePages = config.responsePages;
    this._snippet = config.snippet;
    this._ssh = config.ssh;
    this._telnet = config.telnet;
    this._useridService = config.useridService;
    this._useridSyslogListenerSsl = config.useridSyslogListenerSsl;
    this._useridSyslogListenerUdp = config.useridSyslogListenerUdp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // http - computed: false, optional: true, required: false
  private _http?: boolean | cdktf.IResolvable; 
  public get http() {
    return this.getBooleanAttribute('http');
  }
  public set http(value: boolean | cdktf.IResolvable) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // http_ocsp - computed: false, optional: true, required: false
  private _httpOcsp?: boolean | cdktf.IResolvable; 
  public get httpOcsp() {
    return this.getBooleanAttribute('http_ocsp');
  }
  public set httpOcsp(value: boolean | cdktf.IResolvable) {
    this._httpOcsp = value;
  }
  public resetHttpOcsp() {
    this._httpOcsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOcspInput() {
    return this._httpOcsp;
  }

  // https - computed: false, optional: true, required: false
  private _https?: boolean | cdktf.IResolvable; 
  public get https() {
    return this.getBooleanAttribute('https');
  }
  public set https(value: boolean | cdktf.IResolvable) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // permitted_ip - computed: false, optional: true, required: false
  private _permittedIp?: string[]; 
  public get permittedIp() {
    return this.getListAttribute('permitted_ip');
  }
  public set permittedIp(value: string[]) {
    this._permittedIp = value;
  }
  public resetPermittedIp() {
    this._permittedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedIpInput() {
    return this._permittedIp;
  }

  // ping - computed: false, optional: true, required: false
  private _ping?: boolean | cdktf.IResolvable; 
  public get ping() {
    return this.getBooleanAttribute('ping');
  }
  public set ping(value: boolean | cdktf.IResolvable) {
    this._ping = value;
  }
  public resetPing() {
    this._ping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingInput() {
    return this._ping;
  }

  // response_pages - computed: true, optional: true, required: false
  private _responsePages?: string; 
  public get responsePages() {
    return this.getStringAttribute('response_pages');
  }
  public set responsePages(value: string) {
    this._responsePages = value;
  }
  public resetResponsePages() {
    this._responsePages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePagesInput() {
    return this._responsePages;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: boolean | cdktf.IResolvable; 
  public get ssh() {
    return this.getBooleanAttribute('ssh');
  }
  public set ssh(value: boolean | cdktf.IResolvable) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // telnet - computed: false, optional: true, required: false
  private _telnet?: boolean | cdktf.IResolvable; 
  public get telnet() {
    return this.getBooleanAttribute('telnet');
  }
  public set telnet(value: boolean | cdktf.IResolvable) {
    this._telnet = value;
  }
  public resetTelnet() {
    this._telnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telnetInput() {
    return this._telnet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // userid_service - computed: false, optional: true, required: false
  private _useridService?: boolean | cdktf.IResolvable; 
  public get useridService() {
    return this.getBooleanAttribute('userid_service');
  }
  public set useridService(value: boolean | cdktf.IResolvable) {
    this._useridService = value;
  }
  public resetUseridService() {
    this._useridService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridServiceInput() {
    return this._useridService;
  }

  // userid_syslog_listener_ssl - computed: false, optional: true, required: false
  private _useridSyslogListenerSsl?: boolean | cdktf.IResolvable; 
  public get useridSyslogListenerSsl() {
    return this.getBooleanAttribute('userid_syslog_listener_ssl');
  }
  public set useridSyslogListenerSsl(value: boolean | cdktf.IResolvable) {
    this._useridSyslogListenerSsl = value;
  }
  public resetUseridSyslogListenerSsl() {
    this._useridSyslogListenerSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridSyslogListenerSslInput() {
    return this._useridSyslogListenerSsl;
  }

  // userid_syslog_listener_udp - computed: false, optional: true, required: false
  private _useridSyslogListenerUdp?: boolean | cdktf.IResolvable; 
  public get useridSyslogListenerUdp() {
    return this.getBooleanAttribute('userid_syslog_listener_udp');
  }
  public set useridSyslogListenerUdp(value: boolean | cdktf.IResolvable) {
    this._useridSyslogListenerUdp = value;
  }
  public resetUseridSyslogListenerUdp() {
    this._useridSyslogListenerUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridSyslogListenerUdpInput() {
    return this._useridSyslogListenerUdp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      http: cdktf.booleanToTerraform(this._http),
      http_ocsp: cdktf.booleanToTerraform(this._httpOcsp),
      https: cdktf.booleanToTerraform(this._https),
      name: cdktf.stringToTerraform(this._name),
      permitted_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permittedIp),
      ping: cdktf.booleanToTerraform(this._ping),
      response_pages: cdktf.stringToTerraform(this._responsePages),
      snippet: cdktf.stringToTerraform(this._snippet),
      ssh: cdktf.booleanToTerraform(this._ssh),
      telnet: cdktf.booleanToTerraform(this._telnet),
      userid_service: cdktf.booleanToTerraform(this._useridService),
      userid_syslog_listener_ssl: cdktf.booleanToTerraform(this._useridSyslogListenerSsl),
      userid_syslog_listener_udp: cdktf.booleanToTerraform(this._useridSyslogListenerUdp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http: {
        value: cdktf.booleanToHclTerraform(this._http),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_ocsp: {
        value: cdktf.booleanToHclTerraform(this._httpOcsp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      https: {
        value: cdktf.booleanToHclTerraform(this._https),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permitted_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permittedIp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ping: {
        value: cdktf.booleanToHclTerraform(this._ping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_pages: {
        value: cdktf.stringToHclTerraform(this._responsePages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh: {
        value: cdktf.booleanToHclTerraform(this._ssh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      telnet: {
        value: cdktf.booleanToHclTerraform(this._telnet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      userid_service: {
        value: cdktf.booleanToHclTerraform(this._useridService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      userid_syslog_listener_ssl: {
        value: cdktf.booleanToHclTerraform(this._useridSyslogListenerSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      userid_syslog_listener_udp: {
        value: cdktf.booleanToHclTerraform(this._useridSyslogListenerUdp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
