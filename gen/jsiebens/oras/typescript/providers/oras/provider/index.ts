// https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrasProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs#alias OrasProvider#alias}
  */
  readonly alias?: string;
  /**
  * registry_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs#registry_auth OrasProvider#registry_auth}
  */
  readonly registryAuth?: OrasProviderRegistryAuth[] | cdktf.IResolvable;
}
export interface OrasProviderRegistryAuth {
  /**
  * Address of the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs#address OrasProvider#address}
  */
  readonly address: string;
  /**
  * Path to docker json file for registry auth. Defaults to `~/.docker/config.json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs#config_file OrasProvider#config_file}
  */
  readonly configFile?: string;
  /**
  * Plain content of the docker json file for registry auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs#config_file_content OrasProvider#config_file_content}
  */
  readonly configFileContent?: string;
  /**
  * Password for the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs#password OrasProvider#password}
  */
  readonly password?: string;
  /**
  * Username for the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs#username OrasProvider#username}
  */
  readonly username?: string;
}

export function orasProviderRegistryAuthToTerraform(struct?: OrasProviderRegistryAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    config_file: cdktf.stringToTerraform(struct!.configFile),
    config_file_content: cdktf.stringToTerraform(struct!.configFileContent),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function orasProviderRegistryAuthToHclTerraform(struct?: OrasProviderRegistryAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_file: {
      value: cdktf.stringToHclTerraform(struct!.configFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_file_content: {
      value: cdktf.stringToHclTerraform(struct!.configFileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs oras}
*/
export class OrasProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oras";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrasProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrasProvider to import
  * @param importFromId The id of the existing OrasProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrasProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oras", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jsiebens/oras/0.1.0/docs oras} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrasProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrasProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oras',
      terraformGeneratorMetadata: {
        providerName: 'oras',
        providerVersion: '0.1.0'
      },
      terraformProviderSource: 'jsiebens/oras'
    });
    this._alias = config.alias;
    this._registryAuth = config.registryAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // registry_auth - computed: false, optional: true, required: false
  private _registryAuth?: OrasProviderRegistryAuth[] | cdktf.IResolvable; 
  public get registryAuth() {
    return this._registryAuth;
  }
  public set registryAuth(value: OrasProviderRegistryAuth[] | cdktf.IResolvable | undefined) {
    this._registryAuth = value;
  }
  public resetRegistryAuth() {
    this._registryAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryAuthInput() {
    return this._registryAuth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      registry_auth: cdktf.listMapper(orasProviderRegistryAuthToTerraform, true)(this._registryAuth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_auth: {
        value: cdktf.listMapperHcl(orasProviderRegistryAuthToHclTerraform, true)(this._registryAuth),
        isBlock: true,
        type: "set",
        storageClassType: "OrasProviderRegistryAuthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
