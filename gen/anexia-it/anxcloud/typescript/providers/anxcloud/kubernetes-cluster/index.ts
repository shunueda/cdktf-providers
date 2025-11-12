// https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of CIDRs that should be allowed access to the kubernetes API server. By default there are no IP restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#apiserver_allowlist KubernetesCluster#apiserver_allowlist}
  */
  readonly apiserverAllowlist?: string[];
  /**
  * 
  * Enable autoscaling for this cluster. Defaults to false if unset.
  * 
  * -> You will need to explicitly configure your node pools for autoscaling. Please check the provided [autoscaling documentation](https://engine.anexia-it.com/docs/en/module/kubernetes/user-guide/autoscaling) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#enable_autoscaling KubernetesCluster#enable_autoscaling}
  */
  readonly enableAutoscaling?: boolean | cdktf.IResolvable;
  /**
  * If enabled, Service VMs are set up as LBaaS hosts enabling K8s services of type LoadBalancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#enable_lbaas KubernetesCluster#enable_lbaas}
  */
  readonly enableLbaas?: boolean | cdktf.IResolvable;
  /**
  * If enabled, Service VMs are configured as NAT gateways connecting the internal cluster network to the internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#enable_nat_gateways KubernetesCluster#enable_nat_gateways}
  */
  readonly enableNatGateways?: boolean | cdktf.IResolvable;
  /**
  * External IPv4 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#external_ipv4_prefix KubernetesCluster#external_ipv4_prefix}
  */
  readonly externalIpv4Prefix?: string;
  /**
  * External IPv6 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#external_ipv6_prefix KubernetesCluster#external_ipv6_prefix}
  */
  readonly externalIpv6Prefix?: string;
  /**
  * Internal IPv4 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#internal_ipv4_prefix KubernetesCluster#internal_ipv4_prefix}
  */
  readonly internalIpv4Prefix?: string;
  /**
  * Cluster location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#location KubernetesCluster#location}
  */
  readonly location: string;
  /**
  * Cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Deploy Service VMs providing load balancers and outbound masquerade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#needs_service_vms KubernetesCluster#needs_service_vms}
  */
  readonly needsServiceVms?: boolean | cdktf.IResolvable;
  /**
  * Set of tags attached to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}
  */
  readonly tags?: string[];
  /**
  * Kubernetes version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#version KubernetesCluster#version}
  */
  readonly version?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#timeouts KubernetesCluster#timeouts}
  */
  readonly timeouts?: KubernetesClusterTimeouts;
}
export interface KubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#create KubernetesCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#delete KubernetesCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#read KubernetesCluster#read}
  */
  readonly read?: string;
}

export function kubernetesClusterTimeoutsToTerraform(struct?: KubernetesClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function kubernetesClusterTimeoutsToHclTerraform(struct?: KubernetesClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class KubernetesClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster anxcloud_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "anxcloud_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCluster to import
  * @param importFromId The id of the existing KubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "anxcloud_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/kubernetes_cluster anxcloud_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
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
    this._enableLbaas = config.enableLbaas;
    this._enableNatGateways = config.enableNatGateways;
    this._externalIpv4Prefix = config.externalIpv4Prefix;
    this._externalIpv6Prefix = config.externalIpv6Prefix;
    this._internalIpv4Prefix = config.internalIpv4Prefix;
    this._location = config.location;
    this._name = config.name;
    this._needsServiceVms = config.needsServiceVms;
    this._tags = config.tags;
    this._version = config.version;
    this._timeouts.internalValue = config.timeouts;
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

  // enable_lbaas - computed: false, optional: true, required: false
  private _enableLbaas?: boolean | cdktf.IResolvable; 
  public get enableLbaas() {
    return this.getBooleanAttribute('enable_lbaas');
  }
  public set enableLbaas(value: boolean | cdktf.IResolvable) {
    this._enableLbaas = value;
  }
  public resetEnableLbaas() {
    this._enableLbaas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLbaasInput() {
    return this._enableLbaas;
  }

  // enable_nat_gateways - computed: false, optional: true, required: false
  private _enableNatGateways?: boolean | cdktf.IResolvable; 
  public get enableNatGateways() {
    return this.getBooleanAttribute('enable_nat_gateways');
  }
  public set enableNatGateways(value: boolean | cdktf.IResolvable) {
    this._enableNatGateways = value;
  }
  public resetEnableNatGateways() {
    this._enableNatGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNatGatewaysInput() {
    return this._enableNatGateways;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // needs_service_vms - computed: false, optional: true, required: false
  private _needsServiceVms?: boolean | cdktf.IResolvable; 
  public get needsServiceVms() {
    return this.getBooleanAttribute('needs_service_vms');
  }
  public set needsServiceVms(value: boolean | cdktf.IResolvable) {
    this._needsServiceVms = value;
  }
  public resetNeedsServiceVms() {
    this._needsServiceVms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needsServiceVmsInput() {
    return this._needsServiceVms;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apiserver_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiserverAllowlist),
      enable_autoscaling: cdktf.booleanToTerraform(this._enableAutoscaling),
      enable_lbaas: cdktf.booleanToTerraform(this._enableLbaas),
      enable_nat_gateways: cdktf.booleanToTerraform(this._enableNatGateways),
      external_ipv4_prefix: cdktf.stringToTerraform(this._externalIpv4Prefix),
      external_ipv6_prefix: cdktf.stringToTerraform(this._externalIpv6Prefix),
      internal_ipv4_prefix: cdktf.stringToTerraform(this._internalIpv4Prefix),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      needs_service_vms: cdktf.booleanToTerraform(this._needsServiceVms),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      timeouts: kubernetesClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      enable_lbaas: {
        value: cdktf.booleanToHclTerraform(this._enableLbaas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_nat_gateways: {
        value: cdktf.booleanToHclTerraform(this._enableNatGateways),
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
      internal_ipv4_prefix: {
        value: cdktf.stringToHclTerraform(this._internalIpv4Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      needs_service_vms: {
        value: cdktf.booleanToHclTerraform(this._needsServiceVms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
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
      timeouts: {
        value: kubernetesClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
