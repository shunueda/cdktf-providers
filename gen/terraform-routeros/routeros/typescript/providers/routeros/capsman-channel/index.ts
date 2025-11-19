// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapsmanChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#___path___ CapsmanChannel#___path___}
  */
  readonly path?: string;
  /**
  * Define operational radio frequency band and mode taken from hardware capability of wireless card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#band CapsmanChannel#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#comment CapsmanChannel#comment}
  */
  readonly comment?: string;
  /**
  * Control channel width.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#control_channel_width CapsmanChannel#control_channel_width}
  */
  readonly controlChannelWidth?: string;
  /**
  * Extension channel configuration. (E.g. Ce = extension channel is above Control channel, eC = extension channel is below Control channel)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#extension_channel CapsmanChannel#extension_channel}
  */
  readonly extensionChannel?: string;
  /**
  * Channel frequency value in MHz on which AP will operate. If left blank, CAPsMAN will automatically determine the best frequency that is least occupied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#frequency CapsmanChannel#frequency}
  */
  readonly frequency?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#id CapsmanChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#name CapsmanChannel#name}
  */
  readonly name: string;
  /**
  * The interval after which the least occupied frequency is chosen, can be defined as a random interval, ex. as '30m..60m'. Works only if channel.frequency is left blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#reselect_interval CapsmanChannel#reselect_interval}
  */
  readonly reselectInterval?: string;
  /**
  * If channel frequency is chosen automatically and channel.reselect-interval is used, then saves the last picked frequency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#save_selected CapsmanChannel#save_selected}
  */
  readonly saveSelected?: boolean | cdktf.IResolvable;
  /**
  * Specifies the second frequency that will be used for 80+80MHz configuration. Set it to Disabled in order to disable 80+80MHz capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#secondary_frequency CapsmanChannel#secondary_frequency}
  */
  readonly secondaryFrequency?: string[];
  /**
  * If channel.frequency is left blank, the selection will skip DFS channels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#skip_dfs_channels CapsmanChannel#skip_dfs_channels}
  */
  readonly skipDfsChannels?: boolean | cdktf.IResolvable;
  /**
  * TX  Power for CAP interface (for the whole interface not for individual  chains) in dBm. It is not possible to set higher than allowed by country  regulations or interface. By default max allowed by country or  interface is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#tx_power CapsmanChannel#tx_power}
  */
  readonly txPower?: number;
  /**
  * Channel Width in MHz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#width CapsmanChannel#width}
  */
  readonly width?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel routeros_capsman_channel}
*/
export class CapsmanChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_capsman_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapsmanChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapsmanChannel to import
  * @param importFromId The id of the existing CapsmanChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapsmanChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_capsman_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/capsman_channel routeros_capsman_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapsmanChannelConfig
  */
  public constructor(scope: Construct, id: string, config: CapsmanChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_capsman_channel',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._band = config.band;
    this._comment = config.comment;
    this._controlChannelWidth = config.controlChannelWidth;
    this._extensionChannel = config.extensionChannel;
    this._frequency = config.frequency;
    this._id = config.id;
    this._name = config.name;
    this._reselectInterval = config.reselectInterval;
    this._saveSelected = config.saveSelected;
    this._secondaryFrequency = config.secondaryFrequency;
    this._skipDfsChannels = config.skipDfsChannels;
    this._txPower = config.txPower;
    this._width = config.width;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // band - computed: false, optional: true, required: false
  private _band?: string; 
  public get band() {
    return this.getStringAttribute('band');
  }
  public set band(value: string) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // control_channel_width - computed: false, optional: true, required: false
  private _controlChannelWidth?: string; 
  public get controlChannelWidth() {
    return this.getStringAttribute('control_channel_width');
  }
  public set controlChannelWidth(value: string) {
    this._controlChannelWidth = value;
  }
  public resetControlChannelWidth() {
    this._controlChannelWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlChannelWidthInput() {
    return this._controlChannelWidth;
  }

  // extension_channel - computed: false, optional: true, required: false
  private _extensionChannel?: string; 
  public get extensionChannel() {
    return this.getStringAttribute('extension_channel');
  }
  public set extensionChannel(value: string) {
    this._extensionChannel = value;
  }
  public resetExtensionChannel() {
    this._extensionChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionChannelInput() {
    return this._extensionChannel;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: number[]; 
  public get frequency() {
    return this.getNumberListAttribute('frequency');
  }
  public set frequency(value: number[]) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // reselect_interval - computed: false, optional: true, required: false
  private _reselectInterval?: string; 
  public get reselectInterval() {
    return this.getStringAttribute('reselect_interval');
  }
  public set reselectInterval(value: string) {
    this._reselectInterval = value;
  }
  public resetReselectInterval() {
    this._reselectInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reselectIntervalInput() {
    return this._reselectInterval;
  }

  // save_selected - computed: false, optional: true, required: false
  private _saveSelected?: boolean | cdktf.IResolvable; 
  public get saveSelected() {
    return this.getBooleanAttribute('save_selected');
  }
  public set saveSelected(value: boolean | cdktf.IResolvable) {
    this._saveSelected = value;
  }
  public resetSaveSelected() {
    this._saveSelected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveSelectedInput() {
    return this._saveSelected;
  }

  // secondary_frequency - computed: false, optional: true, required: false
  private _secondaryFrequency?: string[]; 
  public get secondaryFrequency() {
    return this.getListAttribute('secondary_frequency');
  }
  public set secondaryFrequency(value: string[]) {
    this._secondaryFrequency = value;
  }
  public resetSecondaryFrequency() {
    this._secondaryFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryFrequencyInput() {
    return this._secondaryFrequency;
  }

  // skip_dfs_channels - computed: false, optional: true, required: false
  private _skipDfsChannels?: boolean | cdktf.IResolvable; 
  public get skipDfsChannels() {
    return this.getBooleanAttribute('skip_dfs_channels');
  }
  public set skipDfsChannels(value: boolean | cdktf.IResolvable) {
    this._skipDfsChannels = value;
  }
  public resetSkipDfsChannels() {
    this._skipDfsChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDfsChannelsInput() {
    return this._skipDfsChannels;
  }

  // tx_power - computed: false, optional: true, required: false
  private _txPower?: number; 
  public get txPower() {
    return this.getNumberAttribute('tx_power');
  }
  public set txPower(value: number) {
    this._txPower = value;
  }
  public resetTxPower() {
    this._txPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txPowerInput() {
    return this._txPower;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      band: cdktf.stringToTerraform(this._band),
      comment: cdktf.stringToTerraform(this._comment),
      control_channel_width: cdktf.stringToTerraform(this._controlChannelWidth),
      extension_channel: cdktf.stringToTerraform(this._extensionChannel),
      frequency: cdktf.listMapper(cdktf.numberToTerraform, false)(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reselect_interval: cdktf.stringToTerraform(this._reselectInterval),
      save_selected: cdktf.booleanToTerraform(this._saveSelected),
      secondary_frequency: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryFrequency),
      skip_dfs_channels: cdktf.booleanToTerraform(this._skipDfsChannels),
      tx_power: cdktf.numberToTerraform(this._txPower),
      width: cdktf.stringToTerraform(this._width),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      band: {
        value: cdktf.stringToHclTerraform(this._band),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_channel_width: {
        value: cdktf.stringToHclTerraform(this._controlChannelWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_channel: {
        value: cdktf.stringToHclTerraform(this._extensionChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._frequency),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      reselect_interval: {
        value: cdktf.stringToHclTerraform(this._reselectInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_selected: {
        value: cdktf.booleanToHclTerraform(this._saveSelected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secondary_frequency: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryFrequency),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_dfs_channels: {
        value: cdktf.booleanToHclTerraform(this._skipDfsChannels),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tx_power: {
        value: cdktf.numberToHclTerraform(this._txPower),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      width: {
        value: cdktf.stringToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
