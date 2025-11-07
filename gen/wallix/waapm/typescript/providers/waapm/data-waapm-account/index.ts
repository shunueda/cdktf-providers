// https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWaapmAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * account of the secret using target syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#account DataWaapmAccount#account}
  */
  readonly account: string;
  /**
  * name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#application DataWaapmAccount#application}
  */
  readonly application?: string;
  /**
  * bastion to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#bastion DataWaapmAccount#bastion}
  */
  readonly bastion?: string;
  /**
  * check account in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#checkin DataWaapmAccount#checkin}
  */
  readonly checkin?: boolean | cdktf.IResolvable;
  /**
  * directory for cred and vault files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#directory DataWaapmAccount#directory}
  */
  readonly directory?: string;
  /**
  * forced modules for fingerprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#forced_modules DataWaapmAccount#forced_modules}
  */
  readonly forcedModules?: string[];
  /**
  * requested secret format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#format DataWaapmAccount#format}
  */
  readonly format?: string;
  /**
  * number of generations to use for fingerprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#generations DataWaapmAccount#generations}
  */
  readonly generations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#id DataWaapmAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * type of requested secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#key DataWaapmAccount#key}
  */
  readonly key?: string;
  /**
  * use modules for fingerprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#modules DataWaapmAccount#modules}
  */
  readonly modules?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account waapm_account}
*/
export class DataWaapmAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "waapm_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWaapmAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWaapmAccount to import
  * @param importFromId The id of the existing DataWaapmAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWaapmAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "waapm_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs/data-sources/account waapm_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWaapmAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataWaapmAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'waapm_account',
      terraformGeneratorMetadata: {
        providerName: 'waapm',
        providerVersion: '2.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._application = config.application;
    this._bastion = config.bastion;
    this._checkin = config.checkin;
    this._directory = config.directory;
    this._forcedModules = config.forcedModules;
    this._format = config.format;
    this._generations = config.generations;
    this._id = config.id;
    this._key = config.key;
    this._modules = config.modules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // bastion - computed: false, optional: true, required: false
  private _bastion?: string; 
  public get bastion() {
    return this.getStringAttribute('bastion');
  }
  public set bastion(value: string) {
    this._bastion = value;
  }
  public resetBastion() {
    this._bastion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionInput() {
    return this._bastion;
  }

  // checkin - computed: false, optional: true, required: false
  private _checkin?: boolean | cdktf.IResolvable; 
  public get checkin() {
    return this.getBooleanAttribute('checkin');
  }
  public set checkin(value: boolean | cdktf.IResolvable) {
    this._checkin = value;
  }
  public resetCheckin() {
    this._checkin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkinInput() {
    return this._checkin;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // forced_modules - computed: false, optional: true, required: false
  private _forcedModules?: string[]; 
  public get forcedModules() {
    return this.getListAttribute('forced_modules');
  }
  public set forcedModules(value: string[]) {
    this._forcedModules = value;
  }
  public resetForcedModules() {
    this._forcedModules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedModulesInput() {
    return this._forcedModules;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // generations - computed: false, optional: true, required: false
  private _generations?: number; 
  public get generations() {
    return this.getNumberAttribute('generations');
  }
  public set generations(value: number) {
    this._generations = value;
  }
  public resetGenerations() {
    this._generations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationsInput() {
    return this._generations;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // modules - computed: false, optional: true, required: false
  private _modules?: string; 
  public get modules() {
    return this.getStringAttribute('modules');
  }
  public set modules(value: string) {
    this._modules = value;
  }
  public resetModules() {
    this._modules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesInput() {
    return this._modules;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      application: cdktf.stringToTerraform(this._application),
      bastion: cdktf.stringToTerraform(this._bastion),
      checkin: cdktf.booleanToTerraform(this._checkin),
      directory: cdktf.stringToTerraform(this._directory),
      forced_modules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forcedModules),
      format: cdktf.stringToTerraform(this._format),
      generations: cdktf.numberToTerraform(this._generations),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      modules: cdktf.stringToTerraform(this._modules),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion: {
        value: cdktf.stringToHclTerraform(this._bastion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checkin: {
        value: cdktf.booleanToHclTerraform(this._checkin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forced_modules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forcedModules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generations: {
        value: cdktf.numberToHclTerraform(this._generations),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modules: {
        value: cdktf.stringToHclTerraform(this._modules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
