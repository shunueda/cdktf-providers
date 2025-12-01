// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#___path___ WifiChannel#___path___}
  */
  readonly path?: string;
  /**
  * Frequency band and wireless standard that will be used by the AP. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#band WifiChannel#band}
  */
  readonly band?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#comment WifiChannel#comment}
  */
  readonly comment?: string;
  /**
  * Whether to assign lower priority to channels with a control frequency of 5720 or 5825-5885 MHz. These channels are unsupported by some client devices, making their automatic selection undesirable. Defaults to `yes` in ETSI regulatory domains, elsewhere to `no`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#deprioritize_unii_3_4 WifiChannel#deprioritize_unii_3_4}
  */
  readonly deprioritizeUnii34?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#disabled WifiChannel#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Channel frequency value or range in MHz on which AP or station will operate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#frequency WifiChannel#frequency}
  */
  readonly frequency?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#id WifiChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#name WifiChannel#name}
  */
  readonly name: string;
  /**
  * An option that specifies when the interface should rescan channel availability and select the most appropriate one to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#reselect_interval WifiChannel#reselect_interval}
  */
  readonly reselectInterval?: string;
  /**
  * Specifies the clock time when the interface should run "rescan channel availability" and select the most appropriate one to use. Specifying the clock time will allow the system to select this time dynamically and randomly. This helps to avoid a situation when many APs at the same time scan the network, select the same channel, and prefer to use it at the same time. reselect-time uses a background scan. 
  * The reselect process will choose the most suitable channel considering the number of networks in the channel, channel usage, and overlap with networks in adjacent channels. It can be used with a list of frequencies defined, or with frequency not set - using all supported frequencies.
  * Example:
  * 
  *     - 01:00..01:30 → Would set the rescan of channels to run every night, once, randomly, between 01:00 AM to 01:30 AM, system clock time.
  *     - 14:00..14:30 → Would set the rescan of channels to run every day (after midday), once, randomly between 14:00:00 to 14:30:00 (or 2 PM to 2:30 PM), system clock time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#reselect_time WifiChannel#reselect_time}
  */
  readonly reselectTime?: string;
  /**
  * Specifies the second frequency that will be used for 80+80MHz configuration. Set it to `disabled` in order to disable 80+80MHz capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#secondary_frequency WifiChannel#secondary_frequency}
  */
  readonly secondaryFrequency?: string[];
  /**
  * An option to avoid using channels on which channel availability check (listening for the presence of radar signals) is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#skip_dfs_channels WifiChannel#skip_dfs_channels}
  */
  readonly skipDfsChannels?: string;
  /**
  * Channel width.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#width WifiChannel#width}
  */
  readonly width?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel routeros_wifi_channel}
*/
export class WifiChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WifiChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WifiChannel to import
  * @param importFromId The id of the existing WifiChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WifiChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_channel routeros_wifi_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiChannelConfig
  */
  public constructor(scope: Construct, id: string, config: WifiChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_channel',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._deprioritizeUnii34 = config.deprioritizeUnii34;
    this._disabled = config.disabled;
    this._frequency = config.frequency;
    this._id = config.id;
    this._name = config.name;
    this._reselectInterval = config.reselectInterval;
    this._reselectTime = config.reselectTime;
    this._secondaryFrequency = config.secondaryFrequency;
    this._skipDfsChannels = config.skipDfsChannels;
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

  // deprioritize_unii_3_4 - computed: false, optional: true, required: false
  private _deprioritizeUnii34?: boolean | cdktf.IResolvable; 
  public get deprioritizeUnii34() {
    return this.getBooleanAttribute('deprioritize_unii_3_4');
  }
  public set deprioritizeUnii34(value: boolean | cdktf.IResolvable) {
    this._deprioritizeUnii34 = value;
  }
  public resetDeprioritizeUnii34() {
    this._deprioritizeUnii34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprioritizeUnii34Input() {
    return this._deprioritizeUnii34;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string[]; 
  public get frequency() {
    return this.getListAttribute('frequency');
  }
  public set frequency(value: string[]) {
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

  // reselect_time - computed: false, optional: true, required: false
  private _reselectTime?: string; 
  public get reselectTime() {
    return this.getStringAttribute('reselect_time');
  }
  public set reselectTime(value: string) {
    this._reselectTime = value;
  }
  public resetReselectTime() {
    this._reselectTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reselectTimeInput() {
    return this._reselectTime;
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
  private _skipDfsChannels?: string; 
  public get skipDfsChannels() {
    return this.getStringAttribute('skip_dfs_channels');
  }
  public set skipDfsChannels(value: string) {
    this._skipDfsChannels = value;
  }
  public resetSkipDfsChannels() {
    this._skipDfsChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDfsChannelsInput() {
    return this._skipDfsChannels;
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
      deprioritize_unii_3_4: cdktf.booleanToTerraform(this._deprioritizeUnii34),
      disabled: cdktf.booleanToTerraform(this._disabled),
      frequency: cdktf.listMapper(cdktf.stringToTerraform, false)(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reselect_interval: cdktf.stringToTerraform(this._reselectInterval),
      reselect_time: cdktf.stringToTerraform(this._reselectTime),
      secondary_frequency: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryFrequency),
      skip_dfs_channels: cdktf.stringToTerraform(this._skipDfsChannels),
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
      deprioritize_unii_3_4: {
        value: cdktf.booleanToHclTerraform(this._deprioritizeUnii34),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._frequency),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      reselect_time: {
        value: cdktf.stringToHclTerraform(this._reselectTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_frequency: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryFrequency),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_dfs_channels: {
        value: cdktf.stringToHclTerraform(this._skipDfsChannels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
