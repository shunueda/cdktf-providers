import * as cdktf from 'cdktf';
import { DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookDisplay,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookDisplayToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookDisplayToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookDisplayOutputReference,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookMetrics,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookMetricsToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookMetricsToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookMetricsList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookRelationships,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookRelationshipsToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookRelationshipsToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookRelationshipsOutputReference,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTest,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTestToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTestToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTestOutputReference,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPrometheus,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPrometheusToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPrometheusToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPrometheusList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecRedis,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecRedisToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecRedisToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecRedisList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecRestic,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecResticToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecResticToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecResticList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecS3,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecS3ToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecS3ToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecS3List,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecTcp,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecTcpToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecTcpToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecTcpList } from './structs2400'
import { DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAlertmanager,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAlertmanagerToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAlertmanagerToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAlertmanagerList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfig,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigRule,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigRuleToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigRuleToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigRuleList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAzureDevops,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAzureDevopsToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAzureDevopsToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAzureDevopsList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCatalog,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecCatalogToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecCatalogToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCatalogList } from './structs0'
import { DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCloudwatch,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecCloudwatchToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecCloudwatchToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCloudwatchList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerd,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdPush,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdPushToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdPushToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdPushList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDatabaseBackup,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDatabaseBackupToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDatabaseBackupToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDatabaseBackupList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDns,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDnsToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDnsToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDnsList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDocker,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerPush,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerPushToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerPushToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerPushList } from './structs400'
import { DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDynatrace,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDynatraceToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDynatraceToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDynatraceList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecElasticsearch,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecElasticsearchToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecElasticsearchToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecElasticsearchList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecEnv,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecEnvToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecEnvToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecEnvOutputReference,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecExec,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecExecToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecExecToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecExecList } from './structs800'
import { DataK8SCanariesFlanksourceComCanaryV1ManifestSpecFolder,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecFolderToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecFolderToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecFolderList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGitProtocol,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecGitProtocolToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecGitProtocolToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGitProtocolList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGithub,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecGithubToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecGithubToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGithubList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHelm,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecHelmToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecHelmToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHelmList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHttp,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecHttpToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecHttpToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHttpList } from './structs1200'
import { DataK8SCanariesFlanksourceComCanaryV1ManifestSpecIcmp,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecIcmpToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecIcmpToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecIcmpList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJmeter,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecJmeterToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecJmeterToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJmeterList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJunit,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecJunitToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecJunitToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJunitList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetes,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesResourceA,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesResourceAToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesResourceAToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesResourceAList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecLdap,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecLdapToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecLdapToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecLdapList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMongodb,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMongodbToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMongodbToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMongodbList } from './structs1600'
import { DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMssql,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMssqlToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMssqlToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMssqlList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMysql,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMysqlToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMysqlToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMysqlList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecNamespace,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecNamespaceToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecNamespaceToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecNamespaceList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecOpensearch,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecOpensearchToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecOpensearchToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecOpensearchList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPod,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPodToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPodToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPodList,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPostgres,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPostgresToTerraform,
dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPostgresToHclTerraform,
DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPostgresList } from './structs2000'
export interface DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#key DataK8SCanariesFlanksourceComCanaryV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#name DataK8SCanariesFlanksourceComCanaryV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
}
export interface DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRef {
  /**
  * Key is a JSONPath expression used to fetch the key from the merged JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#key DataK8SCanariesFlanksourceComCanaryV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#name DataK8SCanariesFlanksourceComCanaryV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRefToTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
}
export interface DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#key DataK8SCanariesFlanksourceComCanaryV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#name DataK8SCanariesFlanksourceComCanaryV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRefToTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
}
export interface DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#config_map_key_ref DataK8SCanariesFlanksourceComCanaryV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#helm_ref DataK8SCanariesFlanksourceComCanaryV1Manifest#helm_ref}
  */
  readonly helmRef?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#secret_key_ref DataK8SCanariesFlanksourceComCanaryV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRef;
  /**
  * ServiceAccount specifies the service account whose token should be fetched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#service_account DataK8SCanariesFlanksourceComCanaryV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromToTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    helm_ref: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRefToTerraform(struct!.helmRef),
    secret_key_ref: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromToHclTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRef",
    },
    helm_ref: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRefToHclTerraform(struct!.helmRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRef",
    },
    secret_key_ref: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRef",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._helmRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRef = this._helmRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._helmRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._helmRef.internalValue = value.helmRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // helm_ref - computed: false, optional: true, required: false
  private _helmRef = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRefOutputReference(this, "helm_ref");
  public get helmRef() {
    return this._helmRef;
  }
  public putHelmRef(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromHelmRef) {
    this._helmRef.internalValue = value;
  }
  public resetHelmRef() {
    this._helmRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRefInput() {
    return this._helmRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#name DataK8SCanariesFlanksourceComCanaryV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#value DataK8SCanariesFlanksourceComCanaryV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#value_from DataK8SCanariesFlanksourceComCanaryV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFrom;
}

export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenToTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenToHclTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToken | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransform {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#expr DataK8SCanariesFlanksourceComCanaryV1Manifest#expr}
  */
  readonly expr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#javascript DataK8SCanariesFlanksourceComCanaryV1Manifest#javascript}
  */
  readonly javascript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#json_path DataK8SCanariesFlanksourceComCanaryV1Manifest#json_path}
  */
  readonly jsonPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#template DataK8SCanariesFlanksourceComCanaryV1Manifest#template}
  */
  readonly template?: string;
}

export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransformToTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expr: cdktf.stringToTerraform(struct!.expr),
    javascript: cdktf.stringToTerraform(struct!.javascript),
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransformToHclTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    javascript: {
      value: cdktf.stringToHclTerraform(struct!.javascript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._javascript !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascript = this._javascript;
    }
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expr = undefined;
      this._javascript = undefined;
      this._jsonPath = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expr = value.expr;
      this._javascript = value.javascript;
      this._jsonPath = value.jsonPath;
      this._template = value.template;
    }
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // javascript - computed: false, optional: true, required: false
  private _javascript?: string; 
  public get javascript() {
    return this.getStringAttribute('javascript');
  }
  public set javascript(value: string) {
    this._javascript = value;
  }
  public resetJavascript() {
    this._javascript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptInput() {
    return this._javascript;
  }

  // json_path - computed: false, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhook {
  /**
  * Description for the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#description DataK8SCanariesFlanksourceComCanaryV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#display DataK8SCanariesFlanksourceComCanaryV1Manifest#display}
  */
  readonly display?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookDisplay;
  /**
  * Icon for overwriting default icon on the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#icon DataK8SCanariesFlanksourceComCanaryV1Manifest#icon}
  */
  readonly icon?: string;
  /**
  * Labels for the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#labels DataK8SCanariesFlanksourceComCanaryV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Metrics to expose from check. https://canarychecker.io/concepts/metrics-exporter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#metrics DataK8SCanariesFlanksourceComCanaryV1Manifest#metrics}
  */
  readonly metrics?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookMetrics[] | cdktf.IResolvable;
  /**
  * Name of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#name DataK8SCanariesFlanksourceComCanaryV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace to insert the check into, if different to the namespace the canary is defined, e.g.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#namespace DataK8SCanariesFlanksourceComCanaryV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Relationships defines a way to link the check results to components and configs using lookup expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#relationships DataK8SCanariesFlanksourceComCanaryV1Manifest#relationships}
  */
  readonly relationships?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookRelationships;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#test DataK8SCanariesFlanksourceComCanaryV1Manifest#test}
  */
  readonly test?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTest;
  /**
  * Token is an optional authorization token to run this check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#token DataK8SCanariesFlanksourceComCanaryV1Manifest#token}
  */
  readonly token?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#transform DataK8SCanariesFlanksourceComCanaryV1Manifest#transform}
  */
  readonly transform?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransform;
  /**
  * Transformed checks have a delete strategy on deletion they can either be marked healthy, unhealthy or left as is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#transform_delete_strategy DataK8SCanariesFlanksourceComCanaryV1Manifest#transform_delete_strategy}
  */
  readonly transformDeleteStrategy?: string;
}

export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookDisplayToTerraform(struct!.display),
    icon: cdktf.stringToTerraform(struct!.icon),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metrics: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookMetricsToTerraform, false)(struct!.metrics),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    relationships: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookRelationshipsToTerraform(struct!.relationships),
    test: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTestToTerraform(struct!.test),
    token: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenToTerraform(struct!.token),
    transform: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransformToTerraform(struct!.transform),
    transform_delete_strategy: cdktf.stringToTerraform(struct!.transformDeleteStrategy),
  }
}


export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToHclTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookDisplayToHclTerraform(struct!.display),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookDisplay",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookMetricsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relationships: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookRelationshipsToHclTerraform(struct!.relationships),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookRelationships",
    },
    test: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTestToHclTerraform(struct!.test),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTest",
    },
    token: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToken",
    },
    transform: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransformToHclTerraform(struct!.transform),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransform",
    },
    transform_delete_strategy: {
      value: cdktf.stringToHclTerraform(struct!.transformDeleteStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._display?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display?.internalValue;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._relationships?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationships = this._relationships?.internalValue;
    }
    if (this._test?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test?.internalValue;
    }
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    if (this._transform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform?.internalValue;
    }
    if (this._transformDeleteStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformDeleteStrategy = this._transformDeleteStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._display.internalValue = undefined;
      this._icon = undefined;
      this._labels = undefined;
      this._metrics.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._relationships.internalValue = undefined;
      this._test.internalValue = undefined;
      this._token.internalValue = undefined;
      this._transform.internalValue = undefined;
      this._transformDeleteStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._display.internalValue = value.display;
      this._icon = value.icon;
      this._labels = value.labels;
      this._metrics.internalValue = value.metrics;
      this._name = value.name;
      this._namespace = value.namespace;
      this._relationships.internalValue = value.relationships;
      this._test.internalValue = value.test;
      this._token.internalValue = value.token;
      this._transform.internalValue = value.transform;
      this._transformDeleteStrategy = value.transformDeleteStrategy;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display - computed: false, optional: true, required: false
  private _display = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookDisplayOutputReference(this, "display");
  public get display() {
    return this._display;
  }
  public putDisplay(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookDisplay) {
    this._display.internalValue = value;
  }
  public resetDisplay() {
    this._display.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display.internalValue;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // relationships - computed: false, optional: true, required: false
  private _relationships = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookRelationshipsOutputReference(this, "relationships");
  public get relationships() {
    return this._relationships;
  }
  public putRelationships(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookRelationships) {
    this._relationships.internalValue = value;
  }
  public resetRelationships() {
    this._relationships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipsInput() {
    return this._relationships.internalValue;
  }

  // test - computed: false, optional: true, required: false
  private _test = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTestOutputReference(this, "test");
  public get test() {
    return this._test;
  }
  public putTest(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTest) {
    this._test.internalValue = value;
  }
  public resetTest() {
    this._test.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test.internalValue;
  }

  // token - computed: false, optional: true, required: false
  private _token = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToken) {
    this._token.internalValue = value;
  }
  public resetToken() {
    this._token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }

  // transform - computed: false, optional: true, required: false
  private _transform = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransformOutputReference(this, "transform");
  public get transform() {
    return this._transform;
  }
  public putTransform(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookTransform) {
    this._transform.internalValue = value;
  }
  public resetTransform() {
    this._transform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform.internalValue;
  }

  // transform_delete_strategy - computed: false, optional: true, required: false
  private _transformDeleteStrategy?: string; 
  public get transformDeleteStrategy() {
    return this.getStringAttribute('transform_delete_strategy');
  }
  public set transformDeleteStrategy(value: string) {
    this._transformDeleteStrategy = value;
  }
  public resetTransformDeleteStrategy() {
    this._transformDeleteStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformDeleteStrategyInput() {
    return this._transformDeleteStrategy;
  }
}
export interface DataK8SCanariesFlanksourceComCanaryV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#alertmanager DataK8SCanariesFlanksourceComCanaryV1Manifest#alertmanager}
  */
  readonly alertmanager?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAlertmanager[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#aws_config DataK8SCanariesFlanksourceComCanaryV1Manifest#aws_config}
  */
  readonly awsConfig?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#aws_config_rule DataK8SCanariesFlanksourceComCanaryV1Manifest#aws_config_rule}
  */
  readonly awsConfigRule?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigRule[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#azure_devops DataK8SCanariesFlanksourceComCanaryV1Manifest#azure_devops}
  */
  readonly azureDevops?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAzureDevops[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#catalog DataK8SCanariesFlanksourceComCanaryV1Manifest#catalog}
  */
  readonly catalog?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCatalog[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#cloudwatch DataK8SCanariesFlanksourceComCanaryV1Manifest#cloudwatch}
  */
  readonly cloudwatch?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCloudwatch[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#containerd DataK8SCanariesFlanksourceComCanaryV1Manifest#containerd}
  */
  readonly containerd?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#containerd_push DataK8SCanariesFlanksourceComCanaryV1Manifest#containerd_push}
  */
  readonly containerdPush?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdPush[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#database_backup DataK8SCanariesFlanksourceComCanaryV1Manifest#database_backup}
  */
  readonly databaseBackup?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDatabaseBackup[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#dns DataK8SCanariesFlanksourceComCanaryV1Manifest#dns}
  */
  readonly dns?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#docker DataK8SCanariesFlanksourceComCanaryV1Manifest#docker}
  */
  readonly docker?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDocker[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#docker_push DataK8SCanariesFlanksourceComCanaryV1Manifest#docker_push}
  */
  readonly dockerPush?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerPush[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#dynatrace DataK8SCanariesFlanksourceComCanaryV1Manifest#dynatrace}
  */
  readonly dynatrace?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDynatrace[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#elasticsearch DataK8SCanariesFlanksourceComCanaryV1Manifest#elasticsearch}
  */
  readonly elasticsearch?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecElasticsearch[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#env DataK8SCanariesFlanksourceComCanaryV1Manifest#env}
  */
  readonly env?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecEnv;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#exec DataK8SCanariesFlanksourceComCanaryV1Manifest#exec}
  */
  readonly exec?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecExec[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#folder DataK8SCanariesFlanksourceComCanaryV1Manifest#folder}
  */
  readonly folder?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecFolder[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#git_protocol DataK8SCanariesFlanksourceComCanaryV1Manifest#git_protocol}
  */
  readonly gitProtocol?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGitProtocol[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#github DataK8SCanariesFlanksourceComCanaryV1Manifest#github}
  */
  readonly github?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGithub[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#helm DataK8SCanariesFlanksourceComCanaryV1Manifest#helm}
  */
  readonly helm?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHelm[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#http DataK8SCanariesFlanksourceComCanaryV1Manifest#http}
  */
  readonly http?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHttp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#icmp DataK8SCanariesFlanksourceComCanaryV1Manifest#icmp}
  */
  readonly icmp?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecIcmp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#icon DataK8SCanariesFlanksourceComCanaryV1Manifest#icon}
  */
  readonly icon?: string;
  /**
  * interval (in seconds) to run checks on Deprecated in favor of Schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#interval DataK8SCanariesFlanksourceComCanaryV1Manifest#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#jmeter DataK8SCanariesFlanksourceComCanaryV1Manifest#jmeter}
  */
  readonly jmeter?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJmeter[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#junit DataK8SCanariesFlanksourceComCanaryV1Manifest#junit}
  */
  readonly junit?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJunit[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#kubernetes DataK8SCanariesFlanksourceComCanaryV1Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#kubernetes_resource DataK8SCanariesFlanksourceComCanaryV1Manifest#kubernetes_resource}
  */
  readonly kubernetesResource?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesResourceA[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#ldap DataK8SCanariesFlanksourceComCanaryV1Manifest#ldap}
  */
  readonly ldap?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecLdap[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#mongodb DataK8SCanariesFlanksourceComCanaryV1Manifest#mongodb}
  */
  readonly mongodb?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMongodb[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#mssql DataK8SCanariesFlanksourceComCanaryV1Manifest#mssql}
  */
  readonly mssql?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMssql[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#mysql DataK8SCanariesFlanksourceComCanaryV1Manifest#mysql}
  */
  readonly mysql?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMysql[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#namespace DataK8SCanariesFlanksourceComCanaryV1Manifest#namespace}
  */
  readonly namespace?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecNamespace[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#opensearch DataK8SCanariesFlanksourceComCanaryV1Manifest#opensearch}
  */
  readonly opensearch?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecOpensearch[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#owner DataK8SCanariesFlanksourceComCanaryV1Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#pod DataK8SCanariesFlanksourceComCanaryV1Manifest#pod}
  */
  readonly pod?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPod[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#postgres DataK8SCanariesFlanksourceComCanaryV1Manifest#postgres}
  */
  readonly postgres?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPostgres[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#prometheus DataK8SCanariesFlanksourceComCanaryV1Manifest#prometheus}
  */
  readonly prometheus?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPrometheus[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#redis DataK8SCanariesFlanksourceComCanaryV1Manifest#redis}
  */
  readonly redis?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecRedis[] | cdktf.IResolvable;
  /**
  * Replicas pauses the canary if = 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#replicas DataK8SCanariesFlanksourceComCanaryV1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#restic DataK8SCanariesFlanksourceComCanaryV1Manifest#restic}
  */
  readonly restic?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecRestic[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#result_mode DataK8SCanariesFlanksourceComCanaryV1Manifest#result_mode}
  */
  readonly resultMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#s3 DataK8SCanariesFlanksourceComCanaryV1Manifest#s3}
  */
  readonly s3?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecS3[] | cdktf.IResolvable;
  /**
  * Schedule to run checks on. Supports all cron expression, example: '30 3-6,20-23 * * *'. For more info about cron expression syntax see https://en.wikipedia.org/wiki/Cron Also supports golang duration, can be set as '@every 1m30s' which runs the check every 1 minute and 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#schedule DataK8SCanariesFlanksourceComCanaryV1Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#severity DataK8SCanariesFlanksourceComCanaryV1Manifest#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#tcp DataK8SCanariesFlanksourceComCanaryV1Manifest#tcp}
  */
  readonly tcp?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecTcp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/canaries_flanksource_com_canary_v1_manifest#webhook DataK8SCanariesFlanksourceComCanaryV1Manifest#webhook}
  */
  readonly webhook?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhook;
}

export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecToTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alertmanager: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAlertmanagerToTerraform, false)(struct!.alertmanager),
    aws_config: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigToTerraform, false)(struct!.awsConfig),
    aws_config_rule: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigRuleToTerraform, false)(struct!.awsConfigRule),
    azure_devops: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAzureDevopsToTerraform, false)(struct!.azureDevops),
    catalog: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecCatalogToTerraform, false)(struct!.catalog),
    cloudwatch: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecCloudwatchToTerraform, false)(struct!.cloudwatch),
    containerd: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdToTerraform, false)(struct!.containerd),
    containerd_push: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdPushToTerraform, false)(struct!.containerdPush),
    database_backup: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDatabaseBackupToTerraform, false)(struct!.databaseBackup),
    dns: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDnsToTerraform, false)(struct!.dns),
    docker: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerToTerraform, false)(struct!.docker),
    docker_push: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerPushToTerraform, false)(struct!.dockerPush),
    dynatrace: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDynatraceToTerraform, false)(struct!.dynatrace),
    elasticsearch: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecElasticsearchToTerraform, false)(struct!.elasticsearch),
    env: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecEnvToTerraform(struct!.env),
    exec: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecExecToTerraform, false)(struct!.exec),
    folder: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecFolderToTerraform, false)(struct!.folder),
    git_protocol: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecGitProtocolToTerraform, false)(struct!.gitProtocol),
    github: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecGithubToTerraform, false)(struct!.github),
    helm: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecHelmToTerraform, false)(struct!.helm),
    http: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecHttpToTerraform, false)(struct!.http),
    icmp: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecIcmpToTerraform, false)(struct!.icmp),
    icon: cdktf.stringToTerraform(struct!.icon),
    interval: cdktf.numberToTerraform(struct!.interval),
    jmeter: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecJmeterToTerraform, false)(struct!.jmeter),
    junit: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecJunitToTerraform, false)(struct!.junit),
    kubernetes: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesToTerraform, false)(struct!.kubernetes),
    kubernetes_resource: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesResourceAToTerraform, false)(struct!.kubernetesResource),
    ldap: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecLdapToTerraform, false)(struct!.ldap),
    mongodb: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMongodbToTerraform, false)(struct!.mongodb),
    mssql: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMssqlToTerraform, false)(struct!.mssql),
    mysql: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMysqlToTerraform, false)(struct!.mysql),
    namespace: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecNamespaceToTerraform, false)(struct!.namespace),
    opensearch: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecOpensearchToTerraform, false)(struct!.opensearch),
    owner: cdktf.stringToTerraform(struct!.owner),
    pod: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPodToTerraform, false)(struct!.pod),
    postgres: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPostgresToTerraform, false)(struct!.postgres),
    prometheus: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPrometheusToTerraform, false)(struct!.prometheus),
    redis: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecRedisToTerraform, false)(struct!.redis),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    restic: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecResticToTerraform, false)(struct!.restic),
    result_mode: cdktf.stringToTerraform(struct!.resultMode),
    s3: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecS3ToTerraform, false)(struct!.s3),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    severity: cdktf.stringToTerraform(struct!.severity),
    tcp: cdktf.listMapper(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecTcpToTerraform, false)(struct!.tcp),
    webhook: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToTerraform(struct!.webhook),
  }
}


export function dataK8SCanariesFlanksourceComCanaryV1ManifestSpecToHclTerraform(struct?: DataK8SCanariesFlanksourceComCanaryV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alertmanager: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAlertmanagerToHclTerraform, false)(struct!.alertmanager),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAlertmanagerList",
    },
    aws_config: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigToHclTerraform, false)(struct!.awsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigList",
    },
    aws_config_rule: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigRuleToHclTerraform, false)(struct!.awsConfigRule),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigRuleList",
    },
    azure_devops: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecAzureDevopsToHclTerraform, false)(struct!.azureDevops),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAzureDevopsList",
    },
    catalog: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecCatalogToHclTerraform, false)(struct!.catalog),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCatalogList",
    },
    cloudwatch: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecCloudwatchToHclTerraform, false)(struct!.cloudwatch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCloudwatchList",
    },
    containerd: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdToHclTerraform, false)(struct!.containerd),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdList",
    },
    containerd_push: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdPushToHclTerraform, false)(struct!.containerdPush),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdPushList",
    },
    database_backup: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDatabaseBackupToHclTerraform, false)(struct!.databaseBackup),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDatabaseBackupList",
    },
    dns: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDnsToHclTerraform, false)(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDnsList",
    },
    docker: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerToHclTerraform, false)(struct!.docker),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerList",
    },
    docker_push: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerPushToHclTerraform, false)(struct!.dockerPush),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerPushList",
    },
    dynatrace: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecDynatraceToHclTerraform, false)(struct!.dynatrace),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDynatraceList",
    },
    elasticsearch: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecElasticsearchToHclTerraform, false)(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecElasticsearchList",
    },
    env: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecEnvToHclTerraform(struct!.env),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecEnv",
    },
    exec: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecExecToHclTerraform, false)(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecExecList",
    },
    folder: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecFolderToHclTerraform, false)(struct!.folder),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecFolderList",
    },
    git_protocol: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecGitProtocolToHclTerraform, false)(struct!.gitProtocol),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGitProtocolList",
    },
    github: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecGithubToHclTerraform, false)(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGithubList",
    },
    helm: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecHelmToHclTerraform, false)(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHelmList",
    },
    http: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecHttpToHclTerraform, false)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHttpList",
    },
    icmp: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecIcmpToHclTerraform, false)(struct!.icmp),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecIcmpList",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jmeter: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecJmeterToHclTerraform, false)(struct!.jmeter),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJmeterList",
    },
    junit: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecJunitToHclTerraform, false)(struct!.junit),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJunitList",
    },
    kubernetes: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesToHclTerraform, false)(struct!.kubernetes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesList",
    },
    kubernetes_resource: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesResourceAToHclTerraform, false)(struct!.kubernetesResource),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesResourceAList",
    },
    ldap: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecLdapToHclTerraform, false)(struct!.ldap),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecLdapList",
    },
    mongodb: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMongodbToHclTerraform, false)(struct!.mongodb),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMongodbList",
    },
    mssql: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMssqlToHclTerraform, false)(struct!.mssql),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMssqlList",
    },
    mysql: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecMysqlToHclTerraform, false)(struct!.mysql),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMysqlList",
    },
    namespace: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecNamespaceToHclTerraform, false)(struct!.namespace),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecNamespaceList",
    },
    opensearch: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecOpensearchToHclTerraform, false)(struct!.opensearch),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecOpensearchList",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPodToHclTerraform, false)(struct!.pod),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPodList",
    },
    postgres: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPostgresToHclTerraform, false)(struct!.postgres),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPostgresList",
    },
    prometheus: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecPrometheusToHclTerraform, false)(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPrometheusList",
    },
    redis: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecRedisToHclTerraform, false)(struct!.redis),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecRedisList",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restic: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecResticToHclTerraform, false)(struct!.restic),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecResticList",
    },
    result_mode: {
      value: cdktf.stringToHclTerraform(struct!.resultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecS3ToHclTerraform, false)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecS3List",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.listMapperHcl(dataK8SCanariesFlanksourceComCanaryV1ManifestSpecTcpToHclTerraform, false)(struct!.tcp),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecTcpList",
    },
    webhook: {
      value: dataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCanariesFlanksourceComCanaryV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCanariesFlanksourceComCanaryV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertmanager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertmanager = this._alertmanager?.internalValue;
    }
    if (this._awsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsConfig = this._awsConfig?.internalValue;
    }
    if (this._awsConfigRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsConfigRule = this._awsConfigRule?.internalValue;
    }
    if (this._azureDevops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDevops = this._azureDevops?.internalValue;
    }
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._cloudwatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatch = this._cloudwatch?.internalValue;
    }
    if (this._containerd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerd = this._containerd?.internalValue;
    }
    if (this._containerdPush?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdPush = this._containerdPush?.internalValue;
    }
    if (this._databaseBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseBackup = this._databaseBackup?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._docker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.docker = this._docker?.internalValue;
    }
    if (this._dockerPush?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerPush = this._dockerPush?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._folder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder?.internalValue;
    }
    if (this._gitProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitProtocol = this._gitProtocol?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._icmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp?.internalValue;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._jmeter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmeter = this._jmeter?.internalValue;
    }
    if (this._junit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.junit = this._junit?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._kubernetesResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesResource = this._kubernetesResource?.internalValue;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._mongodb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodb = this._mongodb?.internalValue;
    }
    if (this._mssql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssql = this._mssql?.internalValue;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._namespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace?.internalValue;
    }
    if (this._opensearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch?.internalValue;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._pod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod?.internalValue;
    }
    if (this._postgres?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgres = this._postgres?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._restic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restic = this._restic?.internalValue;
    }
    if (this._resultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultMode = this._resultMode;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertmanager.internalValue = undefined;
      this._awsConfig.internalValue = undefined;
      this._awsConfigRule.internalValue = undefined;
      this._azureDevops.internalValue = undefined;
      this._catalog.internalValue = undefined;
      this._cloudwatch.internalValue = undefined;
      this._containerd.internalValue = undefined;
      this._containerdPush.internalValue = undefined;
      this._databaseBackup.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._docker.internalValue = undefined;
      this._dockerPush.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._env.internalValue = undefined;
      this._exec.internalValue = undefined;
      this._folder.internalValue = undefined;
      this._gitProtocol.internalValue = undefined;
      this._github.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._http.internalValue = undefined;
      this._icmp.internalValue = undefined;
      this._icon = undefined;
      this._interval = undefined;
      this._jmeter.internalValue = undefined;
      this._junit.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._kubernetesResource.internalValue = undefined;
      this._ldap.internalValue = undefined;
      this._mongodb.internalValue = undefined;
      this._mssql.internalValue = undefined;
      this._mysql.internalValue = undefined;
      this._namespace.internalValue = undefined;
      this._opensearch.internalValue = undefined;
      this._owner = undefined;
      this._pod.internalValue = undefined;
      this._postgres.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._redis.internalValue = undefined;
      this._replicas = undefined;
      this._restic.internalValue = undefined;
      this._resultMode = undefined;
      this._s3.internalValue = undefined;
      this._schedule = undefined;
      this._severity = undefined;
      this._tcp.internalValue = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertmanager.internalValue = value.alertmanager;
      this._awsConfig.internalValue = value.awsConfig;
      this._awsConfigRule.internalValue = value.awsConfigRule;
      this._azureDevops.internalValue = value.azureDevops;
      this._catalog.internalValue = value.catalog;
      this._cloudwatch.internalValue = value.cloudwatch;
      this._containerd.internalValue = value.containerd;
      this._containerdPush.internalValue = value.containerdPush;
      this._databaseBackup.internalValue = value.databaseBackup;
      this._dns.internalValue = value.dns;
      this._docker.internalValue = value.docker;
      this._dockerPush.internalValue = value.dockerPush;
      this._dynatrace.internalValue = value.dynatrace;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._env.internalValue = value.env;
      this._exec.internalValue = value.exec;
      this._folder.internalValue = value.folder;
      this._gitProtocol.internalValue = value.gitProtocol;
      this._github.internalValue = value.github;
      this._helm.internalValue = value.helm;
      this._http.internalValue = value.http;
      this._icmp.internalValue = value.icmp;
      this._icon = value.icon;
      this._interval = value.interval;
      this._jmeter.internalValue = value.jmeter;
      this._junit.internalValue = value.junit;
      this._kubernetes.internalValue = value.kubernetes;
      this._kubernetesResource.internalValue = value.kubernetesResource;
      this._ldap.internalValue = value.ldap;
      this._mongodb.internalValue = value.mongodb;
      this._mssql.internalValue = value.mssql;
      this._mysql.internalValue = value.mysql;
      this._namespace.internalValue = value.namespace;
      this._opensearch.internalValue = value.opensearch;
      this._owner = value.owner;
      this._pod.internalValue = value.pod;
      this._postgres.internalValue = value.postgres;
      this._prometheus.internalValue = value.prometheus;
      this._redis.internalValue = value.redis;
      this._replicas = value.replicas;
      this._restic.internalValue = value.restic;
      this._resultMode = value.resultMode;
      this._s3.internalValue = value.s3;
      this._schedule = value.schedule;
      this._severity = value.severity;
      this._tcp.internalValue = value.tcp;
      this._webhook.internalValue = value.webhook;
    }
  }

  // alertmanager - computed: false, optional: true, required: false
  private _alertmanager = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAlertmanagerList(this, "alertmanager", false);
  public get alertmanager() {
    return this._alertmanager;
  }
  public putAlertmanager(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAlertmanager[] | cdktf.IResolvable) {
    this._alertmanager.internalValue = value;
  }
  public resetAlertmanager() {
    this._alertmanager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertmanagerInput() {
    return this._alertmanager.internalValue;
  }

  // aws_config - computed: false, optional: true, required: false
  private _awsConfig = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigList(this, "aws_config", false);
  public get awsConfig() {
    return this._awsConfig;
  }
  public putAwsConfig(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfig[] | cdktf.IResolvable) {
    this._awsConfig.internalValue = value;
  }
  public resetAwsConfig() {
    this._awsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigInput() {
    return this._awsConfig.internalValue;
  }

  // aws_config_rule - computed: false, optional: true, required: false
  private _awsConfigRule = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigRuleList(this, "aws_config_rule", false);
  public get awsConfigRule() {
    return this._awsConfigRule;
  }
  public putAwsConfigRule(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAwsConfigRule[] | cdktf.IResolvable) {
    this._awsConfigRule.internalValue = value;
  }
  public resetAwsConfigRule() {
    this._awsConfigRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigRuleInput() {
    return this._awsConfigRule.internalValue;
  }

  // azure_devops - computed: false, optional: true, required: false
  private _azureDevops = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAzureDevopsList(this, "azure_devops", false);
  public get azureDevops() {
    return this._azureDevops;
  }
  public putAzureDevops(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecAzureDevops[] | cdktf.IResolvable) {
    this._azureDevops.internalValue = value;
  }
  public resetAzureDevops() {
    this._azureDevops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDevopsInput() {
    return this._azureDevops.internalValue;
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCatalogList(this, "catalog", false);
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCatalog[] | cdktf.IResolvable) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCloudwatchList(this, "cloudwatch", false);
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecCloudwatch[] | cdktf.IResolvable) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // containerd - computed: false, optional: true, required: false
  private _containerd = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdList(this, "containerd", false);
  public get containerd() {
    return this._containerd;
  }
  public putContainerd(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerd[] | cdktf.IResolvable) {
    this._containerd.internalValue = value;
  }
  public resetContainerd() {
    this._containerd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdInput() {
    return this._containerd.internalValue;
  }

  // containerd_push - computed: false, optional: true, required: false
  private _containerdPush = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdPushList(this, "containerd_push", false);
  public get containerdPush() {
    return this._containerdPush;
  }
  public putContainerdPush(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecContainerdPush[] | cdktf.IResolvable) {
    this._containerdPush.internalValue = value;
  }
  public resetContainerdPush() {
    this._containerdPush.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdPushInput() {
    return this._containerdPush.internalValue;
  }

  // database_backup - computed: false, optional: true, required: false
  private _databaseBackup = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDatabaseBackupList(this, "database_backup", false);
  public get databaseBackup() {
    return this._databaseBackup;
  }
  public putDatabaseBackup(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDatabaseBackup[] | cdktf.IResolvable) {
    this._databaseBackup.internalValue = value;
  }
  public resetDatabaseBackup() {
    this._databaseBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseBackupInput() {
    return this._databaseBackup.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }
  public putDns(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDns[] | cdktf.IResolvable) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // docker - computed: false, optional: true, required: false
  private _docker = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerList(this, "docker", false);
  public get docker() {
    return this._docker;
  }
  public putDocker(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDocker[] | cdktf.IResolvable) {
    this._docker.internalValue = value;
  }
  public resetDocker() {
    this._docker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker.internalValue;
  }

  // docker_push - computed: false, optional: true, required: false
  private _dockerPush = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerPushList(this, "docker_push", false);
  public get dockerPush() {
    return this._dockerPush;
  }
  public putDockerPush(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDockerPush[] | cdktf.IResolvable) {
    this._dockerPush.internalValue = value;
  }
  public resetDockerPush() {
    this._dockerPush.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerPushInput() {
    return this._dockerPush.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDynatraceList(this, "dynatrace", false);
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecDynatrace[] | cdktf.IResolvable) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecElasticsearch[] | cdktf.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecEnvOutputReference(this, "env");
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecEnv) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecExec[] | cdktf.IResolvable) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // folder - computed: false, optional: true, required: false
  private _folder = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecFolderList(this, "folder", false);
  public get folder() {
    return this._folder;
  }
  public putFolder(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecFolder[] | cdktf.IResolvable) {
    this._folder.internalValue = value;
  }
  public resetFolder() {
    this._folder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder.internalValue;
  }

  // git_protocol - computed: false, optional: true, required: false
  private _gitProtocol = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGitProtocolList(this, "git_protocol", false);
  public get gitProtocol() {
    return this._gitProtocol;
  }
  public putGitProtocol(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGitProtocol[] | cdktf.IResolvable) {
    this._gitProtocol.internalValue = value;
  }
  public resetGitProtocol() {
    this._gitProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProtocolInput() {
    return this._gitProtocol.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGithubList(this, "github", false);
  public get github() {
    return this._github;
  }
  public putGithub(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecGithub[] | cdktf.IResolvable) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHelmList(this, "helm", false);
  public get helm() {
    return this._helm;
  }
  public putHelm(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHelm[] | cdktf.IResolvable) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecIcmpList(this, "icmp", false);
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecIcmp[] | cdktf.IResolvable) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // jmeter - computed: false, optional: true, required: false
  private _jmeter = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJmeterList(this, "jmeter", false);
  public get jmeter() {
    return this._jmeter;
  }
  public putJmeter(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJmeter[] | cdktf.IResolvable) {
    this._jmeter.internalValue = value;
  }
  public resetJmeter() {
    this._jmeter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmeterInput() {
    return this._jmeter.internalValue;
  }

  // junit - computed: false, optional: true, required: false
  private _junit = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJunitList(this, "junit", false);
  public get junit() {
    return this._junit;
  }
  public putJunit(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecJunit[] | cdktf.IResolvable) {
    this._junit.internalValue = value;
  }
  public resetJunit() {
    this._junit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junitInput() {
    return this._junit.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesList(this, "kubernetes", false);
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetes[] | cdktf.IResolvable) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // kubernetes_resource - computed: false, optional: true, required: false
  private _kubernetesResource = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesResourceAList(this, "kubernetes_resource", false);
  public get kubernetesResource() {
    return this._kubernetesResource;
  }
  public putKubernetesResource(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecKubernetesResourceA[] | cdktf.IResolvable) {
    this._kubernetesResource.internalValue = value;
  }
  public resetKubernetesResource() {
    this._kubernetesResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesResourceInput() {
    return this._kubernetesResource.internalValue;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecLdapList(this, "ldap", false);
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecLdap[] | cdktf.IResolvable) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // mongodb - computed: false, optional: true, required: false
  private _mongodb = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMongodbList(this, "mongodb", false);
  public get mongodb() {
    return this._mongodb;
  }
  public putMongodb(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMongodb[] | cdktf.IResolvable) {
    this._mongodb.internalValue = value;
  }
  public resetMongodb() {
    this._mongodb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbInput() {
    return this._mongodb.internalValue;
  }

  // mssql - computed: false, optional: true, required: false
  private _mssql = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMssqlList(this, "mssql", false);
  public get mssql() {
    return this._mssql;
  }
  public putMssql(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMssql[] | cdktf.IResolvable) {
    this._mssql.internalValue = value;
  }
  public resetMssql() {
    this._mssql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlInput() {
    return this._mssql.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMysqlList(this, "mysql", false);
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecMysql[] | cdktf.IResolvable) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecNamespaceList(this, "namespace", false);
  public get namespace() {
    return this._namespace;
  }
  public putNamespace(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecNamespace[] | cdktf.IResolvable) {
    this._namespace.internalValue = value;
  }
  public resetNamespace() {
    this._namespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace.internalValue;
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecOpensearchList(this, "opensearch", false);
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecOpensearch[] | cdktf.IResolvable) {
    this._opensearch.internalValue = value;
  }
  public resetOpensearch() {
    this._opensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch.internalValue;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // pod - computed: false, optional: true, required: false
  private _pod = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPodList(this, "pod", false);
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPod[] | cdktf.IResolvable) {
    this._pod.internalValue = value;
  }
  public resetPod() {
    this._pod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }

  // postgres - computed: false, optional: true, required: false
  private _postgres = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPostgresList(this, "postgres", false);
  public get postgres() {
    return this._postgres;
  }
  public putPostgres(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPostgres[] | cdktf.IResolvable) {
    this._postgres.internalValue = value;
  }
  public resetPostgres() {
    this._postgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInput() {
    return this._postgres.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPrometheusList(this, "prometheus", false);
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecPrometheus[] | cdktf.IResolvable) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // redis - computed: false, optional: true, required: false
  private _redis = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecRedisList(this, "redis", false);
  public get redis() {
    return this._redis;
  }
  public putRedis(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecRedis[] | cdktf.IResolvable) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // restic - computed: false, optional: true, required: false
  private _restic = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecResticList(this, "restic", false);
  public get restic() {
    return this._restic;
  }
  public putRestic(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecRestic[] | cdktf.IResolvable) {
    this._restic.internalValue = value;
  }
  public resetRestic() {
    this._restic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resticInput() {
    return this._restic.internalValue;
  }

  // result_mode - computed: false, optional: true, required: false
  private _resultMode?: string; 
  public get resultMode() {
    return this.getStringAttribute('result_mode');
  }
  public set resultMode(value: string) {
    this._resultMode = value;
  }
  public resetResultMode() {
    this._resultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultModeInput() {
    return this._resultMode;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecS3[] | cdktf.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecTcpList(this, "tcp", false);
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecTcp[] | cdktf.IResolvable) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataK8SCanariesFlanksourceComCanaryV1ManifestSpecWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}
