// https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAnxcloudKubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of CIDRs that should be allowed access to the kubernetes API server. By default there are no IP restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster#apiserver_allowlist DataAnxcloudKubernetesCluster#apiserver_allowlist}
  */
  readonly apiserverAllowlist?: string[];
  /**
  * 
  * Enable autoscaling for this cluster. Defaults to false if unset.
  * 
  * -> You will need to explicitly configure your node pools for autoscaling. Please check the provided [autoscaling documentation](https://engine.anexia-it.com/docs/en/module/kubernetes/user-guide/autoscaling) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster#enable_autoscaling DataAnxcloudKubernetesCluster#enable_autoscaling}
  */
  readonly enableAutoscaling?: boolean | cdktf.IResolvable;
  /**
  * External IPv4 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster#external_ipv4_prefix DataAnxcloudKubernetesCluster#external_ipv4_prefix}
  */
  readonly externalIpv4Prefix?: string;
  /**
  * External IPv6 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster#external_ipv6_prefix DataAnxcloudKubernetesCluster#external_ipv6_prefix}
  */
  readonly externalIpv6Prefix?: string;
  /**
  * Cluster identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster#id DataAnxcloudKubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Internal IPv4 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster#internal_ipv4_prefix DataAnxcloudKubernetesCluster#internal_ipv4_prefix}
  */
  readonly internalIpv4Prefix?: string;
  /**
  * Cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster#name DataAnxcloudKubernetesCluster#name}
  */
  readonly name?: string;
  /**
  * Kubernetes version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster#version DataAnxcloudKubernetesCluster#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster anxcloud_kubernetes_cluster}
*/
export class DataAnxcloudKubernetesCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "anxcloud_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAnxcloudKubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAnxcloudKubernetesCluster to import
  * @param importFromId The id of the existing DataAnxcloudKubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAnxcloudKubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "anxcloud_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/kubernetes_cluster anxcloud_kubernetes_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAnxcloudKubernetesClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAnxcloudKubernetesClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'anxcloud_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'anxcloud',
        providerVersion: '0.7.4',
        providerVersionConstraint: '0.7.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiserverAllowlist = config.apiserverAllowlist;
    this._enableAutoscaling = config.enableAutoscaling;
    this._externalIpv4Prefix = config.externalIpv4Prefix;
    this._externalIpv6Prefix = config.externalIpv6Prefix;
    this._id = config.id;
    this._internalIpv4Prefix = config.internalIpv4Prefix;
    this._name = config.name;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apiserver_allowlist - computed: true, optional: true, required: false
  private _apiserverAllowlist?: string[]; 
  public get apiserverAllowlist() {
    return this.getListAttribute('apiserver_allowlist');
  }
  public set apiserverAllowlist(value: string[]) {
    this._apiserverAllowlist = value;
  }
  public resetApiserverAllowlist() {
    this._apiserverAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverAllowlistInput() {
    return this._apiserverAllowlist;
  }

  // enable_autoscaling - computed: false, optional: true, required: false
  private _enableAutoscaling?: boolean | cdktf.IResolvable; 
  public get enableAutoscaling() {
    return this.getBooleanAttribute('enable_autoscaling');
  }
  public set enableAutoscaling(value: boolean | cdktf.IResolvable) {
    this._enableAutoscaling = value;
  }
  public resetEnableAutoscaling() {
    this._enableAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoscalingInput() {
    return this._enableAutoscaling;
  }

  // enable_lbaas - computed: true, optional: false, required: false
  public get enableLbaas() {
    return this.getBooleanAttribute('enable_lbaas');
  }

  // enable_nat_gateways - computed: true, optional: false, required: false
  public get enableNatGateways() {
    return this.getBooleanAttribute('enable_nat_gateways');
  }

  // external_ipv4_prefix - computed: true, optional: true, required: false
  private _externalIpv4Prefix?: string; 
  public get externalIpv4Prefix() {
    return this.getStringAttribute('external_ipv4_prefix');
  }
  public set externalIpv4Prefix(value: string) {
    this._externalIpv4Prefix = value;
  }
  public resetExternalIpv4Prefix() {
    this._externalIpv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv4PrefixInput() {
    return this._externalIpv4Prefix;
  }

  // external_ipv6_prefix - computed: true, optional: true, required: false
  private _externalIpv6Prefix?: string; 
  public get externalIpv6Prefix() {
    return this.getStringAttribute('external_ipv6_prefix');
  }
  public set externalIpv6Prefix(value: string) {
    this._externalIpv6Prefix = value;
  }
  public resetExternalIpv6Prefix() {
    this._externalIpv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6PrefixInput() {
    return this._externalIpv6Prefix;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // internal_ipv4_prefix - computed: true, optional: true, required: false
  private _internalIpv4Prefix?: string; 
  public get internalIpv4Prefix() {
    return this.getStringAttribute('internal_ipv4_prefix');
  }
  public set internalIpv4Prefix(value: string) {
    this._internalIpv4Prefix = value;
  }
  public resetInternalIpv4Prefix() {
    this._internalIpv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpv4PrefixInput() {
    return this._internalIpv4Prefix;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // needs_service_vms - computed: true, optional: false, required: false
  public get needsServiceVms() {
    return this.getBooleanAttribute('needs_service_vms');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
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
      apiserver_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiserverAllowlist),
      enable_autoscaling: cdktf.booleanToTerraform(this._enableAutoscaling),
      external_ipv4_prefix: cdktf.stringToTerraform(this._externalIpv4Prefix),
      external_ipv6_prefix: cdktf.stringToTerraform(this._externalIpv6Prefix),
      id: cdktf.stringToTerraform(this._id),
      internal_ipv4_prefix: cdktf.stringToTerraform(this._internalIpv4Prefix),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apiserver_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiserverAllowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_autoscaling: {
        value: cdktf.booleanToHclTerraform(this._enableAutoscaling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_ipv4_prefix: {
        value: cdktf.stringToHclTerraform(this._externalIpv4Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_ipv6_prefix: {
        value: cdktf.stringToHclTerraform(this._externalIpv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_ipv4_prefix: {
        value: cdktf.stringToHclTerraform(this._internalIpv4Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
