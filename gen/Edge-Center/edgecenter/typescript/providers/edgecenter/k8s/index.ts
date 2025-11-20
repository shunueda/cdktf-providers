// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether auto-healing is enabled for the Kubernetes cluster. true by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#auto_healing_enabled K8S#auto_healing_enabled}
  */
  readonly autoHealingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Fixed network (uuid) associated with the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#fixed_network K8S#fixed_network}
  */
  readonly fixedNetwork: string;
  /**
  * Subnet (uuid) associated with the fixed network. Ensure there's a router on this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#fixed_subnet K8S#fixed_subnet}
  */
  readonly fixedSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#id K8S#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the keypair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#keypair K8S#keypair}
  */
  readonly keypair: string;
  /**
  * The timestamp of the last update (use with update context).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#last_updated K8S#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Flag indicating if the master LoadBalancer should have a floating IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#master_lb_floating_ip_enabled K8S#master_lb_floating_ip_enabled}
  */
  readonly masterLbFloatingIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#name K8S#name}
  */
  readonly name: string;
  /**
  * IP pool to be used for pods within the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#pods_ip_pool K8S#pods_ip_pool}
  */
  readonly podsIpPool?: string;
  /**
  * The uuid of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#project_id K8S#project_id}
  */
  readonly projectId?: number;
  /**
  * The name of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#project_name K8S#project_name}
  */
  readonly projectName?: string;
  /**
  * The uuid of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#region_id K8S#region_id}
  */
  readonly regionId?: number;
  /**
  * The name of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#region_name K8S#region_name}
  */
  readonly regionName?: string;
  /**
  * IP pool to be used for services within the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#services_ip_pool K8S#services_ip_pool}
  */
  readonly servicesIpPool?: string;
  /**
  * The version of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#version K8S#version}
  */
  readonly version: string;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#pool K8S#pool}
  */
  readonly pool: K8SPool;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#timeouts K8S#timeouts}
  */
  readonly timeouts?: K8STimeouts;
}
export interface K8SPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#docker_volume_size K8S#docker_volume_size}
  */
  readonly dockerVolumeSize?: number;
  /**
  * Available value is 'standard', 'ssd_hiiops', 'cold', 'ultra'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#docker_volume_type K8S#docker_volume_type}
  */
  readonly dockerVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#flavor_id K8S#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#max_node_count K8S#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#min_node_count K8S#min_node_count}
  */
  readonly minNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#name K8S#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#node_count K8S#node_count}
  */
  readonly nodeCount: number;
}

export function k8SPoolToTerraform(struct?: K8SPoolOutputReference | K8SPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_volume_size: cdktf.numberToTerraform(struct!.dockerVolumeSize),
    docker_volume_type: cdktf.stringToTerraform(struct!.dockerVolumeType),
    flavor_id: cdktf.stringToTerraform(struct!.flavorId),
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    name: cdktf.stringToTerraform(struct!.name),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function k8SPoolToHclTerraform(struct?: K8SPoolOutputReference | K8SPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.dockerVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    docker_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.dockerVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flavor_id: {
      value: cdktf.stringToHclTerraform(struct!.flavorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerVolumeSize = this._dockerVolumeSize;
    }
    if (this._dockerVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerVolumeType = this._dockerVolumeType;
    }
    if (this._flavorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavorId = this._flavorId;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dockerVolumeSize = undefined;
      this._dockerVolumeType = undefined;
      this._flavorId = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
      this._name = undefined;
      this._nodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dockerVolumeSize = value.dockerVolumeSize;
      this._dockerVolumeType = value.dockerVolumeType;
      this._flavorId = value.flavorId;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
      this._name = value.name;
      this._nodeCount = value.nodeCount;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // docker_volume_size - computed: false, optional: true, required: false
  private _dockerVolumeSize?: number; 
  public get dockerVolumeSize() {
    return this.getNumberAttribute('docker_volume_size');
  }
  public set dockerVolumeSize(value: number) {
    this._dockerVolumeSize = value;
  }
  public resetDockerVolumeSize() {
    this._dockerVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerVolumeSizeInput() {
    return this._dockerVolumeSize;
  }

  // docker_volume_type - computed: true, optional: true, required: false
  private _dockerVolumeType?: string; 
  public get dockerVolumeType() {
    return this.getStringAttribute('docker_volume_type');
  }
  public set dockerVolumeType(value: string) {
    this._dockerVolumeType = value;
  }
  public resetDockerVolumeType() {
    this._dockerVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerVolumeTypeInput() {
    return this._dockerVolumeType;
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface K8STimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#create K8S#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#update K8S#update}
  */
  readonly update?: string;
}

export function k8STimeoutsToTerraform(struct?: K8STimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function k8STimeoutsToHclTerraform(struct?: K8STimeouts | cdktf.IResolvable): any {
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

export class K8STimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): K8STimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8STimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s edgecenter_k8s}
*/
export class K8S extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_k8s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8S resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8S to import
  * @param importFromId The id of the existing K8S that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8S to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_k8s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.5/docs/resources/k8s edgecenter_k8s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SConfig
  */
  public constructor(scope: Construct, id: string, config: K8SConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_k8s',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.5',
        providerVersionConstraint: '0.10.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoHealingEnabled = config.autoHealingEnabled;
    this._fixedNetwork = config.fixedNetwork;
    this._fixedSubnet = config.fixedSubnet;
    this._id = config.id;
    this._keypair = config.keypair;
    this._lastUpdated = config.lastUpdated;
    this._masterLbFloatingIpEnabled = config.masterLbFloatingIpEnabled;
    this._name = config.name;
    this._podsIpPool = config.podsIpPool;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._servicesIpPool = config.servicesIpPool;
    this._version = config.version;
    this._pool.internalValue = config.pool;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_address - computed: true, optional: false, required: false
  public get apiAddress() {
    return this.getStringAttribute('api_address');
  }

  // auto_healing_enabled - computed: false, optional: true, required: false
  private _autoHealingEnabled?: boolean | cdktf.IResolvable; 
  public get autoHealingEnabled() {
    return this.getBooleanAttribute('auto_healing_enabled');
  }
  public set autoHealingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoHealingEnabled = value;
  }
  public resetAutoHealingEnabled() {
    this._autoHealingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingEnabledInput() {
    return this._autoHealingEnabled;
  }

  // cluster_template_id - computed: true, optional: false, required: false
  public get clusterTemplateId() {
    return this.getStringAttribute('cluster_template_id');
  }

  // container_version - computed: true, optional: false, required: false
  public get containerVersion() {
    return this.getStringAttribute('container_version');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // faults - computed: true, optional: false, required: false
  private _faults = new cdktf.StringMap(this, "faults");
  public get faults() {
    return this._faults;
  }

  // fixed_network - computed: false, optional: false, required: true
  private _fixedNetwork?: string; 
  public get fixedNetwork() {
    return this.getStringAttribute('fixed_network');
  }
  public set fixedNetwork(value: string) {
    this._fixedNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNetworkInput() {
    return this._fixedNetwork;
  }

  // fixed_subnet - computed: false, optional: false, required: true
  private _fixedSubnet?: string; 
  public get fixedSubnet() {
    return this.getStringAttribute('fixed_subnet');
  }
  public set fixedSubnet(value: string) {
    this._fixedSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedSubnetInput() {
    return this._fixedSubnet;
  }

  // health_status - computed: true, optional: false, required: false
  public get healthStatus() {
    return this.getStringAttribute('health_status');
  }

  // health_status_reason - computed: true, optional: false, required: false
  private _healthStatusReason = new cdktf.StringMap(this, "health_status_reason");
  public get healthStatusReason() {
    return this._healthStatusReason;
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

  // keypair - computed: false, optional: false, required: true
  private _keypair?: string; 
  public get keypair() {
    return this.getStringAttribute('keypair');
  }
  public set keypair(value: string) {
    this._keypair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairInput() {
    return this._keypair;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // master_addresses - computed: true, optional: false, required: false
  public get masterAddresses() {
    return this.getListAttribute('master_addresses');
  }

  // master_flavor_id - computed: true, optional: false, required: false
  public get masterFlavorId() {
    return this.getStringAttribute('master_flavor_id');
  }

  // master_lb_floating_ip_enabled - computed: false, optional: true, required: false
  private _masterLbFloatingIpEnabled?: boolean | cdktf.IResolvable; 
  public get masterLbFloatingIpEnabled() {
    return this.getBooleanAttribute('master_lb_floating_ip_enabled');
  }
  public set masterLbFloatingIpEnabled(value: boolean | cdktf.IResolvable) {
    this._masterLbFloatingIpEnabled = value;
  }
  public resetMasterLbFloatingIpEnabled() {
    this._masterLbFloatingIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterLbFloatingIpEnabledInput() {
    return this._masterLbFloatingIpEnabled;
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

  // node_addresses - computed: true, optional: false, required: false
  public get nodeAddresses() {
    return this.getListAttribute('node_addresses');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // pods_ip_pool - computed: false, optional: true, required: false
  private _podsIpPool?: string; 
  public get podsIpPool() {
    return this.getStringAttribute('pods_ip_pool');
  }
  public set podsIpPool(value: string) {
    this._podsIpPool = value;
  }
  public resetPodsIpPool() {
    this._podsIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsIpPoolInput() {
    return this._podsIpPool;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // services_ip_pool - computed: false, optional: true, required: false
  private _servicesIpPool?: string; 
  public get servicesIpPool() {
    return this.getStringAttribute('services_ip_pool');
  }
  public set servicesIpPool(value: string) {
    this._servicesIpPool = value;
  }
  public resetServicesIpPool() {
    this._servicesIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpPoolInput() {
    return this._servicesIpPool;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // pool - computed: false, optional: false, required: true
  private _pool = new K8SPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: K8SPool) {
    this._pool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new K8STimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: K8STimeouts) {
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
      auto_healing_enabled: cdktf.booleanToTerraform(this._autoHealingEnabled),
      fixed_network: cdktf.stringToTerraform(this._fixedNetwork),
      fixed_subnet: cdktf.stringToTerraform(this._fixedSubnet),
      id: cdktf.stringToTerraform(this._id),
      keypair: cdktf.stringToTerraform(this._keypair),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      master_lb_floating_ip_enabled: cdktf.booleanToTerraform(this._masterLbFloatingIpEnabled),
      name: cdktf.stringToTerraform(this._name),
      pods_ip_pool: cdktf.stringToTerraform(this._podsIpPool),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      services_ip_pool: cdktf.stringToTerraform(this._servicesIpPool),
      version: cdktf.stringToTerraform(this._version),
      pool: k8SPoolToTerraform(this._pool.internalValue),
      timeouts: k8STimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_healing_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoHealingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fixed_network: {
        value: cdktf.stringToHclTerraform(this._fixedNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_subnet: {
        value: cdktf.stringToHclTerraform(this._fixedSubnet),
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
      keypair: {
        value: cdktf.stringToHclTerraform(this._keypair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_lb_floating_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._masterLbFloatingIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pods_ip_pool: {
        value: cdktf.stringToHclTerraform(this._podsIpPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services_ip_pool: {
        value: cdktf.stringToHclTerraform(this._servicesIpPool),
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
      pool: {
        value: k8SPoolToHclTerraform(this._pool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SPoolList",
      },
      timeouts: {
        value: k8STimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "K8STimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
