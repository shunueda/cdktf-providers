// https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs/resources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs/resources/certificate#env Certificate#env}
  */
  readonly env?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs/resources/certificate#name Certificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs/resources/certificate#sign Certificate#sign}
  */
  readonly sign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs/resources/certificate#usedby Certificate#usedby}
  */
  readonly usedby?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs/resources/certificate puppetca_certificate}
*/
export class Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "puppetca_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Certificate to import
  * @param importFromId The id of the existing Certificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs/resources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Certificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "puppetca_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/puppetca/2.0.0/docs/resources/certificate puppetca_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'puppetca_certificate',
      terraformGeneratorMetadata: {
        providerName: 'puppetca',
        providerVersion: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._env = config.env;
    this._name = config.name;
    this._sign = config.sign;
    this._usedby = config.usedby;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // env - computed: false, optional: true, required: false
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // sign - computed: false, optional: true, required: false
  private _sign?: boolean | cdktf.IResolvable; 
  public get sign() {
    return this.getBooleanAttribute('sign');
  }
  public set sign(value: boolean | cdktf.IResolvable) {
    this._sign = value;
  }
  public resetSign() {
    this._sign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInput() {
    return this._sign;
  }

  // usedby - computed: false, optional: true, required: false
  private _usedby?: string; 
  public get usedby() {
    return this.getStringAttribute('usedby');
  }
  public set usedby(value: string) {
    this._usedby = value;
  }
  public resetUsedby() {
    this._usedby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedbyInput() {
    return this._usedby;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env: cdktf.stringToTerraform(this._env),
      name: cdktf.stringToTerraform(this._name),
      sign: cdktf.booleanToTerraform(this._sign),
      usedby: cdktf.stringToTerraform(this._usedby),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env: {
        value: cdktf.stringToHclTerraform(this._env),
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
      sign: {
        value: cdktf.booleanToHclTerraform(this._sign),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      usedby: {
        value: cdktf.stringToHclTerraform(this._usedby),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
