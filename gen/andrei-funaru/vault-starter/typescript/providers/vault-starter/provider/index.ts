// https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultStarterProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs#request_headers VaultStarterProvider#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Vault instance URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs#vault_addr VaultStarterProvider#vault_addr}
  */
  readonly vaultAddr?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs#alias VaultStarterProvider#alias}
  */
  readonly alias?: string;
  /**
  * kube_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs#kube_config VaultStarterProvider#kube_config}
  */
  readonly kubeConfig?: VaultStarterProviderKubeConfig[] | cdktf.IResolvable;
}
export interface VaultStarterProviderKubeConfig {
  /**
  * Local forward port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs#local_port VaultStarterProvider#local_port}
  */
  readonly localPort?: string;
  /**
  * Kubernetes namespace where HC Vault is run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs#namespace VaultStarterProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Full path to a Kubernetes config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs#path VaultStarterProvider#path}
  */
  readonly path?: string;
  /**
  * Remote service port to forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs#remote_port VaultStarterProvider#remote_port}
  */
  readonly remotePort?: string;
  /**
  * Kubernetes service name of Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs#service VaultStarterProvider#service}
  */
  readonly service?: string;
}

export function vaultStarterProviderKubeConfigToTerraform(struct?: VaultStarterProviderKubeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_port: cdktf.stringToTerraform(struct!.localPort),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    remote_port: cdktf.stringToTerraform(struct!.remotePort),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function vaultStarterProviderKubeConfigToHclTerraform(struct?: VaultStarterProviderKubeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_port: {
      value: cdktf.stringToHclTerraform(struct!.localPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_port: {
      value: cdktf.stringToHclTerraform(struct!.remotePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs vault-starter}
*/
export class VaultStarterProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault-starter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultStarterProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultStarterProvider to import
  * @param importFromId The id of the existing VaultStarterProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultStarterProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault-starter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/andrei-funaru/vault-starter/0.2.4/docs vault-starter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultStarterProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VaultStarterProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault-starter',
      terraformGeneratorMetadata: {
        providerName: 'vault-starter',
        providerVersion: '0.2.4',
        providerVersionConstraint: '0.2.4'
      },
      terraformProviderSource: 'andrei-funaru/vault-starter'
    });
    this._requestHeaders = config.requestHeaders;
    this._vaultAddr = config.vaultAddr;
    this._alias = config.alias;
    this._kubeConfig = config.kubeConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public set requestHeaders(value: { [key: string]: string } | undefined) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // vault_addr - computed: false, optional: true, required: false
  private _vaultAddr?: string; 
  public get vaultAddr() {
    return this._vaultAddr;
  }
  public set vaultAddr(value: string | undefined) {
    this._vaultAddr = value;
  }
  public resetVaultAddr() {
    this._vaultAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAddrInput() {
    return this._vaultAddr;
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

  // kube_config - computed: false, optional: true, required: false
  private _kubeConfig?: VaultStarterProviderKubeConfig[] | cdktf.IResolvable; 
  public get kubeConfig() {
    return this._kubeConfig;
  }
  public set kubeConfig(value: VaultStarterProviderKubeConfig[] | cdktf.IResolvable | undefined) {
    this._kubeConfig = value;
  }
  public resetKubeConfig() {
    this._kubeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestHeaders),
      vault_addr: cdktf.stringToTerraform(this._vaultAddr),
      alias: cdktf.stringToTerraform(this._alias),
      kube_config: cdktf.listMapper(vaultStarterProviderKubeConfigToTerraform, true)(this._kubeConfig),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      request_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._requestHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vault_addr: {
        value: cdktf.stringToHclTerraform(this._vaultAddr),
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
      kube_config: {
        value: cdktf.listMapperHcl(vaultStarterProviderKubeConfigToHclTerraform, true)(this._kubeConfig),
        isBlock: true,
        type: "list",
        storageClassType: "VaultStarterProviderKubeConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
