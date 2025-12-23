// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/remote_exec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteExecConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that represents a script body to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/remote_exec#content RemoteExec#content}
  */
  readonly content?: string;
  /**
  * A map of key/value pairs to set as environment variable before running the commands or scripts. These values will be exported as environment variables when the commands are executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/remote_exec#environment RemoteExec#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * An array of commands to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/remote_exec#inline RemoteExec#inline}
  */
  readonly inline?: string[];
  /**
  * An array of paths to scripts to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/remote_exec#scripts RemoteExec#scripts}
  */
  readonly scripts?: string[];
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/remote_exec#transport RemoteExec#transport}
  */
  readonly transport?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/remote_exec enos_remote_exec}
*/
export class RemoteExec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_remote_exec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteExec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteExec to import
  * @param importFromId The id of the existing RemoteExec that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/remote_exec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteExec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_remote_exec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/remote_exec enos_remote_exec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteExecConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RemoteExecConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'enos_remote_exec',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._environment = config.environment;
    this._inline = config.inline;
    this._scripts = config.scripts;
    this._transport = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inline - computed: false, optional: true, required: false
  private _inline?: string[]; 
  public get inline() {
    return this.getListAttribute('inline');
  }
  public set inline(value: string[]) {
    this._inline = value;
  }
  public resetInline() {
    this._inline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline;
  }

  // scripts - computed: false, optional: true, required: false
  private _scripts?: string[]; 
  public get scripts() {
    return this.getListAttribute('scripts');
  }
  public set scripts(value: string[]) {
    this._scripts = value;
  }
  public resetScripts() {
    this._scripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptsInput() {
    return this._scripts;
  }

  // stderr - computed: true, optional: false, required: false
  public get stderr() {
    return this.getStringAttribute('stderr');
  }

  // stdout - computed: true, optional: false, required: false
  public get stdout() {
    return this.getStringAttribute('stdout');
  }

  // sum - computed: true, optional: false, required: false
  public get sum() {
    return this.getStringAttribute('sum');
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: { [key: string]: any }; 
  public get transport() {
    return this.getAnyMapAttribute('transport');
  }
  public set transport(value: { [key: string]: any }) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      inline: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inline),
      scripts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scripts),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      inline: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inline),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scripts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scripts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transport: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._transport),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
