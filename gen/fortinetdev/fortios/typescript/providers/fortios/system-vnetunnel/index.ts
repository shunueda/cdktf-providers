// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVnetunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#auto_asic_offload SystemVnetunnel#auto_asic_offload}
  */
  readonly autoAsicOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#bmr_hostname SystemVnetunnel#bmr_hostname}
  */
  readonly bmrHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#br SystemVnetunnel#br}
  */
  readonly br?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#http_password SystemVnetunnel#http_password}
  */
  readonly httpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#http_username SystemVnetunnel#http_username}
  */
  readonly httpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#id SystemVnetunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#interface SystemVnetunnel#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#ipv4_address SystemVnetunnel#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#mode SystemVnetunnel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#ssl_certificate SystemVnetunnel#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#status SystemVnetunnel#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#update_url SystemVnetunnel#update_url}
  */
  readonly updateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#vdomparam SystemVnetunnel#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel fortios_system_vnetunnel}
*/
export class SystemVnetunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_vnetunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVnetunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVnetunnel to import
  * @param importFromId The id of the existing SystemVnetunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVnetunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_vnetunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vnetunnel fortios_system_vnetunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVnetunnelConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemVnetunnelConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_vnetunnel',
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
    this._autoAsicOffload = config.autoAsicOffload;
    this._bmrHostname = config.bmrHostname;
    this._br = config.br;
    this._httpPassword = config.httpPassword;
    this._httpUsername = config.httpUsername;
    this._id = config.id;
    this._interface = config.interface;
    this._ipv4Address = config.ipv4Address;
    this._mode = config.mode;
    this._sslCertificate = config.sslCertificate;
    this._status = config.status;
    this._updateUrl = config.updateUrl;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_asic_offload - computed: true, optional: true, required: false
  private _autoAsicOffload?: string; 
  public get autoAsicOffload() {
    return this.getStringAttribute('auto_asic_offload');
  }
  public set autoAsicOffload(value: string) {
    this._autoAsicOffload = value;
  }
  public resetAutoAsicOffload() {
    this._autoAsicOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAsicOffloadInput() {
    return this._autoAsicOffload;
  }

  // bmr_hostname - computed: false, optional: true, required: false
  private _bmrHostname?: string; 
  public get bmrHostname() {
    return this.getStringAttribute('bmr_hostname');
  }
  public set bmrHostname(value: string) {
    this._bmrHostname = value;
  }
  public resetBmrHostname() {
    this._bmrHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmrHostnameInput() {
    return this._bmrHostname;
  }

  // br - computed: true, optional: true, required: false
  private _br?: string; 
  public get br() {
    return this.getStringAttribute('br');
  }
  public set br(value: string) {
    this._br = value;
  }
  public resetBr() {
    this._br = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brInput() {
    return this._br;
  }

  // http_password - computed: false, optional: true, required: false
  private _httpPassword?: string; 
  public get httpPassword() {
    return this.getStringAttribute('http_password');
  }
  public set httpPassword(value: string) {
    this._httpPassword = value;
  }
  public resetHttpPassword() {
    this._httpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPasswordInput() {
    return this._httpPassword;
  }

  // http_username - computed: false, optional: true, required: false
  private _httpUsername?: string; 
  public get httpUsername() {
    return this.getStringAttribute('http_username');
  }
  public set httpUsername(value: string) {
    this._httpUsername = value;
  }
  public resetHttpUsername() {
    this._httpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUsernameInput() {
    return this._httpUsername;
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

  // ipv4_address - computed: true, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // ssl_certificate - computed: true, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
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

  // update_url - computed: false, optional: true, required: false
  private _updateUrl?: string; 
  public get updateUrl() {
    return this.getStringAttribute('update_url');
  }
  public set updateUrl(value: string) {
    this._updateUrl = value;
  }
  public resetUpdateUrl() {
    this._updateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUrlInput() {
    return this._updateUrl;
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
      auto_asic_offload: cdktf.stringToTerraform(this._autoAsicOffload),
      bmr_hostname: cdktf.stringToTerraform(this._bmrHostname),
      br: cdktf.stringToTerraform(this._br),
      http_password: cdktf.stringToTerraform(this._httpPassword),
      http_username: cdktf.stringToTerraform(this._httpUsername),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      mode: cdktf.stringToTerraform(this._mode),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
      status: cdktf.stringToTerraform(this._status),
      update_url: cdktf.stringToTerraform(this._updateUrl),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_asic_offload: {
        value: cdktf.stringToHclTerraform(this._autoAsicOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bmr_hostname: {
        value: cdktf.stringToHclTerraform(this._bmrHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      br: {
        value: cdktf.stringToHclTerraform(this._br),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_password: {
        value: cdktf.stringToHclTerraform(this._httpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_username: {
        value: cdktf.stringToHclTerraform(this._httpUsername),
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
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._sslCertificate),
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
      update_url: {
        value: cdktf.stringToHclTerraform(this._updateUrl),
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
