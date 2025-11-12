// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserFortitokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#activation_code UserFortitoken#activation_code}
  */
  readonly activationCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#activation_expire UserFortitoken#activation_expire}
  */
  readonly activationExpire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#comments UserFortitoken#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#id UserFortitoken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#license UserFortitoken#license}
  */
  readonly license?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#os_ver UserFortitoken#os_ver}
  */
  readonly osVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#reg_id UserFortitoken#reg_id}
  */
  readonly regId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#seed UserFortitoken#seed}
  */
  readonly seed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#serial_number UserFortitoken#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#status UserFortitoken#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#vdomparam UserFortitoken#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken fortios_user_fortitoken}
*/
export class UserFortitoken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_fortitoken";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserFortitoken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserFortitoken to import
  * @param importFromId The id of the existing UserFortitoken that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserFortitoken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_fortitoken", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fortitoken fortios_user_fortitoken} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserFortitokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserFortitokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_fortitoken',
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
    this._activationCode = config.activationCode;
    this._activationExpire = config.activationExpire;
    this._comments = config.comments;
    this._id = config.id;
    this._license = config.license;
    this._osVer = config.osVer;
    this._regId = config.regId;
    this._seed = config.seed;
    this._serialNumber = config.serialNumber;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_code - computed: false, optional: true, required: false
  private _activationCode?: string; 
  public get activationCode() {
    return this.getStringAttribute('activation_code');
  }
  public set activationCode(value: string) {
    this._activationCode = value;
  }
  public resetActivationCode() {
    this._activationCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationCodeInput() {
    return this._activationCode;
  }

  // activation_expire - computed: false, optional: true, required: false
  private _activationExpire?: number; 
  public get activationExpire() {
    return this.getNumberAttribute('activation_expire');
  }
  public set activationExpire(value: number) {
    this._activationExpire = value;
  }
  public resetActivationExpire() {
    this._activationExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationExpireInput() {
    return this._activationExpire;
  }

  // comments - computed: false, optional: true, required: false
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

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // os_ver - computed: false, optional: true, required: false
  private _osVer?: string; 
  public get osVer() {
    return this.getStringAttribute('os_ver');
  }
  public set osVer(value: string) {
    this._osVer = value;
  }
  public resetOsVer() {
    this._osVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVerInput() {
    return this._osVer;
  }

  // reg_id - computed: false, optional: true, required: false
  private _regId?: string; 
  public get regId() {
    return this.getStringAttribute('reg_id');
  }
  public set regId(value: string) {
    this._regId = value;
  }
  public resetRegId() {
    this._regId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regIdInput() {
    return this._regId;
  }

  // seed - computed: false, optional: true, required: false
  private _seed?: string; 
  public get seed() {
    return this.getStringAttribute('seed');
  }
  public set seed(value: string) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
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
      activation_code: cdktf.stringToTerraform(this._activationCode),
      activation_expire: cdktf.numberToTerraform(this._activationExpire),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      license: cdktf.stringToTerraform(this._license),
      os_ver: cdktf.stringToTerraform(this._osVer),
      reg_id: cdktf.stringToTerraform(this._regId),
      seed: cdktf.stringToTerraform(this._seed),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_code: {
        value: cdktf.stringToHclTerraform(this._activationCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activation_expire: {
        value: cdktf.numberToHclTerraform(this._activationExpire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      license: {
        value: cdktf.stringToHclTerraform(this._license),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_ver: {
        value: cdktf.stringToHclTerraform(this._osVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reg_id: {
        value: cdktf.stringToHclTerraform(this._regId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seed: {
        value: cdktf.stringToHclTerraform(this._seed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
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
