// https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/forwarding__options_sampling_family_inet_output_file_filename
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingOptionsSamplingFamilyInetOutputFileFilenameConfig extends cdktf.TerraformMetaArguments {
  /**
  * xpath is: config.Groups.V_file. Name of file to contain sampled packet dumps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/forwarding__options_sampling_family_inet_output_file_filename#filename ForwardingOptionsSamplingFamilyInetOutputFileFilename#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/forwarding__options_sampling_family_inet_output_file_filename#id ForwardingOptionsSamplingFamilyInetOutputFileFilename#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/forwarding__options_sampling_family_inet_output_file_filename#resource_name ForwardingOptionsSamplingFamilyInetOutputFileFilename#resource_name}
  */
  readonly resourceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/forwarding__options_sampling_family_inet_output_file_filename junos-vsrx_Forwarding__OptionsSamplingFamilyInetOutputFileFilename}
*/
export class ForwardingOptionsSamplingFamilyInetOutputFileFilename extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos-vsrx_Forwarding__OptionsSamplingFamilyInetOutputFileFilename";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardingOptionsSamplingFamilyInetOutputFileFilename resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardingOptionsSamplingFamilyInetOutputFileFilename to import
  * @param importFromId The id of the existing ForwardingOptionsSamplingFamilyInetOutputFileFilename that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/forwarding__options_sampling_family_inet_output_file_filename#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardingOptionsSamplingFamilyInetOutputFileFilename to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos-vsrx_Forwarding__OptionsSamplingFamilyInetOutputFileFilename", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/forwarding__options_sampling_family_inet_output_file_filename junos-vsrx_Forwarding__OptionsSamplingFamilyInetOutputFileFilename} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingOptionsSamplingFamilyInetOutputFileFilenameConfig
  */
  public constructor(scope: Construct, id: string, config: ForwardingOptionsSamplingFamilyInetOutputFileFilenameConfig) {
    super(scope, id, {
      terraformResourceType: 'junos-vsrx_Forwarding__OptionsSamplingFamilyInetOutputFileFilename',
      terraformGeneratorMetadata: {
        providerName: 'junos-vsrx',
        providerVersion: '20.32.106'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filename = config.filename;
    this._id = config.id;
    this._resourceName = config.resourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filename: cdktf.stringToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
      resource_name: cdktf.stringToTerraform(this._resourceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
