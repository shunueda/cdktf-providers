import * as cdktf from 'cdktf';
import { DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientId,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigAuthorization,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuth,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecret,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsApiSecret,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsApiSecretToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsApiSecretToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsApiSecretOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSlackConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSlackConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSlackConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSlackConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSnsConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSnsConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSnsConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSnsConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversTelegramConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversTelegramConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversTelegramConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversTelegramConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversVictoropsConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversVictoropsConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversVictoropsConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversVictoropsConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebexConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebexConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebexConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebexConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebhookConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebhookConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebhookConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebhookConfigsList } from './structs400'
import { DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversDiscordConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversDiscordConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversDiscordConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversDiscordConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversEmailConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversEmailConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversEmailConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversEmailConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversMsteamsConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversMsteamsConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversMsteamsConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversMsteamsConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOpsgenieConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOpsgenieConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOpsgenieConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOpsgenieConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPagerdutyConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPagerdutyConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPagerdutyConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPagerdutyConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPushoverConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPushoverConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPushoverConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPushoverConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecInhibitRules,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecInhibitRulesToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecInhibitRulesToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecInhibitRulesList } from './structs0'
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#ca DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#cert DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#key_secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#max_version DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#min_version DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#server_name DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret",
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig | cdktf.IResolvable | undefined) {
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
  private _ca = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa) {
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
  private _cert = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert) {
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
  private _keySecret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2 {
  /**
  * 'clientId' specifies a key of a Secret or ConfigMap containing the OAuth2 client's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#client_id DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#client_id}
  */
  readonly clientId: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientId;
  /**
  * 'clientSecret' specifies a key of a Secret containing the OAuth2 client's secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#client_secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#client_secret}
  */
  readonly clientSecret: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret;
  /**
  * 'endpointParams' configures the HTTP parameters to append to the token URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#endpoint_params DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#endpoint_params}
  */
  readonly endpointParams?: { [key: string]: string };
  /**
  * 'noProxy' is a comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#no_proxy DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * ProxyConnectHeader optionally specifies headers to send to proxies during CONNECT requests. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#proxy_connect_header DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#proxy_connect_header}
  */
  readonly proxyConnectHeader?: { [key: string]: string };
  /**
  * Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY). It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#proxy_from_environment DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#proxy_from_environment}
  */
  readonly proxyFromEnvironment?: boolean | cdktf.IResolvable;
  /**
  * 'proxyURL' defines the HTTP proxy server to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#proxy_url DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * 'scopes' defines the OAuth2 scopes used for the token request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#scopes DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * TLS configuration to use when connecting to the OAuth2 server. It requires Prometheus >= v2.43.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#tls_config DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig;
  /**
  * 'tokenURL' configures the URL to fetch the token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#token_url DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#token_url}
  */
  readonly tokenUrl: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdToTerraform(struct!.clientId),
    client_secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretToTerraform(struct!.clientSecret),
    endpoint_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointParams),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    proxy_connect_header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConnectHeader),
    proxy_from_environment: cdktf.booleanToTerraform(struct!.proxyFromEnvironment),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    tls_config: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigToTerraform(struct!.tlsConfig),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdToHclTerraform(struct!.clientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientId",
    },
    client_secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret",
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
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig",
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2 | cdktf.IResolvable | undefined) {
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
  private _clientId = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }
  public putClientId(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientId) {
    this._clientId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId.internalValue;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret) {
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
  private _tlsConfig = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#config_map DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap) {
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
  private _secret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#config_map DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap) {
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
  private _secret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#ca DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#cert DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#key_secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#max_version DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#min_version DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#server_name DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret",
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig | cdktf.IResolvable | undefined) {
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
  private _ca = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa) {
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
  private _cert = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert) {
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
  private _keySecret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfig {
  /**
  * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#authorization DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#authorization}
  */
  readonly authorization?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigAuthorization;
  /**
  * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#basic_auth DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuth;
  /**
  * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#bearer_token_secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#bearer_token_secret}
  */
  readonly bearerTokenSecret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecret;
  /**
  * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#follow_redirects DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * 'noProxy' is a comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#no_proxy DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * OAuth2 client credentials used to fetch a token for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#oauth2 DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#oauth2}
  */
  readonly oauth2?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2;
  /**
  * ProxyConnectHeader optionally specifies headers to send to proxies during CONNECT requests. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#proxy_connect_header DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#proxy_connect_header}
  */
  readonly proxyConnectHeader?: { [key: string]: string };
  /**
  * Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY). It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#proxy_from_environment DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#proxy_from_environment}
  */
  readonly proxyFromEnvironment?: boolean | cdktf.IResolvable;
  /**
  * 'proxyURL' defines the HTTP proxy server to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#proxy_url DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * TLS configuration for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#tls_config DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationToTerraform(struct!.authorization),
    basic_auth: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthToTerraform(struct!.basicAuth),
    bearer_token_secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretToTerraform(struct!.bearerTokenSecret),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    oauth2: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ToTerraform(struct!.oauth2),
    proxy_connect_header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConnectHeader),
    proxy_from_environment: cdktf.booleanToTerraform(struct!.proxyFromEnvironment),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    tls_config: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigAuthorization",
    },
    basic_auth: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuth",
    },
    bearer_token_secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretToHclTerraform(struct!.bearerTokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecret",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
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
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2",
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
    tls_config: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfig | cdktf.IResolvable | undefined {
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
    if (this._bearerTokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenSecret = this._bearerTokenSecret?.internalValue;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
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
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerTokenSecret.internalValue = undefined;
      this._followRedirects = undefined;
      this._noProxy = undefined;
      this._oauth2.internalValue = undefined;
      this._proxyConnectHeader = undefined;
      this._proxyFromEnvironment = undefined;
      this._proxyUrl = undefined;
      this._tlsConfig.internalValue = undefined;
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
      this._bearerTokenSecret.internalValue = value.bearerTokenSecret;
      this._followRedirects = value.followRedirects;
      this._noProxy = value.noProxy;
      this._oauth2.internalValue = value.oauth2;
      this._proxyConnectHeader = value.proxyConnectHeader;
      this._proxyFromEnvironment = value.proxyFromEnvironment;
      this._proxyUrl = value.proxyUrl;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigAuthorization) {
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
  private _basicAuth = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token_secret - computed: false, optional: true, required: false
  private _bearerTokenSecret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretOutputReference(this, "bearer_token_secret");
  public get bearerTokenSecret() {
    return this._bearerTokenSecret;
  }
  public putBearerTokenSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecret) {
    this._bearerTokenSecret.internalValue = value;
  }
  public resetBearerTokenSecret() {
    this._bearerTokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSecretInput() {
    return this._bearerTokenSecret.internalValue;
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
  private _oauth2 = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
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

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#agent_id DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#agent_id}
  */
  readonly agentId?: string;
  /**
  * The secret's key that contains the WeChat API key. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#api_secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#api_secret}
  */
  readonly apiSecret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsApiSecret;
  /**
  * The WeChat API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#api_url DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#api_url}
  */
  readonly apiUrl?: string;
  /**
  * The corp id for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#corp_id DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#corp_id}
  */
  readonly corpId?: string;
  /**
  * HTTP client configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#http_config DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#http_config}
  */
  readonly httpConfig?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfig;
  /**
  * API request data as defined by the WeChat API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#message DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#message_type DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#message_type}
  */
  readonly messageType?: string;
  /**
  * Whether or not to notify about resolved alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#send_resolved DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#send_resolved}
  */
  readonly sendResolved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#to_party DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#to_party}
  */
  readonly toParty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#to_tag DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#to_tag}
  */
  readonly toTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#to_user DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#to_user}
  */
  readonly toUser?: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    api_secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsApiSecretToTerraform(struct!.apiSecret),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    corp_id: cdktf.stringToTerraform(struct!.corpId),
    http_config: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigToTerraform(struct!.httpConfig),
    message: cdktf.stringToTerraform(struct!.message),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    send_resolved: cdktf.booleanToTerraform(struct!.sendResolved),
    to_party: cdktf.stringToTerraform(struct!.toParty),
    to_tag: cdktf.stringToTerraform(struct!.toTag),
    to_user: cdktf.stringToTerraform(struct!.toUser),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_id: {
      value: cdktf.stringToHclTerraform(struct!.agentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsApiSecretToHclTerraform(struct!.apiSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsApiSecret",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    corp_id: {
      value: cdktf.stringToHclTerraform(struct!.corpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_config: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigToHclTerraform(struct!.httpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfig",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_resolved: {
      value: cdktf.booleanToHclTerraform(struct!.sendResolved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to_party: {
      value: cdktf.stringToHclTerraform(struct!.toParty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_tag: {
      value: cdktf.stringToHclTerraform(struct!.toTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_user: {
      value: cdktf.stringToHclTerraform(struct!.toUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentId = this._agentId;
    }
    if (this._apiSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecret = this._apiSecret?.internalValue;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._corpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.corpId = this._corpId;
    }
    if (this._httpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConfig = this._httpConfig?.internalValue;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._sendResolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendResolved = this._sendResolved;
    }
    if (this._toParty !== undefined) {
      hasAnyValues = true;
      internalValueResult.toParty = this._toParty;
    }
    if (this._toTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.toTag = this._toTag;
    }
    if (this._toUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.toUser = this._toUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentId = undefined;
      this._apiSecret.internalValue = undefined;
      this._apiUrl = undefined;
      this._corpId = undefined;
      this._httpConfig.internalValue = undefined;
      this._message = undefined;
      this._messageType = undefined;
      this._sendResolved = undefined;
      this._toParty = undefined;
      this._toTag = undefined;
      this._toUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentId = value.agentId;
      this._apiSecret.internalValue = value.apiSecret;
      this._apiUrl = value.apiUrl;
      this._corpId = value.corpId;
      this._httpConfig.internalValue = value.httpConfig;
      this._message = value.message;
      this._messageType = value.messageType;
      this._sendResolved = value.sendResolved;
      this._toParty = value.toParty;
      this._toTag = value.toTag;
      this._toUser = value.toUser;
    }
  }

  // agent_id - computed: false, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // api_secret - computed: false, optional: true, required: false
  private _apiSecret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsApiSecretOutputReference(this, "api_secret");
  public get apiSecret() {
    return this._apiSecret;
  }
  public putApiSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsApiSecret) {
    this._apiSecret.internalValue = value;
  }
  public resetApiSecret() {
    this._apiSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret.internalValue;
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

  // corp_id - computed: false, optional: true, required: false
  private _corpId?: string; 
  public get corpId() {
    return this.getStringAttribute('corp_id');
  }
  public set corpId(value: string) {
    this._corpId = value;
  }
  public resetCorpId() {
    this._corpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corpIdInput() {
    return this._corpId;
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // send_resolved - computed: false, optional: true, required: false
  private _sendResolved?: boolean | cdktf.IResolvable; 
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }
  public set sendResolved(value: boolean | cdktf.IResolvable) {
    this._sendResolved = value;
  }
  public resetSendResolved() {
    this._sendResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendResolvedInput() {
    return this._sendResolved;
  }

  // to_party - computed: false, optional: true, required: false
  private _toParty?: string; 
  public get toParty() {
    return this.getStringAttribute('to_party');
  }
  public set toParty(value: string) {
    this._toParty = value;
  }
  public resetToParty() {
    this._toParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPartyInput() {
    return this._toParty;
  }

  // to_tag - computed: false, optional: true, required: false
  private _toTag?: string; 
  public get toTag() {
    return this.getStringAttribute('to_tag');
  }
  public set toTag(value: string) {
    this._toTag = value;
  }
  public resetToTag() {
    this._toTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toTagInput() {
    return this._toTag;
  }

  // to_user - computed: false, optional: true, required: false
  private _toUser?: string; 
  public get toUser() {
    return this.getStringAttribute('to_user');
  }
  public set toUser(value: string) {
    this._toUser = value;
  }
  public resetToUser() {
    this._toUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toUserInput() {
    return this._toUser;
  }
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsOutputReference {
    return new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceivers {
  /**
  * List of Slack configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#discord_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#discord_configs}
  */
  readonly discordConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversDiscordConfigs[] | cdktf.IResolvable;
  /**
  * List of Email configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#email_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#email_configs}
  */
  readonly emailConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversEmailConfigs[] | cdktf.IResolvable;
  /**
  * List of MSTeams configurations. It requires Alertmanager >= 0.26.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#msteams_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#msteams_configs}
  */
  readonly msteamsConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversMsteamsConfigs[] | cdktf.IResolvable;
  /**
  * Name of the receiver. Must be unique across all items from the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * List of OpsGenie configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#opsgenie_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#opsgenie_configs}
  */
  readonly opsgenieConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOpsgenieConfigs[] | cdktf.IResolvable;
  /**
  * List of PagerDuty configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#pagerduty_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#pagerduty_configs}
  */
  readonly pagerdutyConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPagerdutyConfigs[] | cdktf.IResolvable;
  /**
  * List of Pushover configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#pushover_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#pushover_configs}
  */
  readonly pushoverConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPushoverConfigs[] | cdktf.IResolvable;
  /**
  * List of Slack configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#slack_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#slack_configs}
  */
  readonly slackConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSlackConfigs[] | cdktf.IResolvable;
  /**
  * List of SNS configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#sns_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#sns_configs}
  */
  readonly snsConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSnsConfigs[] | cdktf.IResolvable;
  /**
  * List of Telegram configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#telegram_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#telegram_configs}
  */
  readonly telegramConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversTelegramConfigs[] | cdktf.IResolvable;
  /**
  * List of VictorOps configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#victorops_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#victorops_configs}
  */
  readonly victoropsConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversVictoropsConfigs[] | cdktf.IResolvable;
  /**
  * List of Webex configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#webex_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#webex_configs}
  */
  readonly webexConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebexConfigs[] | cdktf.IResolvable;
  /**
  * List of webhook configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#webhook_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#webhook_configs}
  */
  readonly webhookConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebhookConfigs[] | cdktf.IResolvable;
  /**
  * List of WeChat configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#wechat_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#wechat_configs}
  */
  readonly wechatConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigs[] | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discord_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversDiscordConfigsToTerraform, false)(struct!.discordConfigs),
    email_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversEmailConfigsToTerraform, false)(struct!.emailConfigs),
    msteams_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversMsteamsConfigsToTerraform, false)(struct!.msteamsConfigs),
    name: cdktf.stringToTerraform(struct!.name),
    opsgenie_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOpsgenieConfigsToTerraform, false)(struct!.opsgenieConfigs),
    pagerduty_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPagerdutyConfigsToTerraform, false)(struct!.pagerdutyConfigs),
    pushover_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPushoverConfigsToTerraform, false)(struct!.pushoverConfigs),
    slack_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSlackConfigsToTerraform, false)(struct!.slackConfigs),
    sns_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSnsConfigsToTerraform, false)(struct!.snsConfigs),
    telegram_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversTelegramConfigsToTerraform, false)(struct!.telegramConfigs),
    victorops_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversVictoropsConfigsToTerraform, false)(struct!.victoropsConfigs),
    webex_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebexConfigsToTerraform, false)(struct!.webexConfigs),
    webhook_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebhookConfigsToTerraform, false)(struct!.webhookConfigs),
    wechat_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsToTerraform, false)(struct!.wechatConfigs),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discord_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversDiscordConfigsToHclTerraform, false)(struct!.discordConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversDiscordConfigsList",
    },
    email_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversEmailConfigsToHclTerraform, false)(struct!.emailConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversEmailConfigsList",
    },
    msteams_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversMsteamsConfigsToHclTerraform, false)(struct!.msteamsConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversMsteamsConfigsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opsgenie_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOpsgenieConfigsToHclTerraform, false)(struct!.opsgenieConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOpsgenieConfigsList",
    },
    pagerduty_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPagerdutyConfigsToHclTerraform, false)(struct!.pagerdutyConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPagerdutyConfigsList",
    },
    pushover_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPushoverConfigsToHclTerraform, false)(struct!.pushoverConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPushoverConfigsList",
    },
    slack_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSlackConfigsToHclTerraform, false)(struct!.slackConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSlackConfigsList",
    },
    sns_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSnsConfigsToHclTerraform, false)(struct!.snsConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSnsConfigsList",
    },
    telegram_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversTelegramConfigsToHclTerraform, false)(struct!.telegramConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversTelegramConfigsList",
    },
    victorops_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversVictoropsConfigsToHclTerraform, false)(struct!.victoropsConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversVictoropsConfigsList",
    },
    webex_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebexConfigsToHclTerraform, false)(struct!.webexConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebexConfigsList",
    },
    webhook_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebhookConfigsToHclTerraform, false)(struct!.webhookConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebhookConfigsList",
    },
    wechat_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsToHclTerraform, false)(struct!.wechatConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceivers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discordConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discordConfigs = this._discordConfigs?.internalValue;
    }
    if (this._emailConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailConfigs = this._emailConfigs?.internalValue;
    }
    if (this._msteamsConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msteamsConfigs = this._msteamsConfigs?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._opsgenieConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsgenieConfigs = this._opsgenieConfigs?.internalValue;
    }
    if (this._pagerdutyConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerdutyConfigs = this._pagerdutyConfigs?.internalValue;
    }
    if (this._pushoverConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushoverConfigs = this._pushoverConfigs?.internalValue;
    }
    if (this._slackConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackConfigs = this._slackConfigs?.internalValue;
    }
    if (this._snsConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsConfigs = this._snsConfigs?.internalValue;
    }
    if (this._telegramConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telegramConfigs = this._telegramConfigs?.internalValue;
    }
    if (this._victoropsConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.victoropsConfigs = this._victoropsConfigs?.internalValue;
    }
    if (this._webexConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webexConfigs = this._webexConfigs?.internalValue;
    }
    if (this._webhookConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookConfigs = this._webhookConfigs?.internalValue;
    }
    if (this._wechatConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wechatConfigs = this._wechatConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceivers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discordConfigs.internalValue = undefined;
      this._emailConfigs.internalValue = undefined;
      this._msteamsConfigs.internalValue = undefined;
      this._name = undefined;
      this._opsgenieConfigs.internalValue = undefined;
      this._pagerdutyConfigs.internalValue = undefined;
      this._pushoverConfigs.internalValue = undefined;
      this._slackConfigs.internalValue = undefined;
      this._snsConfigs.internalValue = undefined;
      this._telegramConfigs.internalValue = undefined;
      this._victoropsConfigs.internalValue = undefined;
      this._webexConfigs.internalValue = undefined;
      this._webhookConfigs.internalValue = undefined;
      this._wechatConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discordConfigs.internalValue = value.discordConfigs;
      this._emailConfigs.internalValue = value.emailConfigs;
      this._msteamsConfigs.internalValue = value.msteamsConfigs;
      this._name = value.name;
      this._opsgenieConfigs.internalValue = value.opsgenieConfigs;
      this._pagerdutyConfigs.internalValue = value.pagerdutyConfigs;
      this._pushoverConfigs.internalValue = value.pushoverConfigs;
      this._slackConfigs.internalValue = value.slackConfigs;
      this._snsConfigs.internalValue = value.snsConfigs;
      this._telegramConfigs.internalValue = value.telegramConfigs;
      this._victoropsConfigs.internalValue = value.victoropsConfigs;
      this._webexConfigs.internalValue = value.webexConfigs;
      this._webhookConfigs.internalValue = value.webhookConfigs;
      this._wechatConfigs.internalValue = value.wechatConfigs;
    }
  }

  // discord_configs - computed: false, optional: true, required: false
  private _discordConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversDiscordConfigsList(this, "discord_configs", false);
  public get discordConfigs() {
    return this._discordConfigs;
  }
  public putDiscordConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversDiscordConfigs[] | cdktf.IResolvable) {
    this._discordConfigs.internalValue = value;
  }
  public resetDiscordConfigs() {
    this._discordConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discordConfigsInput() {
    return this._discordConfigs.internalValue;
  }

  // email_configs - computed: false, optional: true, required: false
  private _emailConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversEmailConfigsList(this, "email_configs", false);
  public get emailConfigs() {
    return this._emailConfigs;
  }
  public putEmailConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversEmailConfigs[] | cdktf.IResolvable) {
    this._emailConfigs.internalValue = value;
  }
  public resetEmailConfigs() {
    this._emailConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigsInput() {
    return this._emailConfigs.internalValue;
  }

  // msteams_configs - computed: false, optional: true, required: false
  private _msteamsConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversMsteamsConfigsList(this, "msteams_configs", false);
  public get msteamsConfigs() {
    return this._msteamsConfigs;
  }
  public putMsteamsConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversMsteamsConfigs[] | cdktf.IResolvable) {
    this._msteamsConfigs.internalValue = value;
  }
  public resetMsteamsConfigs() {
    this._msteamsConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msteamsConfigsInput() {
    return this._msteamsConfigs.internalValue;
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

  // opsgenie_configs - computed: false, optional: true, required: false
  private _opsgenieConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOpsgenieConfigsList(this, "opsgenie_configs", false);
  public get opsgenieConfigs() {
    return this._opsgenieConfigs;
  }
  public putOpsgenieConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOpsgenieConfigs[] | cdktf.IResolvable) {
    this._opsgenieConfigs.internalValue = value;
  }
  public resetOpsgenieConfigs() {
    this._opsgenieConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieConfigsInput() {
    return this._opsgenieConfigs.internalValue;
  }

  // pagerduty_configs - computed: false, optional: true, required: false
  private _pagerdutyConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPagerdutyConfigsList(this, "pagerduty_configs", false);
  public get pagerdutyConfigs() {
    return this._pagerdutyConfigs;
  }
  public putPagerdutyConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPagerdutyConfigs[] | cdktf.IResolvable) {
    this._pagerdutyConfigs.internalValue = value;
  }
  public resetPagerdutyConfigs() {
    this._pagerdutyConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyConfigsInput() {
    return this._pagerdutyConfigs.internalValue;
  }

  // pushover_configs - computed: false, optional: true, required: false
  private _pushoverConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPushoverConfigsList(this, "pushover_configs", false);
  public get pushoverConfigs() {
    return this._pushoverConfigs;
  }
  public putPushoverConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversPushoverConfigs[] | cdktf.IResolvable) {
    this._pushoverConfigs.internalValue = value;
  }
  public resetPushoverConfigs() {
    this._pushoverConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushoverConfigsInput() {
    return this._pushoverConfigs.internalValue;
  }

  // slack_configs - computed: false, optional: true, required: false
  private _slackConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSlackConfigsList(this, "slack_configs", false);
  public get slackConfigs() {
    return this._slackConfigs;
  }
  public putSlackConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSlackConfigs[] | cdktf.IResolvable) {
    this._slackConfigs.internalValue = value;
  }
  public resetSlackConfigs() {
    this._slackConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackConfigsInput() {
    return this._slackConfigs.internalValue;
  }

  // sns_configs - computed: false, optional: true, required: false
  private _snsConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSnsConfigsList(this, "sns_configs", false);
  public get snsConfigs() {
    return this._snsConfigs;
  }
  public putSnsConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversSnsConfigs[] | cdktf.IResolvable) {
    this._snsConfigs.internalValue = value;
  }
  public resetSnsConfigs() {
    this._snsConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsConfigsInput() {
    return this._snsConfigs.internalValue;
  }

  // telegram_configs - computed: false, optional: true, required: false
  private _telegramConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversTelegramConfigsList(this, "telegram_configs", false);
  public get telegramConfigs() {
    return this._telegramConfigs;
  }
  public putTelegramConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversTelegramConfigs[] | cdktf.IResolvable) {
    this._telegramConfigs.internalValue = value;
  }
  public resetTelegramConfigs() {
    this._telegramConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telegramConfigsInput() {
    return this._telegramConfigs.internalValue;
  }

  // victorops_configs - computed: false, optional: true, required: false
  private _victoropsConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversVictoropsConfigsList(this, "victorops_configs", false);
  public get victoropsConfigs() {
    return this._victoropsConfigs;
  }
  public putVictoropsConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversVictoropsConfigs[] | cdktf.IResolvable) {
    this._victoropsConfigs.internalValue = value;
  }
  public resetVictoropsConfigs() {
    this._victoropsConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victoropsConfigsInput() {
    return this._victoropsConfigs.internalValue;
  }

  // webex_configs - computed: false, optional: true, required: false
  private _webexConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebexConfigsList(this, "webex_configs", false);
  public get webexConfigs() {
    return this._webexConfigs;
  }
  public putWebexConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebexConfigs[] | cdktf.IResolvable) {
    this._webexConfigs.internalValue = value;
  }
  public resetWebexConfigs() {
    this._webexConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webexConfigsInput() {
    return this._webexConfigs.internalValue;
  }

  // webhook_configs - computed: false, optional: true, required: false
  private _webhookConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebhookConfigsList(this, "webhook_configs", false);
  public get webhookConfigs() {
    return this._webhookConfigs;
  }
  public putWebhookConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWebhookConfigs[] | cdktf.IResolvable) {
    this._webhookConfigs.internalValue = value;
  }
  public resetWebhookConfigs() {
    this._webhookConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookConfigsInput() {
    return this._webhookConfigs.internalValue;
  }

  // wechat_configs - computed: false, optional: true, required: false
  private _wechatConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigsList(this, "wechat_configs", false);
  public get wechatConfigs() {
    return this._wechatConfigs;
  }
  public putWechatConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversWechatConfigs[] | cdktf.IResolvable) {
    this._wechatConfigs.internalValue = value;
  }
  public resetWechatConfigs() {
    this._wechatConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wechatConfigsInput() {
    return this._wechatConfigs.internalValue;
  }
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceivers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOutputReference {
    return new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchers {
  /**
  * Match operator, one of '=' (equal to), '!=' (not equal to), '=~' (regex match) or '!~' (not regex match). Negative operators ('!=' and '!~') require Alertmanager >= v0.22.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#match_type DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#match_type}
  */
  readonly matchType?: string;
  /**
  * Label to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Label value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#value DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchersToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchersToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchersList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchersOutputReference {
    return new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRoute {
  /**
  * ActiveTimeIntervals is a list of TimeInterval names when this route should be active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#active_time_intervals DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#active_time_intervals}
  */
  readonly activeTimeIntervals?: string[];
  /**
  * Boolean indicating whether an alert should continue matching subsequent sibling nodes. It will always be overridden to true for the first-level route by the Prometheus operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#continue DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#continue}
  */
  readonly continue?: boolean | cdktf.IResolvable;
  /**
  * List of labels to group by. Labels must not be repeated (unique list). Special label '...' (aggregate by all possible labels), if provided, must be the only element in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#group_by DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#group_by}
  */
  readonly groupBy?: string[];
  /**
  * How long to wait before sending an updated notification. Must match the regular expression'^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$' Example: '5m'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#group_interval DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * How long to wait before sending the initial notification. Must match the regular expression'^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$' Example: '30s'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#group_wait DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#group_wait}
  */
  readonly groupWait?: string;
  /**
  * List of matchers that the alert's labels should match. For the first level route, the operator removes any existing equality and regexp matcher on the 'namespace' label and adds a 'namespace: <object namespace>' matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#matchers DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#matchers}
  */
  readonly matchers?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchers[] | cdktf.IResolvable;
  /**
  * Note: this comment applies to the field definition above but appears below otherwise it gets included in the generated manifest. CRD schema doesn't support self-referential types for now (see https://github.com/kubernetes/kubernetes/issues/62872). We have to use an alternative type to circumvent the limitation. The downside is that the Kube API can't validate the data beyond the fact that it is a valid JSON representation. MuteTimeIntervals is a list of TimeInterval names that will mute this route when matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#mute_time_intervals DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#mute_time_intervals}
  */
  readonly muteTimeIntervals?: string[];
  /**
  * Name of the receiver for this route. If not empty, it should be listed in the 'receivers' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#receiver DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#receiver}
  */
  readonly receiver?: string;
  /**
  * How long to wait before repeating the last notification. Must match the regular expression'^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$' Example: '4h'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#repeat_interval DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * Child routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#routes DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#routes}
  */
  readonly routes?: string[];
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_time_intervals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.activeTimeIntervals),
    continue: cdktf.booleanToTerraform(struct!.continue),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    group_interval: cdktf.stringToTerraform(struct!.groupInterval),
    group_wait: cdktf.stringToTerraform(struct!.groupWait),
    matchers: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchersToTerraform, false)(struct!.matchers),
    mute_time_intervals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.muteTimeIntervals),
    receiver: cdktf.stringToTerraform(struct!.receiver),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    routes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routes),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_time_intervals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.activeTimeIntervals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    continue: {
      value: cdktf.booleanToHclTerraform(struct!.continue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_interval: {
      value: cdktf.stringToHclTerraform(struct!.groupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_wait: {
      value: cdktf.stringToHclTerraform(struct!.groupWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matchers: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchersToHclTerraform, false)(struct!.matchers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchersList",
    },
    mute_time_intervals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.muteTimeIntervals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    receiver: {
      value: cdktf.stringToHclTerraform(struct!.receiver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTimeIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTimeIntervals = this._activeTimeIntervals;
    }
    if (this._continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._groupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInterval = this._groupInterval;
    }
    if (this._groupWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWait = this._groupWait;
    }
    if (this._matchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchers = this._matchers?.internalValue;
    }
    if (this._muteTimeIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.muteTimeIntervals = this._muteTimeIntervals;
    }
    if (this._receiver !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiver = this._receiver;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._routes !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeTimeIntervals = undefined;
      this._continue = undefined;
      this._groupBy = undefined;
      this._groupInterval = undefined;
      this._groupWait = undefined;
      this._matchers.internalValue = undefined;
      this._muteTimeIntervals = undefined;
      this._receiver = undefined;
      this._repeatInterval = undefined;
      this._routes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeTimeIntervals = value.activeTimeIntervals;
      this._continue = value.continue;
      this._groupBy = value.groupBy;
      this._groupInterval = value.groupInterval;
      this._groupWait = value.groupWait;
      this._matchers.internalValue = value.matchers;
      this._muteTimeIntervals = value.muteTimeIntervals;
      this._receiver = value.receiver;
      this._repeatInterval = value.repeatInterval;
      this._routes = value.routes;
    }
  }

  // active_time_intervals - computed: false, optional: true, required: false
  private _activeTimeIntervals?: string[]; 
  public get activeTimeIntervals() {
    return this.getListAttribute('active_time_intervals');
  }
  public set activeTimeIntervals(value: string[]) {
    this._activeTimeIntervals = value;
  }
  public resetActiveTimeIntervals() {
    this._activeTimeIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeIntervalsInput() {
    return this._activeTimeIntervals;
  }

  // continue - computed: false, optional: true, required: false
  private _continue?: boolean | cdktf.IResolvable; 
  public get continue() {
    return this.getBooleanAttribute('continue');
  }
  public set continue(value: boolean | cdktf.IResolvable) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // group_interval - computed: false, optional: true, required: false
  private _groupInterval?: string; 
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }
  public set groupInterval(value: string) {
    this._groupInterval = value;
  }
  public resetGroupInterval() {
    this._groupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIntervalInput() {
    return this._groupInterval;
  }

  // group_wait - computed: false, optional: true, required: false
  private _groupWait?: string; 
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }
  public set groupWait(value: string) {
    this._groupWait = value;
  }
  public resetGroupWait() {
    this._groupWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWaitInput() {
    return this._groupWait;
  }

  // matchers - computed: false, optional: true, required: false
  private _matchers = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchersList(this, "matchers", false);
  public get matchers() {
    return this._matchers;
  }
  public putMatchers(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteMatchers[] | cdktf.IResolvable) {
    this._matchers.internalValue = value;
  }
  public resetMatchers() {
    this._matchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchersInput() {
    return this._matchers.internalValue;
  }

  // mute_time_intervals - computed: false, optional: true, required: false
  private _muteTimeIntervals?: string[]; 
  public get muteTimeIntervals() {
    return this.getListAttribute('mute_time_intervals');
  }
  public set muteTimeIntervals(value: string[]) {
    this._muteTimeIntervals = value;
  }
  public resetMuteTimeIntervals() {
    this._muteTimeIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteTimeIntervalsInput() {
    return this._muteTimeIntervals;
  }

  // receiver - computed: false, optional: true, required: false
  private _receiver?: string; 
  public get receiver() {
    return this.getStringAttribute('receiver');
  }
  public set receiver(value: string) {
    this._receiver = value;
  }
  public resetReceiver() {
    this._receiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverInput() {
    return this._receiver;
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }

  // routes - computed: false, optional: true, required: false
  private _routes?: string[]; 
  public get routes() {
    return this.getListAttribute('routes');
  }
  public set routes(value: string[]) {
    this._routes = value;
  }
  public resetRoutes() {
    this._routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonth {
  /**
  * End of the inclusive range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#end DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#end}
  */
  readonly end?: number;
  /**
  * Start of the inclusive range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#start DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#start}
  */
  readonly start?: number;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonthToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonthToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonthList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonth[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonthOutputReference {
    return new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimes {
  /**
  * EndTime is the end time in 24hr format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#end_time DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#end_time}
  */
  readonly endTime?: string;
  /**
  * StartTime is the start time in 24hr format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#start_time DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#start_time}
  */
  readonly startTime?: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimesToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimesToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimesOutputReference {
    return new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervals {
  /**
  * DaysOfMonth is a list of DayOfMonthRange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#days_of_month DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#days_of_month}
  */
  readonly daysOfMonth?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonth[] | cdktf.IResolvable;
  /**
  * Months is a list of MonthRange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#months DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#months}
  */
  readonly months?: string[];
  /**
  * Times is a list of TimeRange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#times DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#times}
  */
  readonly times?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimes[] | cdktf.IResolvable;
  /**
  * Weekdays is a list of WeekdayRange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#weekdays DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * Years is a list of YearRange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#years DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#years}
  */
  readonly years?: string[];
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_month: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonthToTerraform, false)(struct!.daysOfMonth),
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
    times: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimesToTerraform, false)(struct!.times),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    years: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.years),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_month: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonthToHclTerraform, false)(struct!.daysOfMonth),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonthList",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    times: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimesToHclTerraform, false)(struct!.times),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimesList",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    years: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.years),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfMonth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfMonth = this._daysOfMonth?.internalValue;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._times?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times?.internalValue;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._years !== undefined) {
      hasAnyValues = true;
      internalValueResult.years = this._years;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfMonth.internalValue = undefined;
      this._months = undefined;
      this._times.internalValue = undefined;
      this._weekdays = undefined;
      this._years = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfMonth.internalValue = value.daysOfMonth;
      this._months = value.months;
      this._times.internalValue = value.times;
      this._weekdays = value.weekdays;
      this._years = value.years;
    }
  }

  // days_of_month - computed: false, optional: true, required: false
  private _daysOfMonth = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonthList(this, "days_of_month", false);
  public get daysOfMonth() {
    return this._daysOfMonth;
  }
  public putDaysOfMonth(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsDaysOfMonth[] | cdktf.IResolvable) {
    this._daysOfMonth.internalValue = value;
  }
  public resetDaysOfMonth() {
    this._daysOfMonth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthInput() {
    return this._daysOfMonth.internalValue;
  }

  // months - computed: false, optional: true, required: false
  private _months?: string[]; 
  public get months() {
    return this.getListAttribute('months');
  }
  public set months(value: string[]) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // times - computed: false, optional: true, required: false
  private _times = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimesList(this, "times", false);
  public get times() {
    return this._times;
  }
  public putTimes(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsTimes[] | cdktf.IResolvable) {
    this._times.internalValue = value;
  }
  public resetTimes() {
    this._times.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times.internalValue;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // years - computed: false, optional: true, required: false
  private _years?: string[]; 
  public get years() {
    return this.getListAttribute('years');
  }
  public set years(value: string[]) {
    this._years = value;
  }
  public resetYears() {
    this._years = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearsInput() {
    return this._years;
  }
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervals[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsOutputReference {
    return new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervals {
  /**
  * Name of the time interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * TimeIntervals is a list of TimePeriod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#time_intervals DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#time_intervals}
  */
  readonly timeIntervals?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervals[] | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    time_intervals: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsToTerraform, false)(struct!.timeIntervals),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervals | cdktf.IResolvable): any {
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
    time_intervals: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsToHclTerraform, false)(struct!.timeIntervals),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeIntervals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeIntervals = this._timeIntervals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._timeIntervals.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._timeIntervals.internalValue = value.timeIntervals;
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

  // time_intervals - computed: false, optional: true, required: false
  private _timeIntervals = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervalsList(this, "time_intervals", false);
  public get timeIntervals() {
    return this._timeIntervals;
  }
  public putTimeIntervals(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsTimeIntervals[] | cdktf.IResolvable) {
    this._timeIntervals.internalValue = value;
  }
  public resetTimeIntervals() {
    this._timeIntervals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalsInput() {
    return this._timeIntervals.internalValue;
  }
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervals[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsOutputReference {
    return new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpec {
  /**
  * List of inhibition rules. The rules will only apply to alerts matching the resource's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#inhibit_rules DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#inhibit_rules}
  */
  readonly inhibitRules?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecInhibitRules[] | cdktf.IResolvable;
  /**
  * List of receivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#receivers DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#receivers}
  */
  readonly receivers?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceivers[] | cdktf.IResolvable;
  /**
  * The Alertmanager route definition for alerts matching the resource's namespace. If present, it will be added to the generated Alertmanager configuration as a first-level route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#route DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#route}
  */
  readonly route?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRoute;
  /**
  * List of TimeInterval specifying when the routes should be muted or active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1beta1_manifest#time_intervals DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1Manifest#time_intervals}
  */
  readonly timeIntervals?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervals[] | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inhibit_rules: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecInhibitRulesToTerraform, false)(struct!.inhibitRules),
    receivers: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversToTerraform, false)(struct!.receivers),
    route: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteToTerraform(struct!.route),
    time_intervals: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsToTerraform, false)(struct!.timeIntervals),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inhibit_rules: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecInhibitRulesToHclTerraform, false)(struct!.inhibitRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecInhibitRulesList",
    },
    receivers: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversToHclTerraform, false)(struct!.receivers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversList",
    },
    route: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRoute",
    },
    time_intervals: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsToHclTerraform, false)(struct!.timeIntervals),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inhibitRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inhibitRules = this._inhibitRules?.internalValue;
    }
    if (this._receivers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivers = this._receivers?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._timeIntervals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeIntervals = this._timeIntervals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inhibitRules.internalValue = undefined;
      this._receivers.internalValue = undefined;
      this._route.internalValue = undefined;
      this._timeIntervals.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inhibitRules.internalValue = value.inhibitRules;
      this._receivers.internalValue = value.receivers;
      this._route.internalValue = value.route;
      this._timeIntervals.internalValue = value.timeIntervals;
    }
  }

  // inhibit_rules - computed: false, optional: true, required: false
  private _inhibitRules = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecInhibitRulesList(this, "inhibit_rules", false);
  public get inhibitRules() {
    return this._inhibitRules;
  }
  public putInhibitRules(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecInhibitRules[] | cdktf.IResolvable) {
    this._inhibitRules.internalValue = value;
  }
  public resetInhibitRules() {
    this._inhibitRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inhibitRulesInput() {
    return this._inhibitRules.internalValue;
  }

  // receivers - computed: false, optional: true, required: false
  private _receivers = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceiversList(this, "receivers", false);
  public get receivers() {
    return this._receivers;
  }
  public putReceivers(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecReceivers[] | cdktf.IResolvable) {
    this._receivers.internalValue = value;
  }
  public resetReceivers() {
    this._receivers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversInput() {
    return this._receivers.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // time_intervals - computed: false, optional: true, required: false
  private _timeIntervals = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervalsList(this, "time_intervals", false);
  public get timeIntervals() {
    return this._timeIntervals;
  }
  public putTimeIntervals(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Beta1ManifestSpecTimeIntervals[] | cdktf.IResolvable) {
    this._timeIntervals.internalValue = value;
  }
  public resetTimeIntervals() {
    this._timeIntervals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalsInput() {
    return this._timeIntervals.internalValue;
  }
}
