import * as cdktf from 'cdktf';
import { DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaConfigMap,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaConfigMapToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaConfigMapToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaConfigMapOutputReference,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsApplicationCredentialSecret,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsApplicationCredentialSecretToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsApplicationCredentialSecretToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsApplicationCredentialSecretOutputReference,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsPassword,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsPasswordToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsPasswordToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsPasswordOutputReference,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHttpSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHttpSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHttpSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHttpSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecIonosSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecIonosSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecIonosSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecIonosSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKubernetesSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKubernetesSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKubernetesSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKubernetesSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKumaSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKumaSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKumaSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKumaSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLightSailSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLightSailSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLightSailSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLightSailSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLinodeSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLinodeSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLinodeSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLinodeSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecMetricRelabelings,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecMetricRelabelingsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecMetricRelabelingsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecMetricRelabelingsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecNomadSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecNomadSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecNomadSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecNomadSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOauth2,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOauth2ToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOauth2ToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOauth2OutputReference } from './structs400'
import { DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAuthorization,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAuthorizationToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAuthorizationToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAuthorizationOutputReference,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAzureSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAzureSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAzureSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAzureSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecBasicAuth,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecBasicAuthToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecBasicAuthToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecBasicAuthOutputReference,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecConsulSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecConsulSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecConsulSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecConsulSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDigitalOceanSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDigitalOceanSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDigitalOceanSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDigitalOceanSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDnsSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDnsSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDnsSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDnsSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSwarmSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSwarmSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSwarmSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSwarmSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEc2SdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEc2SdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEc2SdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEc2SdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEurekaSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEurekaSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEurekaSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEurekaSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecFileSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecFileSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecFileSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecFileSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecGceSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecGceSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecGceSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecGceSdConfigsList,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHetznerSdConfigs,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHetznerSdConfigsToTerraform,
dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHetznerSdConfigsToHclTerraform,
DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHetznerSdConfigsList } from './structs0'
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#ca DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#cert DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key_secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#max_version DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#min_version DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#server_name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecret",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._cert.internalValue = undefined;
      this._insecureSkipVerify = undefined;
      this._keySecret.internalValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._cert.internalValue = value.cert;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keySecret.internalValue = value.keySecret;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._serverName = value.serverName;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigs {
  /**
  * Whether the service discovery should list all instances for all projects. It is only relevant for the 'instance' role and usually requires admin permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#all_tenants DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#all_tenants}
  */
  readonly allTenants?: boolean | cdktf.IResolvable;
  /**
  * ApplicationCredentialID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#application_credential_id DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#application_credential_id}
  */
  readonly applicationCredentialId?: string;
  /**
  * The ApplicationCredentialID or ApplicationCredentialName fields are required if using an application credential to authenticate. Some providers allow you to create an application credential to authenticate rather than a password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#application_credential_name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#application_credential_name}
  */
  readonly applicationCredentialName?: string;
  /**
  * The applicationCredentialSecret field is required if using an application credential to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#application_credential_secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#application_credential_secret}
  */
  readonly applicationCredentialSecret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsApplicationCredentialSecret;
  /**
  * Availability of the endpoint to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#availability DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#availability}
  */
  readonly availability?: string;
  /**
  * DomainID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#domain_id DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#domain_id}
  */
  readonly domainId?: string;
  /**
  * At most one of domainId and domainName must be provided if using username with Identity V3. Otherwise, either are optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#domain_name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#domain_name}
  */
  readonly domainName?: string;
  /**
  * IdentityEndpoint specifies the HTTP endpoint that is required to work with the Identity API of the appropriate version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#identity_endpoint DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#identity_endpoint}
  */
  readonly identityEndpoint?: string;
  /**
  * Password for the Identity V2 and V3 APIs. Consult with your provider's control panel to discover your account's preferred method of authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#password DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsPassword;
  /**
  * The port to scrape metrics from. If using the public IP address, this must instead be specified in the relabeling rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#port DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  *  ProjectID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#project_id DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#project_id}
  */
  readonly projectId?: string;
  /**
  * The ProjectId and ProjectName fields are optional for the Identity V2 API. Some providers allow you to specify a ProjectName instead of the ProjectId. Some require both. Your provider's authentication policies will determine how these fields influence authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#project_name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#project_name}
  */
  readonly projectName?: string;
  /**
  * Refresh interval to re-read the instance list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#refresh_interval DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * The OpenStack Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#region DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#region}
  */
  readonly region: string;
  /**
  * The OpenStack role of entities that should be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#role DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#role}
  */
  readonly role: string;
  /**
  * TLS configuration applying to the target HTTP endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#tls_config DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfig;
  /**
  * UserID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#userid DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#userid}
  */
  readonly userid?: string;
  /**
  * Username is required if using Identity V2 API. Consult with your provider's control panel to discover your account's username. In Identity V3, either userid or a combination of username and domainId or domainName are needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#username DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_tenants: cdktf.booleanToTerraform(struct!.allTenants),
    application_credential_id: cdktf.stringToTerraform(struct!.applicationCredentialId),
    application_credential_name: cdktf.stringToTerraform(struct!.applicationCredentialName),
    application_credential_secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsApplicationCredentialSecretToTerraform(struct!.applicationCredentialSecret),
    availability: cdktf.stringToTerraform(struct!.availability),
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    identity_endpoint: cdktf.stringToTerraform(struct!.identityEndpoint),
    password: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsPasswordToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
    region: cdktf.stringToTerraform(struct!.region),
    role: cdktf.stringToTerraform(struct!.role),
    tls_config: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigToTerraform(struct!.tlsConfig),
    userid: cdktf.stringToTerraform(struct!.userid),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_tenants: {
      value: cdktf.booleanToHclTerraform(struct!.allTenants),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_credential_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationCredentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_credential_secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsApplicationCredentialSecretToHclTerraform(struct!.applicationCredentialSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsApplicationCredentialSecret",
    },
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.identityEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsPassword",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_config: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfig",
    },
    userid: {
      value: cdktf.stringToHclTerraform(struct!.userid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allTenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTenants = this._allTenants;
    }
    if (this._applicationCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationCredentialId = this._applicationCredentialId;
    }
    if (this._applicationCredentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationCredentialName = this._applicationCredentialName;
    }
    if (this._applicationCredentialSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationCredentialSecret = this._applicationCredentialSecret?.internalValue;
    }
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._identityEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityEndpoint = this._identityEndpoint;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._userid !== undefined) {
      hasAnyValues = true;
      internalValueResult.userid = this._userid;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allTenants = undefined;
      this._applicationCredentialId = undefined;
      this._applicationCredentialName = undefined;
      this._applicationCredentialSecret.internalValue = undefined;
      this._availability = undefined;
      this._domainId = undefined;
      this._domainName = undefined;
      this._identityEndpoint = undefined;
      this._password.internalValue = undefined;
      this._port = undefined;
      this._projectId = undefined;
      this._projectName = undefined;
      this._refreshInterval = undefined;
      this._region = undefined;
      this._role = undefined;
      this._tlsConfig.internalValue = undefined;
      this._userid = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allTenants = value.allTenants;
      this._applicationCredentialId = value.applicationCredentialId;
      this._applicationCredentialName = value.applicationCredentialName;
      this._applicationCredentialSecret.internalValue = value.applicationCredentialSecret;
      this._availability = value.availability;
      this._domainId = value.domainId;
      this._domainName = value.domainName;
      this._identityEndpoint = value.identityEndpoint;
      this._password.internalValue = value.password;
      this._port = value.port;
      this._projectId = value.projectId;
      this._projectName = value.projectName;
      this._refreshInterval = value.refreshInterval;
      this._region = value.region;
      this._role = value.role;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._userid = value.userid;
      this._username = value.username;
    }
  }

  // all_tenants - computed: false, optional: true, required: false
  private _allTenants?: boolean | cdktf.IResolvable; 
  public get allTenants() {
    return this.getBooleanAttribute('all_tenants');
  }
  public set allTenants(value: boolean | cdktf.IResolvable) {
    this._allTenants = value;
  }
  public resetAllTenants() {
    this._allTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTenantsInput() {
    return this._allTenants;
  }

  // application_credential_id - computed: false, optional: true, required: false
  private _applicationCredentialId?: string; 
  public get applicationCredentialId() {
    return this.getStringAttribute('application_credential_id');
  }
  public set applicationCredentialId(value: string) {
    this._applicationCredentialId = value;
  }
  public resetApplicationCredentialId() {
    this._applicationCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCredentialIdInput() {
    return this._applicationCredentialId;
  }

  // application_credential_name - computed: false, optional: true, required: false
  private _applicationCredentialName?: string; 
  public get applicationCredentialName() {
    return this.getStringAttribute('application_credential_name');
  }
  public set applicationCredentialName(value: string) {
    this._applicationCredentialName = value;
  }
  public resetApplicationCredentialName() {
    this._applicationCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCredentialNameInput() {
    return this._applicationCredentialName;
  }

  // application_credential_secret - computed: false, optional: true, required: false
  private _applicationCredentialSecret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsApplicationCredentialSecretOutputReference(this, "application_credential_secret");
  public get applicationCredentialSecret() {
    return this._applicationCredentialSecret;
  }
  public putApplicationCredentialSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsApplicationCredentialSecret) {
    this._applicationCredentialSecret.internalValue = value;
  }
  public resetApplicationCredentialSecret() {
    this._applicationCredentialSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCredentialSecretInput() {
    return this._applicationCredentialSecret.internalValue;
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // identity_endpoint - computed: false, optional: true, required: false
  private _identityEndpoint?: string; 
  public get identityEndpoint() {
    return this.getStringAttribute('identity_endpoint');
  }
  public set identityEndpoint(value: string) {
    this._identityEndpoint = value;
  }
  public resetIdentityEndpoint() {
    this._identityEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityEndpointInput() {
    return this._identityEndpoint;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // userid - computed: false, optional: true, required: false
  private _userid?: string; 
  public get userid() {
    return this.getStringAttribute('userid');
  }
  public set userid(value: string) {
    this._userid = value;
  }
  public resetUserid() {
    this._userid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridInput() {
    return this._userid;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsOutputReference {
    return new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKey {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKeyToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKeyToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigs {
  /**
  * Access key to use. https://api.ovh.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#application_key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#application_key}
  */
  readonly applicationKey: string;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#application_secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#application_secret}
  */
  readonly applicationSecret: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecret;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#consumer_key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#consumer_key}
  */
  readonly consumerKey: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKey;
  /**
  * Custom endpoint to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#endpoint DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Refresh interval to re-read the resources list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#refresh_interval DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * Service of the targets to retrieve. Must be 'VPS' or 'DedicatedServer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#service DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#service}
  */
  readonly service: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
    application_secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecretToTerraform(struct!.applicationSecret),
    consumer_key: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKeyToTerraform(struct!.consumerKey),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecretToHclTerraform(struct!.applicationSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecret",
    },
    consumer_key: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKeyToHclTerraform(struct!.consumerKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKey",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    if (this._applicationSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSecret = this._applicationSecret?.internalValue;
    }
    if (this._consumerKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerKey = this._consumerKey?.internalValue;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationKey = undefined;
      this._applicationSecret.internalValue = undefined;
      this._consumerKey.internalValue = undefined;
      this._endpoint = undefined;
      this._refreshInterval = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationKey = value.applicationKey;
      this._applicationSecret.internalValue = value.applicationSecret;
      this._consumerKey.internalValue = value.consumerKey;
      this._endpoint = value.endpoint;
      this._refreshInterval = value.refreshInterval;
      this._service = value.service;
    }
  }

  // application_key - computed: false, optional: false, required: true
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // application_secret - computed: false, optional: false, required: true
  private _applicationSecret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecretOutputReference(this, "application_secret");
  public get applicationSecret() {
    return this._applicationSecret;
  }
  public putApplicationSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsApplicationSecret) {
    this._applicationSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecretInput() {
    return this._applicationSecret.internalValue;
  }

  // consumer_key - computed: false, optional: false, required: true
  private _consumerKey = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKeyOutputReference(this, "consumer_key");
  public get consumerKey() {
    return this._consumerKey;
  }
  public putConsumerKey(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsConsumerKey) {
    this._consumerKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey.internalValue;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsOutputReference {
    return new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentials {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentialsToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentialsToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorization {
  /**
  * Selects a key of a Secret in the namespace that contains the credentials for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#credentials DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentials;
  /**
  * Defines the authentication type. The value is case-insensitive. 'Basic' is not a supported value. Default: 'Bearer'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#type DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentialsToTerraform(struct!.credentials),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentials",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._type = value.type;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPasswordToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPasswordToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsernameToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsernameToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuth {
  /**
  * 'password' specifies a key of a Secret containing the password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#password DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPassword;
  /**
  * 'username' specifies a key of a Secret containing the username for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#username DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#username}
  */
  readonly username?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsername;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPasswordToTerraform(struct!.password),
    username: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPassword",
    },
    username: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientId {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#ca DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#cert DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key_secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#max_version DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#min_version DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#server_name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecret",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._cert.internalValue = undefined;
      this._insecureSkipVerify = undefined;
      this._keySecret.internalValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._cert.internalValue = value.cert;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keySecret.internalValue = value.keySecret;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._serverName = value.serverName;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2 {
  /**
  * 'clientId' specifies a key of a Secret or ConfigMap containing the OAuth2 client's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#client_id DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#client_id}
  */
  readonly clientId: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientId;
  /**
  * 'clientSecret' specifies a key of a Secret containing the OAuth2 client's secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#client_secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#client_secret}
  */
  readonly clientSecret: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecret;
  /**
  * 'endpointParams' configures the HTTP parameters to append to the token URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#endpoint_params DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#endpoint_params}
  */
  readonly endpointParams?: { [key: string]: string };
  /**
  * 'noProxy' is a comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#no_proxy DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * ProxyConnectHeader optionally specifies headers to send to proxies during CONNECT requests. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_connect_header DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_connect_header}
  */
  readonly proxyConnectHeader?: { [key: string]: string };
  /**
  * Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY). It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_from_environment DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_from_environment}
  */
  readonly proxyFromEnvironment?: boolean | cdktf.IResolvable;
  /**
  * 'proxyURL' defines the HTTP proxy server to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_url DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * 'scopes' defines the OAuth2 scopes used for the token request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#scopes DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * TLS configuration to use when connecting to the OAuth2 server. It requires Prometheus >= v2.43.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#tls_config DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfig;
  /**
  * 'tokenURL' configures the URL to fetch the token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#token_url DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#token_url}
  */
  readonly tokenUrl: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdToTerraform(struct!.clientId),
    client_secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecretToTerraform(struct!.clientSecret),
    endpoint_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointParams),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    proxy_connect_header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConnectHeader),
    proxy_from_environment: cdktf.booleanToTerraform(struct!.proxyFromEnvironment),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    tls_config: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigToTerraform(struct!.tlsConfig),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdToHclTerraform(struct!.clientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientId",
    },
    client_secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecret",
    },
    endpoint_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_connect_header: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.proxyConnectHeader),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    proxy_from_environment: {
      value: cdktf.booleanToHclTerraform(struct!.proxyFromEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_config: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfig",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId?.internalValue;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._endpointParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointParams = this._endpointParams;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._proxyConnectHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConnectHeader = this._proxyConnectHeader;
    }
    if (this._proxyFromEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyFromEnvironment = this._proxyFromEnvironment;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId.internalValue = undefined;
      this._clientSecret.internalValue = undefined;
      this._endpointParams = undefined;
      this._noProxy = undefined;
      this._proxyConnectHeader = undefined;
      this._proxyFromEnvironment = undefined;
      this._proxyUrl = undefined;
      this._scopes = undefined;
      this._tlsConfig.internalValue = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId.internalValue = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._endpointParams = value.endpointParams;
      this._noProxy = value.noProxy;
      this._proxyConnectHeader = value.proxyConnectHeader;
      this._proxyFromEnvironment = value.proxyFromEnvironment;
      this._proxyUrl = value.proxyUrl;
      this._scopes = value.scopes;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }
  public putClientId(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientId) {
    this._clientId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId.internalValue;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ClientSecret) {
    this._clientSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // endpoint_params - computed: false, optional: true, required: false
  private _endpointParams?: { [key: string]: string }; 
  public get endpointParams() {
    return this.getStringMapAttribute('endpoint_params');
  }
  public set endpointParams(value: { [key: string]: string }) {
    this._endpointParams = value;
  }
  public resetEndpointParams() {
    this._endpointParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointParamsInput() {
    return this._endpointParams;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // proxy_connect_header - computed: false, optional: true, required: false
  private _proxyConnectHeader?: { [key: string]: string }; 
  public get proxyConnectHeader() {
    return this.getStringMapAttribute('proxy_connect_header');
  }
  public set proxyConnectHeader(value: { [key: string]: string }) {
    this._proxyConnectHeader = value;
  }
  public resetProxyConnectHeader() {
    this._proxyConnectHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConnectHeaderInput() {
    return this._proxyConnectHeader;
  }

  // proxy_from_environment - computed: false, optional: true, required: false
  private _proxyFromEnvironment?: boolean | cdktf.IResolvable; 
  public get proxyFromEnvironment() {
    return this.getBooleanAttribute('proxy_from_environment');
  }
  public set proxyFromEnvironment(value: boolean | cdktf.IResolvable) {
    this._proxyFromEnvironment = value;
  }
  public resetProxyFromEnvironment() {
    this._proxyFromEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyFromEnvironmentInput() {
    return this._proxyFromEnvironment;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2TlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#ca DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#cert DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key_secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#max_version DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#min_version DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#server_name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecret",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._cert.internalValue = undefined;
      this._insecureSkipVerify = undefined;
      this._keySecret.internalValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._cert.internalValue = value.cert;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keySecret.internalValue = value.keySecret;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._serverName = value.serverName;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigs {
  /**
  * Optional 'authorization' HTTP header configuration. Cannot be set at the same time as 'basicAuth', or 'oauth2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#authorization DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#authorization}
  */
  readonly authorization?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorization;
  /**
  * Optional HTTP basic authentication information. Cannot be set at the same time as 'authorization', or 'oauth2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#basic_auth DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuth;
  /**
  * Configure whether to enable HTTP2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#enable_http2 DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * Configure whether the HTTP requests should follow HTTP 3xx redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#follow_redirects DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Whether to include the parameters as meta labels. Note: Enabling this exposes parameters in the Prometheus UI and API. Make sure that you don't have secrets exposed as parameters if you enable this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#include_parameters DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#include_parameters}
  */
  readonly includeParameters?: boolean | cdktf.IResolvable;
  /**
  * 'noProxy' is a comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#no_proxy DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Optional OAuth2.0 configuration. Cannot be set at the same time as 'basicAuth', or 'authorization'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#oauth2 DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#oauth2}
  */
  readonly oauth2?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2;
  /**
  * Port to scrape the metrics from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#port DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * ProxyConnectHeader optionally specifies headers to send to proxies during CONNECT requests. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_connect_header DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_connect_header}
  */
  readonly proxyConnectHeader?: { [key: string]: string };
  /**
  * Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY). It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_from_environment DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_from_environment}
  */
  readonly proxyFromEnvironment?: boolean | cdktf.IResolvable;
  /**
  * 'proxyURL' defines the HTTP proxy server to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_url DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Puppet Query Language (PQL) query. Only resources are supported. https://puppet.com/docs/puppetdb/latest/api/query/v4/pql.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#query DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#query}
  */
  readonly query: string;
  /**
  * Refresh interval to re-read the list of resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#refresh_interval DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * TLS configuration to connect to the Puppet DB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#tls_config DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfig;
  /**
  * The URL of the PuppetDB root query endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#url DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationToTerraform(struct!.authorization),
    basic_auth: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthToTerraform(struct!.basicAuth),
    enable_http2: cdktf.booleanToTerraform(struct!.enableHttp2),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    include_parameters: cdktf.booleanToTerraform(struct!.includeParameters),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    oauth2: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ToTerraform(struct!.oauth2),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_connect_header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConnectHeader),
    proxy_from_environment: cdktf.booleanToTerraform(struct!.proxyFromEnvironment),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    query: cdktf.stringToTerraform(struct!.query),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
    tls_config: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigToTerraform(struct!.tlsConfig),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorization",
    },
    basic_auth: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuth",
    },
    enable_http2: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.includeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_connect_header: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.proxyConnectHeader),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    proxy_from_environment: {
      value: cdktf.booleanToHclTerraform(struct!.proxyFromEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_config: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfig",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._enableHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttp2 = this._enableHttp2;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._includeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeParameters = this._includeParameters;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyConnectHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConnectHeader = this._proxyConnectHeader;
    }
    if (this._proxyFromEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyFromEnvironment = this._proxyFromEnvironment;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._enableHttp2 = undefined;
      this._followRedirects = undefined;
      this._includeParameters = undefined;
      this._noProxy = undefined;
      this._oauth2.internalValue = undefined;
      this._port = undefined;
      this._proxyConnectHeader = undefined;
      this._proxyFromEnvironment = undefined;
      this._proxyUrl = undefined;
      this._query = undefined;
      this._refreshInterval = undefined;
      this._tlsConfig.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization.internalValue = value.authorization;
      this._basicAuth.internalValue = value.basicAuth;
      this._enableHttp2 = value.enableHttp2;
      this._followRedirects = value.followRedirects;
      this._includeParameters = value.includeParameters;
      this._noProxy = value.noProxy;
      this._oauth2.internalValue = value.oauth2;
      this._port = value.port;
      this._proxyConnectHeader = value.proxyConnectHeader;
      this._proxyFromEnvironment = value.proxyFromEnvironment;
      this._proxyUrl = value.proxyUrl;
      this._query = value.query;
      this._refreshInterval = value.refreshInterval;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._url = value.url;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // include_parameters - computed: false, optional: true, required: false
  private _includeParameters?: boolean | cdktf.IResolvable; 
  public get includeParameters() {
    return this.getBooleanAttribute('include_parameters');
  }
  public set includeParameters(value: boolean | cdktf.IResolvable) {
    this._includeParameters = value;
  }
  public resetIncludeParameters() {
    this._includeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeParametersInput() {
    return this._includeParameters;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_connect_header - computed: false, optional: true, required: false
  private _proxyConnectHeader?: { [key: string]: string }; 
  public get proxyConnectHeader() {
    return this.getStringMapAttribute('proxy_connect_header');
  }
  public set proxyConnectHeader(value: { [key: string]: string }) {
    this._proxyConnectHeader = value;
  }
  public resetProxyConnectHeader() {
    this._proxyConnectHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConnectHeaderInput() {
    return this._proxyConnectHeader;
  }

  // proxy_from_environment - computed: false, optional: true, required: false
  private _proxyFromEnvironment?: boolean | cdktf.IResolvable; 
  public get proxyFromEnvironment() {
    return this.getBooleanAttribute('proxy_from_environment');
  }
  public set proxyFromEnvironment(value: boolean | cdktf.IResolvable) {
    this._proxyFromEnvironment = value;
  }
  public resetProxyFromEnvironment() {
    this._proxyFromEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyFromEnvironmentInput() {
    return this._proxyFromEnvironment;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
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
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOutputReference {
    return new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelings {
  /**
  * Action to perform based on the regex matching. 'Uppercase' and 'Lowercase' actions require Prometheus >= v2.36.0. 'DropEqual' and 'KeepEqual' actions require Prometheus >= v2.41.0. Default: 'Replace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#action DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#action}
  */
  readonly action?: string;
  /**
  * Modulus to take of the hash of the source label values. Only applicable when the action is 'HashMod'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#modulus DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#regex DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Replacement value against which a Replace action is performed if the regular expression matches. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#replacement DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator is the string between concatenated SourceLabels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#separator DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured Separator and matched against the configured regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#source_labels DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#source_labels}
  */
  readonly sourceLabels?: string[];
  /**
  * Label to which the resulting string is written in a replacement. It is mandatory for 'Replace', 'HashMod', 'Lowercase', 'Uppercase', 'KeepEqual' and 'DropEqual' actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#target_label DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelingsToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelingsToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelingsOutputReference {
    return new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKey {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKeyToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKeyToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#ca DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#cert DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key_secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#max_version DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#min_version DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#server_name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecret",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._cert.internalValue = undefined;
      this._insecureSkipVerify = undefined;
      this._keySecret.internalValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._cert.internalValue = value.cert;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keySecret.internalValue = value.keySecret;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._serverName = value.serverName;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigs {
  /**
  * Access key to use. https://console.scaleway.com/project/credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#access_key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#access_key}
  */
  readonly accessKey: string;
  /**
  * API URL to use when doing the server listing requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#api_url DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Whether to enable HTTP2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#enable_http2 DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * Configure whether HTTP requests follow HTTP 3xx redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#follow_redirects DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * NameFilter specify a name filter (works as a LIKE) to apply on the server listing request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name_filter DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name_filter}
  */
  readonly nameFilter?: string;
  /**
  * 'noProxy' is a comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#no_proxy DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * The port to scrape metrics from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#port DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Project ID of the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#project_id DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#project_id}
  */
  readonly projectId: string;
  /**
  * ProxyConnectHeader optionally specifies headers to send to proxies during CONNECT requests. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_connect_header DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_connect_header}
  */
  readonly proxyConnectHeader?: { [key: string]: string };
  /**
  * Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY). It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_from_environment DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_from_environment}
  */
  readonly proxyFromEnvironment?: boolean | cdktf.IResolvable;
  /**
  * 'proxyURL' defines the HTTP proxy server to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_url DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Refresh interval to re-read the list of instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#refresh_interval DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
  /**
  * Service of the targets to retrieve. Must be 'Instance' or 'Baremetal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#role DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#role}
  */
  readonly role: string;
  /**
  * Secret key to use when listing targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret_key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret_key}
  */
  readonly secretKey: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKey;
  /**
  * TagsFilter specify a tag filter (a server needs to have all defined tags to be listed) to apply on the server listing request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#tags_filter DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#tags_filter}
  */
  readonly tagsFilter?: string[];
  /**
  * TLS configuration to use on every scrape request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#tls_config DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfig;
  /**
  * Zone is the availability zone of your targets (e.g. fr-par-1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#zone DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    enable_http2: cdktf.booleanToTerraform(struct!.enableHttp2),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    name_filter: cdktf.stringToTerraform(struct!.nameFilter),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    port: cdktf.numberToTerraform(struct!.port),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    proxy_connect_header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConnectHeader),
    proxy_from_environment: cdktf.booleanToTerraform(struct!.proxyFromEnvironment),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
    role: cdktf.stringToTerraform(struct!.role),
    secret_key: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKeyToTerraform(struct!.secretKey),
    tags_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagsFilter),
    tls_config: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigToTerraform(struct!.tlsConfig),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_http2: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_filter: {
      value: cdktf.stringToHclTerraform(struct!.nameFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_connect_header: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.proxyConnectHeader),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    proxy_from_environment: {
      value: cdktf.booleanToHclTerraform(struct!.proxyFromEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKeyToHclTerraform(struct!.secretKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKey",
    },
    tags_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagsFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_config: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfig",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._enableHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttp2 = this._enableHttp2;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._nameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameFilter = this._nameFilter;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._proxyConnectHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConnectHeader = this._proxyConnectHeader;
    }
    if (this._proxyFromEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyFromEnvironment = this._proxyFromEnvironment;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secretKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey?.internalValue;
    }
    if (this._tagsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsFilter = this._tagsFilter;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._apiUrl = undefined;
      this._enableHttp2 = undefined;
      this._followRedirects = undefined;
      this._nameFilter = undefined;
      this._noProxy = undefined;
      this._port = undefined;
      this._projectId = undefined;
      this._proxyConnectHeader = undefined;
      this._proxyFromEnvironment = undefined;
      this._proxyUrl = undefined;
      this._refreshInterval = undefined;
      this._role = undefined;
      this._secretKey.internalValue = undefined;
      this._tagsFilter = undefined;
      this._tlsConfig.internalValue = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._apiUrl = value.apiUrl;
      this._enableHttp2 = value.enableHttp2;
      this._followRedirects = value.followRedirects;
      this._nameFilter = value.nameFilter;
      this._noProxy = value.noProxy;
      this._port = value.port;
      this._projectId = value.projectId;
      this._proxyConnectHeader = value.proxyConnectHeader;
      this._proxyFromEnvironment = value.proxyFromEnvironment;
      this._proxyUrl = value.proxyUrl;
      this._refreshInterval = value.refreshInterval;
      this._role = value.role;
      this._secretKey.internalValue = value.secretKey;
      this._tagsFilter = value.tagsFilter;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._zone = value.zone;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string; 
  public get nameFilter() {
    return this.getStringAttribute('name_filter');
  }
  public set nameFilter(value: string) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // proxy_connect_header - computed: false, optional: true, required: false
  private _proxyConnectHeader?: { [key: string]: string }; 
  public get proxyConnectHeader() {
    return this.getStringMapAttribute('proxy_connect_header');
  }
  public set proxyConnectHeader(value: { [key: string]: string }) {
    this._proxyConnectHeader = value;
  }
  public resetProxyConnectHeader() {
    this._proxyConnectHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConnectHeaderInput() {
    return this._proxyConnectHeader;
  }

  // proxy_from_environment - computed: false, optional: true, required: false
  private _proxyFromEnvironment?: boolean | cdktf.IResolvable; 
  public get proxyFromEnvironment() {
    return this.getBooleanAttribute('proxy_from_environment');
  }
  public set proxyFromEnvironment(value: boolean | cdktf.IResolvable) {
    this._proxyFromEnvironment = value;
  }
  public resetProxyFromEnvironment() {
    this._proxyFromEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyFromEnvironmentInput() {
    return this._proxyFromEnvironment;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKeyOutputReference(this, "secret_key");
  public get secretKey() {
    return this._secretKey;
  }
  public putSecretKey(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsSecretKey) {
    this._secretKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey.internalValue;
  }

  // tags_filter - computed: false, optional: true, required: false
  private _tagsFilter?: string[]; 
  public get tagsFilter() {
    return this.getListAttribute('tags_filter');
  }
  public set tagsFilter(value: string[]) {
    this._tagsFilter = value;
  }
  public resetTagsFilter() {
    this._tagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsFilterInput() {
    return this._tagsFilter;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsOutputReference {
    return new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigs {
  /**
  * Labels assigned to all metrics scraped from the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#labels DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * List of targets for this static configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#targets DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#targets}
  */
  readonly targets: string[];
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigsToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigsToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._targets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._targets = value.targets;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigsOutputReference {
    return new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#ca DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#cert DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#key_secret DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#max_version DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#min_version DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#server_name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecret",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._cert.internalValue = undefined;
      this._insecureSkipVerify = undefined;
      this._keySecret.internalValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._cert.internalValue = value.cert;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keySecret.internalValue = value.keySecret;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._serverName = value.serverName;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpec {
  /**
  * Authorization header to use on every scrape request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#authorization DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#authorization}
  */
  readonly authorization?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAuthorization;
  /**
  * AzureSDConfigs defines a list of Azure service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#azure_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#azure_sd_configs}
  */
  readonly azureSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAzureSdConfigs[] | cdktf.IResolvable;
  /**
  * BasicAuth information to use on every scrape request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#basic_auth DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecBasicAuth;
  /**
  * ConsulSDConfigs defines a list of Consul service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#consul_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#consul_sd_configs}
  */
  readonly consulSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecConsulSdConfigs[] | cdktf.IResolvable;
  /**
  * DigitalOceanSDConfigs defines a list of DigitalOcean service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#digital_ocean_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#digital_ocean_sd_configs}
  */
  readonly digitalOceanSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDigitalOceanSdConfigs[] | cdktf.IResolvable;
  /**
  * DNSSDConfigs defines a list of DNS service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#dns_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#dns_sd_configs}
  */
  readonly dnsSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDnsSdConfigs[] | cdktf.IResolvable;
  /**
  * DockerSDConfigs defines a list of Docker service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#docker_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#docker_sd_configs}
  */
  readonly dockerSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSdConfigs[] | cdktf.IResolvable;
  /**
  * DockerswarmSDConfigs defines a list of Dockerswarm service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#docker_swarm_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#docker_swarm_sd_configs}
  */
  readonly dockerSwarmSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSwarmSdConfigs[] | cdktf.IResolvable;
  /**
  * EC2SDConfigs defines a list of EC2 service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#ec2_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#ec2_sd_configs}
  */
  readonly ec2SdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEc2SdConfigs[] | cdktf.IResolvable;
  /**
  * When false, Prometheus will request uncompressed response from the scraped target. It requires Prometheus >= v2.49.0. If unset, Prometheus uses true by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#enable_compression DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#enable_compression}
  */
  readonly enableCompression?: boolean | cdktf.IResolvable;
  /**
  * EurekaSDConfigs defines a list of Eureka service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#eureka_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#eureka_sd_configs}
  */
  readonly eurekaSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEurekaSdConfigs[] | cdktf.IResolvable;
  /**
  * FileSDConfigs defines a list of file service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#file_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#file_sd_configs}
  */
  readonly fileSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecFileSdConfigs[] | cdktf.IResolvable;
  /**
  * GCESDConfigs defines a list of GCE service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#gce_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#gce_sd_configs}
  */
  readonly gceSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecGceSdConfigs[] | cdktf.IResolvable;
  /**
  * HetznerSDConfigs defines a list of Hetzner service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#hetzner_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#hetzner_sd_configs}
  */
  readonly hetznerSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHetznerSdConfigs[] | cdktf.IResolvable;
  /**
  * HonorLabels chooses the metric's labels on collisions with target labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#honor_labels DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#honor_labels}
  */
  readonly honorLabels?: boolean | cdktf.IResolvable;
  /**
  * HonorTimestamps controls whether Prometheus respects the timestamps present in scraped data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#honor_timestamps DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#honor_timestamps}
  */
  readonly honorTimestamps?: boolean | cdktf.IResolvable;
  /**
  * HTTPSDConfigs defines a list of HTTP service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#http_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#http_sd_configs}
  */
  readonly httpSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHttpSdConfigs[] | cdktf.IResolvable;
  /**
  * IonosSDConfigs defines a list of IONOS service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#ionos_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#ionos_sd_configs}
  */
  readonly ionosSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecIonosSdConfigs[] | cdktf.IResolvable;
  /**
  * The value of the 'job' label assigned to the scraped metrics by default. The 'job_name' field in the rendered scrape configuration is always controlled by the operator to prevent duplicate job names, which Prometheus does not allow. Instead the 'job' label is set by means of relabeling configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#job_name DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#job_name}
  */
  readonly jobName?: string;
  /**
  * Per-scrape limit on the number of targets dropped by relabeling that will be kept in memory. 0 means no limit. It requires Prometheus >= v2.47.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#keep_dropped_targets DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#keep_dropped_targets}
  */
  readonly keepDroppedTargets?: number;
  /**
  * KubernetesSDConfigs defines a list of Kubernetes service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#kubernetes_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#kubernetes_sd_configs}
  */
  readonly kubernetesSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKubernetesSdConfigs[] | cdktf.IResolvable;
  /**
  * KumaSDConfigs defines a list of Kuma service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#kuma_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#kuma_sd_configs}
  */
  readonly kumaSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKumaSdConfigs[] | cdktf.IResolvable;
  /**
  * Per-scrape limit on number of labels that will be accepted for a sample. Only valid in Prometheus versions 2.27.0 and newer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#label_limit DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#label_limit}
  */
  readonly labelLimit?: number;
  /**
  * Per-scrape limit on length of labels name that will be accepted for a sample. Only valid in Prometheus versions 2.27.0 and newer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#label_name_length_limit DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#label_name_length_limit}
  */
  readonly labelNameLengthLimit?: number;
  /**
  * Per-scrape limit on length of labels value that will be accepted for a sample. Only valid in Prometheus versions 2.27.0 and newer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#label_value_length_limit DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#label_value_length_limit}
  */
  readonly labelValueLengthLimit?: number;
  /**
  * LightsailSDConfigs defines a list of Lightsail service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#light_sail_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#light_sail_sd_configs}
  */
  readonly lightSailSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLightSailSdConfigs[] | cdktf.IResolvable;
  /**
  * LinodeSDConfigs defines a list of Linode service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#linode_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#linode_sd_configs}
  */
  readonly linodeSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLinodeSdConfigs[] | cdktf.IResolvable;
  /**
  * MetricRelabelConfigs to apply to samples before ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#metric_relabelings DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#metric_relabelings}
  */
  readonly metricRelabelings?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecMetricRelabelings[] | cdktf.IResolvable;
  /**
  * MetricsPath HTTP path to scrape for metrics. If empty, Prometheus uses the default value (e.g. /metrics).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#metrics_path DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#metrics_path}
  */
  readonly metricsPath?: string;
  /**
  * 'noProxy' is a comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#no_proxy DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * NomadSDConfigs defines a list of Nomad service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#nomad_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#nomad_sd_configs}
  */
  readonly nomadSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecNomadSdConfigs[] | cdktf.IResolvable;
  /**
  * OAuth2 configuration to use on every scrape request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#oauth2 DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#oauth2}
  */
  readonly oauth2?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOauth2;
  /**
  * OpenStackSDConfigs defines a list of OpenStack service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#openstack_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#openstack_sd_configs}
  */
  readonly openstackSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigs[] | cdktf.IResolvable;
  /**
  * OVHCloudSDConfigs defines a list of OVHcloud service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#ovhcloud_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#ovhcloud_sd_configs}
  */
  readonly ovhcloudSdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigs[] | cdktf.IResolvable;
  /**
  * Optional HTTP URL parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#params DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#params}
  */
  readonly params?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * ProxyConnectHeader optionally specifies headers to send to proxies during CONNECT requests. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_connect_header DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_connect_header}
  */
  readonly proxyConnectHeader?: { [key: string]: string };
  /**
  * Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY). It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_from_environment DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_from_environment}
  */
  readonly proxyFromEnvironment?: boolean | cdktf.IResolvable;
  /**
  * 'proxyURL' defines the HTTP proxy server to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#proxy_url DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * PuppetDBSDConfigs defines a list of PuppetDB service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#puppet_dbsd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#puppet_dbsd_configs}
  */
  readonly puppetDbsdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigs[] | cdktf.IResolvable;
  /**
  * RelabelConfigs defines how to rewrite the target's labels before scraping. Prometheus Operator automatically adds relabelings for a few standard Kubernetes fields. The original scrape job's name is available via the '__tmp_prometheus_job_name' label. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#relabelings DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#relabelings}
  */
  readonly relabelings?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelings[] | cdktf.IResolvable;
  /**
  * SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#sample_limit DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#sample_limit}
  */
  readonly sampleLimit?: number;
  /**
  * ScalewaySDConfigs defines a list of Scaleway instances and baremetal service discovery configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#scaleway_sd_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#scaleway_sd_configs}
  */
  readonly scalewaySdConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigs[] | cdktf.IResolvable;
  /**
  * Configures the protocol scheme used for requests. If empty, Prometheus uses HTTP by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#scheme DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * The scrape class to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#scrape_class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#scrape_class}
  */
  readonly scrapeClass?: string;
  /**
  * ScrapeInterval is the interval between consecutive scrapes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#scrape_interval DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#scrape_interval}
  */
  readonly scrapeInterval?: string;
  /**
  * The protocols to negotiate during a scrape. It tells clients the protocols supported by Prometheus in order of preference (from most to least preferred). If unset, Prometheus uses its default value. It requires Prometheus >= v2.49.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#scrape_protocols DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#scrape_protocols}
  */
  readonly scrapeProtocols?: string[];
  /**
  * ScrapeTimeout is the number of seconds to wait until a scrape request times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#scrape_timeout DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#scrape_timeout}
  */
  readonly scrapeTimeout?: string;
  /**
  * StaticConfigs defines a list of static targets with a common label set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#static_configs DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#static_configs}
  */
  readonly staticConfigs?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigs[] | cdktf.IResolvable;
  /**
  * TargetLimit defines a limit on the number of scraped targets that will be accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#target_limit DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#target_limit}
  */
  readonly targetLimit?: number;
  /**
  * TLS configuration to use on every scrape request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#tls_config DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfig;
  /**
  * TrackTimestampsStaleness whether Prometheus tracks staleness of the metrics that have an explicit timestamp present in scraped data. Has no effect if 'honorTimestamps' is false. It requires Prometheus >= v2.48.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/monitoring_coreos_com_scrape_config_v1alpha1_manifest#track_timestamps_staleness DataK8SMonitoringCoreosComScrapeConfigV1Alpha1Manifest#track_timestamps_staleness}
  */
  readonly trackTimestampsStaleness?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAuthorizationToTerraform(struct!.authorization),
    azure_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAzureSdConfigsToTerraform, false)(struct!.azureSdConfigs),
    basic_auth: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecBasicAuthToTerraform(struct!.basicAuth),
    consul_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecConsulSdConfigsToTerraform, false)(struct!.consulSdConfigs),
    digital_ocean_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDigitalOceanSdConfigsToTerraform, false)(struct!.digitalOceanSdConfigs),
    dns_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDnsSdConfigsToTerraform, false)(struct!.dnsSdConfigs),
    docker_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSdConfigsToTerraform, false)(struct!.dockerSdConfigs),
    docker_swarm_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSwarmSdConfigsToTerraform, false)(struct!.dockerSwarmSdConfigs),
    ec2_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEc2SdConfigsToTerraform, false)(struct!.ec2SdConfigs),
    enable_compression: cdktf.booleanToTerraform(struct!.enableCompression),
    eureka_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEurekaSdConfigsToTerraform, false)(struct!.eurekaSdConfigs),
    file_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecFileSdConfigsToTerraform, false)(struct!.fileSdConfigs),
    gce_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecGceSdConfigsToTerraform, false)(struct!.gceSdConfigs),
    hetzner_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHetznerSdConfigsToTerraform, false)(struct!.hetznerSdConfigs),
    honor_labels: cdktf.booleanToTerraform(struct!.honorLabels),
    honor_timestamps: cdktf.booleanToTerraform(struct!.honorTimestamps),
    http_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHttpSdConfigsToTerraform, false)(struct!.httpSdConfigs),
    ionos_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecIonosSdConfigsToTerraform, false)(struct!.ionosSdConfigs),
    job_name: cdktf.stringToTerraform(struct!.jobName),
    keep_dropped_targets: cdktf.numberToTerraform(struct!.keepDroppedTargets),
    kubernetes_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKubernetesSdConfigsToTerraform, false)(struct!.kubernetesSdConfigs),
    kuma_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKumaSdConfigsToTerraform, false)(struct!.kumaSdConfigs),
    label_limit: cdktf.numberToTerraform(struct!.labelLimit),
    label_name_length_limit: cdktf.numberToTerraform(struct!.labelNameLengthLimit),
    label_value_length_limit: cdktf.numberToTerraform(struct!.labelValueLengthLimit),
    light_sail_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLightSailSdConfigsToTerraform, false)(struct!.lightSailSdConfigs),
    linode_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLinodeSdConfigsToTerraform, false)(struct!.linodeSdConfigs),
    metric_relabelings: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecMetricRelabelingsToTerraform, false)(struct!.metricRelabelings),
    metrics_path: cdktf.stringToTerraform(struct!.metricsPath),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    nomad_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecNomadSdConfigsToTerraform, false)(struct!.nomadSdConfigs),
    oauth2: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOauth2ToTerraform(struct!.oauth2),
    openstack_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsToTerraform, false)(struct!.openstackSdConfigs),
    ovhcloud_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsToTerraform, false)(struct!.ovhcloudSdConfigs),
    params: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.params),
    proxy_connect_header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConnectHeader),
    proxy_from_environment: cdktf.booleanToTerraform(struct!.proxyFromEnvironment),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    puppet_dbsd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsToTerraform, false)(struct!.puppetDbsdConfigs),
    relabelings: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelingsToTerraform, false)(struct!.relabelings),
    sample_limit: cdktf.numberToTerraform(struct!.sampleLimit),
    scaleway_sd_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsToTerraform, false)(struct!.scalewaySdConfigs),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    scrape_class: cdktf.stringToTerraform(struct!.scrapeClass),
    scrape_interval: cdktf.stringToTerraform(struct!.scrapeInterval),
    scrape_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scrapeProtocols),
    scrape_timeout: cdktf.stringToTerraform(struct!.scrapeTimeout),
    static_configs: cdktf.listMapper(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigsToTerraform, false)(struct!.staticConfigs),
    target_limit: cdktf.numberToTerraform(struct!.targetLimit),
    tls_config: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigToTerraform(struct!.tlsConfig),
    track_timestamps_staleness: cdktf.booleanToTerraform(struct!.trackTimestampsStaleness),
  }
}


export function dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAuthorization",
    },
    azure_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAzureSdConfigsToHclTerraform, false)(struct!.azureSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAzureSdConfigsList",
    },
    basic_auth: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecBasicAuth",
    },
    consul_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecConsulSdConfigsToHclTerraform, false)(struct!.consulSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecConsulSdConfigsList",
    },
    digital_ocean_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDigitalOceanSdConfigsToHclTerraform, false)(struct!.digitalOceanSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDigitalOceanSdConfigsList",
    },
    dns_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDnsSdConfigsToHclTerraform, false)(struct!.dnsSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDnsSdConfigsList",
    },
    docker_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSdConfigsToHclTerraform, false)(struct!.dockerSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSdConfigsList",
    },
    docker_swarm_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSwarmSdConfigsToHclTerraform, false)(struct!.dockerSwarmSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSwarmSdConfigsList",
    },
    ec2_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEc2SdConfigsToHclTerraform, false)(struct!.ec2SdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEc2SdConfigsList",
    },
    enable_compression: {
      value: cdktf.booleanToHclTerraform(struct!.enableCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eureka_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEurekaSdConfigsToHclTerraform, false)(struct!.eurekaSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEurekaSdConfigsList",
    },
    file_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecFileSdConfigsToHclTerraform, false)(struct!.fileSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecFileSdConfigsList",
    },
    gce_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecGceSdConfigsToHclTerraform, false)(struct!.gceSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecGceSdConfigsList",
    },
    hetzner_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHetznerSdConfigsToHclTerraform, false)(struct!.hetznerSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHetznerSdConfigsList",
    },
    honor_labels: {
      value: cdktf.booleanToHclTerraform(struct!.honorLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    honor_timestamps: {
      value: cdktf.booleanToHclTerraform(struct!.honorTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHttpSdConfigsToHclTerraform, false)(struct!.httpSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHttpSdConfigsList",
    },
    ionos_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecIonosSdConfigsToHclTerraform, false)(struct!.ionosSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecIonosSdConfigsList",
    },
    job_name: {
      value: cdktf.stringToHclTerraform(struct!.jobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_dropped_targets: {
      value: cdktf.numberToHclTerraform(struct!.keepDroppedTargets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kubernetes_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKubernetesSdConfigsToHclTerraform, false)(struct!.kubernetesSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKubernetesSdConfigsList",
    },
    kuma_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKumaSdConfigsToHclTerraform, false)(struct!.kumaSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKumaSdConfigsList",
    },
    label_limit: {
      value: cdktf.numberToHclTerraform(struct!.labelLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_name_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.labelNameLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_value_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.labelValueLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    light_sail_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLightSailSdConfigsToHclTerraform, false)(struct!.lightSailSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLightSailSdConfigsList",
    },
    linode_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLinodeSdConfigsToHclTerraform, false)(struct!.linodeSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLinodeSdConfigsList",
    },
    metric_relabelings: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecMetricRelabelingsToHclTerraform, false)(struct!.metricRelabelings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecMetricRelabelingsList",
    },
    metrics_path: {
      value: cdktf.stringToHclTerraform(struct!.metricsPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nomad_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecNomadSdConfigsToHclTerraform, false)(struct!.nomadSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecNomadSdConfigsList",
    },
    oauth2: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOauth2",
    },
    openstack_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsToHclTerraform, false)(struct!.openstackSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsList",
    },
    ovhcloud_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsToHclTerraform, false)(struct!.ovhcloudSdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsList",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    proxy_connect_header: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.proxyConnectHeader),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    proxy_from_environment: {
      value: cdktf.booleanToHclTerraform(struct!.proxyFromEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    puppet_dbsd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsToHclTerraform, false)(struct!.puppetDbsdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsList",
    },
    relabelings: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelingsToHclTerraform, false)(struct!.relabelings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelingsList",
    },
    sample_limit: {
      value: cdktf.numberToHclTerraform(struct!.sampleLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaleway_sd_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsToHclTerraform, false)(struct!.scalewaySdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsList",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_class: {
      value: cdktf.stringToHclTerraform(struct!.scrapeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_interval: {
      value: cdktf.stringToHclTerraform(struct!.scrapeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scrapeProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scrape_timeout: {
      value: cdktf.stringToHclTerraform(struct!.scrapeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigsToHclTerraform, false)(struct!.staticConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigsList",
    },
    target_limit: {
      value: cdktf.numberToHclTerraform(struct!.targetLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_config: {
      value: dataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfig",
    },
    track_timestamps_staleness: {
      value: cdktf.booleanToHclTerraform(struct!.trackTimestampsStaleness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._azureSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSdConfigs = this._azureSdConfigs?.internalValue;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._consulSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consulSdConfigs = this._consulSdConfigs?.internalValue;
    }
    if (this._digitalOceanSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalOceanSdConfigs = this._digitalOceanSdConfigs?.internalValue;
    }
    if (this._dnsSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSdConfigs = this._dnsSdConfigs?.internalValue;
    }
    if (this._dockerSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerSdConfigs = this._dockerSdConfigs?.internalValue;
    }
    if (this._dockerSwarmSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerSwarmSdConfigs = this._dockerSwarmSdConfigs?.internalValue;
    }
    if (this._ec2SdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2SdConfigs = this._ec2SdConfigs?.internalValue;
    }
    if (this._enableCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCompression = this._enableCompression;
    }
    if (this._eurekaSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eurekaSdConfigs = this._eurekaSdConfigs?.internalValue;
    }
    if (this._fileSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSdConfigs = this._fileSdConfigs?.internalValue;
    }
    if (this._gceSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceSdConfigs = this._gceSdConfigs?.internalValue;
    }
    if (this._hetznerSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hetznerSdConfigs = this._hetznerSdConfigs?.internalValue;
    }
    if (this._honorLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorLabels = this._honorLabels;
    }
    if (this._honorTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorTimestamps = this._honorTimestamps;
    }
    if (this._httpSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSdConfigs = this._httpSdConfigs?.internalValue;
    }
    if (this._ionosSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ionosSdConfigs = this._ionosSdConfigs?.internalValue;
    }
    if (this._jobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobName = this._jobName;
    }
    if (this._keepDroppedTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDroppedTargets = this._keepDroppedTargets;
    }
    if (this._kubernetesSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesSdConfigs = this._kubernetesSdConfigs?.internalValue;
    }
    if (this._kumaSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kumaSdConfigs = this._kumaSdConfigs?.internalValue;
    }
    if (this._labelLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelLimit = this._labelLimit;
    }
    if (this._labelNameLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNameLengthLimit = this._labelNameLengthLimit;
    }
    if (this._labelValueLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelValueLengthLimit = this._labelValueLengthLimit;
    }
    if (this._lightSailSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lightSailSdConfigs = this._lightSailSdConfigs?.internalValue;
    }
    if (this._linodeSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linodeSdConfigs = this._linodeSdConfigs?.internalValue;
    }
    if (this._metricRelabelings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRelabelings = this._metricRelabelings?.internalValue;
    }
    if (this._metricsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPath = this._metricsPath;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._nomadSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nomadSdConfigs = this._nomadSdConfigs?.internalValue;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    if (this._openstackSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openstackSdConfigs = this._openstackSdConfigs?.internalValue;
    }
    if (this._ovhcloudSdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovhcloudSdConfigs = this._ovhcloudSdConfigs?.internalValue;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._proxyConnectHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConnectHeader = this._proxyConnectHeader;
    }
    if (this._proxyFromEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyFromEnvironment = this._proxyFromEnvironment;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._puppetDbsdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.puppetDbsdConfigs = this._puppetDbsdConfigs?.internalValue;
    }
    if (this._relabelings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relabelings = this._relabelings?.internalValue;
    }
    if (this._sampleLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleLimit = this._sampleLimit;
    }
    if (this._scalewaySdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalewaySdConfigs = this._scalewaySdConfigs?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._scrapeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeClass = this._scrapeClass;
    }
    if (this._scrapeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeInterval = this._scrapeInterval;
    }
    if (this._scrapeProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeProtocols = this._scrapeProtocols;
    }
    if (this._scrapeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeTimeout = this._scrapeTimeout;
    }
    if (this._staticConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticConfigs = this._staticConfigs?.internalValue;
    }
    if (this._targetLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLimit = this._targetLimit;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._trackTimestampsStaleness !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackTimestampsStaleness = this._trackTimestampsStaleness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization.internalValue = undefined;
      this._azureSdConfigs.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._consulSdConfigs.internalValue = undefined;
      this._digitalOceanSdConfigs.internalValue = undefined;
      this._dnsSdConfigs.internalValue = undefined;
      this._dockerSdConfigs.internalValue = undefined;
      this._dockerSwarmSdConfigs.internalValue = undefined;
      this._ec2SdConfigs.internalValue = undefined;
      this._enableCompression = undefined;
      this._eurekaSdConfigs.internalValue = undefined;
      this._fileSdConfigs.internalValue = undefined;
      this._gceSdConfigs.internalValue = undefined;
      this._hetznerSdConfigs.internalValue = undefined;
      this._honorLabels = undefined;
      this._honorTimestamps = undefined;
      this._httpSdConfigs.internalValue = undefined;
      this._ionosSdConfigs.internalValue = undefined;
      this._jobName = undefined;
      this._keepDroppedTargets = undefined;
      this._kubernetesSdConfigs.internalValue = undefined;
      this._kumaSdConfigs.internalValue = undefined;
      this._labelLimit = undefined;
      this._labelNameLengthLimit = undefined;
      this._labelValueLengthLimit = undefined;
      this._lightSailSdConfigs.internalValue = undefined;
      this._linodeSdConfigs.internalValue = undefined;
      this._metricRelabelings.internalValue = undefined;
      this._metricsPath = undefined;
      this._noProxy = undefined;
      this._nomadSdConfigs.internalValue = undefined;
      this._oauth2.internalValue = undefined;
      this._openstackSdConfigs.internalValue = undefined;
      this._ovhcloudSdConfigs.internalValue = undefined;
      this._params = undefined;
      this._proxyConnectHeader = undefined;
      this._proxyFromEnvironment = undefined;
      this._proxyUrl = undefined;
      this._puppetDbsdConfigs.internalValue = undefined;
      this._relabelings.internalValue = undefined;
      this._sampleLimit = undefined;
      this._scalewaySdConfigs.internalValue = undefined;
      this._scheme = undefined;
      this._scrapeClass = undefined;
      this._scrapeInterval = undefined;
      this._scrapeProtocols = undefined;
      this._scrapeTimeout = undefined;
      this._staticConfigs.internalValue = undefined;
      this._targetLimit = undefined;
      this._tlsConfig.internalValue = undefined;
      this._trackTimestampsStaleness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization.internalValue = value.authorization;
      this._azureSdConfigs.internalValue = value.azureSdConfigs;
      this._basicAuth.internalValue = value.basicAuth;
      this._consulSdConfigs.internalValue = value.consulSdConfigs;
      this._digitalOceanSdConfigs.internalValue = value.digitalOceanSdConfigs;
      this._dnsSdConfigs.internalValue = value.dnsSdConfigs;
      this._dockerSdConfigs.internalValue = value.dockerSdConfigs;
      this._dockerSwarmSdConfigs.internalValue = value.dockerSwarmSdConfigs;
      this._ec2SdConfigs.internalValue = value.ec2SdConfigs;
      this._enableCompression = value.enableCompression;
      this._eurekaSdConfigs.internalValue = value.eurekaSdConfigs;
      this._fileSdConfigs.internalValue = value.fileSdConfigs;
      this._gceSdConfigs.internalValue = value.gceSdConfigs;
      this._hetznerSdConfigs.internalValue = value.hetznerSdConfigs;
      this._honorLabels = value.honorLabels;
      this._honorTimestamps = value.honorTimestamps;
      this._httpSdConfigs.internalValue = value.httpSdConfigs;
      this._ionosSdConfigs.internalValue = value.ionosSdConfigs;
      this._jobName = value.jobName;
      this._keepDroppedTargets = value.keepDroppedTargets;
      this._kubernetesSdConfigs.internalValue = value.kubernetesSdConfigs;
      this._kumaSdConfigs.internalValue = value.kumaSdConfigs;
      this._labelLimit = value.labelLimit;
      this._labelNameLengthLimit = value.labelNameLengthLimit;
      this._labelValueLengthLimit = value.labelValueLengthLimit;
      this._lightSailSdConfigs.internalValue = value.lightSailSdConfigs;
      this._linodeSdConfigs.internalValue = value.linodeSdConfigs;
      this._metricRelabelings.internalValue = value.metricRelabelings;
      this._metricsPath = value.metricsPath;
      this._noProxy = value.noProxy;
      this._nomadSdConfigs.internalValue = value.nomadSdConfigs;
      this._oauth2.internalValue = value.oauth2;
      this._openstackSdConfigs.internalValue = value.openstackSdConfigs;
      this._ovhcloudSdConfigs.internalValue = value.ovhcloudSdConfigs;
      this._params = value.params;
      this._proxyConnectHeader = value.proxyConnectHeader;
      this._proxyFromEnvironment = value.proxyFromEnvironment;
      this._proxyUrl = value.proxyUrl;
      this._puppetDbsdConfigs.internalValue = value.puppetDbsdConfigs;
      this._relabelings.internalValue = value.relabelings;
      this._sampleLimit = value.sampleLimit;
      this._scalewaySdConfigs.internalValue = value.scalewaySdConfigs;
      this._scheme = value.scheme;
      this._scrapeClass = value.scrapeClass;
      this._scrapeInterval = value.scrapeInterval;
      this._scrapeProtocols = value.scrapeProtocols;
      this._scrapeTimeout = value.scrapeTimeout;
      this._staticConfigs.internalValue = value.staticConfigs;
      this._targetLimit = value.targetLimit;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._trackTimestampsStaleness = value.trackTimestampsStaleness;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // azure_sd_configs - computed: false, optional: true, required: false
  private _azureSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAzureSdConfigsList(this, "azure_sd_configs", false);
  public get azureSdConfigs() {
    return this._azureSdConfigs;
  }
  public putAzureSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecAzureSdConfigs[] | cdktf.IResolvable) {
    this._azureSdConfigs.internalValue = value;
  }
  public resetAzureSdConfigs() {
    this._azureSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSdConfigsInput() {
    return this._azureSdConfigs.internalValue;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // consul_sd_configs - computed: false, optional: true, required: false
  private _consulSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecConsulSdConfigsList(this, "consul_sd_configs", false);
  public get consulSdConfigs() {
    return this._consulSdConfigs;
  }
  public putConsulSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecConsulSdConfigs[] | cdktf.IResolvable) {
    this._consulSdConfigs.internalValue = value;
  }
  public resetConsulSdConfigs() {
    this._consulSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulSdConfigsInput() {
    return this._consulSdConfigs.internalValue;
  }

  // digital_ocean_sd_configs - computed: false, optional: true, required: false
  private _digitalOceanSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDigitalOceanSdConfigsList(this, "digital_ocean_sd_configs", false);
  public get digitalOceanSdConfigs() {
    return this._digitalOceanSdConfigs;
  }
  public putDigitalOceanSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDigitalOceanSdConfigs[] | cdktf.IResolvable) {
    this._digitalOceanSdConfigs.internalValue = value;
  }
  public resetDigitalOceanSdConfigs() {
    this._digitalOceanSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalOceanSdConfigsInput() {
    return this._digitalOceanSdConfigs.internalValue;
  }

  // dns_sd_configs - computed: false, optional: true, required: false
  private _dnsSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDnsSdConfigsList(this, "dns_sd_configs", false);
  public get dnsSdConfigs() {
    return this._dnsSdConfigs;
  }
  public putDnsSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDnsSdConfigs[] | cdktf.IResolvable) {
    this._dnsSdConfigs.internalValue = value;
  }
  public resetDnsSdConfigs() {
    this._dnsSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSdConfigsInput() {
    return this._dnsSdConfigs.internalValue;
  }

  // docker_sd_configs - computed: false, optional: true, required: false
  private _dockerSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSdConfigsList(this, "docker_sd_configs", false);
  public get dockerSdConfigs() {
    return this._dockerSdConfigs;
  }
  public putDockerSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSdConfigs[] | cdktf.IResolvable) {
    this._dockerSdConfigs.internalValue = value;
  }
  public resetDockerSdConfigs() {
    this._dockerSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerSdConfigsInput() {
    return this._dockerSdConfigs.internalValue;
  }

  // docker_swarm_sd_configs - computed: false, optional: true, required: false
  private _dockerSwarmSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSwarmSdConfigsList(this, "docker_swarm_sd_configs", false);
  public get dockerSwarmSdConfigs() {
    return this._dockerSwarmSdConfigs;
  }
  public putDockerSwarmSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecDockerSwarmSdConfigs[] | cdktf.IResolvable) {
    this._dockerSwarmSdConfigs.internalValue = value;
  }
  public resetDockerSwarmSdConfigs() {
    this._dockerSwarmSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerSwarmSdConfigsInput() {
    return this._dockerSwarmSdConfigs.internalValue;
  }

  // ec2_sd_configs - computed: false, optional: true, required: false
  private _ec2SdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEc2SdConfigsList(this, "ec2_sd_configs", false);
  public get ec2SdConfigs() {
    return this._ec2SdConfigs;
  }
  public putEc2SdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEc2SdConfigs[] | cdktf.IResolvable) {
    this._ec2SdConfigs.internalValue = value;
  }
  public resetEc2SdConfigs() {
    this._ec2SdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2SdConfigsInput() {
    return this._ec2SdConfigs.internalValue;
  }

  // enable_compression - computed: false, optional: true, required: false
  private _enableCompression?: boolean | cdktf.IResolvable; 
  public get enableCompression() {
    return this.getBooleanAttribute('enable_compression');
  }
  public set enableCompression(value: boolean | cdktf.IResolvable) {
    this._enableCompression = value;
  }
  public resetEnableCompression() {
    this._enableCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCompressionInput() {
    return this._enableCompression;
  }

  // eureka_sd_configs - computed: false, optional: true, required: false
  private _eurekaSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEurekaSdConfigsList(this, "eureka_sd_configs", false);
  public get eurekaSdConfigs() {
    return this._eurekaSdConfigs;
  }
  public putEurekaSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecEurekaSdConfigs[] | cdktf.IResolvable) {
    this._eurekaSdConfigs.internalValue = value;
  }
  public resetEurekaSdConfigs() {
    this._eurekaSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eurekaSdConfigsInput() {
    return this._eurekaSdConfigs.internalValue;
  }

  // file_sd_configs - computed: false, optional: true, required: false
  private _fileSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecFileSdConfigsList(this, "file_sd_configs", false);
  public get fileSdConfigs() {
    return this._fileSdConfigs;
  }
  public putFileSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecFileSdConfigs[] | cdktf.IResolvable) {
    this._fileSdConfigs.internalValue = value;
  }
  public resetFileSdConfigs() {
    this._fileSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSdConfigsInput() {
    return this._fileSdConfigs.internalValue;
  }

  // gce_sd_configs - computed: false, optional: true, required: false
  private _gceSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecGceSdConfigsList(this, "gce_sd_configs", false);
  public get gceSdConfigs() {
    return this._gceSdConfigs;
  }
  public putGceSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecGceSdConfigs[] | cdktf.IResolvable) {
    this._gceSdConfigs.internalValue = value;
  }
  public resetGceSdConfigs() {
    this._gceSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceSdConfigsInput() {
    return this._gceSdConfigs.internalValue;
  }

  // hetzner_sd_configs - computed: false, optional: true, required: false
  private _hetznerSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHetznerSdConfigsList(this, "hetzner_sd_configs", false);
  public get hetznerSdConfigs() {
    return this._hetznerSdConfigs;
  }
  public putHetznerSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHetznerSdConfigs[] | cdktf.IResolvable) {
    this._hetznerSdConfigs.internalValue = value;
  }
  public resetHetznerSdConfigs() {
    this._hetznerSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hetznerSdConfigsInput() {
    return this._hetznerSdConfigs.internalValue;
  }

  // honor_labels - computed: false, optional: true, required: false
  private _honorLabels?: boolean | cdktf.IResolvable; 
  public get honorLabels() {
    return this.getBooleanAttribute('honor_labels');
  }
  public set honorLabels(value: boolean | cdktf.IResolvable) {
    this._honorLabels = value;
  }
  public resetHonorLabels() {
    this._honorLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorLabelsInput() {
    return this._honorLabels;
  }

  // honor_timestamps - computed: false, optional: true, required: false
  private _honorTimestamps?: boolean | cdktf.IResolvable; 
  public get honorTimestamps() {
    return this.getBooleanAttribute('honor_timestamps');
  }
  public set honorTimestamps(value: boolean | cdktf.IResolvable) {
    this._honorTimestamps = value;
  }
  public resetHonorTimestamps() {
    this._honorTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorTimestampsInput() {
    return this._honorTimestamps;
  }

  // http_sd_configs - computed: false, optional: true, required: false
  private _httpSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHttpSdConfigsList(this, "http_sd_configs", false);
  public get httpSdConfigs() {
    return this._httpSdConfigs;
  }
  public putHttpSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecHttpSdConfigs[] | cdktf.IResolvable) {
    this._httpSdConfigs.internalValue = value;
  }
  public resetHttpSdConfigs() {
    this._httpSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSdConfigsInput() {
    return this._httpSdConfigs.internalValue;
  }

  // ionos_sd_configs - computed: false, optional: true, required: false
  private _ionosSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecIonosSdConfigsList(this, "ionos_sd_configs", false);
  public get ionosSdConfigs() {
    return this._ionosSdConfigs;
  }
  public putIonosSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecIonosSdConfigs[] | cdktf.IResolvable) {
    this._ionosSdConfigs.internalValue = value;
  }
  public resetIonosSdConfigs() {
    this._ionosSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ionosSdConfigsInput() {
    return this._ionosSdConfigs.internalValue;
  }

  // job_name - computed: false, optional: true, required: false
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  public resetJobName() {
    this._jobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // keep_dropped_targets - computed: false, optional: true, required: false
  private _keepDroppedTargets?: number; 
  public get keepDroppedTargets() {
    return this.getNumberAttribute('keep_dropped_targets');
  }
  public set keepDroppedTargets(value: number) {
    this._keepDroppedTargets = value;
  }
  public resetKeepDroppedTargets() {
    this._keepDroppedTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDroppedTargetsInput() {
    return this._keepDroppedTargets;
  }

  // kubernetes_sd_configs - computed: false, optional: true, required: false
  private _kubernetesSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKubernetesSdConfigsList(this, "kubernetes_sd_configs", false);
  public get kubernetesSdConfigs() {
    return this._kubernetesSdConfigs;
  }
  public putKubernetesSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKubernetesSdConfigs[] | cdktf.IResolvable) {
    this._kubernetesSdConfigs.internalValue = value;
  }
  public resetKubernetesSdConfigs() {
    this._kubernetesSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSdConfigsInput() {
    return this._kubernetesSdConfigs.internalValue;
  }

  // kuma_sd_configs - computed: false, optional: true, required: false
  private _kumaSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKumaSdConfigsList(this, "kuma_sd_configs", false);
  public get kumaSdConfigs() {
    return this._kumaSdConfigs;
  }
  public putKumaSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecKumaSdConfigs[] | cdktf.IResolvable) {
    this._kumaSdConfigs.internalValue = value;
  }
  public resetKumaSdConfigs() {
    this._kumaSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kumaSdConfigsInput() {
    return this._kumaSdConfigs.internalValue;
  }

  // label_limit - computed: false, optional: true, required: false
  private _labelLimit?: number; 
  public get labelLimit() {
    return this.getNumberAttribute('label_limit');
  }
  public set labelLimit(value: number) {
    this._labelLimit = value;
  }
  public resetLabelLimit() {
    this._labelLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelLimitInput() {
    return this._labelLimit;
  }

  // label_name_length_limit - computed: false, optional: true, required: false
  private _labelNameLengthLimit?: number; 
  public get labelNameLengthLimit() {
    return this.getNumberAttribute('label_name_length_limit');
  }
  public set labelNameLengthLimit(value: number) {
    this._labelNameLengthLimit = value;
  }
  public resetLabelNameLengthLimit() {
    this._labelNameLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameLengthLimitInput() {
    return this._labelNameLengthLimit;
  }

  // label_value_length_limit - computed: false, optional: true, required: false
  private _labelValueLengthLimit?: number; 
  public get labelValueLengthLimit() {
    return this.getNumberAttribute('label_value_length_limit');
  }
  public set labelValueLengthLimit(value: number) {
    this._labelValueLengthLimit = value;
  }
  public resetLabelValueLengthLimit() {
    this._labelValueLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelValueLengthLimitInput() {
    return this._labelValueLengthLimit;
  }

  // light_sail_sd_configs - computed: false, optional: true, required: false
  private _lightSailSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLightSailSdConfigsList(this, "light_sail_sd_configs", false);
  public get lightSailSdConfigs() {
    return this._lightSailSdConfigs;
  }
  public putLightSailSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLightSailSdConfigs[] | cdktf.IResolvable) {
    this._lightSailSdConfigs.internalValue = value;
  }
  public resetLightSailSdConfigs() {
    this._lightSailSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightSailSdConfigsInput() {
    return this._lightSailSdConfigs.internalValue;
  }

  // linode_sd_configs - computed: false, optional: true, required: false
  private _linodeSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLinodeSdConfigsList(this, "linode_sd_configs", false);
  public get linodeSdConfigs() {
    return this._linodeSdConfigs;
  }
  public putLinodeSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecLinodeSdConfigs[] | cdktf.IResolvable) {
    this._linodeSdConfigs.internalValue = value;
  }
  public resetLinodeSdConfigs() {
    this._linodeSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeSdConfigsInput() {
    return this._linodeSdConfigs.internalValue;
  }

  // metric_relabelings - computed: false, optional: true, required: false
  private _metricRelabelings = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecMetricRelabelingsList(this, "metric_relabelings", false);
  public get metricRelabelings() {
    return this._metricRelabelings;
  }
  public putMetricRelabelings(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecMetricRelabelings[] | cdktf.IResolvable) {
    this._metricRelabelings.internalValue = value;
  }
  public resetMetricRelabelings() {
    this._metricRelabelings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRelabelingsInput() {
    return this._metricRelabelings.internalValue;
  }

  // metrics_path - computed: false, optional: true, required: false
  private _metricsPath?: string; 
  public get metricsPath() {
    return this.getStringAttribute('metrics_path');
  }
  public set metricsPath(value: string) {
    this._metricsPath = value;
  }
  public resetMetricsPath() {
    this._metricsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPathInput() {
    return this._metricsPath;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // nomad_sd_configs - computed: false, optional: true, required: false
  private _nomadSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecNomadSdConfigsList(this, "nomad_sd_configs", false);
  public get nomadSdConfigs() {
    return this._nomadSdConfigs;
  }
  public putNomadSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecNomadSdConfigs[] | cdktf.IResolvable) {
    this._nomadSdConfigs.internalValue = value;
  }
  public resetNomadSdConfigs() {
    this._nomadSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nomadSdConfigsInput() {
    return this._nomadSdConfigs.internalValue;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // openstack_sd_configs - computed: false, optional: true, required: false
  private _openstackSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigsList(this, "openstack_sd_configs", false);
  public get openstackSdConfigs() {
    return this._openstackSdConfigs;
  }
  public putOpenstackSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOpenstackSdConfigs[] | cdktf.IResolvable) {
    this._openstackSdConfigs.internalValue = value;
  }
  public resetOpenstackSdConfigs() {
    this._openstackSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackSdConfigsInput() {
    return this._openstackSdConfigs.internalValue;
  }

  // ovhcloud_sd_configs - computed: false, optional: true, required: false
  private _ovhcloudSdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigsList(this, "ovhcloud_sd_configs", false);
  public get ovhcloudSdConfigs() {
    return this._ovhcloudSdConfigs;
  }
  public putOvhcloudSdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecOvhcloudSdConfigs[] | cdktf.IResolvable) {
    this._ovhcloudSdConfigs.internalValue = value;
  }
  public resetOvhcloudSdConfigs() {
    this._ovhcloudSdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovhcloudSdConfigsInput() {
    return this._ovhcloudSdConfigs.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get params() {
    return this.interpolationForAttribute('params');
  }
  public set params(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // proxy_connect_header - computed: false, optional: true, required: false
  private _proxyConnectHeader?: { [key: string]: string }; 
  public get proxyConnectHeader() {
    return this.getStringMapAttribute('proxy_connect_header');
  }
  public set proxyConnectHeader(value: { [key: string]: string }) {
    this._proxyConnectHeader = value;
  }
  public resetProxyConnectHeader() {
    this._proxyConnectHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConnectHeaderInput() {
    return this._proxyConnectHeader;
  }

  // proxy_from_environment - computed: false, optional: true, required: false
  private _proxyFromEnvironment?: boolean | cdktf.IResolvable; 
  public get proxyFromEnvironment() {
    return this.getBooleanAttribute('proxy_from_environment');
  }
  public set proxyFromEnvironment(value: boolean | cdktf.IResolvable) {
    this._proxyFromEnvironment = value;
  }
  public resetProxyFromEnvironment() {
    this._proxyFromEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyFromEnvironmentInput() {
    return this._proxyFromEnvironment;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // puppet_dbsd_configs - computed: false, optional: true, required: false
  private _puppetDbsdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigsList(this, "puppet_dbsd_configs", false);
  public get puppetDbsdConfigs() {
    return this._puppetDbsdConfigs;
  }
  public putPuppetDbsdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecPuppetDbsdConfigs[] | cdktf.IResolvable) {
    this._puppetDbsdConfigs.internalValue = value;
  }
  public resetPuppetDbsdConfigs() {
    this._puppetDbsdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puppetDbsdConfigsInput() {
    return this._puppetDbsdConfigs.internalValue;
  }

  // relabelings - computed: false, optional: true, required: false
  private _relabelings = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelingsList(this, "relabelings", false);
  public get relabelings() {
    return this._relabelings;
  }
  public putRelabelings(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecRelabelings[] | cdktf.IResolvable) {
    this._relabelings.internalValue = value;
  }
  public resetRelabelings() {
    this._relabelings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relabelingsInput() {
    return this._relabelings.internalValue;
  }

  // sample_limit - computed: false, optional: true, required: false
  private _sampleLimit?: number; 
  public get sampleLimit() {
    return this.getNumberAttribute('sample_limit');
  }
  public set sampleLimit(value: number) {
    this._sampleLimit = value;
  }
  public resetSampleLimit() {
    this._sampleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleLimitInput() {
    return this._sampleLimit;
  }

  // scaleway_sd_configs - computed: false, optional: true, required: false
  private _scalewaySdConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigsList(this, "scaleway_sd_configs", false);
  public get scalewaySdConfigs() {
    return this._scalewaySdConfigs;
  }
  public putScalewaySdConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecScalewaySdConfigs[] | cdktf.IResolvable) {
    this._scalewaySdConfigs.internalValue = value;
  }
  public resetScalewaySdConfigs() {
    this._scalewaySdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalewaySdConfigsInput() {
    return this._scalewaySdConfigs.internalValue;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // scrape_class - computed: false, optional: true, required: false
  private _scrapeClass?: string; 
  public get scrapeClass() {
    return this.getStringAttribute('scrape_class');
  }
  public set scrapeClass(value: string) {
    this._scrapeClass = value;
  }
  public resetScrapeClass() {
    this._scrapeClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeClassInput() {
    return this._scrapeClass;
  }

  // scrape_interval - computed: false, optional: true, required: false
  private _scrapeInterval?: string; 
  public get scrapeInterval() {
    return this.getStringAttribute('scrape_interval');
  }
  public set scrapeInterval(value: string) {
    this._scrapeInterval = value;
  }
  public resetScrapeInterval() {
    this._scrapeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalInput() {
    return this._scrapeInterval;
  }

  // scrape_protocols - computed: false, optional: true, required: false
  private _scrapeProtocols?: string[]; 
  public get scrapeProtocols() {
    return this.getListAttribute('scrape_protocols');
  }
  public set scrapeProtocols(value: string[]) {
    this._scrapeProtocols = value;
  }
  public resetScrapeProtocols() {
    this._scrapeProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeProtocolsInput() {
    return this._scrapeProtocols;
  }

  // scrape_timeout - computed: false, optional: true, required: false
  private _scrapeTimeout?: string; 
  public get scrapeTimeout() {
    return this.getStringAttribute('scrape_timeout');
  }
  public set scrapeTimeout(value: string) {
    this._scrapeTimeout = value;
  }
  public resetScrapeTimeout() {
    this._scrapeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeTimeoutInput() {
    return this._scrapeTimeout;
  }

  // static_configs - computed: false, optional: true, required: false
  private _staticConfigs = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigsList(this, "static_configs", false);
  public get staticConfigs() {
    return this._staticConfigs;
  }
  public putStaticConfigs(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecStaticConfigs[] | cdktf.IResolvable) {
    this._staticConfigs.internalValue = value;
  }
  public resetStaticConfigs() {
    this._staticConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticConfigsInput() {
    return this._staticConfigs.internalValue;
  }

  // target_limit - computed: false, optional: true, required: false
  private _targetLimit?: number; 
  public get targetLimit() {
    return this.getNumberAttribute('target_limit');
  }
  public set targetLimit(value: number) {
    this._targetLimit = value;
  }
  public resetTargetLimit() {
    this._targetLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLimitInput() {
    return this._targetLimit;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComScrapeConfigV1Alpha1ManifestSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // track_timestamps_staleness - computed: false, optional: true, required: false
  private _trackTimestampsStaleness?: boolean | cdktf.IResolvable; 
  public get trackTimestampsStaleness() {
    return this.getBooleanAttribute('track_timestamps_staleness');
  }
  public set trackTimestampsStaleness(value: boolean | cdktf.IResolvable) {
    this._trackTimestampsStaleness = value;
  }
  public resetTrackTimestampsStaleness() {
    this._trackTimestampsStaleness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackTimestampsStalenessInput() {
    return this._trackTimestampsStaleness;
  }
}
