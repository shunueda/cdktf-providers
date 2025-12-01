import * as cdktf from 'cdktf';
import { DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookCaProvider,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookCaProviderToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookCaProviderToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookCaProviderOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookResult,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookResultToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookResultToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookResultOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookSecrets,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookSecretsToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookSecretsToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookSecretsList,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAkeyless,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAkeylessToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAkeylessToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAkeylessOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAlibaba,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAlibabaToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAlibabaToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAlibabaOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAws,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAwsToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAwsToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAwsOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAzurekv,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAzurekvToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAzurekvToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAzurekvOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBeyondtrust,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBeyondtrustToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBeyondtrustToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBeyondtrustOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBitwardensecretsmanager,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBitwardensecretsmanagerToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBitwardensecretsmanagerToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBitwardensecretsmanagerOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderChef,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderChefToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderChefToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderChefOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderConjur,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderConjurToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderConjurToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderConjurOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDelinea,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDelineaToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDelineaToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDelineaOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDevice42,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDevice42ToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDevice42ToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDevice42OutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDoppler,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDopplerToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDopplerToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDopplerOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFake,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFakeToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFakeToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFakeOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFortanix,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFortanixToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFortanixToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFortanixOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGcpsm,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGcpsmToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGcpsmToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGcpsmOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGitlab,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGitlabToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGitlabToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGitlabOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderIbm,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderIbmToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderIbmToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderIbmOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderInfisical,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderInfisicalToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderInfisicalToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderInfisicalOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKeepersecurity,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKeepersecurityToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKeepersecurityToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKeepersecurityOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKubernetes,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKubernetesToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKubernetesToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKubernetesOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnboardbase,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnboardbaseToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnboardbaseToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnboardbaseOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnepassword,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnepasswordToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnepasswordToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnepasswordOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOracle,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOracleToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOracleToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOracleOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassbolt,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassboltToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassboltToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassboltOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassworddepot,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassworddepotToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassworddepotToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassworddepotOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPrevider,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPreviderToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPreviderToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPreviderOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPulumi,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPulumiToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPulumiToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPulumiOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderScaleway,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderScalewayToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderScalewayToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderScalewayOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSecretserver,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSecretserverToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSecretserverToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSecretserverOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSenhasegura,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSenhaseguraToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSenhaseguraToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSenhaseguraOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderVault,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderVaultToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderVaultToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderVaultOutputReference,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecConditions,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecConditionsToTerraform,
dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecConditionsToHclTerraform,
DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecConditionsList } from './structs0'
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhook {
  /**
  * Body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#body DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#body}
  */
  readonly body?: string;
  /**
  * PEM encoded CA bundle used to validate webhook server certificate. Only used if the Server URL is using HTTPS protocol. This parameter is ignored for plain HTTP protocol connection. If not set the system root certificates are used to validate the TLS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#ca_bundle DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * The provider for the CA bundle to use to validate webhook server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#ca_provider DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#ca_provider}
  */
  readonly caProvider?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookCaProvider;
  /**
  * Headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#headers DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Webhook Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#method DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#method}
  */
  readonly method?: string;
  /**
  * Result formatting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#result DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#result}
  */
  readonly result: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookResult;
  /**
  * Secrets to fill in templates These secrets will be passed to the templating function as key value pairs under the given name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#secrets DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#secrets}
  */
  readonly secrets?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookSecrets[] | cdktf.IResolvable;
  /**
  * Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#timeout DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Webhook url to call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#url DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    ca_provider: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookCaProviderToTerraform(struct!.caProvider),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    result: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookResultToTerraform(struct!.result),
    secrets: cdktf.listMapper(dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookSecretsToTerraform, false)(struct!.secrets),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_provider: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookCaProviderToHclTerraform(struct!.caProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookCaProvider",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookResult",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookSecretsList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._caProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caProvider = this._caProvider?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._caBundle = undefined;
      this._caProvider.internalValue = undefined;
      this._headers = undefined;
      this._method = undefined;
      this._result.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._caBundle = value.caBundle;
      this._caProvider.internalValue = value.caProvider;
      this._headers = value.headers;
      this._method = value.method;
      this._result.internalValue = value.result;
      this._secrets.internalValue = value.secrets;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // ca_provider - computed: false, optional: true, required: false
  private _caProvider = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookCaProviderOutputReference(this, "ca_provider");
  public get caProvider() {
    return this._caProvider;
  }
  public putCaProvider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookCaProvider) {
    this._caProvider.internalValue = value;
  }
  public resetCaProvider() {
    this._caProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caProviderInput() {
    return this._caProvider.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // result - computed: false, optional: false, required: true
  private _result = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookResult) {
    this._result.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRef | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuth {
  /**
  * The authorized key used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#authorized_key_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#authorized_key_secret_ref}
  */
  readonly authorizedKeySecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_key_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRefToTerraform(struct!.authorizedKeySecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_key_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRefToHclTerraform(struct!.authorizedKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedKeySecretRef = this._authorizedKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizedKeySecretRef.internalValue = value.authorizedKeySecretRef;
    }
  }

  // authorized_key_secret_ref - computed: false, optional: true, required: false
  private _authorizedKeySecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRefOutputReference(this, "authorized_key_secret_ref");
  public get authorizedKeySecretRef() {
    return this._authorizedKeySecretRef;
  }
  public putAuthorizedKeySecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthAuthorizedKeySecretRef) {
    this._authorizedKeySecretRef.internalValue = value;
  }
  public resetAuthorizedKeySecretRef() {
    this._authorizedKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeySecretRefInput() {
    return this._authorizedKeySecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRef | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProvider {
  /**
  * A reference to a specific 'key' within a Secret resource, In some instances, 'key' is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#cert_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRefToTerraform(struct!.certSecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretRef = this._certSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = value.certSecretRef;
    }
  }

  // cert_secret_ref - computed: false, optional: true, required: false
  private _certSecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanager {
  /**
  * Yandex.Cloud API endpoint (e.g. 'api.cloud.yandex.net:443')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#api_endpoint DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * Auth defines the information necessary to authenticate against Yandex Certificate Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#auth}
  */
  readonly auth: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuth;
  /**
  * The provider for the CA bundle to use to validate Yandex.Cloud server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#ca_provider DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#ca_provider}
  */
  readonly caProvider?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProvider;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint: cdktf.stringToTerraform(struct!.apiEndpoint),
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthToTerraform(struct!.auth),
    ca_provider: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderToTerraform(struct!.caProvider),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuth",
    },
    ca_provider: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderToHclTerraform(struct!.caProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._caProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caProvider = this._caProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiEndpoint = undefined;
      this._auth.internalValue = undefined;
      this._caProvider.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiEndpoint = value.apiEndpoint;
      this._auth.internalValue = value.auth;
      this._caProvider.internalValue = value.caProvider;
    }
  }

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // ca_provider - computed: false, optional: true, required: false
  private _caProvider = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProviderOutputReference(this, "ca_provider");
  public get caProvider() {
    return this._caProvider;
  }
  public putCaProvider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerCaProvider) {
    this._caProvider.internalValue = value;
  }
  public resetCaProvider() {
    this._caProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caProviderInput() {
    return this._caProvider.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuth {
  /**
  * The authorized key used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#authorized_key_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#authorized_key_secret_ref}
  */
  readonly authorizedKeySecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_key_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefToTerraform(struct!.authorizedKeySecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_key_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefToHclTerraform(struct!.authorizedKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedKeySecretRef = this._authorizedKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizedKeySecretRef.internalValue = value.authorizedKeySecretRef;
    }
  }

  // authorized_key_secret_ref - computed: false, optional: true, required: false
  private _authorizedKeySecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRefOutputReference(this, "authorized_key_secret_ref");
  public get authorizedKeySecretRef() {
    return this._authorizedKeySecretRef;
  }
  public putAuthorizedKeySecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthAuthorizedKeySecretRef) {
    this._authorizedKeySecretRef.internalValue = value;
  }
  public resetAuthorizedKeySecretRef() {
    this._authorizedKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeySecretRefInput() {
    return this._authorizedKeySecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#key DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * The name of the Secret resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#name DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults to the namespace of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#namespace DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProvider {
  /**
  * A reference to a specific 'key' within a Secret resource, In some instances, 'key' is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#cert_secret_ref DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_secret_ref: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefToTerraform(struct!.certSecretRef),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_secret_ref: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretRef = this._certSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSecretRef.internalValue = value.certSecretRef;
    }
  }

  // cert_secret_ref - computed: false, optional: true, required: false
  private _certSecretRef = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockbox {
  /**
  * Yandex.Cloud API endpoint (e.g. 'api.cloud.yandex.net:443')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#api_endpoint DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * Auth defines the information necessary to authenticate against Yandex Lockbox
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#auth DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#auth}
  */
  readonly auth: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuth;
  /**
  * The provider for the CA bundle to use to validate Yandex.Cloud server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#ca_provider DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#ca_provider}
  */
  readonly caProvider?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProvider;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockbox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint: cdktf.stringToTerraform(struct!.apiEndpoint),
    auth: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthToTerraform(struct!.auth),
    ca_provider: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderToTerraform(struct!.caProvider),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockbox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuth",
    },
    ca_provider: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderToHclTerraform(struct!.caProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockbox | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._caProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caProvider = this._caProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockbox | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiEndpoint = undefined;
      this._auth.internalValue = undefined;
      this._caProvider.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiEndpoint = value.apiEndpoint;
      this._auth.internalValue = value.auth;
      this._caProvider.internalValue = value.caProvider;
    }
  }

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }
  public set apiEndpoint(value: string) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // ca_provider - computed: false, optional: true, required: false
  private _caProvider = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProviderOutputReference(this, "ca_provider");
  public get caProvider() {
    return this._caProvider;
  }
  public putCaProvider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxCaProvider) {
    this._caProvider.internalValue = value;
  }
  public resetCaProvider() {
    this._caProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caProviderInput() {
    return this._caProvider.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProvider {
  /**
  * Akeyless configures this store to sync secrets using Akeyless Vault provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#akeyless DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#akeyless}
  */
  readonly akeyless?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAkeyless;
  /**
  * Alibaba configures this store to sync secrets using Alibaba Cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#alibaba DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#alibaba}
  */
  readonly alibaba?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAlibaba;
  /**
  * AWS configures this store to sync secrets using AWS Secret Manager provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#aws DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#aws}
  */
  readonly aws?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAws;
  /**
  * AzureKV configures this store to sync secrets using Azure Key Vault provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#azurekv DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#azurekv}
  */
  readonly azurekv?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAzurekv;
  /**
  * Beyondtrust configures this store to sync secrets using Password Safe provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#beyondtrust DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#beyondtrust}
  */
  readonly beyondtrust?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBeyondtrust;
  /**
  * BitwardenSecretsManager configures this store to sync secrets using BitwardenSecretsManager provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#bitwardensecretsmanager DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#bitwardensecretsmanager}
  */
  readonly bitwardensecretsmanager?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBitwardensecretsmanager;
  /**
  * Chef configures this store to sync secrets with chef server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#chef DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#chef}
  */
  readonly chef?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderChef;
  /**
  * Conjur configures this store to sync secrets using conjur provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#conjur DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#conjur}
  */
  readonly conjur?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderConjur;
  /**
  * Delinea DevOps Secrets Vault https://docs.delinea.com/online-help/products/devops-secrets-vault/current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#delinea DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#delinea}
  */
  readonly delinea?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDelinea;
  /**
  * Device42 configures this store to sync secrets using the Device42 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#device42 DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#device42}
  */
  readonly device42?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDevice42;
  /**
  * Doppler configures this store to sync secrets using the Doppler provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#doppler DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#doppler}
  */
  readonly doppler?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDoppler;
  /**
  * Fake configures a store with static key/value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#fake DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#fake}
  */
  readonly fake?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFake;
  /**
  * Fortanix configures this store to sync secrets using the Fortanix provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#fortanix DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#fortanix}
  */
  readonly fortanix?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFortanix;
  /**
  * GCPSM configures this store to sync secrets using Google Cloud Platform Secret Manager provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#gcpsm DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#gcpsm}
  */
  readonly gcpsm?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGcpsm;
  /**
  * GitLab configures this store to sync secrets using GitLab Variables provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#gitlab DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#gitlab}
  */
  readonly gitlab?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGitlab;
  /**
  * IBM configures this store to sync secrets using IBM Cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#ibm DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#ibm}
  */
  readonly ibm?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderIbm;
  /**
  * Infisical configures this store to sync secrets using the Infisical provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#infisical DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#infisical}
  */
  readonly infisical?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderInfisical;
  /**
  * KeeperSecurity configures this store to sync secrets using the KeeperSecurity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#keepersecurity DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#keepersecurity}
  */
  readonly keepersecurity?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKeepersecurity;
  /**
  * Kubernetes configures this store to sync secrets using a Kubernetes cluster provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#kubernetes DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKubernetes;
  /**
  * Onboardbase configures this store to sync secrets using the Onboardbase provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#onboardbase DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#onboardbase}
  */
  readonly onboardbase?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnboardbase;
  /**
  * OnePassword configures this store to sync secrets using the 1Password Cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#onepassword DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#onepassword}
  */
  readonly onepassword?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnepassword;
  /**
  * Oracle configures this store to sync secrets using Oracle Vault provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#oracle DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#oracle}
  */
  readonly oracle?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOracle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#passbolt DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#passbolt}
  */
  readonly passbolt?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassbolt;
  /**
  * Configures a store to sync secrets with a Password Depot instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#passworddepot DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#passworddepot}
  */
  readonly passworddepot?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassworddepot;
  /**
  * Previder configures this store to sync secrets using the Previder provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#previder DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#previder}
  */
  readonly previder?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPrevider;
  /**
  * Pulumi configures this store to sync secrets using the Pulumi provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#pulumi DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#pulumi}
  */
  readonly pulumi?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPulumi;
  /**
  * Scaleway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#scaleway DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#scaleway}
  */
  readonly scaleway?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderScaleway;
  /**
  * SecretServer configures this store to sync secrets using SecretServer provider https://docs.delinea.com/online-help/secret-server/start.htm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#secretserver DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#secretserver}
  */
  readonly secretserver?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSecretserver;
  /**
  * Senhasegura configures this store to sync secrets using senhasegura provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#senhasegura DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#senhasegura}
  */
  readonly senhasegura?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSenhasegura;
  /**
  * Vault configures this store to sync secrets using Hashi provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#vault DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#vault}
  */
  readonly vault?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderVault;
  /**
  * Webhook configures this store to sync secrets using a generic templated webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#webhook DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#webhook}
  */
  readonly webhook?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhook;
  /**
  * YandexCertificateManager configures this store to sync secrets using Yandex Certificate Manager provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#yandexcertificatemanager DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#yandexcertificatemanager}
  */
  readonly yandexcertificatemanager?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanager;
  /**
  * YandexLockbox configures this store to sync secrets using Yandex Lockbox provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#yandexlockbox DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#yandexlockbox}
  */
  readonly yandexlockbox?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockbox;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    akeyless: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAkeylessToTerraform(struct!.akeyless),
    alibaba: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAlibabaToTerraform(struct!.alibaba),
    aws: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAwsToTerraform(struct!.aws),
    azurekv: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAzurekvToTerraform(struct!.azurekv),
    beyondtrust: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBeyondtrustToTerraform(struct!.beyondtrust),
    bitwardensecretsmanager: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBitwardensecretsmanagerToTerraform(struct!.bitwardensecretsmanager),
    chef: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderChefToTerraform(struct!.chef),
    conjur: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderConjurToTerraform(struct!.conjur),
    delinea: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDelineaToTerraform(struct!.delinea),
    device42: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDevice42ToTerraform(struct!.device42),
    doppler: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDopplerToTerraform(struct!.doppler),
    fake: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFakeToTerraform(struct!.fake),
    fortanix: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFortanixToTerraform(struct!.fortanix),
    gcpsm: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGcpsmToTerraform(struct!.gcpsm),
    gitlab: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGitlabToTerraform(struct!.gitlab),
    ibm: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderIbmToTerraform(struct!.ibm),
    infisical: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderInfisicalToTerraform(struct!.infisical),
    keepersecurity: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKeepersecurityToTerraform(struct!.keepersecurity),
    kubernetes: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKubernetesToTerraform(struct!.kubernetes),
    onboardbase: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnboardbaseToTerraform(struct!.onboardbase),
    onepassword: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnepasswordToTerraform(struct!.onepassword),
    oracle: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOracleToTerraform(struct!.oracle),
    passbolt: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassboltToTerraform(struct!.passbolt),
    passworddepot: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassworddepotToTerraform(struct!.passworddepot),
    previder: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPreviderToTerraform(struct!.previder),
    pulumi: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPulumiToTerraform(struct!.pulumi),
    scaleway: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderScalewayToTerraform(struct!.scaleway),
    secretserver: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSecretserverToTerraform(struct!.secretserver),
    senhasegura: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSenhaseguraToTerraform(struct!.senhasegura),
    vault: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderVaultToTerraform(struct!.vault),
    webhook: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookToTerraform(struct!.webhook),
    yandexcertificatemanager: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerToTerraform(struct!.yandexcertificatemanager),
    yandexlockbox: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxToTerraform(struct!.yandexlockbox),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    akeyless: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAkeylessToHclTerraform(struct!.akeyless),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAkeyless",
    },
    alibaba: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAlibabaToHclTerraform(struct!.alibaba),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAlibaba",
    },
    aws: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAws",
    },
    azurekv: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAzurekvToHclTerraform(struct!.azurekv),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAzurekv",
    },
    beyondtrust: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBeyondtrustToHclTerraform(struct!.beyondtrust),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBeyondtrust",
    },
    bitwardensecretsmanager: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBitwardensecretsmanagerToHclTerraform(struct!.bitwardensecretsmanager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBitwardensecretsmanager",
    },
    chef: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderChefToHclTerraform(struct!.chef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderChef",
    },
    conjur: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderConjurToHclTerraform(struct!.conjur),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderConjur",
    },
    delinea: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDelineaToHclTerraform(struct!.delinea),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDelinea",
    },
    device42: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDevice42ToHclTerraform(struct!.device42),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDevice42",
    },
    doppler: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDopplerToHclTerraform(struct!.doppler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDoppler",
    },
    fake: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFakeToHclTerraform(struct!.fake),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFake",
    },
    fortanix: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFortanixToHclTerraform(struct!.fortanix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFortanix",
    },
    gcpsm: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGcpsmToHclTerraform(struct!.gcpsm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGcpsm",
    },
    gitlab: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGitlabToHclTerraform(struct!.gitlab),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGitlab",
    },
    ibm: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderIbmToHclTerraform(struct!.ibm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderIbm",
    },
    infisical: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderInfisicalToHclTerraform(struct!.infisical),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderInfisical",
    },
    keepersecurity: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKeepersecurityToHclTerraform(struct!.keepersecurity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKeepersecurity",
    },
    kubernetes: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKubernetes",
    },
    onboardbase: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnboardbaseToHclTerraform(struct!.onboardbase),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnboardbase",
    },
    onepassword: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnepasswordToHclTerraform(struct!.onepassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnepassword",
    },
    oracle: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOracleToHclTerraform(struct!.oracle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOracle",
    },
    passbolt: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassboltToHclTerraform(struct!.passbolt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassbolt",
    },
    passworddepot: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassworddepotToHclTerraform(struct!.passworddepot),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassworddepot",
    },
    previder: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPreviderToHclTerraform(struct!.previder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPrevider",
    },
    pulumi: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPulumiToHclTerraform(struct!.pulumi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPulumi",
    },
    scaleway: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderScalewayToHclTerraform(struct!.scaleway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderScaleway",
    },
    secretserver: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSecretserverToHclTerraform(struct!.secretserver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSecretserver",
    },
    senhasegura: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSenhaseguraToHclTerraform(struct!.senhasegura),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSenhasegura",
    },
    vault: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderVault",
    },
    webhook: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhook",
    },
    yandexcertificatemanager: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerToHclTerraform(struct!.yandexcertificatemanager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanager",
    },
    yandexlockbox: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxToHclTerraform(struct!.yandexlockbox),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockbox",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._akeyless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.akeyless = this._akeyless?.internalValue;
    }
    if (this._alibaba?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alibaba = this._alibaba?.internalValue;
    }
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azurekv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurekv = this._azurekv?.internalValue;
    }
    if (this._beyondtrust?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beyondtrust = this._beyondtrust?.internalValue;
    }
    if (this._bitwardensecretsmanager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitwardensecretsmanager = this._bitwardensecretsmanager?.internalValue;
    }
    if (this._chef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chef = this._chef?.internalValue;
    }
    if (this._conjur?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conjur = this._conjur?.internalValue;
    }
    if (this._delinea?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delinea = this._delinea?.internalValue;
    }
    if (this._device42?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device42 = this._device42?.internalValue;
    }
    if (this._doppler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doppler = this._doppler?.internalValue;
    }
    if (this._fake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fake = this._fake?.internalValue;
    }
    if (this._fortanix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortanix = this._fortanix?.internalValue;
    }
    if (this._gcpsm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpsm = this._gcpsm?.internalValue;
    }
    if (this._gitlab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlab = this._gitlab?.internalValue;
    }
    if (this._ibm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibm = this._ibm?.internalValue;
    }
    if (this._infisical?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infisical = this._infisical?.internalValue;
    }
    if (this._keepersecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepersecurity = this._keepersecurity?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._onboardbase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onboardbase = this._onboardbase?.internalValue;
    }
    if (this._onepassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onepassword = this._onepassword?.internalValue;
    }
    if (this._oracle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracle = this._oracle?.internalValue;
    }
    if (this._passbolt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passbolt = this._passbolt?.internalValue;
    }
    if (this._passworddepot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passworddepot = this._passworddepot?.internalValue;
    }
    if (this._previder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.previder = this._previder?.internalValue;
    }
    if (this._pulumi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pulumi = this._pulumi?.internalValue;
    }
    if (this._scaleway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleway = this._scaleway?.internalValue;
    }
    if (this._secretserver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretserver = this._secretserver?.internalValue;
    }
    if (this._senhasegura?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.senhasegura = this._senhasegura?.internalValue;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    if (this._yandexcertificatemanager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yandexcertificatemanager = this._yandexcertificatemanager?.internalValue;
    }
    if (this._yandexlockbox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yandexlockbox = this._yandexlockbox?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._akeyless.internalValue = undefined;
      this._alibaba.internalValue = undefined;
      this._aws.internalValue = undefined;
      this._azurekv.internalValue = undefined;
      this._beyondtrust.internalValue = undefined;
      this._bitwardensecretsmanager.internalValue = undefined;
      this._chef.internalValue = undefined;
      this._conjur.internalValue = undefined;
      this._delinea.internalValue = undefined;
      this._device42.internalValue = undefined;
      this._doppler.internalValue = undefined;
      this._fake.internalValue = undefined;
      this._fortanix.internalValue = undefined;
      this._gcpsm.internalValue = undefined;
      this._gitlab.internalValue = undefined;
      this._ibm.internalValue = undefined;
      this._infisical.internalValue = undefined;
      this._keepersecurity.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._onboardbase.internalValue = undefined;
      this._onepassword.internalValue = undefined;
      this._oracle.internalValue = undefined;
      this._passbolt.internalValue = undefined;
      this._passworddepot.internalValue = undefined;
      this._previder.internalValue = undefined;
      this._pulumi.internalValue = undefined;
      this._scaleway.internalValue = undefined;
      this._secretserver.internalValue = undefined;
      this._senhasegura.internalValue = undefined;
      this._vault.internalValue = undefined;
      this._webhook.internalValue = undefined;
      this._yandexcertificatemanager.internalValue = undefined;
      this._yandexlockbox.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._akeyless.internalValue = value.akeyless;
      this._alibaba.internalValue = value.alibaba;
      this._aws.internalValue = value.aws;
      this._azurekv.internalValue = value.azurekv;
      this._beyondtrust.internalValue = value.beyondtrust;
      this._bitwardensecretsmanager.internalValue = value.bitwardensecretsmanager;
      this._chef.internalValue = value.chef;
      this._conjur.internalValue = value.conjur;
      this._delinea.internalValue = value.delinea;
      this._device42.internalValue = value.device42;
      this._doppler.internalValue = value.doppler;
      this._fake.internalValue = value.fake;
      this._fortanix.internalValue = value.fortanix;
      this._gcpsm.internalValue = value.gcpsm;
      this._gitlab.internalValue = value.gitlab;
      this._ibm.internalValue = value.ibm;
      this._infisical.internalValue = value.infisical;
      this._keepersecurity.internalValue = value.keepersecurity;
      this._kubernetes.internalValue = value.kubernetes;
      this._onboardbase.internalValue = value.onboardbase;
      this._onepassword.internalValue = value.onepassword;
      this._oracle.internalValue = value.oracle;
      this._passbolt.internalValue = value.passbolt;
      this._passworddepot.internalValue = value.passworddepot;
      this._previder.internalValue = value.previder;
      this._pulumi.internalValue = value.pulumi;
      this._scaleway.internalValue = value.scaleway;
      this._secretserver.internalValue = value.secretserver;
      this._senhasegura.internalValue = value.senhasegura;
      this._vault.internalValue = value.vault;
      this._webhook.internalValue = value.webhook;
      this._yandexcertificatemanager.internalValue = value.yandexcertificatemanager;
      this._yandexlockbox.internalValue = value.yandexlockbox;
    }
  }

  // akeyless - computed: false, optional: true, required: false
  private _akeyless = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAkeylessOutputReference(this, "akeyless");
  public get akeyless() {
    return this._akeyless;
  }
  public putAkeyless(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAkeyless) {
    this._akeyless.internalValue = value;
  }
  public resetAkeyless() {
    this._akeyless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akeylessInput() {
    return this._akeyless.internalValue;
  }

  // alibaba - computed: false, optional: true, required: false
  private _alibaba = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAlibabaOutputReference(this, "alibaba");
  public get alibaba() {
    return this._alibaba;
  }
  public putAlibaba(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAlibaba) {
    this._alibaba.internalValue = value;
  }
  public resetAlibaba() {
    this._alibaba.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alibabaInput() {
    return this._alibaba.internalValue;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azurekv - computed: false, optional: true, required: false
  private _azurekv = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAzurekvOutputReference(this, "azurekv");
  public get azurekv() {
    return this._azurekv;
  }
  public putAzurekv(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderAzurekv) {
    this._azurekv.internalValue = value;
  }
  public resetAzurekv() {
    this._azurekv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurekvInput() {
    return this._azurekv.internalValue;
  }

  // beyondtrust - computed: false, optional: true, required: false
  private _beyondtrust = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBeyondtrustOutputReference(this, "beyondtrust");
  public get beyondtrust() {
    return this._beyondtrust;
  }
  public putBeyondtrust(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBeyondtrust) {
    this._beyondtrust.internalValue = value;
  }
  public resetBeyondtrust() {
    this._beyondtrust.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beyondtrustInput() {
    return this._beyondtrust.internalValue;
  }

  // bitwardensecretsmanager - computed: false, optional: true, required: false
  private _bitwardensecretsmanager = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBitwardensecretsmanagerOutputReference(this, "bitwardensecretsmanager");
  public get bitwardensecretsmanager() {
    return this._bitwardensecretsmanager;
  }
  public putBitwardensecretsmanager(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderBitwardensecretsmanager) {
    this._bitwardensecretsmanager.internalValue = value;
  }
  public resetBitwardensecretsmanager() {
    this._bitwardensecretsmanager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitwardensecretsmanagerInput() {
    return this._bitwardensecretsmanager.internalValue;
  }

  // chef - computed: false, optional: true, required: false
  private _chef = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderChefOutputReference(this, "chef");
  public get chef() {
    return this._chef;
  }
  public putChef(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderChef) {
    this._chef.internalValue = value;
  }
  public resetChef() {
    this._chef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chefInput() {
    return this._chef.internalValue;
  }

  // conjur - computed: false, optional: true, required: false
  private _conjur = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderConjurOutputReference(this, "conjur");
  public get conjur() {
    return this._conjur;
  }
  public putConjur(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderConjur) {
    this._conjur.internalValue = value;
  }
  public resetConjur() {
    this._conjur.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conjurInput() {
    return this._conjur.internalValue;
  }

  // delinea - computed: false, optional: true, required: false
  private _delinea = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDelineaOutputReference(this, "delinea");
  public get delinea() {
    return this._delinea;
  }
  public putDelinea(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDelinea) {
    this._delinea.internalValue = value;
  }
  public resetDelinea() {
    this._delinea.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delineaInput() {
    return this._delinea.internalValue;
  }

  // device42 - computed: false, optional: true, required: false
  private _device42 = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDevice42OutputReference(this, "device42");
  public get device42() {
    return this._device42;
  }
  public putDevice42(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDevice42) {
    this._device42.internalValue = value;
  }
  public resetDevice42() {
    this._device42.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get device42Input() {
    return this._device42.internalValue;
  }

  // doppler - computed: false, optional: true, required: false
  private _doppler = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDopplerOutputReference(this, "doppler");
  public get doppler() {
    return this._doppler;
  }
  public putDoppler(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderDoppler) {
    this._doppler.internalValue = value;
  }
  public resetDoppler() {
    this._doppler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dopplerInput() {
    return this._doppler.internalValue;
  }

  // fake - computed: false, optional: true, required: false
  private _fake = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFakeOutputReference(this, "fake");
  public get fake() {
    return this._fake;
  }
  public putFake(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFake) {
    this._fake.internalValue = value;
  }
  public resetFake() {
    this._fake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeInput() {
    return this._fake.internalValue;
  }

  // fortanix - computed: false, optional: true, required: false
  private _fortanix = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFortanixOutputReference(this, "fortanix");
  public get fortanix() {
    return this._fortanix;
  }
  public putFortanix(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderFortanix) {
    this._fortanix.internalValue = value;
  }
  public resetFortanix() {
    this._fortanix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortanixInput() {
    return this._fortanix.internalValue;
  }

  // gcpsm - computed: false, optional: true, required: false
  private _gcpsm = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGcpsmOutputReference(this, "gcpsm");
  public get gcpsm() {
    return this._gcpsm;
  }
  public putGcpsm(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGcpsm) {
    this._gcpsm.internalValue = value;
  }
  public resetGcpsm() {
    this._gcpsm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpsmInput() {
    return this._gcpsm.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // ibm - computed: false, optional: true, required: false
  private _ibm = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderIbmOutputReference(this, "ibm");
  public get ibm() {
    return this._ibm;
  }
  public putIbm(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderIbm) {
    this._ibm.internalValue = value;
  }
  public resetIbm() {
    this._ibm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmInput() {
    return this._ibm.internalValue;
  }

  // infisical - computed: false, optional: true, required: false
  private _infisical = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderInfisicalOutputReference(this, "infisical");
  public get infisical() {
    return this._infisical;
  }
  public putInfisical(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderInfisical) {
    this._infisical.internalValue = value;
  }
  public resetInfisical() {
    this._infisical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infisicalInput() {
    return this._infisical.internalValue;
  }

  // keepersecurity - computed: false, optional: true, required: false
  private _keepersecurity = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKeepersecurityOutputReference(this, "keepersecurity");
  public get keepersecurity() {
    return this._keepersecurity;
  }
  public putKeepersecurity(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKeepersecurity) {
    this._keepersecurity.internalValue = value;
  }
  public resetKeepersecurity() {
    this._keepersecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepersecurityInput() {
    return this._keepersecurity.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // onboardbase - computed: false, optional: true, required: false
  private _onboardbase = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnboardbaseOutputReference(this, "onboardbase");
  public get onboardbase() {
    return this._onboardbase;
  }
  public putOnboardbase(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnboardbase) {
    this._onboardbase.internalValue = value;
  }
  public resetOnboardbase() {
    this._onboardbase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardbaseInput() {
    return this._onboardbase.internalValue;
  }

  // onepassword - computed: false, optional: true, required: false
  private _onepassword = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnepasswordOutputReference(this, "onepassword");
  public get onepassword() {
    return this._onepassword;
  }
  public putOnepassword(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOnepassword) {
    this._onepassword.internalValue = value;
  }
  public resetOnepassword() {
    this._onepassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onepasswordInput() {
    return this._onepassword.internalValue;
  }

  // oracle - computed: false, optional: true, required: false
  private _oracle = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOracleOutputReference(this, "oracle");
  public get oracle() {
    return this._oracle;
  }
  public putOracle(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOracle) {
    this._oracle.internalValue = value;
  }
  public resetOracle() {
    this._oracle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInput() {
    return this._oracle.internalValue;
  }

  // passbolt - computed: false, optional: true, required: false
  private _passbolt = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassboltOutputReference(this, "passbolt");
  public get passbolt() {
    return this._passbolt;
  }
  public putPassbolt(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassbolt) {
    this._passbolt.internalValue = value;
  }
  public resetPassbolt() {
    this._passbolt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passboltInput() {
    return this._passbolt.internalValue;
  }

  // passworddepot - computed: false, optional: true, required: false
  private _passworddepot = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassworddepotOutputReference(this, "passworddepot");
  public get passworddepot() {
    return this._passworddepot;
  }
  public putPassworddepot(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPassworddepot) {
    this._passworddepot.internalValue = value;
  }
  public resetPassworddepot() {
    this._passworddepot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passworddepotInput() {
    return this._passworddepot.internalValue;
  }

  // previder - computed: false, optional: true, required: false
  private _previder = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPreviderOutputReference(this, "previder");
  public get previder() {
    return this._previder;
  }
  public putPrevider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPrevider) {
    this._previder.internalValue = value;
  }
  public resetPrevider() {
    this._previder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previderInput() {
    return this._previder.internalValue;
  }

  // pulumi - computed: false, optional: true, required: false
  private _pulumi = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPulumiOutputReference(this, "pulumi");
  public get pulumi() {
    return this._pulumi;
  }
  public putPulumi(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderPulumi) {
    this._pulumi.internalValue = value;
  }
  public resetPulumi() {
    this._pulumi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pulumiInput() {
    return this._pulumi.internalValue;
  }

  // scaleway - computed: false, optional: true, required: false
  private _scaleway = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderScalewayOutputReference(this, "scaleway");
  public get scaleway() {
    return this._scaleway;
  }
  public putScaleway(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderScaleway) {
    this._scaleway.internalValue = value;
  }
  public resetScaleway() {
    this._scaleway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalewayInput() {
    return this._scaleway.internalValue;
  }

  // secretserver - computed: false, optional: true, required: false
  private _secretserver = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSecretserverOutputReference(this, "secretserver");
  public get secretserver() {
    return this._secretserver;
  }
  public putSecretserver(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSecretserver) {
    this._secretserver.internalValue = value;
  }
  public resetSecretserver() {
    this._secretserver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretserverInput() {
    return this._secretserver.internalValue;
  }

  // senhasegura - computed: false, optional: true, required: false
  private _senhasegura = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSenhaseguraOutputReference(this, "senhasegura");
  public get senhasegura() {
    return this._senhasegura;
  }
  public putSenhasegura(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderSenhasegura) {
    this._senhasegura.internalValue = value;
  }
  public resetSenhasegura() {
    this._senhasegura.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senhaseguraInput() {
    return this._senhasegura.internalValue;
  }

  // vault - computed: false, optional: true, required: false
  private _vault = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // yandexcertificatemanager - computed: false, optional: true, required: false
  private _yandexcertificatemanager = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanagerOutputReference(this, "yandexcertificatemanager");
  public get yandexcertificatemanager() {
    return this._yandexcertificatemanager;
  }
  public putYandexcertificatemanager(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexcertificatemanager) {
    this._yandexcertificatemanager.internalValue = value;
  }
  public resetYandexcertificatemanager() {
    this._yandexcertificatemanager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yandexcertificatemanagerInput() {
    return this._yandexcertificatemanager.internalValue;
  }

  // yandexlockbox - computed: false, optional: true, required: false
  private _yandexlockbox = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockboxOutputReference(this, "yandexlockbox");
  public get yandexlockbox() {
    return this._yandexlockbox;
  }
  public putYandexlockbox(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderYandexlockbox) {
    this._yandexlockbox.internalValue = value;
  }
  public resetYandexlockbox() {
    this._yandexlockbox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yandexlockboxInput() {
    return this._yandexlockbox.internalValue;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#max_retries DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#retry_interval DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#retry_interval}
  */
  readonly retryInterval?: string;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettingsToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettingsToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRetries = undefined;
      this._retryInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRetries = value.maxRetries;
      this._retryInterval = value.retryInterval;
    }
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }
}
export interface DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpec {
  /**
  * Used to constraint a ClusterSecretStore to specific namespaces. Relevant only to ClusterSecretStore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#conditions DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#conditions}
  */
  readonly conditions?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecConditions[] | cdktf.IResolvable;
  /**
  * Used to select the correct ESO controller (think: ingress.ingressClassName) The ESO controller is instantiated with a specific controller name and filters ES based on this property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#controller DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#controller}
  */
  readonly controller?: string;
  /**
  * Used to configure the provider. Only one provider may be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#provider DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#provider}
  */
  readonly provider: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProvider;
  /**
  * Used to configure store refresh interval in seconds. Empty or 0 will default to the controller config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#refresh_interval DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * Used to configure http retries if failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/external_secrets_io_cluster_secret_store_v1beta1_manifest#retry_settings DataK8SExternalSecretsIoClusterSecretStoreV1Beta1Manifest#retry_settings}
  */
  readonly retrySettings?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettings;
}

export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecToTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecConditionsToTerraform, false)(struct!.conditions),
    controller: cdktf.stringToTerraform(struct!.controller),
    provider: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderToTerraform(struct!.provider),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
    retry_settings: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettingsToTerraform(struct!.retrySettings),
  }
}


export function dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecConditionsList",
    },
    controller: {
      value: cdktf.stringToHclTerraform(struct!.controller),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderToHclTerraform(struct!.provider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProvider",
    },
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_settings: {
      value: dataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettingsToHclTerraform(struct!.retrySettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._controller !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._retrySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrySettings = this._retrySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._controller = undefined;
      this._provider.internalValue = undefined;
      this._refreshInterval = undefined;
      this._retrySettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._controller = value.controller;
      this._provider.internalValue = value.provider;
      this._refreshInterval = value.refreshInterval;
      this._retrySettings.internalValue = value.retrySettings;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // controller - computed: false, optional: true, required: false
  private _controller?: string; 
  public get controller() {
    return this.getStringAttribute('controller');
  }
  public set controller(value: string) {
    this._controller = value;
  }
  public resetController() {
    this._controller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
  }

  // provider - computed: false, optional: false, required: true
  private _provider = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecProvider) {
    this._provider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // retry_settings - computed: false, optional: true, required: false
  private _retrySettings = new DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettingsOutputReference(this, "retry_settings");
  public get retrySettings() {
    return this._retrySettings;
  }
  public putRetrySettings(value: DataK8SExternalSecretsIoClusterSecretStoreV1Beta1ManifestSpecRetrySettings) {
    this._retrySettings.internalValue = value;
  }
  public resetRetrySettings() {
    this._retrySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrySettingsInput() {
    return this._retrySettings.internalValue;
  }
}
