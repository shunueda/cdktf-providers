// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DelayProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bypass for higher custom format score flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#bypass_if_above_custom_format_score DelayProfile#bypass_if_above_custom_format_score}
  */
  readonly bypassIfAboveCustomFormatScore?: boolean | cdktf.IResolvable;
  /**
  * Bypass for highest quality flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#bypass_if_highest_quality DelayProfile#bypass_if_highest_quality}
  */
  readonly bypassIfHighestQuality?: boolean | cdktf.IResolvable;
  /**
  * Torrent allowed flag at least one of `enable_usenet` and `enable_torrent` must be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#enable_torrent DelayProfile#enable_torrent}
  */
  readonly enableTorrent?: boolean | cdktf.IResolvable;
  /**
  * Usenet allowed flag at least one of `enable_usenet` and `enable_torrent` must be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#enable_usenet DelayProfile#enable_usenet}
  */
  readonly enableUsenet?: boolean | cdktf.IResolvable;
  /**
  * Minimum custom format score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#minimum_custom_format_score DelayProfile#minimum_custom_format_score}
  */
  readonly minimumCustomFormatScore?: number;
  /**
  * Order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#order DelayProfile#order}
  */
  readonly order?: number;
  /**
  * Preferred protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#preferred_protocol DelayProfile#preferred_protocol}
  */
  readonly preferredProtocol?: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#tags DelayProfile#tags}
  */
  readonly tags: number[];
  /**
  * Torrent Delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#torrent_delay DelayProfile#torrent_delay}
  */
  readonly torrentDelay?: number;
  /**
  * Usenet delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#usenet_delay DelayProfile#usenet_delay}
  */
  readonly usenetDelay?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile sonarr_delay_profile}
*/
export class DelayProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_delay_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DelayProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DelayProfile to import
  * @param importFromId The id of the existing DelayProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DelayProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_delay_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/delay_profile sonarr_delay_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DelayProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DelayProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_delay_profile',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bypassIfAboveCustomFormatScore = config.bypassIfAboveCustomFormatScore;
    this._bypassIfHighestQuality = config.bypassIfHighestQuality;
    this._enableTorrent = config.enableTorrent;
    this._enableUsenet = config.enableUsenet;
    this._minimumCustomFormatScore = config.minimumCustomFormatScore;
    this._order = config.order;
    this._preferredProtocol = config.preferredProtocol;
    this._tags = config.tags;
    this._torrentDelay = config.torrentDelay;
    this._usenetDelay = config.usenetDelay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_if_above_custom_format_score - computed: true, optional: true, required: false
  private _bypassIfAboveCustomFormatScore?: boolean | cdktf.IResolvable; 
  public get bypassIfAboveCustomFormatScore() {
    return this.getBooleanAttribute('bypass_if_above_custom_format_score');
  }
  public set bypassIfAboveCustomFormatScore(value: boolean | cdktf.IResolvable) {
    this._bypassIfAboveCustomFormatScore = value;
  }
  public resetBypassIfAboveCustomFormatScore() {
    this._bypassIfAboveCustomFormatScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassIfAboveCustomFormatScoreInput() {
    return this._bypassIfAboveCustomFormatScore;
  }

  // bypass_if_highest_quality - computed: true, optional: true, required: false
  private _bypassIfHighestQuality?: boolean | cdktf.IResolvable; 
  public get bypassIfHighestQuality() {
    return this.getBooleanAttribute('bypass_if_highest_quality');
  }
  public set bypassIfHighestQuality(value: boolean | cdktf.IResolvable) {
    this._bypassIfHighestQuality = value;
  }
  public resetBypassIfHighestQuality() {
    this._bypassIfHighestQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassIfHighestQualityInput() {
    return this._bypassIfHighestQuality;
  }

  // enable_torrent - computed: true, optional: true, required: false
  private _enableTorrent?: boolean | cdktf.IResolvable; 
  public get enableTorrent() {
    return this.getBooleanAttribute('enable_torrent');
  }
  public set enableTorrent(value: boolean | cdktf.IResolvable) {
    this._enableTorrent = value;
  }
  public resetEnableTorrent() {
    this._enableTorrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTorrentInput() {
    return this._enableTorrent;
  }

  // enable_usenet - computed: true, optional: true, required: false
  private _enableUsenet?: boolean | cdktf.IResolvable; 
  public get enableUsenet() {
    return this.getBooleanAttribute('enable_usenet');
  }
  public set enableUsenet(value: boolean | cdktf.IResolvable) {
    this._enableUsenet = value;
  }
  public resetEnableUsenet() {
    this._enableUsenet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUsenetInput() {
    return this._enableUsenet;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // minimum_custom_format_score - computed: true, optional: true, required: false
  private _minimumCustomFormatScore?: number; 
  public get minimumCustomFormatScore() {
    return this.getNumberAttribute('minimum_custom_format_score');
  }
  public set minimumCustomFormatScore(value: number) {
    this._minimumCustomFormatScore = value;
  }
  public resetMinimumCustomFormatScore() {
    this._minimumCustomFormatScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCustomFormatScoreInput() {
    return this._minimumCustomFormatScore;
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // preferred_protocol - computed: true, optional: true, required: false
  private _preferredProtocol?: string; 
  public get preferredProtocol() {
    return this.getStringAttribute('preferred_protocol');
  }
  public set preferredProtocol(value: string) {
    this._preferredProtocol = value;
  }
  public resetPreferredProtocol() {
    this._preferredProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredProtocolInput() {
    return this._preferredProtocol;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // torrent_delay - computed: true, optional: true, required: false
  private _torrentDelay?: number; 
  public get torrentDelay() {
    return this.getNumberAttribute('torrent_delay');
  }
  public set torrentDelay(value: number) {
    this._torrentDelay = value;
  }
  public resetTorrentDelay() {
    this._torrentDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get torrentDelayInput() {
    return this._torrentDelay;
  }

  // usenet_delay - computed: true, optional: true, required: false
  private _usenetDelay?: number; 
  public get usenetDelay() {
    return this.getNumberAttribute('usenet_delay');
  }
  public set usenetDelay(value: number) {
    this._usenetDelay = value;
  }
  public resetUsenetDelay() {
    this._usenetDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usenetDelayInput() {
    return this._usenetDelay;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_if_above_custom_format_score: cdktf.booleanToTerraform(this._bypassIfAboveCustomFormatScore),
      bypass_if_highest_quality: cdktf.booleanToTerraform(this._bypassIfHighestQuality),
      enable_torrent: cdktf.booleanToTerraform(this._enableTorrent),
      enable_usenet: cdktf.booleanToTerraform(this._enableUsenet),
      minimum_custom_format_score: cdktf.numberToTerraform(this._minimumCustomFormatScore),
      order: cdktf.numberToTerraform(this._order),
      preferred_protocol: cdktf.stringToTerraform(this._preferredProtocol),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      torrent_delay: cdktf.numberToTerraform(this._torrentDelay),
      usenet_delay: cdktf.numberToTerraform(this._usenetDelay),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_if_above_custom_format_score: {
        value: cdktf.booleanToHclTerraform(this._bypassIfAboveCustomFormatScore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_if_highest_quality: {
        value: cdktf.booleanToHclTerraform(this._bypassIfHighestQuality),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_torrent: {
        value: cdktf.booleanToHclTerraform(this._enableTorrent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_usenet: {
        value: cdktf.booleanToHclTerraform(this._enableUsenet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minimum_custom_format_score: {
        value: cdktf.numberToHclTerraform(this._minimumCustomFormatScore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_protocol: {
        value: cdktf.stringToHclTerraform(this._preferredProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      torrent_delay: {
        value: cdktf.numberToHclTerraform(this._torrentDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usenet_delay: {
        value: cdktf.numberToHclTerraform(this._usenetDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
