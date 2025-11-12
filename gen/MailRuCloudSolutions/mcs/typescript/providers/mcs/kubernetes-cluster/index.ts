// https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#api_lb_fip KubernetesCluster#api_lb_fip}
  */
  readonly apiLbFip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#api_lb_vip KubernetesCluster#api_lb_vip}
  */
  readonly apiLbVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#availability_zone KubernetesCluster#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#cluster_template_id KubernetesCluster#cluster_template_id}
  */
  readonly clusterTemplateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#floating_ip_enabled KubernetesCluster#floating_ip_enabled}
  */
  readonly floatingIpEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#ingress_floating_ip KubernetesCluster#ingress_floating_ip}
  */
  readonly ingressFloatingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#insecure_registries KubernetesCluster#insecure_registries}
  */
  readonly insecureRegistries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#keypair KubernetesCluster#keypair}
  */
  readonly keypair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#loadbalancer_subnet_id KubernetesCluster#loadbalancer_subnet_id}
  */
  readonly loadbalancerSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#master_count KubernetesCluster#master_count}
  */
  readonly masterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#master_flavor KubernetesCluster#master_flavor}
  */
  readonly masterFlavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#network_id KubernetesCluster#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#pods_network_cidr KubernetesCluster#pods_network_cidr}
  */
  readonly podsNetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#region KubernetesCluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#registry_auth_password KubernetesCluster#registry_auth_password}
  */
  readonly registryAuthPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#status KubernetesCluster#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#timeouts KubernetesCluster#timeouts}
  */
  readonly timeouts?: KubernetesClusterTimeouts;
}
export interface KubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#create KubernetesCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#delete KubernetesCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#update KubernetesCluster#update}
  */
  readonly update?: string;
}

export function kubernetesClusterTimeoutsToTerraform(struct?: KubernetesClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster mcs_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mcs_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCluster to import
  * @param importFromId The id of the existing KubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mcs_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/resources/kubernetes_cluster mcs_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'mcs_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'mcs',
        providerVersion: '0.6.14',
        providerVersionConstraint: '0.6.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiLbFip = config.apiLbFip;
    this._apiLbVip = config.apiLbVip;
    this._availabilityZone = config.availabilityZone;
    this._clusterTemplateId = config.clusterTemplateId;
    this._floatingIpEnabled = config.floatingIpEnabled;
    this._id = config.id;
    this._ingressFloatingIp = config.ingressFloatingIp;
    this._insecureRegistries = config.insecureRegistries;
    this._keypair = config.keypair;
    this._labels = config.labels;
    this._loadbalancerSubnetId = config.loadbalancerSubnetId;
    this._masterCount = config.masterCount;
    this._masterFlavor = config.masterFlavor;
    this._name = config.name;
    this._networkId = config.networkId;
    this._podsNetworkCidr = config.podsNetworkCidr;
    this._region = config.region;
    this._registryAuthPassword = config.registryAuthPassword;
    this._status = config.status;
    this._subnetId = config.subnetId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_address - computed: true, optional: false, required: false
  public get apiAddress() {
    return this.getStringAttribute('api_address');
  }

  // api_lb_fip - computed: true, optional: true, required: false
  private _apiLbFip?: string; 
  public get apiLbFip() {
    return this.getStringAttribute('api_lb_fip');
  }
  public set apiLbFip(value: string) {
    this._apiLbFip = value;
  }
  public resetApiLbFip() {
    this._apiLbFip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiLbFipInput() {
    return this._apiLbFip;
  }

  // api_lb_vip - computed: true, optional: true, required: false
  private _apiLbVip?: string; 
  public get apiLbVip() {
    return this.getStringAttribute('api_lb_vip');
  }
  public set apiLbVip(value: string) {
    this._apiLbVip = value;
  }
  public resetApiLbVip() {
    this._apiLbVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiLbVipInput() {
    return this._apiLbVip;
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cluster_template_id - computed: false, optional: false, required: true
  private _clusterTemplateId?: string; 
  public get clusterTemplateId() {
    return this.getStringAttribute('cluster_template_id');
  }
  public set clusterTemplateId(value: string) {
    this._clusterTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTemplateIdInput() {
    return this._clusterTemplateId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // floating_ip_enabled - computed: false, optional: false, required: true
  private _floatingIpEnabled?: boolean | cdktf.IResolvable; 
  public get floatingIpEnabled() {
    return this.getBooleanAttribute('floating_ip_enabled');
  }
  public set floatingIpEnabled(value: boolean | cdktf.IResolvable) {
    this._floatingIpEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpEnabledInput() {
    return this._floatingIpEnabled;
  }

  // id - computed: true, optional: true, required: false
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

  // ingress_floating_ip - computed: true, optional: true, required: false
  private _ingressFloatingIp?: string; 
  public get ingressFloatingIp() {
    return this.getStringAttribute('ingress_floating_ip');
  }
  public set ingressFloatingIp(value: string) {
    this._ingressFloatingIp = value;
  }
  public resetIngressFloatingIp() {
    this._ingressFloatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressFloatingIpInput() {
    return this._ingressFloatingIp;
  }

  // insecure_registries - computed: true, optional: true, required: false
  private _insecureRegistries?: string[]; 
  public get insecureRegistries() {
    return this.getListAttribute('insecure_registries');
  }
  public set insecureRegistries(value: string[]) {
    this._insecureRegistries = value;
  }
  public resetInsecureRegistries() {
    this._insecureRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureRegistriesInput() {
    return this._insecureRegistries;
  }

  // keypair - computed: false, optional: true, required: false
  private _keypair?: string; 
  public get keypair() {
    return this.getStringAttribute('keypair');
  }
  public set keypair(value: string) {
    this._keypair = value;
  }
  public resetKeypair() {
    this._keypair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairInput() {
    return this._keypair;
  }

  // labels - computed: true, optional: true, required: false
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

  // loadbalancer_subnet_id - computed: true, optional: true, required: false
  private _loadbalancerSubnetId?: string; 
  public get loadbalancerSubnetId() {
    return this.getStringAttribute('loadbalancer_subnet_id');
  }
  public set loadbalancerSubnetId(value: string) {
    this._loadbalancerSubnetId = value;
  }
  public resetLoadbalancerSubnetId() {
    this._loadbalancerSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerSubnetIdInput() {
    return this._loadbalancerSubnetId;
  }

  // master_addresses - computed: true, optional: false, required: false
  public get masterAddresses() {
    return this.getListAttribute('master_addresses');
  }

  // master_count - computed: true, optional: true, required: false
  private _masterCount?: number; 
  public get masterCount() {
    return this.getNumberAttribute('master_count');
  }
  public set masterCount(value: number) {
    this._masterCount = value;
  }
  public resetMasterCount() {
    this._masterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCountInput() {
    return this._masterCount;
  }

  // master_flavor - computed: true, optional: true, required: false
  private _masterFlavor?: string; 
  public get masterFlavor() {
    return this.getStringAttribute('master_flavor');
  }
  public set masterFlavor(value: string) {
    this._masterFlavor = value;
  }
  public resetMasterFlavor() {
    this._masterFlavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterFlavorInput() {
    return this._masterFlavor;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // pods_network_cidr - computed: true, optional: true, required: false
  private _podsNetworkCidr?: string; 
  public get podsNetworkCidr() {
    return this.getStringAttribute('pods_network_cidr');
  }
  public set podsNetworkCidr(value: string) {
    this._podsNetworkCidr = value;
  }
  public resetPodsNetworkCidr() {
    this._podsNetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsNetworkCidrInput() {
    return this._podsNetworkCidr;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // registry_auth_password - computed: true, optional: true, required: false
  private _registryAuthPassword?: string; 
  public get registryAuthPassword() {
    return this.getStringAttribute('registry_auth_password');
  }
  public set registryAuthPassword(value: string) {
    this._registryAuthPassword = value;
  }
  public resetRegistryAuthPassword() {
    this._registryAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryAuthPasswordInput() {
    return this._registryAuthPassword;
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // status - computed: true, optional: true, required: false
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
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
      api_lb_fip: cdktf.stringToTerraform(this._apiLbFip),
      api_lb_vip: cdktf.stringToTerraform(this._apiLbVip),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cluster_template_id: cdktf.stringToTerraform(this._clusterTemplateId),
      floating_ip_enabled: cdktf.booleanToTerraform(this._floatingIpEnabled),
      id: cdktf.stringToTerraform(this._id),
      ingress_floating_ip: cdktf.stringToTerraform(this._ingressFloatingIp),
      insecure_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._insecureRegistries),
      keypair: cdktf.stringToTerraform(this._keypair),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      loadbalancer_subnet_id: cdktf.stringToTerraform(this._loadbalancerSubnetId),
      master_count: cdktf.numberToTerraform(this._masterCount),
      master_flavor: cdktf.stringToTerraform(this._masterFlavor),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      pods_network_cidr: cdktf.stringToTerraform(this._podsNetworkCidr),
      region: cdktf.stringToTerraform(this._region),
      registry_auth_password: cdktf.stringToTerraform(this._registryAuthPassword),
      status: cdktf.stringToTerraform(this._status),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: kubernetesClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_lb_fip: {
        value: cdktf.stringToHclTerraform(this._apiLbFip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_lb_vip: {
        value: cdktf.stringToHclTerraform(this._apiLbVip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_template_id: {
        value: cdktf.stringToHclTerraform(this._clusterTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._floatingIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_floating_ip: {
        value: cdktf.stringToHclTerraform(this._ingressFloatingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_registries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._insecureRegistries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      keypair: {
        value: cdktf.stringToHclTerraform(this._keypair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      loadbalancer_subnet_id: {
        value: cdktf.stringToHclTerraform(this._loadbalancerSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_count: {
        value: cdktf.numberToHclTerraform(this._masterCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_flavor: {
        value: cdktf.stringToHclTerraform(this._masterFlavor),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pods_network_cidr: {
        value: cdktf.stringToHclTerraform(this._podsNetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_auth_password: {
        value: cdktf.stringToHclTerraform(this._registryAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
