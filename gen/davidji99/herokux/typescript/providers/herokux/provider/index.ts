// https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HerokuxProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#api_key HerokuxProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#connect_central_api_url HerokuxProvider#connect_central_api_url}
  */
  readonly connectCentralApiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#data_api_url HerokuxProvider#data_api_url}
  */
  readonly dataApiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#headers HerokuxProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#kolkrabbi_api_url HerokuxProvider#kolkrabbi_api_url}
  */
  readonly kolkrabbiApiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#metrics_api_url HerokuxProvider#metrics_api_url}
  */
  readonly metricsApiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#platform_api_url HerokuxProvider#platform_api_url}
  */
  readonly platformApiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#postgres_api_url HerokuxProvider#postgres_api_url}
  */
  readonly postgresApiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#redis_api_url HerokuxProvider#redis_api_url}
  */
  readonly redisApiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#registry_api_url HerokuxProvider#registry_api_url}
  */
  readonly registryApiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#scheduler_api_url HerokuxProvider#scheduler_api_url}
  */
  readonly schedulerApiUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#alias HerokuxProvider#alias}
  */
  readonly alias?: string;
  /**
  * delays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#delays HerokuxProvider#delays}
  */
  readonly delays?: HerokuxProviderDelays;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#timeouts HerokuxProvider#timeouts}
  */
  readonly timeouts?: HerokuxProviderTimeouts;
}
export interface HerokuxProviderDelays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#connect_mapping_modify_delay HerokuxProvider#connect_mapping_modify_delay}
  */
  readonly connectMappingModifyDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#postgres_settings_modify_delay HerokuxProvider#postgres_settings_modify_delay}
  */
  readonly postgresSettingsModifyDelay?: number;
}

export function herokuxProviderDelaysToTerraform(struct?: HerokuxProviderDelays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_mapping_modify_delay: cdktf.numberToTerraform(struct!.connectMappingModifyDelay),
    postgres_settings_modify_delay: cdktf.numberToTerraform(struct!.postgresSettingsModifyDelay),
  }
}


export function herokuxProviderDelaysToHclTerraform(struct?: HerokuxProviderDelays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_mapping_modify_delay: {
      value: cdktf.numberToHclTerraform(struct!.connectMappingModifyDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    postgres_settings_modify_delay: {
      value: cdktf.numberToHclTerraform(struct!.postgresSettingsModifyDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HerokuxProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#app_container_release_verify_timeout HerokuxProvider#app_container_release_verify_timeout}
  */
  readonly appContainerReleaseVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#data_connector_create_verify_timeout HerokuxProvider#data_connector_create_verify_timeout}
  */
  readonly dataConnectorCreateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#data_connector_delete_verify_timeout HerokuxProvider#data_connector_delete_verify_timeout}
  */
  readonly dataConnectorDeleteVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#data_connector_settings_update_verify_timeout HerokuxProvider#data_connector_settings_update_verify_timeout}
  */
  readonly dataConnectorSettingsUpdateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#data_connector_status_update_verify_timeout HerokuxProvider#data_connector_status_update_verify_timeout}
  */
  readonly dataConnectorStatusUpdateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#kafka_cg_create_verify_timeout HerokuxProvider#kafka_cg_create_verify_timeout}
  */
  readonly kafkaCgCreateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#kafka_cg_delete_verify_timeout HerokuxProvider#kafka_cg_delete_verify_timeout}
  */
  readonly kafkaCgDeleteVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#kafka_topic_create_verify_timeout HerokuxProvider#kafka_topic_create_verify_timeout}
  */
  readonly kafkaTopicCreateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#kafka_topic_update_verify_timeout HerokuxProvider#kafka_topic_update_verify_timeout}
  */
  readonly kafkaTopicUpdateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#mtls_certificate_create_verify_timeout HerokuxProvider#mtls_certificate_create_verify_timeout}
  */
  readonly mtlsCertificateCreateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#mtls_certificate_delete_verify_timeout HerokuxProvider#mtls_certificate_delete_verify_timeout}
  */
  readonly mtlsCertificateDeleteVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#mtls_deprovision_verify_timeout HerokuxProvider#mtls_deprovision_verify_timeout}
  */
  readonly mtlsDeprovisionVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#mtls_iprule_create_verify_timeout HerokuxProvider#mtls_iprule_create_verify_timeout}
  */
  readonly mtlsIpruleCreateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#mtls_provision_verify_timeout HerokuxProvider#mtls_provision_verify_timeout}
  */
  readonly mtlsProvisionVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#postgres_credential_create_verify_timeout HerokuxProvider#postgres_credential_create_verify_timeout}
  */
  readonly postgresCredentialCreateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#postgres_credential_delete_verify_timeout HerokuxProvider#postgres_credential_delete_verify_timeout}
  */
  readonly postgresCredentialDeleteVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#postgres_credential_pre_create_verify_timeout HerokuxProvider#postgres_credential_pre_create_verify_timeout}
  */
  readonly postgresCredentialPreCreateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#privatelink_allowed_acccounts_add_verify_timeout HerokuxProvider#privatelink_allowed_acccounts_add_verify_timeout}
  */
  readonly privatelinkAllowedAcccountsAddVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#privatelink_allowed_acccounts_remove_timeout HerokuxProvider#privatelink_allowed_acccounts_remove_timeout}
  */
  readonly privatelinkAllowedAcccountsRemoveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#privatelink_create_verify_timeout HerokuxProvider#privatelink_create_verify_timeout}
  */
  readonly privatelinkCreateVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#privatelink_delete_verify_timeout HerokuxProvider#privatelink_delete_verify_timeout}
  */
  readonly privatelinkDeleteVerifyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#shield_private_space_create_verify_timeout HerokuxProvider#shield_private_space_create_verify_timeout}
  */
  readonly shieldPrivateSpaceCreateVerifyTimeout?: number;
}

export function herokuxProviderTimeoutsToTerraform(struct?: HerokuxProviderTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_container_release_verify_timeout: cdktf.numberToTerraform(struct!.appContainerReleaseVerifyTimeout),
    data_connector_create_verify_timeout: cdktf.numberToTerraform(struct!.dataConnectorCreateVerifyTimeout),
    data_connector_delete_verify_timeout: cdktf.numberToTerraform(struct!.dataConnectorDeleteVerifyTimeout),
    data_connector_settings_update_verify_timeout: cdktf.numberToTerraform(struct!.dataConnectorSettingsUpdateVerifyTimeout),
    data_connector_status_update_verify_timeout: cdktf.numberToTerraform(struct!.dataConnectorStatusUpdateVerifyTimeout),
    kafka_cg_create_verify_timeout: cdktf.numberToTerraform(struct!.kafkaCgCreateVerifyTimeout),
    kafka_cg_delete_verify_timeout: cdktf.numberToTerraform(struct!.kafkaCgDeleteVerifyTimeout),
    kafka_topic_create_verify_timeout: cdktf.numberToTerraform(struct!.kafkaTopicCreateVerifyTimeout),
    kafka_topic_update_verify_timeout: cdktf.numberToTerraform(struct!.kafkaTopicUpdateVerifyTimeout),
    mtls_certificate_create_verify_timeout: cdktf.numberToTerraform(struct!.mtlsCertificateCreateVerifyTimeout),
    mtls_certificate_delete_verify_timeout: cdktf.numberToTerraform(struct!.mtlsCertificateDeleteVerifyTimeout),
    mtls_deprovision_verify_timeout: cdktf.numberToTerraform(struct!.mtlsDeprovisionVerifyTimeout),
    mtls_iprule_create_verify_timeout: cdktf.numberToTerraform(struct!.mtlsIpruleCreateVerifyTimeout),
    mtls_provision_verify_timeout: cdktf.numberToTerraform(struct!.mtlsProvisionVerifyTimeout),
    postgres_credential_create_verify_timeout: cdktf.numberToTerraform(struct!.postgresCredentialCreateVerifyTimeout),
    postgres_credential_delete_verify_timeout: cdktf.numberToTerraform(struct!.postgresCredentialDeleteVerifyTimeout),
    postgres_credential_pre_create_verify_timeout: cdktf.numberToTerraform(struct!.postgresCredentialPreCreateVerifyTimeout),
    privatelink_allowed_acccounts_add_verify_timeout: cdktf.numberToTerraform(struct!.privatelinkAllowedAcccountsAddVerifyTimeout),
    privatelink_allowed_acccounts_remove_timeout: cdktf.numberToTerraform(struct!.privatelinkAllowedAcccountsRemoveTimeout),
    privatelink_create_verify_timeout: cdktf.numberToTerraform(struct!.privatelinkCreateVerifyTimeout),
    privatelink_delete_verify_timeout: cdktf.numberToTerraform(struct!.privatelinkDeleteVerifyTimeout),
    shield_private_space_create_verify_timeout: cdktf.numberToTerraform(struct!.shieldPrivateSpaceCreateVerifyTimeout),
  }
}


export function herokuxProviderTimeoutsToHclTerraform(struct?: HerokuxProviderTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_container_release_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.appContainerReleaseVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_connector_create_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dataConnectorCreateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_connector_delete_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dataConnectorDeleteVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_connector_settings_update_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dataConnectorSettingsUpdateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_connector_status_update_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dataConnectorStatusUpdateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_cg_create_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.kafkaCgCreateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_cg_delete_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.kafkaCgDeleteVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_topic_create_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.kafkaTopicCreateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_topic_update_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.kafkaTopicUpdateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtls_certificate_create_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mtlsCertificateCreateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtls_certificate_delete_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mtlsCertificateDeleteVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtls_deprovision_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mtlsDeprovisionVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtls_iprule_create_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mtlsIpruleCreateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtls_provision_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mtlsProvisionVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    postgres_credential_create_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.postgresCredentialCreateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    postgres_credential_delete_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.postgresCredentialDeleteVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    postgres_credential_pre_create_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.postgresCredentialPreCreateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privatelink_allowed_acccounts_add_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.privatelinkAllowedAcccountsAddVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privatelink_allowed_acccounts_remove_timeout: {
      value: cdktf.numberToHclTerraform(struct!.privatelinkAllowedAcccountsRemoveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privatelink_create_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.privatelinkCreateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privatelink_delete_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.privatelinkDeleteVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shield_private_space_create_verify_timeout: {
      value: cdktf.numberToHclTerraform(struct!.shieldPrivateSpaceCreateVerifyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs herokux}
*/
export class HerokuxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "herokux";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HerokuxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HerokuxProvider to import
  * @param importFromId The id of the existing HerokuxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HerokuxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "herokux", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs herokux} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HerokuxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HerokuxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'herokux',
      terraformGeneratorMetadata: {
        providerName: 'herokux',
        providerVersion: '1.4.7'
      },
      terraformProviderSource: 'davidji99/herokux'
    });
    this._apiKey = config.apiKey;
    this._connectCentralApiUrl = config.connectCentralApiUrl;
    this._dataApiUrl = config.dataApiUrl;
    this._headers = config.headers;
    this._kolkrabbiApiUrl = config.kolkrabbiApiUrl;
    this._metricsApiUrl = config.metricsApiUrl;
    this._platformApiUrl = config.platformApiUrl;
    this._postgresApiUrl = config.postgresApiUrl;
    this._redisApiUrl = config.redisApiUrl;
    this._registryApiUrl = config.registryApiUrl;
    this._schedulerApiUrl = config.schedulerApiUrl;
    this._alias = config.alias;
    this._delays = config.delays;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // connect_central_api_url - computed: false, optional: true, required: false
  private _connectCentralApiUrl?: string; 
  public get connectCentralApiUrl() {
    return this._connectCentralApiUrl;
  }
  public set connectCentralApiUrl(value: string | undefined) {
    this._connectCentralApiUrl = value;
  }
  public resetConnectCentralApiUrl() {
    this._connectCentralApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectCentralApiUrlInput() {
    return this._connectCentralApiUrl;
  }

  // data_api_url - computed: false, optional: true, required: false
  private _dataApiUrl?: string; 
  public get dataApiUrl() {
    return this._dataApiUrl;
  }
  public set dataApiUrl(value: string | undefined) {
    this._dataApiUrl = value;
  }
  public resetDataApiUrl() {
    this._dataApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataApiUrlInput() {
    return this._dataApiUrl;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // kolkrabbi_api_url - computed: false, optional: true, required: false
  private _kolkrabbiApiUrl?: string; 
  public get kolkrabbiApiUrl() {
    return this._kolkrabbiApiUrl;
  }
  public set kolkrabbiApiUrl(value: string | undefined) {
    this._kolkrabbiApiUrl = value;
  }
  public resetKolkrabbiApiUrl() {
    this._kolkrabbiApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kolkrabbiApiUrlInput() {
    return this._kolkrabbiApiUrl;
  }

  // metrics_api_url - computed: false, optional: true, required: false
  private _metricsApiUrl?: string; 
  public get metricsApiUrl() {
    return this._metricsApiUrl;
  }
  public set metricsApiUrl(value: string | undefined) {
    this._metricsApiUrl = value;
  }
  public resetMetricsApiUrl() {
    this._metricsApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsApiUrlInput() {
    return this._metricsApiUrl;
  }

  // platform_api_url - computed: false, optional: true, required: false
  private _platformApiUrl?: string; 
  public get platformApiUrl() {
    return this._platformApiUrl;
  }
  public set platformApiUrl(value: string | undefined) {
    this._platformApiUrl = value;
  }
  public resetPlatformApiUrl() {
    this._platformApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformApiUrlInput() {
    return this._platformApiUrl;
  }

  // postgres_api_url - computed: false, optional: true, required: false
  private _postgresApiUrl?: string; 
  public get postgresApiUrl() {
    return this._postgresApiUrl;
  }
  public set postgresApiUrl(value: string | undefined) {
    this._postgresApiUrl = value;
  }
  public resetPostgresApiUrl() {
    this._postgresApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresApiUrlInput() {
    return this._postgresApiUrl;
  }

  // redis_api_url - computed: false, optional: true, required: false
  private _redisApiUrl?: string; 
  public get redisApiUrl() {
    return this._redisApiUrl;
  }
  public set redisApiUrl(value: string | undefined) {
    this._redisApiUrl = value;
  }
  public resetRedisApiUrl() {
    this._redisApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisApiUrlInput() {
    return this._redisApiUrl;
  }

  // registry_api_url - computed: false, optional: true, required: false
  private _registryApiUrl?: string; 
  public get registryApiUrl() {
    return this._registryApiUrl;
  }
  public set registryApiUrl(value: string | undefined) {
    this._registryApiUrl = value;
  }
  public resetRegistryApiUrl() {
    this._registryApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryApiUrlInput() {
    return this._registryApiUrl;
  }

  // scheduler_api_url - computed: false, optional: true, required: false
  private _schedulerApiUrl?: string; 
  public get schedulerApiUrl() {
    return this._schedulerApiUrl;
  }
  public set schedulerApiUrl(value: string | undefined) {
    this._schedulerApiUrl = value;
  }
  public resetSchedulerApiUrl() {
    this._schedulerApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerApiUrlInput() {
    return this._schedulerApiUrl;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // delays - computed: false, optional: true, required: false
  private _delays?: HerokuxProviderDelays; 
  public get delays() {
    return this._delays;
  }
  public set delays(value: HerokuxProviderDelays | undefined) {
    this._delays = value;
  }
  public resetDelays() {
    this._delays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaysInput() {
    return this._delays;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HerokuxProviderTimeouts; 
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: HerokuxProviderTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      connect_central_api_url: cdktf.stringToTerraform(this._connectCentralApiUrl),
      data_api_url: cdktf.stringToTerraform(this._dataApiUrl),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      kolkrabbi_api_url: cdktf.stringToTerraform(this._kolkrabbiApiUrl),
      metrics_api_url: cdktf.stringToTerraform(this._metricsApiUrl),
      platform_api_url: cdktf.stringToTerraform(this._platformApiUrl),
      postgres_api_url: cdktf.stringToTerraform(this._postgresApiUrl),
      redis_api_url: cdktf.stringToTerraform(this._redisApiUrl),
      registry_api_url: cdktf.stringToTerraform(this._registryApiUrl),
      scheduler_api_url: cdktf.stringToTerraform(this._schedulerApiUrl),
      alias: cdktf.stringToTerraform(this._alias),
      delays: herokuxProviderDelaysToTerraform(this._delays),
      timeouts: herokuxProviderTimeoutsToTerraform(this._timeouts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_central_api_url: {
        value: cdktf.stringToHclTerraform(this._connectCentralApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_api_url: {
        value: cdktf.stringToHclTerraform(this._dataApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      kolkrabbi_api_url: {
        value: cdktf.stringToHclTerraform(this._kolkrabbiApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_api_url: {
        value: cdktf.stringToHclTerraform(this._metricsApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_api_url: {
        value: cdktf.stringToHclTerraform(this._platformApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgres_api_url: {
        value: cdktf.stringToHclTerraform(this._postgresApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redis_api_url: {
        value: cdktf.stringToHclTerraform(this._redisApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_api_url: {
        value: cdktf.stringToHclTerraform(this._registryApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler_api_url: {
        value: cdktf.stringToHclTerraform(this._schedulerApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delays: {
        value: herokuxProviderDelaysToHclTerraform(this._delays),
        isBlock: true,
        type: "list",
        storageClassType: "HerokuxProviderDelaysList",
      },
      timeouts: {
        value: herokuxProviderTimeoutsToHclTerraform(this._timeouts),
        isBlock: true,
        type: "list",
        storageClassType: "HerokuxProviderTimeoutsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
