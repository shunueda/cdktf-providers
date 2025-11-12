// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, new version of this artifact will be automatically installed. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact#auto_update MdmArtifact#auto_update}
  */
  readonly autoUpdate?: boolean | cdktf.IResolvable;
  /**
  * Channel of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact#channel MdmArtifact#channel}
  */
  readonly channel: string;
  /**
  * If `true`, this artifact will be installed during the setup assistant. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact#install_during_setup_assistant MdmArtifact#install_during_setup_assistant}
  */
  readonly installDuringSetupAssistant?: boolean | cdktf.IResolvable;
  /**
  * Name of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact#name MdmArtifact#name}
  */
  readonly name: string;
  /**
  * Platforms of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact#platforms MdmArtifact#platforms}
  */
  readonly platforms: string[];
  /**
  * In days, the time interval after which the artifact will be reinstalled. If `0`, the artifact will not be reinstalled. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact#reinstall_interval MdmArtifact#reinstall_interval}
  */
  readonly reinstallInterval?: number;
  /**
  * Possible values: `No`, `Major`, `Minor`, `Patch`. Defaults to `No`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact#reinstall_on_os_update MdmArtifact#reinstall_on_os_update}
  */
  readonly reinstallOnOsUpdate?: string;
  /**
  * `ID`s of the artifacts required by this artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact#requires MdmArtifact#requires}
  */
  readonly requires?: string[];
  /**
  * Type of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact#type MdmArtifact#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact zentral_mdm_artifact}
*/
export class MdmArtifact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_artifact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmArtifact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmArtifact to import
  * @param importFromId The id of the existing MdmArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmArtifact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_artifact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_artifact zentral_mdm_artifact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: MdmArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_artifact',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64',
        providerVersionConstraint: '0.1.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoUpdate = config.autoUpdate;
    this._channel = config.channel;
    this._installDuringSetupAssistant = config.installDuringSetupAssistant;
    this._name = config.name;
    this._platforms = config.platforms;
    this._reinstallInterval = config.reinstallInterval;
    this._reinstallOnOsUpdate = config.reinstallOnOsUpdate;
    this._requires = config.requires;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_update - computed: true, optional: true, required: false
  private _autoUpdate?: boolean | cdktf.IResolvable; 
  public get autoUpdate() {
    return this.getBooleanAttribute('auto_update');
  }
  public set autoUpdate(value: boolean | cdktf.IResolvable) {
    this._autoUpdate = value;
  }
  public resetAutoUpdate() {
    this._autoUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // install_during_setup_assistant - computed: true, optional: true, required: false
  private _installDuringSetupAssistant?: boolean | cdktf.IResolvable; 
  public get installDuringSetupAssistant() {
    return this.getBooleanAttribute('install_during_setup_assistant');
  }
  public set installDuringSetupAssistant(value: boolean | cdktf.IResolvable) {
    this._installDuringSetupAssistant = value;
  }
  public resetInstallDuringSetupAssistant() {
    this._installDuringSetupAssistant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installDuringSetupAssistantInput() {
    return this._installDuringSetupAssistant;
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

  // platforms - computed: false, optional: false, required: true
  private _platforms?: string[]; 
  public get platforms() {
    return cdktf.Fn.tolist(this.getListAttribute('platforms'));
  }
  public set platforms(value: string[]) {
    this._platforms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms;
  }

  // reinstall_interval - computed: true, optional: true, required: false
  private _reinstallInterval?: number; 
  public get reinstallInterval() {
    return this.getNumberAttribute('reinstall_interval');
  }
  public set reinstallInterval(value: number) {
    this._reinstallInterval = value;
  }
  public resetReinstallInterval() {
    this._reinstallInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reinstallIntervalInput() {
    return this._reinstallInterval;
  }

  // reinstall_on_os_update - computed: true, optional: true, required: false
  private _reinstallOnOsUpdate?: string; 
  public get reinstallOnOsUpdate() {
    return this.getStringAttribute('reinstall_on_os_update');
  }
  public set reinstallOnOsUpdate(value: string) {
    this._reinstallOnOsUpdate = value;
  }
  public resetReinstallOnOsUpdate() {
    this._reinstallOnOsUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reinstallOnOsUpdateInput() {
    return this._reinstallOnOsUpdate;
  }

  // requires - computed: true, optional: true, required: false
  private _requires?: string[]; 
  public get requires() {
    return cdktf.Fn.tolist(this.getListAttribute('requires'));
  }
  public set requires(value: string[]) {
    this._requires = value;
  }
  public resetRequires() {
    this._requires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresInput() {
    return this._requires;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_update: cdktf.booleanToTerraform(this._autoUpdate),
      channel: cdktf.stringToTerraform(this._channel),
      install_during_setup_assistant: cdktf.booleanToTerraform(this._installDuringSetupAssistant),
      name: cdktf.stringToTerraform(this._name),
      platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platforms),
      reinstall_interval: cdktf.numberToTerraform(this._reinstallInterval),
      reinstall_on_os_update: cdktf.stringToTerraform(this._reinstallOnOsUpdate),
      requires: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requires),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_update: {
        value: cdktf.booleanToHclTerraform(this._autoUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_during_setup_assistant: {
        value: cdktf.booleanToHclTerraform(this._installDuringSetupAssistant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platforms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platforms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      reinstall_interval: {
        value: cdktf.numberToHclTerraform(this._reinstallInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reinstall_on_os_update: {
        value: cdktf.stringToHclTerraform(this._reinstallOnOsUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requires: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requires),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
