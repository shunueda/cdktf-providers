// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DuploServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The numeric ID of the container agent to use for deployment.
  * Should be one of:
  * 
  *    - `0` : Duplo Native container agent
  *    - `7` : Linux container agent for Kubernetes
  *  Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#agent_platform DuploService#agent_platform}
  */
  readonly agentPlatform?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#allocation_tags DuploService#allocation_tags}
  */
  readonly allocationTags?: string;
  /**
  * Whether or not the service can run on hosts in other tenants (within the the same plan as the current tenant). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#any_host_allowed DuploService#any_host_allowed}
  */
  readonly anyHostAllowed?: boolean | cdktf.IResolvable;
  /**
  * The name of the app where service will be a part
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#app_name DuploService#app_name}
  */
  readonly appName?: string;
  /**
  * The numeric ID of the cloud provider to launch the service in.
  * Should be one of:
  * 
  *    - `0` : AWS (Default)
  *    - `1` : Oracle
  *    - `2` : Azure
  *    - `3` : Google
  *    - `4` : Byoh
  *    - `5` : Unknown
  *    - `6` : DigitalOcean
  *    - `10` : OnPrem
  *  Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#cloud DuploService#cloud}
  */
  readonly cloud?: number;
  /**
  * Whether or not the service gets it's cloud credentials from Kubernetes service account. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#cloud_creds_from_k8s_service_account DuploService#cloud_creds_from_k8s_service_account}
  */
  readonly cloudCredsFromK8SServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#commands DuploService#commands}
  */
  readonly commands?: string;
  /**
  * The docker image to use for the launched container(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#docker_image DuploService#docker_image}
  */
  readonly dockerImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#extra_config DuploService#extra_config}
  */
  readonly extraConfig?: string;
  /**
  * if 'force_recreate_on_volumes_change=true' and any changing to Volumes, will results in forceNew and hence recreating the resource. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#force_recreate_on_volumes_change DuploService#force_recreate_on_volumes_change}
  */
  readonly forceRecreateOnVolumesChange?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to force a StatefulSet to be created. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#force_stateful_set DuploService#force_stateful_set}
  */
  readonly forceStatefulSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#hpa_specs DuploService#hpa_specs}
  */
  readonly hpaSpecs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#id DuploService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether or not to enable DaemonSet. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#is_daemonset DuploService#is_daemonset}
  */
  readonly isDaemonset?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the replicas must be scheduled on separate Kubernetes nodes.  Only supported on Kubernetes. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#is_unique_k8s_node_required DuploService#is_unique_k8s_node_required}
  */
  readonly isUniqueK8SNodeRequired?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#lb_synced_deployment DuploService#lb_synced_deployment}
  */
  readonly lbSyncedDeployment?: boolean | cdktf.IResolvable;
  /**
  * The name of the service to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#name DuploService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#other_docker_config DuploService#other_docker_config}
  */
  readonly otherDockerConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#other_docker_host_config DuploService#other_docker_host_config}
  */
  readonly otherDockerHostConfig?: string;
  /**
  * Allow replica collocation for the service. If this is set then 2 replicas can be on the same host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#replica_collocation_allowed DuploService#replica_collocation_allowed}
  */
  readonly replicaCollocationAllowed?: boolean | cdktf.IResolvable;
  /**
  * The number of container replicas to deploy. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#replicas DuploService#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#replicas_matching_asg_name DuploService#replicas_matching_asg_name}
  */
  readonly replicasMatchingAsgName?: string;
  /**
  * Whether or not the replicas must be spread across availability zones.  Only supported on Kubernetes. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#should_spread_across_zones DuploService#should_spread_across_zones}
  */
  readonly shouldSpreadAcrossZones?: boolean | cdktf.IResolvable;
  /**
  * The GUID of the tenant that the service will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#tenant_id DuploService#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Volumes to be attached to pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#volumes DuploService#volumes}
  */
  readonly volumes?: string;
  /**
  * init_container_docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#init_container_docker_image DuploService#init_container_docker_image}
  */
  readonly initContainerDockerImage?: DuploServiceInitContainerDockerImage[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#timeouts DuploService#timeouts}
  */
  readonly timeouts?: DuploServiceTimeouts;
}
export interface DuploServiceTags {
}

export function duploServiceTagsToTerraform(struct?: DuploServiceTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function duploServiceTagsToHclTerraform(struct?: DuploServiceTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DuploServiceTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DuploServiceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DuploServiceTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DuploServiceTagsList extends cdktf.ComplexList {

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
  public get(index: number): DuploServiceTagsOutputReference {
    return new DuploServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DuploServiceInitContainerDockerImage {
  /**
  * Init container docker image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#image DuploService#image}
  */
  readonly image: string;
  /**
  * Init container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#name DuploService#name}
  */
  readonly name: string;
}

export function duploServiceInitContainerDockerImageToTerraform(struct?: DuploServiceInitContainerDockerImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function duploServiceInitContainerDockerImageToHclTerraform(struct?: DuploServiceInitContainerDockerImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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

export class DuploServiceInitContainerDockerImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DuploServiceInitContainerDockerImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DuploServiceInitContainerDockerImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._name = value.name;
    }
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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

export class DuploServiceInitContainerDockerImageList extends cdktf.ComplexList {
  public internalValue? : DuploServiceInitContainerDockerImage[] | cdktf.IResolvable

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
  public get(index: number): DuploServiceInitContainerDockerImageOutputReference {
    return new DuploServiceInitContainerDockerImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DuploServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#create DuploService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#delete DuploService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#update DuploService#update}
  */
  readonly update?: string;
}

export function duploServiceTimeoutsToTerraform(struct?: DuploServiceTimeouts | cdktf.IResolvable): any {
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


export function duploServiceTimeoutsToHclTerraform(struct?: DuploServiceTimeouts | cdktf.IResolvable): any {
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

export class DuploServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DuploServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DuploServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service duplocloud_duplo_service}
*/
export class DuploService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_duplo_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DuploService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DuploService to import
  * @param importFromId The id of the existing DuploService that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DuploService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_duplo_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/duplo_service duplocloud_duplo_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DuploServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DuploServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_duplo_service',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.29',
        providerVersionConstraint: '0.11.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentPlatform = config.agentPlatform;
    this._allocationTags = config.allocationTags;
    this._anyHostAllowed = config.anyHostAllowed;
    this._appName = config.appName;
    this._cloud = config.cloud;
    this._cloudCredsFromK8SServiceAccount = config.cloudCredsFromK8SServiceAccount;
    this._commands = config.commands;
    this._dockerImage = config.dockerImage;
    this._extraConfig = config.extraConfig;
    this._forceRecreateOnVolumesChange = config.forceRecreateOnVolumesChange;
    this._forceStatefulSet = config.forceStatefulSet;
    this._hpaSpecs = config.hpaSpecs;
    this._id = config.id;
    this._isDaemonset = config.isDaemonset;
    this._isUniqueK8SNodeRequired = config.isUniqueK8SNodeRequired;
    this._lbSyncedDeployment = config.lbSyncedDeployment;
    this._name = config.name;
    this._otherDockerConfig = config.otherDockerConfig;
    this._otherDockerHostConfig = config.otherDockerHostConfig;
    this._replicaCollocationAllowed = config.replicaCollocationAllowed;
    this._replicas = config.replicas;
    this._replicasMatchingAsgName = config.replicasMatchingAsgName;
    this._shouldSpreadAcrossZones = config.shouldSpreadAcrossZones;
    this._tenantId = config.tenantId;
    this._volumes = config.volumes;
    this._initContainerDockerImage.internalValue = config.initContainerDockerImage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_platform - computed: false, optional: true, required: false
  private _agentPlatform?: number; 
  public get agentPlatform() {
    return this.getNumberAttribute('agent_platform');
  }
  public set agentPlatform(value: number) {
    this._agentPlatform = value;
  }
  public resetAgentPlatform() {
    this._agentPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPlatformInput() {
    return this._agentPlatform;
  }

  // allocation_tags - computed: false, optional: true, required: false
  private _allocationTags?: string; 
  public get allocationTags() {
    return this.getStringAttribute('allocation_tags');
  }
  public set allocationTags(value: string) {
    this._allocationTags = value;
  }
  public resetAllocationTags() {
    this._allocationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationTagsInput() {
    return this._allocationTags;
  }

  // any_host_allowed - computed: false, optional: true, required: false
  private _anyHostAllowed?: boolean | cdktf.IResolvable; 
  public get anyHostAllowed() {
    return this.getBooleanAttribute('any_host_allowed');
  }
  public set anyHostAllowed(value: boolean | cdktf.IResolvable) {
    this._anyHostAllowed = value;
  }
  public resetAnyHostAllowed() {
    this._anyHostAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyHostAllowedInput() {
    return this._anyHostAllowed;
  }

  // app_name - computed: true, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: number; 
  public get cloud() {
    return this.getNumberAttribute('cloud');
  }
  public set cloud(value: number) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // cloud_creds_from_k8s_service_account - computed: false, optional: true, required: false
  private _cloudCredsFromK8SServiceAccount?: boolean | cdktf.IResolvable; 
  public get cloudCredsFromK8SServiceAccount() {
    return this.getBooleanAttribute('cloud_creds_from_k8s_service_account');
  }
  public set cloudCredsFromK8SServiceAccount(value: boolean | cdktf.IResolvable) {
    this._cloudCredsFromK8SServiceAccount = value;
  }
  public resetCloudCredsFromK8SServiceAccount() {
    this._cloudCredsFromK8SServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredsFromK8SServiceAccountInput() {
    return this._cloudCredsFromK8SServiceAccount;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string; 
  public get commands() {
    return this.getStringAttribute('commands');
  }
  public set commands(value: string) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // docker_image - computed: false, optional: false, required: true
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig?: string; 
  public get extraConfig() {
    return this.getStringAttribute('extra_config');
  }
  public set extraConfig(value: string) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
  }

  // force_recreate_on_volumes_change - computed: false, optional: true, required: false
  private _forceRecreateOnVolumesChange?: boolean | cdktf.IResolvable; 
  public get forceRecreateOnVolumesChange() {
    return this.getBooleanAttribute('force_recreate_on_volumes_change');
  }
  public set forceRecreateOnVolumesChange(value: boolean | cdktf.IResolvable) {
    this._forceRecreateOnVolumesChange = value;
  }
  public resetForceRecreateOnVolumesChange() {
    this._forceRecreateOnVolumesChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRecreateOnVolumesChangeInput() {
    return this._forceRecreateOnVolumesChange;
  }

  // force_stateful_set - computed: false, optional: true, required: false
  private _forceStatefulSet?: boolean | cdktf.IResolvable; 
  public get forceStatefulSet() {
    return this.getBooleanAttribute('force_stateful_set');
  }
  public set forceStatefulSet(value: boolean | cdktf.IResolvable) {
    this._forceStatefulSet = value;
  }
  public resetForceStatefulSet() {
    this._forceStatefulSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStatefulSetInput() {
    return this._forceStatefulSet;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // fqdn_ex - computed: true, optional: false, required: false
  public get fqdnEx() {
    return this.getStringAttribute('fqdn_ex');
  }

  // hpa_specs - computed: true, optional: true, required: false
  private _hpaSpecs?: string; 
  public get hpaSpecs() {
    return this.getStringAttribute('hpa_specs');
  }
  public set hpaSpecs(value: string) {
    this._hpaSpecs = value;
  }
  public resetHpaSpecs() {
    this._hpaSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpaSpecsInput() {
    return this._hpaSpecs;
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

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // is_daemonset - computed: false, optional: true, required: false
  private _isDaemonset?: boolean | cdktf.IResolvable; 
  public get isDaemonset() {
    return this.getBooleanAttribute('is_daemonset');
  }
  public set isDaemonset(value: boolean | cdktf.IResolvable) {
    this._isDaemonset = value;
  }
  public resetIsDaemonset() {
    this._isDaemonset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDaemonsetInput() {
    return this._isDaemonset;
  }

  // is_unique_k8s_node_required - computed: false, optional: true, required: false
  private _isUniqueK8SNodeRequired?: boolean | cdktf.IResolvable; 
  public get isUniqueK8SNodeRequired() {
    return this.getBooleanAttribute('is_unique_k8s_node_required');
  }
  public set isUniqueK8SNodeRequired(value: boolean | cdktf.IResolvable) {
    this._isUniqueK8SNodeRequired = value;
  }
  public resetIsUniqueK8SNodeRequired() {
    this._isUniqueK8SNodeRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUniqueK8SNodeRequiredInput() {
    return this._isUniqueK8SNodeRequired;
  }

  // lb_synced_deployment - computed: false, optional: true, required: false
  private _lbSyncedDeployment?: boolean | cdktf.IResolvable; 
  public get lbSyncedDeployment() {
    return this.getBooleanAttribute('lb_synced_deployment');
  }
  public set lbSyncedDeployment(value: boolean | cdktf.IResolvable) {
    this._lbSyncedDeployment = value;
  }
  public resetLbSyncedDeployment() {
    this._lbSyncedDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbSyncedDeploymentInput() {
    return this._lbSyncedDeployment;
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

  // other_docker_config - computed: true, optional: true, required: false
  private _otherDockerConfig?: string; 
  public get otherDockerConfig() {
    return this.getStringAttribute('other_docker_config');
  }
  public set otherDockerConfig(value: string) {
    this._otherDockerConfig = value;
  }
  public resetOtherDockerConfig() {
    this._otherDockerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDockerConfigInput() {
    return this._otherDockerConfig;
  }

  // other_docker_host_config - computed: false, optional: true, required: false
  private _otherDockerHostConfig?: string; 
  public get otherDockerHostConfig() {
    return this.getStringAttribute('other_docker_host_config');
  }
  public set otherDockerHostConfig(value: string) {
    this._otherDockerHostConfig = value;
  }
  public resetOtherDockerHostConfig() {
    this._otherDockerHostConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDockerHostConfigInput() {
    return this._otherDockerHostConfig;
  }

  // parent_domain - computed: true, optional: false, required: false
  public get parentDomain() {
    return this.getStringAttribute('parent_domain');
  }

  // replica_collocation_allowed - computed: true, optional: true, required: false
  private _replicaCollocationAllowed?: boolean | cdktf.IResolvable; 
  public get replicaCollocationAllowed() {
    return this.getBooleanAttribute('replica_collocation_allowed');
  }
  public set replicaCollocationAllowed(value: boolean | cdktf.IResolvable) {
    this._replicaCollocationAllowed = value;
  }
  public resetReplicaCollocationAllowed() {
    this._replicaCollocationAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCollocationAllowedInput() {
    return this._replicaCollocationAllowed;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // replicas_matching_asg_name - computed: false, optional: true, required: false
  private _replicasMatchingAsgName?: string; 
  public get replicasMatchingAsgName() {
    return this.getStringAttribute('replicas_matching_asg_name');
  }
  public set replicasMatchingAsgName(value: string) {
    this._replicasMatchingAsgName = value;
  }
  public resetReplicasMatchingAsgName() {
    this._replicasMatchingAsgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasMatchingAsgNameInput() {
    return this._replicasMatchingAsgName;
  }

  // should_spread_across_zones - computed: false, optional: true, required: false
  private _shouldSpreadAcrossZones?: boolean | cdktf.IResolvable; 
  public get shouldSpreadAcrossZones() {
    return this.getBooleanAttribute('should_spread_across_zones');
  }
  public set shouldSpreadAcrossZones(value: boolean | cdktf.IResolvable) {
    this._shouldSpreadAcrossZones = value;
  }
  public resetShouldSpreadAcrossZones() {
    this._shouldSpreadAcrossZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSpreadAcrossZonesInput() {
    return this._shouldSpreadAcrossZones;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DuploServiceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string; 
  public get volumes() {
    return this.getStringAttribute('volumes');
  }
  public set volumes(value: string) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }

  // init_container_docker_image - computed: false, optional: true, required: false
  private _initContainerDockerImage = new DuploServiceInitContainerDockerImageList(this, "init_container_docker_image", false);
  public get initContainerDockerImage() {
    return this._initContainerDockerImage;
  }
  public putInitContainerDockerImage(value: DuploServiceInitContainerDockerImage[] | cdktf.IResolvable) {
    this._initContainerDockerImage.internalValue = value;
  }
  public resetInitContainerDockerImage() {
    this._initContainerDockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerDockerImageInput() {
    return this._initContainerDockerImage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DuploServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DuploServiceTimeouts) {
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
      agent_platform: cdktf.numberToTerraform(this._agentPlatform),
      allocation_tags: cdktf.stringToTerraform(this._allocationTags),
      any_host_allowed: cdktf.booleanToTerraform(this._anyHostAllowed),
      app_name: cdktf.stringToTerraform(this._appName),
      cloud: cdktf.numberToTerraform(this._cloud),
      cloud_creds_from_k8s_service_account: cdktf.booleanToTerraform(this._cloudCredsFromK8SServiceAccount),
      commands: cdktf.stringToTerraform(this._commands),
      docker_image: cdktf.stringToTerraform(this._dockerImage),
      extra_config: cdktf.stringToTerraform(this._extraConfig),
      force_recreate_on_volumes_change: cdktf.booleanToTerraform(this._forceRecreateOnVolumesChange),
      force_stateful_set: cdktf.booleanToTerraform(this._forceStatefulSet),
      hpa_specs: cdktf.stringToTerraform(this._hpaSpecs),
      id: cdktf.stringToTerraform(this._id),
      is_daemonset: cdktf.booleanToTerraform(this._isDaemonset),
      is_unique_k8s_node_required: cdktf.booleanToTerraform(this._isUniqueK8SNodeRequired),
      lb_synced_deployment: cdktf.booleanToTerraform(this._lbSyncedDeployment),
      name: cdktf.stringToTerraform(this._name),
      other_docker_config: cdktf.stringToTerraform(this._otherDockerConfig),
      other_docker_host_config: cdktf.stringToTerraform(this._otherDockerHostConfig),
      replica_collocation_allowed: cdktf.booleanToTerraform(this._replicaCollocationAllowed),
      replicas: cdktf.numberToTerraform(this._replicas),
      replicas_matching_asg_name: cdktf.stringToTerraform(this._replicasMatchingAsgName),
      should_spread_across_zones: cdktf.booleanToTerraform(this._shouldSpreadAcrossZones),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      volumes: cdktf.stringToTerraform(this._volumes),
      init_container_docker_image: cdktf.listMapper(duploServiceInitContainerDockerImageToTerraform, true)(this._initContainerDockerImage.internalValue),
      timeouts: duploServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_platform: {
        value: cdktf.numberToHclTerraform(this._agentPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allocation_tags: {
        value: cdktf.stringToHclTerraform(this._allocationTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      any_host_allowed: {
        value: cdktf.booleanToHclTerraform(this._anyHostAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.numberToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud_creds_from_k8s_service_account: {
        value: cdktf.booleanToHclTerraform(this._cloudCredsFromK8SServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      commands: {
        value: cdktf.stringToHclTerraform(this._commands),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_image: {
        value: cdktf.stringToHclTerraform(this._dockerImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_config: {
        value: cdktf.stringToHclTerraform(this._extraConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_recreate_on_volumes_change: {
        value: cdktf.booleanToHclTerraform(this._forceRecreateOnVolumesChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_stateful_set: {
        value: cdktf.booleanToHclTerraform(this._forceStatefulSet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hpa_specs: {
        value: cdktf.stringToHclTerraform(this._hpaSpecs),
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
      is_daemonset: {
        value: cdktf.booleanToHclTerraform(this._isDaemonset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_unique_k8s_node_required: {
        value: cdktf.booleanToHclTerraform(this._isUniqueK8SNodeRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lb_synced_deployment: {
        value: cdktf.booleanToHclTerraform(this._lbSyncedDeployment),
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
      other_docker_config: {
        value: cdktf.stringToHclTerraform(this._otherDockerConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_docker_host_config: {
        value: cdktf.stringToHclTerraform(this._otherDockerHostConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_collocation_allowed: {
        value: cdktf.booleanToHclTerraform(this._replicaCollocationAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replicas_matching_asg_name: {
        value: cdktf.stringToHclTerraform(this._replicasMatchingAsgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_spread_across_zones: {
        value: cdktf.booleanToHclTerraform(this._shouldSpreadAcrossZones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volumes: {
        value: cdktf.stringToHclTerraform(this._volumes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init_container_docker_image: {
        value: cdktf.listMapperHcl(duploServiceInitContainerDockerImageToHclTerraform, true)(this._initContainerDockerImage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DuploServiceInitContainerDockerImageList",
      },
      timeouts: {
        value: duploServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DuploServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
