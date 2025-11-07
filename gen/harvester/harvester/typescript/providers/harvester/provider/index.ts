// https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HarvesterProviderConfig {
  /**
  * bootstrap harvester server, it will write content to kubeconfig file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs#bootstrap HarvesterProvider#bootstrap}
  */
  readonly bootstrap?: boolean | cdktf.IResolvable;
  /**
  * kubeconfig file path or content of the kubeconfig file as base64 encoded string, users can use the KUBECONFIG environment variable instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs#kubeconfig HarvesterProvider#kubeconfig}
  */
  readonly kubeconfig?: string;
  /**
  * name of the kubernetes context to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs#kubecontext HarvesterProvider#kubecontext}
  */
  readonly kubecontext?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs#alias HarvesterProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs harvester}
*/
export class HarvesterProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harvester";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HarvesterProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HarvesterProvider to import
  * @param importFromId The id of the existing HarvesterProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HarvesterProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harvester", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs harvester} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HarvesterProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HarvesterProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'harvester',
      terraformGeneratorMetadata: {
        providerName: 'harvester',
        providerVersion: '1.6.0'
      },
      terraformProviderSource: 'harvester/harvester'
    });
    this._bootstrap = config.bootstrap;
    this._kubeconfig = config.kubeconfig;
    this._kubecontext = config.kubecontext;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bootstrap - computed: false, optional: true, required: false
  private _bootstrap?: boolean | cdktf.IResolvable; 
  public get bootstrap() {
    return this._bootstrap;
  }
  public set bootstrap(value: boolean | cdktf.IResolvable | undefined) {
    this._bootstrap = value;
  }
  public resetBootstrap() {
    this._bootstrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap;
  }

  // kubeconfig - computed: false, optional: true, required: false
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this._kubeconfig;
  }
  public set kubeconfig(value: string | undefined) {
    this._kubeconfig = value;
  }
  public resetKubeconfig() {
    this._kubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }

  // kubecontext - computed: false, optional: true, required: false
  private _kubecontext?: string; 
  public get kubecontext() {
    return this._kubecontext;
  }
  public set kubecontext(value: string | undefined) {
    this._kubecontext = value;
  }
  public resetKubecontext() {
    this._kubecontext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubecontextInput() {
    return this._kubecontext;
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
      bootstrap: cdktf.booleanToTerraform(this._bootstrap),
      kubeconfig: cdktf.stringToTerraform(this._kubeconfig),
      kubecontext: cdktf.stringToTerraform(this._kubecontext),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bootstrap: {
        value: cdktf.booleanToHclTerraform(this._bootstrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubeconfig: {
        value: cdktf.stringToHclTerraform(this._kubeconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubecontext: {
        value: cdktf.stringToHclTerraform(this._kubecontext),
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
