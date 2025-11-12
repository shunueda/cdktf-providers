// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnosProviderConfig {
  /**
  * The root directory where failure diagnostics files (e.g. application log files) are saved.
  * If configured and the directory does not exist, it will be created.
  * If the directory is not configured, diagnostic files will not be saved locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs#debug_data_root_dir EnosProvider#debug_data_root_dir}
  */
  readonly debugDataRootDir?: string;
  /**
  * 
  * - `transport.ssh` (Object) the ssh transport configuration
  * - `transport.ssh.user` (String) the ssh login user|string
  * - `transport.ssh.host` (String) the remote host to access
  * - `transport.ssh.private_key` (String) the private key as a string
  * - `transport.ssh.private_key_path` (String) the path to a private key file
  * - `transport.ssh.passphrase` (String) a passphrase if the private key requires one
  * - `transport.ssh.passphrase_path` (String) a path to a file with the passphrase for the private key
  * - `transport.kubernetes` (Object) the kubernetes transport configuration
  * - `transport.kubernetes.kubeconfig_base64` (String) base64 encoded kubeconfig
  * - `transport.kubernetes.context_name` (String) the name of the kube context to access
  * - `transport.kubernetes.namespace` (String) the namespace of pod to access
  * - `transport.kubernetes.pod` (String) the name of the pod to access|string
  * - `transport.kubernetes.container` (String) the name of the container to access
  * - `transport.nomad` (Object) the nomad transport configuration
  * - `transport.nomad.host` (String) nomad server host, i.e. http://23.56.78.9:4646
  * - `transport.nomad.secret_id` (String) the nomad server secret for authenticated connections
  * - `transport.nomad.allocation_id` (String) the allocation id for the allocation to access
  * - `transport.nomad.task_name` (String) the name of the task within the allocation to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs#transport EnosProvider#transport}
  */
  readonly transport?: { [key: string]: any };
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs#alias EnosProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs enos}
*/
export class EnosProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnosProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnosProvider to import
  * @param importFromId The id of the existing EnosProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnosProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs enos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnosProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EnosProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'enos',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      terraformProviderSource: 'hashicorp-forge/enos'
    });
    this._debugDataRootDir = config.debugDataRootDir;
    this._transport = config.transport;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_data_root_dir - computed: false, optional: true, required: false
  private _debugDataRootDir?: string; 
  public get debugDataRootDir() {
    return this._debugDataRootDir;
  }
  public set debugDataRootDir(value: string | undefined) {
    this._debugDataRootDir = value;
  }
  public resetDebugDataRootDir() {
    this._debugDataRootDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDataRootDirInput() {
    return this._debugDataRootDir;
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: { [key: string]: any }; 
  public get transport() {
    return this._transport;
  }
  public set transport(value: { [key: string]: any } | undefined) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
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
      debug_data_root_dir: cdktf.stringToTerraform(this._debugDataRootDir),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug_data_root_dir: {
        value: cdktf.stringToHclTerraform(this._debugDataRootDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._transport),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
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
