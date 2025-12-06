// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_google_registration_logging_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGoogleRegistrationLoggingSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the log sink for ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_google_registration_logging_settings#log_ingestion_sink_name CloudGoogleRegistrationLoggingSettings#log_ingestion_sink_name}
  */
  readonly logIngestionSinkName?: string;
  /**
  * The Pub/Sub subscription name for log ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_google_registration_logging_settings#log_ingestion_subscription_name CloudGoogleRegistrationLoggingSettings#log_ingestion_subscription_name}
  */
  readonly logIngestionSubscriptionName?: string;
  /**
  * The Pub/Sub topic ID for log ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_google_registration_logging_settings#log_ingestion_topic_id CloudGoogleRegistrationLoggingSettings#log_ingestion_topic_id}
  */
  readonly logIngestionTopicId?: string;
  /**
  * The Google Cloud registration ID to configure log ingestion settings for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_google_registration_logging_settings#registration_id CloudGoogleRegistrationLoggingSettings#registration_id}
  */
  readonly registrationId: string;
  /**
  * The Google Cloud project ID for Workload Identity Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_google_registration_logging_settings#wif_project CloudGoogleRegistrationLoggingSettings#wif_project}
  */
  readonly wifProject: string;
  /**
  * The Google Cloud project number for Workload Identity Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_google_registration_logging_settings#wif_project_number CloudGoogleRegistrationLoggingSettings#wif_project_number}
  */
  readonly wifProjectNumber: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_google_registration_logging_settings crowdstrike_cloud_google_registration_logging_settings}
*/
export class CloudGoogleRegistrationLoggingSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_google_registration_logging_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGoogleRegistrationLoggingSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGoogleRegistrationLoggingSettings to import
  * @param importFromId The id of the existing CloudGoogleRegistrationLoggingSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_google_registration_logging_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGoogleRegistrationLoggingSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_google_registration_logging_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/cloud_google_registration_logging_settings crowdstrike_cloud_google_registration_logging_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGoogleRegistrationLoggingSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGoogleRegistrationLoggingSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_google_registration_logging_settings',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.51',
        providerVersionConstraint: '0.0.51'
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
    this._wifProject = config.wifProject;
    this._wifProjectNumber = config.wifProjectNumber;
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

  // wif_project - computed: false, optional: false, required: true
  private _wifProject?: string; 
  public get wifProject() {
    return this.getStringAttribute('wif_project');
  }
  public set wifProject(value: string) {
    this._wifProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wifProjectInput() {
    return this._wifProject;
  }

  // wif_project_number - computed: false, optional: false, required: true
  private _wifProjectNumber?: string; 
  public get wifProjectNumber() {
    return this.getStringAttribute('wif_project_number');
  }
  public set wifProjectNumber(value: string) {
    this._wifProjectNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wifProjectNumberInput() {
    return this._wifProjectNumber;
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
      wif_project: cdktf.stringToTerraform(this._wifProject),
      wif_project_number: cdktf.stringToTerraform(this._wifProjectNumber),
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
      wif_project: {
        value: cdktf.stringToHclTerraform(this._wifProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wif_project_number: {
        value: cdktf.stringToHclTerraform(this._wifProjectNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
