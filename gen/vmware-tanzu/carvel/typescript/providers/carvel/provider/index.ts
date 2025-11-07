// https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CarvelProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#alias CarvelProvider#alias}
  */
  readonly alias?: string;
  /**
  * kapp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#kapp CarvelProvider#kapp}
  */
  readonly kapp?: CarvelProviderKapp;
}
export interface CarvelProviderKappKubeconfig {
  /**
  * CA certificate in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#ca_cert CarvelProvider#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Client certificate in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#client_cert CarvelProvider#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Client key in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#client_key CarvelProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * Use particular context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#context CarvelProvider#context}
  */
  readonly context?: string;
  /**
  * Pull configuration from environment (typically found in ~/.kube/config or via $KUBECONFIG)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#from_env CarvelProvider#from_env}
  */
  readonly fromEnv?: boolean | cdktf.IResolvable;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#password CarvelProvider#password}
  */
  readonly password?: string;
  /**
  * Address of API server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#server CarvelProvider#server}
  */
  readonly server?: string;
  /**
  * Auth token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#token CarvelProvider#token}
  */
  readonly token?: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#username CarvelProvider#username}
  */
  readonly username?: string;
}

export function carvelProviderKappKubeconfigToTerraform(struct?: CarvelProviderKappKubeconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    context: cdktf.stringToTerraform(struct!.context),
    from_env: cdktf.booleanToTerraform(struct!.fromEnv),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function carvelProviderKappKubeconfigToHclTerraform(struct?: CarvelProviderKappKubeconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_env: {
      value: cdktf.booleanToHclTerraform(struct!.fromEnv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
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

export interface CarvelProviderKapp {
  /**
  * Generate diff and write them to a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#diff_output_file CarvelProvider#diff_output_file}
  */
  readonly diffOutputFile?: string;
  /**
  * kubeconfig as YAML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#kubeconfig_yaml CarvelProvider#kubeconfig_yaml}
  */
  readonly kubeconfigYaml?: string;
  /**
  * kubeconfig block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#kubeconfig CarvelProvider#kubeconfig}
  */
  readonly kubeconfig?: CarvelProviderKappKubeconfig;
}

export function carvelProviderKappToTerraform(struct?: CarvelProviderKapp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    diff_output_file: cdktf.stringToTerraform(struct!.diffOutputFile),
    kubeconfig_yaml: cdktf.stringToTerraform(struct!.kubeconfigYaml),
    kubeconfig: carvelProviderKappKubeconfigToTerraform(struct!.kubeconfig),
  }
}


export function carvelProviderKappToHclTerraform(struct?: CarvelProviderKapp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    diff_output_file: {
      value: cdktf.stringToHclTerraform(struct!.diffOutputFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig_yaml: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfigYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: carvelProviderKappKubeconfigToHclTerraform(struct!.kubeconfig),
      isBlock: true,
      type: "list",
      storageClassType: "CarvelProviderKappKubeconfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs carvel}
*/
export class CarvelProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "carvel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CarvelProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CarvelProvider to import
  * @param importFromId The id of the existing CarvelProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CarvelProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "carvel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs carvel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CarvelProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CarvelProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'carvel',
      terraformGeneratorMetadata: {
        providerName: 'carvel',
        providerVersion: '0.11.0'
      },
      terraformProviderSource: 'vmware-tanzu/carvel'
    });
    this._alias = config.alias;
    this._kapp = config.kapp;
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

  // kapp - computed: false, optional: true, required: false
  private _kapp?: CarvelProviderKapp; 
  public get kapp() {
    return this._kapp;
  }
  public set kapp(value: CarvelProviderKapp | undefined) {
    this._kapp = value;
  }
  public resetKapp() {
    this._kapp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kappInput() {
    return this._kapp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      kapp: carvelProviderKappToTerraform(this._kapp),
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
      kapp: {
        value: carvelProviderKappToHclTerraform(this._kapp),
        isBlock: true,
        type: "list",
        storageClassType: "CarvelProviderKappList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
