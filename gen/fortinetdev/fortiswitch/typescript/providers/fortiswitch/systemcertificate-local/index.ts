// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemcertificateLocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#auto_regenerate_days SystemcertificateLocal#auto_regenerate_days}
  */
  readonly autoRegenerateDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#auto_regenerate_days_warning SystemcertificateLocal#auto_regenerate_days_warning}
  */
  readonly autoRegenerateDaysWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#certificate SystemcertificateLocal#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#comments SystemcertificateLocal#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#csr SystemcertificateLocal#csr}
  */
  readonly csr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#id SystemcertificateLocal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#info SystemcertificateLocal#info}
  */
  readonly info?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#name SystemcertificateLocal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#name_encoding SystemcertificateLocal#name_encoding}
  */
  readonly nameEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#password SystemcertificateLocal#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#private_key SystemcertificateLocal#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#scep_password SystemcertificateLocal#scep_password}
  */
  readonly scepPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#scep_url SystemcertificateLocal#scep_url}
  */
  readonly scepUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local fortiswitch_systemcertificate_local}
*/
export class SystemcertificateLocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_systemcertificate_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemcertificateLocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemcertificateLocal to import
  * @param importFromId The id of the existing SystemcertificateLocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemcertificateLocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_systemcertificate_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_local fortiswitch_systemcertificate_local} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemcertificateLocalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemcertificateLocalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_systemcertificate_local',
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
    this._autoRegenerateDays = config.autoRegenerateDays;
    this._autoRegenerateDaysWarning = config.autoRegenerateDaysWarning;
    this._certificate = config.certificate;
    this._comments = config.comments;
    this._csr = config.csr;
    this._id = config.id;
    this._info = config.info;
    this._name = config.name;
    this._nameEncoding = config.nameEncoding;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._scepPassword = config.scepPassword;
    this._scepUrl = config.scepUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_regenerate_days - computed: true, optional: true, required: false
  private _autoRegenerateDays?: number; 
  public get autoRegenerateDays() {
    return this.getNumberAttribute('auto_regenerate_days');
  }
  public set autoRegenerateDays(value: number) {
    this._autoRegenerateDays = value;
  }
  public resetAutoRegenerateDays() {
    this._autoRegenerateDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRegenerateDaysInput() {
    return this._autoRegenerateDays;
  }

  // auto_regenerate_days_warning - computed: true, optional: true, required: false
  private _autoRegenerateDaysWarning?: number; 
  public get autoRegenerateDaysWarning() {
    return this.getNumberAttribute('auto_regenerate_days_warning');
  }
  public set autoRegenerateDaysWarning(value: number) {
    this._autoRegenerateDaysWarning = value;
  }
  public resetAutoRegenerateDaysWarning() {
    this._autoRegenerateDaysWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRegenerateDaysWarningInput() {
    return this._autoRegenerateDaysWarning;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // csr - computed: true, optional: true, required: false
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
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

  // info - computed: true, optional: true, required: false
  private _info?: string; 
  public get info() {
    return this.getStringAttribute('info');
  }
  public set info(value: string) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
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

  // name_encoding - computed: true, optional: true, required: false
  private _nameEncoding?: string; 
  public get nameEncoding() {
    return this.getStringAttribute('name_encoding');
  }
  public set nameEncoding(value: string) {
    this._nameEncoding = value;
  }
  public resetNameEncoding() {
    this._nameEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameEncodingInput() {
    return this._nameEncoding;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // scep_password - computed: false, optional: true, required: false
  private _scepPassword?: string; 
  public get scepPassword() {
    return this.getStringAttribute('scep_password');
  }
  public set scepPassword(value: string) {
    this._scepPassword = value;
  }
  public resetScepPassword() {
    this._scepPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepPasswordInput() {
    return this._scepPassword;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_regenerate_days: cdktf.numberToTerraform(this._autoRegenerateDays),
      auto_regenerate_days_warning: cdktf.numberToTerraform(this._autoRegenerateDaysWarning),
      certificate: cdktf.stringToTerraform(this._certificate),
      comments: cdktf.stringToTerraform(this._comments),
      csr: cdktf.stringToTerraform(this._csr),
      id: cdktf.stringToTerraform(this._id),
      info: cdktf.stringToTerraform(this._info),
      name: cdktf.stringToTerraform(this._name),
      name_encoding: cdktf.stringToTerraform(this._nameEncoding),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      scep_password: cdktf.stringToTerraform(this._scepPassword),
      scep_url: cdktf.stringToTerraform(this._scepUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_regenerate_days: {
        value: cdktf.numberToHclTerraform(this._autoRegenerateDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_regenerate_days_warning: {
        value: cdktf.numberToHclTerraform(this._autoRegenerateDaysWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
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
      info: {
        value: cdktf.stringToHclTerraform(this._info),
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
      name_encoding: {
        value: cdktf.stringToHclTerraform(this._nameEncoding),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_password: {
        value: cdktf.stringToHclTerraform(this._scepPassword),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
