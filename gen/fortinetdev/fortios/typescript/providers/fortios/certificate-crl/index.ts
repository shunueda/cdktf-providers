// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateCrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#crl CertificateCrl#crl}
  */
  readonly crl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#http_url CertificateCrl#http_url}
  */
  readonly httpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#id CertificateCrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#last_updated CertificateCrl#last_updated}
  */
  readonly lastUpdated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#ldap_password CertificateCrl#ldap_password}
  */
  readonly ldapPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#ldap_server CertificateCrl#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#ldap_username CertificateCrl#ldap_username}
  */
  readonly ldapUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#name CertificateCrl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#range CertificateCrl#range}
  */
  readonly range?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#scep_cert CertificateCrl#scep_cert}
  */
  readonly scepCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#scep_url CertificateCrl#scep_url}
  */
  readonly scepUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#source CertificateCrl#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#source_ip CertificateCrl#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#update_interval CertificateCrl#update_interval}
  */
  readonly updateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#update_vdom CertificateCrl#update_vdom}
  */
  readonly updateVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#vdomparam CertificateCrl#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl fortios_certificate_crl}
*/
export class CertificateCrl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_certificate_crl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateCrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateCrl to import
  * @param importFromId The id of the existing CertificateCrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateCrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_certificate_crl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_crl fortios_certificate_crl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateCrlConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateCrlConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_certificate_crl',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._lastUpdated = config.lastUpdated;
    this._ldapPassword = config.ldapPassword;
    this._ldapServer = config.ldapServer;
    this._ldapUsername = config.ldapUsername;
    this._name = config.name;
    this._range = config.range;
    this._scepCert = config.scepCert;
    this._scepUrl = config.scepUrl;
    this._source = config.source;
    this._sourceIp = config.sourceIp;
    this._updateInterval = config.updateInterval;
    this._updateVdom = config.updateVdom;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crl - computed: false, optional: true, required: false
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

  // http_url - computed: false, optional: true, required: false
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

  // last_updated - computed: false, optional: true, required: false
  private _lastUpdated?: number; 
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }
  public set lastUpdated(value: number) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
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

  // ldap_server - computed: false, optional: true, required: false
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

  // ldap_username - computed: false, optional: true, required: false
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

  // range - computed: true, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
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

  // scep_url - computed: false, optional: true, required: false
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

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_ip - computed: true, optional: true, required: false
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
      crl: cdktf.stringToTerraform(this._crl),
      http_url: cdktf.stringToTerraform(this._httpUrl),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.numberToTerraform(this._lastUpdated),
      ldap_password: cdktf.stringToTerraform(this._ldapPassword),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      ldap_username: cdktf.stringToTerraform(this._ldapUsername),
      name: cdktf.stringToTerraform(this._name),
      range: cdktf.stringToTerraform(this._range),
      scep_cert: cdktf.stringToTerraform(this._scepCert),
      scep_url: cdktf.stringToTerraform(this._scepUrl),
      source: cdktf.stringToTerraform(this._source),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      update_interval: cdktf.numberToTerraform(this._updateInterval),
      update_vdom: cdktf.stringToTerraform(this._updateVdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      last_updated: {
        value: cdktf.numberToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      range: {
        value: cdktf.stringToHclTerraform(this._range),
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
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
