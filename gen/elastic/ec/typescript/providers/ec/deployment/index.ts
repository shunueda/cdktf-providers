// https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deployment alias, affects the format of the resource URLs. Set to an empty value ("") to disable the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#alias Deployment#alias}
  */
  readonly alias?: string;
  /**
  * **DEPRECATED** APM cluster definition. This should only be used for deployments running a version lower than 8.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#apm Deployment#apm}
  */
  readonly apm?: DeploymentApm;
  /**
  * Deployment template identifier to create the deployment from. See the [full list](https://www.elastic.co/guide/en/cloud/current/ec-regions-templates-instances.html) of regions and deployment templates available in ESS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#deployment_template_id Deployment#deployment_template_id}
  */
  readonly deploymentTemplateId: string;
  /**
  * Elasticsearch cluster definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#elasticsearch Deployment#elasticsearch}
  */
  readonly elasticsearch: DeploymentElasticsearch;
  /**
  * Enterprise Search cluster definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#enterprise_search Deployment#enterprise_search}
  */
  readonly enterpriseSearch?: DeploymentEnterpriseSearch;
  /**
  * Integrations Server cluster definition. Integrations Server replaces `apm` in Stack versions > 8.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#integrations_server Deployment#integrations_server}
  */
  readonly integrationsServer?: DeploymentIntegrationsServer;
  /**
  * Kibana cluster definition.
  * 
  * -> **Note on disabling Kibana** While optional it is recommended deployments specify a Kibana block, since not doing so might cause issues when modifying or upgrading the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#kibana Deployment#kibana}
  */
  readonly kibana?: DeploymentKibana;
  /**
  * When set to true, the deployment will be updated according to the latest deployment template values.
  * 
  * ~> **Note** If the <code>instance_configuration_id</code> or <code>instance_configuration_version</code> fields are set for a specific topology element, that element will not be updated.
  * ~> **Note** Hardware migrations are not supported for deployments with node types. To use this field, the deployment needs to be migrated to node roles first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#migrate_to_latest_hardware Deployment#migrate_to_latest_hardware}
  */
  readonly migrateToLatestHardware?: boolean | cdktf.IResolvable;
  /**
  * Name for the deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Observability settings that you can set to ship logs and metrics to a deployment. The target deployment can also be the current deployment itself by setting observability.deployment_id to `self`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#observability Deployment#observability}
  */
  readonly observability?: DeploymentObservability;
  /**
  * Elasticsearch Service (ESS) region where the deployment should be hosted. For Elastic Cloud Enterprise (ECE) installations, set to `"ece-region".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#region Deployment#region}
  */
  readonly region: string;
  /**
  * Request ID to set when you create the deployment. Use it only when previous attempts return an error and `request_id` is returned as part of the error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#request_id Deployment#request_id}
  */
  readonly requestId?: string;
  /**
  * Explicitly resets the elasticsearch_password when true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#reset_elasticsearch_password Deployment#reset_elasticsearch_password}
  */
  readonly resetElasticsearchPassword?: boolean | cdktf.IResolvable;
  /**
  * Optional map of deployment tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#tags Deployment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * List of traffic filters rule identifiers that will be applied to the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#traffic_filter Deployment#traffic_filter}
  */
  readonly trafficFilter?: string[];
  /**
  * Elastic Stack version to use for all of the deployment resources.
  * 
  * -> Read the [ESS stack version policy](https://www.elastic.co/guide/en/cloud/current/ec-version-policy.html#ec-version-policy-available) to understand which versions are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#version Deployment#version}
  */
  readonly version: string;
}
export interface DeploymentApmConfig {
  /**
  * Optionally enable debug mode for APM servers - defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#debug_enabled Deployment#debug_enabled}
  */
  readonly debugEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optionally override the docker image the APM nodes will use. This option will not work in ESS customers and should only be changed if you know what you're doing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#docker_image Deployment#docker_image}
  */
  readonly dockerImage?: string;
  /**
  * An arbitrary JSON object allowing (non-admin) cluster owners to set their parameters (only one of this and 'user_settings_yaml' is allowed), provided they are on the whitelist ('user_settings_whitelist') and not on the blacklist ('user_settings_blacklist'). (This field together with 'user_settings_override*' and 'system_settings' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_json Deployment#user_settings_json}
  */
  readonly userSettingsJson?: string;
  /**
  * An arbitrary JSON object allowing ECE admins owners to set clusters' parameters (only one of this and 'user_settings_override_yaml' is allowed), ie in addition to the documented 'system_settings'. (This field together with 'system_settings' and 'user_settings*' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_override_json Deployment#user_settings_override_json}
  */
  readonly userSettingsOverrideJson?: string;
  /**
  * An arbitrary YAML object allowing ECE admins owners to set clusters' parameters (only one of this and 'user_settings_override_json' is allowed), ie in addition to the documented 'system_settings'. (This field together with 'system_settings' and 'user_settings*' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_override_yaml Deployment#user_settings_override_yaml}
  */
  readonly userSettingsOverrideYaml?: string;
  /**
  * An arbitrary YAML object allowing (non-admin) cluster owners to set their parameters (only one of this and 'user_settings_json' is allowed), provided they are on the whitelist ('user_settings_whitelist') and not on the blacklist ('user_settings_blacklist'). (These field together with 'user_settings_override*' and 'system_settings' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_yaml Deployment#user_settings_yaml}
  */
  readonly userSettingsYaml?: string;
}

export function deploymentApmConfigToTerraform(struct?: DeploymentApmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_enabled: cdktf.booleanToTerraform(struct!.debugEnabled),
    docker_image: cdktf.stringToTerraform(struct!.dockerImage),
    user_settings_json: cdktf.stringToTerraform(struct!.userSettingsJson),
    user_settings_override_json: cdktf.stringToTerraform(struct!.userSettingsOverrideJson),
    user_settings_override_yaml: cdktf.stringToTerraform(struct!.userSettingsOverrideYaml),
    user_settings_yaml: cdktf.stringToTerraform(struct!.userSettingsYaml),
  }
}


export function deploymentApmConfigToHclTerraform(struct?: DeploymentApmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.debugEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    docker_image: {
      value: cdktf.stringToHclTerraform(struct!.dockerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_json: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_override_json: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsOverrideJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_override_yaml: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsOverrideYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_yaml: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentApmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentApmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugEnabled = this._debugEnabled;
    }
    if (this._dockerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage;
    }
    if (this._userSettingsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsJson = this._userSettingsJson;
    }
    if (this._userSettingsOverrideJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsOverrideJson = this._userSettingsOverrideJson;
    }
    if (this._userSettingsOverrideYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsOverrideYaml = this._userSettingsOverrideYaml;
    }
    if (this._userSettingsYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsYaml = this._userSettingsYaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentApmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debugEnabled = undefined;
      this._dockerImage = undefined;
      this._userSettingsJson = undefined;
      this._userSettingsOverrideJson = undefined;
      this._userSettingsOverrideYaml = undefined;
      this._userSettingsYaml = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debugEnabled = value.debugEnabled;
      this._dockerImage = value.dockerImage;
      this._userSettingsJson = value.userSettingsJson;
      this._userSettingsOverrideJson = value.userSettingsOverrideJson;
      this._userSettingsOverrideYaml = value.userSettingsOverrideYaml;
      this._userSettingsYaml = value.userSettingsYaml;
    }
  }

  // debug_enabled - computed: true, optional: true, required: false
  private _debugEnabled?: boolean | cdktf.IResolvable; 
  public get debugEnabled() {
    return this.getBooleanAttribute('debug_enabled');
  }
  public set debugEnabled(value: boolean | cdktf.IResolvable) {
    this._debugEnabled = value;
  }
  public resetDebugEnabled() {
    this._debugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugEnabledInput() {
    return this._debugEnabled;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  public resetDockerImage() {
    this._dockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // user_settings_json - computed: false, optional: true, required: false
  private _userSettingsJson?: string; 
  public get userSettingsJson() {
    return this.getStringAttribute('user_settings_json');
  }
  public set userSettingsJson(value: string) {
    this._userSettingsJson = value;
  }
  public resetUserSettingsJson() {
    this._userSettingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsJsonInput() {
    return this._userSettingsJson;
  }

  // user_settings_override_json - computed: false, optional: true, required: false
  private _userSettingsOverrideJson?: string; 
  public get userSettingsOverrideJson() {
    return this.getStringAttribute('user_settings_override_json');
  }
  public set userSettingsOverrideJson(value: string) {
    this._userSettingsOverrideJson = value;
  }
  public resetUserSettingsOverrideJson() {
    this._userSettingsOverrideJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsOverrideJsonInput() {
    return this._userSettingsOverrideJson;
  }

  // user_settings_override_yaml - computed: false, optional: true, required: false
  private _userSettingsOverrideYaml?: string; 
  public get userSettingsOverrideYaml() {
    return this.getStringAttribute('user_settings_override_yaml');
  }
  public set userSettingsOverrideYaml(value: string) {
    this._userSettingsOverrideYaml = value;
  }
  public resetUserSettingsOverrideYaml() {
    this._userSettingsOverrideYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsOverrideYamlInput() {
    return this._userSettingsOverrideYaml;
  }

  // user_settings_yaml - computed: false, optional: true, required: false
  private _userSettingsYaml?: string; 
  public get userSettingsYaml() {
    return this.getStringAttribute('user_settings_yaml');
  }
  public set userSettingsYaml(value: string) {
    this._userSettingsYaml = value;
  }
  public resetUserSettingsYaml() {
    this._userSettingsYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsYamlInput() {
    return this._userSettingsYaml;
  }
}
export interface DeploymentApm {
  /**
  * Optionally define the Apm configuration options for the APM Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#config Deployment#config}
  */
  readonly config?: DeploymentApmConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#elasticsearch_cluster_ref_id Deployment#elasticsearch_cluster_ref_id}
  */
  readonly elasticsearchClusterRefId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#ref_id Deployment#ref_id}
  */
  readonly refId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Optional size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentApmToTerraform(struct?: DeploymentApm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: deploymentApmConfigToTerraform(struct!.config),
    elasticsearch_cluster_ref_id: cdktf.stringToTerraform(struct!.elasticsearchClusterRefId),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    ref_id: cdktf.stringToTerraform(struct!.refId),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentApmToHclTerraform(struct?: DeploymentApm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: deploymentApmConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentApmConfig",
    },
    elasticsearch_cluster_ref_id: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchClusterRefId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentApmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentApm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._elasticsearchClusterRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchClusterRefId = this._elasticsearchClusterRefId;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentApm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._elasticsearchClusterRefId = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._refId = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._elasticsearchClusterRefId = value.elasticsearchClusterRefId;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._refId = value.refId;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DeploymentApmConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DeploymentApmConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // elasticsearch_cluster_ref_id - computed: true, optional: true, required: false
  private _elasticsearchClusterRefId?: string; 
  public get elasticsearchClusterRefId() {
    return this.getStringAttribute('elasticsearch_cluster_ref_id');
  }
  public set elasticsearchClusterRefId(value: string) {
    this._elasticsearchClusterRefId = value;
  }
  public resetElasticsearchClusterRefId() {
    this._elasticsearchClusterRefId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchClusterRefIdInput() {
    return this._elasticsearchClusterRefId;
  }

  // http_endpoint - computed: true, optional: false, required: false
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }

  // https_endpoint - computed: true, optional: false, required: false
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // ref_id - computed: true, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentElasticsearchColdAutoscaling {
  /**
  * Whether this specific tier should be auto-scaled, overrides deployment-wide setting. Allowed for `ml` tier only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscale Deployment#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * Maximum size value for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size Deployment#max_size}
  */
  readonly maxSize?: string;
  /**
  * Maximum resource type for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size_resource Deployment#max_size_resource}
  */
  readonly maxSizeResource?: string;
  /**
  * Minimum size value for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size Deployment#min_size}
  */
  readonly minSize?: string;
  /**
  * Minimum resource type for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size_resource Deployment#min_size_resource}
  */
  readonly minSizeResource?: string;
}

export function deploymentElasticsearchColdAutoscalingToTerraform(struct?: DeploymentElasticsearchColdAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cdktf.booleanToTerraform(struct!.autoscale),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
    max_size_resource: cdktf.stringToTerraform(struct!.maxSizeResource),
    min_size: cdktf.stringToTerraform(struct!.minSize),
    min_size_resource: cdktf.stringToTerraform(struct!.minSizeResource),
  }
}


export function deploymentElasticsearchColdAutoscalingToHclTerraform(struct?: DeploymentElasticsearchColdAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale: {
      value: cdktf.booleanToHclTerraform(struct!.autoscale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.maxSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size: {
      value: cdktf.stringToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.minSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchColdAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchColdAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._maxSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSizeResource = this._maxSizeResource;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._minSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSizeResource = this._minSizeResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchColdAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscale = undefined;
      this._maxSize = undefined;
      this._maxSizeResource = undefined;
      this._minSize = undefined;
      this._minSizeResource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscale = value.autoscale;
      this._maxSize = value.maxSize;
      this._maxSizeResource = value.maxSizeResource;
      this._minSize = value.minSize;
      this._minSizeResource = value.minSizeResource;
    }
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // max_size_resource - computed: true, optional: true, required: false
  private _maxSizeResource?: string; 
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }
  public set maxSizeResource(value: string) {
    this._maxSizeResource = value;
  }
  public resetMaxSizeResource() {
    this._maxSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeResourceInput() {
    return this._maxSizeResource;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // min_size_resource - computed: true, optional: true, required: false
  private _minSizeResource?: string; 
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
  public set minSizeResource(value: string) {
    this._minSizeResource = value;
  }
  public resetMinSizeResource() {
    this._minSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeResourceInput() {
    return this._minSizeResource;
  }

  // policy_override_json - computed: true, optional: false, required: false
  public get policyOverrideJson() {
    return this.getStringAttribute('policy_override_json');
  }
}
export interface DeploymentElasticsearchCold {
  /**
  * Optional Elasticsearch autoscaling settings, such a maximum and minimum size and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscaling Deployment#autoscaling}
  */
  readonly autoscaling: DeploymentElasticsearchColdAutoscaling;
  /**
  * Instance Configuration ID of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Instance Configuration version of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * The node type for the Elasticsearch Topology element (data node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_data Deployment#node_type_data}
  */
  readonly nodeTypeData?: string;
  /**
  * The node type for the Elasticsearch Topology element (ingest node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ingest Deployment#node_type_ingest}
  */
  readonly nodeTypeIngest?: string;
  /**
  * The node type for the Elasticsearch Topology element (master node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_master Deployment#node_type_master}
  */
  readonly nodeTypeMaster?: string;
  /**
  * The node type for the Elasticsearch Topology element (machine learning node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ml Deployment#node_type_ml}
  */
  readonly nodeTypeMl?: string;
  /**
  * Amount of "size_resource" per node in the "<size in GB>g" notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Number of zones that the Elasticsearch cluster will span. This is used to set HA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentElasticsearchColdToTerraform(struct?: DeploymentElasticsearchCold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: deploymentElasticsearchColdAutoscalingToTerraform(struct!.autoscaling),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    node_type_data: cdktf.stringToTerraform(struct!.nodeTypeData),
    node_type_ingest: cdktf.stringToTerraform(struct!.nodeTypeIngest),
    node_type_master: cdktf.stringToTerraform(struct!.nodeTypeMaster),
    node_type_ml: cdktf.stringToTerraform(struct!.nodeTypeMl),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentElasticsearchColdToHclTerraform(struct?: DeploymentElasticsearchCold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling: {
      value: deploymentElasticsearchColdAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchColdAutoscaling",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type_data: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ingest: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeIngest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_master: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ml: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchColdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchCold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._nodeTypeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeData = this._nodeTypeData;
    }
    if (this._nodeTypeIngest !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeIngest = this._nodeTypeIngest;
    }
    if (this._nodeTypeMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMaster = this._nodeTypeMaster;
    }
    if (this._nodeTypeMl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMl = this._nodeTypeMl;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchCold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._nodeTypeData = undefined;
      this._nodeTypeIngest = undefined;
      this._nodeTypeMaster = undefined;
      this._nodeTypeMl = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = value.autoscaling;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._nodeTypeData = value.nodeTypeData;
      this._nodeTypeIngest = value.nodeTypeIngest;
      this._nodeTypeMaster = value.nodeTypeMaster;
      this._nodeTypeMl = value.nodeTypeMl;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // autoscaling - computed: false, optional: false, required: true
  private _autoscaling = new DeploymentElasticsearchColdAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DeploymentElasticsearchColdAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // node_roles - computed: true, optional: false, required: false
  public get nodeRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('node_roles'));
  }

  // node_type_data - computed: true, optional: true, required: false
  private _nodeTypeData?: string; 
  public get nodeTypeData() {
    return this.getStringAttribute('node_type_data');
  }
  public set nodeTypeData(value: string) {
    this._nodeTypeData = value;
  }
  public resetNodeTypeData() {
    this._nodeTypeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeDataInput() {
    return this._nodeTypeData;
  }

  // node_type_ingest - computed: true, optional: true, required: false
  private _nodeTypeIngest?: string; 
  public get nodeTypeIngest() {
    return this.getStringAttribute('node_type_ingest');
  }
  public set nodeTypeIngest(value: string) {
    this._nodeTypeIngest = value;
  }
  public resetNodeTypeIngest() {
    this._nodeTypeIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIngestInput() {
    return this._nodeTypeIngest;
  }

  // node_type_master - computed: true, optional: true, required: false
  private _nodeTypeMaster?: string; 
  public get nodeTypeMaster() {
    return this.getStringAttribute('node_type_master');
  }
  public set nodeTypeMaster(value: string) {
    this._nodeTypeMaster = value;
  }
  public resetNodeTypeMaster() {
    this._nodeTypeMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMasterInput() {
    return this._nodeTypeMaster;
  }

  // node_type_ml - computed: true, optional: true, required: false
  private _nodeTypeMl?: string; 
  public get nodeTypeMl() {
    return this.getStringAttribute('node_type_ml');
  }
  public set nodeTypeMl(value: string) {
    this._nodeTypeMl = value;
  }
  public resetNodeTypeMl() {
    this._nodeTypeMl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMlInput() {
    return this._nodeTypeMl;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentElasticsearchConfig {
  /**
  * Overrides the docker image the Elasticsearch nodes will use. Note that this field will only work for internal users only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#docker_image Deployment#docker_image}
  */
  readonly dockerImage?: string;
  /**
  * List of Elasticsearch supported plugins, which vary from version to version. Check the Stack Pack version to see which plugins are supported for each version. This is currently only available from the UI and [ecctl](https://www.elastic.co/guide/en/ecctl/master/ecctl_stack_list.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#plugins Deployment#plugins}
  */
  readonly plugins?: string[];
  /**
  * JSON-formatted user level "elasticsearch.yml" setting overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_json Deployment#user_settings_json}
  */
  readonly userSettingsJson?: string;
  /**
  * JSON-formatted admin (ECE) level "elasticsearch.yml" setting overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_override_json Deployment#user_settings_override_json}
  */
  readonly userSettingsOverrideJson?: string;
  /**
  * YAML-formatted admin (ECE) level "elasticsearch.yml" setting overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_override_yaml Deployment#user_settings_override_yaml}
  */
  readonly userSettingsOverrideYaml?: string;
  /**
  * YAML-formatted user level "elasticsearch.yml" setting overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_yaml Deployment#user_settings_yaml}
  */
  readonly userSettingsYaml?: string;
}

export function deploymentElasticsearchConfigToTerraform(struct?: DeploymentElasticsearchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image: cdktf.stringToTerraform(struct!.dockerImage),
    plugins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.plugins),
    user_settings_json: cdktf.stringToTerraform(struct!.userSettingsJson),
    user_settings_override_json: cdktf.stringToTerraform(struct!.userSettingsOverrideJson),
    user_settings_override_yaml: cdktf.stringToTerraform(struct!.userSettingsOverrideYaml),
    user_settings_yaml: cdktf.stringToTerraform(struct!.userSettingsYaml),
  }
}


export function deploymentElasticsearchConfigToHclTerraform(struct?: DeploymentElasticsearchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_image: {
      value: cdktf.stringToHclTerraform(struct!.dockerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.plugins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_settings_json: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_override_json: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsOverrideJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_override_yaml: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsOverrideYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_yaml: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage;
    }
    if (this._plugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins;
    }
    if (this._userSettingsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsJson = this._userSettingsJson;
    }
    if (this._userSettingsOverrideJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsOverrideJson = this._userSettingsOverrideJson;
    }
    if (this._userSettingsOverrideYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsOverrideYaml = this._userSettingsOverrideYaml;
    }
    if (this._userSettingsYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsYaml = this._userSettingsYaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerImage = undefined;
      this._plugins = undefined;
      this._userSettingsJson = undefined;
      this._userSettingsOverrideJson = undefined;
      this._userSettingsOverrideYaml = undefined;
      this._userSettingsYaml = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerImage = value.dockerImage;
      this._plugins = value.plugins;
      this._userSettingsJson = value.userSettingsJson;
      this._userSettingsOverrideJson = value.userSettingsOverrideJson;
      this._userSettingsOverrideYaml = value.userSettingsOverrideYaml;
      this._userSettingsYaml = value.userSettingsYaml;
    }
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  public resetDockerImage() {
    this._dockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // plugins - computed: true, optional: true, required: false
  private _plugins?: string[]; 
  public get plugins() {
    return cdktf.Fn.tolist(this.getListAttribute('plugins'));
  }
  public set plugins(value: string[]) {
    this._plugins = value;
  }
  public resetPlugins() {
    this._plugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins;
  }

  // user_settings_json - computed: false, optional: true, required: false
  private _userSettingsJson?: string; 
  public get userSettingsJson() {
    return this.getStringAttribute('user_settings_json');
  }
  public set userSettingsJson(value: string) {
    this._userSettingsJson = value;
  }
  public resetUserSettingsJson() {
    this._userSettingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsJsonInput() {
    return this._userSettingsJson;
  }

  // user_settings_override_json - computed: false, optional: true, required: false
  private _userSettingsOverrideJson?: string; 
  public get userSettingsOverrideJson() {
    return this.getStringAttribute('user_settings_override_json');
  }
  public set userSettingsOverrideJson(value: string) {
    this._userSettingsOverrideJson = value;
  }
  public resetUserSettingsOverrideJson() {
    this._userSettingsOverrideJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsOverrideJsonInput() {
    return this._userSettingsOverrideJson;
  }

  // user_settings_override_yaml - computed: false, optional: true, required: false
  private _userSettingsOverrideYaml?: string; 
  public get userSettingsOverrideYaml() {
    return this.getStringAttribute('user_settings_override_yaml');
  }
  public set userSettingsOverrideYaml(value: string) {
    this._userSettingsOverrideYaml = value;
  }
  public resetUserSettingsOverrideYaml() {
    this._userSettingsOverrideYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsOverrideYamlInput() {
    return this._userSettingsOverrideYaml;
  }

  // user_settings_yaml - computed: false, optional: true, required: false
  private _userSettingsYaml?: string; 
  public get userSettingsYaml() {
    return this.getStringAttribute('user_settings_yaml');
  }
  public set userSettingsYaml(value: string) {
    this._userSettingsYaml = value;
  }
  public resetUserSettingsYaml() {
    this._userSettingsYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsYamlInput() {
    return this._userSettingsYaml;
  }
}
export interface DeploymentElasticsearchCoordinatingAutoscaling {
  /**
  * Whether this specific tier should be auto-scaled, overrides deployment-wide setting. Allowed for `ml` tier only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscale Deployment#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * Maximum size value for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size Deployment#max_size}
  */
  readonly maxSize?: string;
  /**
  * Maximum resource type for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size_resource Deployment#max_size_resource}
  */
  readonly maxSizeResource?: string;
  /**
  * Minimum size value for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size Deployment#min_size}
  */
  readonly minSize?: string;
  /**
  * Minimum resource type for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size_resource Deployment#min_size_resource}
  */
  readonly minSizeResource?: string;
}

export function deploymentElasticsearchCoordinatingAutoscalingToTerraform(struct?: DeploymentElasticsearchCoordinatingAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cdktf.booleanToTerraform(struct!.autoscale),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
    max_size_resource: cdktf.stringToTerraform(struct!.maxSizeResource),
    min_size: cdktf.stringToTerraform(struct!.minSize),
    min_size_resource: cdktf.stringToTerraform(struct!.minSizeResource),
  }
}


export function deploymentElasticsearchCoordinatingAutoscalingToHclTerraform(struct?: DeploymentElasticsearchCoordinatingAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale: {
      value: cdktf.booleanToHclTerraform(struct!.autoscale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.maxSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size: {
      value: cdktf.stringToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.minSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchCoordinatingAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchCoordinatingAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._maxSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSizeResource = this._maxSizeResource;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._minSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSizeResource = this._minSizeResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchCoordinatingAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscale = undefined;
      this._maxSize = undefined;
      this._maxSizeResource = undefined;
      this._minSize = undefined;
      this._minSizeResource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscale = value.autoscale;
      this._maxSize = value.maxSize;
      this._maxSizeResource = value.maxSizeResource;
      this._minSize = value.minSize;
      this._minSizeResource = value.minSizeResource;
    }
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // max_size_resource - computed: true, optional: true, required: false
  private _maxSizeResource?: string; 
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }
  public set maxSizeResource(value: string) {
    this._maxSizeResource = value;
  }
  public resetMaxSizeResource() {
    this._maxSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeResourceInput() {
    return this._maxSizeResource;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // min_size_resource - computed: true, optional: true, required: false
  private _minSizeResource?: string; 
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
  public set minSizeResource(value: string) {
    this._minSizeResource = value;
  }
  public resetMinSizeResource() {
    this._minSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeResourceInput() {
    return this._minSizeResource;
  }

  // policy_override_json - computed: true, optional: false, required: false
  public get policyOverrideJson() {
    return this.getStringAttribute('policy_override_json');
  }
}
export interface DeploymentElasticsearchCoordinating {
  /**
  * Optional Elasticsearch autoscaling settings, such a maximum and minimum size and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscaling Deployment#autoscaling}
  */
  readonly autoscaling: DeploymentElasticsearchCoordinatingAutoscaling;
  /**
  * Instance Configuration ID of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Instance Configuration version of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * The node type for the Elasticsearch Topology element (data node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_data Deployment#node_type_data}
  */
  readonly nodeTypeData?: string;
  /**
  * The node type for the Elasticsearch Topology element (ingest node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ingest Deployment#node_type_ingest}
  */
  readonly nodeTypeIngest?: string;
  /**
  * The node type for the Elasticsearch Topology element (master node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_master Deployment#node_type_master}
  */
  readonly nodeTypeMaster?: string;
  /**
  * The node type for the Elasticsearch Topology element (machine learning node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ml Deployment#node_type_ml}
  */
  readonly nodeTypeMl?: string;
  /**
  * Amount of "size_resource" per node in the "<size in GB>g" notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Number of zones that the Elasticsearch cluster will span. This is used to set HA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentElasticsearchCoordinatingToTerraform(struct?: DeploymentElasticsearchCoordinating | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: deploymentElasticsearchCoordinatingAutoscalingToTerraform(struct!.autoscaling),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    node_type_data: cdktf.stringToTerraform(struct!.nodeTypeData),
    node_type_ingest: cdktf.stringToTerraform(struct!.nodeTypeIngest),
    node_type_master: cdktf.stringToTerraform(struct!.nodeTypeMaster),
    node_type_ml: cdktf.stringToTerraform(struct!.nodeTypeMl),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentElasticsearchCoordinatingToHclTerraform(struct?: DeploymentElasticsearchCoordinating | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling: {
      value: deploymentElasticsearchCoordinatingAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchCoordinatingAutoscaling",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type_data: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ingest: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeIngest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_master: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ml: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchCoordinatingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchCoordinating | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._nodeTypeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeData = this._nodeTypeData;
    }
    if (this._nodeTypeIngest !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeIngest = this._nodeTypeIngest;
    }
    if (this._nodeTypeMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMaster = this._nodeTypeMaster;
    }
    if (this._nodeTypeMl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMl = this._nodeTypeMl;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchCoordinating | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._nodeTypeData = undefined;
      this._nodeTypeIngest = undefined;
      this._nodeTypeMaster = undefined;
      this._nodeTypeMl = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = value.autoscaling;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._nodeTypeData = value.nodeTypeData;
      this._nodeTypeIngest = value.nodeTypeIngest;
      this._nodeTypeMaster = value.nodeTypeMaster;
      this._nodeTypeMl = value.nodeTypeMl;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // autoscaling - computed: false, optional: false, required: true
  private _autoscaling = new DeploymentElasticsearchCoordinatingAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DeploymentElasticsearchCoordinatingAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // node_roles - computed: true, optional: false, required: false
  public get nodeRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('node_roles'));
  }

  // node_type_data - computed: true, optional: true, required: false
  private _nodeTypeData?: string; 
  public get nodeTypeData() {
    return this.getStringAttribute('node_type_data');
  }
  public set nodeTypeData(value: string) {
    this._nodeTypeData = value;
  }
  public resetNodeTypeData() {
    this._nodeTypeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeDataInput() {
    return this._nodeTypeData;
  }

  // node_type_ingest - computed: true, optional: true, required: false
  private _nodeTypeIngest?: string; 
  public get nodeTypeIngest() {
    return this.getStringAttribute('node_type_ingest');
  }
  public set nodeTypeIngest(value: string) {
    this._nodeTypeIngest = value;
  }
  public resetNodeTypeIngest() {
    this._nodeTypeIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIngestInput() {
    return this._nodeTypeIngest;
  }

  // node_type_master - computed: true, optional: true, required: false
  private _nodeTypeMaster?: string; 
  public get nodeTypeMaster() {
    return this.getStringAttribute('node_type_master');
  }
  public set nodeTypeMaster(value: string) {
    this._nodeTypeMaster = value;
  }
  public resetNodeTypeMaster() {
    this._nodeTypeMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMasterInput() {
    return this._nodeTypeMaster;
  }

  // node_type_ml - computed: true, optional: true, required: false
  private _nodeTypeMl?: string; 
  public get nodeTypeMl() {
    return this.getStringAttribute('node_type_ml');
  }
  public set nodeTypeMl(value: string) {
    this._nodeTypeMl = value;
  }
  public resetNodeTypeMl() {
    this._nodeTypeMl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMlInput() {
    return this._nodeTypeMl;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentElasticsearchExtension {
  /**
  * Extension name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#name Deployment#name}
  */
  readonly name: string;
  /**
  * Extension type, only `bundle` or `plugin` are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#type Deployment#type}
  */
  readonly type: string;
  /**
  * Bundle or plugin URL, the extension URL can be obtained from the `ec_deployment_extension.<name>.url` attribute or the API and cannot be a random HTTP address that is hosted elsewhere.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#url Deployment#url}
  */
  readonly url: string;
  /**
  * Elasticsearch compatibility version. Bundles should specify major or minor versions with wildcards, such as `7.*` or `*` but **plugins must use full version notation down to the patch level**, such as `7.10.1` and wildcards are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#version Deployment#version}
  */
  readonly version: string;
}

export function deploymentElasticsearchExtensionToTerraform(struct?: DeploymentElasticsearchExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function deploymentElasticsearchExtensionToHclTerraform(struct?: DeploymentElasticsearchExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentElasticsearchExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._url = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._url = value.url;
      this._version = value.version;
    }
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
}

export class DeploymentElasticsearchExtensionList extends cdktf.ComplexList {
  public internalValue? : DeploymentElasticsearchExtension[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeploymentElasticsearchExtensionOutputReference {
    return new DeploymentElasticsearchExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentElasticsearchFrozenAutoscaling {
  /**
  * Whether this specific tier should be auto-scaled, overrides deployment-wide setting. Allowed for `ml` tier only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscale Deployment#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * Maximum size value for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size Deployment#max_size}
  */
  readonly maxSize?: string;
  /**
  * Maximum resource type for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size_resource Deployment#max_size_resource}
  */
  readonly maxSizeResource?: string;
  /**
  * Minimum size value for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size Deployment#min_size}
  */
  readonly minSize?: string;
  /**
  * Minimum resource type for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size_resource Deployment#min_size_resource}
  */
  readonly minSizeResource?: string;
}

export function deploymentElasticsearchFrozenAutoscalingToTerraform(struct?: DeploymentElasticsearchFrozenAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cdktf.booleanToTerraform(struct!.autoscale),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
    max_size_resource: cdktf.stringToTerraform(struct!.maxSizeResource),
    min_size: cdktf.stringToTerraform(struct!.minSize),
    min_size_resource: cdktf.stringToTerraform(struct!.minSizeResource),
  }
}


export function deploymentElasticsearchFrozenAutoscalingToHclTerraform(struct?: DeploymentElasticsearchFrozenAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale: {
      value: cdktf.booleanToHclTerraform(struct!.autoscale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.maxSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size: {
      value: cdktf.stringToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.minSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchFrozenAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchFrozenAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._maxSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSizeResource = this._maxSizeResource;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._minSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSizeResource = this._minSizeResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchFrozenAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscale = undefined;
      this._maxSize = undefined;
      this._maxSizeResource = undefined;
      this._minSize = undefined;
      this._minSizeResource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscale = value.autoscale;
      this._maxSize = value.maxSize;
      this._maxSizeResource = value.maxSizeResource;
      this._minSize = value.minSize;
      this._minSizeResource = value.minSizeResource;
    }
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // max_size_resource - computed: true, optional: true, required: false
  private _maxSizeResource?: string; 
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }
  public set maxSizeResource(value: string) {
    this._maxSizeResource = value;
  }
  public resetMaxSizeResource() {
    this._maxSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeResourceInput() {
    return this._maxSizeResource;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // min_size_resource - computed: true, optional: true, required: false
  private _minSizeResource?: string; 
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
  public set minSizeResource(value: string) {
    this._minSizeResource = value;
  }
  public resetMinSizeResource() {
    this._minSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeResourceInput() {
    return this._minSizeResource;
  }

  // policy_override_json - computed: true, optional: false, required: false
  public get policyOverrideJson() {
    return this.getStringAttribute('policy_override_json');
  }
}
export interface DeploymentElasticsearchFrozen {
  /**
  * Optional Elasticsearch autoscaling settings, such a maximum and minimum size and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscaling Deployment#autoscaling}
  */
  readonly autoscaling: DeploymentElasticsearchFrozenAutoscaling;
  /**
  * Instance Configuration ID of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Instance Configuration version of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * The node type for the Elasticsearch Topology element (data node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_data Deployment#node_type_data}
  */
  readonly nodeTypeData?: string;
  /**
  * The node type for the Elasticsearch Topology element (ingest node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ingest Deployment#node_type_ingest}
  */
  readonly nodeTypeIngest?: string;
  /**
  * The node type for the Elasticsearch Topology element (master node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_master Deployment#node_type_master}
  */
  readonly nodeTypeMaster?: string;
  /**
  * The node type for the Elasticsearch Topology element (machine learning node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ml Deployment#node_type_ml}
  */
  readonly nodeTypeMl?: string;
  /**
  * Amount of "size_resource" per node in the "<size in GB>g" notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Number of zones that the Elasticsearch cluster will span. This is used to set HA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentElasticsearchFrozenToTerraform(struct?: DeploymentElasticsearchFrozen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: deploymentElasticsearchFrozenAutoscalingToTerraform(struct!.autoscaling),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    node_type_data: cdktf.stringToTerraform(struct!.nodeTypeData),
    node_type_ingest: cdktf.stringToTerraform(struct!.nodeTypeIngest),
    node_type_master: cdktf.stringToTerraform(struct!.nodeTypeMaster),
    node_type_ml: cdktf.stringToTerraform(struct!.nodeTypeMl),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentElasticsearchFrozenToHclTerraform(struct?: DeploymentElasticsearchFrozen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling: {
      value: deploymentElasticsearchFrozenAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchFrozenAutoscaling",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type_data: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ingest: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeIngest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_master: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ml: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchFrozenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchFrozen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._nodeTypeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeData = this._nodeTypeData;
    }
    if (this._nodeTypeIngest !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeIngest = this._nodeTypeIngest;
    }
    if (this._nodeTypeMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMaster = this._nodeTypeMaster;
    }
    if (this._nodeTypeMl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMl = this._nodeTypeMl;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchFrozen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._nodeTypeData = undefined;
      this._nodeTypeIngest = undefined;
      this._nodeTypeMaster = undefined;
      this._nodeTypeMl = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = value.autoscaling;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._nodeTypeData = value.nodeTypeData;
      this._nodeTypeIngest = value.nodeTypeIngest;
      this._nodeTypeMaster = value.nodeTypeMaster;
      this._nodeTypeMl = value.nodeTypeMl;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // autoscaling - computed: false, optional: false, required: true
  private _autoscaling = new DeploymentElasticsearchFrozenAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DeploymentElasticsearchFrozenAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // node_roles - computed: true, optional: false, required: false
  public get nodeRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('node_roles'));
  }

  // node_type_data - computed: true, optional: true, required: false
  private _nodeTypeData?: string; 
  public get nodeTypeData() {
    return this.getStringAttribute('node_type_data');
  }
  public set nodeTypeData(value: string) {
    this._nodeTypeData = value;
  }
  public resetNodeTypeData() {
    this._nodeTypeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeDataInput() {
    return this._nodeTypeData;
  }

  // node_type_ingest - computed: true, optional: true, required: false
  private _nodeTypeIngest?: string; 
  public get nodeTypeIngest() {
    return this.getStringAttribute('node_type_ingest');
  }
  public set nodeTypeIngest(value: string) {
    this._nodeTypeIngest = value;
  }
  public resetNodeTypeIngest() {
    this._nodeTypeIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIngestInput() {
    return this._nodeTypeIngest;
  }

  // node_type_master - computed: true, optional: true, required: false
  private _nodeTypeMaster?: string; 
  public get nodeTypeMaster() {
    return this.getStringAttribute('node_type_master');
  }
  public set nodeTypeMaster(value: string) {
    this._nodeTypeMaster = value;
  }
  public resetNodeTypeMaster() {
    this._nodeTypeMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMasterInput() {
    return this._nodeTypeMaster;
  }

  // node_type_ml - computed: true, optional: true, required: false
  private _nodeTypeMl?: string; 
  public get nodeTypeMl() {
    return this.getStringAttribute('node_type_ml');
  }
  public set nodeTypeMl(value: string) {
    this._nodeTypeMl = value;
  }
  public resetNodeTypeMl() {
    this._nodeTypeMl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMlInput() {
    return this._nodeTypeMl;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentElasticsearchHotAutoscaling {
  /**
  * Whether this specific tier should be auto-scaled, overrides deployment-wide setting. Allowed for `ml` tier only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscale Deployment#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * Maximum size value for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size Deployment#max_size}
  */
  readonly maxSize?: string;
  /**
  * Maximum resource type for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size_resource Deployment#max_size_resource}
  */
  readonly maxSizeResource?: string;
  /**
  * Minimum size value for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size Deployment#min_size}
  */
  readonly minSize?: string;
  /**
  * Minimum resource type for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size_resource Deployment#min_size_resource}
  */
  readonly minSizeResource?: string;
}

export function deploymentElasticsearchHotAutoscalingToTerraform(struct?: DeploymentElasticsearchHotAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cdktf.booleanToTerraform(struct!.autoscale),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
    max_size_resource: cdktf.stringToTerraform(struct!.maxSizeResource),
    min_size: cdktf.stringToTerraform(struct!.minSize),
    min_size_resource: cdktf.stringToTerraform(struct!.minSizeResource),
  }
}


export function deploymentElasticsearchHotAutoscalingToHclTerraform(struct?: DeploymentElasticsearchHotAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale: {
      value: cdktf.booleanToHclTerraform(struct!.autoscale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.maxSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size: {
      value: cdktf.stringToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.minSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchHotAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchHotAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._maxSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSizeResource = this._maxSizeResource;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._minSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSizeResource = this._minSizeResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchHotAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscale = undefined;
      this._maxSize = undefined;
      this._maxSizeResource = undefined;
      this._minSize = undefined;
      this._minSizeResource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscale = value.autoscale;
      this._maxSize = value.maxSize;
      this._maxSizeResource = value.maxSizeResource;
      this._minSize = value.minSize;
      this._minSizeResource = value.minSizeResource;
    }
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // max_size_resource - computed: true, optional: true, required: false
  private _maxSizeResource?: string; 
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }
  public set maxSizeResource(value: string) {
    this._maxSizeResource = value;
  }
  public resetMaxSizeResource() {
    this._maxSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeResourceInput() {
    return this._maxSizeResource;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // min_size_resource - computed: true, optional: true, required: false
  private _minSizeResource?: string; 
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
  public set minSizeResource(value: string) {
    this._minSizeResource = value;
  }
  public resetMinSizeResource() {
    this._minSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeResourceInput() {
    return this._minSizeResource;
  }

  // policy_override_json - computed: true, optional: false, required: false
  public get policyOverrideJson() {
    return this.getStringAttribute('policy_override_json');
  }
}
export interface DeploymentElasticsearchHot {
  /**
  * Optional Elasticsearch autoscaling settings, such a maximum and minimum size and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscaling Deployment#autoscaling}
  */
  readonly autoscaling: DeploymentElasticsearchHotAutoscaling;
  /**
  * Instance Configuration ID of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Instance Configuration version of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * The node type for the Elasticsearch Topology element (data node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_data Deployment#node_type_data}
  */
  readonly nodeTypeData?: string;
  /**
  * The node type for the Elasticsearch Topology element (ingest node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ingest Deployment#node_type_ingest}
  */
  readonly nodeTypeIngest?: string;
  /**
  * The node type for the Elasticsearch Topology element (master node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_master Deployment#node_type_master}
  */
  readonly nodeTypeMaster?: string;
  /**
  * The node type for the Elasticsearch Topology element (machine learning node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ml Deployment#node_type_ml}
  */
  readonly nodeTypeMl?: string;
  /**
  * Amount of "size_resource" per node in the "<size in GB>g" notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Number of zones that the Elasticsearch cluster will span. This is used to set HA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentElasticsearchHotToTerraform(struct?: DeploymentElasticsearchHot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: deploymentElasticsearchHotAutoscalingToTerraform(struct!.autoscaling),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    node_type_data: cdktf.stringToTerraform(struct!.nodeTypeData),
    node_type_ingest: cdktf.stringToTerraform(struct!.nodeTypeIngest),
    node_type_master: cdktf.stringToTerraform(struct!.nodeTypeMaster),
    node_type_ml: cdktf.stringToTerraform(struct!.nodeTypeMl),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentElasticsearchHotToHclTerraform(struct?: DeploymentElasticsearchHot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling: {
      value: deploymentElasticsearchHotAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchHotAutoscaling",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type_data: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ingest: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeIngest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_master: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ml: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchHotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchHot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._nodeTypeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeData = this._nodeTypeData;
    }
    if (this._nodeTypeIngest !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeIngest = this._nodeTypeIngest;
    }
    if (this._nodeTypeMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMaster = this._nodeTypeMaster;
    }
    if (this._nodeTypeMl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMl = this._nodeTypeMl;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchHot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._nodeTypeData = undefined;
      this._nodeTypeIngest = undefined;
      this._nodeTypeMaster = undefined;
      this._nodeTypeMl = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = value.autoscaling;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._nodeTypeData = value.nodeTypeData;
      this._nodeTypeIngest = value.nodeTypeIngest;
      this._nodeTypeMaster = value.nodeTypeMaster;
      this._nodeTypeMl = value.nodeTypeMl;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // autoscaling - computed: false, optional: false, required: true
  private _autoscaling = new DeploymentElasticsearchHotAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DeploymentElasticsearchHotAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // node_roles - computed: true, optional: false, required: false
  public get nodeRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('node_roles'));
  }

  // node_type_data - computed: true, optional: true, required: false
  private _nodeTypeData?: string; 
  public get nodeTypeData() {
    return this.getStringAttribute('node_type_data');
  }
  public set nodeTypeData(value: string) {
    this._nodeTypeData = value;
  }
  public resetNodeTypeData() {
    this._nodeTypeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeDataInput() {
    return this._nodeTypeData;
  }

  // node_type_ingest - computed: true, optional: true, required: false
  private _nodeTypeIngest?: string; 
  public get nodeTypeIngest() {
    return this.getStringAttribute('node_type_ingest');
  }
  public set nodeTypeIngest(value: string) {
    this._nodeTypeIngest = value;
  }
  public resetNodeTypeIngest() {
    this._nodeTypeIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIngestInput() {
    return this._nodeTypeIngest;
  }

  // node_type_master - computed: true, optional: true, required: false
  private _nodeTypeMaster?: string; 
  public get nodeTypeMaster() {
    return this.getStringAttribute('node_type_master');
  }
  public set nodeTypeMaster(value: string) {
    this._nodeTypeMaster = value;
  }
  public resetNodeTypeMaster() {
    this._nodeTypeMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMasterInput() {
    return this._nodeTypeMaster;
  }

  // node_type_ml - computed: true, optional: true, required: false
  private _nodeTypeMl?: string; 
  public get nodeTypeMl() {
    return this.getStringAttribute('node_type_ml');
  }
  public set nodeTypeMl(value: string) {
    this._nodeTypeMl = value;
  }
  public resetNodeTypeMl() {
    this._nodeTypeMl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMlInput() {
    return this._nodeTypeMl;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentElasticsearchKeystoreContents {
  /**
  * If true, the secret is handled as a file. Otherwise, it's handled as a plain string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#as_file Deployment#as_file}
  */
  readonly asFile?: boolean | cdktf.IResolvable;
  /**
  * Secret value. This can either be a string or a JSON object that is stored as a JSON string in the keystore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#value Deployment#value}
  */
  readonly value: string;
}

export function deploymentElasticsearchKeystoreContentsToTerraform(struct?: DeploymentElasticsearchKeystoreContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_file: cdktf.booleanToTerraform(struct!.asFile),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentElasticsearchKeystoreContentsToHclTerraform(struct?: DeploymentElasticsearchKeystoreContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_file: {
      value: cdktf.booleanToHclTerraform(struct!.asFile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchKeystoreContentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DeploymentElasticsearchKeystoreContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.asFile = this._asFile;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchKeystoreContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asFile = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asFile = value.asFile;
      this._value = value.value;
    }
  }

  // as_file - computed: true, optional: true, required: false
  private _asFile?: boolean | cdktf.IResolvable; 
  public get asFile() {
    return this.getBooleanAttribute('as_file');
  }
  public set asFile(value: boolean | cdktf.IResolvable) {
    this._asFile = value;
  }
  public resetAsFile() {
    this._asFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asFileInput() {
    return this._asFile;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentElasticsearchKeystoreContentsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DeploymentElasticsearchKeystoreContents } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DeploymentElasticsearchKeystoreContentsOutputReference {
    return new DeploymentElasticsearchKeystoreContentsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DeploymentElasticsearchMasterAutoscaling {
  /**
  * Whether this specific tier should be auto-scaled, overrides deployment-wide setting. Allowed for `ml` tier only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscale Deployment#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * Maximum size value for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size Deployment#max_size}
  */
  readonly maxSize?: string;
  /**
  * Maximum resource type for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size_resource Deployment#max_size_resource}
  */
  readonly maxSizeResource?: string;
  /**
  * Minimum size value for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size Deployment#min_size}
  */
  readonly minSize?: string;
  /**
  * Minimum resource type for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size_resource Deployment#min_size_resource}
  */
  readonly minSizeResource?: string;
}

export function deploymentElasticsearchMasterAutoscalingToTerraform(struct?: DeploymentElasticsearchMasterAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cdktf.booleanToTerraform(struct!.autoscale),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
    max_size_resource: cdktf.stringToTerraform(struct!.maxSizeResource),
    min_size: cdktf.stringToTerraform(struct!.minSize),
    min_size_resource: cdktf.stringToTerraform(struct!.minSizeResource),
  }
}


export function deploymentElasticsearchMasterAutoscalingToHclTerraform(struct?: DeploymentElasticsearchMasterAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale: {
      value: cdktf.booleanToHclTerraform(struct!.autoscale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.maxSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size: {
      value: cdktf.stringToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.minSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchMasterAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchMasterAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._maxSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSizeResource = this._maxSizeResource;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._minSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSizeResource = this._minSizeResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchMasterAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscale = undefined;
      this._maxSize = undefined;
      this._maxSizeResource = undefined;
      this._minSize = undefined;
      this._minSizeResource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscale = value.autoscale;
      this._maxSize = value.maxSize;
      this._maxSizeResource = value.maxSizeResource;
      this._minSize = value.minSize;
      this._minSizeResource = value.minSizeResource;
    }
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // max_size_resource - computed: true, optional: true, required: false
  private _maxSizeResource?: string; 
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }
  public set maxSizeResource(value: string) {
    this._maxSizeResource = value;
  }
  public resetMaxSizeResource() {
    this._maxSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeResourceInput() {
    return this._maxSizeResource;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // min_size_resource - computed: true, optional: true, required: false
  private _minSizeResource?: string; 
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
  public set minSizeResource(value: string) {
    this._minSizeResource = value;
  }
  public resetMinSizeResource() {
    this._minSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeResourceInput() {
    return this._minSizeResource;
  }

  // policy_override_json - computed: true, optional: false, required: false
  public get policyOverrideJson() {
    return this.getStringAttribute('policy_override_json');
  }
}
export interface DeploymentElasticsearchMaster {
  /**
  * Optional Elasticsearch autoscaling settings, such a maximum and minimum size and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscaling Deployment#autoscaling}
  */
  readonly autoscaling: DeploymentElasticsearchMasterAutoscaling;
  /**
  * Instance Configuration ID of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Instance Configuration version of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * The node type for the Elasticsearch Topology element (data node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_data Deployment#node_type_data}
  */
  readonly nodeTypeData?: string;
  /**
  * The node type for the Elasticsearch Topology element (ingest node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ingest Deployment#node_type_ingest}
  */
  readonly nodeTypeIngest?: string;
  /**
  * The node type for the Elasticsearch Topology element (master node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_master Deployment#node_type_master}
  */
  readonly nodeTypeMaster?: string;
  /**
  * The node type for the Elasticsearch Topology element (machine learning node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ml Deployment#node_type_ml}
  */
  readonly nodeTypeMl?: string;
  /**
  * Amount of "size_resource" per node in the "<size in GB>g" notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Number of zones that the Elasticsearch cluster will span. This is used to set HA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentElasticsearchMasterToTerraform(struct?: DeploymentElasticsearchMaster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: deploymentElasticsearchMasterAutoscalingToTerraform(struct!.autoscaling),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    node_type_data: cdktf.stringToTerraform(struct!.nodeTypeData),
    node_type_ingest: cdktf.stringToTerraform(struct!.nodeTypeIngest),
    node_type_master: cdktf.stringToTerraform(struct!.nodeTypeMaster),
    node_type_ml: cdktf.stringToTerraform(struct!.nodeTypeMl),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentElasticsearchMasterToHclTerraform(struct?: DeploymentElasticsearchMaster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling: {
      value: deploymentElasticsearchMasterAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchMasterAutoscaling",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type_data: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ingest: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeIngest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_master: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ml: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchMasterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchMaster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._nodeTypeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeData = this._nodeTypeData;
    }
    if (this._nodeTypeIngest !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeIngest = this._nodeTypeIngest;
    }
    if (this._nodeTypeMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMaster = this._nodeTypeMaster;
    }
    if (this._nodeTypeMl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMl = this._nodeTypeMl;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchMaster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._nodeTypeData = undefined;
      this._nodeTypeIngest = undefined;
      this._nodeTypeMaster = undefined;
      this._nodeTypeMl = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = value.autoscaling;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._nodeTypeData = value.nodeTypeData;
      this._nodeTypeIngest = value.nodeTypeIngest;
      this._nodeTypeMaster = value.nodeTypeMaster;
      this._nodeTypeMl = value.nodeTypeMl;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // autoscaling - computed: true, optional: false, required: true
  private _autoscaling = new DeploymentElasticsearchMasterAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DeploymentElasticsearchMasterAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // node_roles - computed: true, optional: false, required: false
  public get nodeRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('node_roles'));
  }

  // node_type_data - computed: true, optional: true, required: false
  private _nodeTypeData?: string; 
  public get nodeTypeData() {
    return this.getStringAttribute('node_type_data');
  }
  public set nodeTypeData(value: string) {
    this._nodeTypeData = value;
  }
  public resetNodeTypeData() {
    this._nodeTypeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeDataInput() {
    return this._nodeTypeData;
  }

  // node_type_ingest - computed: true, optional: true, required: false
  private _nodeTypeIngest?: string; 
  public get nodeTypeIngest() {
    return this.getStringAttribute('node_type_ingest');
  }
  public set nodeTypeIngest(value: string) {
    this._nodeTypeIngest = value;
  }
  public resetNodeTypeIngest() {
    this._nodeTypeIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIngestInput() {
    return this._nodeTypeIngest;
  }

  // node_type_master - computed: true, optional: true, required: false
  private _nodeTypeMaster?: string; 
  public get nodeTypeMaster() {
    return this.getStringAttribute('node_type_master');
  }
  public set nodeTypeMaster(value: string) {
    this._nodeTypeMaster = value;
  }
  public resetNodeTypeMaster() {
    this._nodeTypeMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMasterInput() {
    return this._nodeTypeMaster;
  }

  // node_type_ml - computed: true, optional: true, required: false
  private _nodeTypeMl?: string; 
  public get nodeTypeMl() {
    return this.getStringAttribute('node_type_ml');
  }
  public set nodeTypeMl(value: string) {
    this._nodeTypeMl = value;
  }
  public resetNodeTypeMl() {
    this._nodeTypeMl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMlInput() {
    return this._nodeTypeMl;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentElasticsearchMlAutoscaling {
  /**
  * Whether this specific tier should be auto-scaled, overrides deployment-wide setting. Allowed for `ml` tier only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscale Deployment#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * Maximum size value for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size Deployment#max_size}
  */
  readonly maxSize?: string;
  /**
  * Maximum resource type for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size_resource Deployment#max_size_resource}
  */
  readonly maxSizeResource?: string;
  /**
  * Minimum size value for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size Deployment#min_size}
  */
  readonly minSize?: string;
  /**
  * Minimum resource type for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size_resource Deployment#min_size_resource}
  */
  readonly minSizeResource?: string;
}

export function deploymentElasticsearchMlAutoscalingToTerraform(struct?: DeploymentElasticsearchMlAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cdktf.booleanToTerraform(struct!.autoscale),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
    max_size_resource: cdktf.stringToTerraform(struct!.maxSizeResource),
    min_size: cdktf.stringToTerraform(struct!.minSize),
    min_size_resource: cdktf.stringToTerraform(struct!.minSizeResource),
  }
}


export function deploymentElasticsearchMlAutoscalingToHclTerraform(struct?: DeploymentElasticsearchMlAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale: {
      value: cdktf.booleanToHclTerraform(struct!.autoscale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.maxSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size: {
      value: cdktf.stringToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.minSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchMlAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchMlAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._maxSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSizeResource = this._maxSizeResource;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._minSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSizeResource = this._minSizeResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchMlAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscale = undefined;
      this._maxSize = undefined;
      this._maxSizeResource = undefined;
      this._minSize = undefined;
      this._minSizeResource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscale = value.autoscale;
      this._maxSize = value.maxSize;
      this._maxSizeResource = value.maxSizeResource;
      this._minSize = value.minSize;
      this._minSizeResource = value.minSizeResource;
    }
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // max_size_resource - computed: true, optional: true, required: false
  private _maxSizeResource?: string; 
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }
  public set maxSizeResource(value: string) {
    this._maxSizeResource = value;
  }
  public resetMaxSizeResource() {
    this._maxSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeResourceInput() {
    return this._maxSizeResource;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // min_size_resource - computed: true, optional: true, required: false
  private _minSizeResource?: string; 
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
  public set minSizeResource(value: string) {
    this._minSizeResource = value;
  }
  public resetMinSizeResource() {
    this._minSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeResourceInput() {
    return this._minSizeResource;
  }

  // policy_override_json - computed: true, optional: false, required: false
  public get policyOverrideJson() {
    return this.getStringAttribute('policy_override_json');
  }
}
export interface DeploymentElasticsearchMl {
  /**
  * Optional Elasticsearch autoscaling settings, such a maximum and minimum size and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscaling Deployment#autoscaling}
  */
  readonly autoscaling: DeploymentElasticsearchMlAutoscaling;
  /**
  * Instance Configuration ID of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Instance Configuration version of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * The node type for the Elasticsearch Topology element (data node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_data Deployment#node_type_data}
  */
  readonly nodeTypeData?: string;
  /**
  * The node type for the Elasticsearch Topology element (ingest node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ingest Deployment#node_type_ingest}
  */
  readonly nodeTypeIngest?: string;
  /**
  * The node type for the Elasticsearch Topology element (master node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_master Deployment#node_type_master}
  */
  readonly nodeTypeMaster?: string;
  /**
  * The node type for the Elasticsearch Topology element (machine learning node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ml Deployment#node_type_ml}
  */
  readonly nodeTypeMl?: string;
  /**
  * Amount of "size_resource" per node in the "<size in GB>g" notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Number of zones that the Elasticsearch cluster will span. This is used to set HA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentElasticsearchMlToTerraform(struct?: DeploymentElasticsearchMl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: deploymentElasticsearchMlAutoscalingToTerraform(struct!.autoscaling),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    node_type_data: cdktf.stringToTerraform(struct!.nodeTypeData),
    node_type_ingest: cdktf.stringToTerraform(struct!.nodeTypeIngest),
    node_type_master: cdktf.stringToTerraform(struct!.nodeTypeMaster),
    node_type_ml: cdktf.stringToTerraform(struct!.nodeTypeMl),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentElasticsearchMlToHclTerraform(struct?: DeploymentElasticsearchMl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling: {
      value: deploymentElasticsearchMlAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchMlAutoscaling",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type_data: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ingest: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeIngest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_master: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ml: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchMlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchMl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._nodeTypeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeData = this._nodeTypeData;
    }
    if (this._nodeTypeIngest !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeIngest = this._nodeTypeIngest;
    }
    if (this._nodeTypeMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMaster = this._nodeTypeMaster;
    }
    if (this._nodeTypeMl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMl = this._nodeTypeMl;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchMl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._nodeTypeData = undefined;
      this._nodeTypeIngest = undefined;
      this._nodeTypeMaster = undefined;
      this._nodeTypeMl = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = value.autoscaling;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._nodeTypeData = value.nodeTypeData;
      this._nodeTypeIngest = value.nodeTypeIngest;
      this._nodeTypeMaster = value.nodeTypeMaster;
      this._nodeTypeMl = value.nodeTypeMl;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // autoscaling - computed: false, optional: false, required: true
  private _autoscaling = new DeploymentElasticsearchMlAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DeploymentElasticsearchMlAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // node_roles - computed: true, optional: false, required: false
  public get nodeRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('node_roles'));
  }

  // node_type_data - computed: true, optional: true, required: false
  private _nodeTypeData?: string; 
  public get nodeTypeData() {
    return this.getStringAttribute('node_type_data');
  }
  public set nodeTypeData(value: string) {
    this._nodeTypeData = value;
  }
  public resetNodeTypeData() {
    this._nodeTypeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeDataInput() {
    return this._nodeTypeData;
  }

  // node_type_ingest - computed: true, optional: true, required: false
  private _nodeTypeIngest?: string; 
  public get nodeTypeIngest() {
    return this.getStringAttribute('node_type_ingest');
  }
  public set nodeTypeIngest(value: string) {
    this._nodeTypeIngest = value;
  }
  public resetNodeTypeIngest() {
    this._nodeTypeIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIngestInput() {
    return this._nodeTypeIngest;
  }

  // node_type_master - computed: true, optional: true, required: false
  private _nodeTypeMaster?: string; 
  public get nodeTypeMaster() {
    return this.getStringAttribute('node_type_master');
  }
  public set nodeTypeMaster(value: string) {
    this._nodeTypeMaster = value;
  }
  public resetNodeTypeMaster() {
    this._nodeTypeMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMasterInput() {
    return this._nodeTypeMaster;
  }

  // node_type_ml - computed: true, optional: true, required: false
  private _nodeTypeMl?: string; 
  public get nodeTypeMl() {
    return this.getStringAttribute('node_type_ml');
  }
  public set nodeTypeMl(value: string) {
    this._nodeTypeMl = value;
  }
  public resetNodeTypeMl() {
    this._nodeTypeMl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMlInput() {
    return this._nodeTypeMl;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentElasticsearchRemoteCluster {
  /**
  * Alias for this Cross Cluster Search binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#alias Deployment#alias}
  */
  readonly alias: string;
  /**
  * Remote deployment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#deployment_id Deployment#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Remote elasticsearch "ref_id", it is best left to the default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#ref_id Deployment#ref_id}
  */
  readonly refId?: string;
  /**
  * If true, skip the cluster during search when disconnected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#skip_unavailable Deployment#skip_unavailable}
  */
  readonly skipUnavailable?: boolean | cdktf.IResolvable;
}

export function deploymentElasticsearchRemoteClusterToTerraform(struct?: DeploymentElasticsearchRemoteCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    ref_id: cdktf.stringToTerraform(struct!.refId),
    skip_unavailable: cdktf.booleanToTerraform(struct!.skipUnavailable),
  }
}


export function deploymentElasticsearchRemoteClusterToHclTerraform(struct?: DeploymentElasticsearchRemoteCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_unavailable: {
      value: cdktf.booleanToHclTerraform(struct!.skipUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchRemoteClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentElasticsearchRemoteCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._skipUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUnavailable = this._skipUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchRemoteCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._deploymentId = undefined;
      this._refId = undefined;
      this._skipUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._deploymentId = value.deploymentId;
      this._refId = value.refId;
      this._skipUnavailable = value.skipUnavailable;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // ref_id - computed: true, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // skip_unavailable - computed: true, optional: true, required: false
  private _skipUnavailable?: boolean | cdktf.IResolvable; 
  public get skipUnavailable() {
    return this.getBooleanAttribute('skip_unavailable');
  }
  public set skipUnavailable(value: boolean | cdktf.IResolvable) {
    this._skipUnavailable = value;
  }
  public resetSkipUnavailable() {
    this._skipUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUnavailableInput() {
    return this._skipUnavailable;
  }
}

export class DeploymentElasticsearchRemoteClusterList extends cdktf.ComplexList {
  public internalValue? : DeploymentElasticsearchRemoteCluster[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeploymentElasticsearchRemoteClusterOutputReference {
    return new DeploymentElasticsearchRemoteClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentElasticsearchSnapshotRepositoryReference {
  /**
  * ECE snapshot repository name, from the '/platform/configuration/snapshots/repositories' endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#repository_name Deployment#repository_name}
  */
  readonly repositoryName: string;
}

export function deploymentElasticsearchSnapshotRepositoryReferenceToTerraform(struct?: DeploymentElasticsearchSnapshotRepositoryReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
  }
}


export function deploymentElasticsearchSnapshotRepositoryReferenceToHclTerraform(struct?: DeploymentElasticsearchSnapshotRepositoryReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_name: {
      value: cdktf.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchSnapshotRepositoryReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchSnapshotRepositoryReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchSnapshotRepositoryReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryName = value.repositoryName;
    }
  }

  // repository_name - computed: true, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }
}
export interface DeploymentElasticsearchSnapshotRepository {
  /**
  * Cluster snapshot reference repository settings, containing the repository name in ECE fashion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#reference Deployment#reference}
  */
  readonly reference?: DeploymentElasticsearchSnapshotRepositoryReference;
}

export function deploymentElasticsearchSnapshotRepositoryToTerraform(struct?: DeploymentElasticsearchSnapshotRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: deploymentElasticsearchSnapshotRepositoryReferenceToTerraform(struct!.reference),
  }
}


export function deploymentElasticsearchSnapshotRepositoryToHclTerraform(struct?: DeploymentElasticsearchSnapshotRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: deploymentElasticsearchSnapshotRepositoryReferenceToHclTerraform(struct!.reference),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchSnapshotRepositoryReference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchSnapshotRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchSnapshotRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchSnapshotRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference.internalValue = value.reference;
    }
  }

  // reference - computed: true, optional: true, required: false
  private _reference = new DeploymentElasticsearchSnapshotRepositoryReferenceOutputReference(this, "reference");
  public get reference() {
    return this._reference;
  }
  public putReference(value: DeploymentElasticsearchSnapshotRepositoryReference) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}
export interface DeploymentElasticsearchSnapshot {
  /**
  * Indicates if Snapshotting is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#enabled Deployment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Snapshot repository configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#repository Deployment#repository}
  */
  readonly repository?: DeploymentElasticsearchSnapshotRepository;
}

export function deploymentElasticsearchSnapshotToTerraform(struct?: DeploymentElasticsearchSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    repository: deploymentElasticsearchSnapshotRepositoryToTerraform(struct!.repository),
  }
}


export function deploymentElasticsearchSnapshotToHclTerraform(struct?: DeploymentElasticsearchSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repository: {
      value: deploymentElasticsearchSnapshotRepositoryToHclTerraform(struct!.repository),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchSnapshotRepository",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchSnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._repository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchSnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._repository.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._repository.internalValue = value.repository;
    }
  }

  // enabled - computed: true, optional: false, required: true
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

  // repository - computed: true, optional: true, required: false
  private _repository = new DeploymentElasticsearchSnapshotRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: DeploymentElasticsearchSnapshotRepository) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }
}
export interface DeploymentElasticsearchSnapshotSource {
  /**
  * Name of the snapshot to restore. Use '__latest_success__' to get the most recent successful snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#snapshot_name Deployment#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * ID of the Elasticsearch cluster that will be used as the source of the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#source_elasticsearch_cluster_id Deployment#source_elasticsearch_cluster_id}
  */
  readonly sourceElasticsearchClusterId: string;
}

export function deploymentElasticsearchSnapshotSourceToTerraform(struct?: DeploymentElasticsearchSnapshotSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
    source_elasticsearch_cluster_id: cdktf.stringToTerraform(struct!.sourceElasticsearchClusterId),
  }
}


export function deploymentElasticsearchSnapshotSourceToHclTerraform(struct?: DeploymentElasticsearchSnapshotSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snapshot_name: {
      value: cdktf.stringToHclTerraform(struct!.snapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_elasticsearch_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceElasticsearchClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchSnapshotSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchSnapshotSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    if (this._sourceElasticsearchClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceElasticsearchClusterId = this._sourceElasticsearchClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchSnapshotSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snapshotName = undefined;
      this._sourceElasticsearchClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snapshotName = value.snapshotName;
      this._sourceElasticsearchClusterId = value.sourceElasticsearchClusterId;
    }
  }

  // snapshot_name - computed: true, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // source_elasticsearch_cluster_id - computed: false, optional: false, required: true
  private _sourceElasticsearchClusterId?: string; 
  public get sourceElasticsearchClusterId() {
    return this.getStringAttribute('source_elasticsearch_cluster_id');
  }
  public set sourceElasticsearchClusterId(value: string) {
    this._sourceElasticsearchClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceElasticsearchClusterIdInput() {
    return this._sourceElasticsearchClusterId;
  }
}
export interface DeploymentElasticsearchTrustAccount {
  /**
  * The ID of the Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#account_id Deployment#account_id}
  */
  readonly accountId: string;
  /**
  * If true, all clusters in this account will by default be trusted and the `trust_allowlist` is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#trust_all Deployment#trust_all}
  */
  readonly trustAll: boolean | cdktf.IResolvable;
  /**
  * The list of clusters to trust. Only used when `trust_all` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#trust_allowlist Deployment#trust_allowlist}
  */
  readonly trustAllowlist?: string[];
}

export function deploymentElasticsearchTrustAccountToTerraform(struct?: DeploymentElasticsearchTrustAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    trust_all: cdktf.booleanToTerraform(struct!.trustAll),
    trust_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustAllowlist),
  }
}


export function deploymentElasticsearchTrustAccountToHclTerraform(struct?: DeploymentElasticsearchTrustAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_all: {
      value: cdktf.booleanToHclTerraform(struct!.trustAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_allowlist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustAllowlist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchTrustAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentElasticsearchTrustAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._trustAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAll = this._trustAll;
    }
    if (this._trustAllowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAllowlist = this._trustAllowlist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchTrustAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._trustAll = undefined;
      this._trustAllowlist = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._trustAll = value.trustAll;
      this._trustAllowlist = value.trustAllowlist;
    }
  }

  // account_id - computed: true, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // trust_all - computed: true, optional: false, required: true
  private _trustAll?: boolean | cdktf.IResolvable; 
  public get trustAll() {
    return this.getBooleanAttribute('trust_all');
  }
  public set trustAll(value: boolean | cdktf.IResolvable) {
    this._trustAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAllInput() {
    return this._trustAll;
  }

  // trust_allowlist - computed: true, optional: true, required: false
  private _trustAllowlist?: string[]; 
  public get trustAllowlist() {
    return cdktf.Fn.tolist(this.getListAttribute('trust_allowlist'));
  }
  public set trustAllowlist(value: string[]) {
    this._trustAllowlist = value;
  }
  public resetTrustAllowlist() {
    this._trustAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAllowlistInput() {
    return this._trustAllowlist;
  }
}

export class DeploymentElasticsearchTrustAccountList extends cdktf.ComplexList {
  public internalValue? : DeploymentElasticsearchTrustAccount[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeploymentElasticsearchTrustAccountOutputReference {
    return new DeploymentElasticsearchTrustAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentElasticsearchTrustExternal {
  /**
  * The ID of the external trust relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#relationship_id Deployment#relationship_id}
  */
  readonly relationshipId: string;
  /**
  * If true, all clusters in this account will by default be trusted and the `trust_allowlist` is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#trust_all Deployment#trust_all}
  */
  readonly trustAll: boolean | cdktf.IResolvable;
  /**
  * The list of clusters to trust. Only used when `trust_all` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#trust_allowlist Deployment#trust_allowlist}
  */
  readonly trustAllowlist?: string[];
}

export function deploymentElasticsearchTrustExternalToTerraform(struct?: DeploymentElasticsearchTrustExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relationship_id: cdktf.stringToTerraform(struct!.relationshipId),
    trust_all: cdktf.booleanToTerraform(struct!.trustAll),
    trust_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustAllowlist),
  }
}


export function deploymentElasticsearchTrustExternalToHclTerraform(struct?: DeploymentElasticsearchTrustExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relationship_id: {
      value: cdktf.stringToHclTerraform(struct!.relationshipId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_all: {
      value: cdktf.booleanToHclTerraform(struct!.trustAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_allowlist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustAllowlist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchTrustExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeploymentElasticsearchTrustExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relationshipId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationshipId = this._relationshipId;
    }
    if (this._trustAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAll = this._trustAll;
    }
    if (this._trustAllowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAllowlist = this._trustAllowlist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchTrustExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._relationshipId = undefined;
      this._trustAll = undefined;
      this._trustAllowlist = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._relationshipId = value.relationshipId;
      this._trustAll = value.trustAll;
      this._trustAllowlist = value.trustAllowlist;
    }
  }

  // relationship_id - computed: true, optional: false, required: true
  private _relationshipId?: string; 
  public get relationshipId() {
    return this.getStringAttribute('relationship_id');
  }
  public set relationshipId(value: string) {
    this._relationshipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipIdInput() {
    return this._relationshipId;
  }

  // trust_all - computed: true, optional: false, required: true
  private _trustAll?: boolean | cdktf.IResolvable; 
  public get trustAll() {
    return this.getBooleanAttribute('trust_all');
  }
  public set trustAll(value: boolean | cdktf.IResolvable) {
    this._trustAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAllInput() {
    return this._trustAll;
  }

  // trust_allowlist - computed: true, optional: true, required: false
  private _trustAllowlist?: string[]; 
  public get trustAllowlist() {
    return cdktf.Fn.tolist(this.getListAttribute('trust_allowlist'));
  }
  public set trustAllowlist(value: string[]) {
    this._trustAllowlist = value;
  }
  public resetTrustAllowlist() {
    this._trustAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAllowlistInput() {
    return this._trustAllowlist;
  }
}

export class DeploymentElasticsearchTrustExternalList extends cdktf.ComplexList {
  public internalValue? : DeploymentElasticsearchTrustExternal[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeploymentElasticsearchTrustExternalOutputReference {
    return new DeploymentElasticsearchTrustExternalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentElasticsearchWarmAutoscaling {
  /**
  * Whether this specific tier should be auto-scaled, overrides deployment-wide setting. Allowed for `ml` tier only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscale Deployment#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * Maximum size value for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size Deployment#max_size}
  */
  readonly maxSize?: string;
  /**
  * Maximum resource type for the maximum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#max_size_resource Deployment#max_size_resource}
  */
  readonly maxSizeResource?: string;
  /**
  * Minimum size value for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size Deployment#min_size}
  */
  readonly minSize?: string;
  /**
  * Minimum resource type for the minimum autoscaling setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#min_size_resource Deployment#min_size_resource}
  */
  readonly minSizeResource?: string;
}

export function deploymentElasticsearchWarmAutoscalingToTerraform(struct?: DeploymentElasticsearchWarmAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cdktf.booleanToTerraform(struct!.autoscale),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
    max_size_resource: cdktf.stringToTerraform(struct!.maxSizeResource),
    min_size: cdktf.stringToTerraform(struct!.minSize),
    min_size_resource: cdktf.stringToTerraform(struct!.minSizeResource),
  }
}


export function deploymentElasticsearchWarmAutoscalingToHclTerraform(struct?: DeploymentElasticsearchWarmAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale: {
      value: cdktf.booleanToHclTerraform(struct!.autoscale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.maxSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size: {
      value: cdktf.stringToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size_resource: {
      value: cdktf.stringToHclTerraform(struct!.minSizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchWarmAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchWarmAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._maxSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSizeResource = this._maxSizeResource;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._minSizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSizeResource = this._minSizeResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchWarmAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscale = undefined;
      this._maxSize = undefined;
      this._maxSizeResource = undefined;
      this._minSize = undefined;
      this._minSizeResource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscale = value.autoscale;
      this._maxSize = value.maxSize;
      this._maxSizeResource = value.maxSizeResource;
      this._minSize = value.minSize;
      this._minSizeResource = value.minSizeResource;
    }
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // max_size_resource - computed: true, optional: true, required: false
  private _maxSizeResource?: string; 
  public get maxSizeResource() {
    return this.getStringAttribute('max_size_resource');
  }
  public set maxSizeResource(value: string) {
    this._maxSizeResource = value;
  }
  public resetMaxSizeResource() {
    this._maxSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeResourceInput() {
    return this._maxSizeResource;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // min_size_resource - computed: true, optional: true, required: false
  private _minSizeResource?: string; 
  public get minSizeResource() {
    return this.getStringAttribute('min_size_resource');
  }
  public set minSizeResource(value: string) {
    this._minSizeResource = value;
  }
  public resetMinSizeResource() {
    this._minSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeResourceInput() {
    return this._minSizeResource;
  }

  // policy_override_json - computed: true, optional: false, required: false
  public get policyOverrideJson() {
    return this.getStringAttribute('policy_override_json');
  }
}
export interface DeploymentElasticsearchWarm {
  /**
  * Optional Elasticsearch autoscaling settings, such a maximum and minimum size and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscaling Deployment#autoscaling}
  */
  readonly autoscaling: DeploymentElasticsearchWarmAutoscaling;
  /**
  * Instance Configuration ID of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Instance Configuration version of the topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * The node type for the Elasticsearch Topology element (data node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_data Deployment#node_type_data}
  */
  readonly nodeTypeData?: string;
  /**
  * The node type for the Elasticsearch Topology element (ingest node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ingest Deployment#node_type_ingest}
  */
  readonly nodeTypeIngest?: string;
  /**
  * The node type for the Elasticsearch Topology element (master node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_master Deployment#node_type_master}
  */
  readonly nodeTypeMaster?: string;
  /**
  * The node type for the Elasticsearch Topology element (machine learning node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#node_type_ml Deployment#node_type_ml}
  */
  readonly nodeTypeMl?: string;
  /**
  * Amount of "size_resource" per node in the "<size in GB>g" notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Number of zones that the Elasticsearch cluster will span. This is used to set HA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentElasticsearchWarmToTerraform(struct?: DeploymentElasticsearchWarm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: deploymentElasticsearchWarmAutoscalingToTerraform(struct!.autoscaling),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    node_type_data: cdktf.stringToTerraform(struct!.nodeTypeData),
    node_type_ingest: cdktf.stringToTerraform(struct!.nodeTypeIngest),
    node_type_master: cdktf.stringToTerraform(struct!.nodeTypeMaster),
    node_type_ml: cdktf.stringToTerraform(struct!.nodeTypeMl),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentElasticsearchWarmToHclTerraform(struct?: DeploymentElasticsearchWarm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling: {
      value: deploymentElasticsearchWarmAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchWarmAutoscaling",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type_data: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ingest: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeIngest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_master: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_ml: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeMl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchWarmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearchWarm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._nodeTypeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeData = this._nodeTypeData;
    }
    if (this._nodeTypeIngest !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeIngest = this._nodeTypeIngest;
    }
    if (this._nodeTypeMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMaster = this._nodeTypeMaster;
    }
    if (this._nodeTypeMl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeMl = this._nodeTypeMl;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearchWarm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._nodeTypeData = undefined;
      this._nodeTypeIngest = undefined;
      this._nodeTypeMaster = undefined;
      this._nodeTypeMl = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = value.autoscaling;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._nodeTypeData = value.nodeTypeData;
      this._nodeTypeIngest = value.nodeTypeIngest;
      this._nodeTypeMaster = value.nodeTypeMaster;
      this._nodeTypeMl = value.nodeTypeMl;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // autoscaling - computed: false, optional: false, required: true
  private _autoscaling = new DeploymentElasticsearchWarmAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DeploymentElasticsearchWarmAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // node_roles - computed: true, optional: false, required: false
  public get nodeRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('node_roles'));
  }

  // node_type_data - computed: true, optional: true, required: false
  private _nodeTypeData?: string; 
  public get nodeTypeData() {
    return this.getStringAttribute('node_type_data');
  }
  public set nodeTypeData(value: string) {
    this._nodeTypeData = value;
  }
  public resetNodeTypeData() {
    this._nodeTypeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeDataInput() {
    return this._nodeTypeData;
  }

  // node_type_ingest - computed: true, optional: true, required: false
  private _nodeTypeIngest?: string; 
  public get nodeTypeIngest() {
    return this.getStringAttribute('node_type_ingest');
  }
  public set nodeTypeIngest(value: string) {
    this._nodeTypeIngest = value;
  }
  public resetNodeTypeIngest() {
    this._nodeTypeIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIngestInput() {
    return this._nodeTypeIngest;
  }

  // node_type_master - computed: true, optional: true, required: false
  private _nodeTypeMaster?: string; 
  public get nodeTypeMaster() {
    return this.getStringAttribute('node_type_master');
  }
  public set nodeTypeMaster(value: string) {
    this._nodeTypeMaster = value;
  }
  public resetNodeTypeMaster() {
    this._nodeTypeMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMasterInput() {
    return this._nodeTypeMaster;
  }

  // node_type_ml - computed: true, optional: true, required: false
  private _nodeTypeMl?: string; 
  public get nodeTypeMl() {
    return this.getStringAttribute('node_type_ml');
  }
  public set nodeTypeMl(value: string) {
    this._nodeTypeMl = value;
  }
  public resetNodeTypeMl() {
    this._nodeTypeMl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeMlInput() {
    return this._nodeTypeMl;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentElasticsearch {
  /**
  * Enable or disable autoscaling. Defaults to the setting coming from the deployment template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#autoscale Deployment#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * 'cold' topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#cold Deployment#cold}
  */
  readonly cold?: DeploymentElasticsearchCold;
  /**
  * Elasticsearch settings which will be applied to all topologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#config Deployment#config}
  */
  readonly config?: DeploymentElasticsearchConfig;
  /**
  * 'coordinating' topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#coordinating Deployment#coordinating}
  */
  readonly coordinating?: DeploymentElasticsearchCoordinating;
  /**
  * Optional Elasticsearch extensions such as custom bundles or plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#extension Deployment#extension}
  */
  readonly extension?: DeploymentElasticsearchExtension[] | cdktf.IResolvable;
  /**
  * 'frozen' topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#frozen Deployment#frozen}
  */
  readonly frozen?: DeploymentElasticsearchFrozen;
  /**
  * 'hot' topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#hot Deployment#hot}
  */
  readonly hot: DeploymentElasticsearchHot;
  /**
  * Keystore contents that are controlled by the deployment resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#keystore_contents Deployment#keystore_contents}
  */
  readonly keystoreContents?: { [key: string]: DeploymentElasticsearchKeystoreContents } | cdktf.IResolvable;
  /**
  * 'master' topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#master Deployment#master}
  */
  readonly master?: DeploymentElasticsearchMaster;
  /**
  * 'ml' topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#ml Deployment#ml}
  */
  readonly ml?: DeploymentElasticsearchMl;
  /**
  * A human readable reference for the Elasticsearch resource. The default value `main-elasticsearch` is recommended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#ref_id Deployment#ref_id}
  */
  readonly refId?: string;
  /**
  * Optional Elasticsearch remote clusters to configure for the Elasticsearch resource, can be set multiple times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#remote_cluster Deployment#remote_cluster}
  */
  readonly remoteCluster?: DeploymentElasticsearchRemoteCluster[] | cdktf.IResolvable;
  /**
  * (ECE only) Snapshot configuration settings for an Elasticsearch cluster.
  * 
  * For ESS please use the [elasticstack_elasticsearch_snapshot_repository](https://registry.terraform.io/providers/elastic/elasticstack/latest/docs/resources/elasticsearch_snapshot_repository) resource from the [Elastic Stack terraform provider](https://registry.terraform.io/providers/elastic/elasticstack/latest).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#snapshot Deployment#snapshot}
  */
  readonly snapshot?: DeploymentElasticsearchSnapshot;
  /**
  * Restores data from a snapshot of another deployment.
  * 
  * ~> **Note on behavior** The <code>snapshot_source</code> block will not be saved in the Terraform state due to its transient nature. This means that whenever the <code>snapshot_source</code> block is set, a snapshot will **always be restored**, unless removed before running <code>terraform apply</code>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#snapshot_source Deployment#snapshot_source}
  */
  readonly snapshotSource?: DeploymentElasticsearchSnapshotSource;
  /**
  * Configuration strategy type autodetect, grow_and_shrink, rolling_grow_and_shrink, rolling_all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#strategy Deployment#strategy}
  */
  readonly strategy?: string;
  /**
  * Optional Elasticsearch account trust settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#trust_account Deployment#trust_account}
  */
  readonly trustAccount?: DeploymentElasticsearchTrustAccount[] | cdktf.IResolvable;
  /**
  * Optional Elasticsearch external trust settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#trust_external Deployment#trust_external}
  */
  readonly trustExternal?: DeploymentElasticsearchTrustExternal[] | cdktf.IResolvable;
  /**
  * 'warm' topology element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#warm Deployment#warm}
  */
  readonly warm?: DeploymentElasticsearchWarm;
}

export function deploymentElasticsearchToTerraform(struct?: DeploymentElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cdktf.booleanToTerraform(struct!.autoscale),
    cold: deploymentElasticsearchColdToTerraform(struct!.cold),
    config: deploymentElasticsearchConfigToTerraform(struct!.config),
    coordinating: deploymentElasticsearchCoordinatingToTerraform(struct!.coordinating),
    extension: cdktf.listMapper(deploymentElasticsearchExtensionToTerraform, false)(struct!.extension),
    frozen: deploymentElasticsearchFrozenToTerraform(struct!.frozen),
    hot: deploymentElasticsearchHotToTerraform(struct!.hot),
    keystore_contents: cdktf.hashMapper(deploymentElasticsearchKeystoreContentsToTerraform)(struct!.keystoreContents),
    master: deploymentElasticsearchMasterToTerraform(struct!.master),
    ml: deploymentElasticsearchMlToTerraform(struct!.ml),
    ref_id: cdktf.stringToTerraform(struct!.refId),
    remote_cluster: cdktf.listMapper(deploymentElasticsearchRemoteClusterToTerraform, false)(struct!.remoteCluster),
    snapshot: deploymentElasticsearchSnapshotToTerraform(struct!.snapshot),
    snapshot_source: deploymentElasticsearchSnapshotSourceToTerraform(struct!.snapshotSource),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    trust_account: cdktf.listMapper(deploymentElasticsearchTrustAccountToTerraform, false)(struct!.trustAccount),
    trust_external: cdktf.listMapper(deploymentElasticsearchTrustExternalToTerraform, false)(struct!.trustExternal),
    warm: deploymentElasticsearchWarmToTerraform(struct!.warm),
  }
}


export function deploymentElasticsearchToHclTerraform(struct?: DeploymentElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale: {
      value: cdktf.booleanToHclTerraform(struct!.autoscale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cold: {
      value: deploymentElasticsearchColdToHclTerraform(struct!.cold),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchCold",
    },
    config: {
      value: deploymentElasticsearchConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchConfig",
    },
    coordinating: {
      value: deploymentElasticsearchCoordinatingToHclTerraform(struct!.coordinating),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchCoordinating",
    },
    extension: {
      value: cdktf.listMapperHcl(deploymentElasticsearchExtensionToHclTerraform, false)(struct!.extension),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentElasticsearchExtensionList",
    },
    frozen: {
      value: deploymentElasticsearchFrozenToHclTerraform(struct!.frozen),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchFrozen",
    },
    hot: {
      value: deploymentElasticsearchHotToHclTerraform(struct!.hot),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchHot",
    },
    keystore_contents: {
      value: cdktf.hashMapperHcl(deploymentElasticsearchKeystoreContentsToHclTerraform)(struct!.keystoreContents),
      isBlock: true,
      type: "map",
      storageClassType: "DeploymentElasticsearchKeystoreContentsMap",
    },
    master: {
      value: deploymentElasticsearchMasterToHclTerraform(struct!.master),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchMaster",
    },
    ml: {
      value: deploymentElasticsearchMlToHclTerraform(struct!.ml),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchMl",
    },
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_cluster: {
      value: cdktf.listMapperHcl(deploymentElasticsearchRemoteClusterToHclTerraform, false)(struct!.remoteCluster),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentElasticsearchRemoteClusterList",
    },
    snapshot: {
      value: deploymentElasticsearchSnapshotToHclTerraform(struct!.snapshot),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchSnapshot",
    },
    snapshot_source: {
      value: deploymentElasticsearchSnapshotSourceToHclTerraform(struct!.snapshotSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchSnapshotSource",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_account: {
      value: cdktf.listMapperHcl(deploymentElasticsearchTrustAccountToHclTerraform, false)(struct!.trustAccount),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentElasticsearchTrustAccountList",
    },
    trust_external: {
      value: cdktf.listMapperHcl(deploymentElasticsearchTrustExternalToHclTerraform, false)(struct!.trustExternal),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentElasticsearchTrustExternalList",
    },
    warm: {
      value: deploymentElasticsearchWarmToHclTerraform(struct!.warm),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentElasticsearchWarm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentElasticsearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale;
    }
    if (this._cold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cold = this._cold?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._coordinating?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinating = this._coordinating?.internalValue;
    }
    if (this._extension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension?.internalValue;
    }
    if (this._frozen?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frozen = this._frozen?.internalValue;
    }
    if (this._hot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hot = this._hot?.internalValue;
    }
    if (this._keystoreContents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoreContents = this._keystoreContents?.internalValue;
    }
    if (this._master?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.master = this._master?.internalValue;
    }
    if (this._ml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ml = this._ml?.internalValue;
    }
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._remoteCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCluster = this._remoteCluster?.internalValue;
    }
    if (this._snapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot?.internalValue;
    }
    if (this._snapshotSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotSource = this._snapshotSource?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._trustAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAccount = this._trustAccount?.internalValue;
    }
    if (this._trustExternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustExternal = this._trustExternal?.internalValue;
    }
    if (this._warm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warm = this._warm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscale = undefined;
      this._cold.internalValue = undefined;
      this._config.internalValue = undefined;
      this._coordinating.internalValue = undefined;
      this._extension.internalValue = undefined;
      this._frozen.internalValue = undefined;
      this._hot.internalValue = undefined;
      this._keystoreContents.internalValue = undefined;
      this._master.internalValue = undefined;
      this._ml.internalValue = undefined;
      this._refId = undefined;
      this._remoteCluster.internalValue = undefined;
      this._snapshot.internalValue = undefined;
      this._snapshotSource.internalValue = undefined;
      this._strategy = undefined;
      this._trustAccount.internalValue = undefined;
      this._trustExternal.internalValue = undefined;
      this._warm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscale = value.autoscale;
      this._cold.internalValue = value.cold;
      this._config.internalValue = value.config;
      this._coordinating.internalValue = value.coordinating;
      this._extension.internalValue = value.extension;
      this._frozen.internalValue = value.frozen;
      this._hot.internalValue = value.hot;
      this._keystoreContents.internalValue = value.keystoreContents;
      this._master.internalValue = value.master;
      this._ml.internalValue = value.ml;
      this._refId = value.refId;
      this._remoteCluster.internalValue = value.remoteCluster;
      this._snapshot.internalValue = value.snapshot;
      this._snapshotSource.internalValue = value.snapshotSource;
      this._strategy = value.strategy;
      this._trustAccount.internalValue = value.trustAccount;
      this._trustExternal.internalValue = value.trustExternal;
      this._warm.internalValue = value.warm;
    }
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // cold - computed: false, optional: true, required: false
  private _cold = new DeploymentElasticsearchColdOutputReference(this, "cold");
  public get cold() {
    return this._cold;
  }
  public putCold(value: DeploymentElasticsearchCold) {
    this._cold.internalValue = value;
  }
  public resetCold() {
    this._cold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldInput() {
    return this._cold.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DeploymentElasticsearchConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DeploymentElasticsearchConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // coordinating - computed: false, optional: true, required: false
  private _coordinating = new DeploymentElasticsearchCoordinatingOutputReference(this, "coordinating");
  public get coordinating() {
    return this._coordinating;
  }
  public putCoordinating(value: DeploymentElasticsearchCoordinating) {
    this._coordinating.internalValue = value;
  }
  public resetCoordinating() {
    this._coordinating.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatingInput() {
    return this._coordinating.internalValue;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new DeploymentElasticsearchExtensionList(this, "extension", true);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: DeploymentElasticsearchExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // frozen - computed: false, optional: true, required: false
  private _frozen = new DeploymentElasticsearchFrozenOutputReference(this, "frozen");
  public get frozen() {
    return this._frozen;
  }
  public putFrozen(value: DeploymentElasticsearchFrozen) {
    this._frozen.internalValue = value;
  }
  public resetFrozen() {
    this._frozen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frozenInput() {
    return this._frozen.internalValue;
  }

  // hot - computed: false, optional: false, required: true
  private _hot = new DeploymentElasticsearchHotOutputReference(this, "hot");
  public get hot() {
    return this._hot;
  }
  public putHot(value: DeploymentElasticsearchHot) {
    this._hot.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hotInput() {
    return this._hot.internalValue;
  }

  // http_endpoint - computed: true, optional: false, required: false
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }

  // https_endpoint - computed: true, optional: false, required: false
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
  }

  // keystore_contents - computed: false, optional: true, required: false
  private _keystoreContents = new DeploymentElasticsearchKeystoreContentsMap(this, "keystore_contents");
  public get keystoreContents() {
    return this._keystoreContents;
  }
  public putKeystoreContents(value: { [key: string]: DeploymentElasticsearchKeystoreContents } | cdktf.IResolvable) {
    this._keystoreContents.internalValue = value;
  }
  public resetKeystoreContents() {
    this._keystoreContents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreContentsInput() {
    return this._keystoreContents.internalValue;
  }

  // master - computed: true, optional: true, required: false
  private _master = new DeploymentElasticsearchMasterOutputReference(this, "master");
  public get master() {
    return this._master;
  }
  public putMaster(value: DeploymentElasticsearchMaster) {
    this._master.internalValue = value;
  }
  public resetMaster() {
    this._master.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master.internalValue;
  }

  // ml - computed: false, optional: true, required: false
  private _ml = new DeploymentElasticsearchMlOutputReference(this, "ml");
  public get ml() {
    return this._ml;
  }
  public putMl(value: DeploymentElasticsearchMl) {
    this._ml.internalValue = value;
  }
  public resetMl() {
    this._ml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlInput() {
    return this._ml.internalValue;
  }

  // ref_id - computed: true, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // remote_cluster - computed: false, optional: true, required: false
  private _remoteCluster = new DeploymentElasticsearchRemoteClusterList(this, "remote_cluster", true);
  public get remoteCluster() {
    return this._remoteCluster;
  }
  public putRemoteCluster(value: DeploymentElasticsearchRemoteCluster[] | cdktf.IResolvable) {
    this._remoteCluster.internalValue = value;
  }
  public resetRemoteCluster() {
    this._remoteCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteClusterInput() {
    return this._remoteCluster.internalValue;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // snapshot - computed: true, optional: true, required: false
  private _snapshot = new DeploymentElasticsearchSnapshotOutputReference(this, "snapshot");
  public get snapshot() {
    return this._snapshot;
  }
  public putSnapshot(value: DeploymentElasticsearchSnapshot) {
    this._snapshot.internalValue = value;
  }
  public resetSnapshot() {
    this._snapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot.internalValue;
  }

  // snapshot_source - computed: false, optional: true, required: false
  private _snapshotSource = new DeploymentElasticsearchSnapshotSourceOutputReference(this, "snapshot_source");
  public get snapshotSource() {
    return this._snapshotSource;
  }
  public putSnapshotSource(value: DeploymentElasticsearchSnapshotSource) {
    this._snapshotSource.internalValue = value;
  }
  public resetSnapshotSource() {
    this._snapshotSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotSourceInput() {
    return this._snapshotSource.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // trust_account - computed: true, optional: true, required: false
  private _trustAccount = new DeploymentElasticsearchTrustAccountList(this, "trust_account", true);
  public get trustAccount() {
    return this._trustAccount;
  }
  public putTrustAccount(value: DeploymentElasticsearchTrustAccount[] | cdktf.IResolvable) {
    this._trustAccount.internalValue = value;
  }
  public resetTrustAccount() {
    this._trustAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAccountInput() {
    return this._trustAccount.internalValue;
  }

  // trust_external - computed: true, optional: true, required: false
  private _trustExternal = new DeploymentElasticsearchTrustExternalList(this, "trust_external", true);
  public get trustExternal() {
    return this._trustExternal;
  }
  public putTrustExternal(value: DeploymentElasticsearchTrustExternal[] | cdktf.IResolvable) {
    this._trustExternal.internalValue = value;
  }
  public resetTrustExternal() {
    this._trustExternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustExternalInput() {
    return this._trustExternal.internalValue;
  }

  // warm - computed: false, optional: true, required: false
  private _warm = new DeploymentElasticsearchWarmOutputReference(this, "warm");
  public get warm() {
    return this._warm;
  }
  public putWarm(value: DeploymentElasticsearchWarm) {
    this._warm.internalValue = value;
  }
  public resetWarm() {
    this._warm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmInput() {
    return this._warm.internalValue;
  }
}
export interface DeploymentEnterpriseSearchConfig {
  /**
  * Optionally override the docker image the Enterprise Search nodes will use. Note that this field will only work for internal users only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#docker_image Deployment#docker_image}
  */
  readonly dockerImage?: string;
  /**
  * An arbitrary JSON object allowing (non-admin) cluster owners to set their parameters (only one of this and 'user_settings_yaml' is allowed), provided they are on the whitelist ('user_settings_whitelist') and not on the blacklist ('user_settings_blacklist'). (This field together with 'user_settings_override*' and 'system_settings' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_json Deployment#user_settings_json}
  */
  readonly userSettingsJson?: string;
  /**
  * An arbitrary JSON object allowing ECE admins owners to set clusters' parameters (only one of this and 'user_settings_override_yaml' is allowed), ie in addition to the documented 'system_settings'. (This field together with 'system_settings' and 'user_settings*' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_override_json Deployment#user_settings_override_json}
  */
  readonly userSettingsOverrideJson?: string;
  /**
  * An arbitrary YAML object allowing ECE admins owners to set clusters' parameters (only one of this and 'user_settings_override_json' is allowed), ie in addition to the documented 'system_settings'. (This field together with 'system_settings' and 'user_settings*' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_override_yaml Deployment#user_settings_override_yaml}
  */
  readonly userSettingsOverrideYaml?: string;
  /**
  * An arbitrary YAML object allowing (non-admin) cluster owners to set their parameters (only one of this and 'user_settings_json' is allowed), provided they are on the whitelist ('user_settings_whitelist') and not on the blacklist ('user_settings_blacklist'). (These field together with 'user_settings_override*' and 'system_settings' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_yaml Deployment#user_settings_yaml}
  */
  readonly userSettingsYaml?: string;
}

export function deploymentEnterpriseSearchConfigToTerraform(struct?: DeploymentEnterpriseSearchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image: cdktf.stringToTerraform(struct!.dockerImage),
    user_settings_json: cdktf.stringToTerraform(struct!.userSettingsJson),
    user_settings_override_json: cdktf.stringToTerraform(struct!.userSettingsOverrideJson),
    user_settings_override_yaml: cdktf.stringToTerraform(struct!.userSettingsOverrideYaml),
    user_settings_yaml: cdktf.stringToTerraform(struct!.userSettingsYaml),
  }
}


export function deploymentEnterpriseSearchConfigToHclTerraform(struct?: DeploymentEnterpriseSearchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_image: {
      value: cdktf.stringToHclTerraform(struct!.dockerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_json: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_override_json: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsOverrideJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_override_yaml: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsOverrideYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_yaml: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentEnterpriseSearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentEnterpriseSearchConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage;
    }
    if (this._userSettingsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsJson = this._userSettingsJson;
    }
    if (this._userSettingsOverrideJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsOverrideJson = this._userSettingsOverrideJson;
    }
    if (this._userSettingsOverrideYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsOverrideYaml = this._userSettingsOverrideYaml;
    }
    if (this._userSettingsYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsYaml = this._userSettingsYaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEnterpriseSearchConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerImage = undefined;
      this._userSettingsJson = undefined;
      this._userSettingsOverrideJson = undefined;
      this._userSettingsOverrideYaml = undefined;
      this._userSettingsYaml = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerImage = value.dockerImage;
      this._userSettingsJson = value.userSettingsJson;
      this._userSettingsOverrideJson = value.userSettingsOverrideJson;
      this._userSettingsOverrideYaml = value.userSettingsOverrideYaml;
      this._userSettingsYaml = value.userSettingsYaml;
    }
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  public resetDockerImage() {
    this._dockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // user_settings_json - computed: false, optional: true, required: false
  private _userSettingsJson?: string; 
  public get userSettingsJson() {
    return this.getStringAttribute('user_settings_json');
  }
  public set userSettingsJson(value: string) {
    this._userSettingsJson = value;
  }
  public resetUserSettingsJson() {
    this._userSettingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsJsonInput() {
    return this._userSettingsJson;
  }

  // user_settings_override_json - computed: false, optional: true, required: false
  private _userSettingsOverrideJson?: string; 
  public get userSettingsOverrideJson() {
    return this.getStringAttribute('user_settings_override_json');
  }
  public set userSettingsOverrideJson(value: string) {
    this._userSettingsOverrideJson = value;
  }
  public resetUserSettingsOverrideJson() {
    this._userSettingsOverrideJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsOverrideJsonInput() {
    return this._userSettingsOverrideJson;
  }

  // user_settings_override_yaml - computed: false, optional: true, required: false
  private _userSettingsOverrideYaml?: string; 
  public get userSettingsOverrideYaml() {
    return this.getStringAttribute('user_settings_override_yaml');
  }
  public set userSettingsOverrideYaml(value: string) {
    this._userSettingsOverrideYaml = value;
  }
  public resetUserSettingsOverrideYaml() {
    this._userSettingsOverrideYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsOverrideYamlInput() {
    return this._userSettingsOverrideYaml;
  }

  // user_settings_yaml - computed: false, optional: true, required: false
  private _userSettingsYaml?: string; 
  public get userSettingsYaml() {
    return this.getStringAttribute('user_settings_yaml');
  }
  public set userSettingsYaml(value: string) {
    this._userSettingsYaml = value;
  }
  public resetUserSettingsYaml() {
    this._userSettingsYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsYamlInput() {
    return this._userSettingsYaml;
  }
}
export interface DeploymentEnterpriseSearch {
  /**
  * Optionally define the Enterprise Search configuration options for the Enterprise Search Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#config Deployment#config}
  */
  readonly config?: DeploymentEnterpriseSearchConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#elasticsearch_cluster_ref_id Deployment#elasticsearch_cluster_ref_id}
  */
  readonly elasticsearchClusterRefId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#ref_id Deployment#ref_id}
  */
  readonly refId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Optional size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentEnterpriseSearchToTerraform(struct?: DeploymentEnterpriseSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: deploymentEnterpriseSearchConfigToTerraform(struct!.config),
    elasticsearch_cluster_ref_id: cdktf.stringToTerraform(struct!.elasticsearchClusterRefId),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    ref_id: cdktf.stringToTerraform(struct!.refId),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentEnterpriseSearchToHclTerraform(struct?: DeploymentEnterpriseSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: deploymentEnterpriseSearchConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentEnterpriseSearchConfig",
    },
    elasticsearch_cluster_ref_id: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchClusterRefId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentEnterpriseSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentEnterpriseSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._elasticsearchClusterRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchClusterRefId = this._elasticsearchClusterRefId;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEnterpriseSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._elasticsearchClusterRefId = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._refId = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._elasticsearchClusterRefId = value.elasticsearchClusterRefId;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._refId = value.refId;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DeploymentEnterpriseSearchConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DeploymentEnterpriseSearchConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // elasticsearch_cluster_ref_id - computed: true, optional: true, required: false
  private _elasticsearchClusterRefId?: string; 
  public get elasticsearchClusterRefId() {
    return this.getStringAttribute('elasticsearch_cluster_ref_id');
  }
  public set elasticsearchClusterRefId(value: string) {
    this._elasticsearchClusterRefId = value;
  }
  public resetElasticsearchClusterRefId() {
    this._elasticsearchClusterRefId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchClusterRefIdInput() {
    return this._elasticsearchClusterRefId;
  }

  // http_endpoint - computed: true, optional: false, required: false
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }

  // https_endpoint - computed: true, optional: false, required: false
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // node_type_appserver - computed: true, optional: false, required: false
  public get nodeTypeAppserver() {
    return this.getBooleanAttribute('node_type_appserver');
  }

  // node_type_connector - computed: true, optional: false, required: false
  public get nodeTypeConnector() {
    return this.getBooleanAttribute('node_type_connector');
  }

  // node_type_worker - computed: true, optional: false, required: false
  public get nodeTypeWorker() {
    return this.getBooleanAttribute('node_type_worker');
  }

  // ref_id - computed: true, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentIntegrationsServerConfig {
  /**
  * Optionally enable debug mode for Integrations Server instances - defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#debug_enabled Deployment#debug_enabled}
  */
  readonly debugEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optionally override the docker image the Integrations Server nodes will use. Note that this field will only work for internal users only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#docker_image Deployment#docker_image}
  */
  readonly dockerImage?: string;
  /**
  * An arbitrary JSON object allowing (non-admin) cluster owners to set their parameters (only one of this and 'user_settings_yaml' is allowed), provided they are on the whitelist ('user_settings_whitelist') and not on the blacklist ('user_settings_blacklist'). (This field together with 'user_settings_override*' and 'system_settings' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_json Deployment#user_settings_json}
  */
  readonly userSettingsJson?: string;
  /**
  * An arbitrary JSON object allowing ECE admins owners to set clusters' parameters (only one of this and 'user_settings_override_yaml' is allowed), ie in addition to the documented 'system_settings'. (This field together with 'system_settings' and 'user_settings*' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_override_json Deployment#user_settings_override_json}
  */
  readonly userSettingsOverrideJson?: string;
  /**
  * An arbitrary YAML object allowing ECE admins owners to set clusters' parameters (only one of this and 'user_settings_override_json' is allowed), ie in addition to the documented 'system_settings'. (This field together with 'system_settings' and 'user_settings*' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_override_yaml Deployment#user_settings_override_yaml}
  */
  readonly userSettingsOverrideYaml?: string;
  /**
  * An arbitrary YAML object allowing (non-admin) cluster owners to set their parameters (only one of this and 'user_settings_json' is allowed), provided they are on the whitelist ('user_settings_whitelist') and not on the blacklist ('user_settings_blacklist'). (These field together with 'user_settings_override*' and 'system_settings' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_yaml Deployment#user_settings_yaml}
  */
  readonly userSettingsYaml?: string;
}

export function deploymentIntegrationsServerConfigToTerraform(struct?: DeploymentIntegrationsServerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_enabled: cdktf.booleanToTerraform(struct!.debugEnabled),
    docker_image: cdktf.stringToTerraform(struct!.dockerImage),
    user_settings_json: cdktf.stringToTerraform(struct!.userSettingsJson),
    user_settings_override_json: cdktf.stringToTerraform(struct!.userSettingsOverrideJson),
    user_settings_override_yaml: cdktf.stringToTerraform(struct!.userSettingsOverrideYaml),
    user_settings_yaml: cdktf.stringToTerraform(struct!.userSettingsYaml),
  }
}


export function deploymentIntegrationsServerConfigToHclTerraform(struct?: DeploymentIntegrationsServerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.debugEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    docker_image: {
      value: cdktf.stringToHclTerraform(struct!.dockerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_json: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_override_json: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsOverrideJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_override_yaml: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsOverrideYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_yaml: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentIntegrationsServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentIntegrationsServerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugEnabled = this._debugEnabled;
    }
    if (this._dockerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage;
    }
    if (this._userSettingsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsJson = this._userSettingsJson;
    }
    if (this._userSettingsOverrideJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsOverrideJson = this._userSettingsOverrideJson;
    }
    if (this._userSettingsOverrideYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsOverrideYaml = this._userSettingsOverrideYaml;
    }
    if (this._userSettingsYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsYaml = this._userSettingsYaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentIntegrationsServerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debugEnabled = undefined;
      this._dockerImage = undefined;
      this._userSettingsJson = undefined;
      this._userSettingsOverrideJson = undefined;
      this._userSettingsOverrideYaml = undefined;
      this._userSettingsYaml = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debugEnabled = value.debugEnabled;
      this._dockerImage = value.dockerImage;
      this._userSettingsJson = value.userSettingsJson;
      this._userSettingsOverrideJson = value.userSettingsOverrideJson;
      this._userSettingsOverrideYaml = value.userSettingsOverrideYaml;
      this._userSettingsYaml = value.userSettingsYaml;
    }
  }

  // debug_enabled - computed: true, optional: true, required: false
  private _debugEnabled?: boolean | cdktf.IResolvable; 
  public get debugEnabled() {
    return this.getBooleanAttribute('debug_enabled');
  }
  public set debugEnabled(value: boolean | cdktf.IResolvable) {
    this._debugEnabled = value;
  }
  public resetDebugEnabled() {
    this._debugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugEnabledInput() {
    return this._debugEnabled;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  public resetDockerImage() {
    this._dockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // user_settings_json - computed: false, optional: true, required: false
  private _userSettingsJson?: string; 
  public get userSettingsJson() {
    return this.getStringAttribute('user_settings_json');
  }
  public set userSettingsJson(value: string) {
    this._userSettingsJson = value;
  }
  public resetUserSettingsJson() {
    this._userSettingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsJsonInput() {
    return this._userSettingsJson;
  }

  // user_settings_override_json - computed: false, optional: true, required: false
  private _userSettingsOverrideJson?: string; 
  public get userSettingsOverrideJson() {
    return this.getStringAttribute('user_settings_override_json');
  }
  public set userSettingsOverrideJson(value: string) {
    this._userSettingsOverrideJson = value;
  }
  public resetUserSettingsOverrideJson() {
    this._userSettingsOverrideJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsOverrideJsonInput() {
    return this._userSettingsOverrideJson;
  }

  // user_settings_override_yaml - computed: false, optional: true, required: false
  private _userSettingsOverrideYaml?: string; 
  public get userSettingsOverrideYaml() {
    return this.getStringAttribute('user_settings_override_yaml');
  }
  public set userSettingsOverrideYaml(value: string) {
    this._userSettingsOverrideYaml = value;
  }
  public resetUserSettingsOverrideYaml() {
    this._userSettingsOverrideYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsOverrideYamlInput() {
    return this._userSettingsOverrideYaml;
  }

  // user_settings_yaml - computed: false, optional: true, required: false
  private _userSettingsYaml?: string; 
  public get userSettingsYaml() {
    return this.getStringAttribute('user_settings_yaml');
  }
  public set userSettingsYaml(value: string) {
    this._userSettingsYaml = value;
  }
  public resetUserSettingsYaml() {
    this._userSettingsYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsYamlInput() {
    return this._userSettingsYaml;
  }
}
export interface DeploymentIntegrationsServerEndpoints {
}

export function deploymentIntegrationsServerEndpointsToTerraform(struct?: DeploymentIntegrationsServerEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentIntegrationsServerEndpointsToHclTerraform(struct?: DeploymentIntegrationsServerEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentIntegrationsServerEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentIntegrationsServerEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentIntegrationsServerEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // apm - computed: true, optional: false, required: false
  public get apm() {
    return this.getStringAttribute('apm');
  }

  // fleet - computed: true, optional: false, required: false
  public get fleet() {
    return this.getStringAttribute('fleet');
  }

  // profiling - computed: true, optional: false, required: false
  public get profiling() {
    return this.getStringAttribute('profiling');
  }

  // symbols - computed: true, optional: false, required: false
  public get symbols() {
    return this.getStringAttribute('symbols');
  }
}
export interface DeploymentIntegrationsServer {
  /**
  * Optionally define the Integrations Server configuration options for the IntegrationsServer Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#config Deployment#config}
  */
  readonly config?: DeploymentIntegrationsServerConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#elasticsearch_cluster_ref_id Deployment#elasticsearch_cluster_ref_id}
  */
  readonly elasticsearchClusterRefId?: string;
  /**
  * URLs for the accessing the Fleet and APM API's within this Integrations Server resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#endpoints Deployment#endpoints}
  */
  readonly endpoints?: DeploymentIntegrationsServerEndpoints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#ref_id Deployment#ref_id}
  */
  readonly refId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Optional size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentIntegrationsServerToTerraform(struct?: DeploymentIntegrationsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: deploymentIntegrationsServerConfigToTerraform(struct!.config),
    elasticsearch_cluster_ref_id: cdktf.stringToTerraform(struct!.elasticsearchClusterRefId),
    endpoints: deploymentIntegrationsServerEndpointsToTerraform(struct!.endpoints),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    ref_id: cdktf.stringToTerraform(struct!.refId),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentIntegrationsServerToHclTerraform(struct?: DeploymentIntegrationsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: deploymentIntegrationsServerConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentIntegrationsServerConfig",
    },
    elasticsearch_cluster_ref_id: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchClusterRefId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoints: {
      value: deploymentIntegrationsServerEndpointsToHclTerraform(struct!.endpoints),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentIntegrationsServerEndpoints",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentIntegrationsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentIntegrationsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._elasticsearchClusterRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchClusterRefId = this._elasticsearchClusterRefId;
    }
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentIntegrationsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._elasticsearchClusterRefId = undefined;
      this._endpoints.internalValue = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._refId = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._elasticsearchClusterRefId = value.elasticsearchClusterRefId;
      this._endpoints.internalValue = value.endpoints;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._refId = value.refId;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DeploymentIntegrationsServerConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DeploymentIntegrationsServerConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // elasticsearch_cluster_ref_id - computed: true, optional: true, required: false
  private _elasticsearchClusterRefId?: string; 
  public get elasticsearchClusterRefId() {
    return this.getStringAttribute('elasticsearch_cluster_ref_id');
  }
  public set elasticsearchClusterRefId(value: string) {
    this._elasticsearchClusterRefId = value;
  }
  public resetElasticsearchClusterRefId() {
    this._elasticsearchClusterRefId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchClusterRefIdInput() {
    return this._elasticsearchClusterRefId;
  }

  // endpoints - computed: true, optional: true, required: false
  private _endpoints = new DeploymentIntegrationsServerEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DeploymentIntegrationsServerEndpoints) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // http_endpoint - computed: true, optional: false, required: false
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }

  // https_endpoint - computed: true, optional: false, required: false
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // ref_id - computed: true, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentKibanaConfig {
  /**
  * Optionally override the docker image the Kibana nodes will use. Note that this field will only work for internal users only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#docker_image Deployment#docker_image}
  */
  readonly dockerImage?: string;
  /**
  * An arbitrary JSON object allowing (non-admin) cluster owners to set their parameters (only one of this and 'user_settings_yaml' is allowed), provided they are on the whitelist ('user_settings_whitelist') and not on the blacklist ('user_settings_blacklist'). (This field together with 'user_settings_override*' and 'system_settings' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_json Deployment#user_settings_json}
  */
  readonly userSettingsJson?: string;
  /**
  * An arbitrary JSON object allowing ECE admins owners to set clusters' parameters (only one of this and 'user_settings_override_yaml' is allowed), ie in addition to the documented 'system_settings'. (This field together with 'system_settings' and 'user_settings*' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_override_json Deployment#user_settings_override_json}
  */
  readonly userSettingsOverrideJson?: string;
  /**
  * An arbitrary YAML object allowing ECE admins owners to set clusters' parameters (only one of this and 'user_settings_override_json' is allowed), ie in addition to the documented 'system_settings'. (This field together with 'system_settings' and 'user_settings*' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_override_yaml Deployment#user_settings_override_yaml}
  */
  readonly userSettingsOverrideYaml?: string;
  /**
  * An arbitrary YAML object allowing (non-admin) cluster owners to set their parameters (only one of this and 'user_settings_json' is allowed), provided they are on the whitelist ('user_settings_whitelist') and not on the blacklist ('user_settings_blacklist'). (These field together with 'user_settings_override*' and 'system_settings' defines the total set of resource settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#user_settings_yaml Deployment#user_settings_yaml}
  */
  readonly userSettingsYaml?: string;
}

export function deploymentKibanaConfigToTerraform(struct?: DeploymentKibanaConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image: cdktf.stringToTerraform(struct!.dockerImage),
    user_settings_json: cdktf.stringToTerraform(struct!.userSettingsJson),
    user_settings_override_json: cdktf.stringToTerraform(struct!.userSettingsOverrideJson),
    user_settings_override_yaml: cdktf.stringToTerraform(struct!.userSettingsOverrideYaml),
    user_settings_yaml: cdktf.stringToTerraform(struct!.userSettingsYaml),
  }
}


export function deploymentKibanaConfigToHclTerraform(struct?: DeploymentKibanaConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_image: {
      value: cdktf.stringToHclTerraform(struct!.dockerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_json: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_override_json: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsOverrideJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_override_yaml: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsOverrideYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_settings_yaml: {
      value: cdktf.stringToHclTerraform(struct!.userSettingsYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentKibanaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentKibanaConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage;
    }
    if (this._userSettingsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsJson = this._userSettingsJson;
    }
    if (this._userSettingsOverrideJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsOverrideJson = this._userSettingsOverrideJson;
    }
    if (this._userSettingsOverrideYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsOverrideYaml = this._userSettingsOverrideYaml;
    }
    if (this._userSettingsYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSettingsYaml = this._userSettingsYaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentKibanaConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerImage = undefined;
      this._userSettingsJson = undefined;
      this._userSettingsOverrideJson = undefined;
      this._userSettingsOverrideYaml = undefined;
      this._userSettingsYaml = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerImage = value.dockerImage;
      this._userSettingsJson = value.userSettingsJson;
      this._userSettingsOverrideJson = value.userSettingsOverrideJson;
      this._userSettingsOverrideYaml = value.userSettingsOverrideYaml;
      this._userSettingsYaml = value.userSettingsYaml;
    }
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  public resetDockerImage() {
    this._dockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // user_settings_json - computed: false, optional: true, required: false
  private _userSettingsJson?: string; 
  public get userSettingsJson() {
    return this.getStringAttribute('user_settings_json');
  }
  public set userSettingsJson(value: string) {
    this._userSettingsJson = value;
  }
  public resetUserSettingsJson() {
    this._userSettingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsJsonInput() {
    return this._userSettingsJson;
  }

  // user_settings_override_json - computed: false, optional: true, required: false
  private _userSettingsOverrideJson?: string; 
  public get userSettingsOverrideJson() {
    return this.getStringAttribute('user_settings_override_json');
  }
  public set userSettingsOverrideJson(value: string) {
    this._userSettingsOverrideJson = value;
  }
  public resetUserSettingsOverrideJson() {
    this._userSettingsOverrideJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsOverrideJsonInput() {
    return this._userSettingsOverrideJson;
  }

  // user_settings_override_yaml - computed: false, optional: true, required: false
  private _userSettingsOverrideYaml?: string; 
  public get userSettingsOverrideYaml() {
    return this.getStringAttribute('user_settings_override_yaml');
  }
  public set userSettingsOverrideYaml(value: string) {
    this._userSettingsOverrideYaml = value;
  }
  public resetUserSettingsOverrideYaml() {
    this._userSettingsOverrideYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsOverrideYamlInput() {
    return this._userSettingsOverrideYaml;
  }

  // user_settings_yaml - computed: false, optional: true, required: false
  private _userSettingsYaml?: string; 
  public get userSettingsYaml() {
    return this.getStringAttribute('user_settings_yaml');
  }
  public set userSettingsYaml(value: string) {
    this._userSettingsYaml = value;
  }
  public resetUserSettingsYaml() {
    this._userSettingsYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsYamlInput() {
    return this._userSettingsYaml;
  }
}
export interface DeploymentKibana {
  /**
  * Optionally define the Kibana configuration options for the Kibana Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#config Deployment#config}
  */
  readonly config?: DeploymentKibanaConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#elasticsearch_cluster_ref_id Deployment#elasticsearch_cluster_ref_id}
  */
  readonly elasticsearchClusterRefId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_id Deployment#instance_configuration_id}
  */
  readonly instanceConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#instance_configuration_version Deployment#instance_configuration_version}
  */
  readonly instanceConfigurationVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#ref_id Deployment#ref_id}
  */
  readonly refId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size Deployment#size}
  */
  readonly size?: string;
  /**
  * Optional size type, defaults to "memory".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#size_resource Deployment#size_resource}
  */
  readonly sizeResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#zone_count Deployment#zone_count}
  */
  readonly zoneCount?: number;
}

export function deploymentKibanaToTerraform(struct?: DeploymentKibana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: deploymentKibanaConfigToTerraform(struct!.config),
    elasticsearch_cluster_ref_id: cdktf.stringToTerraform(struct!.elasticsearchClusterRefId),
    instance_configuration_id: cdktf.stringToTerraform(struct!.instanceConfigurationId),
    instance_configuration_version: cdktf.numberToTerraform(struct!.instanceConfigurationVersion),
    ref_id: cdktf.stringToTerraform(struct!.refId),
    size: cdktf.stringToTerraform(struct!.size),
    size_resource: cdktf.stringToTerraform(struct!.sizeResource),
    zone_count: cdktf.numberToTerraform(struct!.zoneCount),
  }
}


export function deploymentKibanaToHclTerraform(struct?: DeploymentKibana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: deploymentKibanaConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentKibanaConfig",
    },
    elasticsearch_cluster_ref_id: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchClusterRefId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_configuration_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceConfigurationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_resource: {
      value: cdktf.stringToHclTerraform(struct!.sizeResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_count: {
      value: cdktf.numberToHclTerraform(struct!.zoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentKibanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentKibana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._elasticsearchClusterRefId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchClusterRefId = this._elasticsearchClusterRefId;
    }
    if (this._instanceConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationId = this._instanceConfigurationId;
    }
    if (this._instanceConfigurationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceConfigurationVersion = this._instanceConfigurationVersion;
    }
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sizeResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeResource = this._sizeResource;
    }
    if (this._zoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneCount = this._zoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentKibana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._elasticsearchClusterRefId = undefined;
      this._instanceConfigurationId = undefined;
      this._instanceConfigurationVersion = undefined;
      this._refId = undefined;
      this._size = undefined;
      this._sizeResource = undefined;
      this._zoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._elasticsearchClusterRefId = value.elasticsearchClusterRefId;
      this._instanceConfigurationId = value.instanceConfigurationId;
      this._instanceConfigurationVersion = value.instanceConfigurationVersion;
      this._refId = value.refId;
      this._size = value.size;
      this._sizeResource = value.sizeResource;
      this._zoneCount = value.zoneCount;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DeploymentKibanaConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DeploymentKibanaConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // elasticsearch_cluster_ref_id - computed: true, optional: true, required: false
  private _elasticsearchClusterRefId?: string; 
  public get elasticsearchClusterRefId() {
    return this.getStringAttribute('elasticsearch_cluster_ref_id');
  }
  public set elasticsearchClusterRefId(value: string) {
    this._elasticsearchClusterRefId = value;
  }
  public resetElasticsearchClusterRefId() {
    this._elasticsearchClusterRefId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchClusterRefIdInput() {
    return this._elasticsearchClusterRefId;
  }

  // http_endpoint - computed: true, optional: false, required: false
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }

  // https_endpoint - computed: true, optional: false, required: false
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
  }

  // instance_configuration_id - computed: true, optional: true, required: false
  private _instanceConfigurationId?: string; 
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }
  public set instanceConfigurationId(value: string) {
    this._instanceConfigurationId = value;
  }
  public resetInstanceConfigurationId() {
    this._instanceConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationIdInput() {
    return this._instanceConfigurationId;
  }

  // instance_configuration_version - computed: true, optional: true, required: false
  private _instanceConfigurationVersion?: number; 
  public get instanceConfigurationVersion() {
    return this.getNumberAttribute('instance_configuration_version');
  }
  public set instanceConfigurationVersion(value: number) {
    this._instanceConfigurationVersion = value;
  }
  public resetInstanceConfigurationVersion() {
    this._instanceConfigurationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationVersionInput() {
    return this._instanceConfigurationVersion;
  }

  // latest_instance_configuration_id - computed: true, optional: false, required: false
  public get latestInstanceConfigurationId() {
    return this.getStringAttribute('latest_instance_configuration_id');
  }

  // latest_instance_configuration_version - computed: true, optional: false, required: false
  public get latestInstanceConfigurationVersion() {
    return this.getNumberAttribute('latest_instance_configuration_version');
  }

  // ref_id - computed: true, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_resource - computed: true, optional: true, required: false
  private _sizeResource?: string; 
  public get sizeResource() {
    return this.getStringAttribute('size_resource');
  }
  public set sizeResource(value: string) {
    this._sizeResource = value;
  }
  public resetSizeResource() {
    this._sizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeResourceInput() {
    return this._sizeResource;
  }

  // zone_count - computed: true, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }
}
export interface DeploymentObservability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#deployment_id Deployment#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#logs Deployment#logs}
  */
  readonly logs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#metrics Deployment#metrics}
  */
  readonly metrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#ref_id Deployment#ref_id}
  */
  readonly refId?: string;
}

export function deploymentObservabilityToTerraform(struct?: DeploymentObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    logs: cdktf.booleanToTerraform(struct!.logs),
    metrics: cdktf.booleanToTerraform(struct!.metrics),
    ref_id: cdktf.stringToTerraform(struct!.refId),
  }
}


export function deploymentObservabilityToHclTerraform(struct?: DeploymentObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs: {
      value: cdktf.booleanToHclTerraform(struct!.logs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics: {
      value: cdktf.booleanToHclTerraform(struct!.metrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._logs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentId = undefined;
      this._logs = undefined;
      this._metrics = undefined;
      this._refId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentId = value.deploymentId;
      this._logs = value.logs;
      this._metrics = value.metrics;
      this._refId = value.refId;
    }
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // logs - computed: true, optional: true, required: false
  private _logs?: boolean | cdktf.IResolvable; 
  public get logs() {
    return this.getBooleanAttribute('logs');
  }
  public set logs(value: boolean | cdktf.IResolvable) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs;
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics?: boolean | cdktf.IResolvable; 
  public get metrics() {
    return this.getBooleanAttribute('metrics');
  }
  public set metrics(value: boolean | cdktf.IResolvable) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // ref_id - computed: true, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment ec_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deployment to import
  * @param importFromId The id of the existing Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment ec_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_deployment',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._apm.internalValue = config.apm;
    this._deploymentTemplateId = config.deploymentTemplateId;
    this._elasticsearch.internalValue = config.elasticsearch;
    this._enterpriseSearch.internalValue = config.enterpriseSearch;
    this._integrationsServer.internalValue = config.integrationsServer;
    this._kibana.internalValue = config.kibana;
    this._migrateToLatestHardware = config.migrateToLatestHardware;
    this._name = config.name;
    this._observability.internalValue = config.observability;
    this._region = config.region;
    this._requestId = config.requestId;
    this._resetElasticsearchPassword = config.resetElasticsearchPassword;
    this._tags = config.tags;
    this._trafficFilter = config.trafficFilter;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // apm - computed: false, optional: true, required: false
  private _apm = new DeploymentApmOutputReference(this, "apm");
  public get apm() {
    return this._apm;
  }
  public putApm(value: DeploymentApm) {
    this._apm.internalValue = value;
  }
  public resetApm() {
    this._apm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmInput() {
    return this._apm.internalValue;
  }

  // apm_secret_token - computed: true, optional: false, required: false
  public get apmSecretToken() {
    return this.getStringAttribute('apm_secret_token');
  }

  // deployment_template_id - computed: false, optional: false, required: true
  private _deploymentTemplateId?: string; 
  public get deploymentTemplateId() {
    return this.getStringAttribute('deployment_template_id');
  }
  public set deploymentTemplateId(value: string) {
    this._deploymentTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTemplateIdInput() {
    return this._deploymentTemplateId;
  }

  // elasticsearch - computed: false, optional: false, required: true
  private _elasticsearch = new DeploymentElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: DeploymentElasticsearch) {
    this._elasticsearch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // elasticsearch_password - computed: true, optional: false, required: false
  public get elasticsearchPassword() {
    return this.getStringAttribute('elasticsearch_password');
  }

  // elasticsearch_username - computed: true, optional: false, required: false
  public get elasticsearchUsername() {
    return this.getStringAttribute('elasticsearch_username');
  }

  // enterprise_search - computed: false, optional: true, required: false
  private _enterpriseSearch = new DeploymentEnterpriseSearchOutputReference(this, "enterprise_search");
  public get enterpriseSearch() {
    return this._enterpriseSearch;
  }
  public putEnterpriseSearch(value: DeploymentEnterpriseSearch) {
    this._enterpriseSearch.internalValue = value;
  }
  public resetEnterpriseSearch() {
    this._enterpriseSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseSearchInput() {
    return this._enterpriseSearch.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integrations_server - computed: false, optional: true, required: false
  private _integrationsServer = new DeploymentIntegrationsServerOutputReference(this, "integrations_server");
  public get integrationsServer() {
    return this._integrationsServer;
  }
  public putIntegrationsServer(value: DeploymentIntegrationsServer) {
    this._integrationsServer.internalValue = value;
  }
  public resetIntegrationsServer() {
    this._integrationsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsServerInput() {
    return this._integrationsServer.internalValue;
  }

  // kibana - computed: false, optional: true, required: false
  private _kibana = new DeploymentKibanaOutputReference(this, "kibana");
  public get kibana() {
    return this._kibana;
  }
  public putKibana(value: DeploymentKibana) {
    this._kibana.internalValue = value;
  }
  public resetKibana() {
    this._kibana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaInput() {
    return this._kibana.internalValue;
  }

  // migrate_to_latest_hardware - computed: false, optional: true, required: false
  private _migrateToLatestHardware?: boolean | cdktf.IResolvable; 
  public get migrateToLatestHardware() {
    return this.getBooleanAttribute('migrate_to_latest_hardware');
  }
  public set migrateToLatestHardware(value: boolean | cdktf.IResolvable) {
    this._migrateToLatestHardware = value;
  }
  public resetMigrateToLatestHardware() {
    this._migrateToLatestHardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateToLatestHardwareInput() {
    return this._migrateToLatestHardware;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // observability - computed: false, optional: true, required: false
  private _observability = new DeploymentObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }
  public putObservability(value: DeploymentObservability) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_id - computed: true, optional: true, required: false
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  public resetRequestId() {
    this._requestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // reset_elasticsearch_password - computed: false, optional: true, required: false
  private _resetElasticsearchPassword?: boolean | cdktf.IResolvable; 
  public get resetElasticsearchPassword() {
    return this.getBooleanAttribute('reset_elasticsearch_password');
  }
  public set resetElasticsearchPassword(value: boolean | cdktf.IResolvable) {
    this._resetElasticsearchPassword = value;
  }
  public resetResetElasticsearchPassword() {
    this._resetElasticsearchPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetElasticsearchPasswordInput() {
    return this._resetElasticsearchPassword;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // traffic_filter - computed: true, optional: true, required: false
  private _trafficFilter?: string[]; 
  public get trafficFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('traffic_filter'));
  }
  public set trafficFilter(value: string[]) {
    this._trafficFilter = value;
  }
  public resetTrafficFilter() {
    this._trafficFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFilterInput() {
    return this._trafficFilter;
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
      alias: cdktf.stringToTerraform(this._alias),
      apm: deploymentApmToTerraform(this._apm.internalValue),
      deployment_template_id: cdktf.stringToTerraform(this._deploymentTemplateId),
      elasticsearch: deploymentElasticsearchToTerraform(this._elasticsearch.internalValue),
      enterprise_search: deploymentEnterpriseSearchToTerraform(this._enterpriseSearch.internalValue),
      integrations_server: deploymentIntegrationsServerToTerraform(this._integrationsServer.internalValue),
      kibana: deploymentKibanaToTerraform(this._kibana.internalValue),
      migrate_to_latest_hardware: cdktf.booleanToTerraform(this._migrateToLatestHardware),
      name: cdktf.stringToTerraform(this._name),
      observability: deploymentObservabilityToTerraform(this._observability.internalValue),
      region: cdktf.stringToTerraform(this._region),
      request_id: cdktf.stringToTerraform(this._requestId),
      reset_elasticsearch_password: cdktf.booleanToTerraform(this._resetElasticsearchPassword),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      traffic_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trafficFilter),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apm: {
        value: deploymentApmToHclTerraform(this._apm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentApm",
      },
      deployment_template_id: {
        value: cdktf.stringToHclTerraform(this._deploymentTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch: {
        value: deploymentElasticsearchToHclTerraform(this._elasticsearch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentElasticsearch",
      },
      enterprise_search: {
        value: deploymentEnterpriseSearchToHclTerraform(this._enterpriseSearch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentEnterpriseSearch",
      },
      integrations_server: {
        value: deploymentIntegrationsServerToHclTerraform(this._integrationsServer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentIntegrationsServer",
      },
      kibana: {
        value: deploymentKibanaToHclTerraform(this._kibana.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentKibana",
      },
      migrate_to_latest_hardware: {
        value: cdktf.booleanToHclTerraform(this._migrateToLatestHardware),
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
      observability: {
        value: deploymentObservabilityToHclTerraform(this._observability.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentObservability",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_id: {
        value: cdktf.stringToHclTerraform(this._requestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_elasticsearch_password: {
        value: cdktf.booleanToHclTerraform(this._resetElasticsearchPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      traffic_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trafficFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
