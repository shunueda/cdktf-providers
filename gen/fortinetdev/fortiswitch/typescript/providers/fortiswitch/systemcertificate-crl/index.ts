// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemcertificateCrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#crl SystemcertificateCrl#crl}
  */
  readonly crl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#http_url SystemcertificateCrl#http_url}
  */
  readonly httpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#id SystemcertificateCrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#ldap_password SystemcertificateCrl#ldap_password}
  */
  readonly ldapPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#ldap_server SystemcertificateCrl#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#ldap_username SystemcertificateCrl#ldap_username}
  */
  readonly ldapUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#name SystemcertificateCrl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#scep_cert SystemcertificateCrl#scep_cert}
  */
  readonly scepCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#scep_url SystemcertificateCrl#scep_url}
  */
  readonly scepUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#update_interval SystemcertificateCrl#update_interval}
  */
  readonly updateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#update_vdom SystemcertificateCrl#update_vdom}
  */
  readonly updateVdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl fortiswitch_systemcertificate_crl}
*/
export class SystemcertificateCrl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_systemcertificate_crl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemcertificateCrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemcertificateCrl to import
  * @param importFromId The id of the existing SystemcertificateCrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemcertificateCrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_systemcertificate_crl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_crl fortiswitch_systemcertificate_crl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemcertificateCrlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemcertificateCrlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_systemcertificate_crl',
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
    this._crl = config.crl;
    this._httpUrl = config.httpUrl;
    this._id = config.id;
    this._ldapPassword = config.ldapPassword;
    this._ldapServer = config.ldapServer;
    this._ldapUsername = config.ldapUsername;
    this._name = config.name;
    this._scepCert = config.scepCert;
    this._scepUrl = config.scepUrl;
    this._updateInterval = config.updateInterval;
    this._updateVdom = config.updateVdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crl - computed: true, optional: true, required: false
  private _crl?: string; 
  public get crl() {
    return this.getStringAttribute('crl');
  }
  public set crl(value: string) {
    this._crl = value;
  }
  public resetCrl() {
    this._crl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl;
  }

  // http_url - computed: true, optional: true, required: false
  private _httpUrl?: string; 
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }
  public set httpUrl(value: string) {
    this._httpUrl = value;
  }
  public resetHttpUrl() {
    this._httpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUrlInput() {
    return this._httpUrl;
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

  // ldap_password - computed: false, optional: true, required: false
  private _ldapPassword?: string; 
  public get ldapPassword() {
    return this.getStringAttribute('ldap_password');
  }
  public set ldapPassword(value: string) {
    this._ldapPassword = value;
  }
  public resetLdapPassword() {
    this._ldapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPasswordInput() {
    return this._ldapPassword;
  }

  // ldap_server - computed: true, optional: true, required: false
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  public resetLdapServer() {
    this._ldapServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
  }

  // ldap_username - computed: true, optional: true, required: false
  private _ldapUsername?: string; 
  public get ldapUsername() {
    return this.getStringAttribute('ldap_username');
  }
  public set ldapUsername(value: string) {
    this._ldapUsername = value;
  }
  public resetLdapUsername() {
    this._ldapUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUsernameInput() {
    return this._ldapUsername;
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

  // scep_cert - computed: true, optional: true, required: false
  private _scepCert?: string; 
  public get scepCert() {
    return this.getStringAttribute('scep_cert');
  }
  public set scepCert(value: string) {
    this._scepCert = value;
  }
  public resetScepCert() {
    this._scepCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepCertInput() {
    return this._scepCert;
  }

  // scep_url - computed: true, optional: true, required: false
  private _scepUrl?: string; 
  public get scepUrl() {
    return this.getStringAttribute('scep_url');
  }
  public set scepUrl(value: string) {
    this._scepUrl = value;
  }
  public resetScepUrl() {
    this._scepUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepUrlInput() {
    return this._scepUrl;
  }

  // update_interval - computed: true, optional: true, required: false
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

  // update_vdom - computed: true, optional: true, required: false
  private _updateVdom?: string; 
  public get updateVdom() {
    return this.getStringAttribute('update_vdom');
  }
  public set updateVdom(value: string) {
    this._updateVdom = value;
  }
  public resetUpdateVdom() {
    this._updateVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateVdomInput() {
    return this._updateVdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crl: cdktf.stringToTerraform(this._crl),
      http_url: cdktf.stringToTerraform(this._httpUrl),
      id: cdktf.stringToTerraform(this._id),
      ldap_password: cdktf.stringToTerraform(this._ldapPassword),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      ldap_username: cdktf.stringToTerraform(this._ldapUsername),
      name: cdktf.stringToTerraform(this._name),
      scep_cert: cdktf.stringToTerraform(this._scepCert),
      scep_url: cdktf.stringToTerraform(this._scepUrl),
      update_interval: cdktf.numberToTerraform(this._updateInterval),
      update_vdom: cdktf.stringToTerraform(this._updateVdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crl: {
        value: cdktf.stringToHclTerraform(this._crl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_url: {
        value: cdktf.stringToHclTerraform(this._httpUrl),
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
      ldap_password: {
        value: cdktf.stringToHclTerraform(this._ldapPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_username: {
        value: cdktf.stringToHclTerraform(this._ldapUsername),
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
      scep_cert: {
        value: cdktf.stringToHclTerraform(this._scepCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_url: {
        value: cdktf.stringToHclTerraform(this._scepUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.numberToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_vdom: {
        value: cdktf.stringToHclTerraform(this._updateVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
