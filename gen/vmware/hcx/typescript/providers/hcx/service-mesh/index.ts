// https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceMeshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#app_path_resiliency_enabled ServiceMesh#app_path_resiliency_enabled}
  */
  readonly appPathResiliencyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#force_delete ServiceMesh#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#id ServiceMesh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#local_compute_profile ServiceMesh#local_compute_profile}
  */
  readonly localComputeProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#name ServiceMesh#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#nb_appliances ServiceMesh#nb_appliances}
  */
  readonly nbAppliances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#remote_compute_profile ServiceMesh#remote_compute_profile}
  */
  readonly remoteComputeProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#site_pairing ServiceMesh#site_pairing}
  */
  readonly sitePairing: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#tcp_flow_conditioning_enabled ServiceMesh#tcp_flow_conditioning_enabled}
  */
  readonly tcpFlowConditioningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#uplink_max_bandwidth ServiceMesh#uplink_max_bandwidth}
  */
  readonly uplinkMaxBandwidth?: number;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#service ServiceMesh#service}
  */
  readonly service: ServiceMeshService[] | cdktf.IResolvable;
}
export interface ServiceMeshAppliancesId {
}

export function serviceMeshAppliancesIdToTerraform(struct?: ServiceMeshAppliancesId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceMeshAppliancesIdToHclTerraform(struct?: ServiceMeshAppliancesId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceMeshAppliancesIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMeshAppliancesId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshAppliancesId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class ServiceMeshAppliancesIdList extends cdktf.ComplexList {

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
  public get(index: number): ServiceMeshAppliancesIdOutputReference {
    return new ServiceMeshAppliancesIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMeshService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#name ServiceMesh#name}
  */
  readonly name: string;
}

export function serviceMeshServiceToTerraform(struct?: ServiceMeshService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function serviceMeshServiceToHclTerraform(struct?: ServiceMeshService | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMeshServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMeshService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMeshService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ServiceMeshServiceList extends cdktf.ComplexList {
  public internalValue? : ServiceMeshService[] | cdktf.IResolvable

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
  public get(index: number): ServiceMeshServiceOutputReference {
    return new ServiceMeshServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh hcx_service_mesh}
*/
export class ServiceMesh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcx_service_mesh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceMesh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceMesh to import
  * @param importFromId The id of the existing ServiceMesh that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceMesh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcx_service_mesh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs/resources/service_mesh hcx_service_mesh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceMeshConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceMeshConfig) {
    super(scope, id, {
      terraformResourceType: 'hcx_service_mesh',
      terraformGeneratorMetadata: {
        providerName: 'hcx',
        providerVersion: '0.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appPathResiliencyEnabled = config.appPathResiliencyEnabled;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._localComputeProfile = config.localComputeProfile;
    this._name = config.name;
    this._nbAppliances = config.nbAppliances;
    this._remoteComputeProfile = config.remoteComputeProfile;
    this._sitePairing = config.sitePairing;
    this._tcpFlowConditioningEnabled = config.tcpFlowConditioningEnabled;
    this._uplinkMaxBandwidth = config.uplinkMaxBandwidth;
    this._service.internalValue = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_path_resiliency_enabled - computed: false, optional: true, required: false
  private _appPathResiliencyEnabled?: boolean | cdktf.IResolvable; 
  public get appPathResiliencyEnabled() {
    return this.getBooleanAttribute('app_path_resiliency_enabled');
  }
  public set appPathResiliencyEnabled(value: boolean | cdktf.IResolvable) {
    this._appPathResiliencyEnabled = value;
  }
  public resetAppPathResiliencyEnabled() {
    this._appPathResiliencyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPathResiliencyEnabledInput() {
    return this._appPathResiliencyEnabled;
  }

  // appliances_id - computed: true, optional: false, required: false
  private _appliancesId = new ServiceMeshAppliancesIdList(this, "appliances_id", false);
  public get appliancesId() {
    return this._appliancesId;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // local_compute_profile - computed: false, optional: false, required: true
  private _localComputeProfile?: string; 
  public get localComputeProfile() {
    return this.getStringAttribute('local_compute_profile');
  }
  public set localComputeProfile(value: string) {
    this._localComputeProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localComputeProfileInput() {
    return this._localComputeProfile;
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

  // nb_appliances - computed: false, optional: true, required: false
  private _nbAppliances?: number; 
  public get nbAppliances() {
    return this.getNumberAttribute('nb_appliances');
  }
  public set nbAppliances(value: number) {
    this._nbAppliances = value;
  }
  public resetNbAppliances() {
    this._nbAppliances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbAppliancesInput() {
    return this._nbAppliances;
  }

  // remote_compute_profile - computed: false, optional: false, required: true
  private _remoteComputeProfile?: string; 
  public get remoteComputeProfile() {
    return this.getStringAttribute('remote_compute_profile');
  }
  public set remoteComputeProfile(value: string) {
    this._remoteComputeProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteComputeProfileInput() {
    return this._remoteComputeProfile;
  }

  // site_pairing - computed: false, optional: false, required: true
  private _sitePairing?: { [key: string]: string }; 
  public get sitePairing() {
    return this.getStringMapAttribute('site_pairing');
  }
  public set sitePairing(value: { [key: string]: string }) {
    this._sitePairing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePairingInput() {
    return this._sitePairing;
  }

  // tcp_flow_conditioning_enabled - computed: false, optional: true, required: false
  private _tcpFlowConditioningEnabled?: boolean | cdktf.IResolvable; 
  public get tcpFlowConditioningEnabled() {
    return this.getBooleanAttribute('tcp_flow_conditioning_enabled');
  }
  public set tcpFlowConditioningEnabled(value: boolean | cdktf.IResolvable) {
    this._tcpFlowConditioningEnabled = value;
  }
  public resetTcpFlowConditioningEnabled() {
    this._tcpFlowConditioningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlowConditioningEnabledInput() {
    return this._tcpFlowConditioningEnabled;
  }

  // uplink_max_bandwidth - computed: false, optional: true, required: false
  private _uplinkMaxBandwidth?: number; 
  public get uplinkMaxBandwidth() {
    return this.getNumberAttribute('uplink_max_bandwidth');
  }
  public set uplinkMaxBandwidth(value: number) {
    this._uplinkMaxBandwidth = value;
  }
  public resetUplinkMaxBandwidth() {
    this._uplinkMaxBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkMaxBandwidthInput() {
    return this._uplinkMaxBandwidth;
  }

  // service - computed: false, optional: false, required: true
  private _service = new ServiceMeshServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: ServiceMeshService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_path_resiliency_enabled: cdktf.booleanToTerraform(this._appPathResiliencyEnabled),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      local_compute_profile: cdktf.stringToTerraform(this._localComputeProfile),
      name: cdktf.stringToTerraform(this._name),
      nb_appliances: cdktf.numberToTerraform(this._nbAppliances),
      remote_compute_profile: cdktf.stringToTerraform(this._remoteComputeProfile),
      site_pairing: cdktf.hashMapper(cdktf.stringToTerraform)(this._sitePairing),
      tcp_flow_conditioning_enabled: cdktf.booleanToTerraform(this._tcpFlowConditioningEnabled),
      uplink_max_bandwidth: cdktf.numberToTerraform(this._uplinkMaxBandwidth),
      service: cdktf.listMapper(serviceMeshServiceToTerraform, true)(this._service.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_path_resiliency_enabled: {
        value: cdktf.booleanToHclTerraform(this._appPathResiliencyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      local_compute_profile: {
        value: cdktf.stringToHclTerraform(this._localComputeProfile),
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
      nb_appliances: {
        value: cdktf.numberToHclTerraform(this._nbAppliances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_compute_profile: {
        value: cdktf.stringToHclTerraform(this._remoteComputeProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_pairing: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sitePairing),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tcp_flow_conditioning_enabled: {
        value: cdktf.booleanToHclTerraform(this._tcpFlowConditioningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uplink_max_bandwidth: {
        value: cdktf.numberToHclTerraform(this._uplinkMaxBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service: {
        value: cdktf.listMapperHcl(serviceMeshServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMeshServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
