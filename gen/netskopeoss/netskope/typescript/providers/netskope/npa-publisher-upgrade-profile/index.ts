// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_upgrade_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NpaPublisherUpgradeProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docker Tag of the release version you wish to install. \
  * Docker Tag for releases can be obtained from: \
  * `api/v2/infrastructure/publishers/releases`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_upgrade_profile#docker_tag NpaPublisherUpgradeProfile#docker_tag}
  */
  readonly dockerTag: string;
  /**
  * Is this updgrade profile enabled.
  * * `true` - Enabled
  * * `false` - Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_upgrade_profile#enabled NpaPublisherUpgradeProfile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Frequency of updates. This frequency is in a CRON format. \
  * ┌───────────── minute (0–59) \
  * │ ┌───────────── hour (0–23) \
  * │ │ ┌───────────── day of the month (1–31) \
  * │ │ │ ┌───────────── month (1–12) (Leave as *) \
  * │ │ │ │ ┌───────────── day of the week (MON, TUE, WED, THU, FRI, SAT, SUN) \
  * 0 0 1 * TUE => (Midnight, Weekly, Tuesday)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_upgrade_profile#frequency NpaPublisherUpgradeProfile#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_upgrade_profile#name NpaPublisherUpgradeProfile#name}
  */
  readonly name: string;
  /**
  * This is the Release Type that is to be installed. \
  * Release Type for releases can be obtained from: \
  * `api/v2/infrastructure/publishers/releases`
  * must be one of ["Beta", "Latest", "Latest-1", "Latest-2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_upgrade_profile#release_type NpaPublisherUpgradeProfile#release_type}
  */
  readonly releaseType: string;
  /**
  * The timezone for which the upgrade triggers. \
  * Please see enum for accepted values.
  * must be one of ["Africa/Cairo", "Africa/Casablanca", "Africa/Johannesburg", "Africa/Nairobi", "America/Argentina/Buenos_Aires", "America/Caracas", "America/Godthab", "America/Lima", "America/Mazatlan", "America/Santiago", "America/Tijuana", "Asia/Almaty", "Asia/Baghdad", "Asia/Baku", "Asia/Calcutta", "Asia/Dhaka", "Asia/Harbin", "Asia/Jakarta", "Asia/Jerusalem", "Asia/Kabul", "Asia/Karachi", "Asia/Kathmandu", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Muscat", "Asia/Rangoon", "Asia/Taipei", "Asia/Tehran", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Cape_Verde", "Australia/Adelaide", "Australia/Brisbane", "Australia/Darwin", "Australia/Hobart", "Australia/Perth", "Australia/Sydney", "Brazil/East", "Canada/Atlantic", "Canada/Central", "Canada/Newfoundland", "Canada/Saskatchewan", "Europe/Amsterdam", "Europe/Athens", "Europe/Copenhagen", "Europe/Helsinki", "Europe/London", "Europe/Minsk", "Europe/Moscow", "Europe/Paris", "Europe/Prague", "Europe/Sarajevo", "Japan", "Mexico/General", "Pacific/Auckland", "Pacific/Fiji", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Samoa", "Pacific/Tongatapu", "US/Alaska", "US/Arizona", "US/East-Indiana", "US/Eastern", "US/Hawaii", "US/Mountain", "US/Pacific"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_upgrade_profile#timezone NpaPublisherUpgradeProfile#timezone}
  */
  readonly timezone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_upgrade_profile netskope_npa_publisher_upgrade_profile}
*/
export class NpaPublisherUpgradeProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publisher_upgrade_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NpaPublisherUpgradeProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NpaPublisherUpgradeProfile to import
  * @param importFromId The id of the existing NpaPublisherUpgradeProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_upgrade_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NpaPublisherUpgradeProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publisher_upgrade_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_publisher_upgrade_profile netskope_npa_publisher_upgrade_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NpaPublisherUpgradeProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NpaPublisherUpgradeProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publisher_upgrade_profile',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dockerTag = config.dockerTag;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._name = config.name;
    this._releaseType = config.releaseType;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // docker_tag - computed: false, optional: false, required: true
  private _dockerTag?: string; 
  public get dockerTag() {
    return this.getStringAttribute('docker_tag');
  }
  public set dockerTag(value: string) {
    this._dockerTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerTagInput() {
    return this._dockerTag;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // next_update_time - computed: true, optional: false, required: false
  public get nextUpdateTime() {
    return this.getNumberAttribute('next_update_time');
  }

  // num_associated_publisher - computed: true, optional: false, required: false
  public get numAssociatedPublisher() {
    return this.getNumberAttribute('num_associated_publisher');
  }

  // publisher_upgrade_profile_id - computed: true, optional: false, required: false
  public get publisherUpgradeProfileId() {
    return this.getNumberAttribute('publisher_upgrade_profile_id');
  }

  // release_type - computed: false, optional: false, required: true
  private _releaseType?: string; 
  public get releaseType() {
    return this.getStringAttribute('release_type');
  }
  public set releaseType(value: string) {
    this._releaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseTypeInput() {
    return this._releaseType;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // upgrading_stage - computed: true, optional: false, required: false
  public get upgradingStage() {
    return this.getNumberAttribute('upgrading_stage');
  }

  // will_start - computed: true, optional: false, required: false
  public get willStart() {
    return this.getBooleanAttribute('will_start');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      docker_tag: cdktf.stringToTerraform(this._dockerTag),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.stringToTerraform(this._frequency),
      name: cdktf.stringToTerraform(this._name),
      release_type: cdktf.stringToTerraform(this._releaseType),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      docker_tag: {
        value: cdktf.stringToHclTerraform(this._dockerTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      release_type: {
        value: cdktf.stringToHclTerraform(this._releaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
