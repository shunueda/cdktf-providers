// https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/promote_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PromoteVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/promote_version#application PromoteVersion#application}
  */
  readonly application: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/promote_version#catalog PromoteVersion#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/promote_version#channel PromoteVersion#channel}
  */
  readonly channel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/promote_version#id PromoteVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/promote_version#rollout_name PromoteVersion#rollout_name}
  */
  readonly rolloutName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/promote_version#version PromoteVersion#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/promote_version nirmata_promote_version}
*/
export class PromoteVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nirmata_promote_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PromoteVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PromoteVersion to import
  * @param importFromId The id of the existing PromoteVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/promote_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PromoteVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nirmata_promote_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/promote_version nirmata_promote_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PromoteVersionConfig
  */
  public constructor(scope: Construct, id: string, config: PromoteVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'nirmata_promote_version',
      terraformGeneratorMetadata: {
        providerName: 'nirmata',
        providerVersion: '1.1.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._application = config.application;
    this._catalog = config.catalog;
    this._channel = config.channel;
    this._id = config.id;
    this._rolloutName = config.rolloutName;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
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

  // rollout_name - computed: false, optional: false, required: true
  private _rolloutName?: string; 
  public get rolloutName() {
    return this.getStringAttribute('rollout_name');
  }
  public set rolloutName(value: string) {
    this._rolloutName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutNameInput() {
    return this._rolloutName;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      catalog: cdktf.stringToTerraform(this._catalog),
      channel: cdktf.stringToTerraform(this._channel),
      id: cdktf.stringToTerraform(this._id),
      rollout_name: cdktf.stringToTerraform(this._rolloutName),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
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
      rollout_name: {
        value: cdktf.stringToHclTerraform(this._rolloutName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
