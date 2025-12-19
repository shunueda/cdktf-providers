// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshdConfig extends cdktf.TerraformMetaArguments {
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#file_url Sshd#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Generate SSH key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#generate Sshd#generate}
  */
  readonly generate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#id Sshd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Load SSH key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#load Sshd#load}
  */
  readonly load?: number;
  /**
  * remove ip address from known_hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#re_add_rsa Sshd#re_add_rsa}
  */
  readonly reAddRsa?: string;
  /**
  * Wipe and generate SSH key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#regenerate Sshd#regenerate}
  */
  readonly regenerate?: number;
  /**
  * Restart SSH service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#restart Sshd#restart}
  */
  readonly restart?: number;
  /**
  * '2048': Key size 2048bit; '4096': Key size 4096bit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#size Sshd#size}
  */
  readonly size?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#use_mgmt_port Sshd#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Wipe SSH key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#wipe Sshd#wipe}
  */
  readonly wipe?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd thunder_sshd}
*/
export class Sshd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sshd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sshd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sshd to import
  * @param importFromId The id of the existing Sshd that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sshd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sshd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sshd thunder_sshd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SshdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sshd',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fileUrl = config.fileUrl;
    this._generate = config.generate;
    this._id = config.id;
    this._load = config.load;
    this._reAddRsa = config.reAddRsa;
    this._regenerate = config.regenerate;
    this._restart = config.restart;
    this._size = config.size;
    this._useMgmtPort = config.useMgmtPort;
    this._wipe = config.wipe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: number; 
  public get generate() {
    return this.getNumberAttribute('generate');
  }
  public set generate(value: number) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
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

  // load - computed: false, optional: true, required: false
  private _load?: number; 
  public get load() {
    return this.getNumberAttribute('load');
  }
  public set load(value: number) {
    this._load = value;
  }
  public resetLoad() {
    this._load = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
  }

  // re_add_rsa - computed: false, optional: true, required: false
  private _reAddRsa?: string; 
  public get reAddRsa() {
    return this.getStringAttribute('re_add_rsa');
  }
  public set reAddRsa(value: string) {
    this._reAddRsa = value;
  }
  public resetReAddRsa() {
    this._reAddRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reAddRsaInput() {
    return this._reAddRsa;
  }

  // regenerate - computed: false, optional: true, required: false
  private _regenerate?: number; 
  public get regenerate() {
    return this.getNumberAttribute('regenerate');
  }
  public set regenerate(value: number) {
    this._regenerate = value;
  }
  public resetRegenerate() {
    this._regenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regenerateInput() {
    return this._regenerate;
  }

  // restart - computed: false, optional: true, required: false
  private _restart?: number; 
  public get restart() {
    return this.getNumberAttribute('restart');
  }
  public set restart(value: number) {
    this._restart = value;
  }
  public resetRestart() {
    this._restart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // wipe - computed: false, optional: true, required: false
  private _wipe?: number; 
  public get wipe() {
    return this.getNumberAttribute('wipe');
  }
  public set wipe(value: number) {
    this._wipe = value;
  }
  public resetWipe() {
    this._wipe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wipeInput() {
    return this._wipe;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_url: cdktf.stringToTerraform(this._fileUrl),
      generate: cdktf.numberToTerraform(this._generate),
      id: cdktf.stringToTerraform(this._id),
      load: cdktf.numberToTerraform(this._load),
      re_add_rsa: cdktf.stringToTerraform(this._reAddRsa),
      regenerate: cdktf.numberToTerraform(this._regenerate),
      restart: cdktf.numberToTerraform(this._restart),
      size: cdktf.stringToTerraform(this._size),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      wipe: cdktf.numberToTerraform(this._wipe),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_url: {
        value: cdktf.stringToHclTerraform(this._fileUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate: {
        value: cdktf.numberToHclTerraform(this._generate),
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
      load: {
        value: cdktf.numberToHclTerraform(this._load),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      re_add_rsa: {
        value: cdktf.stringToHclTerraform(this._reAddRsa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regenerate: {
        value: cdktf.numberToHclTerraform(this._regenerate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restart: {
        value: cdktf.numberToHclTerraform(this._restart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wipe: {
        value: cdktf.numberToHclTerraform(this._wipe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
