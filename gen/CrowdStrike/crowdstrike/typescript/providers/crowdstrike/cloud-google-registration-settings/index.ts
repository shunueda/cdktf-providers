// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_google_registration_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGoogleRegistrationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the log sink for ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_google_registration_settings#log_ingestion_sink_name CloudGoogleRegistrationSettings#log_ingestion_sink_name}
  */
  readonly logIngestionSinkName?: string;
  /**
  * The Pub/Sub subscription name for log ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_google_registration_settings#log_ingestion_subscription_name CloudGoogleRegistrationSettings#log_ingestion_subscription_name}
  */
  readonly logIngestionSubscriptionName?: string;
  /**
  * The Pub/Sub topic ID for log ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_google_registration_settings#log_ingestion_topic_id CloudGoogleRegistrationSettings#log_ingestion_topic_id}
  */
  readonly logIngestionTopicId?: string;
  /**
  * The Google Cloud registration ID to configure settings for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_google_registration_settings#registration_id CloudGoogleRegistrationSettings#registration_id}
  */
  readonly registrationId: string;
  /**
  * The Workload Identity Federation (WIF) pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_google_registration_settings#wif_pool_name CloudGoogleRegistrationSettings#wif_pool_name}
  */
  readonly wifPoolName?: string;
  /**
  * The Workload Identity Federation (WIF) provider name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_google_registration_settings#wif_provider_name CloudGoogleRegistrationSettings#wif_provider_name}
  */
  readonly wifProviderName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_google_registration_settings crowdstrike_cloud_google_registration_settings}
*/
export class CloudGoogleRegistrationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_google_registration_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGoogleRegistrationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGoogleRegistrationSettings to import
  * @param importFromId The id of the existing CloudGoogleRegistrationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_google_registration_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGoogleRegistrationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_google_registration_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.53/docs/resources/cloud_google_registration_settings crowdstrike_cloud_google_registration_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGoogleRegistrationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGoogleRegistrationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_google_registration_settings',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.53',
        providerVersionConstraint: '0.0.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._logIngestionSinkName = config.logIngestionSinkName;
    this._logIngestionSubscriptionName = config.logIngestionSubscriptionName;
    this._logIngestionTopicId = config.logIngestionTopicId;
    this._registrationId = config.registrationId;
    this._wifPoolName = config.wifPoolName;
    this._wifProviderName = config.wifProviderName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // log_ingestion_sink_name - computed: false, optional: true, required: false
  private _logIngestionSinkName?: string; 
  public get logIngestionSinkName() {
    return this.getStringAttribute('log_ingestion_sink_name');
  }
  public set logIngestionSinkName(value: string) {
    this._logIngestionSinkName = value;
  }
  public resetLogIngestionSinkName() {
    this._logIngestionSinkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIngestionSinkNameInput() {
    return this._logIngestionSinkName;
  }

  // log_ingestion_subscription_name - computed: false, optional: true, required: false
  private _logIngestionSubscriptionName?: string; 
  public get logIngestionSubscriptionName() {
    return this.getStringAttribute('log_ingestion_subscription_name');
  }
  public set logIngestionSubscriptionName(value: string) {
    this._logIngestionSubscriptionName = value;
  }
  public resetLogIngestionSubscriptionName() {
    this._logIngestionSubscriptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIngestionSubscriptionNameInput() {
    return this._logIngestionSubscriptionName;
  }

  // log_ingestion_topic_id - computed: false, optional: true, required: false
  private _logIngestionTopicId?: string; 
  public get logIngestionTopicId() {
    return this.getStringAttribute('log_ingestion_topic_id');
  }
  public set logIngestionTopicId(value: string) {
    this._logIngestionTopicId = value;
  }
  public resetLogIngestionTopicId() {
    this._logIngestionTopicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIngestionTopicIdInput() {
    return this._logIngestionTopicId;
  }

  // registration_id - computed: false, optional: false, required: true
  private _registrationId?: string; 
  public get registrationId() {
    return this.getStringAttribute('registration_id');
  }
  public set registrationId(value: string) {
    this._registrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationIdInput() {
    return this._registrationId;
  }

  // wif_pool_name - computed: false, optional: true, required: false
  private _wifPoolName?: string; 
  public get wifPoolName() {
    return this.getStringAttribute('wif_pool_name');
  }
  public set wifPoolName(value: string) {
    this._wifPoolName = value;
  }
  public resetWifPoolName() {
    this._wifPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifPoolNameInput() {
    return this._wifPoolName;
  }

  // wif_provider_name - computed: false, optional: true, required: false
  private _wifProviderName?: string; 
  public get wifProviderName() {
    return this.getStringAttribute('wif_provider_name');
  }
  public set wifProviderName(value: string) {
    this._wifProviderName = value;
  }
  public resetWifProviderName() {
    this._wifProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifProviderNameInput() {
    return this._wifProviderName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_ingestion_sink_name: cdktf.stringToTerraform(this._logIngestionSinkName),
      log_ingestion_subscription_name: cdktf.stringToTerraform(this._logIngestionSubscriptionName),
      log_ingestion_topic_id: cdktf.stringToTerraform(this._logIngestionTopicId),
      registration_id: cdktf.stringToTerraform(this._registrationId),
      wif_pool_name: cdktf.stringToTerraform(this._wifPoolName),
      wif_provider_name: cdktf.stringToTerraform(this._wifProviderName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      log_ingestion_sink_name: {
        value: cdktf.stringToHclTerraform(this._logIngestionSinkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_ingestion_subscription_name: {
        value: cdktf.stringToHclTerraform(this._logIngestionSubscriptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_ingestion_topic_id: {
        value: cdktf.stringToHclTerraform(this._logIngestionTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_id: {
        value: cdktf.stringToHclTerraform(this._registrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wif_pool_name: {
        value: cdktf.stringToHclTerraform(this._wifPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wif_provider_name: {
        value: cdktf.stringToHclTerraform(this._wifProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
