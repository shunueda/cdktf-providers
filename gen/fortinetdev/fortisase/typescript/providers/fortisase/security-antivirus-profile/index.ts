// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityAntivirusProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile#cifs SecurityAntivirusProfile#cifs}
  */
  readonly cifs?: string;
  /**
  * The direction of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile#direction SecurityAntivirusProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile#ftp SecurityAntivirusProfile#ftp}
  */
  readonly ftp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile#http SecurityAntivirusProfile#http}
  */
  readonly http?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile#imap SecurityAntivirusProfile#imap}
  */
  readonly imap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile#pop3 SecurityAntivirusProfile#pop3}
  */
  readonly pop3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile#primary_key SecurityAntivirusProfile#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile#smtp SecurityAntivirusProfile#smtp}
  */
  readonly smtp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile fortisase_security_antivirus_profile}
*/
export class SecurityAntivirusProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_antivirus_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityAntivirusProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityAntivirusProfile to import
  * @param importFromId The id of the existing SecurityAntivirusProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityAntivirusProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_antivirus_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_antivirus_profile fortisase_security_antivirus_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityAntivirusProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityAntivirusProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_antivirus_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cifs = config.cifs;
    this._direction = config.direction;
    this._ftp = config.ftp;
    this._http = config.http;
    this._imap = config.imap;
    this._pop3 = config.pop3;
    this._primaryKey = config.primaryKey;
    this._smtp = config.smtp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cifs - computed: true, optional: true, required: false
  private _cifs?: string; 
  public get cifs() {
    return this.getStringAttribute('cifs');
  }
  public set cifs(value: string) {
    this._cifs = value;
  }
  public resetCifs() {
    this._cifs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsInput() {
    return this._cifs;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // ftp - computed: true, optional: true, required: false
  private _ftp?: string; 
  public get ftp() {
    return this.getStringAttribute('ftp');
  }
  public set ftp(value: string) {
    this._ftp = value;
  }
  public resetFtp() {
    this._ftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp;
  }

  // http - computed: true, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // imap - computed: true, optional: true, required: false
  private _imap?: string; 
  public get imap() {
    return this.getStringAttribute('imap');
  }
  public set imap(value: string) {
    this._imap = value;
  }
  public resetImap() {
    this._imap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapInput() {
    return this._imap;
  }

  // pop3 - computed: true, optional: true, required: false
  private _pop3?: string; 
  public get pop3() {
    return this.getStringAttribute('pop3');
  }
  public set pop3(value: string) {
    this._pop3 = value;
  }
  public resetPop3() {
    this._pop3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3Input() {
    return this._pop3;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // smtp - computed: true, optional: true, required: false
  private _smtp?: string; 
  public get smtp() {
    return this.getStringAttribute('smtp');
  }
  public set smtp(value: string) {
    this._smtp = value;
  }
  public resetSmtp() {
    this._smtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cifs: cdktf.stringToTerraform(this._cifs),
      direction: cdktf.stringToTerraform(this._direction),
      ftp: cdktf.stringToTerraform(this._ftp),
      http: cdktf.stringToTerraform(this._http),
      imap: cdktf.stringToTerraform(this._imap),
      pop3: cdktf.stringToTerraform(this._pop3),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      smtp: cdktf.stringToTerraform(this._smtp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cifs: {
        value: cdktf.stringToHclTerraform(this._cifs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp: {
        value: cdktf.stringToHclTerraform(this._ftp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http: {
        value: cdktf.stringToHclTerraform(this._http),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imap: {
        value: cdktf.stringToHclTerraform(this._imap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop3: {
        value: cdktf.stringToHclTerraform(this._pop3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp: {
        value: cdktf.stringToHclTerraform(this._smtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
