// https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTalosClientConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The client configuration data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration#client_configuration DataTalosClientConfiguration#client_configuration}
  */
  readonly clientConfiguration: DataTalosClientConfigurationClientConfiguration;
  /**
  * The name of the cluster in the generated config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration#cluster_name DataTalosClientConfiguration#cluster_name}
  */
  readonly clusterName: string;
  /**
  * endpoints to set in the generated config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration#endpoints DataTalosClientConfiguration#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * nodes to set in the generated config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration#nodes DataTalosClientConfiguration#nodes}
  */
  readonly nodes?: string[];
}
export interface DataTalosClientConfigurationClientConfiguration {
  /**
  * The client CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration#ca_certificate DataTalosClientConfiguration#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * The client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration#client_certificate DataTalosClientConfiguration#client_certificate}
  */
  readonly clientCertificate: string;
  /**
  * The client key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration#client_key DataTalosClientConfiguration#client_key}
  */
  readonly clientKey: string;
}

export function dataTalosClientConfigurationClientConfigurationToTerraform(struct?: DataTalosClientConfigurationClientConfiguration | cdktf.IResolvable): any {
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


export function dataTalosClientConfigurationClientConfigurationToHclTerraform(struct?: DataTalosClientConfigurationClientConfiguration | cdktf.IResolvable): any {
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

export class DataTalosClientConfigurationClientConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosClientConfigurationClientConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTalosClientConfigurationClientConfiguration | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration talos_client_configuration}
*/
export class DataTalosClientConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "talos_client_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTalosClientConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTalosClientConfiguration to import
  * @param importFromId The id of the existing DataTalosClientConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTalosClientConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "talos_client_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/siderolabs/talos/0.10.0/docs/data-sources/client_configuration talos_client_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTalosClientConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataTalosClientConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'talos_client_configuration',
      terraformGeneratorMetadata: {
        providerName: 'talos',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
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
    this._clusterName = config.clusterName;
    this._endpoints = config.endpoints;
    this._nodes = config.nodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_configuration - computed: false, optional: false, required: true
  private _clientConfiguration = new DataTalosClientConfigurationClientConfigurationOutputReference(this, "client_configuration");
  public get clientConfiguration() {
    return this._clientConfiguration;
  }
  public putClientConfiguration(value: DataTalosClientConfigurationClientConfiguration) {
    this._clientConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigurationInput() {
    return this._clientConfiguration.internalValue;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return this.getListAttribute('nodes');
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // talos_config - computed: true, optional: false, required: false
  public get talosConfig() {
    return this.getStringAttribute('talos_config');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_configuration: dataTalosClientConfigurationClientConfigurationToTerraform(this._clientConfiguration.internalValue),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endpoints),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_configuration: {
        value: dataTalosClientConfigurationClientConfigurationToHclTerraform(this._clientConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataTalosClientConfigurationClientConfiguration",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endpoints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
