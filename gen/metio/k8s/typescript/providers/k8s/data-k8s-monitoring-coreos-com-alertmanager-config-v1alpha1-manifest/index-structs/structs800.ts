import * as cdktf from 'cdktf';
import { DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientId,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigAuthorization,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuth,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecret,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsApiSecret,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsApiSecretToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsApiSecretToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsApiSecretOutputReference,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSlackConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSlackConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSlackConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSlackConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSnsConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSnsConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSnsConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSnsConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversTelegramConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversTelegramConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversTelegramConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversTelegramConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversVictoropsConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversVictoropsConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversVictoropsConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversVictoropsConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebexConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebexConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebexConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebexConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebhookConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebhookConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebhookConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebhookConfigsList } from './structs400'
import { DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversDiscordConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversDiscordConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversDiscordConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversDiscordConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversEmailConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversEmailConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversEmailConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversEmailConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversMsteamsConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversMsteamsConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversMsteamsConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversMsteamsConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOpsgenieConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOpsgenieConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOpsgenieConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOpsgenieConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPagerdutyConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPagerdutyConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPagerdutyConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPagerdutyConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPushoverConfigs,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPushoverConfigsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPushoverConfigsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPushoverConfigsList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecInhibitRules,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecInhibitRulesToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecInhibitRulesToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecInhibitRulesList,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecMuteTimeIntervals,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecMuteTimeIntervalsToTerraform,
dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecMuteTimeIntervalsToHclTerraform,
DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecMuteTimeIntervalsList } from './structs0'
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMap | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMap | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecret;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaConfigMap) {
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
  private _secret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaSecret) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMap | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMap | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertConfigMap) {
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
  private _secret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertSecret) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#ca DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#cert DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key_secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#max_version DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#min_version DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#server_name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret",
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig | cdktf.IResolvable | undefined) {
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
  private _ca = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCa) {
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
  private _cert = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigCert) {
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
  private _keySecret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigKeySecret) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2 {
  /**
  * 'clientId' specifies a key of a Secret or ConfigMap containing the OAuth2 client's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#client_id DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#client_id}
  */
  readonly clientId: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientId;
  /**
  * 'clientSecret' specifies a key of a Secret containing the OAuth2 client's secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#client_secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#client_secret}
  */
  readonly clientSecret: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret;
  /**
  * 'endpointParams' configures the HTTP parameters to append to the token URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#endpoint_params DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#endpoint_params}
  */
  readonly endpointParams?: { [key: string]: string };
  /**
  * 'noProxy' is a comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#no_proxy DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * ProxyConnectHeader optionally specifies headers to send to proxies during CONNECT requests. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#proxy_connect_header DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#proxy_connect_header}
  */
  readonly proxyConnectHeader?: { [key: string]: string };
  /**
  * Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY). It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#proxy_from_environment DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#proxy_from_environment}
  */
  readonly proxyFromEnvironment?: boolean | cdktf.IResolvable;
  /**
  * 'proxyURL' defines the HTTP proxy server to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#proxy_url DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * 'scopes' defines the OAuth2 scopes used for the token request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#scopes DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * TLS configuration to use when connecting to the OAuth2 server. It requires Prometheus >= v2.43.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#tls_config DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig;
  /**
  * 'tokenURL' configures the URL to fetch the token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#token_url DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#token_url}
  */
  readonly tokenUrl: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdToTerraform(struct!.clientId),
    client_secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretToTerraform(struct!.clientSecret),
    endpoint_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointParams),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    proxy_connect_header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConnectHeader),
    proxy_from_environment: cdktf.booleanToTerraform(struct!.proxyFromEnvironment),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    tls_config: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigToTerraform(struct!.tlsConfig),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdToHclTerraform(struct!.clientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientId",
    },
    client_secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret",
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
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig",
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2 | cdktf.IResolvable | undefined) {
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
  private _clientId = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }
  public putClientId(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientId) {
    this._clientId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId.internalValue;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ClientSecret) {
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
  private _tlsConfig = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2TlsConfig) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaConfigMap) {
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
  private _secret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaSecret) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#config_map DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertConfigMap) {
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
  private _secret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertSecret) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#optional DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig {
  /**
  * Certificate authority used when verifying server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#ca DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#ca}
  */
  readonly ca?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa;
  /**
  * Client certificate to present when doing client-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#cert DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#cert}
  */
  readonly cert?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#insecure_skip_verify DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#key_secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret;
  /**
  * Maximum acceptable TLS version. It requires Prometheus >= v2.41.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#max_version DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum acceptable TLS version. It requires Prometheus >= v2.35.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#min_version DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#server_name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaToTerraform(struct!.ca),
    cert: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertToTerraform(struct!.cert),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretToTerraform(struct!.keySecret),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa",
    },
    cert: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret",
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig | cdktf.IResolvable | undefined) {
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
  private _ca = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCa) {
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
  private _cert = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigCert) {
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
  private _keySecret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigKeySecret) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfig {
  /**
  * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#authorization DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#authorization}
  */
  readonly authorization?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigAuthorization;
  /**
  * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#basic_auth DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuth;
  /**
  * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#bearer_token_secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#bearer_token_secret}
  */
  readonly bearerTokenSecret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecret;
  /**
  * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#follow_redirects DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * 'noProxy' is a comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#no_proxy DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * OAuth2 client credentials used to fetch a token for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#oauth2 DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#oauth2}
  */
  readonly oauth2?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2;
  /**
  * ProxyConnectHeader optionally specifies headers to send to proxies during CONNECT requests. It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#proxy_connect_header DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#proxy_connect_header}
  */
  readonly proxyConnectHeader?: { [key: string]: string };
  /**
  * Whether to use the proxy configuration defined by environment variables (HTTP_PROXY, HTTPS_PROXY, and NO_PROXY). It requires Prometheus >= v2.43.0 or Alertmanager >= 0.25.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#proxy_from_environment DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#proxy_from_environment}
  */
  readonly proxyFromEnvironment?: boolean | cdktf.IResolvable;
  /**
  * 'proxyURL' defines the HTTP proxy server to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#proxy_url DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * TLS configuration for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#tls_config DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationToTerraform(struct!.authorization),
    basic_auth: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthToTerraform(struct!.basicAuth),
    bearer_token_secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretToTerraform(struct!.bearerTokenSecret),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    oauth2: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ToTerraform(struct!.oauth2),
    proxy_connect_header: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConnectHeader),
    proxy_from_environment: cdktf.booleanToTerraform(struct!.proxyFromEnvironment),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    tls_config: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigAuthorization",
    },
    basic_auth: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuth",
    },
    bearer_token_secret: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretToHclTerraform(struct!.bearerTokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecret",
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
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2",
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
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfig | cdktf.IResolvable | undefined) {
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
  private _authorization = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigAuthorization) {
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
  private _basicAuth = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBasicAuth) {
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
  private _bearerTokenSecret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecretOutputReference(this, "bearer_token_secret");
  public get bearerTokenSecret() {
    return this._bearerTokenSecret;
  }
  public putBearerTokenSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigBearerTokenSecret) {
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
  private _oauth2 = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOauth2) {
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
  private _tlsConfig = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigTlsConfig) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#agent_id DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#agent_id}
  */
  readonly agentId?: string;
  /**
  * The secret's key that contains the WeChat API key. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#api_secret DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#api_secret}
  */
  readonly apiSecret?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsApiSecret;
  /**
  * The WeChat API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#api_url DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#api_url}
  */
  readonly apiUrl?: string;
  /**
  * The corp id for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#corp_id DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#corp_id}
  */
  readonly corpId?: string;
  /**
  * HTTP client configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#http_config DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#http_config}
  */
  readonly httpConfig?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfig;
  /**
  * API request data as defined by the WeChat API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#message DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#message_type DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#message_type}
  */
  readonly messageType?: string;
  /**
  * Whether or not to notify about resolved alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#send_resolved DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#send_resolved}
  */
  readonly sendResolved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#to_party DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#to_party}
  */
  readonly toParty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#to_tag DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#to_tag}
  */
  readonly toTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#to_user DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#to_user}
  */
  readonly toUser?: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    api_secret: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsApiSecretToTerraform(struct!.apiSecret),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    corp_id: cdktf.stringToTerraform(struct!.corpId),
    http_config: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigToTerraform(struct!.httpConfig),
    message: cdktf.stringToTerraform(struct!.message),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    send_resolved: cdktf.booleanToTerraform(struct!.sendResolved),
    to_party: cdktf.stringToTerraform(struct!.toParty),
    to_tag: cdktf.stringToTerraform(struct!.toTag),
    to_user: cdktf.stringToTerraform(struct!.toUser),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigs | cdktf.IResolvable): any {
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
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsApiSecretToHclTerraform(struct!.apiSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsApiSecret",
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
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigToHclTerraform(struct!.httpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfig",
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigs | cdktf.IResolvable | undefined) {
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
  private _apiSecret = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsApiSecretOutputReference(this, "api_secret");
  public get apiSecret() {
    return this._apiSecret;
  }
  public putApiSecret(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsApiSecret) {
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
  private _httpConfig = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsHttpConfig) {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsOutputReference {
    return new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceivers {
  /**
  * List of Discord configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#discord_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#discord_configs}
  */
  readonly discordConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversDiscordConfigs[] | cdktf.IResolvable;
  /**
  * List of Email configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#email_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#email_configs}
  */
  readonly emailConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversEmailConfigs[] | cdktf.IResolvable;
  /**
  * List of MSTeams configurations. It requires Alertmanager >= 0.26.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#msteams_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#msteams_configs}
  */
  readonly msteamsConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversMsteamsConfigs[] | cdktf.IResolvable;
  /**
  * Name of the receiver. Must be unique across all items from the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * List of OpsGenie configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#opsgenie_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#opsgenie_configs}
  */
  readonly opsgenieConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOpsgenieConfigs[] | cdktf.IResolvable;
  /**
  * List of PagerDuty configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#pagerduty_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#pagerduty_configs}
  */
  readonly pagerdutyConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPagerdutyConfigs[] | cdktf.IResolvable;
  /**
  * List of Pushover configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#pushover_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#pushover_configs}
  */
  readonly pushoverConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPushoverConfigs[] | cdktf.IResolvable;
  /**
  * List of Slack configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#slack_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#slack_configs}
  */
  readonly slackConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSlackConfigs[] | cdktf.IResolvable;
  /**
  * List of SNS configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#sns_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#sns_configs}
  */
  readonly snsConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSnsConfigs[] | cdktf.IResolvable;
  /**
  * List of Telegram configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#telegram_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#telegram_configs}
  */
  readonly telegramConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversTelegramConfigs[] | cdktf.IResolvable;
  /**
  * List of VictorOps configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#victorops_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#victorops_configs}
  */
  readonly victoropsConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversVictoropsConfigs[] | cdktf.IResolvable;
  /**
  * List of Webex configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#webex_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#webex_configs}
  */
  readonly webexConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebexConfigs[] | cdktf.IResolvable;
  /**
  * List of webhook configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#webhook_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#webhook_configs}
  */
  readonly webhookConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebhookConfigs[] | cdktf.IResolvable;
  /**
  * List of WeChat configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#wechat_configs DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#wechat_configs}
  */
  readonly wechatConfigs?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigs[] | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discord_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversDiscordConfigsToTerraform, false)(struct!.discordConfigs),
    email_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversEmailConfigsToTerraform, false)(struct!.emailConfigs),
    msteams_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversMsteamsConfigsToTerraform, false)(struct!.msteamsConfigs),
    name: cdktf.stringToTerraform(struct!.name),
    opsgenie_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOpsgenieConfigsToTerraform, false)(struct!.opsgenieConfigs),
    pagerduty_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPagerdutyConfigsToTerraform, false)(struct!.pagerdutyConfigs),
    pushover_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPushoverConfigsToTerraform, false)(struct!.pushoverConfigs),
    slack_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSlackConfigsToTerraform, false)(struct!.slackConfigs),
    sns_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSnsConfigsToTerraform, false)(struct!.snsConfigs),
    telegram_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversTelegramConfigsToTerraform, false)(struct!.telegramConfigs),
    victorops_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversVictoropsConfigsToTerraform, false)(struct!.victoropsConfigs),
    webex_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebexConfigsToTerraform, false)(struct!.webexConfigs),
    webhook_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebhookConfigsToTerraform, false)(struct!.webhookConfigs),
    wechat_configs: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsToTerraform, false)(struct!.wechatConfigs),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discord_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversDiscordConfigsToHclTerraform, false)(struct!.discordConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversDiscordConfigsList",
    },
    email_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversEmailConfigsToHclTerraform, false)(struct!.emailConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversEmailConfigsList",
    },
    msteams_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversMsteamsConfigsToHclTerraform, false)(struct!.msteamsConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversMsteamsConfigsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opsgenie_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOpsgenieConfigsToHclTerraform, false)(struct!.opsgenieConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOpsgenieConfigsList",
    },
    pagerduty_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPagerdutyConfigsToHclTerraform, false)(struct!.pagerdutyConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPagerdutyConfigsList",
    },
    pushover_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPushoverConfigsToHclTerraform, false)(struct!.pushoverConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPushoverConfigsList",
    },
    slack_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSlackConfigsToHclTerraform, false)(struct!.slackConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSlackConfigsList",
    },
    sns_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSnsConfigsToHclTerraform, false)(struct!.snsConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSnsConfigsList",
    },
    telegram_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversTelegramConfigsToHclTerraform, false)(struct!.telegramConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversTelegramConfigsList",
    },
    victorops_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversVictoropsConfigsToHclTerraform, false)(struct!.victoropsConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversVictoropsConfigsList",
    },
    webex_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebexConfigsToHclTerraform, false)(struct!.webexConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebexConfigsList",
    },
    webhook_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebhookConfigsToHclTerraform, false)(struct!.webhookConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebhookConfigsList",
    },
    wechat_configs: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsToHclTerraform, false)(struct!.wechatConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceivers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceivers | cdktf.IResolvable | undefined) {
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
  private _discordConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversDiscordConfigsList(this, "discord_configs", false);
  public get discordConfigs() {
    return this._discordConfigs;
  }
  public putDiscordConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversDiscordConfigs[] | cdktf.IResolvable) {
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
  private _emailConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversEmailConfigsList(this, "email_configs", false);
  public get emailConfigs() {
    return this._emailConfigs;
  }
  public putEmailConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversEmailConfigs[] | cdktf.IResolvable) {
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
  private _msteamsConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversMsteamsConfigsList(this, "msteams_configs", false);
  public get msteamsConfigs() {
    return this._msteamsConfigs;
  }
  public putMsteamsConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversMsteamsConfigs[] | cdktf.IResolvable) {
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
  private _opsgenieConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOpsgenieConfigsList(this, "opsgenie_configs", false);
  public get opsgenieConfigs() {
    return this._opsgenieConfigs;
  }
  public putOpsgenieConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOpsgenieConfigs[] | cdktf.IResolvable) {
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
  private _pagerdutyConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPagerdutyConfigsList(this, "pagerduty_configs", false);
  public get pagerdutyConfigs() {
    return this._pagerdutyConfigs;
  }
  public putPagerdutyConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPagerdutyConfigs[] | cdktf.IResolvable) {
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
  private _pushoverConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPushoverConfigsList(this, "pushover_configs", false);
  public get pushoverConfigs() {
    return this._pushoverConfigs;
  }
  public putPushoverConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversPushoverConfigs[] | cdktf.IResolvable) {
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
  private _slackConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSlackConfigsList(this, "slack_configs", false);
  public get slackConfigs() {
    return this._slackConfigs;
  }
  public putSlackConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSlackConfigs[] | cdktf.IResolvable) {
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
  private _snsConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSnsConfigsList(this, "sns_configs", false);
  public get snsConfigs() {
    return this._snsConfigs;
  }
  public putSnsConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversSnsConfigs[] | cdktf.IResolvable) {
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
  private _telegramConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversTelegramConfigsList(this, "telegram_configs", false);
  public get telegramConfigs() {
    return this._telegramConfigs;
  }
  public putTelegramConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversTelegramConfigs[] | cdktf.IResolvable) {
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
  private _victoropsConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversVictoropsConfigsList(this, "victorops_configs", false);
  public get victoropsConfigs() {
    return this._victoropsConfigs;
  }
  public putVictoropsConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversVictoropsConfigs[] | cdktf.IResolvable) {
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
  private _webexConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebexConfigsList(this, "webex_configs", false);
  public get webexConfigs() {
    return this._webexConfigs;
  }
  public putWebexConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebexConfigs[] | cdktf.IResolvable) {
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
  private _webhookConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebhookConfigsList(this, "webhook_configs", false);
  public get webhookConfigs() {
    return this._webhookConfigs;
  }
  public putWebhookConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWebhookConfigs[] | cdktf.IResolvable) {
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
  private _wechatConfigs = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigsList(this, "wechat_configs", false);
  public get wechatConfigs() {
    return this._wechatConfigs;
  }
  public putWechatConfigs(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversWechatConfigs[] | cdktf.IResolvable) {
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceivers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOutputReference {
    return new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchers {
  /**
  * Match operation available with AlertManager >= v0.22.0 and takes precedence over Regex (deprecated) if non-empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#match_type DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#match_type}
  */
  readonly matchType?: string;
  /**
  * Label to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#name DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Whether to match on equality (false) or regular-expression (true). Deprecated: for AlertManager >= v0.22.0, 'matchType' should be used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#regex DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Label value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#value DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchersToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchersToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchers | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchers | cdktf.IResolvable | undefined {
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
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._regex = undefined;
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
      this._regex = value.regex;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchersList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchersOutputReference {
    return new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRoute {
  /**
  * ActiveTimeIntervals is a list of MuteTimeInterval names when this route should be active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#active_time_intervals DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#active_time_intervals}
  */
  readonly activeTimeIntervals?: string[];
  /**
  * Boolean indicating whether an alert should continue matching subsequent sibling nodes. It will always be overridden to true for the first-level route by the Prometheus operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#continue DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#continue}
  */
  readonly continue?: boolean | cdktf.IResolvable;
  /**
  * List of labels to group by. Labels must not be repeated (unique list). Special label '...' (aggregate by all possible labels), if provided, must be the only element in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#group_by DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#group_by}
  */
  readonly groupBy?: string[];
  /**
  * How long to wait before sending an updated notification. Must match the regular expression'^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$' Example: '5m'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#group_interval DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * How long to wait before sending the initial notification. Must match the regular expression'^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$' Example: '30s'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#group_wait DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#group_wait}
  */
  readonly groupWait?: string;
  /**
  * List of matchers that the alert's labels should match. For the first level route, the operator removes any existing equality and regexp matcher on the 'namespace' label and adds a 'namespace: <object namespace>' matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#matchers DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#matchers}
  */
  readonly matchers?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchers[] | cdktf.IResolvable;
  /**
  * Note: this comment applies to the field definition above but appears below otherwise it gets included in the generated manifest. CRD schema doesn't support self-referential types for now (see https://github.com/kubernetes/kubernetes/issues/62872). We have to use an alternative type to circumvent the limitation. The downside is that the Kube API can't validate the data beyond the fact that it is a valid JSON representation. MuteTimeIntervals is a list of MuteTimeInterval names that will mute this route when matched,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#mute_time_intervals DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#mute_time_intervals}
  */
  readonly muteTimeIntervals?: string[];
  /**
  * Name of the receiver for this route. If not empty, it should be listed in the 'receivers' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#receiver DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#receiver}
  */
  readonly receiver?: string;
  /**
  * How long to wait before repeating the last notification. Must match the regular expression'^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$' Example: '4h'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#repeat_interval DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * Child routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#routes DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#routes}
  */
  readonly routes?: string[];
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRoute | cdktf.IResolvable): any {
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
    matchers: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchersToTerraform, false)(struct!.matchers),
    mute_time_intervals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.muteTimeIntervals),
    receiver: cdktf.stringToTerraform(struct!.receiver),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    routes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routes),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRoute | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchersToHclTerraform, false)(struct!.matchers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchersList",
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

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRoute | cdktf.IResolvable | undefined) {
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
  private _matchers = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchersList(this, "matchers", false);
  public get matchers() {
    return this._matchers;
  }
  public putMatchers(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteMatchers[] | cdktf.IResolvable) {
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
export interface DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpec {
  /**
  * List of inhibition rules. The rules will only apply to alerts matching the resource's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#inhibit_rules DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#inhibit_rules}
  */
  readonly inhibitRules?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecInhibitRules[] | cdktf.IResolvable;
  /**
  * List of MuteTimeInterval specifying when the routes should be muted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#mute_time_intervals DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#mute_time_intervals}
  */
  readonly muteTimeIntervals?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecMuteTimeIntervals[] | cdktf.IResolvable;
  /**
  * List of receivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#receivers DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#receivers}
  */
  readonly receivers?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceivers[] | cdktf.IResolvable;
  /**
  * The Alertmanager route definition for alerts matching the resource's namespace. If present, it will be added to the generated Alertmanager configuration as a first-level route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monitoring_coreos_com_alertmanager_config_v1alpha1_manifest#route DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1Manifest#route}
  */
  readonly route?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRoute;
}

export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inhibit_rules: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecInhibitRulesToTerraform, false)(struct!.inhibitRules),
    mute_time_intervals: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecMuteTimeIntervalsToTerraform, false)(struct!.muteTimeIntervals),
    receivers: cdktf.listMapper(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversToTerraform, false)(struct!.receivers),
    route: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteToTerraform(struct!.route),
  }
}


export function dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inhibit_rules: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecInhibitRulesToHclTerraform, false)(struct!.inhibitRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecInhibitRulesList",
    },
    mute_time_intervals: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecMuteTimeIntervalsToHclTerraform, false)(struct!.muteTimeIntervals),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecMuteTimeIntervalsList",
    },
    receivers: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversToHclTerraform, false)(struct!.receivers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversList",
    },
    route: {
      value: dataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRoute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inhibitRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inhibitRules = this._inhibitRules?.internalValue;
    }
    if (this._muteTimeIntervals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.muteTimeIntervals = this._muteTimeIntervals?.internalValue;
    }
    if (this._receivers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivers = this._receivers?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inhibitRules.internalValue = undefined;
      this._muteTimeIntervals.internalValue = undefined;
      this._receivers.internalValue = undefined;
      this._route.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inhibitRules.internalValue = value.inhibitRules;
      this._muteTimeIntervals.internalValue = value.muteTimeIntervals;
      this._receivers.internalValue = value.receivers;
      this._route.internalValue = value.route;
    }
  }

  // inhibit_rules - computed: false, optional: true, required: false
  private _inhibitRules = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecInhibitRulesList(this, "inhibit_rules", false);
  public get inhibitRules() {
    return this._inhibitRules;
  }
  public putInhibitRules(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecInhibitRules[] | cdktf.IResolvable) {
    this._inhibitRules.internalValue = value;
  }
  public resetInhibitRules() {
    this._inhibitRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inhibitRulesInput() {
    return this._inhibitRules.internalValue;
  }

  // mute_time_intervals - computed: false, optional: true, required: false
  private _muteTimeIntervals = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecMuteTimeIntervalsList(this, "mute_time_intervals", false);
  public get muteTimeIntervals() {
    return this._muteTimeIntervals;
  }
  public putMuteTimeIntervals(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecMuteTimeIntervals[] | cdktf.IResolvable) {
    this._muteTimeIntervals.internalValue = value;
  }
  public resetMuteTimeIntervals() {
    this._muteTimeIntervals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteTimeIntervalsInput() {
    return this._muteTimeIntervals.internalValue;
  }

  // receivers - computed: false, optional: true, required: false
  private _receivers = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceiversList(this, "receivers", false);
  public get receivers() {
    return this._receivers;
  }
  public putReceivers(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecReceivers[] | cdktf.IResolvable) {
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
  private _route = new DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SMonitoringCoreosComAlertmanagerConfigV1Alpha1ManifestSpecRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }
}
