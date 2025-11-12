// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure the destination file mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file#chmod File#chmod}
  */
  readonly chmod?: string;
  /**
  * Configure the destination file owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file#chown File#chown}
  */
  readonly chown?: string;
  /**
  * If the file does not exist locally you can provide the content as a string value and it will be written to the remote destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file#content File#content}
  */
  readonly content?: string;
  /**
  * The file path on the remote host you wish to copy the file to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file#destination File#destination}
  */
  readonly destination: string;
  /**
  * The file path to the source file to copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file#source File#source}
  */
  readonly source?: string;
  /**
  * The location on disk to use for temporary files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file#tmp_dir File#tmp_dir}
  */
  readonly tmpDir?: string;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file#transport File#transport}
  */
  readonly transport?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file enos_file}
*/
export class File extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the File to import
  * @param importFromId The id of the existing File that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the File to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/file enos_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileConfig
  */
  public constructor(scope: Construct, id: string, config: FileConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_file',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chmod = config.chmod;
    this._chown = config.chown;
    this._content = config.content;
    this._destination = config.destination;
    this._source = config.source;
    this._tmpDir = config.tmpDir;
    this._transport = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chmod - computed: false, optional: true, required: false
  private _chmod?: string; 
  public get chmod() {
    return this.getStringAttribute('chmod');
  }
  public set chmod(value: string) {
    this._chmod = value;
  }
  public resetChmod() {
    this._chmod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chmodInput() {
    return this._chmod;
  }

  // chown - computed: false, optional: true, required: false
  private _chown?: string; 
  public get chown() {
    return this.getStringAttribute('chown');
  }
  public set chown(value: string) {
    this._chown = value;
  }
  public resetChown() {
    this._chown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chownInput() {
    return this._chown;
  }

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

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sum - computed: true, optional: false, required: false
  public get sum() {
    return this.getStringAttribute('sum');
  }

  // tmp_dir - computed: false, optional: true, required: false
  private _tmpDir?: string; 
  public get tmpDir() {
    return this.getStringAttribute('tmp_dir');
  }
  public set tmpDir(value: string) {
    this._tmpDir = value;
  }
  public resetTmpDir() {
    this._tmpDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpDirInput() {
    return this._tmpDir;
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
      chmod: cdktf.stringToTerraform(this._chmod),
      chown: cdktf.stringToTerraform(this._chown),
      content: cdktf.stringToTerraform(this._content),
      destination: cdktf.stringToTerraform(this._destination),
      source: cdktf.stringToTerraform(this._source),
      tmp_dir: cdktf.stringToTerraform(this._tmpDir),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chmod: {
        value: cdktf.stringToHclTerraform(this._chmod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chown: {
        value: cdktf.stringToHclTerraform(this._chown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tmp_dir: {
        value: cdktf.stringToHclTerraform(this._tmpDir),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
