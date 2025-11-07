// https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTalosClusterHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The client configuration data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#client_configuration DataTalosClusterHealth#client_configuration}
  */
  readonly clientConfiguration: DataTalosClusterHealthClientConfiguration;
  /**
  * List of control plane nodes to check for health.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#control_plane_nodes DataTalosClusterHealth#control_plane_nodes}
  */
  readonly controlPlaneNodes: string[];
  /**
  * endpoints to use for the health check client. Use at least one control plane endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#endpoints DataTalosClusterHealth#endpoints}
  */
  readonly endpoints: string[];
  /**
  * Skip Kubernetes component checks, this is useful to check if the nodes has finished booting up and kubelet is running. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#skip_kubernetes_checks DataTalosClusterHealth#skip_kubernetes_checks}
  */
  readonly skipKubernetesChecks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#timeouts DataTalosClusterHealth#timeouts}
  */
  readonly timeouts?: DataTalosClusterHealthTimeouts;
  /**
  * List of worker nodes to check for health.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#worker_nodes DataTalosClusterHealth#worker_nodes}
  */
  readonly workerNodes?: string[];
}
export interface DataTalosClusterHealthClientConfiguration {
  /**
  * The client CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#ca_certificate DataTalosClusterHealth#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * The client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#client_certificate DataTalosClusterHealth#client_certificate}
  */
  readonly clientCertificate: string;
  /**
  * The client key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#client_key DataTalosClusterHealth#client_key}
  */
  readonly clientKey: string;
}

export function dataTalosClusterHealthClientConfigurationToTerraform(struct?: DataTalosClusterHealthClientConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}


export function dataTalosClusterHealthClientConfigurationToHclTerraform(struct?: DataTalosClusterHealthClientConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosClusterHealthClientConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosClusterHealthClientConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosClusterHealthClientConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: false, required: true
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: false, required: true
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }
}
export interface DataTalosClusterHealthTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#read DataTalosClusterHealth#read}
  */
  readonly read?: string;
}

export function dataTalosClusterHealthTimeoutsToTerraform(struct?: DataTalosClusterHealthTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataTalosClusterHealthTimeoutsToHclTerraform(struct?: DataTalosClusterHealthTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTalosClusterHealthTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosClusterHealthTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosClusterHealthTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health talos_cluster_health}
*/
export class DataTalosClusterHealth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "talos_cluster_health";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTalosClusterHealth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTalosClusterHealth to import
  * @param importFromId The id of the existing DataTalosClusterHealth that should be imported. Refer to the {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTalosClusterHealth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "talos_cluster_health", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/cluster_health talos_cluster_health} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTalosClusterHealthConfig
  */
  public constructor(scope: Construct, id: string, config: DataTalosClusterHealthConfig) {
    super(scope, id, {
      terraformResourceType: 'talos_cluster_health',
      terraformGeneratorMetadata: {
        providerName: 'talos',
        providerVersion: '0.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientConfiguration.internalValue = config.clientConfiguration;
    this._controlPlaneNodes = config.controlPlaneNodes;
    this._endpoints = config.endpoints;
    this._skipKubernetesChecks = config.skipKubernetesChecks;
    this._timeouts.internalValue = config.timeouts;
    this._workerNodes = config.workerNodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_configuration - computed: false, optional: false, required: true
  private _clientConfiguration = new DataTalosClusterHealthClientConfigurationOutputReference(this, "client_configuration");
  public get clientConfiguration() {
    return this._clientConfiguration;
  }
  public putClientConfiguration(value: DataTalosClusterHealthClientConfiguration) {
    this._clientConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigurationInput() {
    return this._clientConfiguration.internalValue;
  }

  // control_plane_nodes - computed: false, optional: false, required: true
  private _controlPlaneNodes?: string[]; 
  public get controlPlaneNodes() {
    return this.getListAttribute('control_plane_nodes');
  }
  public set controlPlaneNodes(value: string[]) {
    this._controlPlaneNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodesInput() {
    return this._controlPlaneNodes;
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // skip_kubernetes_checks - computed: false, optional: true, required: false
  private _skipKubernetesChecks?: boolean | cdktf.IResolvable; 
  public get skipKubernetesChecks() {
    return this.getBooleanAttribute('skip_kubernetes_checks');
  }
  public set skipKubernetesChecks(value: boolean | cdktf.IResolvable) {
    this._skipKubernetesChecks = value;
  }
  public resetSkipKubernetesChecks() {
    this._skipKubernetesChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipKubernetesChecksInput() {
    return this._skipKubernetesChecks;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataTalosClusterHealthTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataTalosClusterHealthTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // worker_nodes - computed: false, optional: true, required: false
  private _workerNodes?: string[]; 
  public get workerNodes() {
    return this.getListAttribute('worker_nodes');
  }
  public set workerNodes(value: string[]) {
    this._workerNodes = value;
  }
  public resetWorkerNodes() {
    this._workerNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodesInput() {
    return this._workerNodes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_configuration: dataTalosClusterHealthClientConfigurationToTerraform(this._clientConfiguration.internalValue),
      control_plane_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controlPlaneNodes),
      endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endpoints),
      skip_kubernetes_checks: cdktf.booleanToTerraform(this._skipKubernetesChecks),
      timeouts: dataTalosClusterHealthTimeoutsToTerraform(this._timeouts.internalValue),
      worker_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerNodes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_configuration: {
        value: dataTalosClusterHealthClientConfigurationToHclTerraform(this._clientConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataTalosClusterHealthClientConfiguration",
      },
      control_plane_nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controlPlaneNodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      endpoints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endpoints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_kubernetes_checks: {
        value: cdktf.booleanToHclTerraform(this._skipKubernetesChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dataTalosClusterHealthTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataTalosClusterHealthTimeouts",
      },
      worker_nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerNodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
