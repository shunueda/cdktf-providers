// https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DockerlessProviderConfig {
  /**
  * A map of docker registries and their authentication credentials. Keys are registry endpoints (e.g., ECR proxy endpoint).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.2/docs#registry_auth DockerlessProvider#registry_auth}
  */
  readonly registryAuth?: { [key: string]: DockerlessProviderRegistryAuth } | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.2/docs#alias DockerlessProvider#alias}
  */
  readonly alias?: string;
}
export interface DockerlessProviderRegistryAuth {
  /**
  * Password for the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.2/docs#password DockerlessProvider#password}
  */
  readonly password?: string;
  /**
  * Username for the registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.2/docs#username DockerlessProvider#username}
  */
  readonly username?: string;
}

export function dockerlessProviderRegistryAuthToTerraform(struct?: DockerlessProviderRegistryAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dockerlessProviderRegistryAuthToHclTerraform(struct?: DockerlessProviderRegistryAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.2/docs dockerless}
*/
export class DockerlessProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dockerless";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DockerlessProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DockerlessProvider to import
  * @param importFromId The id of the existing DockerlessProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DockerlessProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dockerless", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/dockerless/0.1.2/docs dockerless} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DockerlessProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DockerlessProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dockerless',
      terraformGeneratorMetadata: {
        providerName: 'dockerless',
        providerVersion: '0.1.2',
        providerVersionConstraint: '0.1.2'
      },
      terraformProviderSource: 'nullstone-io/dockerless'
    });
    this._registryAuth = config.registryAuth;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // registry_auth - computed: false, optional: true, required: false
  private _registryAuth?: { [key: string]: DockerlessProviderRegistryAuth } | cdktf.IResolvable; 
  public get registryAuth() {
    return this._registryAuth;
  }
  public set registryAuth(value: { [key: string]: DockerlessProviderRegistryAuth } | cdktf.IResolvable | undefined) {
    this._registryAuth = value;
  }
  public resetRegistryAuth() {
    this._registryAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryAuthInput() {
    return this._registryAuth;
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
      registry_auth: cdktf.hashMapper(dockerlessProviderRegistryAuthToTerraform)(this._registryAuth),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      registry_auth: {
        value: cdktf.hashMapperHcl(dockerlessProviderRegistryAuthToHclTerraform)(this._registryAuth),
        isBlock: true,
        type: "map",
        storageClassType: "DockerlessProviderRegistryAuthMap",
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
