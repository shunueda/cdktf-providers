// https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to a user-data cloud-init configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/resources/instance#cloudinit_file Instance#cloudinit_file}
  */
  readonly cloudinitFile?: string;
  /**
  * Number of CPUs to allocate. Minimum: 1, default: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/resources/instance#cpus Instance#cpus}
  */
  readonly cpus?: number;
  /**
  * Disk space to allocate. Positive integers, in KiB, MiB, GiB or TiB suffix. Minimum: 512MiB, default: 5GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/resources/instance#disk Instance#disk}
  */
  readonly disk?: string;
  /**
  * Optional image to launch. If omitted, then the default Ubuntu LTS will be used. <remote> can be either ‘release’ or ‘daily‘. If <remote> is omitted, ‘release’ will be used. <image> can be a partial image hash or an Ubuntu release version, codename or alias. <url> is a custom image URL that is in http://, https://, or file:// format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/resources/instance#image Instance#image}
  */
  readonly image?: string;
  /**
  * Amount of memory to allocate. Positive integers, in KiB, MiB, GiB or TiB suffix. Minimum: 128MiB, default: 1GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/resources/instance#memory Instance#memory}
  */
  readonly memory?: string;
  /**
  * Name for the instance. If it is 'primary' (the configured primary instance name), the user's home directory is mounted inside the newly launched instance, in 'Home'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/resources/instance#name Instance#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/resources/instance multipass_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "multipass_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "multipass_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/larstobi/multipass/1.4.2/docs/resources/instance multipass_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'multipass_instance',
      terraformGeneratorMetadata: {
        providerName: 'multipass',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudinitFile = config.cloudinitFile;
    this._cpus = config.cpus;
    this._disk = config.disk;
    this._image = config.image;
    this._memory = config.memory;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudinit_file - computed: false, optional: true, required: false
  private _cloudinitFile?: string; 
  public get cloudinitFile() {
    return this.getStringAttribute('cloudinit_file');
  }
  public set cloudinitFile(value: string) {
    this._cloudinitFile = value;
  }
  public resetCloudinitFile() {
    this._cloudinitFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudinitFileInput() {
    return this._cloudinitFile;
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // disk - computed: false, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudinit_file: cdktf.stringToTerraform(this._cloudinitFile),
      cpus: cdktf.numberToTerraform(this._cpus),
      disk: cdktf.stringToTerraform(this._disk),
      image: cdktf.stringToTerraform(this._image),
      memory: cdktf.stringToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloudinit_file: {
        value: cdktf.stringToHclTerraform(this._cloudinitFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpus: {
        value: cdktf.numberToHclTerraform(this._cpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk: {
        value: cdktf.stringToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.stringToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
