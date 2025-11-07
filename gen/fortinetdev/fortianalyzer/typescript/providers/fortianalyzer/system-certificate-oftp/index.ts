// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCertificateOftpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp#certificate SystemCertificateOftp#certificate}
  */
  readonly certificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp#comment SystemCertificateOftp#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp#id SystemCertificateOftp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp#local SystemCertificateOftp#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp#mode SystemCertificateOftp#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp#password SystemCertificateOftp#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp#private_key SystemCertificateOftp#private_key}
  */
  readonly privateKey?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp fortianalyzer_system_certificate_oftp}
*/
export class SystemCertificateOftp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_certificate_oftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCertificateOftp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCertificateOftp to import
  * @param importFromId The id of the existing SystemCertificateOftp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCertificateOftp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_certificate_oftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_certificate_oftp fortianalyzer_system_certificate_oftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCertificateOftpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemCertificateOftpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_certificate_oftp',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificate = config.certificate;
    this._comment = config.comment;
    this._id = config.id;
    this._local = config.local;
    this._mode = config.mode;
    this._password = config.password;
    this._privateKey = config.privateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string[]; 
  public get certificate() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate'));
  }
  public set certificate(value: string[]) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // local - computed: false, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
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

  // password - computed: false, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string[]; 
  public get privateKey() {
    return cdktf.Fn.tolist(this.getListAttribute('private_key'));
  }
  public set privateKey(value: string[]) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificate),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      local: cdktf.stringToTerraform(this._local),
      mode: cdktf.stringToTerraform(this._mode),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      private_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      local: {
        value: cdktf.stringToHclTerraform(this._local),
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
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      private_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
