// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#cluster_template_id KubernetesClusterV1#cluster_template_id}
  */
  readonly clusterTemplateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#create_timeout KubernetesClusterV1#create_timeout}
  */
  readonly createTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#docker_volume_size KubernetesClusterV1#docker_volume_size}
  */
  readonly dockerVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#fixed_network KubernetesClusterV1#fixed_network}
  */
  readonly fixedNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#fixed_subnet KubernetesClusterV1#fixed_subnet}
  */
  readonly fixedSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#flavor_id KubernetesClusterV1#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#id KubernetesClusterV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#keypair KubernetesClusterV1#keypair}
  */
  readonly keypair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#labels KubernetesClusterV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#name KubernetesClusterV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#node_count KubernetesClusterV1#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#region KubernetesClusterV1#region}
  */
  readonly region?: string;
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#addons KubernetesClusterV1#addons}
  */
  readonly addons: KubernetesClusterV1Addons[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#timeouts KubernetesClusterV1#timeouts}
  */
  readonly timeouts?: KubernetesClusterV1Timeouts;
}
export interface KubernetesClusterV1Addons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#name KubernetesClusterV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#options KubernetesClusterV1#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#version KubernetesClusterV1#version}
  */
  readonly version: string;
}

export function kubernetesClusterV1AddonsToTerraform(struct?: KubernetesClusterV1Addons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function kubernetesClusterV1AddonsToHclTerraform(struct?: KubernetesClusterV1Addons | cdktf.IResolvable): any {
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
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterV1AddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterV1Addons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterV1Addons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._options = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._options = value.options;
      this._version = value.version;
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

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
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
}

export class KubernetesClusterV1AddonsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterV1Addons[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterV1AddonsOutputReference {
    return new KubernetesClusterV1AddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#create KubernetesClusterV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#delete KubernetesClusterV1#delete}
  */
  readonly delete?: string;
}

export function kubernetesClusterV1TimeoutsToTerraform(struct?: KubernetesClusterV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function kubernetesClusterV1TimeoutsToHclTerraform(struct?: KubernetesClusterV1Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterV1Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1 nhncloud_kubernetes_cluster_v1}
*/
export class KubernetesClusterV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_kubernetes_cluster_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesClusterV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesClusterV1 to import
  * @param importFromId The id of the existing KubernetesClusterV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesClusterV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_kubernetes_cluster_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/kubernetes_cluster_v1 nhncloud_kubernetes_cluster_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterV1Config
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterV1Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_kubernetes_cluster_v1',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
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
    this._dockerVolumeSize = config.dockerVolumeSize;
    this._fixedNetwork = config.fixedNetwork;
    this._fixedSubnet = config.fixedSubnet;
    this._flavorId = config.flavorId;
    this._id = config.id;
    this._keypair = config.keypair;
    this._labels = config.labels;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._region = config.region;
    this._addons.internalValue = config.addons;
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

  // flavor_id - computed: true, optional: true, required: false
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
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

  // node_count - computed: true, optional: true, required: false
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // addons - computed: false, optional: false, required: true
  private _addons = new KubernetesClusterV1AddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }
  public putAddons(value: KubernetesClusterV1Addons[] | cdktf.IResolvable) {
    this._addons.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesClusterV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesClusterV1Timeouts) {
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
      docker_volume_size: cdktf.numberToTerraform(this._dockerVolumeSize),
      fixed_network: cdktf.stringToTerraform(this._fixedNetwork),
      fixed_subnet: cdktf.stringToTerraform(this._fixedSubnet),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      id: cdktf.stringToTerraform(this._id),
      keypair: cdktf.stringToTerraform(this._keypair),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      region: cdktf.stringToTerraform(this._region),
      addons: cdktf.listMapper(kubernetesClusterV1AddonsToTerraform, true)(this._addons.internalValue),
      timeouts: kubernetesClusterV1TimeoutsToTerraform(this._timeouts.internalValue),
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
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      addons: {
        value: cdktf.listMapperHcl(kubernetesClusterV1AddonsToHclTerraform, true)(this._addons.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterV1AddonsList",
      },
      timeouts: {
        value: kubernetesClusterV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesClusterV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
