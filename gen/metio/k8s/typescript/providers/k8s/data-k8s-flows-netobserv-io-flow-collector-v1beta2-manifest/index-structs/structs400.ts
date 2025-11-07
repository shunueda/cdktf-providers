import * as cdktf from 'cdktf';
import { DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsCaCert,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsCaCertToTerraform,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsCaCertToHclTerraform,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsCaCertOutputReference,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsUserCert,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsUserCertToTerraform,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsUserCertToHclTerraform,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsUserCertOutputReference,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiAdvanced,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiAdvancedToTerraform,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiAdvancedToHclTerraform,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiAdvancedOutputReference,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiLokiStack,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiLokiStackToTerraform,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiLokiStackToHclTerraform,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiLokiStackOutputReference,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiManual,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiManualToTerraform,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiManualToHclTerraform,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiManualOutputReference,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMicroservices,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMicroservicesToTerraform,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMicroservicesToHclTerraform,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMicroservicesOutputReference,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecAgent,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecAgentToTerraform,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecAgentToHclTerraform,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecAgentOutputReference,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecConsolePlugin,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecConsolePluginToTerraform,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecConsolePluginToHclTerraform,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecConsolePluginOutputReference,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecExporters,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecExportersToTerraform,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecExportersToHclTerraform,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecExportersList,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecKafka,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecKafkaToTerraform,
dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecKafkaToHclTerraform,
DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecKafkaOutputReference } from './structs0'
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTls {
  /**
  * 'caCert' defines the reference of the certificate for the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#ca_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#ca_cert}
  */
  readonly caCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsCaCert;
  /**
  * Enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * 'insecureSkipVerify' allows skipping client-side verification of the server certificate. If set to 'true', the 'caCert' field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * 'userCert' defines the user certificate reference and is used for mTLS (you can ignore it when using one-way TLS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#user_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#user_cert}
  */
  readonly userCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsUserCert;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsCaCertToTerraform(struct!.caCert),
    enable: cdktf.booleanToTerraform(struct!.enable),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    user_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsUserCertToTerraform(struct!.userCert),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsCaCert",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsUserCertToHclTerraform(struct!.userCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsUserCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._userCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCert = this._userCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
      this._enable = undefined;
      this._insecureSkipVerify = undefined;
      this._userCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
      this._enable = value.enable;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._userCert.internalValue = value.userCert;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsCaCert) {
    this._caCert.internalValue = value;
  }
  public resetCaCert() {
    this._caCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // user_cert - computed: false, optional: true, required: false
  private _userCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsUserCertOutputReference(this, "user_cert");
  public get userCert() {
    return this._userCert;
  }
  public putUserCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsUserCert) {
    this._userCert.internalValue = value;
  }
  public resetUserCert() {
    this._userCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithic {
  /**
  * 'tenantID' is the Loki 'X-Scope-OrgID' header that identifies the tenant for each request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#tenant_id DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * TLS client configuration for Loki URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTls;
  /**
  * 'url' is the unique address of an existing Loki service that points to both the ingester and the querier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#url DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsToTerraform(struct!.tls),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTls",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tenantId = undefined;
      this._tls.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tenantId = value.tenantId;
      this._tls.internalValue = value.tls;
      this._url = value.url;
    }
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLoki {
  /**
  * 'advanced' allows setting some aspects of the internal configuration of the Loki clients. This section is aimed mostly for debugging and fine-grained performance optimizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#advanced DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#advanced}
  */
  readonly advanced?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiAdvanced;
  /**
  * Set 'enable' to 'true' to store flows in Loki. The Console plugin can use either Loki or Prometheus as a data source for metrics (see also 'spec.prometheus.querier'), or both. Not all queries are transposable from Loki to Prometheus. Hence, if Loki is disabled, some features of the plugin are disabled as well, such as getting per-pod information or viewing raw flows. If both Prometheus and Loki are enabled, Prometheus takes precedence and Loki is used as a fallback for queries that Prometheus cannot handle. If they are both disabled, the Console plugin is not deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Loki configuration for 'LokiStack' mode. This is useful for an easy Loki Operator configuration. It is ignored for other modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#loki_stack DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#loki_stack}
  */
  readonly lokiStack?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiLokiStack;
  /**
  * Loki configuration for 'Manual' mode. This is the most flexible configuration. It is ignored for other modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#manual DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#manual}
  */
  readonly manual?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiManual;
  /**
  * Loki configuration for 'Microservices' mode. Use this option when Loki is installed using the microservices deployment mode (https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#microservices-mode). It is ignored for other modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#microservices DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#microservices}
  */
  readonly microservices?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMicroservices;
  /**
  * 'mode' must be set according to the installation mode of Loki:<br> - Use 'LokiStack' when Loki is managed using the Loki Operator<br> - Use 'Monolithic' when Loki is installed as a monolithic workload<br> - Use 'Microservices' when Loki is installed as microservices, but without Loki Operator<br> - Use 'Manual' if none of the options above match your setup<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#mode DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#mode}
  */
  readonly mode: string;
  /**
  * Loki configuration for 'Monolithic' mode. Use this option when Loki is installed using the monolithic deployment mode (https://grafana.com/docs/loki/latest/fundamentals/architecture/deployment-modes/#monolithic-mode). It is ignored for other modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#monolithic DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#monolithic}
  */
  readonly monolithic?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithic;
  /**
  * 'readTimeout' is the maximum console plugin loki query total time limit. A timeout of zero means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#read_timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#read_timeout}
  */
  readonly readTimeout?: string;
  /**
  * 'writeBatchSize' is the maximum batch size (in bytes) of Loki logs to accumulate before sending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#write_batch_size DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#write_batch_size}
  */
  readonly writeBatchSize?: number;
  /**
  * 'writeBatchWait' is the maximum time to wait before sending a Loki batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#write_batch_wait DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#write_batch_wait}
  */
  readonly writeBatchWait?: string;
  /**
  * 'writeTimeout' is the maximum Loki time connection / request limit. A timeout of zero means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#write_timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#write_timeout}
  */
  readonly writeTimeout?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiAdvancedToTerraform(struct!.advanced),
    enable: cdktf.booleanToTerraform(struct!.enable),
    loki_stack: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiLokiStackToTerraform(struct!.lokiStack),
    manual: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiManualToTerraform(struct!.manual),
    microservices: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMicroservicesToTerraform(struct!.microservices),
    mode: cdktf.stringToTerraform(struct!.mode),
    monolithic: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicToTerraform(struct!.monolithic),
    read_timeout: cdktf.stringToTerraform(struct!.readTimeout),
    write_batch_size: cdktf.numberToTerraform(struct!.writeBatchSize),
    write_batch_wait: cdktf.stringToTerraform(struct!.writeBatchWait),
    write_timeout: cdktf.stringToTerraform(struct!.writeTimeout),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiAdvancedToHclTerraform(struct!.advanced),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiAdvanced",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loki_stack: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiLokiStackToHclTerraform(struct!.lokiStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiLokiStack",
    },
    manual: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiManual",
    },
    microservices: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMicroservicesToHclTerraform(struct!.microservices),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMicroservices",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monolithic: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicToHclTerraform(struct!.monolithic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithic",
    },
    read_timeout: {
      value: cdktf.stringToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.writeBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_batch_wait: {
      value: cdktf.stringToHclTerraform(struct!.writeBatchWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_timeout: {
      value: cdktf.stringToHclTerraform(struct!.writeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLoki | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advanced = this._advanced?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._lokiStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lokiStack = this._lokiStack?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    if (this._microservices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microservices = this._microservices?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._monolithic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monolithic = this._monolithic?.internalValue;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._writeBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBatchSize = this._writeBatchSize;
    }
    if (this._writeBatchWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBatchWait = this._writeBatchWait;
    }
    if (this._writeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeTimeout = this._writeTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLoki | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advanced.internalValue = undefined;
      this._enable = undefined;
      this._lokiStack.internalValue = undefined;
      this._manual.internalValue = undefined;
      this._microservices.internalValue = undefined;
      this._mode = undefined;
      this._monolithic.internalValue = undefined;
      this._readTimeout = undefined;
      this._writeBatchSize = undefined;
      this._writeBatchWait = undefined;
      this._writeTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advanced.internalValue = value.advanced;
      this._enable = value.enable;
      this._lokiStack.internalValue = value.lokiStack;
      this._manual.internalValue = value.manual;
      this._microservices.internalValue = value.microservices;
      this._mode = value.mode;
      this._monolithic.internalValue = value.monolithic;
      this._readTimeout = value.readTimeout;
      this._writeBatchSize = value.writeBatchSize;
      this._writeBatchWait = value.writeBatchWait;
      this._writeTimeout = value.writeTimeout;
    }
  }

  // advanced - computed: false, optional: true, required: false
  private _advanced = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiAdvancedOutputReference(this, "advanced");
  public get advanced() {
    return this._advanced;
  }
  public putAdvanced(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiAdvanced) {
    this._advanced.internalValue = value;
  }
  public resetAdvanced() {
    this._advanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedInput() {
    return this._advanced.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // loki_stack - computed: false, optional: true, required: false
  private _lokiStack = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiLokiStackOutputReference(this, "loki_stack");
  public get lokiStack() {
    return this._lokiStack;
  }
  public putLokiStack(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiLokiStack) {
    this._lokiStack.internalValue = value;
  }
  public resetLokiStack() {
    this._lokiStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lokiStackInput() {
    return this._lokiStack.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }

  // microservices - computed: false, optional: true, required: false
  private _microservices = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMicroservicesOutputReference(this, "microservices");
  public get microservices() {
    return this._microservices;
  }
  public putMicroservices(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMicroservices) {
    this._microservices.internalValue = value;
  }
  public resetMicroservices() {
    this._microservices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microservicesInput() {
    return this._microservices.internalValue;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // monolithic - computed: false, optional: true, required: false
  private _monolithic = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithicOutputReference(this, "monolithic");
  public get monolithic() {
    return this._monolithic;
  }
  public putMonolithic(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiMonolithic) {
    this._monolithic.internalValue = value;
  }
  public resetMonolithic() {
    this._monolithic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monolithicInput() {
    return this._monolithic.internalValue;
  }

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: string; 
  public get readTimeout() {
    return this.getStringAttribute('read_timeout');
  }
  public set readTimeout(value: string) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // write_batch_size - computed: false, optional: true, required: false
  private _writeBatchSize?: number; 
  public get writeBatchSize() {
    return this.getNumberAttribute('write_batch_size');
  }
  public set writeBatchSize(value: number) {
    this._writeBatchSize = value;
  }
  public resetWriteBatchSize() {
    this._writeBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBatchSizeInput() {
    return this._writeBatchSize;
  }

  // write_batch_wait - computed: false, optional: true, required: false
  private _writeBatchWait?: string; 
  public get writeBatchWait() {
    return this.getStringAttribute('write_batch_wait');
  }
  public set writeBatchWait(value: string) {
    this._writeBatchWait = value;
  }
  public resetWriteBatchWait() {
    this._writeBatchWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBatchWaitInput() {
    return this._writeBatchWait;
  }

  // write_timeout - computed: false, optional: true, required: false
  private _writeTimeout?: string; 
  public get writeTimeout() {
    return this.getStringAttribute('write_timeout');
  }
  public set writeTimeout(value: string) {
    this._writeTimeout = value;
  }
  public resetWriteTimeout() {
    this._writeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeTimeoutInput() {
    return this._writeTimeout;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicy {
  /**
  * 'additionalNamespaces' contains additional namespaces allowed to connect to the NetObserv namespace. It gives some flexibility in the network policy configuration, however should you need a more specific configuration, you can disable it and install your own instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#additional_namespaces DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#additional_namespaces}
  */
  readonly additionalNamespaces?: string[];
  /**
  * Set 'enable' to 'true' to deploy network policies on the namespaces used by NetObserv (main and privileged). It is disabled by default. These network policies better isolate the NetObserv components to prevent undesired connections to them. We recommend you either enable it, or create your own network policy for NetObserv.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicyToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalNamespaces),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicyToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalNamespaces = this._additionalNamespaces;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalNamespaces = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalNamespaces = value.additionalNamespaces;
      this._enable = value.enable;
    }
  }

  // additional_namespaces - computed: false, optional: true, required: false
  private _additionalNamespaces?: string[]; 
  public get additionalNamespaces() {
    return this.getListAttribute('additional_namespaces');
  }
  public set additionalNamespaces(value: string[]) {
    this._additionalNamespaces = value;
  }
  public resetAdditionalNamespaces() {
    this._additionalNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalNamespacesInput() {
    return this._additionalNamespaces;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_fields DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_fields}
  */
  readonly matchFields?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#preference DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#preference}
  */
  readonly preference: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#weight DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_fields DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_fields}
  */
  readonly matchFields?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#node_selector_terms DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#label_selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_label_keys DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#mismatch_label_keys DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespace_selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespaces DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#topology_key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#pod_affinity_term DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#weight DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#label_selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_label_keys DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#mismatch_label_keys DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespace_selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespaces DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#topology_key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#label_selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_label_keys DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#mismatch_label_keys DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespace_selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespaces DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#topology_key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#pod_affinity_term DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#weight DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#label_selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_label_keys DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#mismatch_label_keys DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespace_selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespaces DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#topology_key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#node_affinity DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#pod_affinity DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#pod_anti_affinity DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinity;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#effect DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#toleration_seconds DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerationsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerationsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerationsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedScheduling {
  /**
  * If specified, the pod's scheduling constraints. For documentation, refer to https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#affinity DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#affinity}
  */
  readonly affinity?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinity;
  /**
  * 'nodeSelector' allows scheduling of pods only onto nodes that have each of the specified labels. For documentation, refer to https://kubernetes.io/docs/concepts/configuration/assign-pod-node/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#node_selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * If specified, indicates the pod's priority. For documentation, refer to https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#how-to-use-priority-and-preemption. If not specified, default priority is used, or zero if there is no default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#priority_class_name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * 'tolerations' is a list of tolerations that allow the pod to schedule onto nodes with matching taints. For documentation, refer to https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#tolerations DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#tolerations}
  */
  readonly tolerations?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerations[] | cdktf.IResolvable;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityToTerraform(struct!.affinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    tolerations: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinity",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedScheduling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedScheduling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._nodeSelector = undefined;
      this._priorityClassName = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._nodeSelector = value.nodeSelector;
      this._priorityClassName = value.priorityClassName;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworks {
  /**
  * 'index' is a list of fields to use for indexing the pods. They should form a unique Pod identifier across the cluster. Can be any of: MAC, IP, Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#index DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#index}
  */
  readonly index: string[];
  /**
  * 'name' should match the network name as visible in the pods annotation 'k8s.v1.cni.cncf.io/network-status'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworksToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworksToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.index),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._name = value.name;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string[]; 
  public get index() {
    return this.getListAttribute('index');
  }
  public set index(value: string[]) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworksList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworksOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvanced {
  /**
  * 'conversationEndTimeout' is the time to wait after a network flow is received, to consider the conversation ended. This delay is ignored when a FIN packet is collected for TCP flows (see 'conversationTerminatingTimeout' instead).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#conversation_end_timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#conversation_end_timeout}
  */
  readonly conversationEndTimeout?: string;
  /**
  * 'conversationHeartbeatInterval' is the time to wait between 'tick' events of a conversation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#conversation_heartbeat_interval DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#conversation_heartbeat_interval}
  */
  readonly conversationHeartbeatInterval?: string;
  /**
  * 'conversationTerminatingTimeout' is the time to wait from detected FIN flag to end a conversation. Only relevant for TCP flows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#conversation_terminating_timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#conversation_terminating_timeout}
  */
  readonly conversationTerminatingTimeout?: string;
  /**
  * 'dropUnusedFields' [deprecated (*)] this setting is not used anymore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#drop_unused_fields DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#drop_unused_fields}
  */
  readonly dropUnusedFields?: boolean | cdktf.IResolvable;
  /**
  * 'enableKubeProbes' is a flag to enable or disable Kubernetes liveness and readiness probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#enable_kube_probes DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#enable_kube_probes}
  */
  readonly enableKubeProbes?: boolean | cdktf.IResolvable;
  /**
  * 'env' allows passing custom environment variables to underlying components. Useful for passing some very concrete performance-tuning options, such as 'GOGC' and 'GOMAXPROCS', that should not be publicly exposed as part of the FlowCollector descriptor, as they are only useful in edge debug or support scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#env DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * 'healthPort' is a collector HTTP port in the Pod that exposes the health check API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#health_port DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#health_port}
  */
  readonly healthPort?: number;
  /**
  * Port of the flow collector (host port). By convention, some values are forbidden. It must be greater than 1024 and different from 4500, 4789 and 6081.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#port DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * 'profilePort' allows setting up a Go pprof profiler listening to this port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#profile_port DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#profile_port}
  */
  readonly profilePort?: number;
  /**
  * scheduling controls how the pods are scheduled on nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#scheduling DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#scheduling}
  */
  readonly scheduling?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedScheduling;
  /**
  * Define secondary networks to be checked for resources identification. In order to guarantee a correct identification, it is important that the indexed values form an unique identifier across the cluster. If there are collisions in the indexes (same index used by several resources), those resources might be wrongly labelled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#secondary_networks DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#secondary_networks}
  */
  readonly secondaryNetworks?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworks[] | cdktf.IResolvable;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversation_end_timeout: cdktf.stringToTerraform(struct!.conversationEndTimeout),
    conversation_heartbeat_interval: cdktf.stringToTerraform(struct!.conversationHeartbeatInterval),
    conversation_terminating_timeout: cdktf.stringToTerraform(struct!.conversationTerminatingTimeout),
    drop_unused_fields: cdktf.booleanToTerraform(struct!.dropUnusedFields),
    enable_kube_probes: cdktf.booleanToTerraform(struct!.enableKubeProbes),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    health_port: cdktf.numberToTerraform(struct!.healthPort),
    port: cdktf.numberToTerraform(struct!.port),
    profile_port: cdktf.numberToTerraform(struct!.profilePort),
    scheduling: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingToTerraform(struct!.scheduling),
    secondary_networks: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworksToTerraform, false)(struct!.secondaryNetworks),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conversation_end_timeout: {
      value: cdktf.stringToHclTerraform(struct!.conversationEndTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conversation_heartbeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.conversationHeartbeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conversation_terminating_timeout: {
      value: cdktf.stringToHclTerraform(struct!.conversationTerminatingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_unused_fields: {
      value: cdktf.booleanToHclTerraform(struct!.dropUnusedFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_kube_probes: {
      value: cdktf.booleanToHclTerraform(struct!.enableKubeProbes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    health_port: {
      value: cdktf.numberToHclTerraform(struct!.healthPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile_port: {
      value: cdktf.numberToHclTerraform(struct!.profilePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheduling: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingToHclTerraform(struct!.scheduling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedScheduling",
    },
    secondary_networks: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworksToHclTerraform, false)(struct!.secondaryNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvanced | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversationEndTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationEndTimeout = this._conversationEndTimeout;
    }
    if (this._conversationHeartbeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationHeartbeatInterval = this._conversationHeartbeatInterval;
    }
    if (this._conversationTerminatingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationTerminatingTimeout = this._conversationTerminatingTimeout;
    }
    if (this._dropUnusedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropUnusedFields = this._dropUnusedFields;
    }
    if (this._enableKubeProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKubeProbes = this._enableKubeProbes;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._healthPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthPort = this._healthPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._profilePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilePort = this._profilePort;
    }
    if (this._scheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduling = this._scheduling?.internalValue;
    }
    if (this._secondaryNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryNetworks = this._secondaryNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvanced | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conversationEndTimeout = undefined;
      this._conversationHeartbeatInterval = undefined;
      this._conversationTerminatingTimeout = undefined;
      this._dropUnusedFields = undefined;
      this._enableKubeProbes = undefined;
      this._env = undefined;
      this._healthPort = undefined;
      this._port = undefined;
      this._profilePort = undefined;
      this._scheduling.internalValue = undefined;
      this._secondaryNetworks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conversationEndTimeout = value.conversationEndTimeout;
      this._conversationHeartbeatInterval = value.conversationHeartbeatInterval;
      this._conversationTerminatingTimeout = value.conversationTerminatingTimeout;
      this._dropUnusedFields = value.dropUnusedFields;
      this._enableKubeProbes = value.enableKubeProbes;
      this._env = value.env;
      this._healthPort = value.healthPort;
      this._port = value.port;
      this._profilePort = value.profilePort;
      this._scheduling.internalValue = value.scheduling;
      this._secondaryNetworks.internalValue = value.secondaryNetworks;
    }
  }

  // conversation_end_timeout - computed: false, optional: true, required: false
  private _conversationEndTimeout?: string; 
  public get conversationEndTimeout() {
    return this.getStringAttribute('conversation_end_timeout');
  }
  public set conversationEndTimeout(value: string) {
    this._conversationEndTimeout = value;
  }
  public resetConversationEndTimeout() {
    this._conversationEndTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationEndTimeoutInput() {
    return this._conversationEndTimeout;
  }

  // conversation_heartbeat_interval - computed: false, optional: true, required: false
  private _conversationHeartbeatInterval?: string; 
  public get conversationHeartbeatInterval() {
    return this.getStringAttribute('conversation_heartbeat_interval');
  }
  public set conversationHeartbeatInterval(value: string) {
    this._conversationHeartbeatInterval = value;
  }
  public resetConversationHeartbeatInterval() {
    this._conversationHeartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationHeartbeatIntervalInput() {
    return this._conversationHeartbeatInterval;
  }

  // conversation_terminating_timeout - computed: false, optional: true, required: false
  private _conversationTerminatingTimeout?: string; 
  public get conversationTerminatingTimeout() {
    return this.getStringAttribute('conversation_terminating_timeout');
  }
  public set conversationTerminatingTimeout(value: string) {
    this._conversationTerminatingTimeout = value;
  }
  public resetConversationTerminatingTimeout() {
    this._conversationTerminatingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationTerminatingTimeoutInput() {
    return this._conversationTerminatingTimeout;
  }

  // drop_unused_fields - computed: false, optional: true, required: false
  private _dropUnusedFields?: boolean | cdktf.IResolvable; 
  public get dropUnusedFields() {
    return this.getBooleanAttribute('drop_unused_fields');
  }
  public set dropUnusedFields(value: boolean | cdktf.IResolvable) {
    this._dropUnusedFields = value;
  }
  public resetDropUnusedFields() {
    this._dropUnusedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUnusedFieldsInput() {
    return this._dropUnusedFields;
  }

  // enable_kube_probes - computed: false, optional: true, required: false
  private _enableKubeProbes?: boolean | cdktf.IResolvable; 
  public get enableKubeProbes() {
    return this.getBooleanAttribute('enable_kube_probes');
  }
  public set enableKubeProbes(value: boolean | cdktf.IResolvable) {
    this._enableKubeProbes = value;
  }
  public resetEnableKubeProbes() {
    this._enableKubeProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubeProbesInput() {
    return this._enableKubeProbes;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // health_port - computed: false, optional: true, required: false
  private _healthPort?: number; 
  public get healthPort() {
    return this.getNumberAttribute('health_port');
  }
  public set healthPort(value: number) {
    this._healthPort = value;
  }
  public resetHealthPort() {
    this._healthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPortInput() {
    return this._healthPort;
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

  // profile_port - computed: false, optional: true, required: false
  private _profilePort?: number; 
  public get profilePort() {
    return this.getNumberAttribute('profile_port');
  }
  public set profilePort(value: number) {
    this._profilePort = value;
  }
  public resetProfilePort() {
    this._profilePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePortInput() {
    return this._profilePort;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // secondary_networks - computed: false, optional: true, required: false
  private _secondaryNetworks = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworksList(this, "secondary_networks", false);
  public get secondaryNetworks() {
    return this._secondaryNetworks;
  }
  public putSecondaryNetworks(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedSecondaryNetworks[] | cdktf.IResolvable) {
    this._secondaryNetworks.internalValue = value;
  }
  public resetSecondaryNetworks() {
    this._secondaryNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryNetworksInput() {
    return this._secondaryNetworks.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#container DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._name = value.name;
      this._target.internalValue = value.target;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#api_version DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#kind DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#described_object DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#described_object}
  */
  readonly describedObject: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    described_object: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToTerraform(struct!.describedObject),
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    described_object: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToHclTerraform(struct!.describedObject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject",
    },
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._describedObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.describedObject = this._describedObject?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = value.describedObject;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // described_object - computed: false, optional: false, required: true
  private _describedObject = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectOutputReference(this, "described_object");
  public get describedObject() {
    return this._describedObject;
  }
  public putDescribedObject(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject) {
    this._describedObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describedObjectInput() {
    return this._describedObject.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable): any {
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
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._target.internalValue = value.target;
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#container_resource DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#container_resource}
  */
  readonly containerResource?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#external DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#external}
  */
  readonly external?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#object DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#object}
  */
  readonly object?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#pods DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#pods}
  */
  readonly pods?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#resource DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#resource}
  */
  readonly resource?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_resource: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToTerraform(struct!.containerResource),
    external: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToTerraform(struct!.external),
    object: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToTerraform(struct!.object),
    pods: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToTerraform(struct!.pods),
    resource: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_resource: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToHclTerraform(struct!.containerResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource",
    },
    external: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal",
    },
    object: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject",
    },
    pods: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods",
    },
    resource: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResource = this._containerResource?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = undefined;
      this._external.internalValue = undefined;
      this._object.internalValue = undefined;
      this._pods.internalValue = undefined;
      this._resource.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = value.containerResource;
      this._external.internalValue = value.external;
      this._object.internalValue = value.object;
      this._pods.internalValue = value.pods;
      this._resource.internalValue = value.resource;
      this._type = value.type;
    }
  }

  // container_resource - computed: false, optional: true, required: false
  private _containerResource = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceOutputReference(this, "container_resource");
  public get containerResource() {
    return this._containerResource;
  }
  public putContainerResource(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource) {
    this._containerResource.internalValue = value;
  }
  public resetContainerResource() {
    this._containerResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourceInput() {
    return this._containerResource.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // object - computed: false, optional: true, required: false
  private _object = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
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
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscaler {
  /**
  * 'maxReplicas' is the upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#max_replicas DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Metrics used by the pod autoscaler. For documentation, refer to https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/horizontal-pod-autoscaler-v2/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#metrics DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#metrics}
  */
  readonly metrics?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetrics[] | cdktf.IResolvable;
  /**
  * 'minReplicas' is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod. minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured. Scaling is active as long as at least one metric value is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#min_replicas DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * 'status' describes the desired status regarding deploying an horizontal pod autoscaler.<br> - 'Disabled' does not deploy an horizontal pod autoscaler.<br> - 'Enabled' deploys an horizontal pod autoscaler.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#status DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    metrics: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToTerraform, false)(struct!.metrics),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsList",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReplicas = undefined;
      this._metrics.internalValue = undefined;
      this._minReplicas = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReplicas = value.maxReplicas;
      this._metrics.internalValue = value.metrics;
      this._minReplicas = value.minReplicas;
      this._status = value.status;
    }
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvided {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFile {
  /**
  * File name within the config map or secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFileToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFileToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTls {
  /**
  * 'insecureSkipVerify' allows skipping client-side verification of the provided certificate. If set to 'true', the 'providedCaFile' field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * TLS configuration when 'type' is set to 'Provided'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#provided DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#provided}
  */
  readonly provided?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvided;
  /**
  * Reference to the CA file when 'type' is set to 'Provided'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#provided_ca_file DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#provided_ca_file}
  */
  readonly providedCaFile?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFile;
  /**
  * Select the type of TLS configuration:<br> - 'Disabled' (default) to not configure TLS for the endpoint. - 'Provided' to manually provide cert file and a key file. [Unsupported (*)]. - 'Auto' to use OpenShift auto generated certificate using annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    provided: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedToTerraform(struct!.provided),
    provided_ca_file: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFileToTerraform(struct!.providedCaFile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provided: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedToHclTerraform(struct!.provided),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvided",
    },
    provided_ca_file: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFileToHclTerraform(struct!.providedCaFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFile",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._provided?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provided = this._provided?.internalValue;
    }
    if (this._providedCaFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providedCaFile = this._providedCaFile?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecureSkipVerify = undefined;
      this._provided.internalValue = undefined;
      this._providedCaFile.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._provided.internalValue = value.provided;
      this._providedCaFile.internalValue = value.providedCaFile;
      this._type = value.type;
    }
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

  // provided - computed: false, optional: true, required: false
  private _provided = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedOutputReference(this, "provided");
  public get provided() {
    return this._provided;
  }
  public putProvided(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvided) {
    this._provided.internalValue = value;
  }
  public resetProvided() {
    this._provided.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedInput() {
    return this._provided.internalValue;
  }

  // provided_ca_file - computed: false, optional: true, required: false
  private _providedCaFile = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFileOutputReference(this, "provided_ca_file");
  public get providedCaFile() {
    return this._providedCaFile;
  }
  public putProvidedCaFile(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsProvidedCaFile) {
    this._providedCaFile.internalValue = value;
  }
  public resetProvidedCaFile() {
    this._providedCaFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedCaFileInput() {
    return this._providedCaFile.internalValue;
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
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServer {
  /**
  * The metrics server HTTP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#port DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTls;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsToTerraform(struct!.tls),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
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

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetrics {
  /**
  * 'disableAlerts' is a list of alerts that should be disabled. Possible values are:<br> 'NetObservNoFlows', which is triggered when no flows are being observed for a certain period.<br> 'NetObservLokiError', which is triggered when flows are being dropped due to Loki errors.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#disable_alerts DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#disable_alerts}
  */
  readonly disableAlerts?: string[];
  /**
  * 'includeList' is a list of metric names to specify which ones to generate. The names correspond to the names in Prometheus without the prefix. For example, 'namespace_egress_packets_total' shows up as 'netobserv_namespace_egress_packets_total' in Prometheus. Note that the more metrics you add, the bigger is the impact on Prometheus workload resources. Metrics enabled by default are: 'namespace_flows_total', 'node_ingress_bytes_total', 'node_egress_bytes_total', 'workload_ingress_bytes_total', 'workload_egress_bytes_total', 'namespace_drop_packets_total' (when 'PacketDrop' feature is enabled), 'namespace_rtt_seconds' (when 'FlowRTT' feature is enabled), 'namespace_dns_latency_seconds' (when 'DNSTracking' feature is enabled). More information, with full list of available metrics: https://github.com/netobserv/network-observability-operator/blob/main/docs/Metrics.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#include_list DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#include_list}
  */
  readonly includeList?: string[];
  /**
  * Metrics server endpoint configuration for Prometheus scraper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#server DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#server}
  */
  readonly server?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServer;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_alerts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disableAlerts),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
    server: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerToTerraform(struct!.server),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_alerts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disableAlerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAlerts = this._disableAlerts;
    }
    if (this._includeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeList = this._includeList;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableAlerts = undefined;
      this._includeList = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableAlerts = value.disableAlerts;
      this._includeList = value.includeList;
      this._server.internalValue = value.server;
    }
  }

  // disable_alerts - computed: false, optional: true, required: false
  private _disableAlerts?: string[]; 
  public get disableAlerts() {
    return this.getListAttribute('disable_alerts');
  }
  public set disableAlerts(value: string[]) {
    this._disableAlerts = value;
  }
  public resetDisableAlerts() {
    this._disableAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAlertsInput() {
    return this._disableAlerts;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return this.getListAttribute('include_list');
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#request DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaimsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaimsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaimsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#claims DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#claims}
  */
  readonly claims?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#limits DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#requests DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabels {
  /**
  * List of CIDRs, such as '['1.2.3.4/32']'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#cidrs DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#cidrs}
  */
  readonly cidrs: string[];
  /**
  * Label name, used to flag matching flows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabelsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabelsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrs = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrs = value.cidrs;
      this._name = value.name;
    }
  }

  // cidrs - computed: false, optional: false, required: true
  private _cidrs?: string[]; 
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
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
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabelsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabels[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabelsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabels {
  /**
  * 'customLabels' allows to customize subnets and IPs labelling, such as to identify cluster-external workloads or web services. If you enable 'openShiftAutoDetect', 'customLabels' can override the detected subnets in case they overlap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#custom_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#custom_labels}
  */
  readonly customLabels?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabels[] | cdktf.IResolvable;
  /**
  * 'openShiftAutoDetect' allows, when set to 'true', to detect automatically the machines, pods and services subnets based on the OpenShift install configuration and the Cluster Network Operator configuration. Indirectly, this is a way to accurately detect external traffic: flows that are not labeled for those subnets are external to the cluster. Enabled by default on OpenShift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#open_shift_auto_detect DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#open_shift_auto_detect}
  */
  readonly openShiftAutoDetect?: boolean | cdktf.IResolvable;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_labels: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabelsToTerraform, false)(struct!.customLabels),
    open_shift_auto_detect: cdktf.booleanToTerraform(struct!.openShiftAutoDetect),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_labels: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabelsToHclTerraform, false)(struct!.customLabels),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabelsList",
    },
    open_shift_auto_detect: {
      value: cdktf.booleanToHclTerraform(struct!.openShiftAutoDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabels = this._customLabels?.internalValue;
    }
    if (this._openShiftAutoDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.openShiftAutoDetect = this._openShiftAutoDetect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customLabels.internalValue = undefined;
      this._openShiftAutoDetect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customLabels.internalValue = value.customLabels;
      this._openShiftAutoDetect = value.openShiftAutoDetect;
    }
  }

  // custom_labels - computed: false, optional: true, required: false
  private _customLabels = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabelsList(this, "custom_labels", false);
  public get customLabels() {
    return this._customLabels;
  }
  public putCustomLabels(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsCustomLabels[] | cdktf.IResolvable) {
    this._customLabels.internalValue = value;
  }
  public resetCustomLabels() {
    this._customLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelsInput() {
    return this._customLabels.internalValue;
  }

  // open_shift_auto_detect - computed: false, optional: true, required: false
  private _openShiftAutoDetect?: boolean | cdktf.IResolvable; 
  public get openShiftAutoDetect() {
    return this.getBooleanAttribute('open_shift_auto_detect');
  }
  public set openShiftAutoDetect(value: boolean | cdktf.IResolvable) {
    this._openShiftAutoDetect = value;
  }
  public resetOpenShiftAutoDetect() {
    this._openShiftAutoDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openShiftAutoDetectInput() {
    return this._openShiftAutoDetect;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessor {
  /**
  * 'addZone' allows availability zone awareness by labelling flows with their source and destination zones. This feature requires the 'topology.kubernetes.io/zone' label to be set on nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#add_zone DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#add_zone}
  */
  readonly addZone?: boolean | cdktf.IResolvable;
  /**
  * 'advanced' allows setting some aspects of the internal configuration of the flow processor. This section is aimed mostly for debugging and fine-grained performance optimizations, such as 'GOGC' and 'GOMAXPROCS' env vars. Set these values at your own risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#advanced DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#advanced}
  */
  readonly advanced?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvanced;
  /**
  * 'clusterName' is the name of the cluster to appear in the flows data. This is useful in a multi-cluster context. When using OpenShift, leave empty to make it automatically determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#cluster_name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * 'imagePullPolicy' is the Kubernetes pull policy for the image defined above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#image_pull_policy DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * 'kafkaConsumerAutoscaler' is the spec of a horizontal pod autoscaler to set up for 'flowlogs-pipeline-transformer', which consumes Kafka messages. This setting is ignored when Kafka is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#kafka_consumer_autoscaler DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#kafka_consumer_autoscaler}
  */
  readonly kafkaConsumerAutoscaler?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscaler;
  /**
  * 'kafkaConsumerBatchSize' indicates to the broker the maximum batch size, in bytes, that the consumer accepts. Ignored when not using Kafka. Default: 10MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#kafka_consumer_batch_size DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#kafka_consumer_batch_size}
  */
  readonly kafkaConsumerBatchSize?: number;
  /**
  * 'kafkaConsumerQueueCapacity' defines the capacity of the internal message queue used in the Kafka consumer client. Ignored when not using Kafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#kafka_consumer_queue_capacity DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#kafka_consumer_queue_capacity}
  */
  readonly kafkaConsumerQueueCapacity?: number;
  /**
  * 'kafkaConsumerReplicas' defines the number of replicas (pods) to start for 'flowlogs-pipeline-transformer', which consumes Kafka messages. This setting is ignored when Kafka is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#kafka_consumer_replicas DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#kafka_consumer_replicas}
  */
  readonly kafkaConsumerReplicas?: number;
  /**
  * 'logLevel' of the processor runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#log_level DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * 'logTypes' defines the desired record types to generate. Possible values are:<br> - 'Flows' (default) to export regular network flows<br> - 'Conversations' to generate events for started conversations, ended conversations as well as periodic 'tick' updates<br> - 'EndedConversations' to generate only ended conversations events<br> - 'All' to generate both network flows and all conversations events<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#log_types DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#log_types}
  */
  readonly logTypes?: string;
  /**
  * 'Metrics' define the processor configuration regarding metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#metrics DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#metrics}
  */
  readonly metrics?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetrics;
  /**
  * Set 'multiClusterDeployment' to 'true' to enable multi clusters feature. This adds 'clusterName' label to flows data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#multi_cluster_deployment DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#multi_cluster_deployment}
  */
  readonly multiClusterDeployment?: boolean | cdktf.IResolvable;
  /**
  * 'resources' are the compute resources required by this container. For more information, see https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#resources DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#resources}
  */
  readonly resources?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResources;
  /**
  * 'subnetLabels' allows to define custom labels on subnets and IPs or to enable automatic labelling of recognized subnets in OpenShift, which is used to identify cluster external traffic. When a subnet matches the source or destination IP of a flow, a corresponding field is added: 'SrcSubnetLabel' or 'DstSubnetLabel'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#subnet_labels DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#subnet_labels}
  */
  readonly subnetLabels?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabels;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_zone: cdktf.booleanToTerraform(struct!.addZone),
    advanced: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedToTerraform(struct!.advanced),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    kafka_consumer_autoscaler: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerToTerraform(struct!.kafkaConsumerAutoscaler),
    kafka_consumer_batch_size: cdktf.numberToTerraform(struct!.kafkaConsumerBatchSize),
    kafka_consumer_queue_capacity: cdktf.numberToTerraform(struct!.kafkaConsumerQueueCapacity),
    kafka_consumer_replicas: cdktf.numberToTerraform(struct!.kafkaConsumerReplicas),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    log_types: cdktf.stringToTerraform(struct!.logTypes),
    metrics: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsToTerraform(struct!.metrics),
    multi_cluster_deployment: cdktf.booleanToTerraform(struct!.multiClusterDeployment),
    resources: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesToTerraform(struct!.resources),
    subnet_labels: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsToTerraform(struct!.subnetLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_zone: {
      value: cdktf.booleanToHclTerraform(struct!.addZone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advanced: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedToHclTerraform(struct!.advanced),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvanced",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_consumer_autoscaler: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerToHclTerraform(struct!.kafkaConsumerAutoscaler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscaler",
    },
    kafka_consumer_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_consumer_queue_capacity: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerQueueCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_consumer_replicas: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_types: {
      value: cdktf.stringToHclTerraform(struct!.logTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetrics",
    },
    multi_cluster_deployment: {
      value: cdktf.booleanToHclTerraform(struct!.multiClusterDeployment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResources",
    },
    subnet_labels: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsToHclTerraform(struct!.subnetLabels),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabels",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.addZone = this._addZone;
    }
    if (this._advanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advanced = this._advanced?.internalValue;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._kafkaConsumerAutoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerAutoscaler = this._kafkaConsumerAutoscaler?.internalValue;
    }
    if (this._kafkaConsumerBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerBatchSize = this._kafkaConsumerBatchSize;
    }
    if (this._kafkaConsumerQueueCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerQueueCapacity = this._kafkaConsumerQueueCapacity;
    }
    if (this._kafkaConsumerReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerReplicas = this._kafkaConsumerReplicas;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._logTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._multiClusterDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiClusterDeployment = this._multiClusterDeployment;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._subnetLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetLabels = this._subnetLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addZone = undefined;
      this._advanced.internalValue = undefined;
      this._clusterName = undefined;
      this._imagePullPolicy = undefined;
      this._kafkaConsumerAutoscaler.internalValue = undefined;
      this._kafkaConsumerBatchSize = undefined;
      this._kafkaConsumerQueueCapacity = undefined;
      this._kafkaConsumerReplicas = undefined;
      this._logLevel = undefined;
      this._logTypes = undefined;
      this._metrics.internalValue = undefined;
      this._multiClusterDeployment = undefined;
      this._resources.internalValue = undefined;
      this._subnetLabels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addZone = value.addZone;
      this._advanced.internalValue = value.advanced;
      this._clusterName = value.clusterName;
      this._imagePullPolicy = value.imagePullPolicy;
      this._kafkaConsumerAutoscaler.internalValue = value.kafkaConsumerAutoscaler;
      this._kafkaConsumerBatchSize = value.kafkaConsumerBatchSize;
      this._kafkaConsumerQueueCapacity = value.kafkaConsumerQueueCapacity;
      this._kafkaConsumerReplicas = value.kafkaConsumerReplicas;
      this._logLevel = value.logLevel;
      this._logTypes = value.logTypes;
      this._metrics.internalValue = value.metrics;
      this._multiClusterDeployment = value.multiClusterDeployment;
      this._resources.internalValue = value.resources;
      this._subnetLabels.internalValue = value.subnetLabels;
    }
  }

  // add_zone - computed: false, optional: true, required: false
  private _addZone?: boolean | cdktf.IResolvable; 
  public get addZone() {
    return this.getBooleanAttribute('add_zone');
  }
  public set addZone(value: boolean | cdktf.IResolvable) {
    this._addZone = value;
  }
  public resetAddZone() {
    this._addZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addZoneInput() {
    return this._addZone;
  }

  // advanced - computed: false, optional: true, required: false
  private _advanced = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvancedOutputReference(this, "advanced");
  public get advanced() {
    return this._advanced;
  }
  public putAdvanced(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorAdvanced) {
    this._advanced.internalValue = value;
  }
  public resetAdvanced() {
    this._advanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedInput() {
    return this._advanced.internalValue;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // kafka_consumer_autoscaler - computed: false, optional: true, required: false
  private _kafkaConsumerAutoscaler = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscalerOutputReference(this, "kafka_consumer_autoscaler");
  public get kafkaConsumerAutoscaler() {
    return this._kafkaConsumerAutoscaler;
  }
  public putKafkaConsumerAutoscaler(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorKafkaConsumerAutoscaler) {
    this._kafkaConsumerAutoscaler.internalValue = value;
  }
  public resetKafkaConsumerAutoscaler() {
    this._kafkaConsumerAutoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerAutoscalerInput() {
    return this._kafkaConsumerAutoscaler.internalValue;
  }

  // kafka_consumer_batch_size - computed: false, optional: true, required: false
  private _kafkaConsumerBatchSize?: number; 
  public get kafkaConsumerBatchSize() {
    return this.getNumberAttribute('kafka_consumer_batch_size');
  }
  public set kafkaConsumerBatchSize(value: number) {
    this._kafkaConsumerBatchSize = value;
  }
  public resetKafkaConsumerBatchSize() {
    this._kafkaConsumerBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerBatchSizeInput() {
    return this._kafkaConsumerBatchSize;
  }

  // kafka_consumer_queue_capacity - computed: false, optional: true, required: false
  private _kafkaConsumerQueueCapacity?: number; 
  public get kafkaConsumerQueueCapacity() {
    return this.getNumberAttribute('kafka_consumer_queue_capacity');
  }
  public set kafkaConsumerQueueCapacity(value: number) {
    this._kafkaConsumerQueueCapacity = value;
  }
  public resetKafkaConsumerQueueCapacity() {
    this._kafkaConsumerQueueCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerQueueCapacityInput() {
    return this._kafkaConsumerQueueCapacity;
  }

  // kafka_consumer_replicas - computed: false, optional: true, required: false
  private _kafkaConsumerReplicas?: number; 
  public get kafkaConsumerReplicas() {
    return this.getNumberAttribute('kafka_consumer_replicas');
  }
  public set kafkaConsumerReplicas(value: number) {
    this._kafkaConsumerReplicas = value;
  }
  public resetKafkaConsumerReplicas() {
    this._kafkaConsumerReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerReplicasInput() {
    return this._kafkaConsumerReplicas;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // log_types - computed: false, optional: true, required: false
  private _logTypes?: string; 
  public get logTypes() {
    return this.getStringAttribute('log_types');
  }
  public set logTypes(value: string) {
    this._logTypes = value;
  }
  public resetLogTypes() {
    this._logTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // multi_cluster_deployment - computed: false, optional: true, required: false
  private _multiClusterDeployment?: boolean | cdktf.IResolvable; 
  public get multiClusterDeployment() {
    return this.getBooleanAttribute('multi_cluster_deployment');
  }
  public set multiClusterDeployment(value: boolean | cdktf.IResolvable) {
    this._multiClusterDeployment = value;
  }
  public resetMultiClusterDeployment() {
    this._multiClusterDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClusterDeploymentInput() {
    return this._multiClusterDeployment;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // subnet_labels - computed: false, optional: true, required: false
  private _subnetLabels = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabelsOutputReference(this, "subnet_labels");
  public get subnetLabels() {
    return this._subnetLabels;
  }
  public putSubnetLabels(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorSubnetLabels) {
    this._subnetLabels.internalValue = value;
  }
  public resetSubnetLabels() {
    this._subnetLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetLabelsInput() {
    return this._subnetLabels.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCert {
  /**
  * 'certFile' defines the path to the certificate file name within the config map or secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * 'certKey' defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * Name of the config map or secret containing certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing certificates. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the certificate reference: 'configmap' or 'secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTls {
  /**
  * 'caCert' defines the reference of the certificate for the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#ca_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#ca_cert}
  */
  readonly caCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCert;
  /**
  * Enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * 'insecureSkipVerify' allows skipping client-side verification of the server certificate. If set to 'true', the 'caCert' field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * 'userCert' defines the user certificate reference and is used for mTLS (you can ignore it when using one-way TLS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#user_cert DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#user_cert}
  */
  readonly userCert?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCert;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCertToTerraform(struct!.caCert),
    enable: cdktf.booleanToTerraform(struct!.enable),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    user_cert: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCertToTerraform(struct!.userCert),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCert",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCertToHclTerraform(struct!.userCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._userCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCert = this._userCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
      this._enable = undefined;
      this._insecureSkipVerify = undefined;
      this._userCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
      this._enable = value.enable;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._userCert.internalValue = value.userCert;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsCaCert) {
    this._caCert.internalValue = value;
  }
  public resetCaCert() {
    this._caCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // user_cert - computed: false, optional: true, required: false
  private _userCert = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCertOutputReference(this, "user_cert");
  public get userCert() {
    return this._userCert;
  }
  public putUserCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsUserCert) {
    this._userCert.internalValue = value;
  }
  public resetUserCert() {
    this._userCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManual {
  /**
  * Set 'true' to forward logged in user token in queries to Prometheus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#forward_user_token DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#forward_user_token}
  */
  readonly forwardUserToken?: boolean | cdktf.IResolvable;
  /**
  * TLS client configuration for Prometheus URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTls;
  /**
  * 'url' is the address of an existing Prometheus service to use for querying metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#url DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_user_token: cdktf.booleanToTerraform(struct!.forwardUserToken),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsToTerraform(struct!.tls),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_user_token: {
      value: cdktf.booleanToHclTerraform(struct!.forwardUserToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTls",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardUserToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardUserToken = this._forwardUserToken;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardUserToken = undefined;
      this._tls.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardUserToken = value.forwardUserToken;
      this._tls.internalValue = value.tls;
      this._url = value.url;
    }
  }

  // forward_user_token - computed: false, optional: true, required: false
  private _forwardUserToken?: boolean | cdktf.IResolvable; 
  public get forwardUserToken() {
    return this.getBooleanAttribute('forward_user_token');
  }
  public set forwardUserToken(value: boolean | cdktf.IResolvable) {
    this._forwardUserToken = value;
  }
  public resetForwardUserToken() {
    this._forwardUserToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUserTokenInput() {
    return this._forwardUserToken;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerier {
  /**
  * When 'enable' is 'true', the Console plugin queries flow metrics from Prometheus instead of Loki whenever possible. It is enbaled by default: set it to 'false' to disable this feature. The Console plugin can use either Loki or Prometheus as a data source for metrics (see also 'spec.loki'), or both. Not all queries are transposable from Loki to Prometheus. Hence, if Loki is disabled, some features of the plugin are disabled as well, such as getting per-pod information or viewing raw flows. If both Prometheus and Loki are enabled, Prometheus takes precedence and Loki is used as a fallback for queries that Prometheus cannot handle. If they are both disabled, the Console plugin is not deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Prometheus configuration for 'Manual' mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#manual DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#manual}
  */
  readonly manual?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManual;
  /**
  * 'mode' must be set according to the type of Prometheus installation that stores NetObserv metrics:<br> - Use 'Auto' to try configuring automatically. In OpenShift, it uses the Thanos querier from OpenShift Cluster Monitoring<br> - Use 'Manual' for a manual setup<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#mode DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#mode}
  */
  readonly mode: string;
  /**
  * 'timeout' is the read timeout for console plugin queries to Prometheus. A timeout of zero means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#timeout DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    manual: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualToTerraform(struct!.manual),
    mode: cdktf.stringToTerraform(struct!.mode),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManual",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._manual.internalValue = undefined;
      this._mode = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._manual.internalValue = value.manual;
      this._mode = value.mode;
      this._timeout = value.timeout;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheus {
  /**
  * Prometheus querying configuration, such as client settings, used in the Console plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#querier DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#querier}
  */
  readonly querier?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerier;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    querier: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierToTerraform(struct!.querier),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    querier: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierToHclTerraform(struct!.querier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerier",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._querier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.querier = this._querier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._querier.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._querier.internalValue = value.querier;
    }
  }

  // querier - computed: false, optional: true, required: false
  private _querier = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerierOutputReference(this, "querier");
  public get querier() {
    return this._querier;
  }
  public putQuerier(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusQuerier) {
    this._querier.internalValue = value;
  }
  public resetQuerier() {
    this._querier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierInput() {
    return this._querier.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpec {
  /**
  * Agent configuration for flows extraction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#agent DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#agent}
  */
  readonly agent?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecAgent;
  /**
  * 'consolePlugin' defines the settings related to the OpenShift Console plugin, when available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#console_plugin DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#console_plugin}
  */
  readonly consolePlugin?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecConsolePlugin;
  /**
  * 'deploymentModel' defines the desired type of deployment for flow processing. Possible values are:<br> - 'Direct' (default) to make the flow processor listen directly from the agents.<br> - 'Kafka' to make flows sent to a Kafka pipeline before consumption by the processor.<br> Kafka can provide better scalability, resiliency, and high availability (for more details, see https://www.redhat.com/en/topics/integration/what-is-apache-kafka).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#deployment_model DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#deployment_model}
  */
  readonly deploymentModel?: string;
  /**
  * 'exporters' define additional optional exporters for custom consumption or storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#exporters DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#exporters}
  */
  readonly exporters?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecExporters[] | cdktf.IResolvable;
  /**
  * Kafka configuration, allowing to use Kafka as a broker as part of the flow collection pipeline. Available when the 'spec.deploymentModel' is 'Kafka'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#kafka DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#kafka}
  */
  readonly kafka?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecKafka;
  /**
  * 'loki', the flow store, client settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#loki DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#loki}
  */
  readonly loki?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLoki;
  /**
  * Namespace where NetObserv pods are deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * 'networkPolicy' defines ingress network policy settings for NetObserv components isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#network_policy DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#network_policy}
  */
  readonly networkPolicy?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicy;
  /**
  * 'processor' defines the settings of the component that receives the flows from the agent, enriches them, generates metrics, and forwards them to the Loki persistence layer and/or any available exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#processor DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#processor}
  */
  readonly processor?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessor;
  /**
  * 'prometheus' defines Prometheus settings, such as querier configuration used to fetch metrics from the Console plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flows_netobserv_io_flow_collector_v1beta2_manifest#prometheus DataK8SFlowsNetobservIoFlowCollectorV1Beta2Manifest#prometheus}
  */
  readonly prometheus?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheus;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecAgentToTerraform(struct!.agent),
    console_plugin: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecConsolePluginToTerraform(struct!.consolePlugin),
    deployment_model: cdktf.stringToTerraform(struct!.deploymentModel),
    exporters: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecExportersToTerraform, false)(struct!.exporters),
    kafka: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecKafkaToTerraform(struct!.kafka),
    loki: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiToTerraform(struct!.loki),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    network_policy: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicyToTerraform(struct!.networkPolicy),
    processor: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorToTerraform(struct!.processor),
    prometheus: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusToTerraform(struct!.prometheus),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecAgentToHclTerraform(struct!.agent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecAgent",
    },
    console_plugin: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecConsolePluginToHclTerraform(struct!.consolePlugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecConsolePlugin",
    },
    deployment_model: {
      value: cdktf.stringToHclTerraform(struct!.deploymentModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exporters: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecExportersToHclTerraform, false)(struct!.exporters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecExportersList",
    },
    kafka: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecKafka",
    },
    loki: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiToHclTerraform(struct!.loki),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLoki",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_policy: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicyToHclTerraform(struct!.networkPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicy",
    },
    processor: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorToHclTerraform(struct!.processor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessor",
    },
    prometheus: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent?.internalValue;
    }
    if (this._consolePlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolePlugin = this._consolePlugin?.internalValue;
    }
    if (this._deploymentModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentModel = this._deploymentModel;
    }
    if (this._exporters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exporters = this._exporters?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._loki?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loki = this._loki?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._networkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy?.internalValue;
    }
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent.internalValue = undefined;
      this._consolePlugin.internalValue = undefined;
      this._deploymentModel = undefined;
      this._exporters.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._loki.internalValue = undefined;
      this._namespace = undefined;
      this._networkPolicy.internalValue = undefined;
      this._processor.internalValue = undefined;
      this._prometheus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent.internalValue = value.agent;
      this._consolePlugin.internalValue = value.consolePlugin;
      this._deploymentModel = value.deploymentModel;
      this._exporters.internalValue = value.exporters;
      this._kafka.internalValue = value.kafka;
      this._loki.internalValue = value.loki;
      this._namespace = value.namespace;
      this._networkPolicy.internalValue = value.networkPolicy;
      this._processor.internalValue = value.processor;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }
  public putAgent(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecAgent) {
    this._agent.internalValue = value;
  }
  public resetAgent() {
    this._agent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }

  // console_plugin - computed: false, optional: true, required: false
  private _consolePlugin = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecConsolePluginOutputReference(this, "console_plugin");
  public get consolePlugin() {
    return this._consolePlugin;
  }
  public putConsolePlugin(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecConsolePlugin) {
    this._consolePlugin.internalValue = value;
  }
  public resetConsolePlugin() {
    this._consolePlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolePluginInput() {
    return this._consolePlugin.internalValue;
  }

  // deployment_model - computed: false, optional: true, required: false
  private _deploymentModel?: string; 
  public get deploymentModel() {
    return this.getStringAttribute('deployment_model');
  }
  public set deploymentModel(value: string) {
    this._deploymentModel = value;
  }
  public resetDeploymentModel() {
    this._deploymentModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModelInput() {
    return this._deploymentModel;
  }

  // exporters - computed: false, optional: true, required: false
  private _exporters = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecExportersList(this, "exporters", false);
  public get exporters() {
    return this._exporters;
  }
  public putExporters(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecExporters[] | cdktf.IResolvable) {
    this._exporters.internalValue = value;
  }
  public resetExporters() {
    this._exporters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportersInput() {
    return this._exporters.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // loki - computed: false, optional: true, required: false
  private _loki = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLokiOutputReference(this, "loki");
  public get loki() {
    return this._loki;
  }
  public putLoki(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecLoki) {
    this._loki.internalValue = value;
  }
  public resetLoki() {
    this._loki.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lokiInput() {
    return this._loki.internalValue;
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

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecNetworkPolicy) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessorOutputReference(this, "processor");
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecProcessor) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SFlowsNetobservIoFlowCollectorV1Beta2ManifestSpecPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}
