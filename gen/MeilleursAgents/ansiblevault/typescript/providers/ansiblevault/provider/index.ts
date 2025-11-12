// https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnsiblevaultProviderConfig {
  /**
  * Vault path pattern (example: '/group_vars/tag_{{ .env }}/vault.yml')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs#path_pattern AnsiblevaultProvider#path_pattern}
  */
  readonly pathPattern?: string;
  /**
  * Ansible root directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs#root_folder AnsiblevaultProvider#root_folder}
  */
  readonly rootFolder: string;
  /**
  * Ansible vault pass value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs#vault_pass AnsiblevaultProvider#vault_pass}
  */
  readonly vaultPass?: string;
  /**
  * Path to ansible vault password file (cf. https://docs.ansible.com/ansible/latest/user_guide/vault.html#providing-vault-passwords)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs#vault_path AnsiblevaultProvider#vault_path}
  */
  readonly vaultPath?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs#alias AnsiblevaultProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs ansiblevault}
*/
export class AnsiblevaultProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ansiblevault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnsiblevaultProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnsiblevaultProvider to import
  * @param importFromId The id of the existing AnsiblevaultProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnsiblevaultProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansiblevault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs ansiblevault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnsiblevaultProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AnsiblevaultProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'ansiblevault',
      terraformGeneratorMetadata: {
        providerName: 'ansiblevault',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
      },
      terraformProviderSource: 'MeilleursAgents/ansiblevault'
    });
    this._pathPattern = config.pathPattern;
    this._rootFolder = config.rootFolder;
    this._vaultPass = config.vaultPass;
    this._vaultPath = config.vaultPath;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // path_pattern - computed: false, optional: true, required: false
  private _pathPattern?: string; 
  public get pathPattern() {
    return this._pathPattern;
  }
  public set pathPattern(value: string | undefined) {
    this._pathPattern = value;
  }
  public resetPathPattern() {
    this._pathPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern;
  }

  // root_folder - computed: false, optional: false, required: true
  private _rootFolder?: string; 
  public get rootFolder() {
    return this._rootFolder;
  }
  public set rootFolder(value: string | undefined) {
    this._rootFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFolderInput() {
    return this._rootFolder;
  }

  // vault_pass - computed: false, optional: true, required: false
  private _vaultPass?: string; 
  public get vaultPass() {
    return this._vaultPass;
  }
  public set vaultPass(value: string | undefined) {
    this._vaultPass = value;
  }
  public resetVaultPass() {
    this._vaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultPassInput() {
    return this._vaultPass;
  }

  // vault_path - computed: false, optional: true, required: false
  private _vaultPath?: string; 
  public get vaultPath() {
    return this._vaultPath;
  }
  public set vaultPath(value: string | undefined) {
    this._vaultPath = value;
  }
  public resetVaultPath() {
    this._vaultPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultPathInput() {
    return this._vaultPath;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      path_pattern: cdktf.stringToTerraform(this._pathPattern),
      root_folder: cdktf.stringToTerraform(this._rootFolder),
      vault_pass: cdktf.stringToTerraform(this._vaultPass),
      vault_path: cdktf.stringToTerraform(this._vaultPath),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      path_pattern: {
        value: cdktf.stringToHclTerraform(this._pathPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_folder: {
        value: cdktf.stringToHclTerraform(this._rootFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_pass: {
        value: cdktf.stringToHclTerraform(this._vaultPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_path: {
        value: cdktf.stringToHclTerraform(this._vaultPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
