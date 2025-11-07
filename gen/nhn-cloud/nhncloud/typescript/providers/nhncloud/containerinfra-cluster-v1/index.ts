// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerinfraClusterV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#cluster_template_id ContainerinfraClusterV1#cluster_template_id}
  */
  readonly clusterTemplateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#create_timeout ContainerinfraClusterV1#create_timeout}
  */
  readonly createTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#discovery_url ContainerinfraClusterV1#discovery_url}
  */
  readonly discoveryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#docker_volume_size ContainerinfraClusterV1#docker_volume_size}
  */
  readonly dockerVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#fixed_network ContainerinfraClusterV1#fixed_network}
  */
  readonly fixedNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#fixed_subnet ContainerinfraClusterV1#fixed_subnet}
  */
  readonly fixedSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#flavor ContainerinfraClusterV1#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#floating_ip_enabled ContainerinfraClusterV1#floating_ip_enabled}
  */
  readonly floatingIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#id ContainerinfraClusterV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#keypair ContainerinfraClusterV1#keypair}
  */
  readonly keypair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#labels ContainerinfraClusterV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#master_count ContainerinfraClusterV1#master_count}
  */
  readonly masterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#master_flavor ContainerinfraClusterV1#master_flavor}
  */
  readonly masterFlavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#merge_labels ContainerinfraClusterV1#merge_labels}
  */
  readonly mergeLabels?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#name ContainerinfraClusterV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#node_count ContainerinfraClusterV1#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#region ContainerinfraClusterV1#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#timeouts ContainerinfraClusterV1#timeouts}
  */
  readonly timeouts?: ContainerinfraClusterV1Timeouts;
}
export interface ContainerinfraClusterV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#create ContainerinfraClusterV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#delete ContainerinfraClusterV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#update ContainerinfraClusterV1#update}
  */
  readonly update?: string;
}

export function containerinfraClusterV1TimeoutsToTerraform(struct?: ContainerinfraClusterV1Timeouts | cdktf.IResolvable): any {
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


export function containerinfraClusterV1TimeoutsToHclTerraform(struct?: ContainerinfraClusterV1Timeouts | cdktf.IResolvable): any {
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

export class ContainerinfraClusterV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerinfraClusterV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerinfraClusterV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1 nhncloud_containerinfra_cluster_v1}
*/
export class ContainerinfraClusterV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_containerinfra_cluster_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerinfraClusterV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerinfraClusterV1 to import
  * @param importFromId The id of the existing ContainerinfraClusterV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerinfraClusterV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_containerinfra_cluster_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/resources/containerinfra_cluster_v1 nhncloud_containerinfra_cluster_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerinfraClusterV1Config
  */
  public constructor(scope: Construct, id: string, config: ContainerinfraClusterV1Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_containerinfra_cluster_v1',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterTemplateId = config.clusterTemplateId;
    this._createTimeout = config.createTimeout;
    this._discoveryUrl = config.discoveryUrl;
    this._dockerVolumeSize = config.dockerVolumeSize;
    this._fixedNetwork = config.fixedNetwork;
    this._fixedSubnet = config.fixedSubnet;
    this._flavor = config.flavor;
    this._floatingIpEnabled = config.floatingIpEnabled;
    this._id = config.id;
    this._keypair = config.keypair;
    this._labels = config.labels;
    this._masterCount = config.masterCount;
    this._masterFlavor = config.masterFlavor;
    this._mergeLabels = config.mergeLabels;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_address - computed: true, optional: false, required: false
  public get apiAddress() {
    return this.getStringAttribute('api_address');
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

  // coe_version - computed: true, optional: false, required: false
  public get coeVersion() {
    return this.getStringAttribute('coe_version');
  }

  // container_version - computed: true, optional: false, required: false
  public get containerVersion() {
    return this.getStringAttribute('container_version');
  }

  // create_timeout - computed: true, optional: true, required: false
  private _createTimeout?: number; 
  public get createTimeout() {
    return this.getNumberAttribute('create_timeout');
  }
  public set createTimeout(value: number) {
    this._createTimeout = value;
  }
  public resetCreateTimeout() {
    this._createTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeoutInput() {
    return this._createTimeout;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // discovery_url - computed: true, optional: true, required: false
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  public resetDiscoveryUrl() {
    this._discoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // docker_volume_size - computed: true, optional: true, required: false
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

  // fixed_network - computed: true, optional: true, required: false
  private _fixedNetwork?: string; 
  public get fixedNetwork() {
    return this.getStringAttribute('fixed_network');
  }
  public set fixedNetwork(value: string) {
    this._fixedNetwork = value;
  }
  public resetFixedNetwork() {
    this._fixedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNetworkInput() {
    return this._fixedNetwork;
  }

  // fixed_subnet - computed: true, optional: true, required: false
  private _fixedSubnet?: string; 
  public get fixedSubnet() {
    return this.getStringAttribute('fixed_subnet');
  }
  public set fixedSubnet(value: string) {
    this._fixedSubnet = value;
  }
  public resetFixedSubnet() {
    this._fixedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedSubnetInput() {
    return this._fixedSubnet;
  }

  // flavor - computed: true, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // floating_ip_enabled - computed: true, optional: true, required: false
  private _floatingIpEnabled?: boolean | cdktf.IResolvable; 
  public get floatingIpEnabled() {
    return this.getBooleanAttribute('floating_ip_enabled');
  }
  public set floatingIpEnabled(value: boolean | cdktf.IResolvable) {
    this._floatingIpEnabled = value;
  }
  public resetFloatingIpEnabled() {
    this._floatingIpEnabled = undefined;
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

  // keypair - computed: true, optional: true, required: false
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

  // kubeconfig - computed: true, optional: false, required: false
  private _kubeconfig = new cdktf.StringMap(this, "kubeconfig");
  public get kubeconfig() {
    return this._kubeconfig;
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

  // merge_labels - computed: false, optional: true, required: false
  private _mergeLabels?: boolean | cdktf.IResolvable; 
  public get mergeLabels() {
    return this.getBooleanAttribute('merge_labels');
  }
  public set mergeLabels(value: boolean | cdktf.IResolvable) {
    this._mergeLabels = value;
  }
  public resetMergeLabels() {
    this._mergeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeLabelsInput() {
    return this._mergeLabels;
  }

  // name - computed: true, optional: true, required: false
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

  // node_addresses - computed: true, optional: false, required: false
  public get nodeAddresses() {
    return this.getListAttribute('node_addresses');
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
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

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
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
  private _timeouts = new ContainerinfraClusterV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerinfraClusterV1Timeouts) {
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
      cluster_template_id: cdktf.stringToTerraform(this._clusterTemplateId),
      create_timeout: cdktf.numberToTerraform(this._createTimeout),
      discovery_url: cdktf.stringToTerraform(this._discoveryUrl),
      docker_volume_size: cdktf.numberToTerraform(this._dockerVolumeSize),
      fixed_network: cdktf.stringToTerraform(this._fixedNetwork),
      fixed_subnet: cdktf.stringToTerraform(this._fixedSubnet),
      flavor: cdktf.stringToTerraform(this._flavor),
      floating_ip_enabled: cdktf.booleanToTerraform(this._floatingIpEnabled),
      id: cdktf.stringToTerraform(this._id),
      keypair: cdktf.stringToTerraform(this._keypair),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      master_count: cdktf.numberToTerraform(this._masterCount),
      master_flavor: cdktf.stringToTerraform(this._masterFlavor),
      merge_labels: cdktf.booleanToTerraform(this._mergeLabels),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      region: cdktf.stringToTerraform(this._region),
      timeouts: containerinfraClusterV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_template_id: {
        value: cdktf.stringToHclTerraform(this._clusterTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_timeout: {
        value: cdktf.numberToHclTerraform(this._createTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      discovery_url: {
        value: cdktf.stringToHclTerraform(this._discoveryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_volume_size: {
        value: cdktf.numberToHclTerraform(this._dockerVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
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
      merge_labels: {
        value: cdktf.booleanToHclTerraform(this._mergeLabels),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: containerinfraClusterV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerinfraClusterV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
